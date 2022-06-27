const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com', //para o gmail
    port: 465, //porta do gmail
    secure: true,
   auth: {
    user: 'seuemail@gmail.com',
    pass: 'suasenha',
   }
});


transport.sendMail({
    from: 'Seu nome <seuemail@gmail.com>',
    to: 'email da pessoa',
    subject: 'Enviando email com Nodemailer',
    html: '<h1sua frase</h1> <p>sua frase',
    text: 'texto '

})
.then(() => console.log('Email enviado com sucesso!')) 
.catch((err) => console.log('Erro ao enviar email:',err));