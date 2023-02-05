type LocalCityType = {
    title: string
    country: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechnologiesItemType = {
    id: number
    title: string
}
type StudentType = {
    name: string
    age: number
    isStudent: boolean
    address: AddressType
    technologies: TechnologiesItemType[]
}

type SchoolType = {
    name: string
    isOpen: boolean
    mentors: Array<string>
}

const student:StudentType = {
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

const school: SchoolType = {
    name: 'IT-INCUBATOR',
    isOpen: true,
    mentors: [
        'Ivan',
        'Petya'
    ]
}
console.log(student, school)

