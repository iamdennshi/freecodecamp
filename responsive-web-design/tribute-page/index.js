const img = document.getElementById('image');
const desc = document.getElementById('img-caption')
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let position = 0;
let description = [
    'Артем Сединин примеряет элегантный пиджак сшитый лично для него находясь в общежитии №3 ПГАТУ',
    'Артем Сединин с гордостью на лице демонстрирует свою коллекцию облигаций «Россия - щедрая душа»',
    'Артем Сединин заговаривает свой завтрак на успешный успех',
    'Закрывая рукой лицо Артем Сединин нагдяно показывет, что устал от зора фанатских камер',
    'Артем Сединин на церемонии вручения оскара',
    'Артем Сединин вложил свои не малые активы в компанию Lenovo, в скором времени он планирует ее выкупить',
    'Артем Сединин на переговорах с инвестором',
    'Артем Сединин создает новый проект пользуясь одновременно двумя устройствами',
    'Артем Сединин в процессе изобретения телепорта'];

img.src = `./img/0.jpg`;
desc.innerHTML = description[0];

const moveRight = () => {
    if (position >= description.length - 1) {
        position = 0;
        img.src = `./img/0.jpg`;
        desc.innerHTML = description[0];
        return;
    }
    img.src = `./img/${position + 1}.jpg`;
    desc.innerHTML = description[position + 1];
    position++;
}

const moveLeft = () => {
    if (position <= 0) {
        position = description.length - 1;
        img.src = `./img/${position}.jpg`;
        desc.innerHTML = description[position];
        return;
    }
    img.src = `./img/${position - 1}.jpg`; 
    desc.innerHTML = description[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        moveLeft();
    }
    else if (e.keyCode == '39') {
        moveRight();
    }

}