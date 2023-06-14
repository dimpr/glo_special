
const randNumber = Math.floor(Math.random() * 101);

const asking = function () {
    let number = prompt("Угадай число от 1 до 100", "");
    if (number === null) {
        alert("Игра окончена");
        return;
    } else if (!isNumber(number)) {
        alert("Введи число!");
        asking();
    } else if (number < randNumber) {
        alert("Загаданное число больше");
        asking();
    } else if (number > randNumber) {
        alert("Загаданное число меньше");
        asking();
    } else if (number == randNumber) {
        alert("Поздравляю, Вы угадали!!!");
        return;
    }

}

const isNumber = function (num) {

    return !isNaN(parseFloat(num) && isFinite(num));

}

asking();

