function fbShare(){
  window.plugins.socialsharing.shareViaFacebook('Message via Facebook', 
                                                 null /* img */, 
                                                 null /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function whatsappShare(){
  window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp',
                                                 null /* img */,
                                                 "https://pointdeveloper.com/" /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function twitterShare(){
   window.plugins.socialsharing.shareViaTwitter('Message via Twitter',
                                                 null /* img */, 
                                                 'http://twitter.com/', 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
  };

 function otherShare(){
 	window.plugins.socialsharing.share('इस बेहतरीन ऐप के ज़रिए बच्चें अलग-अलग विषयवस्तु की कई मज़ेदार कहानियों का लुत्फ उठा सकते है। इस रोमांच के साथ- साथ ही वो रूबरू होंगे आदर्श मूल्यों से जो उनके जीवन में नैतिकता के मोती पिरोने में मददगार होंगे।. \nhttps://play.google.com/store/apps/details?id=com.devsun.hindikahaniya', null, null, null);
  };

 function storyShare(){ 
   var data = $('.text-flow').text();
   window.plugins.socialsharing.share('Download app for more hindi stories \n https://play.google.com/store/apps/details?id=com.devsun.hindikahaniya \n\n'+data, null, null, null);
  };

