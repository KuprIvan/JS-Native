import {StudentType} from '../02/02';

let student: StudentType

beforeEach(() => {
    student = {
        id: 2,
        name: 'Ivan',
        age: 25,
        isStudent: true,
        address: {
            streetTitle: 'Lazurowa 87A',
            city: {
                title: 'Minsk',
                country: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            }
        ]
    }
})