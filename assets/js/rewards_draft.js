const a0_0x5d3e3b=a0_0x571a;(function(_0x1e64a6,_0x20a4b1){const _0x4b21c0=a0_0x571a,_0x2e53d3=_0x1e64a6();while(!![]){try{const _0x34a690=parseInt(_0x4b21c0(0xd1))/0x1+parseInt(_0x4b21c0(0xd8))/0x2+parseInt(_0x4b21c0(0xe2))/0x3*(-parseInt(_0x4b21c0(0xf7))/0x4)+parseInt(_0x4b21c0(0xe6))/0x5*(parseInt(_0x4b21c0(0xb5))/0x6)+parseInt(_0x4b21c0(0xf4))/0x7*(parseInt(_0x4b21c0(0xea))/0x8)+-parseInt(_0x4b21c0(0xd6))/0x9*(parseInt(_0x4b21c0(0xe9))/0xa)+-parseInt(_0x4b21c0(0xbc))/0xb;if(_0x34a690===_0x20a4b1)break;else _0x2e53d3['push'](_0x2e53d3['shift']());}catch(_0x423274){_0x2e53d3['push'](_0x2e53d3['shift']());}}}(a0_0x2ee9,0x2796d));let db=firebase['firestore'](),auth=firebase[a0_0x5d3e3b(0xdf)]();function a0_0x571a(_0x227c63,_0x2d4be8){const _0x2ee9d7=a0_0x2ee9();return a0_0x571a=function(_0x571a2b,_0xf8a2fb){_0x571a2b=_0x571a2b-0xb1;let _0x510a29=_0x2ee9d7[_0x571a2b];return _0x510a29;},a0_0x571a(_0x227c63,_0x2d4be8);}function smoothScrollAboveElement(_0x38b320,_0x30ce3d){const _0x19201f=a0_0x5d3e3b,_0x416ad9=document[_0x19201f(0xeb)](_0x38b320);if(_0x416ad9){const _0x52900b=_0x416ad9[_0x19201f(0xbd)](),_0x43542e=_0x52900b[_0x19201f(0xf3)]+window[_0x19201f(0xee)];window[_0x19201f(0x103)]({'top':_0x43542e-_0x30ce3d,'behavior':_0x19201f(0xc7)});}}function sell(_0x66ed40,_0x58820a){const _0x347a97=a0_0x5d3e3b;confirm(_0x347a97(0xbf)+_0x66ed40+'?')&&db['collection'](_0x347a97(0xd7))[_0x347a97(0xce)](auth[_0x347a97(0x100)][_0x347a97(0xca)])['collection']('Redeemed_Items')[_0x347a97(0xbe)]('item','==',_0x66ed40)[_0x347a97(0xc8)]()[_0x347a97(0xe3)](_0x172935=>{const _0x58f3c3=_0x347a97;_0x172935[_0x58f3c3(0xc4)](_0x36c386=>{const _0x16bc26=_0x58f3c3;db[_0x16bc26(0xb9)](_0x16bc26(0xd7))[_0x16bc26(0xce)](auth[_0x16bc26(0x100)][_0x16bc26(0xca)])[_0x16bc26(0xb9)](_0x16bc26(0xed))['doc'](_0x36c386['id'])['delete']()[_0x16bc26(0xe3)](()=>{const _0x52768f=_0x16bc26;db[_0x52768f(0xb9)]('Users')[_0x52768f(0xce)](auth[_0x52768f(0x100)]['uid'])[_0x52768f(0xc8)]()[_0x52768f(0xe3)](_0x226069=>{const _0x166ca9=_0x52768f;if(_0x226069[_0x166ca9(0xff)]){const _0x246d6c=_0x226069['data']();db[_0x166ca9(0xb9)](_0x166ca9(0xd7))[_0x166ca9(0xce)](auth[_0x166ca9(0x100)][_0x166ca9(0xca)])[_0x166ca9(0xc2)]({'novacoins':_0x246d6c[_0x166ca9(0xe8)]+=parseInt(_0x58820a)})[_0x166ca9(0xe3)](()=>{const _0x23ae6b=_0x166ca9;location[_0x23ae6b(0xfd)]();})[_0x166ca9(0xf1)](_0x57258e=>{const _0x1542ed=_0x166ca9;console[_0x1542ed(0xb7)](_0x1542ed(0xd9),_0x57258e),alert('Unable\x20to\x20sell\x20item.\x20Please\x20try\x20again\x20later.');});}})[_0x52768f(0xf1)](_0x3a5dcf=>{const _0x6a4b52=_0x52768f;console[_0x6a4b52(0xb7)](_0x6a4b52(0xd9),_0x3a5dcf),alert(_0x6a4b52(0xc6));});})[_0x16bc26(0xf1)](_0x20f2f2=>{const _0x2deeb7=_0x16bc26;console[_0x2deeb7(0xb7)](_0x2deeb7(0xd9),_0x20f2f2),alert(_0x2deeb7(0xc6));});});});}function redeem(_0xf91e7f,_0x21a45c){const _0x56ca8a=a0_0x5d3e3b;db[_0x56ca8a(0xb9)](_0x56ca8a(0xd7))[_0x56ca8a(0xce)](auth[_0x56ca8a(0x100)][_0x56ca8a(0xca)])[_0x56ca8a(0xc8)]()[_0x56ca8a(0xe3)](_0x27d586=>{const _0x3a8d22=_0x56ca8a;if(_0x27d586[_0x3a8d22(0xff)]){const _0x2df46d=_0x27d586[_0x3a8d22(0xc0)]();_0x2df46d[_0x3a8d22(0xe8)]>=parseInt(_0x21a45c)?(db[_0x3a8d22(0xb9)](_0x3a8d22(0xd7))[_0x3a8d22(0xce)](auth[_0x3a8d22(0x100)][_0x3a8d22(0xca)])[_0x3a8d22(0xc2)]({'novacoins':_0x2df46d[_0x3a8d22(0xe8)]-parseInt(_0x21a45c)}),document['getElementById'](_0x3a8d22(0xfa))[_0x3a8d22(0x102)]=_0x2df46d[_0x3a8d22(0xe8)]-parseInt(_0x21a45c),db[_0x3a8d22(0xb9)](_0x3a8d22(0xd7))['doc'](auth[_0x3a8d22(0x100)][_0x3a8d22(0xca)])[_0x3a8d22(0xb9)](_0x3a8d22(0xed))['add']({'item':_0xf91e7f,'novacoins':parseInt(_0x21a45c),'redeemedAt':new Date()})[_0x3a8d22(0xe3)](()=>{const _0x5809dd=_0x3a8d22;alert(_0x5809dd(0xb6)+_0xf91e7f+'!'),location['reload']();})[_0x3a8d22(0xf1)](_0x15b58f=>{const _0xb2240e=_0x3a8d22;console[_0xb2240e(0xb7)](_0x15b58f);})):alert(_0x3a8d22(0xfb));}});}function a0_0x2ee9(){const _0x9ae430=['collection','max-w-sm\x20bg-white\x20border\x20border-gray-200\x20rounded-lg\x20shadow-md','onAuthStateChanged','2214091iaZHLA','getBoundingClientRect','where','Are\x20you\x20sure\x20you\x20want\x20to\x20sell\x20','data','alt','update','div','forEach','toLowerCase','Unable\x20to\x20sell\x20item.\x20Please\x20try\x20again\x20later.','smooth','get','novacoins:\x20','uid','p-4','img','name','doc','location','appendChild','312140wHxUmj','myrewards-items','text-gray-600','set','dataset','2149812WnQaBc','Users','562498FOytkm','Error\x20deleting\x20redeemed\x20item','currentUser-name','href','style','profileIMG','.png','auth','inline-flex\x20items-center\x20px-3\x20py-2\x20text-sm\x20font-medium\x20text-center\x20text-white\x20bg-red-700\x20rounded-lg\x20hover:bg-red-800\x20focus:ring-4\x20focus:outline-none\x20focus:ring-blue-300\x20dark:bg-blue-600\x20dark:hover:bg-blue-700\x20dark:focus:ring-blue-800\x20mt-10','/assets/img/default_user.jpeg','706158zjKPlo','then','/signin.html','cursor','105245PvgPVy','src','novacoins','10HJXLgh','1992KCYaxD','getElementById','currentUser-email','Redeemed_Items','pageYOffset','pointer','Profile\x20picture\x20of\x20','catch','DOMContentLoaded','top','4501zPzEMx','none','onclick','4OIwJjX','currentUser-profile-picture','/assets/img/rewards/','available-novacoins','You\x20don\x27t\x20have\x20enough\x20astral\x20tokens\x20to\x20redeem!','createElement','reload','textDecoration','exists','currentUser','rounded-t-lg','innerHTML','scrollTo','item','textContent','email','className','24IpEflf','Successfully\x20Redeemed\x20','error','addEventListener'];a0_0x2ee9=function(){return _0x9ae430;};return a0_0x2ee9();}document[a0_0x5d3e3b(0xb8)](a0_0x5d3e3b(0xf2),function(){const _0x13dc2d=a0_0x5d3e3b;auth[_0x13dc2d(0xbb)](function(_0x10f76c){const _0x1ead57=_0x13dc2d;if(_0x10f76c){const _0x49070c=db[_0x1ead57(0xb9)](_0x1ead57(0xd7))[_0x1ead57(0xce)](_0x10f76c['uid']),_0x3a3ca2=new Date();_0x49070c[_0x1ead57(0xd4)]({'lastActive':_0x3a3ca2},{'merge':!![]}),db[_0x1ead57(0xb9)](_0x1ead57(0xd7))[_0x1ead57(0xce)](auth[_0x1ead57(0x100)][_0x1ead57(0xca)])['get']()['then'](_0x3ea728=>{const _0x304429=_0x1ead57;if(_0x3ea728[_0x304429(0xff)]){const _0x5e030c=_0x3ea728[_0x304429(0xc0)]();document[_0x304429(0xeb)](_0x304429(0xda))['innerHTML']=_0x5e030c[_0x304429(0xcd)],document[_0x304429(0xeb)](_0x304429(0xec))['innerHTML']=_0x5e030c[_0x304429(0xb3)],document['getElementById'](_0x304429(0xf8))[_0x304429(0xe7)]=_0x5e030c[_0x304429(0xdd)]==''?_0x304429(0xe1):_0x5e030c[_0x304429(0xdd)],document[_0x304429(0xeb)](_0x304429(0xf8))[_0x304429(0xc1)]=_0x304429(0xf0)+_0x5e030c['name'],document[_0x304429(0xeb)]('available-novacoins')['innerHTML']=_0x5e030c[_0x304429(0xe8)];}}),db['collection']('Users')[_0x1ead57(0xce)](auth[_0x1ead57(0x100)]['uid'])['collection']('Redeemed_Items')[_0x1ead57(0xc8)]()['then'](_0x315f7d=>{const _0x2c3bce=_0x1ead57;_0x315f7d[_0x2c3bce(0xc4)](_0xaad877=>{const _0x73f87a=_0x2c3bce,_0x49dac5=_0xaad877[_0x73f87a(0xc0)](),_0x475130=document[_0x73f87a(0xfc)](_0x73f87a(0xc3));_0x475130[_0x73f87a(0xb4)]=_0x73f87a(0xba);const _0x1f096a=document[_0x73f87a(0xfc)](_0x73f87a(0xcc));_0x1f096a[_0x73f87a(0xb4)]=_0x73f87a(0x101),_0x1f096a['src']=_0x73f87a(0xf9)+_0x49dac5[_0x73f87a(0xb1)][_0x73f87a(0xc5)]()['replace'](/ /g,'_')+_0x73f87a(0xde),_0x475130[_0x73f87a(0xd0)](_0x1f096a);const _0xac16c3=document[_0x73f87a(0xfc)](_0x73f87a(0xc3));_0xac16c3[_0x73f87a(0xb4)]=_0x73f87a(0xcb),_0x475130[_0x73f87a(0xd0)](_0xac16c3);const _0x42355a=document[_0x73f87a(0xfc)]('h5');_0x42355a[_0x73f87a(0xb4)]='mb-2\x20text-xl\x20font-bold\x20tracking-tight\x20text-gray-900',_0x42355a['textContent']=_0x49dac5[_0x73f87a(0xb1)],_0xac16c3[_0x73f87a(0xd0)](_0x42355a);const _0x28a074=document[_0x73f87a(0xfc)]('p');_0x28a074[_0x73f87a(0xb4)]=_0x73f87a(0xd3),_0x28a074[_0x73f87a(0xb2)]=_0x73f87a(0xc9)+_0x49dac5[_0x73f87a(0xe8)],_0xac16c3[_0x73f87a(0xd0)](_0x28a074);const _0x4d3f9b=document[_0x73f87a(0xfc)]('Sell');_0x4d3f9b[_0x73f87a(0xb4)]=_0x73f87a(0xe0),_0x4d3f9b['style'][_0x73f87a(0xfe)]=_0x73f87a(0xf5),_0x4d3f9b[_0x73f87a(0xdc)][_0x73f87a(0xe5)]=_0x73f87a(0xef),_0x4d3f9b[_0x73f87a(0xd5)][_0x73f87a(0xcd)]=_0x49dac5[_0x73f87a(0xb1)],_0x4d3f9b[_0x73f87a(0xd5)]['redeem']=_0x49dac5[_0x73f87a(0xe8)],_0x4d3f9b[_0x73f87a(0xf6)]=function(){const _0x127f54=_0x73f87a;sell(_0x49dac5[_0x127f54(0xb1)],_0x49dac5[_0x127f54(0xe8)]);},_0x4d3f9b[_0x73f87a(0xb2)]='Sell',_0xac16c3['appendChild'](_0x4d3f9b),document[_0x73f87a(0xeb)](_0x73f87a(0xd2))[_0x73f87a(0xd0)](_0x475130);});});}else window[_0x1ead57(0xcf)][_0x1ead57(0xdb)]=_0x1ead57(0xe4);});});