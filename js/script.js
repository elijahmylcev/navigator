const video = document.querySelector('.video');

document.querySelector('.watching').addEventListener('click', getVideo())

function getVideo() {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(
        (mediaStream) => {
            video.srcObject = mediaStream;
            video.onloadedmetadata = function () {
                video.play();
            }
        }, () => {
            console.log("ok!")
        }
    )
};

function getСoordinates() {
    navigator.geolocation.getCurrentPosition(success, error, {
        // enableHighAccuracy: true
    });

    function success({
        coords
    }) {
        const {
            latitude,
            longitude
        } = coords;
        const currentPosition = [latitude, longitude]
        // console.log(currentPosition)
        getMap(currentPosition, 'Я знаю, что ты здесь!');
    }

    function error({
        message
    }) {
        console.log(message) // при отказе в доступе получаем PositionError: User denied Geolocation
    }
}


// getСoordinates();

// Рбота с картой
import {
    getMap
} from './map.js';

document.querySelector('.position').addEventListener('click', getСoordinates())