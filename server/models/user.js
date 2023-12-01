const users = [
    {
        userid: 12345,
        username: "cathy123",
        password: "bestPswd12"
    },
    {
        userid: 55555,
        username: "fredburger2",
        password: "helloWorld42" 
    },
    {
        userid: 78942,
        username: "coolcathy",
        password: "%ic^ecream532"
    },
];

let getUsers = () =>users;

module.exports = { getUsers };