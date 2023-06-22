(function(g){var window=this;'use strict';var Gib=function(a,b){g.W.call(this,{G:"button",La:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{G:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{G:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{G:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{G:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.I=a;this.Ta("click",this.onClick,this);this.updateValue("title",g.wT(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.sb(this,g.qT(b.Dc(),this.element))},Hib=function(a){g.W.call(this,{G:"div",
S:"ytp-miniplayer-ui"});this.qg=!1;this.player=a;this.T(a,"minimized",this.ai);this.T(a,"onStateChange",this.SP)},Iib=function(a){g.fU.call(this,a);
this.u=new g.iK(this);this.j=new Hib(this.player);this.j.hide();g.eT(this.player,this.j.element,4);a.Vf()&&(this.load(),g.Bq(a.getRootNode(),"ytp-player-minimized",!0))};
g.x(Gib,g.W);Gib.prototype.onClick=function(){this.I.Qa("onExpandMiniplayer")};g.x(Hib,g.W);g.k=Hib.prototype;
g.k.RM=function(){this.tooltip=new g.BW(this.player,this);g.E(this,this.tooltip);g.eT(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Vc=new g.IU(this.player);g.E(this,this.Vc);this.Zj=new g.W({G:"div",S:"ytp-miniplayer-scrim"});g.E(this,this.Zj);this.Zj.Ha(this.element);this.T(this.Zj.element,"click",this.vH);var a=new g.W({G:"button",La:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.nR()]});g.E(this,a);a.Ha(this.Zj.element);this.T(a.element,"click",this.kp);
a=new Gib(this.player,this);g.E(this,a);a.Ha(this.Zj.element);this.Uu=new g.W({G:"div",S:"ytp-miniplayer-controls"});g.E(this,this.Uu);this.Uu.Ha(this.Zj.element);this.T(this.Uu.element,"click",this.vH);var b=new g.W({G:"div",S:"ytp-miniplayer-button-container"});g.E(this,b);b.Ha(this.Uu.element);a=new g.W({G:"div",S:"ytp-miniplayer-play-button-container"});g.E(this,a);a.Ha(this.Uu.element);var c=new g.W({G:"div",S:"ytp-miniplayer-button-container"});g.E(this,c);c.Ha(this.Uu.element);this.xX=new g.NV(this.player,
this,!1);g.E(this,this.xX);this.xX.Ha(b.element);b=new g.MV(this.player,this);g.E(this,b);b.Ha(a.element);this.nextButton=new g.NV(this.player,this,!0);g.E(this,this.nextButton);this.nextButton.Ha(c.element);this.xj=new g.uW(this.player,this);g.E(this,this.xj);this.xj.Ha(this.Zj.element);this.Lc=new g.SV(this.player,this);g.E(this,this.Lc);g.eT(this.player,this.Lc.element,4);this.eH=new g.W({G:"div",S:"ytp-miniplayer-buttons"});g.E(this,this.eH);g.eT(this.player,this.eH.element,4);a=new g.W({G:"button",
La:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.nR()]});g.E(this,a);a.Ha(this.eH.element);this.T(a.element,"click",this.kp);a=new g.W({G:"button",La:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.RDa()]});g.E(this,a);a.Ha(this.eH.element);this.T(a.element,"click",this.r7);this.T(this.player,"presentingplayerstatechange",this.Id);this.T(this.player,"appresize",this.Hb);this.T(this.player,"fullscreentoggled",this.Hb);this.Hb()};
g.k.show=function(){this.wf=new g.nq(this.Vv,null,this);this.wf.start();this.qg||(this.RM(),this.qg=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Lc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.wf&&(this.wf.dispose(),this.wf=void 0);g.W.prototype.hide.call(this);this.player.Vf()||(this.qg&&this.Lc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.wf&&(this.wf.dispose(),this.wf=void 0);g.W.prototype.va.call(this)};
g.k.kp=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.r7=function(){this.player.playVideo()};
g.k.vH=function(a){if(a.target===this.Zj.element||a.target===this.Uu.element)g.oQ(this.player.Lb())?this.player.pauseVideo():this.player.playVideo()};
g.k.ai=function(){g.Bq(this.player.getRootNode(),"ytp-player-minimized",this.player.Vf())};
g.k.Ye=function(){this.Lc.yc();this.xj.yc()};
g.k.Vv=function(){this.Ye();this.wf&&this.wf.start()};
g.k.Id=function(a){g.JP(a.state,32)&&this.tooltip.hide()};
g.k.Hb=function(){g.dW(this.Lc,0,this.player.ob().getPlayerSize().width,!1);g.TV(this.Lc)};
g.k.SP=function(a){this.player.Vf()&&(0===a?this.hide():this.show())};
g.k.Dc=function(){return this.tooltip};
g.k.Eg=function(){return!1};
g.k.eh=function(){return!1};
g.k.Yl=function(){return!1};
g.k.sI=function(){};
g.k.Wp=function(){};
g.k.Ay=function(){};
g.k.Wm=function(){return null};
g.k.VF=function(){return null};
g.k.hM=function(){return new g.ze(0,0)};
g.k.Ek=function(){return new g.pn(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.hw=function(a,b,c,d,e){var f=0,h=d=0,l=g.Un(a);if(b){c=g.wq(b,"ytp-prev-button")||g.wq(b,"ytp-next-button");var m=g.wq(b,"ytp-play-button"),n=g.wq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Bn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.wq(b,"ytp-miniplayer-button-top-left"),f=g.Bn(b,this.element),b=g.Un(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.ob().getPlayerSize().width;e=f+(e||0);l=g.se(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Bp=function(){};
g.k.Ql=function(){return!1};
g.k.bE=function(){};
g.k.Uz=function(){};
g.k.gr=function(){};
g.k.er=function(){};
g.k.ZA=function(){};
g.k.xs=function(){};
g.k.LD=function(){};g.x(Iib,g.fU);g.k=Iib.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Bq(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.fU.prototype.create.call(this);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.bl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.eU("miniplayer",Iib);})(_yt_player);
