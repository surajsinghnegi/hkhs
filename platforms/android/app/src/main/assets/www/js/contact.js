var i = 0;
$(window).on('beforeunload', function(){
	if(i%3===0)
	{
   		if(window.AdMob) AdMob.showInterstitial();
	}
	i++;
});