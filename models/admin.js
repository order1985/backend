// user.js

var Sequelize = require('sequelize');
var sequelize = require('./db');

// 创建 model
var AdminUser = sequelize.define('adminUser', {
    userName: {
        type: Sequelize.STRING, // 指定值的类型
        unique: true,
        allowNull: false
        // field: 'user_name' // 指定存储在表中的键名称
    },
    // 没有指定 field，表中键名称则与对象键名相同，为 email
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i'],
            len: [6, 10],
        }
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL 创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true
});

// 创建表
// User.sync() 会创建表并且返回一个 Promise 对象
// 如果 force = true 则会把存在的表（如果 users 表已存在）先销毁再创建表
// 默认情况下 forse = false
var adminUser = AdminUser.sync({ force: false });

// 添加新用户
exports.addUser = function(userName, password) {
    return this.updateUser(userName, password);
};

// 通过用户名查找用户
exports.findByName = function(userName) {
    return AdminUser.findOne({ where: { userName: userName } });
};

exports.updateUser = function(userName, password) {
    return AdminUser.upsert({
        userName: userName,
        password: password
    });
}