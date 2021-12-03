// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const allDirectors = arr.map(movies => movies.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const numberOfDramas = arr.filter(movies => movies.genre.find(genre => genre === "Drama") && movies.director === "Steven Spielberg");
  return numberOfDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  if (arr.length === 0) {
    return 0;
  }
  const average = arr.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0);
  return roundToTwo(average / arr.length);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  const average = arr.reduce(function (sum, movie) {
    if (movie.genre.find(genre => genre === "Drama")) {
      return sum + movie.score;
    }
  }, 0);
 
  return roundToTwo(average / arr.length);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const orderedYear =  [...arr.sort((a, b) => {
    return a.year - b.year;
  })];
  return orderedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let sortedTitle = [...arr].sort((a, b) => {
    a.title - b.title;
  });

  sortedTitle = sortedTitle.map(movies => movies.title);
  // console.log(sortedTitle);
  // let firstTitles = [];
  // for (let i = 0; i < sortedTitle.length; i++) {
  //   firstTitles.push(sortedTitle.title);
  //   if (i === 19) {
  //     break;
  //   }
  // }
  return sortedTitle.slice(0, 20);
 }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
