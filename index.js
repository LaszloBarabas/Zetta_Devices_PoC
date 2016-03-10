var zetta = require('zetta');
var LED = require('./device'); 


zetta()
  .name('LaszloBarabas')
  .use(LED.MyLed) 
  .listen(process.env.PORT || 2338, function(){
     console.log('Zetta is running at http://127.0.0.1:2338');
})




