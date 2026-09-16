const express = require('express')
const app = express()

app.use(express.json())

// Import des routers
const joueursRouter = require('./routes/joueur')
const votesRouter = require('./routes/votes')

// Montage des routers
app.use('/joueurs', joueursRouter)
app.use('/joueurs', votesRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`)
})