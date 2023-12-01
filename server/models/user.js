const users = [
    {
        userId: 12345,
        userName: "cathy123",
        password: "bestPswd12"
    },
    {
        userId: 55555,
        userName: "fredburger2",
        password: "helloWorld42" 
    },
    {
        userId: 78942,
        userName: "coolcathy",
        password: "%ic^ecream532"
    },
];

let getUsers = () =>users;

module.exports = { getUsers };