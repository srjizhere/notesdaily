const nodemailer = require('nodemailer');




const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'astrid.hamill39@ethereal.email',
        pass: '9yU9RU7ng6g39v9uP4'
    }
});

transporter.sendMail({
    to :"astrid.hamill39@ethereal.email",
    from :"bhia@gmail.com",
    subject:"hey from mail.js",
    text:"blah blah blah very"
})
.then(()=>{
    console.log("done sendt");
}).catch((err)=>{
    console.log(err);
})

