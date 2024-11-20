/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */


const NOTIFICATION_DELAY = 3000;

const notification = document.querySelector(".js-alert");
let timeId;

notification.addEventListener("click", handleClick);

showNotification();

function showNotification() {
    notification.classList.add("is-visible");

    timeId = setTimeout(() => {
        console.log("hidden");
        
        hideNotification();
    }, NOTIFICATION_DELAY);
}


function handleClick() {
    hideNotification();
    clearTimeout(timeId);
}


function hideNotification() {
    notification.classList.remove("is-visible");
}