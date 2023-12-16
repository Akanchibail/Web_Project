const con = require('./db_connect');

async function initializeNoteTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Note (
      noteid INT AUTO_INCREMENT PRIMARY KEY,
      content TEXT NOT NULL,
      userid INT,
      FOREIGN KEY (userid) REFERENCES User(userid)
    );
  `;

  await con.query(sql);
}

initializeNoteTable();

// CRUD operations for notes
async function findNote(noteid) {
  const sql = `SELECT * FROM Note WHERE noteid = ${noteid}`;
  return await con.query(sql);
}

async function createNote({ content, userid }) {
  const sql = `
    INSERT INTO Note (content, userid)
    VALUES ("${content}", ${userid})
  `;

  await con.query(sql);
}

const getNotes = async (userid) => {
  console.log(userid)
  try{
    const sql = `SELECT * FROM note  WHERE userid = ${userid}
    `;
  
    const notes = await con.query(sql);
    console.log(notes)
    return notes;
  }
  catch(e){
    console.log("Error occured", e);
  }
}

async function updateNoteContent(noteid, { content }) {
  const sql = `
    UPDATE Note
    SET content = "${content}"
    WHERE noteid = ${noteid}
  `;

  await con.query(sql);
}

async function removeNote(noteid) {
  const sql = `DELETE FROM Note WHERE noteid = ${noteid}`;
  await con.query(sql);
}

module.exports = { findNote, createNote, updateNoteContent, removeNote, getNotes };
