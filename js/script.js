"use strict";



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', ''); 
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    rememberMyFilms: function() {
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
    
    },
    detectPersonalLenel: function() {
        if (personalMovieDB.count < 10) {
            alert('Вы мало смотрите');
        } else if (30 >= personalMovieDB.count >= 10) {
            alert('Вы дефолтный зритель');
        } else {
            alert('Да вы истиный киноман');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            alert('Ну я хуй его знает');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre === '' && genre === null) {
                console.log('вы ввели некоректные данные');
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLenel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();


console.log(personalMovieDB);