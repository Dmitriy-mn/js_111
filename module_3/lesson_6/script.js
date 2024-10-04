/**
 * Напиши функцію calAverage() яка приймає довільну 
 * кількість
 * аргументів і повертає їхнє середнє значення. 
 * Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//     const arr = Array.from(arguments);
//     let sum = 0;
    
//     for(const num of arr) {
//         sum += num;
//     }

//     return sum / arr.length
// }


// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(10, 2, 13, 6, 11));
// console.log(calAverage(21, 43, 5));








/**
 * Напиши функцію formatTime(totalMinutes) яка переведе значення
 * totalMinutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     const doubleHousr = String(hours).padStart(2, 0);
//     const doubleMinutes = String(minutes).padStart(2, 0); 
//     return `${doubleHousr}:${doubleMinutes}`
// }




// console.log(formatTime(70))
// console.log(formatTime(460))
// console.log(formatTime(1441))









// Створити функцію яка буде розбивати початковий масив 
// на потрібну кількість елементів розділюячи на декілька 
// масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів

//            0  1  2  3  4  5  6  7  8
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//                  3
// function foo(arr, count) {
//     const res = [];
                                       
//     for(let i = 0; i < arr.length; i += count) {
//         const newArr = arr.slice(i, i + count);
//         res.push(newArr);
//     }

//     return res;
// }

// console.log(foo(data, 3));



// const courses = ["HTML", "CSS", "JS", "React", "Postgres"];

// const res = courses.splice(2, 2);
// console.log("res", res);
// console.log("courses", courses);


// const res = courses.splice(2, 1, "hello");
// console.log("res", res);
// console.log("courses", courses);


// const res = courses.splice(2, 0, "lalala");
// console.log("res", res);
// console.log("courses", courses);




