import React, { useEffect } from "react";
import '../Menu/list.css'
import { useDispatch, useSelector } from "react-redux";
import { getMenuList } from "../../redux/actionCreator";
const List = () => {

  const myMenu = useSelector((state) => state.newReducer.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuList());
  }, [dispatch]);

  useEffect(() => {
    console.log(myMenu);
  }, [myMenu]);

  return (
    <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Ingredients</th>
      <th scope="col">Disponibilite</th>
      <th scope="col">Temps de Preparation</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
     
    </tr>
  </tbody>
</table>
  )
}

export default  List;
