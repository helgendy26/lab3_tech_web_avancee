let joueurs = [
  { "id": 1, "name": "Vinícius Júnior", "club": "Real Madrid", "country": "Brazil", "position": "Forward" },
  { "id": 2, "name": "Rodri", "club": "Manchester City", "country": "Spain", "position": "Midfielder" },
  { "id": 3, "name": "Jude Bellingham", "club": "Real Madrid", "country": "England", "position": "Midfielder" },
  { "id": 4, "name": "Kylian Mbappé", "club": "Real Madrid", "country": "France", "position": "Forward" },
  { "id": 5, "name": "Erling Haaland", "club": "Manchester City", "country": "Norway", "position": "Forward" },
  { "id": 6, "name": "Lamine Yamal", "club": "FC Barcelona", "country": "Spain", "position": "Forward" },
  { "id": 7, "name": "Dani Carvajal", "club": "Real Madrid", "country": "Spain", "position": "Defender" },
  { "id": 8, "name": "Toni Kroos", "club": "Real Madrid", "country": "Germany", "position": "Midfielder" },
  { "id": 9, "name": "Lautaro Martínez", "club": "Inter Milan", "country": "Argentina", "position": "Forward" },
  { "id": 10, "name": "Harry Kane", "club": "Bayern Munich", "country": "England", "position": "Forward" },
  { "id": 11, "name": "Phil Foden", "club": "Manchester City", "country": "England", "position": "Forward" },
  { "id": 12, "name": "Florian Wirtz", "club": "Bayer Leverkusen", "country": "Germany", "position": "Midfielder" },
  { "id": 13, "name": "Granit Xhaka", "club": "Bayer Leverkusen", "country": "Switzerland", "position": "Midfielder" },
  { "id": 14, "name": "Cole Palmer", "club": "Chelsea", "country": "England", "position": "Midfielder" },
  { "id": 15, "name": "Nico Williams", "club": "Athletic Club", "country": "Spain", "position": "Forward" },
  { "id": 16, "name": "Dani Olmo", "club": "FC Barcelona", "country": "Spain", "position": "Midfielder" },
  { "id": 17, "name": "Emiliano Martínez", "club": "Aston Villa", "country": "Argentina", "position": "Goalkeeper" },
  { "id": 18, "name": "Antonio Rüdiger", "club": "Real Madrid", "country": "Germany", "position": "Defender" },
  { "id": 19, "name": "Ruben Dias", "club": "Manchester City", "country": "Portugal", "position": "Defender" },
  { "id": 20, "name": "William Saliba", "club": "Arsenal", "country": "France", "position": "Defender" },
  { "id": 21, "name": "Bukayo Saka", "club": "Arsenal", "country": "England", "position": "Forward" },
  { "id": 22, "name": "Martin Ødegaard", "club": "Arsenal", "country": "Norway", "position": "Midfielder" },
  { "id": 23, "name": "Declan Rice", "club": "Arsenal", "country": "England", "position": "Midfielder" },
  { "id": 24, "name": "Federico Valverde", "club": "Real Madrid", "country": "Uruguay", "position": "Midfielder" },
  { "id": 25, "name": "Mats Hummels", "club": "AS Roma", "country": "Germany", "position": "Defender" },
  { "id": 26, "name": "Artem Dovbyk", "club": "AS Roma", "country": "Ukraine", "position": "Forward" },
  { "id": 27, "name": "Alejandro Grimaldo", "club": "Bayer Leverkusen", "country": "Spain", "position": "Defender" },
  { "id": 28, "name": "Ademola Lookman", "club": "Atalanta", "country": "Nigeria", "position": "Forward" },
  { "id": 29, "name": "Hakan Çalhanoğlu", "club": "Inter Milan", "country": "Turkey", "position": "Midfielder" },
  { "id": 30, "name": "Vitinha", "club": "Paris Saint-Germain", "country": "Portugal", "position": "Midfielder" }
]

let votes = [
  {
    "id": 1,
    "nomineeId": 1,
    "voter": "Lucas (France Football)",
    "score": 10,
    "comment": "Décisif en Ligue des Champions et intenable en un contre un.",
    "timestamp": 1729000000000
  },
  {
    "id": 2,
    "nomineeId": 1,
    "voter": "Sarah (The Guardian)",
    "score": 8,
    "comment": "Très fort en club mais rendement plus mitigé en sélection.",
    "timestamp": 1729050000000
  },
  {
    "id": 3,
    "nomineeId": 2,
    "voter": "Matthieu (L'Équipe)",
    "score": 10,
    "comment": "Le métronome absolu de Manchester City et vainqueur de l'Euro 2024.",
    "timestamp": 1729100000000
  },
  {
    "id": 4,
    "nomineeId": 2,
    "voter": "Alexandre (Marca)",
    "score": 9,
    "comment": "Régularité impressionnante et quasi invincible sur toute l'année.",
    "timestamp": 1729150000000
  },
  {
    "id": 5,
    "nomineeId": 3,
    "voter": "Emma (BBC Sport)",
    "score": 9,
    "comment": "Première saison exceptionnelle au Real Madrid avec des buts capitaux.",
    "timestamp": 1729200000000
  },
  {
    "id": 6,
    "nomineeId": 4,
    "voter": "Julien (RMC Sport)",
    "score": 7,
    "comment": "Statistiques solides mais Euro et fin de saison européenne décevants.",
    "timestamp": 1729250000000
  },
  {
    "id": 7,
    "nomineeId": 6,
    "voter": "Chloé (Mundo Deportivo)",
    "score": 9,
    "comment": "Révélation absolue de l'Euro à seulement 17 ans, phénoménal.",
    "timestamp": 1729300000000
  },
  {
    "id": 8,
    "nomineeId": 7,
    "voter": "Romain (AS)",
    "score": 9,
    "comment": "Buteur en finale de C1 et champion d'Europe avec l'Espagne.",
    "timestamp": 1729350000000
  },
  {
    "id": 9,
    "nomineeId": 9,
    "voter": "Antoine (Gazzetta)",
    "score": 8,
    "comment": "Meilleur buteur de Serie A et vainqueur de la Copa América.",
    "timestamp": 1729400000000
  },
  {
    "id": 10,
    "nomineeId": 12,
    "voter": "David (Kicker)",
    "score": 8,
    "comment": "Artisan majeur de la saison presque parfaite du Bayer Leverkusen.",
    "timestamp": 1729450000000
  }
]

module.exports = {
  joueurs,
  votes
}