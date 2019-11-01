
fn = 'readTextFile.txt';

var fs    = require('fs');
var util  = require('util');

fs.readFile(fn, (err, data) => {
    if (err) throw err;
    console.log(""+data);
  });
/*
fs.open('foo.txt', 'w', function(err, fd) {
  for (var i = 0; i < 100; i++)
    fs.write(fd, util.format('line %d\n', i));
  fs.close(fd);
});
*/

/*
fh = fopen(fn, 0); // Open the file for reading.
if(fh!=-1) // Check if the file has been successfully opened.
{
    length = flength(fh); // Get the length of the file.
    str = fread(fh, length); // Read in the entire file.
    fclose(fh); // Close the file.

    // Display the contents of the file.
    write(str);
}
*/
