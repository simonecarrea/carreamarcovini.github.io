// src/actions/courseActions.js

export const getCourses = () => {
  return {
    type: 'GET_COURSES',
    payload: [
      { id: 1, title: 'Corso di Gestione del Tempo' },
      { id: 2, title: 'Corso di Leadership' },
      { id: 3, title: 'Corso di Comunicazione Efficace' }
      // Aggiungi altri corsi se necessario
    ]
  };
};