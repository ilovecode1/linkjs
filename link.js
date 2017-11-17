var link = function() {
  this.in = "";
  
  this.setInput = function(input) {
  	this.in = input;
    return this;
  }
  
  this.setTo = function(selector) {
    var sel = document.querySelectorAll(selector);
    
    for (var i = sel.length - 1; i >= 0; i--) {
        sel[i].innerHTML = this.out();
    }
    
    return this;
  }
  
  this.out = function() {
  	var input = this.in;
  	var output;
    
    output = input.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
    output = output.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
    output = output.replace(/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim, '<a href="mailto:$1">$1</a>');
    
    return output;
  }
}

function Link(input) {
	return new link().setInput(input);
}
