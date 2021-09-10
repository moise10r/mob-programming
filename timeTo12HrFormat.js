function timeTo12HrFormat(time) {
  var time_part_array = time.split(":");
  var ampm = "AM";

  if (time_part_array[0] >= 12) {
    ampm = "PM";
  }

  if (time_part_array[0] > 12) {
    time_part_array[0] = time_part_array[0] - 12;
  }

  formatted_time =
    time_part_array[0] +
    ":" +
    time_part_array[1] +
    ":" +
    time_part_array[2] +
    " " +
    ampm;

  return formatted_time;
}
module.exports = timeTo12HrFormat;
var time = timeTo12HrFormat("24:30:00");
console.log(time); 
