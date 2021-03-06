import  express  from "express";

import initializeMailgun from "../../config/mail.config.js";

const Router = express.Router();


Router.post("/",async(req,res)=>{
    try{
        const{from, to, subject, text} = req.body.mailData;
        const sentMail = initializeMailgun();
        await sentMail.messages().send({from, to,subject,text});
        return res.status(200).json({status:"Email sent"});

    }catch(error){
        return res.status(500).json({error: error.message})
    }
})

export default Router;