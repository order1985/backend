var user = require('../user');

// 添加用户
// user.addUser('test1', 'abdefh').then(function() {
//     // 查询新添加的用户
//     return user.findByName('test');
// }).then(function(user) {
//     console.log('****************************');
//     console.log('user name:', user.userName);
//     console.log('user email:', user.password);
// });

user.getUsers().then(function(users) {
    console.log('>>>>>>>>>>>>the users: ' + JSON.stringify(users));
}).catch(function(e) {
    console.log('>>>>>>>>>>>>error');
});