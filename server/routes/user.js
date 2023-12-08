const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/getNote/:noteid', async (req, res) => {
    try {
      const note = await Note.findNote(req.params.noteid);
      res.send(note);
    } catch (err) {
      res.status(500).send({ errorMessage: err.message });
    }
  })

  .post('/createNote', async (req, res) => {
    try {
      await Note.createNote(req.body);
      res.status(201).send({ successMessage: 'Note created successfully' });
    } catch (err) {
      res.status(400).send({ errorMessage: err.message });
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
