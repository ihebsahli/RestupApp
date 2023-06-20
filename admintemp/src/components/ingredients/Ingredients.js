import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIngredientss } from '../../redux/actions/ingredients';

function Ingredients() {
  const [nomIngredient, setNomIngredient] = useState('');
  const [image, setImage] = useState('');
  const [prix, setPrix] = useState('');

  const dispatch = useDispatch();

  const handleAddIngredient = (e) => {
    e.preventDefault() ;
    dispatch(addIngredientss(nomIngredient, image, prix));
  };

  const handleImageChange = (e) => {
    // Handle image change logic here
  };

  return (
    <div class="layout-inner">
      <div class="layout-content">
        <div class="container-fluid flex-grow-1 container-p-y">
          <h4 class="font-weight-bold py-3 mb-0">Ajout des Ingredients</h4>
          <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
              <li class="breadcrumb-item">Ingrédients</li>
              <li class="breadcrumb-item active">Gestion des Ingredients</li>
            </ol>
          </div>

          <div class="card mb-4">
            <h6 class="card-header">Default</h6>
            <div class="card-body">
              <form onSubmit={handleAddIngredient}>
                <div class="form-group">
                  <label class="form-label">Nom d'Ingredient</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    value={nomIngredient}
                    name="nomIngredient"
                    onChange={(e) => setNomIngredient(e.target.value)}
                    id="NomIngredient"
                    placeholder="entrer le Nom Ingredient ..."
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Prix</label>
                  <input
                    type="number"
                    class="form-control form-control-lg"
                    value={prix}
                    name="prix"
                    onChange={(e) => setPrix(e.target.value)}
                    placeholder="entrer le prix en $"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="form-label w-100">Image</label>
                  <input type="file" onChange={handleImageChange} />
                  <small class="form-text text-muted">Example block-level help text here.</small>
                </div>

                <button  type="submit" className="btn btn-primary">
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;