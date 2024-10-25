// class Car {
//     #price;

//     static qty = 0;

//     static increment() {
//         Car.qty += 1;
//     }

//     constructor(obj = {}) {
//         this.brand = obj.brand;
//         this.model = obj.model;
//         this.#price = obj.price;
//         Car.increment();
//     }

//     getModel() {
//         return this.model;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if(this.#checkType(newPrice, "number")) {
//             this.#price = newPrice;
//             return;
//         }
//         console.log("Invalid data");
//     }

//     #checkType(data, type) {
//         if(typeof data !== type) {
//             return false
//         } else {
//             return true;
//         }
//     }
// }


// const bmw = new Car({
//     brand: "BMW",
//     model: "X7",
//     price: 70000
// });

// const bmw1 = new Car({
//     brand: "BMW",
//     model: "X5",
//     price: 65000
// });

// const bmw2 = new Car({
//     brand: "BMW",
//     model: "X5",
//     price: 65000
// });


// console.log(Car.qty);



// bmw.updatePrice();
// console.log("bmw", bmw.getPrice());







// ------------------------------------------ 3

/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: 
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 * 
 * - Додай метод updatePostCount(value), який у параметрі value 
 *    приймає кількість постів, які потрібно додати користувачеві.
 */

// class Blogger {
//     constructor(obj) {
//         this.email = obj.email;
//         this.age = obj.age;
//         this.numberOfPosts = obj.numberOfPosts;
//         this.topics = obj.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }


// const kate = new Blogger({
//     email: "kate@gmail.com",
//     age: 24,
//     numberOfPosts: 20,
//     topics: ["tech", "gaming"]
// }) 

// kate.updatePostCount(15);

// console.log("kate", kate);

// const petya = new Blogger({
//     email: "petya@gmail.com",
//     age: 30,
//     numberOfPosts: 17,
//     topics: ["health", "sport"]
// })

// petya.updatePostCount(1);

// console.log("petya", petya);









// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

// class User {
//     #login;
//     #email;

//     constructor(obj) {
//         this.#login = obj.login;
//         this.#email = obj.email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         if(newLogin === "") {
//             console.log("invalid data");
//             return;
//         }
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }



// const alice = new User({ login: "Alice", email: "alice@gmail.com" });
// alice.login = "";
// console.log("alice", alice.login);

// const yura = new User({ login: "Yura", email: "yura@gmail.com" });
// yura.email = "superyura@gmail.com";
// console.log("yura", yura.email);










