(function () {
  var header = document.createElement('h1');
  header.innerHTML = 'Is it Friday yet?';
  document.body.appendChild(header);


  var currentTZ = moment.tz.guess();

  var dayOfWeek = moment.tz(moment.now(), currentTZ).format('d');
  var isCurrentFriday = false;

  var currentMessage = document.createElement('h2');
  if (dayOfWeek === "5") {
    currentMessage.innerHTML = 'For you, Yes it is!';
    isCurrentFriday = true;

  } else {
    currentMessage.innerHTML = 'For you, it isn\'t :(';
  }

  document.body.appendChild(currentMessage);

  var fridayTimezones = [];

  moment.tz.names().forEach((e) => {
    var fixedDayOfWeek = moment.tz(moment.now(), e).format('d');

    if (fixedDayOfWeek === "5") {
      fridayTimezones.push(e);
    }
  });

  if (fridayTimezones.length > 0) {
    var extraMessage = document.createElement('h2');
    extraMessage.innerHTML = (isCurrentFriday) ? 'And it\'s Friday elsewhere too!' : 'But it is Friday somewhere!';

    var fridayTimezoneList = document.createElement('details');
    fridayTimezoneList.innerHTML = '<summary>Places where it is Friday</summary><ul><li>' + fridayTimezones.join('</li><li>') + '</li></ul>';

    document.body.appendChild(extraMessage);
    document.body.appendChild(fridayTimezoneList);
  } else {
    var extraMessage = document.createElement('h2');
    extraMessage.innerHTML = 'And no where else around the world :( :('
    document.body.appendChild(extraMessage);
  }
})();
