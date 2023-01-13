// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(lasPelis) {
  return lasPelis.map((laPeli) => laPeli.director); // simple sencillo y bonito
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(lasPelis) {
  return lasPelis
    .filter((laPeli) => laPeli.director === "Steven Spielberg")
    .filter((laPeli) => laPeli.genre.includes("Drama")).length; // igual de bonito concatenando
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(lasPelis) {
  if (lasPelis.length === 0) {
    return 0
  } else {
    return parseFloat(
      // parseFloat para pasar la variable a numerica
      (
        lasPelis.reduce((antes, ahora) => (ahora.score || 0) + antes, 0) /
        lasPelis.length
      ).toFixed(2) // fija para los dos decimales
    )
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(lasPelis) {

return scoresAverage(lasPelis.filter((laPeli) => laPeli.genre.includes("Drama"))) // en una linea, aunque yo lo pondria en dos para tenerlo mas claro

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(lasPelis) {
    const ordenacionInfernal = lasPelis.map ((movie) => movie);
  ordenacionInfernal.sort(function (a, b) {
    if (a.year > b.year) return a.year - b.year; // esto funciona
    if (a.year < b.year) return a.year - b.year;  // esto tambien pero es lo mismo que la de arriba, porque? quien sabe 
    if (a.year === b.year) return a.title.localeCompare(b.title) 
    
  });
  return ordenacionInfernal


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// inspirandome en codigo que he visto por internet
function orderAlphabetically(moviesArray) {
  let orderedArray = [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((item) => item.title);
  return orderedArray.length > 20 ? orderedArray.slice(0, 20) : orderedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
