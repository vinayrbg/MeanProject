var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://vinay:raju@ds129394.mlab.com:29394/kickapp_vin',['products']);

// Get ALL products
router.get('/products',function(req,res,next){
    db.products.find(function(err,products){
        if(err){
            res.send(err);
        }
        res.json(products);
    });
});

// GET single product
router.get('/product/:id',function(req,res,next){
    db.products.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});

//Save Product
router.post('/products',function(req,res,next){
        var product = req.body;
        db.products.save(product, function(err,product){
            if(err){
                res.send(err);
            }
            console.log(product);
            res.json(product);
        });
});

router.delete('/products/:id',function(req,res,next){
    db.products.remove({_id: mongojs.ObjectId(req.params.id)},function(err,product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});
/*
router.delete('product/:id', function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });*/

module.exports = router;