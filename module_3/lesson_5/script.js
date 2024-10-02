


/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */


// const values = "5 10";

// const arr = values.split(" ");
// const res = Number(arr[0]) * Number(arr[1]);

// const res = (Number(arr[0]) + Number(arr[1])) * 2;
// const res = (+arr[0] + +arr[1]) * 2;

// console.log(res); 










// ----------------------------------------- 5

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for(const num of numbers) {
//     if(!(num % 2)) {
//         total += num;
//     } 
// }

// console.log(total);



// for(const num of numbers) {
//     if(num % 2 !== 0) {
//         continue;        
//     }

//     total += num;
// }

// console.log(total);






/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,380055566377,380055566300";


// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for(let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }










/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "    Welcome  to  the  future     ";

// const arr = string.trim().split(" ");
// const result = arr.slice(1, arr.length - 1).join(" ").trim();

// console.log(result);





/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const values = [2, 17, 94, 1, -23, 37];
// let min;

// for(let i = 0; i < values.length; i++) {
//     if(i === 0) {
//         min = values[i];
//     } else if(values[i] < min) {
//         min = values[i]
//     }
// }

// console.log(min);

