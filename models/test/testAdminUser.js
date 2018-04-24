var adminUser = require('../admin');

// 添加用户
adminUser.addUser('test', 'abdefh').then(function() {
    // 查询新添加的用户
    return adminUser.findByName('test');
}).then(function(adminUser) {
    console.log('****************************');
    console.log('user name:', adminUser.userName);
    console.log('user email:', adminUser.password);
});