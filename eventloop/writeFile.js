const fs = require('fs');
const OUTPUT = `
24
637
386
648
`
fs.writeFile(`${__dirname}/out.txt`, OUTPUT , (err) =>{
    if(err) throw err;

    console.log('Write Sucesssfull');
})
