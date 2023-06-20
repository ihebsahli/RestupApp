import { API_HOST , API } from '../api/axios';
import axios from 'axios';
import {
    addPlatAction,loginAction ,deleteReservationAction, deletePlatAction , getDemandHistoryAction , getPlatsListAction,getReservationListAction,
    getHolidayRequestAction , addReservationAction , updateReservationAction , registerAction , getMenuListAction , deleteUserAction
} from './actions';
// import actionsAlert from "../alert/actions"
// const { alertSuccess, alertError } = actionsAlert;

/* get employee list  */

const login = (data) => {
    const URL = API_HOST + API.user.login;
    console.log(URL);
    return async (dispatch) => {
      dispatch(loginAction.request());
      console.log(data);
      axios.post(URL, data).then(
        (res) => {
          dispatch(loginAction.success(res.data));
          // dispatch(alertSuccess({ msg: 'Connexion réussie', type: 'success' }));
        },
        (err) => {
          dispatch(loginAction.failure(err));
          console.log(err);
          // dispatch(alertError({ msg: 'Echec de connexion', type: 'error' }));
        }
      );
    };
  };

const getPlatsList = () => {
    const URL = API_HOST + API.plat.platsList ;
    return async dispatch => {
        dispatch(getPlatsListAction.request());
        axios.get(URL).then(
            (res) => {
               dispatch(getPlatsListAction.success(res.data));
               localStorage.setItem('token', res.data.token)
            },
            (err) => {
                dispatch(getPlatsListAction.failure(err));
                console.log(err);
            }
        )
    };
};


const getMenuList = () => {
    const URL = API_HOST + '/plats/allplats' ;
    return async dispatch => {
        dispatch(getMenuListAction.request());
        axios.get(URL).then(
            (res) => {
               dispatch(getMenuListAction.success(res.data));
            },
            (err) => {
                dispatch(getMenuListAction.failure(err));
                console.log(err);
            }
        )
    };
};

const getReservationList = () => {
    const URL = API_HOST + API.reservation.list ;
    return async dispatch => {
        dispatch(getReservationListAction.request());
        axios.get(URL).then(
            (res) => {
               dispatch(getReservationListAction.success(res.data));
            },
            (err) => {
                dispatch(getReservationListAction.failure(err));
                console.log(err);
            }
        )
    };
};

const getHolidayRequest = () => {
    const URL = API_HOST + API.user.waitHolidayAuth
    return async dispatch => {
        dispatch(getHolidayRequestAction.request())
        axios.get(URL).then(
            (res) => {
                let data = res.data.data.concat(res.data.auth).map((el, index) => {
                    return { ...el, ...{ key: index } }
                })
                dispatch(getHolidayRequestAction.success({ data: data, total_count: res.data.total_count }));
            },
            (err) => {
                dispatch(getHolidayRequestAction.failure(err))
                console.log(err);
            }
        )
    };
};
const getDemandHistory = () => {
    const URL = API_HOST + API.conge.acceptedRefused
    return async dispatch => {
        dispatch(getDemandHistoryAction.request())
        axios.get(URL).then(
            (res) => {
                let data = res.data.data.concat(res.data.auth).map((el, index) => {
                    return { ...el, ...{ key: index } }
                })
                dispatch(getDemandHistoryAction.success({ data: data, total_count: res.data.total_count }));
            },
            (err) => {
                dispatch(getDemandHistoryAction.failure(err))
                console.log(err);
            }
        )
    };
};

const updateReservation = (data) => {
    const {id} = data 

    const URL = API_HOST + API.reservation.updateReservation +'/'+ id;
    return async dispatch => {
        dispatch(updateReservationAction.request())
        axios.put(URL, data).then(
            (res) => {
                dispatch(updateReservationAction.success(true))
                // dispatch(getReservationList())
                console.log(res)
                // dispatch(alertSuccess({ msg: 'Demande traitée avec succés', type: 'success' }));
            },
            (err) => {
                dispatch(updateReservationAction.failure(err))
                console.log(err);
                // dispatch(alertError({ msg: 'Echec de traitement de demande', type: 'error' }));
            }
        )
    }
}

// const updateAuthStatus = (id, veh) => {
//     const URL = API_HOST + API.authorisation.updateStatus + id;
//     return async dispatch => {
//         dispatch(updateDemandStatusAction.request())
//         axios.put(URL, veh).then(
//             (res) => {
//                 dispatch(updateDemandStatusAction.success(true))
//                 // dispatch(alertSuccess({ msg: 'Demande traitée avec succés', type: 'success' }));
//             },
//             (err) => {
//                 dispatch(updateDemandStatusAction.failure(err))
//                 console.log(err);
//                 // dispatch(alertError({ msg: 'Echec de traitement de demande', type: 'error' }));
//             }
//         )
//     }
// }

const addReservation = (nomComplet, numeroTelephone, dateReservation,heureReservation , nombrePersonnes , numeroTable) => {
    const data = {
        nomComplet,
        numeroTelephone,
        dateReservation,
        heureReservation,
        nombrePersonnes,
        numeroTable
    }
    const URL = API_HOST + API.reservation.addreservation;
    return async dispatch => {
        dispatch(addReservationAction.request())
        axios.post(URL, data).then(
            (res) => {
               dispatch(addReservationAction.success(res))
                // dispatch(alertSuccess({ msg: 'Employé ajouté avec succés', type: 'success' }));
                //  dispatch(getReservationList());
            },
            (err) => {
                dispatch(addReservationAction.failure(err))
                console.log(err);
                // dispatch(alertError({ msg: 'Echec d\'ajout d\'employé', type: 'error' }));
            }
        )
    }
}

const addPlat = (nomPlat, description, disponibilite,tempsPreparation , prix , image) => {
    const data = {
        nomPlat,
        description,
        disponibilite,
        tempsPreparation,
        prix,
        image
    }
    const URL = API_HOST + API.menu.addPlat;
    return async dispatch => {
        dispatch(addPlatAction.request())
        axios.post(URL, data).then(
            (res) => {
               dispatch(addPlatAction.success(res))
                // dispatch(alertSuccess({ msg: 'Employé ajouté avec succés', type: 'success' }));
                //  dispatch(getReservationList());
            },
            (err) => {
                dispatch(addPlatAction.failure(err))
                console.log(err);
                // dispatch(alertError({ msg: 'Echec d\'ajout d\'employé', type: 'error' }));
            }
        )
    }
}

const register = (firstname,lastname,email,  role,password,phoneNumber) => {
    const data = {
        firstname,
        lastname,
        email,
        role,
        password,
        phoneNumber
    }
    const URL = API_HOST + API.user.register;
    console.log(URL);
    return async dispatch => {
        dispatch(registerAction.request())
        axios.post(URL, data).then(
            (res) => {
               dispatch(registerAction.success(res))
                // dispatch(alertSuccess({ msg: 'Employé ajouté avec succés', type: 'success' }));
                 
            },
            (err) => {
                dispatch(registerAction.failure(err))
                console.log(err);
                // dispatch(alertError({ msg: 'Echec d\'ajout d\'employé', type: 'error' }));
            }
        )
    }
}
/* get employee detail */
// const getEmployee = (id) => {
//     const URL = API_HOST + API.user.user + id + '/';
//     return async dispatch => {
//         dispatch(getEmployeeAction.request())
//         axios.get(URL).then(
//             (res) => {
//                 res.data.key = res.data.id;
//                 dispatch(getEmployeeAction.success(res.data));
//             },
//             (err) => {
//                 dispatch(getEmployeeAction.failure(err))
//                 console.log(err);
//             }
//         )
//     };
// }
/* edit Profile */
// const editProfile = (id, data) => {
//     const URL = API_HOST + API.user.user + id + '/';
//     return async dispatch => {
//         dispatch(editEmployeeProfileAction.request())
//         axios.put(URL, data).then(
//             () => {
//                 dispatch(editEmployeeProfileAction.success(true))
//                 // dispatch(alertSuccess({ msg: 'Profil modifié avec succés', type: 'success' }));
//             },
//             (err) => {
//                 dispatch(editEmployeeProfileAction.failure(err))
//                 console.log(err);
//                 // dispatch(alertError({ msg: 'Echec de modifier le profil', type: 'error' }));
//             }
//         )
//     };
// };
/* edit editor */
const deletePlat = (id) => {
    const URL = API_HOST + API.menu.deletePlat + '/'+ id  ;
    return async dispatch => {
        dispatch(deletePlatAction.request())
        axios.delete(URL).then(
            (res) => {
                dispatch(deletePlatAction.success(true))
                // dispatch(getReservationList())
                // dispatch(alertSuccess({ msg: 'Employé supprimé avec succés', type: 'success' }));
                // setTimeout(() => {
                //     history.push('/listReservation')
                // }, 3000);
            },
            (err) => {
                deletePlatAction.failure(err)
                console.log(err);
                // dispatch(alertError({ msg: 'Echec de supression d\'employé', type: 'error' }));
            }
        )
    };
};

const deleteReservation = (id) => {
    const URL = API_HOST + API.reservation.deletereservation + '/'+ id  ;
    return async dispatch => {
        dispatch(deleteReservationAction.request())
        axios.delete(URL).then(
            (res) => {
                dispatch(deleteReservationAction.success(true))
                dispatch(getReservationList())
                // dispatch(alertSuccess({ msg: 'Employé supprimé avec succés', type: 'success' }));
                // setTimeout(() => {
                //     history.push('/listReservation')
                // }, 3000);
            },
            (err) => {
                deleteReservationAction.failure(err)
                console.log(err);
                // dispatch(alertError({ msg: 'Echec de supression d\'employé', type: 'error' }));
            }
        )
    };
};

const deleteUser = (id) => {
    const URL = API_HOST + API.user.deleteUser+ '/' + id  ;
    return async dispatch => {
        dispatch(deleteUserAction.request())
        axios.delete(URL).then(
            (res) => {
                dispatch(deleteUserAction.success(true))
                // dispatch(getUsersList())
                // dispatch(alertSuccess({ msg: 'Employé supprimé avec succés', type: 'success' }));
                // setTimeout(() => {
                //     history.push('/listReservation')
                // }, 3000);
            },
            (err) => {
                deleteUserAction.failure(err)
                console.log(err);
                // dispatch(alertError({ msg: 'Echec de supression d\'employé', type: 'error' }));
            }
        )
    };
};

export {  addPlat,login , deleteReservation, updateReservation, getHolidayRequest, getDemandHistory, getPlatsList, addReservation, deletePlat, register , getMenuList ,deleteUser , getReservationList };
