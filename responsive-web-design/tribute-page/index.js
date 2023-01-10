const img = document.getElementById('tribute-image');
const desc = document.getElementById('img-caption')
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let position = 0;
let description = [
    '<strong>Артем Сединин</strong> примеряет элегантный пиджак сшитый лично для него находясь в общежитии №3 ПГАТУ',
    '<strong>Артем Сединин</strong> с гордостью на лице демонстрирует свою коллекцию облигаций «Россия - щедрая душа»',
    '<strong>Артем Сединин</strong> заговаривает свой завтрак на успешный успех',
    'Закрывая рукой лицо <strong>Артем Сединин</strong> нагдяно показывет, что устал от зора фанатских камер',
    '<strong>Артем Сединин</strong> на церемонии вручения оскара',
    '<strong>Артем Сединин</strong> вложил свои не малые активы в компанию Lenovo, в скором времени он планирует ее выкупить',
    '<strong>Артем Сединин</strong> на переговорах с инвестором',
    '<strong>Артем Сединин</strong> создает новый проект пользуясь одновременно двумя устройствами',
    '<strong>Артем Сединин</strong> в процессе изобретения телепорта'];

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