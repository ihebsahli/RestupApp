import { actionCreator } from "./actionCreatorFunction"
import { reducerHandler } from "./reducerHandler"

// Actions and Types
const getPlatsListAction = actionCreator('GET_PLATS_LIST_ACTION')
const getReservationListAction = actionCreator('GET_RESERVATION_LIST_ACTION')
const deletePlatAction = actionCreator('DELETE_PLAT')
const registerAction = actionCreator('REGISTER_USER')
const loginAction = actionCreator('LOGIN_USER')
const getMenuListAction = actionCreator('GET_MENU')
const addReservationAction = actionCreator('ADD_RESERVATION')
const getHolidayRequestAction = actionCreator('GET_HOLIDAY_REQUEST')
const getDemandHistoryAction = actionCreator('GET_DEMAND_HISTORY')
const updateReservationAction = actionCreator('UPDATE_RESERVATION')
const deleteUserAction = actionCreator('DELETE_USER')
const deleteReservationAction = actionCreator('DELETE_RESERVATION')
const addPlatAction = actionCreator('ADD_PLAT')
// Initial State
const initialAsyncState = {
    isLoading: false,
    loaded: false,
    data: null,
    error: null
}

// Initial Reducer State
const initialState = {
    PlatsList: initialAsyncState,
    PlatDeleting: initialAsyncState,
    employeeProfile: initialAsyncState,
    addReservation: initialAsyncState,
    userRegistration: initialAsyncState,
    holidayRequest: initialAsyncState,
    demandHistory: initialAsyncState,
    updateReservation: initialAsyncState,
    register: initialAsyncState,
    menu: initialAsyncState,
    userDeleting: initialAsyncState,
    reservation: initialAsyncState,
    deleteReservation: initialAsyncState,
    login: initialAsyncState,
    platAdded: initialAsyncState,
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case loginAction.REQUEST:
        case loginAction.SUCCESS:
        case loginAction.FAILURE:
            return {
                ...state,
                login: reducerHandler(state.login, action, loginAction)
            }
        case deleteUserAction.REQUEST:
        case deleteUserAction.SUCCESS:
        case deleteUserAction.FAILURE:
            return {
                ...state,
                userDeleting: reducerHandler(state.userDeleting, action, deleteUserAction)
            }
        case getPlatsListAction.REQUEST:
        case getPlatsListAction.SUCCESS:
        case getPlatsListAction.FAILURE:
            return {
                ...state,
                PlatsList: reducerHandler(state.PlatsList, action, getPlatsListAction)
            }
        case deletePlatAction.REQUEST:
        case deletePlatAction.SUCCESS:
        case deletePlatAction.FAILURE:
            return {
                ...state,
                PlatDeleting: reducerHandler(state.PlatDeleting, action, deletePlatAction)
            }
        case registerAction.REQUEST:
        case registerAction.SUCCESS:
        case registerAction.FAILURE:
            return {
                ...state,
                register: reducerHandler(state.register, action, registerAction)
            }
        case getReservationListAction.REQUEST:
        case getReservationListAction.SUCCESS:
        case getReservationListAction.FAILURE:
            return {
                ...state,
                reservation: reducerHandler(state.reservation, action, getReservationListAction)
            }
        case getMenuListAction.REQUEST:
        case getMenuListAction.SUCCESS:
        case getMenuListAction.FAILURE:
            return {
                ...state,
                menu: reducerHandler(state.menu, action, getMenuListAction)
            }
        case addReservationAction.REQUEST:
        case addReservationAction.SUCCESS:
        case addReservationAction.FAILURE:
            return {
                ...state,
                addReservation: reducerHandler(state.addReservation, action, addReservationAction)
            }
        case addPlatAction.REQUEST:
        case addPlatAction.SUCCESS:
        case addPlatAction.FAILURE:
            return {
                ...state,
                platAdded: reducerHandler(state.platAdded, action, addPlatAction)
            }
        case getHolidayRequestAction.REQUEST:
        case getHolidayRequestAction.SUCCESS:
        case getHolidayRequestAction.FAILURE:
            return {
                ...state,
                holidayRequest: reducerHandler(state.holidayRequest, action, getHolidayRequestAction)
            }
        case getDemandHistoryAction.REQUEST:
        case getDemandHistoryAction.SUCCESS:
        case getDemandHistoryAction.FAILURE:
            return {
                ...state,
                demandHistory: reducerHandler(state.demandHistory, action, getDemandHistoryAction)
            }
        case updateReservationAction.REQUEST:
        case updateReservationAction.SUCCESS:
        case updateReservationAction.FAILURE:
            return {
                ...state,
                updateReservation: reducerHandler(state.updateReservation, action, updateReservationAction)
            }
        case deleteReservationAction.REQUEST:
        case deleteReservationAction.SUCCESS:
        case deleteReservationAction.FAILURE:
            return {
                ...state,
                deleteReservation: reducerHandler(state.deleteReservation, action, deleteReservationAction)
            }
        default:
            return state
    }
}
export { reducer }
export { addPlatAction ,loginAction, deleteReservationAction, getReservationListAction, getPlatsListAction, getMenuListAction, deletePlatAction, getDemandHistoryAction, getHolidayRequestAction, addReservationAction, updateReservationAction, registerAction, deleteUserAction }