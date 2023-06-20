import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from 'react-bootstrap';
import '../Reservations/reserv.css';
import { useNavigate } from "react-router-dom";
import { addReservation } from "../../redux/actionCreator";

function ReservationForm() {

  const reservState = useSelector(state => state.newReducer.addReservation)
  const dispatch = useDispatch();

  const [nomComplet, setnomComplet] = useState('');
  const [numeroTelephone, setNumeroTelephone] = useState('');
  const [dateReservation, setDateReservation] = useState('');
  const [heureReservation, setHeureReservation] = useState('');
  const [nombrePersonnes, setNombrePersonnes] = useState('');
  const [numeroTable, setNumeroTable] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (reservState.loaded && reservState.data)
      navigate(`/reservation`);
  }, [reservState, navigate])

  const handleAddReservation = () => {
    const isValid = handleValidation();
    if (isValid) {
      dispatch(addReservation(nomComplet, numeroTelephone, dateReservation, heureReservation, nombrePersonnes, numeroTable));
      // redirect to the list of reservations page
    }
  };

  const handleValidation = () => {
    let isValid = true;
    if (nomComplet.trim() === "") {
      isValid = false;
      alert("name field is required.");
    }
    if (numeroTelephone.trim() === "") {
      isValid = false;
      alert("phoneNumber field is required.");
    }
    return isValid;
  };
  

  return (
    <Form className='res' onSubmit={handleAddReservation}>
      <div className="row">
        <div className="col-md-3">
          <Form.Group controlId="formName">
            <Form.Label>Nom complet</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre nom complet"
              value={nomComplet}
              onChange={(e) => setnomComplet(e.target.value)}
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
              value={numeroTelephone}
              onChange={(e) => setNumeroTelephone(e.target.value)}
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
              value={dateReservation}
              onChange={(e) => setDateReservation(e.target.value)}
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
              value={heureReservation}
              onChange={(e) => setHeureReservation(e.target.value)}
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
              value={nombrePersonnes}
              onChange={(e) => setNombrePersonnes(e.target.value)}
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
              value={numeroTable}
              onChange={(e) => setNumeroTable(e.target.value)}
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