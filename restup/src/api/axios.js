export const API_HOST = "http://localhost:5000"


export const API = {

    user: {

        register: '/users/register',
        login: '/auth',

    },

    menu: {

        listmenu: '/listmenu',
        deletePlat : '/plats/deleteplat',
        addPlat : '/plats/addplat',
        
    },

    reservation: {

        list: '/reservation/list',   
        addreservation: '/reservation/addreservation',     
        deletereservation: '/reservation/deletereservation',     
    },


   
}
