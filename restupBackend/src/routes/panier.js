const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Plats = require('../models/Plats');

router.get('/',auth, async (req, res) => {
    try {
      
        const me =await User.findById(req.user.id).select('-password').populate("panier.plats");

      res.json(me.panier);
    } catch (err) {
 
      res.status(500).send('Server Error');
    }
  });

  router.post('/:id',auth,async(req,res)=>{
  
    try {
        const me =await User.findById(req.user.id).select('-password');;
        
        const newPlat =  {
          plats:req.params.id,
          quantity: req.body.quantity,
        };
  
        await  me.panier.unshift(newPlat)
        await  me.save();
      res.json({panier:me.panier});
    } catch (error) {
        
    res.status(500).send('Server Error');
    }
})

router.delete('/:id',auth,async(req,res)=>{
    try {
        const me =await User.findById(req.user.id).select('-password').populate("panier.plats");

          me.panier = me.panier.filter(
            ({ id }) => id !== req.params.id,
          
          );
        
   await   me.save();
      res.json({panier:me.panier});
    } catch (error) {
    res.status(500).send('Server Error');
    }
    })

    router.put('/clear',auth,async(req,res)=>{
        try {
            const me =await User.findById(req.user.id).select('-password').populate("panier.plats");
            me.panier=[]
       await   me.save();
          res.json({panier:me.panier});
        } catch (error) {
            
        res.status(500).send('Server Error');
        }
        })


        router.put('/:id/:quantity',auth, async (req, res) => {
            try {
              
              const me =await User.findById(req.user.id).select('-password').populate("panier.plats");;
        
               me.panier.map((x) => 
             {  if(x.id.toString() == req.params.id)
               x.quantity=req.params.quantity}
              );
              me.save()
                res.json(me.panier)
            } catch (err) {
        
              res.status(500).send('Server Error');
            }
          });

module.exports = router;