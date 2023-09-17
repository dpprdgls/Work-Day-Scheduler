// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const localeSettings = {};
dayjs.locale(localeSettings);
//waits until the dom is fully loaded before running the code inside the func 


$(function () {
  //gets current hour of day using Day.js library

  const currentHour = dayjs().format('H');
//changes color of block based on past present future hours and toggles class
  function colorHour(){
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour === currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });
  }

  //when user inputs text and clicks save it will store data to local storage for that text area
  function textInput() {
    $('.saveBtn').on('click', function(){
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }

  //update the color of the block based on the current hour of the day
  function colorUpdate() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      if (blockHour == currentHour){
        $(this).removeClass('past future').addClass('present');
      } else if (blockHour < currentHour){
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('present past').addClass('future');
      }
    });
  }

  //get user input from local storage and set textare value for every time block 
$('.time-block').each(function() {
  const key = $(this).attr('id');
  const value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});
//this function updates the current date and time in the header of the page 
function updateTimeNow() {
  const dateElement = $('#date');
  const timeElement = $('#time');
  const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  const currentTime = dayjs().format('hh:mm:ss A');
  dateElement.text(currentDate);
  timeElement.text(currentTime);
}
//call functions to update the current date and time and update the colors 
  colorHour();
  textInput();
  colorUpdate();
  //set interval to update the current date and time every 1 second
  setInterval(updateTimeNow, 1000);

});

 