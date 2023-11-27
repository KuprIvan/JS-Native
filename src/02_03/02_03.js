//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке


// const checkIsValid = (str, subStr) => {
//     return str.toLowerCase().includes(subStr.toLowerCase());
// }
// console.log(checkIsValid('всем стУдентам инкуБатора Желаю удачИ!', 'Всем Студентам Инкубатора Желаю Удачи!'));

// const setUpperCase = (str) => {
//     return str.split(' ').map(el => el.slice(0, 1).toUpperCase() + el.toLowerCase().slice(1)).join(' ');
// }
//
// console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"));


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

// const repeatString = (str, rep, deli) => {
//     let stringsArr = [];
//
//     for (let i = 0; i < rep; i++) {
//         stringsArr.push(str);
//     }
//
//     return stringsArr.join(deli);
//
// };
// console.log(repeatString("yo", 3, " "));

// const checkStart = (str, startsWith) => str.toLowerCase().startsWith(startsWith);
// console.log(checkStart("Incubator", "inc"));

// const truncateString = (str, strLength) => str.slice(0, strLength) + '...';
// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10));

// const getMinLengthWord = (str) => {
//     return !str.length ? null : str.split(' ').reduce((acc, min) => acc.length < min.length ? acc : min);
// }
// console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"));