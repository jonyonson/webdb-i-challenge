const express = require('express');

const server = express();

const db = require('./data/accounts-model.js')

server.use(express.json())

// your code

server.post('/', (req, res) => {
  db.add(req.body).then(account => {
    res.status(201).json(account)
  }).catch(err => {
    res.status(500).json({error: 'Trouble adding account to db'})
  })
})

server.get('/', (req, res) => {
  db.find().then(accounts => {
    res.status(200).json(accounts)
  }).catch(err => {
    res.status(500).json(accounts)
  })
})

server.get('/:id', (req, res) => {
  db.findById(req.params.id).then(account => {
    res.status(200).json(account)
  }).catch(err => {
    res.status(500).json({error: 'Error getting accesss to account with that ID'})
  })
})

server.delete('/:id', (req, res) => {
  db.remove(req.params.id).then(account => {
    res.status(200).json(account)
  }).catch(err => {
    res.status(500).json({error: 'Error deleting account with that specifiied id'})
  })
})

server.put('/:id', (req, res) => {
  db.update(req.params.id, req.body).then(account => {
    res.status(200).json(account)
  }).catch(err => {
    res.status(500).json({error: 'Erorr updating account with that id'})
  })
})

module.exports = server;
