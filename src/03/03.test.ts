import {student, StudentType} from './../02/02'
export const addSkill = (student: StudentType, skill:string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: 'JS'
    })
}

test('JS skill should be added to technologies arr', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].title).toBeDefined()
})
