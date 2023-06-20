import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ReservationForm from './reservation';
import { useDispatch, useSelector } from "react-redux";
import { deleteReservation, getReservationList } from "../../redux/actionCreator";
import '../Reservations/reserv.css';

function ReservationList() {
  const myList = useSelector((state) => state.newReducer.reservation);
  const [reservations, setReservations] = useState([]);
  const dispatch = useDispatch();

  const [Search, setSearch] = useState('');
  const [reservData, setReservData] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch(getReservationList());
  }, [dispatch]);

  useEffect(() => {
    if (myList.data && myList.loaded) {
      setReservData(myList.data)
    }
  }, [myList]);

  const handleReservationSubmit = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteReservation(id))
  };

  return (
    <div>
      <h2 className='titR'>Réserver votre table</h2>

      <ReservationForm onReservationSubmit={handleReservationSubmit} />
      <div className="input-group mb-3">
        <input type="text" className="search" onChange={(e) => handleChange(e)} placeholder="Search..." />
      </div>
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
          {myList.loaded && reservData.filter(el => el.nomComplet.toLowerCase().includes(Search.toLowerCase())).map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.nomComplet}</td>
              <td>{reservation.numeroTelephone}</td>
              <td>{reservation.dateReservation.substring(0, 10)}</td>
              <td>{reservation.heureReservation}</td>
              <td>{reservation.nombrePersonnes}</td>
              <td>{reservation.numeroTable}</td>
              <td>
                <button className="btn btn-danger" onClick={e => handleDelete(e, reservation._id)}>Delete</button>
                {/* <button className="btn btn-primary" onClick={() => handleEditClick(reservation)}>Modifier</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ReservationList;