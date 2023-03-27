import { SearchParam } from '../types';

export const getFilms = async (param: SearchParam) => {
  const url = `https://www.omdbapi.com/?apikey=889b0a3f&s=${param.value}&page=10`;
  try {
    // const response = await fetch(url);
    // return response.json();
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            Search: [
              {
                Title: 'Summer Love',
                Year: '2016',
                imdbID: 'tt4997624',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BODBjMmU3MGQtMDE5Zi00MmQ0LWE5NGUtZTc4YTIxMzQxZDFhXkEyXkFqcGdeQXVyMzI4MzkxNTY@._V1_SX300.jpg',
              },
              {
                Title: 'Summer and Smoke',
                Year: '1961',
                imdbID: 'tt0055489',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BOGE3YmIyZDQtZDk1Ny00ZDg3LWFjYjctNzY0ZTlmNGFlODgyXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg',
              },
              {
                Title: 'Summer of Rockets',
                Year: '2019',
                imdbID: 'tt8001214',
                Type: 'series',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BMmY2NTE3YjYtZGQ3Zi00OTBmLWFmMzgtN2UwNmRkYjYwMWRjXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg',
              },
              {
                Title: 'Last Summer',
                Year: '1969',
                imdbID: 'tt0064573',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BMGY2YTU5MzAtYmEzYi00NWE2LThkNmQtMDVkODEwMWZhYWY1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
              },
              {
                Title: 'Red Hook Summer',
                Year: '2012',
                imdbID: 'tt1989593',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BMjI3MjYyNjEwOF5BMl5BanBnXkFtZTcwMzk4ODc5Nw@@._V1_SX300.jpg',
              },
              {
                Title: 'My First Summer',
                Year: '2020',
                imdbID: 'tt10229982',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BZGIyZGQ3NWItZTVkYS00M2YxLWJkMTAtMjBkNDMxNDY4NWE3XkEyXkFqcGdeQXVyMTEyNzIzMjQ@._V1_SX300.jpg',
              },
              {
                Title: 'Summer Lover',
                Year: '2008',
                imdbID: 'tt0937373',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BNjRiMTk1NTgtYjliNC00MzgwLWI1MmUtNTg0NDg5NjRlMDM5XkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_SX300.jpg',
              },
              {
                Title: 'Summer Holiday',
                Year: '1963',
                imdbID: 'tt0057541',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BMjZiNzMxMzktYTc1My00MGFjLWE3MDUtYTMyZThkZDYxZThkXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg',
              },
              {
                Title: 'My Summer Story',
                Year: '1994',
                imdbID: 'tt0110168',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BZjlmZThiYWUtMTUxNi00MTY3LWI3N2ItNmEzZTk2NTAwZWE0XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
              },
              {
                Title: 'A Summer Romance',
                Year: '2019',
                imdbID: 'tt10224134',
                Type: 'movie',
                Poster:
                  'https://m.media-amazon.com/images/M/MV5BN2VhNGU1ZDgtYzViOC00NDdiLWE5OWQtY2Q2MjkyNTA1YjAxXkEyXkFqcGdeQXVyNzc2NTMwNzQ@._V1_SX300.jpg',
              },
            ],
            totalResults: '743',
            Response: 'True',
          }),
        1000
      );
    });
  } catch (err) {
    console.error(err);
  }
};
