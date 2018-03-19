'use strict'

var fs = require("fs")

console.log(process.execPath)
console.log(__dirname)
console.log(process.cwd())

var root = process.cwd();


// sync
// var data = fs.readFileSync(root + "/nodejs-learning/1.txt");
// console.log(data.toString());

//async
// var data = fs.readFile(root + "/nodejs-learning/1.txt", {flag:'r+', encoding:'utf8'}, function(err, data) {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
// });

// var w_data = '这是一段通过fs.writeFile函数写入的内容；\r\n';
// var w_data = new Buffer(w_data);
// fs.writeFile(root + "/nodejs-learning/w.txt", w_data, {flag:'a'}, function(err) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("sucessful")
//     }
// })

// fs.writeFileSync(root + "/nodejs-learning/w.txt", w_data, {encoding:'utf8', flag:'w+'});

// var rs = fs.createReadStream(root + "/nodejs-learning/1.txt", "utf8");
// rs.on('data', function(chunk) {
//     console.log('DATA:');
//     console.log(chunk);
// })

// rs.on('end', function() {
//     console.log('End');
// })

// rs.on('error', function(err){
//     console.log('Error:' + err)
// })

// var ws1 = fs.createWriteStream(root + '/nodejs-learning/output1.txt', 'utf-8');
// ws1.write('Using Stream to write text...\n');
// ws1.write('END.');
// ws1.end();

// var ws2 = fs.createWriteStream(root + '/nodejs-learning/output2.txt');
// ws2.write(new Buffer('Using Stream to write bytes...\n'));
// ws2.write(new Buffer('END.', 'utf8'));
// ws2.end();

var rs = fs.createReadStream(root + "/nodejs-learning/1.txt", "utf8");
var ws = fs.createWriteStream(root + "/nodejs-learning/1-copy.txt");

rs.pipe(ws);