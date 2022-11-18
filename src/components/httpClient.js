
const API = "https://api.themoviedb.org/3";
export  const api_key="03913e21d216be5a74b830c23b83ad65"

export function get(path) {
  return fetch(API + path, {
   
  }).then((result) => result.json());
}
/* 
export function getTrending(page) {
  return fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&page=${page}`)
  .then((result) => result.json())
  .then(data=>console.log(data))
} */
