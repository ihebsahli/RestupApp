import React, { useEffect, useState } from 'react'
import Sidebar from '../layout/Sidebar'
import ReservationForm from './Reservastion';
import { getReservationss,deleteReservations } from '../../redux/actions/reservation'
import { useDispatch, useSelector } from 'react-redux';

function AllReservations() {

    const dispatch = useDispatch();

    const [Search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteReservations(id))
    };

    const reservation = useSelector((state) => state.reservations);
console.log(reservation);
    const { reservations, loading } = reservation;

    useEffect(() => { dispatch(getReservationss()) }, [])

    return loading || reservations === [] ? <h1>LOADING...</h1> : (

        <div class="layout-inner">

            <Sidebar />
            <ReservationForm />

            <div class="layout-content">

                <div class="container-fluid flex-grow-1 container-p-y">

                    <h4 class="font-weight-bold py-3 mb-0">Liste des réservations</h4>
                    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item">Réservations</li>
                            <li class="breadcrumb-item active">Liste </li>
                        </ol>
                    </div>
                    <div class="card">

                        <div class="card-header">Les Réservations</div>
                        <div class="col-md">
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control" onChange={(e) => handleChange(e)} placeholder="Search for..." />
                                    <span class="input-group-append">
                                        <button class="btn btn-secondary" type="button">Search!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <table class="table card-table">
                            <thead class="thead-light">
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

                                {reservations.filter(el => el.nomComplet.toLowerCase().includes(Search.toLowerCase())).map((x, i) =>
                                      <tr>
                                       <th scope="row">{x.nomComplet}</th>
                                       <td>{x.numeroTelephone}</td>
                                       <td>{x.dateReservation}</td>
                                       <td>{x.heureReservation}</td>
                                       <td>{x.nombrePersonnes}</td>
                                       <td>{x.numeroTable}</td>
                                       <td><button className='btn btn-danger feather icon-x-square' onClick={e => handleDelete(e, x._id)} ></button>
                                            <button className='btn btn-success feather icon-upload-cloud'></button>
                                        </td>
                                       </tr>)}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AllReservations
