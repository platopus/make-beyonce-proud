var handlebars = require('handlebars');
var fs = require('fs');

// get your data into a variable
var fooJson = require('C:\\Users\\Emma-Ashley\\Documents\\make-beyonce-proud\\menu.json');

// read the file and use the callback to render
fs.readFile('C:\\Users\\Emma-Ashley\\Documents\\make-beyonce-proud\\menu-template.hbs', function(err, data){
  if (!err) {
    // make the buffer into a string
    var source = data.toString();
    // call the render function
    renderToString(source, fooJson);
  } else {
    // handle file read error
  }
});

// this will be called after the file is read
function renderToString(source, data) {
  var template = handlebars.compile(source);
  var outputString = template(data);
  console.log(outputString);
  createFile(outputString);
}


function createFile (output){
fs.writeFile("menu.html", output, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
}