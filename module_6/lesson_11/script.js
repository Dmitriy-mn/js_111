/**
 * -------------------------
 */

  
/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */


// const chopShop = {
//     stones: [
//       { name: "Emerald", price: 1300, quantity: 4 },
//       { name: "Diamond", price: 2700, quantity: 3 },
//       { name: "Sapphire", price: 1400, quantity: 7 },
//       { name: "Ruby", price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find((item) => item.name === stoneName);

//         if(!stone) {
//             return `${stoneName} not found`;
//         }
//         return stone.quantity * stone.price;
//     }
// };

// console.log(chopShop.calcTotalPrice("lalala"));






// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.


// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється, швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує, швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);







// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this



// const SPEED = 60;

// const bmw = {
//     brand: "bmw",
//     speed: 70
// }

// const audi = {
//     brand: "audi",
//     speed: 30
// }

// function speedSensor(maxSpeed) {    
//     // if(this.speed <= maxSpeed) {
//     //     return `Автомобіль ${this.brand} рухається з безпечною швидкістю`
//     // }

//     // return `${this.brand} перевищує`;
// }

// console.log(speedSensor.call(bmw, SPEED));
// console.log(speedSensor.call(audi, SPEED));

