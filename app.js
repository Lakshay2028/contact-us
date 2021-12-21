

// Get the data from each element on the form.
const nam = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('msg');
const phn = document.getElementById('phn');

// This variable stores all the data.
let data = 
    '\r Name: ' + nam.value + ' \r\n ' + 
    'Email: ' + email.value + ' \r\n ' + 
    'phone: ' + phn.value + ' \r\n ' + 
    'Message: ' + msg.value;
    
function myfunction(){
const fs = require('fs');
fs.writeFile('test',data,(err)=>{
    if (err) throw err;
})
}