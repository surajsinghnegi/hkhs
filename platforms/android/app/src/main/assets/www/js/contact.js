$(window).on('beforeunload', function(){
   if(AdMob) AdMob.showInterstitial();
});