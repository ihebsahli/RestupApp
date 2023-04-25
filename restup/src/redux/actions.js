import { actionCreator } from "./actionCreatorFunction"
import { reducerHandler } from "./reducerHandler"

// Actions and Types
const getPlatsListAction = actionCreator('GET_PLATS_LIST_ACTION')
const deleteReservationAction = actionCreator('DELETE_RESERVATION')
const registerAction = actionCreator('REGISTER_USER')
const getMenuListAction = actionCreator('GET_MENU')
const addReservationAction = actionCreator('ADD_RESERVATION')
const getHolidayRequestAction = actionCreator('GET_HOLIDAY_REQUEST')
const getDemandHistoryAction = actionCreator('GET_DEMAND_HISTORY')
const updateReservationAction = actionCreator('UPDATE_RESERVATION')
const deleteUserAction = actionCreator('DELETE_USER')



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
    ReservationDeleting: initialAsyncState,
    employeeProfile: initialAsyncState,
    addReservation: initialAsyncState,
    userRegistration: initialAsyncState,
    holidayRequest: initialAsyncState,
    demandHistory: initialAsyncState,
    updateReservation: initialAsyncState,
    register: initialAsyncState,
    menu: initialAsyncState,
    userDeleting: initialAsyncState

}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        case deleteReservationAction.REQUEST:
        case deleteReservationAction.SUCCESS:
        case deleteReservationAction.FAILURE:
            return {
                ...state,
                ReservationDeleting: reducerHandler(state.ReservationDeleting, action, deleteReservationAction)
            }
        case registerAction.REQUEST:
        case registerAction.SUCCESS:
        case registerAction.FAILURE:
            return {
                ...state,
                register: reducerHandler(state.register, action, registerAction)
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
        default:
            return state
    }
}
export { reducer }
export { getPlatsListAction, getMenuListAction, deleteReservationAction, getDemandHistoryAction, getHolidayRequestAction, addReservationAction, updateReservationAction, registerAction, deleteUserAction }