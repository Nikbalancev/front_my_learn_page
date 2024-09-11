//Переключение темы
let buttonDarkTheme = document.querySelector('.theme-button-dark');
let buttonLightTheme = document.querySelector('.theme-button-light');

buttonLightTheme.onclick = function () {
    document.body.classList.remove('dark');
    buttonDarkTheme.classList.remove('active');
    buttonLightTheme.classList.add('active');
}

buttonDarkTheme.onclick = function () {
    document.body.classList.add('dark');
    buttonDarkTheme.classList.add('active');
    buttonLightTheme.classList.remove('active');
}

//Переключение шрифта
let buttonSansSerif = document.querySelector('.font-button-sans-serif');
let buttonSerif = document.querySelector('.font-button-serif');

buttonSansSerif.onclick = function () {
    document.body.classList.remove('serif');
    buttonSerif.classList.remove('active');
    buttonSansSerif.classList.add('active');
}

buttonSerif.onclick = function () {
    document.body.classList.add('serif');
    buttonSerif.classList.add('active');
    buttonSansSerif.classList.remove('active');
}

//Переключение вида карточек
let buttonCardGrid = document.querySelector('.card-view-button-grid');
let buttonCardList = document.querySelector('.card-view-button-list');
let listCards = document.querySelector('.cards');

buttonCardGrid.onclick = function () {
    listCards.classList.remove('list');
    buttonCardList.classList.remove('active');
    buttonCardGrid.classList.add('active');
}

buttonCardList.onclick = function () {
    listCards.classList.add('list');
    buttonCardList.classList.add('active');
    buttonCardGrid.classList.remove('active');
}

//Галлерея
let currentPhoto = document.querySelector('.active-photo');
let previewsList = document.querySelectorAll('.preview-list a')

for (let activePhoto of previewsList) {
    activePhoto.onclick = function (evt) {
        evt.preventDefault();

        let activeItem = document.querySelector('.preview-list .active-item');
        activeItem.classList.remove('active-item');
        activePhoto.classList.add('active-item');

        currentPhoto.src = activePhoto.href;
    }
}

//Отображение скрытого содержания
let shortArticles = document.querySelectorAll('.blog-article.short');
for (let shortArticle of shortArticles) {
    let moreButtons = shortArticle.querySelector('.more');
    moreButtons.onclick = function () {
        shortArticle.classList.remove('short');
    }
}




