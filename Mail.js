var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abbasmurudkar18@gmail.com',
    pass: 'a1b2b3a4s5'
  }
});

var mailOptions = {
  from: 'abbasmurudkar18@gmail.com',
  to: 'mohdabbas.murudkar07@nmims.edu.im',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

var http = require('form')