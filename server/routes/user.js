const express = require('express');
const Note = require('../models/note');
const router = express.Router();
const User = require('../models/user')

router
      
  // login post
.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.login(req.body)
    res.send({...user, Password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

// register route
.post('/register', async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.register(req.body)
    res.send({...user, Password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

  .put('/updateNote/:noteid', async (req, res) => {
    try {
      await Note.updateNoteContent(req.params.noteid, req.body);
      res.send({ successMessage: 'Note updated successfully' });
    } catch (err) {
      res.status(400).send({ errorMessage: err.message });
    }
  })

  .delete('/deleteNote/:noteid', async (req, res) => {
    try {
      await Note.removeNote(req.params.noteid);
      res.send({ successMessage: 'Note deleted successfully' });
    } catch (err) {
      res.status(400).send({ errorMessage: err.message });
    }
  });

module.exports = router;
