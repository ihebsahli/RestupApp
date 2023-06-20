import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from 'react-bootstrap';
import '../Reservations/reserv.css';
import { useNavigate } from "react-router-dom";
import { addPlat } from "../../redux/actionCreator";

function MenuForm() {

  const reservState = useSelector(state => state.newReducer.addReservation)
  const dispatch = useDispatch();

  const [nomPlat, setNomPlat] = useState('');
  const [description, setDescription] = useState('');
  const [disponibilite, setDisponibilite] = useState('');
  const [tempsPreparation, setTempsPreparation] = useState('15');
  const [prix, setPrix] = useState('10');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (reservState.loaded && reservState.data)
      navigate(`/listplats`);
  }, [reservState, navigate])

  const handleAddPlat = () => {
    const isValid = handleValidation();
    if (isValid) {
      dispatch(addPlat(nomPlat, description, disponibilite, tempsPreparation, prix, image));
    }
  };

  const handleValidation = () => {
    let isValid = true;
    if (nomPlat.trim() === "") {
      isValid = false;
      alert("name field is required.");
    }
    if (description.trim() === "") {
      isValid = false;
      alert("description field is required.");
    }
    return isValid;
  };


  return (
    <Form className='formm' onSubmit={handleAddPlat}>
      <div className="row">
        <div className="col-md-3">
          <Form.Group controlId="formNomPlat">
            <Form.Label>Nom du plat</Form.Label>
            <Form.Control type="text" placeholder="Entrez le nom du plat" value={nomPlat} onChange={(e) => setNomPlat(e.target.value)} required />
          </Form.Group>
        </div>
        <div className="col-md-3">
          <Form.Group controlId="formDescription">
            <Form.Label>Description du plat</Form.Label>
            <Form.Control type="text" placeholder="Entrez la description du plat" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Form.Group controlId="formDisponibilite">
            <Form.Label>Disponibilité</Form.Label>
            <Form.Control type="text" placeholder="Entrez la disponibilité du plat" value={disponibilite} onChange={(e) => setDisponibilite(e.target.value)} required />
          </Form.Group>

        </div>
        <div className="col-md-3">

          <Form.Group controlId="formTempsPreparation">
            <Form.Label>Temps de préparation</Form.Label>
            <Form.Control type="number" placeholder="Entrez le temps de préparation du plat" value={tempsPreparation} onChange={(e) => setTempsPreparation(e.target.value)} required />
          </Form.Group>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Form.Group controlId="formPrix">
            <Form.Label>Prix du plat</Form.Label>
            <Form.Control type="number" placeholder="Entrez le prix du plat DT" value={prix} onChange={(e) => setPrix(e.target.value)} required />
          </Form.Group>

        </div>
        <div className="col-md-3">

          <Form.Group controlId="formImage">
            <Form.Label>Image du plat</Form.Label>
            <Form.Control type="text" placeholder="Entrez l'URL de l'image du plat" value={image} onChange={(e) => setImage(e.target.value)}  />
          </Form.Group>
        </div>
      </div>
      <Button variant="primary" type="submit">
        Ajouter le plat
      </Button>
    </Form>
  );
}

export default MenuForm;