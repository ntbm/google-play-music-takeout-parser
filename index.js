const htmlparser = require("htmlparser2")
const fs = require('fs')
let div = 0
let state = ''
console.log(div);
let parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === 'div') div++
    },
    ontext: function(text){
        console.log("-->", text);
    },
    onclosetag: function(tagname){
    }
}, {decodeEntities: true});
fs.readFile('./MeineAktivitäten.html', 'utf8', ( err, data) => {
  parser.write(data)
  console.log(div);
  parser.end()
})
