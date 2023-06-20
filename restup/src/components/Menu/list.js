import React, { useEffect, useState } from "react";
import '../Menu/list.css'
import { Table } from 'react-bootstrap';
import MenuForm from "./menu";
import { useDispatch, useSelector } from "react-redux";
import { getMenuList , deletePlat } from "../../redux/actionCreator";
const List = () => {

  const myMenu = useSelector((state) => state.newReducer.menu);
  const dispatch = useDispatch();

  const [Search, setSearch] = useState('');
  const [reservData, setReservData] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getMenuList());
  }, [dispatch]);

  useEffect(() => {
    if (myMenu.data && myMenu.loaded) {
      setReservData(myMenu.data)
    }
  }, [myMenu]);


  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletePlat(id))
  };




  return (
    <div>
      <h2 className='titR'>Notre Menu</h2>

      <MenuForm />
      <div className="input-group mb-3">
        <input type="text" className="search" onChange={(e) => handleChange(e)} placeholder="Search..." />
      </div>
      <Table striped bordered hover>

        <thead>
          <tr>
            <th>Nom de plat</th>
            <th>description</th>
            <th>disponibilite</th>
            <th>temps de Preparation</th>
            <th>prix</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {myMenu.loaded && reservData.filter(el => el.nomPlat.toLowerCase().includes(Search.toLowerCase())).map((plat, index) => (
            <tr key={index}>
              <td>{plat.nomPlat}</td>
              <td>{plat.description}</td>
              <td>{plat.disponibilite ? 'dispo' : 'pas dispo'}</td>
              <td>{plat.tempsPreparation}</td>
              <td>{plat.prix}</td>
              <td><img src={plat.image} alt="img" style={{ width: '50px', height: '50px' }} /></td>

              <td>
                <button className="btn btn-danger" onClick={e => handleDelete(e, plat._id)}>Delete</button>
                {/* <button className="btn btn-primary" onClick={() => handleEditClick()}>Modifier</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default List;
