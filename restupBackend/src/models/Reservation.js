const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    nomComplet: { type: String, required: true },
    numeroTelephone: { type: String, required: true },
    dateReservation: { type: Date, required: true },
    heureReservation: { type: String, required: true },
    nombrePersonnes: { type: Number, required: true },
    numeroTable: { type: Number, required: true }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;