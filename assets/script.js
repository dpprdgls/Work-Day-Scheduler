// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const localeSettings = {};
daysjs.locale(localeSettings);
//waits until the dom is fully loaded before running the code inside the func 


$(function () {
  //gets current hour of day using Day.js library

  const currentHour = dayjs.().format('H');
//changes color of block based on past present future hours and toggles class
  function hourColor(){
    $('.time-block').each(funciotn(){
      const blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour === currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });
  }

  //when user inputs text and clicks save it will store data to local storage for that text area
  function textInput(){
    $('.saveBtn').on('click', function(){
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }

  //update the color of the block based on the current hour of the day
  function colorUpdate(){
    $('.time-block').each(funciotn(){
      const blockHour = parseInt(this.id);
      if (blockHour === currentHour){
        $(this).removeClass('past future').addClass('present');
      } else if (blockHour < currentHour){
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('present past').addClass('future');
      }
    });
  }



  

}

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.