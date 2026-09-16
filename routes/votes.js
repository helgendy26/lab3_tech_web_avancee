const express = require('express')
const router = express.Router()

const { joueurs, votes } = require('../db')

// GET /joueurs/:nomineeId/votes
// Récupère tous les votes d'un joueur
router.get('/:nomineeId/votes', (req, res) => {
  const nomineeId = parseInt(req.params.nomineeId, 10)

  const joueur = joueurs.find(j => j.id === nomineeId)

  if (!joueur) {
    return res.status(404).json({
      error: 'Aucun joueur à cet ID'
    })
  }

  const votesJoueur = votes.filter(v => v.nomineeId === nomineeId)

  res.status(200).json(votesJoueur)
})

// POST /joueurs/:nomineeId/votes
// Ajoute un vote à un joueur
router.post('/:nomineeId/votes', (req, res) => {
  const nomineeId = parseInt(req.params.nomineeId, 10)

  const joueur = joueurs.find(j => j.id === nomineeId)

  if (!joueur) {
    return res.status(404).json({
      error: 'Aucun joueur à cet ID'
    })
  }

  const { voter, score, comment } = req.body

  if (!voter || score === undefined || !comment) {
    return res.status(400).json({
      error: 'Tous les champs sont requis : voter, score, comment'
    })
  }

  if (score < 1 || score > 10) {
    return res.status(400).json({
      error: 'Le score doit être compris entre 1 et 10'
    })
  }

  const newVote = {
    id: Date.now(),
    nomineeId,
    voter,
    score,
    comment,
    timestamp: Date.now()
  }

  votes.push(newVote)

  res.status(201).json(newVote)
})

// GET /joueurs/:nomineeId/votes/:voteId
// Récupère un vote précis d'un joueur
router.get('/:nomineeId/votes/:voteId', (req, res) => {
  const nomineeId = parseInt(req.params.nomineeId, 10)
  const voteId = parseInt(req.params.voteId, 10)

  const joueur = joueurs.find(j => j.id === nomineeId)

  if (!joueur) {
    return res.status(404).json({
      error: 'Aucun joueur à cet ID'
    })
  }

  const vote = votes.find(v =>
    v.id === voteId && v.nomineeId === nomineeId
  )

  if (!vote) {
    return res.status(404).json({
      error: 'Aucun vote à cet ID pour ce joueur'
    })
  }

  res.status(200).json(vote)
})

module.exports = router