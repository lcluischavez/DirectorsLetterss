(function(g){var window=this;'use strict';var xib=function(a){g.W.call(this,{G:"div",S:"ytp-inline-preview-ui"});this.qg=!1;this.player=a;this.T(a,"onStateChange",this.SP);this.T(a,"videodatachange",this.Jw);this.T(a,"onInlinePreviewModeChange",this.I4);this.wf=new g.nq(this.Vv,null,this);g.E(this,this.wf)},I6=function(a){g.fU.call(this,a);
this.j=new xib(this.player);g.E(this,this.j);this.j.hide();g.eT(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.yq(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.x(xib,g.W);g.k=xib.prototype;
g.k.RM=function(){this.tooltip=new g.BW(this.player,this);g.E(this,this.tooltip);g.eT(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Vc=new g.IU(this.player);g.E(this,this.Vc);this.Zj=new g.W({G:"div",La:["ytp-inline-preview-scrim"]});g.E(this,this.Zj);this.Zj.Ha(this.element);this.T(this.Zj.element,"click",this.vH);this.xj=new g.uW(this.player,this,300);g.E(this,this.xj);this.xj.Ha(this.Zj.element);this.controls=new g.W({G:"div",S:"ytp-inline-preview-controls"});g.E(this,this.controls);
this.controls.Ha(this.element);var a=new g.LV(this.player,this,this.player.W().N("kevlar_simp_remove_min_width_for_mute_button"));g.E(this,a);a.Ha(this.controls.element);a=new g.sW(this.player,this);g.E(this,a);a.Ha(this.controls.element);this.Lc=new g.SV(this.player,this);g.E(this,this.Lc);g.eT(this.player,this.Lc.element,4);this.T(this.player,"appresize",this.Hb);this.T(this.player,"fullscreentoggled",this.Hb);this.Hb()};
g.k.show=function(){g.oq(this.wf);this.qg||(this.RM(),this.qg=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Lc.show();this.player.Qa("onInlinePreviewUiReady")};
g.k.hide=function(){this.wf.stop();g.W.prototype.hide.call(this);this.player.isInline()||this.qg&&this.Lc.hide()};
g.k.va=function(){g.W.prototype.va.call(this)};
g.k.vH=function(a){a.target===this.Zj.element&&this.player.Qa("onExpandInlinePreview",a)};
g.k.I4=function(){g.Bq(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.Ye=function(){this.Lc.yc();this.xj.yc()};
g.k.Vv=function(){this.Ye();g.oq(this.wf)};
g.k.Hb=function(){g.dW(this.Lc,0,this.player.ob().getPlayerSize().width,!1);g.TV(this.Lc)};
g.k.SP=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.Jw=function(a,b){if(this.player.isInline()){g.Bq(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.pJ);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.Bq(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
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
g.k.hw=function(a,b,c,d,e){var f=d=0,h=0,l=g.Un(a);if(b){c=g.wq(b,"ytp-mute-button");var m=g.wq(b,"ytp-subtitles-button"),n=g.Bn(b,this.element);b=g.Un(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.ob().getPlayerSize().width;h=g.se(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.Bp=function(){};
g.k.Ql=function(){return!1};
g.k.bE=function(){};
g.k.Uz=function(){};
g.k.gr=function(){};
g.k.er=function(){};
g.k.ZA=function(){};
g.k.xs=function(){};
g.k.LD=function(){};g.x(I6,g.fU);I6.prototype.bl=function(){return!1};
I6.prototype.load=function(){this.player.hideControls();this.j.show()};
I6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.eU("inline_preview",I6);})(_yt_player);
