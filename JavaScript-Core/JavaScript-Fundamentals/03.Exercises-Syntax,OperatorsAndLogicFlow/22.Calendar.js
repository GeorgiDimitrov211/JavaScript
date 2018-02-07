function calendar([day, month, year]){
  let date = new Date(year, month - 1, day);
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let firstWeekDay = new Date(year, month-1, 1).getDay();
  let daysInCurrentMonth = new Date(year, month, 0).getDate();
  let daysInPrevMonth = new Date(year, month - 1, 0).getDate();
  let calendarString = '';
  let prevMonthDaysArray = [];
  for(let i = 1; i<=daysInPrevMonth; i++){
    prevMonthDaysArray.push(i);
  }
  prevMonthDaysArray.reverse();
  calendarString += '<table>\n';
  calendarString += '<tr>';
  for(let headingRow = 0; headingRow <= 6; headingRow++){
    calendarString += '<th>' + days[headingRow] + '</th>';
  }
  calendarString += '</tr>\n';
  calendarString += firstWeekDay === 0 ? '' :'<tr>';
  for(let weekDay = firstWeekDay; weekDay > 0; weekDay--){
    calendarString += '<td class="prev-month">' + (prevMonthDaysArray[weekDay] + 1) + '</td>';
  }
  let weekDay = firstWeekDay;
  for(let dayCounter = 1; dayCounter <= daysInCurrentMonth; dayCounter++){
    weekDay = weekDay % 7;
    if (weekDay == 0){
      calendarString += '</tr>\n<tr>';
    }
    if (day == dayCounter){
      calendarString += '<td class="today">' + dayCounter + '</td>';
    }else{
      calendarString += '<td>' + dayCounter + '</td>';
    }
    if(dayCounter == daysInCurrentMonth){
      for(let i = 1; i<=6 - weekDay; i++){
        calendarString += '<td class="next-month">' + prevMonthDaysArray.pop() + '</td>';
      }
    }
    weekDay++;
  }
  calendarString += '</tr>\n'
  calendarString += '</table>';

  let indexOfClosingTr = calendarString.indexOf('</tr>\n</tr>')
  let stringPart1 = calendarString.substring(0, 101)
  let stringPart2 = calendarString.substring(107, calendarString.length)

  return firstWeekDay === 0 ? stringPart1+stringPart2 : calendarString;
}
document.getElementById('calendar').innerHTML = calendar(['24', '12', '2012']);
// document.getElementById('calendar').innerHTML = calendar(['4', '9', '2016']);

