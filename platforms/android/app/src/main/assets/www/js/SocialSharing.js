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

 function sharethis(){
   window.plugins.socialsharing.share('https://play.google.com/store/apps/details?id=com.devsun.hindikahaniya', null, null, null);
  };

