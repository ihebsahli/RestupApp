import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Reservations/reserv.css';

function ReservationForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [partySize, setPartySize] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle reservation submission
  };

  return (
    <Form className='res' onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-3">
          <Form.Group controlId="formName">
            <Form.Label>Nom complet</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}"
              title="Le nom doit contenir au moins 2 caractères alphabétiques"
            />
          </Form.Group>
        </div>
        <div className="col-md-3">
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Entrez votre numéro de téléphone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              pattern="^\d{8}$"
              title="Le numéro de téléphone doit contenir 8 chiffres"
            />
          </Form.Group>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Form.Group controlId="formReservationDate">
            <Form.Label>Date de réservation</Form.Label>
            <Form.Control
              type="date"
              placeholder="Entrez la date de réservation"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              title="La date doit être au format AAAA-MM-JJ"
            />
          </Form.Group>
        </div>
        <div className="col-md-3">
          <Form.Group controlId="formReservationTime">
            <Form.Label>Heure de réservation</Form.Label>
            <Form.Control
              type="time"
              placeholder="Entrez l'heure de réservation"
              value={reservationTime}
              onChange={(e) => setReservationTime(e.target.value)}
              required
              pattern="[0-9]{2}:[0-9]{2}"
              title="L'heure doit être au format HH:MM"
            />
          </Form.Group>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Form.Group controlId="formPartySize">
            <Form.Label>Nombre de personnes</Form.Label>
            <Form.Control
              type="number"
              placeholder="Entrez le nombre de personnes"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
              required
              min="1"
              max="10"
              title="Le nombre de personnes doit être compris entre 1 et 10"
            />
          </Form.Group>
        </div>
        <div className="col-md-3">
          <Form.Group controlId="formTableNumber">
            <Form.Label>Numéro de table</Form.Label>
            <Form.Control
              type="number"
              placeholder="Entrez le numéro de table"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              required
              min="1"
              max="20"
              title="Le numéro de table doit être compris entre 1 et 20"
            />
          </Form.Group>
        </div>
      </div>

      <Button className='btnR' variant="primary" type="submit">
        Réserver votre table
      </Button>
    </Form>
  );
}

export default ReservationForm;