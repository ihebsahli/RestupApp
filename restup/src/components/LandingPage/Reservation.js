import React, { useState } from 'react';
import { Fragment } from 'react';
import './reservation.css';

function ReservationForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reservationDateTime, setReservationDateTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // mettre en place la logique d'ajout de réservation ici
  };

  return (
    <Fragment>
      <div className='res'>Réserver Votre Place</div>
      <form className='formm' onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input className='put' type="email" value={email} placeholder="Saisir votre E-mail" onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Nom:
          <input className='put' type="text" value={firstName} placeholder="Saisir votre Nom" onChange={(event) => setFirstName(event.target.value)} required />
        </label>
        <label>
          Prénom:
          <input className='put' type="text" value={lastName} placeholder="Saisir votre Prénom" onChange={(event) => setLastName(event.target.value)} required />
        </label>
        <label>
          Numéro de téléphone:
          <input className='put' type="tel" value={phoneNumber} placeholder="Saisir votre Numéro"  onChange={(event) => setPhoneNumber(event.target.value)} required />
        </label>
        <label>
          Date et heure de réservation:
          <input className='put' type="datetime-local" value={reservationDateTime} onChange={(event) => setReservationDateTime(event.target.value)} required />
        </label>
        <label>
          Nombre de personnes:
          <input className='put' type="number" value={numberOfPeople} placeholder="Saisir le nombre de personnes" onChange={(event) => setNumberOfPeople(event.target.value)} required />
        </label>
        <button className='btnbtn' type="submit">Ajouter réservation</button>
      </form>
    </Fragment>
  );
}

export default ReservationForm; 