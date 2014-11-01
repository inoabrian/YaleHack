$(document).ready(function(){
      if(document.URL == 'http://geopark.inoabrian.com/'){
          var images = ['screenshot', 'screenshot-2','screenshot-3']
          setTimeout(function(){
            document.getElementById('screenshot').style.display = 'none';
            document.getElementById('screenshot2').style.display = 'block';
            document.getElementById('screenshot3').style.display = 'none';
          }.bind(this), 2000);
      }
});
