import { SearchParam } from '../types';

export const getFilms = async (param: SearchParam) => {
  const type = param.type === 'all' ? '' : param.type;
  const url = `https://www.omdbapi.com/?apikey=889b0a3f&s=${param.value}&page=${param.numberPage}&y=${param.year}&type=${type}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    console.error(err);
  }
};
