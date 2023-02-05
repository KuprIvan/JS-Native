export function sum(a: number, b: number) {
    return a + b
}
export function mult(a: number, b: number) {
    return a * b
}
export const splitIntoWords = (sentence: string) => {
    const wordsArray = sentence.toLowerCase().split(" ")

    return wordsArray
        .filter(w => w !== '' && w !== '-')
        .map(w=>
            w
                .replace("!", '')
            .replace(",", '')
            .replace(".", ''))
}
// export default test