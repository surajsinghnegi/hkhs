var i = 0;
$(window).on('beforeunload', function(){
	if(i%4===0)
	{
   		if(window.AdMob) AdMob.showInterstitial();
	}
	i++;
});