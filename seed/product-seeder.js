var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
    imagePath: 'https://static-ca.ebgames.ca/images/products/716645/3max.jpg',
    title: 'GTA V',
    description: 'Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games.',
    price: 25
}),
new Product({
    imagePath: 'https://i.pinimg.com/736x/ac/c5/ea/acc5eac6b79212d2dfa270d8454d5037.jpg',
    title: 'Titanfall II',
    description: 'Titanfall 2 is a first-person shooter video game, developed by Respawn Entertainment and published by Electronic Arts.',
    price: 20
}),
new Product({
    imagePath: 'https://i.pinimg.com/736x/ac/c5/ea/acc5eac6b79212d2dfa270d8454d5037.jpg',
    title: 'Titanfall I',
    description: 'Titanfall is a first-person shooter video game, developed by Respawn Entertainment and published by Electronic Arts.',
    price: 15
})
];
var done = 0;
for(var i = 0; i < products.length; i++) {
  products[i].save(function(err,result){
      done++;
      if(done === products.length){
          exit();
      }
  });
}
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  })
 

function exit(){
    mongoose.disconnect();
}