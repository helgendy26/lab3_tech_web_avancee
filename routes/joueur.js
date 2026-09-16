const express = require('express')
const router = express.Router()
const { joueurs } = require('../db')

// La racine du router ici correspondra à /joueurs
router.get('/', (req, res) => {
  const { search } = req.query

  if (search) {
    const filtres = joueurs.filter(j => 
      j.name.toLowerCase().includes(search.toLowerCase())
    )
    return res.status(200).json(filtres)
  }

  res.status(200).json(joueurs)
})

router.post('/', (req, res) => {
    const { name, club, country, position } = req.body

    if ( !name || !club || !country || !position ) {
        return res.status(400).json({
            error: 'Tous les champs sont requis : name, club, country, position'
        })
    }


    const newJoueur = {
        id :Date.now().toString(),
        name,
        club,
        country,
        position
    }
    

    joueurs.push(newJoueur)
    res.status(201).json(newJoueur)
})

router.get('/:nomineeId', (req, res) => {
  const nomineeId = parseInt(req.params.nomineeId, 10)

  const joueur = joueurs.find(u => u.id === nomineeId)

  if (!joueur) {
    return res.status(404).json({
      error: 'Aucun joueur à cet ID'
    })
  }

  res.status(200).json(joueur)
})

module.exports = router