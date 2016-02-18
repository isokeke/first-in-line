function main() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (m < 10) {m = "0" + m};
    if (s < 10) {s = "0" + s};
    var timeNow = h + ":" + m + ":" + s;
    if (timeNow == window.timeConfirmed) { nav(); }
    document.getElementById('clock').innerHTML = "<h1>" + timeNow + "</h1>";
    var t = setTimeout(main, 100);
}
function nav() {
    var address = document.getElementById('address').value;
    window.location.href = address;
}
window.onload = function(){
  window.timeConfirmed = "";
  document.getElementById("confirm").addEventListener("click", function(){
      var hours = document.getElementById('hours');
      var hourText = hours.options[hours.selectedIndex].text;
      var minutes = document.getElementById('minutes');
      var minutesText = minutes.options[minutes.selectedIndex].text;
      var seconds = document.getElementById('seconds');
      var secondsText = seconds.options[seconds.selectedIndex].text;
      var time = hourText + ":" + minutesText + ":" + secondsText;
      document.getElementById('confirmed').innerHTML = "Navigating to <strong>" + document.getElementById('address').value + "</strong> at <strong>" + time + "</strong>";
      window.timeConfirmed = time;
  });
}
