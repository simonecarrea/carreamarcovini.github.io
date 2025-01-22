

// MyCourses.js
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardCourse from './cardCourse';
import lampadina from '../assets/loghi/lampadina_2.jpeg';
import lente from '../assets/loghi/lente.jpeg';
import macchina from '../assets/loghi/macchina-eon.png';

const courses2 = [
    {
        id: 1,
        title: 'Corso 1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: lampadina,
        imageDetail: macchina,
        category: 'La nostra azienda'
    },
    {
        id: 2,
        title: 'Corso 2',
        description: 'Descrizione del Corso 2.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 3,
        title: 'Corso 3',
        description: 'Descrizione del Corso 3.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 4,
        title: 'Corso 4',
        description: 'Descrizione del Corso 4.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 5,
        title: 'Corso 5',
        description: 'Descrizione del Corso 5.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 6,
        title: 'Corso 6',
        description: 'Descrizione del Corso 6.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 7,
        title: 'Corso 7',
        description: 'Descrizione del Corso 7.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 8,
        title: 'Corso 8',
        description: 'Descrizione del Corso 8.',
        imageUrl: lampadina,
    },
    {
        id: 9,
        title: 'Corso 9',
        description: 'Descrizione del Corso 9.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 10,
        title: 'Corso 10',
        description: 'Descrizione del Corso 10.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 11,
        title: 'Corso 11',
        description: 'Descrizione del Corso 11.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    },
    {
        id: 12,
        title: 'Corso 12',
        description: 'Descrizione del Corso 12.',
        imageUrl: lampadina,
        category: 'La nostra azienda'
    }
];

const MyCourses = ({ }) => {


    return (
        <div className="category-page">
            <h2>I miei corsi</h2>
            <div className="card-grid">
                {courses2.map((course) => (
                    <CardCourse key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default MyCourses;