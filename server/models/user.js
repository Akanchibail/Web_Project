const con = require("./db_connect");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS User (
      userid INT AUTO_INCREMENT PRIMARY KEY,
      firstname VARCHAR(240) NOT NULL,
      lastname VARCHAR(240) NOT NULL,
      username VARCHAR(240) NOT NULL,
      password VARCHAR(240) NOT NULL
    );
  `;

  await con.query(sql);
}

createTable();

// CRUD
// Read - Login User

async function login(user) {
  let userResult = await getUser(user.username);
  if (!userResult[0]) throw new Error("Username not found!!");
  if (userResult[0].password !== user.password)
    throw new Error("Password Incorrect!!");

  return userResult[0];
}

// Register (Create) New User
async function register(user) {
  let userResult = await getUser(user.username);
  if (userResult.length > 0) throw new Error("Username already in use!!");

  let sql = `
    INSERT INTO User(firstname, lastname, username, password)
    VALUES("${user.firstname}", "${user.lastname}", "${user.username}", "${user.password}")
  `;

  await con.query(sql);
  const newUser = await getUser(user.username);
  return newUser[0];
}

// Update - CRUD
async function editUser(user) {
  let updatedUser = await getUser(user.username);
  if (updatedUser.length > 0) throw new Error("Username not available!");

  let sql = `UPDATE User
    SET firstname = "${user.firstname}",
        lastname = "${user.lastname}",
        password = "${user.password}"
    WHERE userid = ${user.userid}
  `;
  await con.query(sql);
  updatedUser = await getUser(user.username);
  return updatedUser[0];
}

// Delete User
async function deleteUser(user) {
  let sql = `DELETE FROM User
    WHERE userid = ${user.userid}
  `;
  await con.query(sql);
}

// Useful functions
async function getUser(username) {
  let sql = `
    SELECT * FROM User 
    WHERE username = "${username}" 
  `;
  return await con.query(sql);
}

module.exports = { login, register, editUser, deleteUser };
