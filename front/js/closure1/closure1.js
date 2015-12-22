function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}
function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    //当执行setupHelp()函数的时候，并不会执行下面的闭包，但是上面的循环会执行。所以item就指向了helpText的最后一个对象
    //By the time the onfocus callbacks are executed, 
    //the loop has run its course and the item variable (shared by all three closures) 
    //has been left pointing to the last entry in the helpText list.
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

window.onload = function(){
	setupHelp();
}
