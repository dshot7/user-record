const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retriving contacts
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//add contact
router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
        user_name : req.body.user_name,
        address : req.body.address,
        phone: req.body.contact,
        email : req.body.email
    });
    
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        }else
        {
            res.json({msg: 'Contact added Successfully'});;
        }
    });
});

    router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id: req.params.id},function(err,result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

module.exports=router;