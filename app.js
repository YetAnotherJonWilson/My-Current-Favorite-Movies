$('document').ready(function() {
/*In this challenge we will be using the OMDb API to create a web page displaying
your top 3 movies. You should make 3 queries to the OMDb API for each of your
movies and append them to your screen. Each movie entry should use at least
3 keys from the returned data (one being the image). Your page should be styled
with CSS and look presentable.

Here is a sample URL: http://www.omdbapi.com/?t=Sneakers&y=&plot=short&r=json*/

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

var hamlet = $.get('http://www.omdbapi.com/?t=Hamlet&y=&plot=short&r=json');

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

var weepahWay = $.get('http://www.omdbapi.com/?t=Weepah%20Way%20For%20Now&y=&plot=short&r=json');

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
