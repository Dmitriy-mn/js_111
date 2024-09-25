
/**
 * Оператор switch case
 */


// const user = "Alice";

// switch(user) {
//     case "Kate":
//         console.log("case 1");
//         break;
//     case "Alice":
//         console.log("case 2");
//         break;
//     case "Petya":
//         console.log("case 3");
//         break;
//     default:
//         console.log("default"); 
// }


// function foo() {
//     switch(user) {
//         case "Kate":
//             return "case 1"
//         case "Alice":
//             return "case 2"
//         case "Petya":
//             return "case 3"
//         default:
//             return "default"; 
//     }
// }

// console.log(foo());




// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */


// const sub = "free";
// let canConnect;

//  false || true
// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// const canConnect = sub === "pro" || sub === "vip";

// console.log("дозволити доступ?", canConnect);





/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */


// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// //                      true && true && fasle
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можна відкрити чат?", canOpenChat);





