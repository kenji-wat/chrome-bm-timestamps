// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// const chromeDiv = document.getElementById('chrome');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
// chromeDiv.innerHTML = `<input style="border:1px solid black" type="text" onMouseOut="alert(convertToDateTime(this.value))">`;

function convertToDateTime(srcChromeBookmarkDate) {
  //Hp --> The base date which google chrome considers while adding bookmarks
  var baseDate = new Date(1601, 0, 1);

  //Hp --> Total number of seconds in a day.
  var totalSecondsPerDay = 86400;

  //Hp --> Read total number of days and seconds from source chrome bookmark date.
  var quotient = Math.floor(srcChromeBookmarkDate / 1000000);
  var totalNoOfDays = Math.floor(quotient / totalSecondsPerDay);
  var totalNoOfSeconds = quotient % totalSecondsPerDay;

  //Hp --> Add total number of days to base google chrome date.
  var targetDate =  new Date(baseDate.setDate(baseDate.getDate() + totalNoOfDays));

  //Hp --> Add total number of seconds to target date.
  return new Date(targetDate.setSeconds(targetDate.getSeconds() + totalNoOfSeconds));
}
var myDate = convertToDateTime(13298288477505724);
alert(myDate);
