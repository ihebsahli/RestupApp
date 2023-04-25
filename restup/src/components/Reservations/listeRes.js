import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ReservationForm from './reservation';

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  const handleReservationSubmit = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div>
        <h2 className='titR'>Réserver votre table</h2>
      <ReservationForm onReservationSubmit={handleReservationSubmit} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom complet</th>
            <th>Numéro de téléphone</th>
            <th>Date de réservation</th>
            <th>Heure de réservation</th>
            <th>Nombre de personnes</th>
            <th>Numéro de table</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.name}</td>
              <td>{reservation.phoneNumber}</td>
              <td>{reservation.reservationDate}</td>
              <td>{reservation.reservationTime}</td>
              <td>{reservation.partySize}</td>
              <td>{reservation.tableNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ReservationList;