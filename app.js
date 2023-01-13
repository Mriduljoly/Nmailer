
const express =require("express");
const nodemailer =require("nodemailer");
const app =  new express();
const port = 3000

function sendEmail(){
    return new Promise((resolve,reject)=>{

        var transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"testmail1232000@gmail.com",
                pass: "eyggsxyzbletqxfr"
            }  
        })
        const mail_info = {
            from: "testmail1232000@gmail.com",
            to:"mriduljoly20002gmail.com",
            subject:"Test Mail",
            text:"Nodemailer Testing"
        }
        transporter.sendMail(mail_info, function(error,info){
            if(error){
                console.log(error)
                return reject({message: `An error occured`})
            }
            
                console.log("mail has sent")
                return resolve({message:"Mail sent succesfuly"})
            })
       })
    }
app.post('/',(req,res) =>{
    
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})

app.listen(port, ()=>{
    console.log(`Nmailer is listening to the port at:${port}`)
})


