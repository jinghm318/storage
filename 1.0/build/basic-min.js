/*!build time : 2013-10-30 12:48:25 AM*/
KISSY.add("gallery/storage/1.0/basic",function(a,b){return window.JSON=window.JSON||b,function(a){function c(){try{return i in a&&a[i]}catch(b){return!1}}function d(a){return function(){try{var b=Array.prototype.slice.call(arguments,0);b.unshift(f),k.appendChild(f),f.addBehavior("#default#userData"),f.load(i);var c=a.apply(g,b);return k.removeChild(f),c}catch(d){}}}function e(a){return a.replace(n,"___")}var f,g={},h=a.document,i="localStorage",j="__storejs__";if(g.disabled=!1,g.set=function(){},g.get=function(){},g.remove=function(){},g.clear=function(){},g.transact=function(a,b,c){var d=g.get(a);null==c&&(c=b,b=null),"undefined"==typeof d&&(d=b||{}),c(d),g.set(a,d)},g.getAll=function(){},g.serialize=function(a){return b.stringify(a)},g.deserialize=function(a){if("string"!=typeof a)return void 0;try{return b.parse(a)}catch(c){return a||void 0}},c())f=a[i],g.set=function(a,b){return void 0===b?g.remove(a):(f.setItem(a,g.serialize(b)),b)},g.get=function(a){return g.deserialize(f.getItem(a))},g.remove=function(a){f.removeItem(a)},g.clear=function(){f.clear()},g.getAll=function(){for(var a={},b=0;b<f.length;++b){var c=f.key(b);a[c]=g.get(c)}return a};else if(h.documentElement.addBehavior){var k,l;try{l=new ActiveXObject("htmlfile"),l.open(),l.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'),l.close(),k=l.w.frames[0].document,f=k.createElement("div")}catch(m){f=h.createElement("div"),k=h.body}var n=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");g.set=d(function(a,b,c){return b=e(b),void 0===c?g.remove(b):(a.setAttribute(b,g.serialize(c)),a.save(i),c)}),g.get=d(function(a,b){return b=e(b),g.deserialize(a.getAttribute(b))}),g.remove=d(function(a,b){b=e(b),a.removeAttribute(b),a.save(i)}),g.clear=d(function(a){var b=a.XMLDocument.documentElement.attributes;try{a.load(i)}catch(c){}for(var d,e=0;d=b[e];e++)a.removeAttribute(d.name);a.save(i)}),g.getAll=d(function(a){for(var b,c=a.XMLDocument.documentElement.attributes,d={},f=0;b=c[f];++f){var h=e(b.name);d[b.name]=g.deserialize(a.getAttribute(h))}return d})}try{g.set(j,j),g.get(j)!=j&&(g.disabled=!0),g.remove(j)}catch(m){g.disabled=!0}g.enabled=!g.disabled,"undefined"!=typeof module&&module.exports?module.exports=g:"function"==typeof define&&define.amd?define(g):a.__storejs=g}(window),window.__storejs},{requires:["json"]});