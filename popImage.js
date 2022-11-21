// Script Source: CodeLifter.com
// Copyright 2003
// Do not remove this notice.
// lastmodifyed 2005 by mike (fixed some bug with width under IE, scrolls)
PositionX = 100;
PositionY = 10;
defaultWidth  = 500;
defaultHeight = 500;
var AutoClose = false;
// Do not edit below this line...
// ================================
if (parseInt(navigator.appVersion.charAt(0))>=4){
var isNN=(navigator.appName=="Netscape")?1:0;
var isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}
var optNN='resizable=yes,width='+defaultWidth+',height='+defaultHeight+',left='+PositionX+',top='+PositionY;
var optIE='resizable=yes,width=150,height=100,left='+PositionX+',top='+PositionY;

function popImage(imageURL,imageTitle,scrolls){
var optNN_1;var optIE_1;
if(scrolls){optIE_1='scrollbars=yes,'+optIE;optNN_1='scrollbars=yes,'+optNN;}
else{optIE_1='scrollbars=no,'+optIE;optNN_1='scrollbars=no,'+optNN;}
if (isNN){imgWin=window.open('about:blank','',optNN_1);}
if (isIE){imgWin=window.open('about:blank','',optIE_1);}
with (imgWin.document){
writeln('<html><head><meta http-equiv="content-type" content="text/html; charset=Windows-1251"><title>Загрузка/Loading...</title><style>body{margin:0px;}</style>');writeln('<sc'+'ript>');
writeln('var isNN,isIE;');writeln('if (parseInt(navigator.appVersion.charAt(0))>=4){');
writeln('isNN=(navigator.appName=="Netscape")?1:0;');writeln('isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}');
writeln('function reSizeToImage(){');writeln('if (isIE){');writeln('window.resizeTo(100,100);');
writeln('width=150-(document.body.clientWidth-document.images[0].width);');
writeln('height=100-(document.body.clientHeight-document.images[0].height);');
//writeln('alert("width="+width+"; height="+height);');
writeln('if(width>800){width=800;}');
writeln('if(height>600){height=600;}');
writeln('window.resizeTo(width,height);}');writeln('if (isNN){');       
writeln('window.innerWidth=document.images["ImgName"].width;');
writeln('window.innerHeight=document.images["ImgName"].height;}}');
writeln('function doTitle(){document.title="'+imageTitle+'";}');writeln('</sc'+'ript>');
if (!AutoClose) writeln('</head><body bgcolor=000000 onload="reSizeToImage();doTitle();self.focus()">')
else writeln('</head><body bgcolor=000000 onload="reSizeToImage();doTitle();self.focus()" onblur="self.close()">');
writeln('<img name="ImgName" src='+imageURL+' style="display:block"></body></html>');
close();		
}}