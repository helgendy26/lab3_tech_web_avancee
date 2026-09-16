const express = require('express')
const app = express()

app.use(express.json())

// Import du router
const joueursRouter = require('./routes/joueur')

// Montage du router sur l'URL /joueurs
app.use('/joueurs', joueursRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`)
})