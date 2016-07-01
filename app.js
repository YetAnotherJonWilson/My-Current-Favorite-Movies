$('document').ready(function() {
/*In this challenge we will be using the OMDb API to create a web page displaying
your top 3 movies. You should make 3 queries to the OMDb API for each of your
movies and append them to your screen. Each movie entry should use at least
3 keys from the returned data (one being the image). Your page should be styled
with CSS and look presentable.

Here is a sample URL: http://www.omdbapi.com/?t=Sneakers&y=&plot=short&r=json*/

var whatAboutBob = $.get('http://www.omdbapi.com/?t=What%20About%20Bob&y=&plot=short&r=json');

whatAboutBob.then(function(data) {
  var bobTitle = data.Title;
  var $bobMovieTitle = $('<li>' + bobTitle + '</li>');
  $('.whatAboutBob').after($bobMovieTitle);
  var bobYear = data.Year;
  var $bobMovieYear = $('<li>' + bobYear + '</li>');
  $('.whatAboutBob').after($bobMovieYear);
  var bobPoster = data.Poster;
  var $bobMoviePoster = $('<img src="' + bobPoster + '"</img>');
  $('.whatAboutBob').after($bobMoviePoster);
});

var hamlet = $.get('http://www.omdbapi.com/?t=Hamlet&y=&plot=short&r=json');

hamlet.then(function(data) {
  var hamletTitle = data.Title;
  var $hamletMovieTitle = $('<li>' + hamletTitle + '</li>');
  $('.hamlet').after($hamletMovieTitle);
  var hamletYear = data.Year;
  var $hamletMovieYear = $('<li>' + hamletYear + '</li>');
  $('.hamlet').after($hamletMovieYear);
  var hamletPoster = data.Poster;
  var $hamletMoviePoster = $('<img src="' + hamletPoster + '"</img>');
  $('.hamlet').after($hamletMoviePoster);
});

var weepahWay = $.get('http://www.omdbapi.com/?t=Weepah%20Way%20For%20Now&y=&plot=short&r=json');

weepahWay.then(function(data) {
  var weepahWayTitle = data.Title;
  var $weepahWayMovieTitle = $('<li>' + weepahWayTitle + '</li>');
  $('.weepahWay').after($weepahWayMovieTitle);
  var weepahWayYear = data.Year;
  var $weepahWayMovieYear = $('<li>' + weepahWayYear + '</li>');
  $('.weepahWay').after($weepahWayMovieYear);
  var weepahWayPoster = data.Poster;
  var $weepahWayMoviePoster = $('<img src="' + weepahWayPoster + '"</img>');
  $('.weepahWay').after($weepahWayMoviePoster);
});





//close doc
});
