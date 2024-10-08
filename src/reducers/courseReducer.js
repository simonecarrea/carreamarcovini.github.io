
const initialState = {
    courses: []  // Inizializziamo l'array dei corsi vuoto
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_COURSES':
        return {
          ...state,
          courses: action.payload  // Popola i corsi con i dati forniti dall'azione
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
