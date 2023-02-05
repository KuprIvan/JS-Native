type StudentType = {
    name: string
    age: number
    isStudent: boolean
}
type SchoolType = {
    name: string
    isOpen: boolean
    mentors: Array<string>
}

const student:StudentType = {
    name: 'Ivan',
    age: 25,
    isStudent: true
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

