try{(function(){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src="https://www.googletagmanager.com/gtag/js?id=DC-9314031";var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(e,l)})()}catch(e){}try{(function(){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src="https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BT1TQ6QUH19GN34U0LG0";var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(e,l)})()}catch(e){}try{window._troq._en.writeNewModelsToCookie([])}catch(e){}
(function(){var e=function(e){var l=function(a){var c,b,g,f=document.cookie.split(";");for(c=0;c<f.length;c++)if(b=f[c].substr(0,f[c].indexOf("=")),g=f[c].substr(f[c].indexOf("=")+1),b=b.replace(/^\s+|\s+$/g,""),b===a)try{return decodeURIComponent(g)}catch(d){return unescape(g)}return""},A=function(a,c,b){var g;g=location.hostname.split(".").reverse();g=2<g.length&&3>=g[1].length&&2>=g[0].length?"."+g[2]+"."+g[1]+"."+g[0]:"."+g[1]+"."+g[0];var f=new Date;f.setDate(f.getDate()+b);var d=c;try{c=encodeURIComponent(c)}catch(q){c=
escape(c)}var e=c;b=null===b?"":"; expires="+f.toUTCString();document.cookie=a+"="+(e+b+("; domain="+g+"; path=/"));try{var h=l(a);if(""===h||h!=d){var t=window.location.hostname;if(1===t.split(".").length)document.cookie=a+"="+c+b+"; path=/";else{var m=t.split(".");m.shift();var z="."+m.join(".");document.cookie=a+"="+c+b+"; path=/; domain="+z;h=l(a);if(""===h||h!=d)document.cookie=a+"="+c+b+"; path=/; domain="+g}}}catch(q){}},u=e.segq,r={},n=function(a,c){try{var b="mmrnd="+Math.round(2E9*Math.random()),
g=c&&c.rm?"":"?"+b,f=a.split("?"),d=f.splice(1,f.length);return(new Image(1,1)).src=f[0]+g+(d.length?(g?"&":"?")+d.join("?"):"")}catch(k){}},v=function(a,c,b){c+="=";for(b=b||",";0<a.length;)c+=encodeURIComponent(a.shift())+(a.length?b:"");return c},B=function(a,c){function b(a,c){return function(){function c(a){var b=window.JSON;window.JSON||(b={parse:function(a){return{}}});return b.parse(a)}if(!g){var b=void 0===d.status?a:d.status,e=0===d.status?"Error":d.response||d.responseText||e;g=!0;e=c(e);
if(200===b&&e&&e.segments){for(var p={},b=0,h=e.segments.length;b<h;b+=1)p["seg"+e.segments[b].i]=e.segments[b].v;b=0;for(h=f.length;b<h;b+=1)(0,f[b][0])(p,f[b][1]);f.push=function(a){a[0](p,a[1])}}}}}var g=!1,f=[],d;a.cors&&window.XDomainRequest&&!/MSIE 1/.test(navigator.userAgent)&&(d=new XDomainRequest);window.XMLHttpRequest&&(d=new XMLHttpRequest);if(d){d.open("GET",a.url,!0);var e=d.onload=b(200);d.onreadystatechange=function(){4===d.readyState&&e()};d.onerror=b(null,"Error");d.ontimeout=b(null,
"Timeout");d.onabort=b(null,"Abort");d.send();d.onreadysgements=function(a,b){f.push([a,b])}}else d={onreadysgements:function(){}};return d},w=function(a,c){try{if(a.length||c.length){var b=("https:"==document.location.protocol?"https://secure":"http://ib")+".adnxs.com/seg?",b=b+v(a,"add"),b=b+v(c,"&remove");return n(b)}}catch(g){}},C=function(a,c){function b(a){for(var b=0,c=a.length;b<c;b+=1)if(!0===a[b])return!0;return!1}function e(a){for(var b=0,c=a.length;b<c;b+=1)if(!0!==a[b])return!1;return!0}
function f(a,c,d){d=d||"OR";for(condition in a)if(a.hasOwnProperty(condition)){var f;f=a[condition];var g=c,h=d,k=condition,h=h||"OR",k=k||"in_seg",l=[],p=0,q=f.length;if(0===q)f=!0;else{for(;p<q;p+=1)g.hasOwnProperty("seg"+f[p].id)?l.push("in_seg"===k):l.push("out_seg"===k);f="OR"===h?e(l):b(l)}if(!f)return!1}return!0}var d=a.segments,k=d.type||"OR",d=d.groups||[],h=[],l=0,m=d.length;if(0===m)return!0;for(;l<m;l+=1){var n=f(d[l],c,k);h.push(n)}return"OR"===k?b(h):e(h)},x=function(a,c){var b=[],g=
[],f=window.location.pathname,d=window.location.href;window!==window.top&&document.referrer&&""!==document.referrer&&(d=document.referrer);a.url=d;a.path=f;var k=e.uid||l("__troRUID"),f=null;k&&36==k.length&&(f=parseInt(k.substr(33),16));a.ruid1=k;a.ggruid=f;var h;k&&(h=B({url:"//seg.mmtro.com/ruid/"+k}));try{var t=function(){if(1.25<=window.pageYOffset/window.innerHeight||.25<=window.pageYOffset/document.body.scrollHeight)window.removeEventListener("scroll",t),n("https://mmtro.com/p?tagid=6574585-1f046daa840fc9d8cb368a0b9cfa15ab&rtgtagcontainer=1&rtgpassiveaction=1&rtgscroll=25&rtgsession_id="+
(a.rtgsession_id||String())+"&rtgsession_seq="+(a.rtgsession_seq||String())+"&rtgsession_hits="+(a.rtgsession_hits||String())+"&rtgtrossion="+(a.rtgtrossion||String())+"&rtgpagescroll="+(a.rtgpg||String())+"&rtgproductscroll="+(a.rtgidproduit||String())+"&rtgcatscroll="+(a.rtgidcat||String())+"&r1="+k+"&vruid="+k),window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi150+per_session"}),
n("https://www.facebook.com/tr?id=1643223152662709&ev=Numb_Scroll25&value=1&noscript=1")};window.addEventListener("scroll",t)}catch(q){}try{var m=function(){if(2<=window.pageYOffset/window.innerHeight||.5<=window.pageYOffset/document.body.scrollHeight)window.removeEventListener("scroll",m),n("https://mmtro.com/p?tagid=6574585-1f046daa840fc9d8cb368a0b9cfa15ab&rtgtagcontainer=1&rtgpassiveaction=1&rtgscroll=50&rtgsession_id="+(a.rtgsession_id||String())+"&rtgsession_seq="+(a.rtgsession_seq||String())+
"&rtgsession_hits="+(a.rtgsession_hits||String())+"&rtgtrossion="+(a.rtgtrossion||String())+"&rtgpagescroll="+(a.rtgpg||String())+"&rtgproductscroll="+(a.rtgidproduit||String())+"&rtgcatscroll="+(a.rtgidcat||String())+"&r1="+k+"&vruid="+k),window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi160+per_session"}),n("https://www.facebook.com/tr?id=1643223152662709&ev=Numb_Scroll50&value=1noscript=1")};
window.addEventListener("scroll",m)}catch(q){}c&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spipm0+per_session"}));"hp"==a.rtgpg&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi4-0+per_session"}));"cat"==a.rtgpg&&(window.dataLayer=
window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi5-0+per_session"}));"subcat"==a.rtgpg&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi6-0+per_session"}));"product"==a.rtgpg&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event",
"conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi7-0+per_session"}));"add_to_cart"==a.rtgclickid&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi8-0+per_session"}));"basket"==a.rtgpg&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,
send_to:"DC-9314031/invmedia/spi9-0+per_session"}));if("order"==a.rtgpg){var f=a.rtgcmdmontant,r=a.rtgcmdid;window.dataLayer=window.dataLayer||[];(function(){dataLayer.push(arguments)})("event","purchase",{allow_custom_scripts:!0,value:f,transaction_id:r,send_to:"DC-9314031/sales/kpi-p0+transactions"})}"Logged in"==a.rtglogged&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/stadi0+standard"}));
"form"==a.rtgpg&&"account"==a.rtgidform&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi100+per_session"}));"completedform"==a.rtgpg&&"account"==a.rtgidform&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi110+per_session"}));"amazon_login"==
a.rtgclickaction&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi120+per_session"}));"seller"==a.rtgpg&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi130+per_session"}));"search"==a.rtgclickid&&(window.dataLayer=window.dataLayer||
[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi140+per_session"}));"landing"==a.rtgpg&&"yeezy_products_native"==a.rtglandingid&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi3-0+per_session"}));"landing"==a.rtgpg&&"yeezy_boost_display"==a.rtglandingid&&(window.dataLayer=
window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,session_id:a.rtgsession_id,send_to:"DC-9314031/invmedia/spi2-0+per_session"}));RegExp(".*gclid.*","gi").test(d)&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{allow_custom_scripts:!0,send_to:"DC-9314031/invmedia/paids0+per_session"}));RegExp(".*utm_medium=email.*","gi").test(d)&&(window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event",
"conversion",{allow_custom_scripts:!0,send_to:"DC-9314031/invmedia/email0+standard"}));if(h)h.onreadysgements(function(a,b){C({segments:{type:"AND",groups:[{in_seg:[{id:1600}],out_seg:[]}]}},a)&&DY.API("event",{name:"exposed_reactivation",properties:{channel:"programmatic"}})},a);RegExp(".*ReactivationJune2019.*","gi").test(d)&&DY.API("event",{name:"exposed_reactivation",properties:{channel:"programmatic"}});RegExp(".*reactivation_backtoschool.*","gi").test(d)&&DY.API("event",{name:"exposed_reactivation",
properties:{channel:"programmatic"}});w(b,g);if(h)h.onreadysgements(function(){w(b,g)},a);e&&"undefined"===typeof e.callSync&&!l("__troSYNC")&&(function(){var a="tagid="+e.tagid+"&r1="+k+"&vruid="+k,b="https://mmtro.com/s?"+a;(new Image(1,1)).src="https://secure.adnxs.com/seg?add=798876&redir="+encodeURIComponent("https://secure.adnxs.com/getuid?"+b+"&partner_name=appnexus&partner_uid=$UID");(new Image(1,1)).src="https://tracker.adotmob.com/millemercis/cookie?r="+encodeURIComponent(b+"&partner_name=adotmob&partner_uid={amob_user_id}");
(new Image(1,1)).src="https://gum.criteo.com/sync?c=195&r=1&a=1&u="+encodeURIComponent(b+"&partner_name=criteo&partner_uid=@USERID@");(new Image(1,1)).src="https://i.w55c.net/ping_match.gif?st=1000mercis&rurl="+encodeURIComponent(b+"&partner_name=dataxu&partner_uid=_wfivefivec_");(new Image(1,1)).src="https://cm.g.doubleclick.net/pixel?google_nid=1000mercis_dmp&google_cm&google_sc&"+a;(new Image(1,1)).src="https://loadm.exelator.com/load/?p=204&g=949&j=0";(new Image(1,1)).src="https://mmtro.com/cse/liveramp?https%3A%2F%2Fidsync.rlcdn.com%2F447836.gif%3Fpartner_uid%3D%7B%7BRUID%7D%7D";
(new Image(1,1)).src="https://pixel.mathtag.com/sync/img?redir="+encodeURIComponent(b+"&partner_name=mediamath&partner_uid=[MM_UUID]&jkey_dc=[MT_DC]");(new Image(1,1)).src="https://mmtro.com/cse/sirdata?https%3A%2F%2Fjs.sddan.com%2FMAP.d%3Fmn%3Dmillemercis%26mv%3D%7B%7BRUID%7D%7D%26source%3Dnumberly";(new Image(1,1)).src="https://aimfar.solution.weborama.fr/fcgi-bin/dispatch.fcgi?d.A=rd&d.k=1000mercis&d.u="+encodeURIComponent(b+"&partner_name=weborama&partner_uid={WEBO_ID}");(new Image(1,1)).src=
"https://dpm.zebestof.com/sync?url="+encodeURIComponent(b+"&partner_name=zebestof&partner_uid=${ZBO_ID}");(new Image(1,1)).src="https://mmtro.com/cse/amazon?https%3A%2F%2Faax-eu.amazon-adsystem.com%2Fs%2Fdcm%3Fpid%3D7ae0d688-799b-4d55-ba84-853198e8457d%26id%3D%7B%7BRUID%7D%7D";(new Image(1,1)).src="https://mmtro.com/cse/amazon?https%3A%2F%2Fs.amazon-adsystem.com%2Fdcm%3Fpid%3D9450ee1b-78ba-41b2-99a6-acda8f273ae2%26id%3D%7B%7BRUID%7D%7D"}(),A("__troSYNC",1,1))},y=function(){try{for(var a=0;a<arguments.length;a++)u.push(arguments[a])}catch(d){}for(a=
{};0<u.length;)try{var c=u.shift(),b=c.shift().toLowerCase();0===b.indexOf("_")&&(b=b.substring(1,b.length));for(var e=b,f=c;"[object Array]"===Object.prototype.toString.call(f);)f=f[0];a[e]=f}catch(d){}c=l("__trossion");a.rtgtrossion=c;c=c.split("_");a.rtgsession_ts_creation_cookie=c[0];a.rtgsession_ttl=c[1];a.rtgsession_seq=c[2];a.rtgsession_id_prev=c[3];a.rtgsession_id=c[4];a.rtgsession_ts=c[5];a.rtgsession_hits=c[6];a.rtgsession_duration=c[5]-c[0];return a};this.version="5a7c3cc199cede850b6ae400_82";
this.push=function(){r=y.apply(this,arguments);x(r)};this._init=function(){r=y();x(r,!0)}};_troq.segq&&_troq.segq.constructor==Array&&"00000000-0000-0000-0000-000000000000"!==_troq.uid&&(e=new e(_troq),_troq.segq=e,e._init())})();
