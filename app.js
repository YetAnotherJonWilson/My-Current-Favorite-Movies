$('document').ready(function() {

// The following three chunks of code each do the following, in order: 1) get the
// data for a movie from the OMDB API; 2) create objects for the Poster Img link,
// Title and Year of each movie; 3) append those objects to the DOM according
// to their respective <div> classes

var whatAboutBob = $.get('http://www.omdbapi.com/?t=What%20About%20Bob&y=&plot=short&r=json');

whatAboutBob.then(function(data) {
  var bobPoster = data.Poster;
  var $bobMoviePoster = $('<li><img src="' + bobPoster + '"</img></li>');
  $('.whatAboutBob').children().last().append($bobMoviePoster);
  var bobTitle = data.Title;
  var $bobMovieTitle = $('<li>' + bobTitle + '</li>');
  $('.whatAboutBob').children().last().append($bobMovieTitle);
  var bobYear = data.Year;
  var $bobMovieYear = $('<li>' + bobYear + '</li>');
  $('.whatAboutBob').children().last().append($bobMovieYear);
});

var hamlet = $.get('http://www.omdbapi.com/?t=Captain%20Fantastic&y=&plot=short&r=json');

hamlet.then(function(data) {
  var hamletPoster = data.Poster;
  var $hamletMoviePoster = $('<li><img src="' + hamletPoster + '"</img></li>');
  $('.hamlet').children().last().append($hamletMoviePoster);
  var hamletTitle = data.Title;
  var $hamletMovieTitle = $('<li>' + hamletTitle + '</li>');
  $('.hamlet').children().last().append($hamletMovieTitle);
  var hamletYear = data.Year;
  var $hamletMovieYear = $('<li>' + hamletYear + '</li>');
  $('.hamlet').children().last().append($hamletMovieYear);
});

var weepahWay = $.get('http://www.omdbapi.com/?t=Into%20The%20Forest&y=&plot=short&r=json');

weepahWay.then(function(data) {
  var weepahWayPoster = data.Poster;
  var $weepahWayMoviePoster = $('<li><img src="' + weepahWayPoster + '"</img></li>');
  $('.weepahWay').children().last().append($weepahWayMoviePoster);
  var weepahWayTitle = data.Title;
  var $weepahWayMovieTitle = $('<li>' + weepahWayTitle + '</li>');
  $('.weepahWay').children().last().append($weepahWayMovieTitle);
  var weepahWayYear = data.Year;
  var $weepahWayMovieYear = $('<li>' + weepahWayYear + '</li>');
  $('.weepahWay').children().last().append($weepahWayMovieYear);
});





//close doc
});
