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

        if(!product.name || !product.price){
            res.status(404);
            res.json({
                "error":"Bad data"
            });
        }else{
            db.products.save(product, function(err,product){
                if(err){
                    res.send(err);
                }
                console.log(product);
                res.json(product);
            });
        }
});

//Delete Product
router.delete('/products/:id',function(req,res,next){
    db.products.remove({_id: mongojs.ObjectId(req.params.id)},function(err,product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});

// Update task
/*router.put('/product/:id',function(req,res,next){
    var product = req.body;
        db.products.findOne({_id: mongojs.ObjectId(req.params.id)},product,{},function(err,product){
            if(err){
                res.send(err);
            }
            res.json(product);
        });
});*/

router.put('/product/:id',function(req,res,next){
    console.log(req.params.id);
    console.log(req.body);
    /*db.products.findAndModify(req.params.id,
        req.body,
        {
            new:true
        },
        function(err,products){
            if(err){
                res.send("Error in updating");
            }
            else{
                res.json(products);
            }
        }
    )*/
    db.products.findAndModify({
        query: { _id: mongojs.ObjectId(req.params.id) },
        update: { $set: req.body  },
        new: true
    }, function (err, doc, lastErrorObject) {
        console.log(err);
        console.log(doc);
        console.log(lastErrorObject);
        res.json(doc);
    })
});

module.exports = router;