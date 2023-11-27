import {UserType} from "./10";

function increaseAge(u: UserType) {
    return u.age += 1
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Ivan',
        age: 26,
        address: {
            city: 'Warsaw'
        }
    }
    increaseAge(user)

    expect(user.age).toBe(27)
})