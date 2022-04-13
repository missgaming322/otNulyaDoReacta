"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''); 

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}

start();

console.log(2 + 2 * 2 !== '6'); 

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = prompt('На сколько оцените его', '');
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }

}
rememberMyFilms();

 function detectPersonalLenel () {
    if (personalMovieDB.count < 10) {
        alert('Вы мало смотрите');
    } else if (30 >= personalMovieDB.count >= 10) {
        alert('Вы дефолтный зритель');
    } else {
        alert('Да вы истиный киноман');
    }
}
detectPersonalLenel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        alert('Ну я хуй его знает');
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {

        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

    console.log(personalMovieDB);
