const express = require('express');
const bodyParser = require('body-parser');
const Reservation = require('../models/Reservation');
const router = express.Router();
const auth = require('../middleware/auth');

// Route pour créer une réservation
router.post('/addreservation', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    const savedReservation = await reservation.save();
    res.json(savedReservation);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route pour récupérer toutes les réservations
router.get('/list', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route pour récupérer une réservation par son ID
router.get('/reservations/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).send(`Aucune réservation trouvée pour l'ID ${req.params.id}`);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route pour mettre à jour une réservation par son ID
router.put('/reservations/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).send(`Aucune réservation trouvée pour l'ID ${req.params.id}`);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route pour supprimer une réservation par son ID
router.delete('/deletereservation/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).json({ msg: 'Réservation non trouvée' });
    }
    res.json({ msg: 'Réservation supprimée' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
