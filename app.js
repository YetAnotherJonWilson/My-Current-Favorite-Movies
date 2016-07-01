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
});



//close doc
});
