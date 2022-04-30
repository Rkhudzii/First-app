    const numberOfFilms = +prompt('Скілки фільмів було переглянуто?', '');

    const pesonalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genre: [],
        privat: false
    };

    const a = prompt('Назва одного з переглянутих фільмів?', ''),
          b = +prompt('Оцініть фільм по шкалі від 1-10!', ''),
          c = prompt('Вкажіть назву наступного переглянутого фільму!', ''),
          d = +prompt('Оцініть фільм по шкалі від 1-10!', '');

    pesonalMovieDB.movies[a] = b;
    pesonalMovieDB.movies[c] = d;

    console.log(pesonalMovieDB);
    