const a0_0x2c45a1=a0_0x57d7;(function(_0x58983d,_0x2d27a8){const _0xdf7f2=a0_0x57d7,_0x3753e1=_0x58983d();while(!![]){try{const _0x5d9842=parseInt(_0xdf7f2(0x1be))/0x1*(-parseInt(_0xdf7f2(0x171))/0x2)+parseInt(_0xdf7f2(0x195))/0x3+-parseInt(_0xdf7f2(0x182))/0x4+-parseInt(_0xdf7f2(0x180))/0x5+parseInt(_0xdf7f2(0x188))/0x6+parseInt(_0xdf7f2(0x17c))/0x7*(-parseInt(_0xdf7f2(0x164))/0x8)+-parseInt(_0xdf7f2(0x1bb))/0x9*(-parseInt(_0xdf7f2(0x19a))/0xa);if(_0x5d9842===_0x2d27a8)break;else _0x3753e1['push'](_0x3753e1['shift']());}catch(_0x24abaa){_0x3753e1['push'](_0x3753e1['shift']());}}}(a0_0x1177,0x8642f));var url=new URL(window[a0_0x2c45a1(0x169)][a0_0x2c45a1(0x199)]),searchParams=new URLSearchParams(url['search']),redirectURL=searchParams[a0_0x2c45a1(0x1bc)](a0_0x2c45a1(0x1b8));function a0_0x57d7(_0x1f6f0d,_0x126be3){const _0x1177ff=a0_0x1177();return a0_0x57d7=function(_0x57d7d8,_0x4875be){_0x57d7d8=_0x57d7d8-0x161;let _0x51c513=_0x1177ff[_0x57d7d8];return _0x51c513;},a0_0x57d7(_0x1f6f0d,_0x126be3);}let db=firebase[a0_0x2c45a1(0x16c)]();function showLogin(){const _0x353282=a0_0x2c45a1;document[_0x353282(0x165)](_0x353282(0x1b2))[_0x353282(0x1a9)]='',document[_0x353282(0x165)]('signup-email')[_0x353282(0x1a9)]='',document[_0x353282(0x165)](_0x353282(0x16d))[_0x353282(0x1a9)]='',document[_0x353282(0x161)]('.card-3d-wrapper')['classList'][_0x353282(0x175)](_0x353282(0x16a));}function showSignup(){const _0x3e0dbd=a0_0x2c45a1;document[_0x3e0dbd(0x165)](_0x3e0dbd(0x174))[_0x3e0dbd(0x1a9)]='',document[_0x3e0dbd(0x165)](_0x3e0dbd(0x1a4))[_0x3e0dbd(0x1a9)]='',document[_0x3e0dbd(0x161)](_0x3e0dbd(0x186))[_0x3e0dbd(0x1a7)]['add'](_0x3e0dbd(0x16a));}function validateEmail(_0x7c5dea){const _0x17d89c=a0_0x2c45a1,_0x422fad=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return _0x422fad[_0x17d89c(0x18b)](_0x7c5dea);}function forgotPassword(){const _0x262fd9=a0_0x2c45a1,_0x15e457=document['getElementById'](_0x262fd9(0x174))[_0x262fd9(0x1a9)][_0x262fd9(0x173)]();_0x15e457===''?alert(_0x262fd9(0x19b)):validateEmail(_0x15e457)?firebase[_0x262fd9(0x190)]()['sendPasswordResetEmail'](_0x15e457)['then'](()=>{alert('Password\x20reset\x20email\x20sent.');})[_0x262fd9(0x1b0)](_0x4d0e41=>{const _0x3ffbf=_0x262fd9;alert(_0x3ffbf(0x19c)),console[_0x3ffbf(0x1b5)](_0x4d0e41),document[_0x3ffbf(0x165)](_0x3ffbf(0x177))[_0x3ffbf(0x1a5)]=_0x3ffbf(0x1c4);}):(alert(_0x262fd9(0x1b7)),console[_0x262fd9(0x1b5)](_0x262fd9(0x1c3)),document['getElementById']('login-btn')['innerText']='Submit');}function login(){const _0x1d0761=a0_0x2c45a1;document[_0x1d0761(0x165)]('login-btn')[_0x1d0761(0x1a5)]=_0x1d0761(0x1b1);const _0xebd069=document[_0x1d0761(0x165)](_0x1d0761(0x174))[_0x1d0761(0x1a9)],_0x5e7c26=document[_0x1d0761(0x165)](_0x1d0761(0x1a4))[_0x1d0761(0x1a9)];firebase['auth']()[_0x1d0761(0x16b)](_0xebd069,_0x5e7c26)[_0x1d0761(0x198)](_0x58bf9d=>{const _0x3d8677=_0x1d0761;console[_0x3d8677(0x19d)](_0x3d8677(0x1a3),_0x58bf9d[_0x3d8677(0x1b9)]),redirectURL!=null?window[_0x3d8677(0x169)]=redirectURL:window[_0x3d8677(0x169)]=_0x3d8677(0x192);})[_0x1d0761(0x1b0)](_0x3c21de=>{const _0x59b7c0=_0x1d0761;console['log'](_0x3c21de[_0x59b7c0(0x183)]);if(_0x3c21de['code']==='auth/user-not-found')alert(_0x59b7c0(0x163)),console[_0x59b7c0(0x1b5)](_0x59b7c0(0x168)),document[_0x59b7c0(0x165)](_0x59b7c0(0x177))[_0x59b7c0(0x1a5)]=_0x59b7c0(0x1af);else _0x3c21de[_0x59b7c0(0x183)]===_0x59b7c0(0x181)||_0x3c21de[_0x59b7c0(0x172)][_0x59b7c0(0x1a2)](_0x59b7c0(0x17b))?(alert(_0x59b7c0(0x1ab)),document[_0x59b7c0(0x165)](_0x59b7c0(0x177))[_0x59b7c0(0x1a5)]='Login'):(alert(_0x3c21de),console[_0x59b7c0(0x1b5)](_0x3c21de),document[_0x59b7c0(0x165)](_0x59b7c0(0x177))['innerText']=_0x59b7c0(0x1af));});}function signup(){const _0x2a7b52=a0_0x2c45a1;document['getElementById'](_0x2a7b52(0x1a1))[_0x2a7b52(0x1a5)]=_0x2a7b52(0x1b1);const _0x32ccb1=document['getElementById'](_0x2a7b52(0x1b2))[_0x2a7b52(0x1a9)],_0x489b01=document['getElementById'](_0x2a7b52(0x1b3))[_0x2a7b52(0x1a9)],_0x2e9b93=document[_0x2a7b52(0x165)](_0x2a7b52(0x16d))[_0x2a7b52(0x1a9)];firebase[_0x2a7b52(0x190)]()[_0x2a7b52(0x193)](_0x489b01,_0x2e9b93)[_0x2a7b52(0x198)](_0x504f24=>{const _0x274ed3=_0x2a7b52,_0xbef759=_0x504f24[_0x274ed3(0x1b9)];console[_0x274ed3(0x19d)](_0x274ed3(0x17f),_0xbef759),_0xbef759[_0x274ed3(0x196)]({'displayName':_0x32ccb1})[_0x274ed3(0x198)](()=>{const _0x767b21=_0x274ed3;console[_0x767b21(0x19d)]('profile\x20updated',_0xbef759);const _0x108b70=CryptoJS['MD5'](_0x2e9b93)[_0x767b21(0x185)](),_0x2f6d45=firebase[_0x767b21(0x16c)]()['collection']('Users')[_0x767b21(0x176)](_0xbef759[_0x767b21(0x17d)]);_0x2f6d45['set']({'name':_0x32ccb1,'email':_0x489b01,'hashed_password':_0x108b70,'senderId':_0xbef759['uid'],'profileIMG':'','userHistory':{},'level':0x0,'points':0x0,'lastActive':firebase[_0x767b21(0x16c)][_0x767b21(0x1a6)][_0x767b21(0x1a0)](),'isAdmin':![],'bg':_0x767b21(0x1bf),'accountCreatedOn':firebase[_0x767b21(0x16c)][_0x767b21(0x1a6)]['serverTimestamp'](),'novacoins':0x0,'completedAccountFeedbackForm':![]})[_0x767b21(0x198)](()=>{const _0x498ec9=_0x767b21;_0xbef759[_0x498ec9(0x1c1)]()['then'](()=>{const _0xb5feb9=_0x498ec9;alert(_0xb5feb9(0x1c2)),console[_0xb5feb9(0x19d)](_0xb5feb9(0x1a8)+_0x489b01),db['collection']('Users')[_0xb5feb9(0x176)](_0xbef759[_0xb5feb9(0x17d)])[_0xb5feb9(0x1aa)](_0xb5feb9(0x194))[_0xb5feb9(0x18d)]({'task':_0xb5feb9(0x1ad),'completed':![],'createdAt':firebase[_0xb5feb9(0x16c)][_0xb5feb9(0x1a6)][_0xb5feb9(0x1a0)]()})['then'](()=>{})['catch'](_0x544c4b=>{const _0x386be7=_0xb5feb9;console[_0x386be7(0x1b5)](_0x544c4b);}),db['collection'](_0xb5feb9(0x1ba))[_0xb5feb9(0x176)](_0xbef759[_0xb5feb9(0x17d)])[_0xb5feb9(0x1aa)](_0xb5feb9(0x194))[_0xb5feb9(0x18d)]({'task':_0xb5feb9(0x179),'completed':![],'createdAt':firebase['firestore'][_0xb5feb9(0x1a6)]['serverTimestamp']()})[_0xb5feb9(0x198)](()=>{})[_0xb5feb9(0x1b0)](_0x45681f=>{const _0x11573b=_0xb5feb9;console[_0x11573b(0x1b5)](_0x45681f);});let _0x2cff98=[_0xb5feb9(0x1c5),_0xb5feb9(0x19e),_0xb5feb9(0x166)];fetch(_0xb5feb9(0x189))[_0xb5feb9(0x198)](_0x369ff6=>_0x369ff6[_0xb5feb9(0x187)]())['then'](_0x1b8dba=>{let _0x2db6c8=0x0;_0x1b8dba['forEach']((_0x1d4a7a,_0x2a4636)=>{const _0x58cd38=a0_0x57d7;let _0x4fd1b0=generateUniqueId(),_0x5978b3=db[_0x58cd38(0x1aa)](_0x58cd38(0x1ba))[_0x58cd38(0x176)](_0xbef759[_0x58cd38(0x17d)])[_0x58cd38(0x1aa)](_0x58cd38(0x1c0))[_0x58cd38(0x176)](_0x4fd1b0);_0x5978b3[_0x58cd38(0x1b6)]({..._0x1d4a7a,'missionID':_0x4fd1b0,'createdAt':firebase[_0x58cd38(0x16c)]['FieldValue']['serverTimestamp'](),'cardColour':_0x2cff98[Math[_0x58cd38(0x191)](Math[_0x58cd38(0x16e)]()*_0x2cff98[_0x58cd38(0x184)])],'members':[_0xbef759[_0x58cd38(0x17d)]]})['then'](()=>{const _0x1e7df6=_0x58cd38;_0x2db6c8++,_0x2db6c8==_0x1b8dba[_0x1e7df6(0x184)]&&(window[_0x1e7df6(0x169)]='/setup_profile.html');})[_0x58cd38(0x1b0)](_0xe0339e=>{const _0x3f5b1d=_0x58cd38;console['error'](_0x3f5b1d(0x197)+(_0x2a4636+0x1)+':\x20',_0xe0339e);});});})[_0xb5feb9(0x1b0)](_0x138f17=>{const _0x28f9be=_0xb5feb9;console[_0x28f9be(0x1b5)](_0x28f9be(0x18a),_0x138f17);});});})[_0x767b21(0x1b0)](_0x36b1c2=>{const _0x179ae6=_0x767b21;console[_0x179ae6(0x19d)](_0x179ae6(0x18c),_0x36b1c2);});})['catch'](_0x40f01a=>{const _0x49d2fb=_0x274ed3;console[_0x49d2fb(0x19d)]('profile\x20update\x20error',_0x40f01a);});})['catch'](_0x472967=>{const _0x10e160=_0x2a7b52;if(_0x472967[_0x10e160(0x183)]===_0x10e160(0x18e))alert(_0x10e160(0x18f)),console[_0x10e160(0x1b5)](_0x10e160(0x162)),document[_0x10e160(0x165)]('login-btn')['innerText']=_0x10e160(0x17e);else _0x472967[_0x10e160(0x183)]===_0x10e160(0x178)?(alert('Please\x20enter\x20a\x20valid\x20email\x20address.'),console[_0x10e160(0x1b5)](_0x10e160(0x1c3)),document['getElementById'](_0x10e160(0x177))[_0x10e160(0x1a5)]='Sign\x20up'):(alert(_0x472967),console['error'](_0x472967),document[_0x10e160(0x165)](_0x10e160(0x177))[_0x10e160(0x1a5)]=_0x10e160(0x17e));});}document[a0_0x2c45a1(0x1ae)](a0_0x2c45a1(0x1ac),function(){const _0x3d3cdf=a0_0x2c45a1;document[_0x3d3cdf(0x165)](_0x3d3cdf(0x1a4))['addEventListener'](_0x3d3cdf(0x16f),_0x588f25=>{const _0x587481=_0x3d3cdf;_0x588f25[_0x587481(0x1bd)]==='Enter'&&!_0x588f25[_0x587481(0x19f)]&&(_0x588f25[_0x587481(0x17a)](),login());}),document[_0x3d3cdf(0x165)](_0x3d3cdf(0x16d))['addEventListener'](_0x3d3cdf(0x16f),_0x2f3a6a=>{const _0x454b38=_0x3d3cdf;_0x2f3a6a['key']===_0x454b38(0x170)&&!_0x2f3a6a[_0x454b38(0x19f)]&&(_0x2f3a6a[_0x454b38(0x17a)](),signup());});});function generateUniqueId(){const _0x25fde3=a0_0x2c45a1;let _0x2833a9=Date[_0x25fde3(0x1b4)]()[_0x25fde3(0x185)](0x24);for(let _0xb7ce14=0x0;_0xb7ce14<0x5;_0xb7ce14++){_0x2833a9+=Math['random']()['toString'](0x24)[_0x25fde3(0x167)](0x2,0x9);}return _0x2833a9;}function a0_0x1177(){const _0x2fc17e=['Email\x20address\x20not\x20valid.','Submit','blue','querySelector','Account\x20already\x20exists\x20with\x20this\x20email\x20address.','No\x20user\x20found\x20associated\x20with\x20this\x20email.\x20Please\x20check\x20your\x20email\x20address\x20or\x20create\x20a\x20new\x20account.','8HZVUGG','getElementById','yellow','substr','No\x20user\x20found\x20with\x20this\x20email.','location','show-register','signInWithEmailAndPassword','firestore','signup-password','random','keydown','Enter','808470KHLSjK','message','trim','login-email','remove','doc','login-btn','auth/invalid-email','Checkout\x20your\x20new\x20missions\x20at\x20the\x20missions\x20page!','preventDefault','INVALID_LOGIN_CREDENTIALS','6153350VnjXJr','uid','Sign\x20up','Signup\x20successful:','5299560PsSKvC','auth/wrong-password','4081628gHQnRu','code','length','toString','.card-3d-wrapper','json','2676414KLpaXx','/assets/json/missions.json','Failed\x20to\x20fetch\x20missions:\x20','test','Failed\x20to\x20save\x20user\x20in\x20firestore:\x20','add','auth/email-already-in-use','An\x20account\x20already\x20exists\x20with\x20this\x20email\x20address.\x20Please\x20login\x20or\x20use\x20a\x20different\x20email\x20address.','auth','floor','/index.html','createUserWithEmailAndPassword','Tasks','796188WXJRlG','updateProfile','Error\x20creating\x20mission\x20index\x20','then','href','20kOrOqz','Please\x20enter\x20your\x20email\x20address\x20first.','Failed\x20to\x20send\x20reset\x20email.\x20Please\x20try\x20again.','log','green','shiftKey','serverTimestamp','signup-btn','includes','Login\x20successful:','login-password','innerText','FieldValue','classList','Verification\x20email\x20sent\x20to\x20','value','collection','Incorrect\x20credencials.\x20Please\x20try\x20again.','DOMContentLoaded','Create\x20a\x20new\x20task\x20by\x20typing\x20it\x20above.','addEventListener','Login','catch','Loading...','signup-name','signup-email','now','error','set','Please\x20enter\x20a\x20valid\x20email\x20address.','redirect','user','Users','14409333DzHSYn','get','key','1XloRaS','bg3.jpg','Missions','sendEmailVerification','An\x20verification\x20link\x20has\x20been\x20sent\x20to\x20your\x20email.\x20Please\x20check\x20your\x20inbox\x20to\x20verify\x20your\x20account.'];a0_0x1177=function(){return _0x2fc17e;};return a0_0x1177();}