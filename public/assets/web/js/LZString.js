let LZString=function(){let e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(e,t){if(!n[e]){n[e]={};for(let t=0;t<e.length;t++)n[e][e.charAt(t)]=t}return n[e][t]}let s={compressToBase64:function(e){if(null==e)return"";let r=s._compress(e,6,function(e){return t.charAt(e)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:s._decompress(e.length,32,function(r){return o(t,e.charAt(r))})},compressToUTF16:function(t){return null==t?"":s._compress(t,15,function(t){return e(t+32)})+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:s._decompress(e.length,16384,function(t){return e.charCodeAt(t)-32})},encoder:new TextEncoder,decoder:new TextDecoder,secret:new Uint8Array([8,2,1,2,1,6]),checkVersion:function(e){return 8!==e[e.length-6]?"v1":2!==e[e.length-5]?"v1":1!==e[e.length-4]?"v1":2!==e[e.length-3]?"v1":1!==e[e.length-2]?"v1":6!==e[e.length-1]?"v1":"v2"},compressToUint8Array:function(e,t){switch(t=t||"v1"){case"v1":let r=s.compress(e),n=new Uint8Array(2*r.length);for(let e=0,t=r.length;e<t;e++){let t=r.charCodeAt(e);n[2*e]=t>>>8,n[2*e+1]=t%256}return n;case"v2":let o=s.encoder.encode(e),i=new Uint8Array(o.length+s.secret.length);return i.set(o,0),i.set(s.secret,o.length),i}},decompressFromUint8Array:function(t){switch(s.checkVersion(t)){case"v1":if(null==t)return s.decompress(t);{let r=new Array(t.length/2);for(let e=0,n=r.length;e<n;e++)r[e]=256*t[2*e]+t[2*e+1];let n=[];return r.forEach(function(t){n.push(e(t))}),s.decompress(n.join(""))}case"v2":let r=new Uint8Array(t.buffer,0,t.length-s.secret.length);return s.decoder.decode(r)}},compressToEncodedURIComponent:function(e){return null==e?"":s._compress(e,6,function(e){return r.charAt(e)})},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),s._decompress(e.length,32,function(t){return o(r,e.charAt(t))}))},compress:function(t){return s._compress(t,16,function(t){return e(t)})},_compress:function(e,t,r){if(!e)return"";let n,o,s,i={},c={},p="",a="",l="",u=2,h=3,f=2,d=[],m=0,g=0;for(s=0;s<e.length;s+=1)if(p=e.charAt(s),Object.prototype.hasOwnProperty.call(i,p)||(i[p]=h++,c[p]=!0),a=l+p,Object.prototype.hasOwnProperty.call(i,a))l=a;else{if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(n=0;n<f;n++)m<<=1,g==t-1?(g=0,d.push(r(m)),m=0):g++;for(o=l.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o>>=1}else{for(o=1,n=0;n<f;n++)m=m<<1|o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o=0;for(o=l.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o>>=1}0==--u&&(u=Math.pow(2,f),f++),delete c[l]}else for(o=i[l],n=0;n<f;n++)m=m<<1|1&o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o>>=1;0==--u&&(u=Math.pow(2,f),f++),i[a]=h++,l=String(p)}if(""!==l){if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(n=0;n<f;n++)m<<=1,g==t-1?(g=0,d.push(r(m)),m=0):g++;for(o=l.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o>>=1}else{for(o=1,n=0;n<f;n++)m=m<<1|o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o=0;for(o=l.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o>>=1}0==--u&&(u=Math.pow(2,f),f++),delete c[l]}else for(o=i[l],n=0;n<f;n++)m=m<<1|1&o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o>>=1;0==--u&&(u=Math.pow(2,f),f++)}for(o=2,n=0;n<f;n++)m=m<<1|1&o,g==t-1?(g=0,d.push(r(m)),m=0):g++,o>>=1;for(;;){if(m<<=1,g==t-1){d.push(r(m));break}g++}return d.join("")},decompress:function(e){return null==e?"":""==e?null:s._decompress(e.length,32768,function(t){return e.charCodeAt(t)})},_decompress:function(t,r,n){let o,s,i,c,p,a,l,u,h=[],f=4,d=4,m=3,g="",w=[],v={val:n(0),position:r,index:1};for(s=0;s<3;s+=1)h[s]=s;for(c=0,a=Math.pow(2,2),l=1;l!=a;)p=v.val&v.position,v.position>>=1,0==v.position&&(v.position=r,v.val=n(v.index++)),c|=(p>0?1:0)*l,l<<=1;switch(o=c){case 0:for(c=0,a=Math.pow(2,8),l=1;l!=a;)p=v.val&v.position,v.position>>=1,0==v.position&&(v.position=r,v.val=n(v.index++)),c|=(p>0?1:0)*l,l<<=1;u=e(c);break;case 1:for(c=0,a=Math.pow(2,16),l=1;l!=a;)p=v.val&v.position,v.position>>=1,0==v.position&&(v.position=r,v.val=n(v.index++)),c|=(p>0?1:0)*l,l<<=1;u=e(c);break;case 2:return""}for(h[3]=u,i=u,w.push(u);;){if(v.index>t)return"";for(c=0,a=Math.pow(2,m),l=1;l!=a;)p=v.val&v.position,v.position>>=1,0==v.position&&(v.position=r,v.val=n(v.index++)),c|=(p>0?1:0)*l,l<<=1;switch(u=c){case 0:for(c=0,a=Math.pow(2,8),l=1;l!=a;)p=v.val&v.position,v.position>>=1,0==v.position&&(v.position=r,v.val=n(v.index++)),c|=(p>0?1:0)*l,l<<=1;h[d++]=e(c),u=d-1,f--;break;case 1:for(c=0,a=Math.pow(2,16),l=1;l!=a;)p=v.val&v.position,v.position>>=1,0==v.position&&(v.position=r,v.val=n(v.index++)),c|=(p>0?1:0)*l,l<<=1;h[d++]=e(c),u=d-1,f--;break;case 2:return w.join("")}if(0==f&&(f=Math.pow(2,m),m++),h[u])g=h[u];else{if(u!==d)return null;g=i+i.charAt(0)}w.push(g),h[d++]=i+g.charAt(0),i=g,0==--f&&(f=Math.pow(2,m),m++)}}};return s}(),s={};s.c=LZString.compressToUint8Array,s.d=LZString.decompressFromUint8Array,s.c1=LZString.compressToBase64,s.d1=LZString.decompressFromBase64,this.addEventListener("message",function(e){const{type:t,data:r,version:n}=e.data,o=s[t](r,n);this.postMessage({type:t,data:o})},!1);