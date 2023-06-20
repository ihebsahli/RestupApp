import React from 'react'
import Sidebar from '../layout/Sidebar'

function Produit() {
    return (

        <div class="layout-inner">

           

            <div class="layout-content">

                <div class="container-fluid flex-grow-1 container-p-y">
                    <h4 class="font-weight-bold py-3 mb-0">Gestion des produits</h4>
                    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item">Menu</li>
                            <li class="breadcrumb-item active">Gestion des produits</li>
                        </ol>
                    </div>

                    <div class="card mb-4">
                        <h6 class="card-header">Default</h6>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label class="form-label">Nom de produit</label>
                                    <input type="text" class="form-control" placeholder="entrer le nom ..." />
                                    <div class="clearfix"></div>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Description</label>
                                    <input type="text" class="form-control" placeholder="entrer la Description ..." />
                                    <div class="clearfix"></div>
                                </div>
                                <div class="form-group ">
                                            <label class="form-label">Catégorie</label>
                                            <select class="custom-select">
                                                <option>Entrée</option>
                                                <option>Plat principal</option>
                                                <option>Dessert</option>
                                                <option>Boisson</option>
                                            </select>
                                        </div>
                                <div class="form-group">
                                    <label class="form-label">Prix</label>
                                    <input type="number" class="form-control" placeholder="entrer le prix en $" />
                                    <div class="clearfix"></div>
                                </div>
                                <div class="form-group">
                                    <label class="form-label w-100">Image</label>
                                    <input type="file" />
                                    <small class="form-text text-muted">Example block-level help text here.</small>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Produit
