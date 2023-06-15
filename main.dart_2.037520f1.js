turn
s.c=!0
s.xg()},
eI(){var s=0,r=A.H(t.H),q=this
var $async$eI=A.I(function(a,b){if(a===1)return A.E(b,r)
while(true)switch(s){case 0:s=q.gcC()!=null?2:3
break
case 2:s=4
return A.J(q.bL(),$async$eI)
case 4:s=5
return A.J(q.gcC().ff(-1),$async$eI)
case 5:case 3:return A.F(null,r)}})
return A.G($async$eI,r)},
gck(){var s=this.gcC()
s=s==null?null:s.qM()
return s==null?"/":s},
gcS(){var s=this.gcC()
return s==null?null:s.lO()},
xg(){return this.gxf().$0()}}
A.hX.prototype={
tJ(a){var s,r=this,q=r.d
if(q==null)return
r.a=q.jX(r.gl4())
if(!r.jp(r.gcS())){s=t.z
q.d4(A.ah(["serialCount",0,"state",r.gcS()],s,s),"flutter",r.gck())}r.e=r.gj3()},
gj3(){if(this.jp(this.gcS())){var s=this.gcS()
s.toString
return B.e.A(A.NK(t.f.a(s).i(0,"serialCount")))}return 0},
jp(a){return t.f.b(a)&&a.i(0,"serialCount")!=null},
fk(a,b,c){var s,r,q=this.d
if(q!=null){s=t.z
r=this.e
if(b){r===$&&A.m()
s=A.ah(["serialCount",r,"state",c],s,s)
a.toString
q.d4(s,"flutter",a)}else{r===$&&A.m();++r
this.e=r
s=A.ah(["serialCount",r,"state",c],s,s)
a.toString
q.qb(s,"flutter",a)}}},
lY(a){return this.fk(a,!1,null)},
l5(a){var s,r,q,p,o=this
if(!o.jp(a)){s=o.d
s.toString
r=o.e
r===$&&A.m()
q=t.z
s.d4(A.ah(["serialCount",r+1,"state",a],q,q),"flutter",o.gck())}o.e=o.gj3()
s=$.L()
r=o.gck()
t.eO.a(a)
q=a==null?null:a.i(0,"state")
p=t.z
s.bD("flutter/navigation",B.E.bk(new A.bX("pushRouteInformation",A.ah(["location",r,"state",q],p,p))),new A.wF())},
bL(){var s=0,r=A.H(t.H),q,p=this,o,n,m
var $async$bL=A.I(function(a,b){if(a===1)return A.E(b,r)
while(true)switch(s){case 0:p.F()
if(p.b||p.d==null){s=1
break}p.b=!0
o=p.gj3()
s=o>0?3:4
break
case 3:s=5
return A.J(p.d.ff(-o),$async$bL)
case 5:case 4:n=p.gcS()
n.toString
t.f.a(n)
m=p.d
m.toString
m.d4(n.i(0,"state"),"flutter",p.gck())
case 1:return A.F(q,r)}})
return A.G($async$bL,r)},
gcC(){return this.d}}
A.wF.prototype={
$1(a){},
$S:8}
A.iv.prototype={
tM(a){var s,r=this,q=r.d
if(q==null)return
r.a=q.jX(r.gl4())
s=r.gck()
if(!A.DS(A.Fv(self.window.history))){q.d4(A.ah(["origin",!0,"state",r.gcS()],t.N,t.z),"origin","")
r.wZ(q,s)}},
fk(a,b,c){var s=this.d
if(s!=null)this.jJ(s,a,!0)},
lY(a){return this.fk(a,!1,null)},
l5(a){var s,r=this,q="flutter/navigation"
if(A.Gx(a)){s=r.d
s.toString
r.wY(s)
$.L().bD(q,B.E.bk(B.uz),new A.yv())}else if(A.DS(a)){s=r.f
s.toString
r.f=null
$.L().bD(q,B.E.bk(new A.bX("pushRoute",s)),new A.yw())}else{r.f=r.gck()
r.d.ff(-1)}},
jJ(a,b,c){var s
if(b==null)b=this.gck()
s=this.e
if(c)a.d4(s,"flutter",b)
else a.qb(s,"flutter",b)},
wZ(a,b){return this.jJ(a,b,!1)},
wY(a){return this.jJ(a,null,!1)},
bL(){var s=0,r=A.H(t.H),q,p=this,o,n
var $async$bL=A.I(function(a,b){if(a===1)return A.E(b,r)
while(true)switch(s){case 0:p.F()
if(p.b||p.d==null){s=1
break}p.b=!0
o=p.d
s=3
return A.J(o.ff(-1),$async$bL)
case 3:n=p.gcS()
n.toString
o.d4(t.f.a(n).i(0,"state"),"flutter",p.gck())
case 1:return A.F(q,r)}})
return A.G($async$bL,r)},
gcC(){return this.d}}
A.yv.prototype={
$1(a){},
$S:8}
A.yw.prototype={
$1(a){},
$S:8}
A.l6.prototype={
ou(a){var s
this.b=a
this.c=!0
s=A.b([],t.aJ)
return this.a=new A.xv(new A.AP(a,A.b([],t.gq),A.b([],t.fQ),A.cq()),s,new A.xE())},
yK(){var s,r=this
if(!r.c)r.ou(B.nb)
r.c=!1
s=r.a
s.b=s.a.y7()
s.f=!0
s=r.a
r.b===$&&A.m()
return new A.l5(s)}}
A.l5.prototype={
F(){this.a=!0}}
A.lr.prototype={
gnq(){var s,r=this,q=r.c
if(q===$){s=t.e.a(A.a5(r.gwb()))
r.c!==$&&A.ag()
r.c=s
q=s}return q},
wc(a){var s,r,q,p=A.Fw(a)
p.toString
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.D)(s),++q)s[q].$1(p)}}
A.l7.prototype={
F(){var s,r,q=this
q.k1.removeListener(q.k2)
q.k2=null
s=q.fy
if(s!=null)s.disconnect()
q.fy=null
s=q.dy
if(s!=null)s.b.removeEventListener(s.a,s.c)
q.dy=null
s=$.D0()
r=s.a
B.b.C(r,q.go3())
if(r.length===0)s.b.removeListener(s.gnq())},
pM(){var s=this.f
if(s!=null)A.d4(s,this.r)},
zK(a,b){var s=this.at
if(s!=null)A.d4(new A.uH(b,s,a),this.ax)
else b.$1(!1)},
qX(a,b,c){this.nJ(a,b,A.FK(c))},
bD(a,b,c){var s
if(a==="dev.flutter/channel-buffers")try{s=$.rJ()
b.toString
s.zf(b)}finally{c.$1(null)}else $.rJ().Ap(a,b,c)},
nJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
switch(a){case"flutter/skia":s=B.E.b4(b)
switch(s.a){case"Skia.setResourceCacheMaxBytes":if($.bF() instanceof A.ts){r=A.jF(s.b)
$.K4.ww().gBs()
q=A.My().a
q.w=r
q.x7()}g.aC(c,B.t.U([A.b([!0],t.df)]))
break}return
case"flutter/assets":g.ef(B.v.bh(A.bd(b.buffer,0,null)),c)
return
case"flutter/platform":s=B.E.b4(b)
switch(s.a){case"SystemNavigator.pop":g.d.i(0,0).gk8().eI().aH(new A.uC(g,c),t.P)
return
case"HapticFeedback.vibrate":q=g.v2(A.aL(s.b))
p=self.window.navigator
if("vibrate" in p)p.vibrate(q)
g.aC(c,B.t.U([!0]))
return
case"SystemChrome.setApplicationSwitcherDescription":o=t.lb.a(s.b)
n=A.aL(o.i(0,"label"))
if(n==null)n=""
m=A.jG(o.i(0,"primaryColor"))
if(m==null)m=4278190080
q=self.document
q.title=n
A.Is(new A.S(m>>>0))
g.aC(c,B.t.U([!0]))
return
case"SystemChrome.setSystemUIOverlayStyle":l=A.jG(t.lb.a(s.b).i(0,"statusBarColor"))
A.Is(l==null?null:new A.S(l>>>0))
g.aC(c,B.t.U([!0]))
return
case"SystemChrome.setPreferredOrientations":o=t.j.a(s.b)
$.br.r1(o).aH(new A.uD(g,c),t.P)
return
case"SystemSound.play":g.aC(c,B.t.U([!0]))
return
case"Clipboard.setData":new A.kx(A.Ff(),A.Ge()).r_(s,c)
return
case"Clipboard.getData":new A.kx(A.Ff(),A.Ge()).qK(c)
return}break
case"flutter/service_worker":q=self.window
k=self.document.createEvent("Event")
k.initEvent("flutter-first-frame",!0,!0)
q.dispatchEvent(k)
return
case"flutter/textinput":$.D6().gev().zr(b,c)
return
case"flutter/contextmenu":switch(B.E.b4(b).a){case"enableContextMenu":$.br.a.oW()
g.aC(c,B.t.U([!0]))
return
case"disableContextMenu":$.br.a.oQ()
g.aC(c,B.t.U([!0]))
return}return
case"flutter/mousecursor":s=B.a8.b4(b)
o=t.f.a(s.b)
switch(s.a){case"activateSystemCursor":$.DJ.toString
q=A.aL(o.i(0,"kind"))
k=$.br.f
k===$&&A.m()
q=B.ul.i(0,q)
A.bt(k,"cursor",q==null?"default":q)
break}return
case"flutter/web_test_e2e":g.aC(c,B.t.U([A.Oj(B.E,b)]))
return
case"flutter/platform_views":q=g.cy
if(q==null)q=g.cy=new A.x5($.JK(),new A.uE())
c.toString
q.zj(b,c)
return
case"flutter/accessibility":q=$.br.y
q===$&&A.m()
k=t.f
j=k.a(k.a(B.V.aV(b)).i(0,"data"))
i=A.aL(j.i(0,"message"))
if(i!=null&&i.length!==0){h=A.DC(j,"assertiveness")
q.oo(i,B.qC[h==null?0:h])}g.aC(c,B.V.U(!0))
return
case"flutter/navigation":g.d.i(0,0).ky(b).aH(new A.uF(g,c),t.P)
return}g.aC(c,null)},
ef(a,b){return this.vl(a,b)},
vl(a,b){var s=0,r=A.H(t.H),q=1,p,o=this,n,m,l,k,j
var $async$ef=A.I(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:q=3
s=6
return A.J(A.rC($.jI.ie(a)),$async$ef)
case 6:n=d
s=7
return A.J(n.gq3().h5(),$async$ef)
case 7:m=d
o.aC(b,A.el(m,0,null))
q=1
s=5
break
case 3:q=2
j=p
l=A.K(j)
$.eZ().$1("Error while trying to load an asset: "+A.k(l))
o.aC(b,null)
s=5
break
case 2:s=1
break
case 5:return A.F(null,r)
case 1:return A.E(p,r)}})
return A.G($async$ef,r)},
v2(a){switch(a){case"HapticFeedbackType.lightImpact":return 10
case"HapticFeedbackType.mediumImpact":return 20
case"HapticFeedbackType.heavyImpact":return 30
case"HapticFeedbackType.selectionClick":return 10
default:return 50}},
bN(){var s=$.Ir
if(s==null)throw A.d(A.bj("scheduleFrameCallback must be initialized first."))
s.$0()},
tV(){var s=this
if(s.dy!=null)return
s.a=s.a.oE(A.Dq())
s.dy=A.am(self.window,"languagechange",new A.uB(s))},
tS(){var s,r,q,p=new globalThis.MutationObserver(A.a5(new A.uA(this)))
this.fy=p
s=self.document.documentElement
s.toString
r=A.b(["style"],t.s)
q=A.x(t.N,t.z)
q.p(0,"attributes",!0)
q.p(0,"attributeFilter",r)
r=A.y(q)
if(r==null)r=t.K.a(r)
p.observe(s,r)},
o5(a){var s=this,r=s.a
if(r.d!==a){s.a=r.ym(a)
A.d4(null,null)
A.d4(s.k3,s.k4)}},
xi(a){var s=this.a,r=s.a
if((r.a&32)!==0!==a){this.a=s.oD(r.yl(a))
A.d4(null,null)}},
tR(){var s,r=this,q=r.k1
r.o5(q.matches?B.Z:B.ao)
s=t.e.a(A.a5(new A.uz(r)))
r.k2=s
q.addListener(s)},
bE(a,b,c){A.jW(this.p4,this.R8,new A.fz(b,0,a,c))},
aC(a,b){A.Du(B.x,null,t.H).aH(new A.uI(a,b),t.P)}}
A.uH.prototype={
$0(){return this.a.$1(this.b.$1(this.c))},
$S:0}
A.uG.prototype={
$1(a){this.a.lw(this.b,a)},
$S:8}
A.uC.prototype={
$1(a){this.a.aC(this.b,B.t.U([!0]))},
$S:11}
A.uD.prototype={
$1(a){this.a.aC(this.b,B.t.U([a]))},
$S:19}
A.uE.prototype={
$1(a){var s=$.br.r
s===$&&A.m()
s.append(a)},
$S:1}
A.uF.prototype={
$1(a){var s=this.b
if(a)this.a.aC(s,B.t.U([!0]))
else if(s!=null)s.$1(null)},
$S:19}
A.uB.prototype={
$1(a){var s=this.a
s.a=s.a.oE(A.Dq())
A.d4(s.fr,s.fx)},
$S:1}
A.uA.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=null
for(s=J.a2(a),r=t.e,q=this.a;s.m();){p=s.gq()
p.toString
r.a(p)
o=p.type
if((o==null?l:o)==="attributes"){o=p.attributeName
o=(o==null?l:o)==="style"}else o=!1
if(o){o=self.document.documentElement
o.toString
n=A.PU(o)
m=(n==null?16:n)/16
o=q.a
if(o.e!==m){q.a=o.yo(m)
A.d4(l,l)
A.d4(q.go,q.id)}}}},
$S:91}
A.uz.prototype={
$1(a){var s=A.Fw(a)
s.toString
s=s?B.Z:B.ao
this.a.o5(s)},
$S:1}
A.uI.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(this.b)},
$S:11}
A.CH.prototype={
$0(){this.a.$2(this.b,this.c)},
$S:0}
A.nG.prototype={
j(a){return A.p(this).j(0)+"[view: null, geometry: "+B.z.j(0)+"]"}}
A.ml.prototype={
ez(a,b,c,d,e){var s=this,r=a==null?s.a:a,q=d==null?s.c:d,p=c==null?s.d:c,o=e==null?s.e:e,n=b==null?s.f:b
return new A.ml(r,!1,q,p,o,n,s.r,s.w)},
oD(a){return this.ez(a,null,null,null,null)},
oE(a){return this.ez(null,a,null,null,null)},
yo(a){return this.ez(null,null,null,null,a)},
ym(a){return this.ez(null,null,a,null,null)},
yn(a){return this.ez(null,null,null,a,null)}}
A.x3.prototype={
AB(a,b,c){this.d.p(0,b,a)
return this.b.ak(b,new A.x4(this,"flt-pv-slot-"+b,a,b,c))},
wN(a){var s,r,q
if(a==null)return
s=$.ay()
if(s!==B.r){a.remove()
return}r="tombstone-"+A.k(A.Fp(a,"slot"))
q=A.W(self.document,"slot")
A.i(q.style,"display","none")
s=A.y(r)
if(s==null)s=t.K.a(s)
q.setAttribute("name",s)
s=$.br.w
s===$&&A.m()
s.append(q)
s=A.y(r)
if(s==null)s=t.K.a(s)
a.setAttribute("slot",s)
a.remove()
q.remove()}}
A.x4.prototype={
$0(){var s,r,q=this,p=A.W(self.document,"flt-platform-view"),o=A.y(q.b)
if(o==null)o=t.K.a(o)
p.setAttribute("slot",o)
o=q.c
s=q.a.a.i(0,o)
s.toString
t.mP.a(s)
r=s.$1(q.d)
if(r.style.getPropertyValue("height").length===0){$.eZ().$1("Height of Platform View type: ["+o+"] may not be set. Defaulting to `height: 100%`.\nSet `style.height` to any appropriate value to stop this message.")
A.i(r.style,"height","100%")}if(r.style.getPropertyValue("width").length===0){$.eZ().$1("Width of Platform View type: ["+o+"] may not be set. Defaulting to `width: 100%`.\nSet `style.width` to any appropriate value to stop this message.")
A.i(r.style,"width","100%")}p.append(r)
return p},
$S:24}
A.x5.prototype={
uw(a,b){var s=t.f.a(a.b),r=B.e.A(A.jH(s.i(0,"id"))),q=A.aW(s.i(0,"viewType")),p=s.i(0,"params"),o=this.b
if(!o.a.v(q)){b.$1(B.a8.cU("unregistered_view_type","If you are the author of the PlatformView, make sure `registerViewFactory` is invoked.","A HtmlElementView widget is trying to create a platform view with an unregistered type: <"+q+">."))
return}if(o.b.v(r)){b.$1(B.a8.cU("recreating_view","view id: "+r,"trying to create an already created view"))
return}this.c.$1(o.AB(q,r,p))
b.$1(B.a8.eG(null))},
zj(a,b){var s,r=B.a8.b4(a)
switch(r.a){case"create":this.uw(r,b)
return
case"dispose":s=this.b
s.wN(s.b.C(0,A.jF(r.b)))
b.$1(B.a8.eG(null))
return}b.$1(null)}}
A.xP.prototype={
B6(){A.at(self.document,"touchstart",t.e.a(A.a5(new A.xQ())),null)}}
A.xQ.prototype={
$1(a){},
$S:1}
A.mm.prototype={
uu(){var s,r=this
if("PointerEvent" in self.window){s=new A.AR(A.x(t.S,t.iU),A.b([],t.F),r.a,r.gjC(),r.c,r.d)
s.e6()
return s}if("TouchEvent" in self.window){s=new A.Bg(A.aN(t.S),A.b([],t.F),r.a,r.gjC(),r.c,r.d)
s.e6()
return s}if("MouseEvent" in self.window){s=new A.AG(new A.eN(),A.b([],t.F),r.a,r.gjC(),r.c,r.d)
s.e6()
return s}throw A.d(A.a0("This browser does not support pointer, touch, or mouse events."))},
wf(a){var s=A.b(a.slice(0),A.b_(a)),r=$.L()
A.jW(r.Q,r.as,new A.ih(s))}}
A.xd.prototype={
j(a){return"pointers:"+("PointerEvent" in self.window)+", touch:"+("TouchEvent" in self.window)+", mouse:"+("MouseEvent" in self.window)}}
A.j0.prototype={}
A.zS.prototype={
jW(a,b,c,d){var s=t.e.a(A.a5(new A.zT(c)))
A.at(a,b,s,d)
this.a.push(new A.j0(b,a,s,d,!1))},
xy(a,b,c){return this.jW(a,b,c,!0)}}
A.zT.prototype={
$1(a){var s=$.aT
if((s==null?$.aT=A.cG():s).qe(a))this.a.$1(a)},
$S:1}
A.r5.prototype={
ni(a,b){if(b==null)return!1
return Math.abs(b- -3*a)>1},
vU(a){var s,r,q,p,o,n=this,m=$.ay()
if(m===B.U)return!1
if(n.ni(a.deltaX,A.FD(a))||n.ni(a.deltaY,A.FE(a)))return!1
if(!(B.e.b_(a.deltaX,120)===0&&B.e.b_(a.deltaY,120)===0)){m=A.FD(a)
if(B.e.b_(m==null?1:m,120)===0){m=A.FE(a)
m=B.e.b_(m==null?1:m,120)===0}else m=!1}else m=!0
if(m){m=a.deltaX
s=n.f
r=s==null
q=r?null:s.deltaX
p=Math.abs(m-(q==null?0:q))
m=a.deltaY
q=r?null:s.deltaY
o=Math.abs(m-(q==null?0:q))
if(!r)if(!(p===0&&o===0))m=!(p<20&&o<20)
else m=!0
else m=!0
if(m){if(A.bi(a)!=null)m=(r?null:A.bi(s))!=null
else m=!1
if(m){m=A.bi(a)
m.toString
s.toString
s=A.bi(s)
s.toString
if(m-s<50&&n.r)return!0}return!1}}return!0},
us(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.vU(a)){s=B.aL
r=-2}else{s=B.aK
r=-1}q=a.deltaX
p=a.deltaY
switch(B.e.A(a.deltaMode)){case 1:o=$.Hi
if(o==null){n=A.W(self.document,"div")
o=n.style
A.i(o,"font-size","initial")
A.i(o,"display","none")
self.document.body.append(n)
o=A.Dp(self.window,n).getPropertyValue("font-size")
if(B.c.t(o,"px"))m=A.Gj(A.Iu(o,"px",""))
else m=null
n.remove()
o=$.Hi=m==null?16:m/4}q*=o
p*=o
break
case 2:o=$.b9()
q*=o.gf2().a
p*=o.gf2().b
break
case 0:o=$.aS()
if(o===B.Q){o=$.ay()
if(o!==B.r)o=o===B.U
else o=!0}else o=!1
if(o){o=$.b9()
l=o.x
if(l==null){l=self.window.devicePixelRatio
if(l===0)l=1}q*=l
o=o.x
if(o==null){o=self.window.devicePixelRatio
if(o===0)o=1}p*=o}break
default:break}k=A.b([],t.I)
j=A.Es(a,d.b)
o=$.aS()
if(o===B.Q){o=$.w3
o=o==null?null:o.ged().f.v($.EZ())
if(o!==!0){o=$.w3
o=o==null?null:o.ged().f.v($.F_())
i=o===!0}else i=!0}else i=!1
o=a.ctrlKey&&!i
l=d.d
h=j.a
if(o){o=A.bi(a)
o.toString
o=A.eM(o)
g=$.b9()
f=g.x
if(f==null){f=self.window.devicePixelRatio
if(f===0)f=1}g=g.x
if(g==null){g=self.window.devicePixelRatio
if(g===0)g=1}e=A.c3(a)
e.toString
l.yg(k,B.e.A(e),B.a6,r,s,h*f,j.b*g,1,1,Math.exp(-p/200),B.vF,o)}else{o=A.bi(a)
o.toString
o=A.eM(o)
g=$.b9()
f=g.x
if(f==null){f=self.window.devicePixelRatio
if(f===0)f=1}g=g.x
if(g==null){g=self.window.devicePixelRatio
if(g===0)g=1}e=A.c3(a)
e.toString
l.yi(k,B.e.A(e),B.a6,r,s,h*f,j.b*g,1,1,q,p,B.vE,o)}d.f=a
d.r=s===B.aL
return k},
mr(a){var s=this.b,r=t.e.a(A.a5(a)),q=t.K,p=A.y(A.ah(["capture",!1,"passive",!1],t.N,q))
q=p==null?q.a(p):p
s.addEventListener("wheel",r,q)
this.a.push(new A.j0("wheel",s,r,!1,!0))},
na(a){this.c.$1(this.us(a))
a.preventDefault()}}
A.cx.prototype={
j(a){return A.p(this).j(0)+"(change: "+this.a.j(0)+", buttons: "+this.b+")"}}
A.eN.prototype={
lP(a,b){var s
if(this.a!==0)return this.ip(b)
s=(b===0&&a>-1?A.P5(a):b)&1073741823
this.a=s
return new A.cx(B.na,s)},
ip(a){var s=a&1073741823,r=this.a
if(r===0&&s!==0)return new A.cx(B.a6,r)
this.a=s
return new A.cx(s===0?B.a6:B.aJ,s)},
fg(a){if(this.a!==0&&(a&1073741823)===0){this.a=0
return new A.cx(B.cD,0)}return null},
lQ(a){if((a&1073741823)===0){this.a=0
return new A.cx(B.a6,0)}return null},
lR(a){var s
if(this.a===0)return null
s=this.a=(a==null?0:a)&1073741823
if(s===0)return new A.cx(B.cD,s)
else return new A.cx(B.aJ,s)}}
A.AR.prototype={
j9(a){return this.w.ak(a,new A.AT())},
nD(a){if(A.Do(a)==="touch")this.w.C(0,A.Fz(a))},
iN(a,b,c,d,e){this.jW(a,b,new A.AS(this,d,c),e)},
iM(a,b,c){return this.iN(a,b,c,!0,!0)},
tW(a,b,c,d){return this.iN(a,b,c,d,!0)},
e6(){var s=this,r=s.b
s.iM(r,"pointerdown",new A.AU(s))
s.iM(self.window,"pointermove",new A.AV(s))
s.iN(r,"pointerleave",new A.AW(s),!1,!1)
s.iM(self.window,"pointerup",new A.AX(s))
s.tW(r,"pointercancel",new A.AY(s),!1)
s.mr(new A.AZ(s))},
aP(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=A.Do(c)
j.toString
s=k.nt(j)
j=A.FA(c)
j.toString
r=A.FB(c)
r.toString
j=Math.abs(j)>Math.abs(r)?A.FA(c):A.FB(c)
j.toString
r=A.bi(c)
r.toString
q=A.eM(r)
p=c.pressure
if(p==null)p=null
o=A.Es(c,k.b)
r=k.dl(c)
n=$.b9()
m=n.x
if(m==null){m=self.window.devicePixelRatio
if(m===0)m=1}n=n.x
if(n==null){n=self.window.devicePixelRatio
if(n===0)n=1}l=p==null?0:p
k.d.yh(a,b.b,b.a,r,s,o.a*m,o.b*n,l,1,B.al,j/180*3.141592653589793,q)},
uT(a){var s,r
if("getCoalescedEvents" in a){s=J.rL(a.getCoalescedEvents(),t.e)
r=new A.bH(s.a,s.$ti.k("bH<1,C>"))
if(!r.gH(r))return r}return A.b([a],t.J)},
nt(a){switch(a){case"mouse":return B.aK
case"pen":return B.vC
case"touch":return B.cE
default:return B.vD}},
dl(a){var s=A.Do(a)
s.toString
if(this.nt(s)===B.aK)s=-1
else{s=A.Fz(a)
s.toString
s=B.e.A(s)}return s}}
A.AT.prototype={
$0(){return new A.eN()},
$S:100}
A.AS.prototype={
$1(a){var s,r,q,p,o
if(this.b){s=a.getModifierState("Alt")
r=a.getModifierState("Control")
q=a.getModifierState("Meta")
p=a.getModifierState("Shift")
o=A.bi(a)
o.toString
this.a.e.iJ(s,r,q,p,o)}this.c.$1(a)},
$S:1}
A.AU.prototype={
$1(a){var s,r,q=this.a,p=q.dl(a),o=A.b([],t.I),n=q.j9(p),m=A.c3(a)
m.toString
s=n.fg(B.e.A(m))
if(s!=null)q.aP(o,s,a)
m=B.e.A(a.button)
r=A.c3(a)
r.toString
q.aP(o,n.lP(m,B.e.A(r)),a)
q.c.$1(o)},
$S:3}
A.AV.prototype={
$1(a){var s,r,q,p,o=this.a,n=o.j9(o.dl(a)),m=A.b([],t.I)
for(s=J.a2(o.uT(a));s.m();){r=s.gq()
q=r.buttons
if(q==null)q=null
q.toString
p=n.fg(B.e.A(q))
if(p!=null)o.aP(m,p,r)
q=r.buttons
if(q==null)q=null
q.toString
o.aP(m,n.ip(B.e.A(q)),r)}o.c.$1(m)},
$S:3}
A.AW.prototype={
$1(a){var s,r=this.a,q=r.j9(r.dl(a)),p=A.b([],t.I),o=A.c3(a)
o.toString
s=q.lQ(B.e.A(o))
if(s!=null){r.aP(p,s,a)
r.c.$1(p)}},
$S:3}
A.AX.prototype={
$1(a){var s,r,q,p=this.a,o=p.dl(a),n=p.w
if(n.v(o)){s=A.b([],t.I)
n=n.i(0,o)
n.toString
r=A.c3(a)
q=n.lR(r==null?null:B.e.A(r))
p.nD(a)
if(q!=null){p.aP(s,q,a)
p.c.$1(s)}}},
$S:3}
A.AY.prototype={
$1(a){var s,r=this.a,q=r.dl(a),p=r.w
if(p.v(q)){s=A.b([],t.I)
p=p.i(0,q)
p.toString
p.a=0
r.nD(a)
r.aP(s,new A.cx(B.cB,0),a)
r.c.$1(s)}},
$S:3}
A.AZ.prototype={
$1(a){this.a.na(a)},
$S:1}
A.Bg.prototype={
fz(a,b,c){this.xy(a,b,new A.Bh(this,!0,c))},
e6(){var s=this,r=s.b
s.fz(r,"touchstart",new A.Bi(s))
s.fz(r,"touchmove",new A.Bj(s))
s.fz(r,"touchend",new A.Bk(s))
s.fz(r,"touchcancel",new A.Bl(s))},
fD(a,b,c,d,e){var s,r,q,p,o,n=A.KD(e)
n.toString
n=B.e.A(n)
s=e.clientX
r=$.b9()
q=r.x
if(q==null){q=self.window.devicePixelRatio
if(q===0)q=1}p=e.clientY
r=r.x
if(r==null){r=self.window.devicePixelRatio
if(r===0)r=1}o=c?1:0
this.d.ye(b,o,a,n,s*q,p*r,1,1,B.al,d)}}
A.Bh.prototype={
$1(a){var s=a.altKey,r=a.ctrlKey,q=a.metaKey,p=a.shiftKey,o=A.bi(a)
o.toString
this.a.e.iJ(s,r,q,p,o)
this.c.$1(a)},
$S:1}
A.Bi.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.bi(a)
l.toString
s=A.eM(l)
r=A.b([],t.I)
for(l=t.e,q=t.U,q=A.al(new A.cX(a.changedTouches,q),q.k("l.E"),l),l=A.al(q.a,A.o(q).c,l),q=J.a2(l.a),l=A.o(l),l=l.k("@<1>").O(l.z[1]).z[1],p=this.a;q.m();){o=l.a(q.gq())
n=o.identifier
if(n==null)n=null
n.toString
m=p.w
if(!m.t(0,B.e.A(n))){n=o.identifier
if(n==null)n=null
n.toString
m.u(0,B.e.A(n))
p.fD(B.na,r,!0,s,o)}}p.c.$1(r)},
$S:3}
A.Bj.prototype={
$1(a){var s,r,q,p,o,n,m
a.preventDefault()
s=A.bi(a)
s.toString
r=A.eM(s)
q=A.b([],t.I)
for(s=t.e,p=t.U,p=A.al(new A.cX(a.changedTouches,p),p.k("l.E"),s),s=A.al(p.a,A.o(p).c,s),p=J.a2(s.a),s=A.o(s),s=s.k("@<1>").O(s.z[1]).z[1],o=this.a;p.m();){n=s.a(p.gq())
m=n.identifier
if(m==null)m=null
m.toString
if(o.w.t(0,B.e.A(m)))o.fD(B.aJ,q,!0,r,n)}o.c.$1(q)},
$S:3}
A.Bk.prototype={
$1(a){var s,r,q,p,o,n,m,l
a.preventDefault()
s=A.bi(a)
s.toString
r=A.eM(s)
q=A.b([],t.I)
for(s=t.e,p=t.U,p=A.al(new A.cX(a.changedTouches,p),p.k("l.E"),s),s=A.al(p.a,A.o(p).c,s),p=J.a2(s.a),s=A.o(s),s=s.k("@<1>").O(s.z[1]).z[1],o=this.a;p.m();){n=s.a(p.gq())
m=n.identifier
if(m==null)m=null
m.toString
l=o.w
if(l.t(0,B.e.A(m))){m=n.identifier
if(m==null)m=null
m.toString
l.C(0,B.e.A(m))
o.fD(B.cD,q,!1,r,n)}}o.c.$1(q)},
$S:3}
A.Bl.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.bi(a)
l.toString
s=A.eM(l)
r=A.b([],t.I)
for(l=t.e,q=t.U,q=A.al(new A.cX(a.changedTouches,q),q.k("l.E"),l),l=A.al(q.a,A.o(q).c,l),q=J.a2(l.a),l=A.o(l),l=l.k("@<1>").O(l.z[1]).z[1],p=this.a;q.m();){o=l.a(q.gq())
n=o.identifier
if(n==null)n=null
n.toString
m=p.w
if(m.t(0,B.e.A(n))){n=o.identifier
if(n==null)n=null
n.toString
m.C(0,B.e.A(n))
p.fD(B.cB,r,!1,s,o)}}p.c.$1(r)},
$S:3}
A.AG.prototype={
mq(a,b,c,d){this.jW(a,b,new A.AH(this,!0,c),d)},
iL(a,b,c){return this.mq(a,b,c,!0)},
e6(){var s=this,r=s.b
s.iL(r,"mousedown",new A.AI(s))
s.iL(self.window,"mousemove",new A.AJ(s))
s.mq(r,"mouseleave",new A.AK(s),!1)
s.iL(self.window,"mouseup",new A.AL(s))
s.mr(new A.AM(s))},
aP(a,b,c){var s,r,q=A.Es(c,this.b),p=A.bi(c)
p.toString
p=A.eM(p)
s=$.b9()
r=s.x
if(r==null){r=self.window.devicePixelRatio
if(r===0)r=1}s=s.x
if(s==null){s=self.window.devicePixelRatio
if(s===0)s=1}this.d.yf(a,b.b,b.a,-1,B.aK,q.a*r,q.b*s,1,1,B.al,p)}}
A.AH.prototype={
$1(a){var s=a.getModifierState("Alt"),r=a.getModifierState("Control"),q=a.getModifierState("Meta"),p=a.getModifierState("Shift"),o=A.bi(a)
o.toString
this.a.e.iJ(s,r,q,p,o)
this.c.$1(a)},
$S:1}
A.AI.prototype={
$1(a){var s,r,q=A.b([],t.I),p=this.a,o=p.w,n=A.c3(a)
n.toString
s=o.fg(B.e.A(n))
if(s!=null)p.aP(q,s,a)
n=B.e.A(a.button)
r=A.c3(a)
r.toString
p.aP(q,o.lP(n,B.e.A(r)),a)
p.c.$1(q)},
$S:3}
A.AJ.prototype={
$1(a){var s,r=A.b([],t.I),q=this.a,p=q.w,o=A.c3(a)
o.toString
s=p.fg(B.e.A(o))
if(s!=null)q.aP(r,s,a)
o=A.c3(a)
o.toString
q.aP(r,p.ip(B.e.A(o)),a)
q.c.$1(r)},
$S:3}
A.AK.prototype={
$1(a){var s,r=A.b([],t.I),q=this.a,p=A.c3(a)
p.toString
s=q.w.lQ(B.e.A(p))
if(s!=null){q.aP(r,s,a)
q.c.$1(r)}},
$S:3}
A.AL.prototype={
$1(a){var s,r=A.b([],t.I),q=this.a,p=A.c3(a)
p=p==null?null:B.e.A(p)
s=q.w.lR(p)
if(s!=null){q.aP(r,s,a)
q.c.$1(r)}},
$S:3}
A.AM.prototype={
$1(a){this.a.na(a)},
$S:1}
A.fX.prototype={}
A.x6.prototype={
fH(a,b,c){return this.a.ak(a,new A.x7(b,c))},
cJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6,a7,a8){var s,r,q=this.a.i(0,c)
q.toString
s=q.b
r=q.c
q.b=i
q.c=j
q=q.a
if(q==null)q=0
return A.Gg(a,b,c,d,e,f,!1,h,i-s,j-r,i,j,k,q,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6,!1,a7,a8)},
ju(a,b,c){var s=this.a.i(0,a)
s.toString
return s.b!==b||s.c!==c},
cd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q=this.a.i(0,c)
q.toString
s=q.b
r=q.c
q.b=i
q.c=j
q=q.a
if(q==null)q=0
return A.Gg(a,b,c,d,e,f,!1,h,i-s,j-r,i,j,k,q,l,m,n,o,p,a0,a1,a2,a3,a4,B.al,a5,!0,a6,a7)},
ex(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var s,r,q,p=this
if(m===B.al)switch(c.a){case 1:p.fH(d,f,g)
a.push(p.cJ(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,o))
break
case 3:s=p.a.v(d)
p.fH(d,f,g)
if(!s)a.push(p.cd(b,B.cC,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,o))
a.push(p.cJ(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,o))
p.b=b
break
case 4:s=p.a.v(d)
p.fH(d,f,g).a=$.GU=$.GU+1
if(!s)a.push(p.cd(b,B.cC,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,o))
if(p.ju(d,f,g))a.push(p.cd(0,B.a6,d,0,0,e,!1,0,f,g,0,0,i,0,0,0,0,0,j,k,l,0,n,o))
a.push(p.cJ(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,o))
p.b=b
break
case 5:a.push(p.cJ(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,o))
p.b=b
break
case 6:case 0:r=p.a
q=r.i(0,d)
q.toString
if(c===B.cB){f=q.b
g=q.c}if(p.ju(d,f,g))a.push(p.cd(p.b,B.aJ,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,o))
a.push(p.cJ(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,o))
if(e===B.cE){a.push(p.cd(0,B.vB,d,0,0,e,!1,0,f,g,0,0,i,0,0,0,0,0,j,k,l,0,n,o))
r.C(0,d)}break
case 2:r=p.a
q=r.i(0,d)
q.toString
a.push(p.cJ(b,c,d,0,0,e,!1,0,q.b,q.c,0,h,i,0,0,0,0,0,j,k,l,m,0,n,o))
r.C(0,d)
break
case 7:case 8:case 9:break}else switch(m.a){case 1:case 2:case 3:s=p.a.v(d)
p.fH(d,f,g)
if(!s)a.push(p.cd(b,B.cC,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,o))
if(p.ju(d,f,g))if(b!==0)a.push(p.cd(b,B.aJ,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,o))
else a.push(p.cd(b,B.a6,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,o))
a.push(p.cJ(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,o))
break
case 0:break
case 4:break}},
yg(a,b,c,d,e,f,g,h,i,j,k,l){return this.ex(a,b,c,d,e,f,g,h,i,j,0,0,k,0,l)},
yi(a,b,c,d,e,f,g,h,i,j,k,l,m){return this.ex(a,b,c,d,e,f,g,h,i,1,j,k,l,0,m)},
yf(a,b,c,d,e,f,g,h,i,j,k){return this.ex(a,b,c,d,e,f,g,h,i,1,0,0,j,0,k)},
ye(a,b,c,d,e,f,g,h,i,j){return this.ex(a,b,c,d,B.cE,e,f,g,h,1,0,0,i,0,j)},
yh(a,b,c,d,e,f,g,h,i,j,k,l){return this.ex(a,b,c,d,e,f,g,h,i,1,0,0,j,k,l)}}
A.x7.prototype={
$0(){return new A.fX(this.a,this.b)},
$S:107}
A.DL.prototype={}
A.xo.prototype={
tK(a){var s=this,r=t.e
s.b=r.a(A.a5(new A.xp(s)))
A.at(self.window,"keydown",s.b,null)
s.c=r.a(A.a5(new A.xq(s)))
A.at(self.window,"keyup",s.c,null)
$.dQ.push(new A.xr(s))},
F(){var s,r,q=this
A.ck(self.window,"keydown",q.b,null)
A.ck(self.window,"keyup",q.c,null)
for(s=q.a,r=A.wk(s,s.r);r.m();)s.i(0,r.d).bT()
s.B(0)
$.DN=q.c=q.b=null},
n7(a){var s,r,q,p,o,n,m=this,l=globalThis.KeyboardEvent
if(!(l!=null&&a instanceof l))return
s=new A.cm(a)
r=A.e7(a)
r.toString
if(a.type==="keydown"&&A.cl(a)==="Tab"&&a.isComposing)return
q=A.cl(a)
q.toString
if(!(q==="Meta"||q==="Shift"||q==="Alt"||q==="Control")&&m.e){q=m.a
p=q.i(0,r)
if(p!=null)p.bT()
if(a.type==="keydown")p=a.ctrlKey||a.shiftKey||a.altKey||a.metaKey
else p=!1
if(p)q.p(0,r,A.bC(B.dg,new A.xt(m,r,s)))
else q.C(0,r)}o=a.getModifierState("Shift")?1:0
if(a.getModifierState("Alt")||a.getModifierState("AltGraph"))o|=2
if(a.getModifierState("Control"))o|=4
if(a.getModifierState("Meta"))o|=8
m.d=o
if(a.type==="keydown")if(A.cl(a)==="CapsLock"){r=o|32
m.d=r}else if(A.e7(a)==="NumLock"){r=o|16
m.d=r}else if(A.cl(a)==="ScrollLock"){r=o|64
m.d=r}else{if(A.cl(a)==="Meta"){r=$.aS()
r=r===B.cy}else r=!1
if(r){r=o|8
m.d=r}else r=o}else r=o
n=A.ah(["type",a.type,"keymap","web","code",A.e7(a),"key",A.cl(a),"location",B.e.A(a.location),"metaState",r,"keyCode",B.e.A(a.keyCode)],t.N,t.z)
$.L().bD("flutter/keyevent",B.t.U(n),new A.xu(s))}}
A.xp.prototype={
$1(a){this.a.n7(a)},
$S:1}
A.xq.prototype={
$1(a){this.a.n7(a)},
$S:1}
A.xr.prototype={
$0(){this.a.F()},
$S:0}
A.xt.prototype={
$0(){var s,r,q=this.a
q.a.C(0,this.b)
s=this.c.a
r=A.ah(["type","keyup","keymap","web","code",A.e7(s),"key",A.cl(s),"location",B.e.A(s.location),"metaState",q.d,"keyCode",B.e.A(s.keyCode)],t.N,t.z)
$.L().bD("flutter/keyevent",B.t.U(r),A.O8())},
$S:0}
A.xu.prototype={
$1(a){if(a==null)return
if(A.h_(t.a.a(B.t.aV(a)).i(0,"handled")))this.a.a.preventDefault()},
$S:8}
A.h7.prototype={
D(){return"Assertiveness."+this.b}}
A.rM.prototype={
xK(a){switch(a.a){case 0:return this.a
case 1:return this.b}},
oo(a,b){var s=this.xK(b),r=A.W(self.document,"div")
A.Fy(r,a)
s.append(r)
A.bC(B.dh,new A.rN(r))}}
A.rN.prototype={
$0(){return this.a.remove()},
$S:0}
A.iP.prototype={
D(){return"_CheckableKind."+this.b}}
A.f4.prototype={
b9(){var s,r,q,p="true",o=this.b
if((o.k3&1)!==0){switch(this.d.a){case 0:o.aJ("checkbox",!0)
break
case 1:o.aJ("radio",!0)
break
case 2:o.aJ("switch",!0)
break}if(o.oY()===B.bK){s=o.k2
r=A.y(p)
if(r==null)r=t.K.a(r)
s.setAttribute("aria-disabled",r)
r=A.y(p)
if(r==null)r=t.K.a(r)
s.setAttribute("disabled",r)}else this.nB()
r=o.a
q=A.y((r&2)!==0||(r&131072)!==0?p:"false")
r=q==null?t.K.a(q):q
o.k2.setAttribute("aria-checked",r)}},
F(){var s=this
s.c9()
switch(s.d.a){case 0:s.b.aJ("checkbox",!1)
break
case 1:s.b.aJ("radio",!1)
break
case 2:s.b.aJ("switch",!1)
break}s.nB()},
nB(){var s=this.b.k2
s.removeAttribute("aria-disabled")
s.removeAttribute("disabled")}}
A.e6.prototype={
b9(){var s,r,q=this.b
if((q.a&4096)!==0){s=q.z
r=A.y(s==null?"":s)
if(r==null)r=t.K.a(r)
q.k2.setAttribute("aria-label",r)
q.aJ("dialog",!0)}},
oM(a){var s,r=this.b
if((r.a&4096)!==0)return
r.aJ("dialog",!0)
s=A.y(a.b.k2.id)
if(s==null)s=t.K.a(s)
r.k2.setAttribute("aria-describedby",s)}}
A.fx.prototype={
b9(){var s,r=this,q=r.b
if((q.k3&1024)!==0){s=r.d
if(s!=null)s.oM(r)
else q.k1.e.push(new A.xM(r))}},
vZ(){var s,r=this.b.ok
while(!0){s=r!=null
if(!(s&&!r.p2.v(B.aM)))break
r=r.ok}if(s&&r.p2.v(B.aM)){s=r.p2.i(0,B.aM)
s.toString
this.d=t.j0.a(s)}}}
A.xM.prototype={
$0(){var s,r=this.a
if(!r.c){r.vZ()
s=r.d
if(s!=null)s.oM(r)}},
$S:0}
A.fg.prototype={
b9(){var s=this.b.a
if((s&32)!==0)s=(s&64)===0||(s&128)!==0
else s=!1
this.d.ox(s)},
F(){this.c9()
this.d.iD()}}
A.k2.prototype={
pV(a,b){var s,r,q=this,p=q.b,o=p==null
if(b===(o?null:p.a[2])){o=p.a
if(a===o[3])return
s=o[2]
r=o[1]
q.b=new A.jb([o[0],r,s,a])
return}if(!o)q.iD()
o=t.e
s=o.a(A.a5(new A.rP(q)))
s=[o.a(A.a5(new A.rQ(q))),s,b,a]
q.b=new A.jb(s)
b.tabIndex=0
A.at(b,"focus",s[1],null)
A.at(b,"blur",s[0],null)},
iD(){var s,r=this.b
if(r==null)return
s=r.a
A.ck(s[2],"focus",s[1],null)
A.ck(s[2],"blur",s[0],null)
this.b=null},
nL(a){var s,r,q=this.b
if(q==null)return
s=$.L()
r=q.a[3]
s.bE(r,a?B.no:B.ns,null)},
ox(a){var s=this.b
if(s==null)return
this.a.e.push(new A.rO(this,s,a))}}
A.rP.prototype={
$1(a){return this.a.nL(!0)},
$S:1}
A.rQ.prototype={
$1(a){return this.a.nL(!1)},
$S:1}
A.rO.prototype={
$0(){var s=this.b
if(!J.w(this.a.b,s))return
s=s.a
if(this.c)s[2].focus()
else s[2].blur()},
$S:0}
A.fo.prototype={
b9(){var s,r,q=this,p=q.b
if(p.gpP()){s=p.dy
s=s!=null&&!B.aE.gH(s)}else s=!1
if(s){if(q.d==null){q.d=A.W(self.document,"flt-semantics-img")
s=p.dy
if(s!=null&&!B.aE.gH(s)){s=q.d.style
A.i(s,"position","absolute")
A.i(s,"top","0")
A.i(s,"left","0")
r=p.y
A.i(s,"width",A.k(r.c-r.a)+"px")
r=p.y
A.i(s,"height",A.k(r.d-r.b)+"px")}A.i(q.d.style,"font-size","6px")
s=q.d
s.toString
p.k2.append(s)}p=q.d
p.toString
s=A.y("img")
if(s==null)s=t.K.a(s)
p.setAttribute("role",s)
q.nN(q.d)}else if(p.gpP()){p.aJ("img",!0)
q.nN(p.k2)
q.iU()}else{q.iU()
q.mE()}},
nN(a){var s=this.b.z
if(s!=null&&s.length!==0){a.toString
s.toString
s=A.y(s)
if(s==null)s=t.K.a(s)
a.setAttribute("aria-label",s)}},
iU(){var s=this.d
if(s!=null){s.remove()
this.d=null}},
mE(){var s=this.b
s.aJ("img",!1)
s.k2.removeAttribute("aria-label")},
F(){this.c9()
this.iU()
this.mE()}}
A.fp.prototype={
tH(a){var s,r=this,q=r.d
a.k2.append(q)
A.ua(q,"range")
s=A.y("slider")
if(s==null)s=t.K.a(s)
q.setAttribute("role",s)
A.at(q,"change",t.e.a(A.a5(new A.vC(r,a))),null)
s=new A.vD(r)
r.r=s
a.k1.as.push(s)
r.e.pV(a.id,q)},
b9(){var s=this,r=s.b
switch(r.k1.z.a){case 1:s.uM()
s.xj()
break
case 0:s.mQ()
break}s.e.ox((r.a&32)!==0)},
uM(){var s=this.d,r=A.Dn(s)
r.toString
if(!r)return
A.Fs(s,!1)},
xj(){var s,r,q,p,o,n,m,l=this
if(!l.w){s=l.b.k3
r=(s&4096)!==0||(s&8192)!==0||(s&16384)!==0}else r=!0
if(!r)return
l.w=!1
q=""+l.f
s=l.d
A.Ft(s,q)
p=A.y(q)
if(p==null)p=t.K.a(p)
s.setAttribute("aria-valuenow",p)
p=l.b
o=p.ax
o.toString
o=A.y(o)
if(o==null)o=t.K.a(o)
s.setAttribute("aria-valuetext",o)
n=p.ch.length!==0?""+(l.f+1):q
s.max=n
o=A.y(n)
if(o==null)o=t.K.a(o)
s.setAttribute("aria-valuemax",o)
m=p.cx.length!==0?""+(l.f-1):q
s.min=m
p=A.y(m)
if(p==null)p=t.K.a(p)
s.setAttribute("aria-valuemin",p)},
mQ(){var s=this.d,r=A.Dn(s)
r.toString
if(r)return
A.Fs(s,!0)},
F(){var s=this
s.c9()
s.e.iD()
B.b.C(s.b.k1.as,s.r)
s.r=null
s.mQ()
s.d.remove()}}
A.vC.prototype={
$1(a){var s,r=this.a,q=r.d,p=A.Dn(q)
p.toString
if(p)return
r.w=!0
q=A.Fr(q)
q.toString
s=A.d3(q,null)
q=r.f
if(s>q){r.f=q+1
$.L().bE(this.b.id,B.nr,null)}else if(s<q){r.f=q-1
$.L().bE(this.b.id,B.nm,null)}},
$S:1}
A.vD.prototype={
$1(a){this.a.b9()},
$S:30}
A.fs.prototype={
b9(){var s,r,q=this.b,p=q.ax,o=p!=null&&p.length!==0,n=q.z,m=n!=null&&n.length!==0,l=q.fy,k=l!=null&&l.length!==0
if(o){s=q.b
s.toString
r=!((s&64)!==0||(s&128)!==0)}else r=!1
s=!m
if(s&&!r&&!k){this.mD()
return}if(k){l=""+A.k(l)
if(!s||r)l+="\n"}else l=""
if(m){n=l+A.k(n)
if(r)n+=" "}else n=l
p=r?n+A.k(p):n
p=A.y(p.charCodeAt(0)==0?p:p)
if(p==null)p=t.K.a(p)
q.k2.setAttribute("aria-label",p)
p=q.dy
if(p!=null&&!B.aE.gH(p))q.aJ("group",!0)
else if((q.a&512)!==0)q.aJ("heading",!0)
else q.aJ("text",!0)},
mD(){var s=this.b.k2
s.removeAttribute("aria-label")
s.removeAttribute("role")},
F(){this.c9()
this.mD()}}
A.ft.prototype={
b9(){var s=this.d,r=this.b.z
if(s!=r){this.d=r
if(r!=null&&r.length!==0){s=$.br.y
s===$&&A.m()
r.toString
s.oo(r,B.bx)}}}}
A.fy.prototype={
wx(){var s,r,q,p,o=this,n=null
if(o.gmS()!==o.r){s=o.b
if(!s.k1.r4("scroll"))return
r=o.gmS()
q=o.r
o.nn()
s.lq()
p=s.id
if(r>q){s=s.b
s.toString
if((s&32)!==0||(s&16)!==0)$.L().bE(p,B.nn,n)
else $.L().bE(p,B.nq,n)}else{s=s.b
s.toString
if((s&32)!==0||(s&16)!==0)$.L().bE(p,B.np,n)
else $.L().bE(p,B.nt,n)}}},
b9(){var s,r=this,q=r.b,p=q.k1
p.e.push(new A.xZ(r))
if(r.f==null){q=q.k2
A.i(q.style,"touch-action","none")
r.n0()
s=new A.y_(r)
r.d=s
p.as.push(s)
s=t.e.a(A.a5(new A.y0(r)))
r.f=s
A.at(q,"scroll",s,null)}},
gmS(){var s=this.b,r=s.b
r.toString
r=(r&32)!==0||(r&16)!==0
s=s.k2
if(r)return B.e.A(s.scrollTop)
else return B.e.A(s.scrollLeft)},
nn(){var s,r,q,p,o=this,n="transform",m=o.b,l=m.k2,k=m.y
if(k==null){$.eZ().$1("Warning! the rect attribute of semanticsObject is null")
return}s=m.b
s.toString
s=(s&32)!==0||(s&16)!==0
r=o.e
q=k.d-k.b
p=k.c-k.a
if(s){s=B.e.bU(q)
r=r.style
A.i(r,n,"translate(0px,"+(s+10)+"px)")
A.i(r,"width",""+B.e.i3(p)+"px")
A.i(r,"height","10px")
l.scrollTop=10
m.p3=o.r=B.e.A(l.scrollTop)
m.p4=0}else{s=B.e.bU(p)
r=r.style
A.i(r,n,"translate("+(s+10)+"px,0px)")
A.i(r,"width","10px")
A.i(r,"height",""+B.e.i3(q)+"px")
l.scrollLeft=10
q=B.e.A(l.scrollLeft)
o.r=q
m.p3=0
m.p4=q}},
n0(){var s="overflow-y",r="overflow-x",q=this.b,p=q.k2
switch(q.k1.z.a){case 1:q=q.b
q.toString
if((q&32)!==0||(q&16)!==0)A.i(p.style,s,"scroll")
else A.i(p.style,r,"scroll")
break
case 0:q=q.b
q.toString
if((q&32)!==0||(q&16)!==0)A.i(p.style,s,"hidden")
else A.i(p.style,r,"hidden")
break}},
F(){var s,r,q,p,o=this
o.c9()
s=o.b
r=s.k2
q=r.style
q.removeProperty("overflowY")
q.removeProperty("overflowX")
q.removeProperty("touch-action")
p=o.f
if(p!=null)A.ck(r,"scroll",p,null)
B.b.C(s.k1.as,o.d)
o.d=null}}
A.xZ.prototype={
$0(){var s=this.a
s.nn()
s.b.lq()},
$S:0}
A.y_.prototype={
$1(a){this.a.n0()},
$S:30}
A.y0.prototype={
$1(a){this.a.wx()},
$S:1}
A.fa.prototype={
j(a){var s=A.b([],t.s),r=this.a
if((r&1)!==0)s.push("accessibleNavigation")
if((r&2)!==0)s.push("invertColors")
if((r&4)!==0)s.push("disableAnimations")
if((r&8)!==0)s.push("boldText")
if((r&16)!==0)s.push("reduceMotion")
if((r&32)!==0)s.push("highContrast")
if((r&64)!==0)s.push("onOffSwitchLabels")
return"AccessibilityFeatures"+A.k(s)},
h(a,b){if(b==null)return!1
if(J.u(b)!==A.p(this))return!1
return b instanceof A.fa&&b.a===this.a},
gl(a){return B.f.gl(this.a)},
oF(a,b){var s=(a==null?(this.a&1)!==0:a)?1:0,r=this.a
s=(r&2)!==0?s|2:s&4294967293
s=(r&4)!==0?s|4:s&4294967291
s=(r&8)!==0?s|8:s&4294967287
s=(r&16)!==0?s|16:s&4294967279
s=(b==null?(r&32)!==0:b)?s|32:s&4294967263
return new A.fa((r&64)!==0?s|64:s&4294967231)},
yl(a){return this.oF(null,a)},
yk(a){return this.oF(a,null)}}
A.up.prototype={
szx(a){var s=this.a
this.a=a?s|32:s&4294967263},
aa(){return new A.fa(this.a)}}
A.mW.prototype={$iDR:1}
A.mV.prototype={}
A.bB.prototype={
D(){return"Role."+this.b}}
A.C_.prototype={
$1(a){var s=new A.k2(a.k1)
s.pV(a.id,a.k2)
return new A.fg(s,a)},
$S:112}
A.C0.prototype={
$1(a){return A.L2(a)},
$S:113}
A.C1.prototype={
$1(a){var s=A.W(self.document,"flt-semantics-scroll-overflow"),r=s.style
A.i(r,"position","absolute")
A.i(r,"transform-origin","0 0 0")
A.i(r,"pointer-events","none")
a.k2.append(s)
return new A.fy(s,a)},
$S:116}
A.C2.prototype={
$1(a){return new A.fs(a)},
$S:130}
A.C3.prototype={
$1(a){return new A.fG(a)},
$S:133}
A.C4.prototype={
$1(a){var s=new A.fK(a)
s.wX()
return s},
$S:135}
A.C5.prototype={
$1(a){return new A.f4(A.NS(a),a)},
$S:140}
A.C6.prototype={
$1(a){return new A.fo(a)},
$S:141}
A.C7.prototype={
$1(a){return new A.ft(a)},
$S:147}
A.C8.prototype={
$1(a){return new A.e6(a)},
$S:151}
A.C9.prototype={
$1(a){return new A.fx(a)},
$S:153}
A.b5.prototype={
F(){this.c=!0}}
A.ae.prototype={
lL(){var s,r=this
if(r.k4==null){s=A.W(self.document,"flt-semantics-container")
r.k4=s
s=s.style
A.i(s,"position","absolute")
A.i(s,"pointer-events","none")
s=r.k4
s.toString
r.k2.append(s)}return r.k4},
gpP(){var s,r=this.a
if((r&16384)!==0){s=this.b
s.toString
r=(s&1)===0&&(r&8)===0}else r=!1
return r},
oY(){var s=this.a
if((s&64)!==0)if((s&128)!==0)return B.pP
else return B.bK
else return B.pO},
AZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr
if(a3==null||a3.length===0){s=a2.p1
if(s==null||s.length===0){a2.p1=null
return}r=s.length
for(s=a2.k1,q=s.b,p=0;p<r;++p){o=q.i(0,a2.p1[p].id)
if(o!=null)s.d.push(o)}a2.k4.remove()
a2.p1=a2.k4=null
return}s=a2.dy
s.toString
n=a3.length
m=a2.lL()
l=A.b([],t.cu)
for(q=a2.k1,k=q.b,p=0;p<n;++p){j=k.i(0,s[p])
j.toString
l.push(j)}if(n>1)for(p=0;p<n;++p){s=k.i(0,a3[p]).k2.style
s.setProperty("z-index",""+(n-p),"")}i=a2.p1
if(i==null||i.length===0){for(s=l.length,h=0;h<l.length;l.length===s||(0,A.D)(l),++h){g=l[h]
m.append(g.k2)
g.ok=a2
q.c.p(0,g.id,a2)}a2.p1=l
return}f=i.length
s=t.t
e=A.b([],s)
d=Math.min(f,n)
c=0
while(!0){if(!(c<d&&i[c]===l[c]))break
e.push(c);++c}if(f===l.length&&c===n)return
for(;c<n;){for(b=0;b<f;++b)if(i[b]===l[c]){e.push(b)
break}++c}a=A.If(e)
a0=A.b([],s)
for(s=a.length,p=0;p<s;++p)a0.push(i[e[a[p]]].id)
for(p=0;p<f;++p)if(!B.b.t(e,p)){o=k.i(0,i[p].id)
if(o!=null)q.d.push(o)}for(p=n-1,a1=null;p>=0;--p){g=l[p]
s=g.id
if(!B.b.t(a0,s)){k=g.k2
if(a1==null)m.append(k)
else m.insertBefore(k,a1)
g.ok=a2
q.c.p(0,s,a2)}a1=g.k2}a2.p1=l},
aJ(a,b){var s
if(b){s=A.y(a)
if(s==null)s=t.K.a(s)
this.k2.setAttribute("role",s)}else{s=this.k2
if(A.Fp(s,"role")===a)s.removeAttribute("role")}},
be(a,b){var s=this.p2,r=s.i(0,a)
if(b){if(r==null){r=$.JC().i(0,a).$1(this)
s.p(0,a,r)}r.b9()}else if(r!=null){r.F()
s.C(0,a)}},
lq(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.k2,g=h.style,f=i.y
A.i(g,"width",A.k(f.c-f.a)+"px")
f=i.y
A.i(g,"height",A.k(f.d-f.b)+"px")
g=i.dy
s=g!=null&&!B.aE.gH(g)?i.lL():null
g=i.y
r=g.b===0&&g.a===0
q=i.dx
g=q==null
p=g||A.EI(q)===B.nH
if(r&&p&&i.p3===0&&i.p4===0){A.yf(h)
if(s!=null)A.yf(s)
return}o=A.bp("effectiveTransform")
if(!r)if(g){g=i.y
n=g.a
m=g.b
g=A.cq()
g.lZ(n,m,0)
o.b=g
l=n===0&&m===0}else{g=new A.aP(new Float32Array(16))
g.ar(new A.aP(q))
f=i.y
g.ag(f.a,f.b)
o.b=g
l=o.au().hH()}else if(!p){o.b=new A.aP(q)
l=!1}else l=!0
if(!l){h=h.style
A.i(h,"transform-origin","0 0 0")
A.i(h,"transform",A.dU(o.au().a))}else A.yf(h)
if(s!=null)if(!r||i.p3!==0||i.p4!==0){h=i.y
g=h.a
f=i.p4
h=h.b
k=i.p3
j=s.style
A.i(j,"top",A.k(-h+k)+"px")
A.i(j,"left",A.k(-g+f)+"px")}else A.yf(s)},
qA(a){var s
a.$1(this)
s=this.p1
if(s!=null)B.b.N(s,new A.yg(a))},
j(a){return this.ai(0)}}
A.yg.prototype={
$1(a){a.qA(this.a)},
$S:52}
A.rR.prototype={
D(){return"AccessibilityMode."+this.b}}
A.ee.prototype={
D(){return"GestureMode."+this.b}}
A.it.prototype={
D(){return"SemanticsUpdatePhase."+this.b}}
A.uJ.prototype={
tG(){$.dQ.push(new A.uK(this))},
uV(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(r=h.d,q=r.length,p=h.b,o=t.cu,n=0;n<r.length;r.length===q||(0,A.D)(r),++n){m=r[n]
l=A.b([],o)
m.qA(new A.uL(h,l))
for(k=l.length,j=0;j<l.length;l.length===k||(0,A.D)(l),++j){i=l[j]
p.C(0,i.id)
i.ok=null
i.k2.remove()}}h.d=A.b([],o)
h.c=A.x(t.S,t.k4)
h.a=B.wn
try{r=h.e
q=r.length
if(q!==0){for(n=0;n<r.length;r.length===q||(0,A.D)(r),++n){s=r[n]
s.$0()}h.e=A.b([],t.u)}}finally{h.a=B.nw}},
sis(a){var s,r,q
if(this.x)return
s=$.L()
r=s.a
s.a=r.oD(r.a.yk(!0))
this.x=!0
s=$.L()
r=this.x
q=s.a
if(r!==q.c){s.a=q.yn(r)
r=s.p2
if(r!=null)A.d4(r,s.p3)}},
v1(){var s=this,r=s.Q
if(r==null){r=s.Q=new A.k3(s.r)
r.d=new A.uM(s)}return r},
qe(a){var s,r,q=this
if(B.b.t(B.qD,a.type)){s=q.v1()
s.toString
r=q.r.$0()
s.syx(A.Ke(r.a+500,r.b))
if(q.z!==B.dm){q.z=B.dm
q.no()}}return q.w.a.r5(a)},
no(){var s,r
for(s=this.as,r=0;r<s.length;++r)s[r].$1(this.z)},
r4(a){if(B.b.t(B.r3,a))return this.z===B.ab
return!1},
B_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(!f.x){f.w.a.F()
f.sis(!0)}f.a=B.wm
for(s=a.a,r=s.length,q=f.b,p=t.a6,o=t.iG,n=t.K,m=0;l=s.length,m<l;s.length===r||(0,A.D)(s),++m){k=s[m]
l=k.a
j=q.i(0,l)
if(j==null){i=A.W(self.document,"flt-semantics")
j=new A.ae(l,f,i,A.x(p,o))
h=i.style
h.setProperty("position","absolute","")
h=A.y("flt-semantic-node-"+l)
if(h==null)h=n.a(h)
i.setAttribute("id",h)
if(l===0){h=$.bQ
h=(h==null?$.bQ=A.fc(self.window.flutterConfiguration):h).b
if(h==null)h=e
else{h=h.debugShowSemanticsNodes
if(h==null)h=e}h=h!==!0}else h=!1
if(h){h=i.style
h.setProperty("filter","opacity(0%)","")
h=i.style
h.setProperty("color","rgba(0,0,0,0)","")}h=$.bQ
h=(h==null?$.bQ=A.fc(self.window.flutterConfiguration):h).b
if(h==null)h=e
else{h=h.debugShowSemanticsNodes
if(h==null)h=e}if(h===!0){i=i.style
i.setProperty("outline","1px solid green","")}q.p(0,l,j)}l=k.b
if(j.a!==l){j.a=l
j.k3=(j.k3|1)>>>0}l=k.cx
if(j.ax!==l){j.ax=l
j.k3=(j.k3|4096)>>>0}l=k.cy
if(j.ay!==l){j.ay=l
j.k3=(j.k3|4096)>>>0}l=k.ax
if(j.z!==l){j.z=l
j.k3=(j.k3|1024)>>>0}l=k.ay
if(j.Q!==l){j.Q=l
j.k3=(j.k3|1024)>>>0}l=k.at
if(!J.w(j.y,l)){j.y=l
j.k3=(j.k3|512)>>>0}l=k.go
if(j.dx!==l){j.dx=l
j.k3=(j.k3|65536)>>>0}l=k.z
if(j.r!==l){j.r=l
j.k3=(j.k3|64)>>>0}l=j.b
i=k.c
if(l!==i){j.b=i
j.k3=(j.k3|2)>>>0
l=i}i=k.f
if(j.c!==i){j.c=i
j.k3=(j.k3|4)>>>0}i=k.r
if(j.d!==i){j.d=i
j.k3=(j.k3|8)>>>0}i=k.x
if(j.e!==i){j.e=i
j.k3=(j.k3|16)>>>0}i=k.y
if(j.f!==i){j.f=i
j.k3=(j.k3|32)>>>0}i=k.Q
if(j.w!==i){j.w=i
j.k3=(j.k3|128)>>>0}i=k.as
if(j.x!==i){j.x=i
j.k3=(j.k3|256)>>>0}i=k.ch
if(j.as!==i){j.as=i
j.k3=(j.k3|2048)>>>0}i=k.CW
if(j.at!==i){j.at=i
j.k3=(j.k3|2048)>>>0}i=k.db
if(j.ch!==i){j.ch=i
j.k3=(j.k3|8192)>>>0}i=k.dx
if(j.CW!==i){j.CW=i
j.k3=(j.k3|8192)>>>0}i=k.dy
if(j.cx!==i){j.cx=i
j.k3=(j.k3|16384)>>>0}i=k.fr
if(j.cy!==i){j.cy=i
j.k3=(j.k3|16384)>>>0}i=j.fy
h=k.fx
if(i!==h){j.fy=h
j.k3=(j.k3|4194304)>>>0
i=h}h=k.k1
if(j.fr!==h){j.fr=h
j.k3=(j.k3|1048576)>>>0}h=k.id
if(j.dy!==h){j.dy=h
j.k3=(j.k3|524288)>>>0}h=k.k2
if(j.fx!==h){j.fx=h
j.k3=(j.k3|2097152)>>>0}h=k.w
if(j.go!==h){j.go=h
j.k3=(j.k3|8388608)>>>0}h=j.a
if((h&16)===0)if((h&2048)===0){if((h&16384)!==0){l.toString
l=(l&1)===0&&(h&8)===0}else l=!1
g=l}else g=!0
else g=!0
l=j.z
if(!(l!=null&&l.length!==0)){l=j.ax
if(!(l!=null&&l.length!==0))l=i!=null&&i.length!==0
else l=!0}else l=!0
j.be(B.ng,l&&!g)
j.be(B.aM,(j.a&2048)!==0)
l=j.a
j.be(B.ne,(l&4096)!==0&&(l&2048)===0)
j.be(B.ni,(j.a&16)!==0)
l=j.a
if((l&2097152)!==0)if((l&16)===0){l=j.b
l.toString
l=!((l&64)!==0||(l&128)!==0)}else l=!1
else l=!1
j.be(B.nc,l)
l=j.b
l.toString
j.be(B.nh,((l&1)!==0||(j.a&8)!==0)&&(j.a&16)===0)
l=j.b
l.toString
j.be(B.nd,(l&64)!==0||(l&128)!==0)
l=j.b
l.toString
j.be(B.nf,(l&32)!==0||(l&16)!==0||(l&4)!==0||(l&8)!==0)
l=j.a
j.be(B.nj,(l&1)!==0||(l&65536)!==0)
l=j.a
if((l&16384)!==0){i=j.b
i.toString
l=(i&1)===0&&(l&8)===0}else l=!1
j.be(B.nk,l)
l=j.a
j.be(B.nl,(l&32768)!==0&&(l&8192)===0)
l=j.k3
if((l&512)!==0||(l&65536)!==0||(l&64)!==0)j.lq()
l=j.dy
l=!(l!=null&&!B.aE.gH(l))&&j.go===-1
i=j.k2
if(l){l=i.style
l.setProperty("pointer-events","all","")}else{l=i.style
l.setProperty("pointer-events","none","")}}for(m=0;m<s.length;s.length===l||(0,A.D)(s),++m){j=q.i(0,s[m].a)
j.AZ()
j.k3=0}if(f.f==null){s=q.i(0,0).k2
f.f=s
$.br.d.append(s)}f.uV()}}
A.uK.prototype={
$0(){var s=this.a.f
if(s!=null)s.remove()},
$S:0}
A.uL.prototype={
$1(a){if(this.a.c.i(0,a.id)==null)this.b.push(a)},
$S:52}
A.uN.prototype={
$0(){return new A.dc(Date.now(),!1)},
$S:163}
A.uM.prototype={
$0(){var s=this.a
if(s.z===B.ab)return
s.z=B.ab
s.no()},
$S:0}
A.ho.prototype={
D(){return"EnabledState."+this.b}}
A.yc.prototype={}
A.ya.prototype={
r5(a){if(!this.gpQ())return!0
else return this.i7(a)}}
A.u2.prototype={
gpQ(){return this.a!=null},
i7(a){var s
if(this.a==null)return!0
s=$.aT
if((s==null?$.aT=A.cG():s).x)return!0
if(!B.wo.a.v(a.type))return!0
if(!J.w(a.target,this.a))return!0
s=$.aT;(s==null?$.aT=A.cG():s).sis(!0)
this.F()
return!1},
q8(){var s,r=this.a=A.W(self.document,"flt-semantics-placeholder")
A.at(r,"click",t.e.a(A.a5(new A.u3(this))),!0)
s=A.y("button")
if(s==null)s=t.K.a(s)
r.setAttribute("role",s)
s=A.y("polite")
if(s==null)s=t.K.a(s)
r.setAttribute("aria-live",s)
s=A.y("0")
if(s==null)s=t.K.a(s)
r.setAttribute("tabindex",s)
s=A.y("Enable accessibility")
if(s==null)s=t.K.a(s)
r.setAttribute("aria-label",s)
s=r.style
A.i(s,"position","absolute")
A.i(s,"left","-1px")
A.i(s,"top","-1px")
A.i(s,"width","1px")
A.i(s,"height","1px")
return r},
F(){var s=this.a
if(s!=null)s.remove()
this.a=null}}
A.u3.prototype={
$1(a){this.a.i7(a)},
$S:1}
A.wt.prototype={
gpQ(){return this.b!=null},
i7(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.b==null)return!0
if(i.d){s=$.ay()
if(s!==B.r||a.type==="touchend"||a.type==="pointerup"||a.type==="click")i.F()
return!0}s=$.aT
if((s==null?$.aT=A.cG():s).x)return!0
if(++i.c>=20)return i.d=!0
if(!B.wq.a.v(a.type))return!0
if(i.a!=null)return!1
r=A.bp("activationPoint")
switch(a.type){case"click":r.scY(new A.hk(a.offsetX,a.offsetY))
break
case"touchstart":case"touchend":s=t.U
s=A.al(new A.cX(a.changedTouches,s),s.k("l.E"),t.e)
s=A.o(s).z[1].a(J.dZ(s.a))
r.scY(new A.hk(s.clientX,s.clientY))
break
case"pointerdown":case"pointerup":r.scY(new A.hk(a.clientX,a.clientY))
break
default:return!0}q=i.b.getBoundingClientRect()
s=q.left
p=q.right
o=q.left
n=q.top
m=q.bottom
l=q.top
k=r.au().a-(s+(p-o)/2)
j=r.au().b-(n+(m-l)/2)
if(k*k+j*j<1&&!0){i.d=!0
i.a=A.bC(B.dh,new A.wv(i))
return!1}return!0},
q8(){var s,r=this.b=A.W(self.document,"flt-semantics-placeholder")
A.at(r,"click",t.e.a(A.a5(new A.wu(this))),!0)
s=A.y("button")
if(s==null)s=t.K.a(s)
r.setAttribute("role",s)
s=A.y("Enable accessibility")
if(s==null)s=t.K.a(s)
r.setAttribute("aria-label",s)
s=r.style
A.i(s,"position","absolute")
A.i(s,"left","0")
A.i(s,"top","0")
A.i(s,"right","0")
A.i(s,"bottom","0")
return r},
F(){var s=this.b
if(s!=null)s.remove()
this.a=this.b=null}}
A.wv.prototype={
$0(){this.a.F()
var s=$.aT;(s==null?$.aT=A.cG():s).sis(!0)},
$S:0}
A.wu.prototype={
$1(a){this.a.i7(a)},
$S:1}
A.fG.prototype={
b9(){var s,r=this,q=r.b,p=q.k2
q.aJ("button",(q.a&8)!==0)
if(q.oY()===B.bK&&(q.a&8)!==0){q=A.y("true")
if(q==null)q=t.K.a(q)
p.setAttribute("aria-disabled",q)
r.jL()}else{p.removeAttribute("aria-disabled")
s=q.b
s.toString
if((s&1)!==0&&(q.a&16)===0){if(r.d==null){q=t.e.a(A.a5(new A.yR(r)))
r.d=q
A.at(p,"click",q,null)}}else r.jL()}},
jL(){var s=this.d
if(s==null)return
A.ck(this.b.k2,"click",s,null)
this.d=null},
F(){this.c9()
this.jL()
this.b.aJ("button",!1)}}
A.yR.prototype={
$1(a){var s=this.a.b
if(s.k1.z!==B.ab)return
$.L().bE(s.id,B.bq,null)},
$S:1}
A.yn.prototype={
kp(a,b,c){this.CW=a
this.x=c
this.y=b},
xw(a){var s,r,q=this,p=q.ch
if(p===a)return
else if(p!=null)q.bi()
q.ch=a
q.c=a.d
q.nT()
p=q.CW
p.toString
s=q.x
s.toString
r=q.y
r.toString
q.rz(p,r,s)},
bi(){var s,r,q,p=this
if(!p.b)return
p.b=!1
p.w=p.r=null
for(s=p.z,r=0;r<s.length;++r){q=s[r]
q.b.removeEventListener(q.a,q.c)}B.b.B(s)
p.e=null
s=p.c
if(s!=null)s.blur()
p.cx=p.ch=p.c=null},
ep(){var s,r,q=this,p=q.d
p===$&&A.m()
p=p.w
if(p!=null)B.b.J(q.z,p.eq())
p=q.z
s=q.c
s.toString
r=q.geQ()
p.push(A.am(s,"input",r))
s=q.c
s.toString
p.push(A.am(s,"keydown",q.geY()))
p.push(A.am(self.document,"selectionchange",r))
q.hV()},
dR(a,b,c){this.b=!0
this.d=a
this.k0(a)},
br(){this.d===$&&A.m()
this.c.focus()},
eT(){},
lG(a){},
lH(a){this.cx=a
this.nT()},
nT(){var s=this.cx
if(s==null||this.c==null)return
s.toString
this.rA(s)}}
A.fK.prototype={
nd(){var s,r=this,q=r.b,p=(q.a&524288)!==0?A.W(self.document,"textarea"):A.W(self.document,"input")
r.d=p
p.spellcheck=!1
s=A.y("off")
if(s==null)s=t.K.a(s)
p.setAttribute("autocorrect",s)
s=A.y("off")
if(s==null)s=t.K.a(s)
p.setAttribute("autocomplete",s)
s=A.y("text-field")
if(s==null)s=t.K.a(s)
p.setAttribute("data-semantics-role",s)
s=r.d.style
A.i(s,"position","absolute")
A.i(s,"top","0")
A.i(s,"left","0")
p=q.y
A.i(s,"width",A.k(p.c-p.a)+"px")
p=q.y
A.i(s,"height",A.k(p.d-p.b)+"px")
p=r.d
p.toString
q.k2.append(p)},
wX(){var s=$.ay()
switch(s.a){case 0:case 2:this.ne()
break
case 1:this.vP()
break}},
ne(){this.nd()
var s=this.d
s.toString
A.at(s,"focus",t.e.a(A.a5(new A.yW(this))),null)},
vP(){var s,r={},q=$.aS()
if(q===B.Q){this.ne()
return}q=this.b.k2
s=A.y("textbox")
if(s==null)s=t.K.a(s)
q.setAttribute("role",s)
s=A.y("false")
if(s==null)s=t.K.a(s)
q.setAttribute("contenteditable",s)
s=A.y("0")
if(s==null)s=t.K.a(s)
q.setAttribute("tabindex",s)
r.a=r.b=null
s=t.e
A.at(q,"pointerdown",s.a(A.a5(new A.yX(r))),!0)
A.at(q,"pointerup",s.a(A.a5(new A.yY(r,this))),!0)},
vS(){var s,r=this
if(r.d!=null)return
r.nd()
A.i(r.d.style,"transform","translate(-9999px, -9999px)")
s=r.e
if(s!=null)s.bT()
r.e=A.bC(B.df,new A.yZ(r))
r.d.focus()
r.b.k2.removeAttribute("role")
s=r.d
s.toString
A.at(s,"blur",t.e.a(A.a5(new A.z_(r))),null)},
b9(){var s,r,q,p=this,o=p.d
if(o!=null){o=o.style
s=p.b
r=s.y
A.i(o,"width",A.k(r.c-r.a)+"px")
r=s.y
A.i(o,"height",A.k(r.d-r.b)+"px")
if((s.a&32)!==0){o=self.document.activeElement
r=p.d
r.toString
if(!J.w(o,r))s.k1.e.push(new A.z0(p))
o=$.is
if(o!=null)o.xw(p)}else{o=self.document.activeElement
s=p.d
s.toString
if(J.w(o,s)){o=$.ay()
if(o===B.r){o=$.aS()
o=o===B.C}else o=!1
if(!o){o=$.is
if(o!=null)if(o.ch===p)o.bi()}p.d.blur()}}}q=p.d
if(q==null)q=p.b.k2
o=p.b.z
if(o!=null&&o.length!==0){o.toString
o=A.y(o)
if(o==null)o=t.K.a(o)
q.setAttribute("aria-label",o)}else q.removeAttribute("aria-label")},
F(){var s,r=this
r.c9()
s=r.e
if(s!=null)s.bT()
r.e=null
s=$.ay()
if(s===B.r){s=$.aS()
s=s===B.C}else s=!1
if(!s){s=r.d
if(s!=null)s.remove()}s=$.is
if(s!=null)if(s.ch===r)s.bi()}}
A.yW.prototype={
$1(a){var s=this.a.b
if(s.k1.z!==B.ab)return
$.L().bE(s.id,B.bq,null)},
$S:1}
A.yX.prototype={
$1(a){var s=this.a
s.b=a.clientX
s.a=a.clientY},
$S:1}
A.yY.prototype={
$1(a){var s,r,q,p=this.a,o=p.b
if(o!=null){s=a.clientX-o
o=a.clientY
r=p.a
r.toString
q=o-r
if(s*s+q*q<324){o=this.b
$.L().bE(o.b.id,B.bq,null)
o.vS()}}p.a=p.b=null},
$S:1}
A.yZ.prototype={
$0(){var s=this.a,r=s.d
if(r!=null)A.i(r.style,"transform","")
s.e=null},
$S:0}
A.z_.prototype={
$1(a){var s=this.a,r=s.b.k2,q=A.y("textbox")
if(q==null)q=t.K.a(q)
r.setAttribute("role",q)
s.d.remove()
q=$.is
if(q!=null)if(q.ch===s)q.bi()
r.focus()
s.d=null},
$S:1}
A.z0.prototype={
$0(){this.a.d.focus()},
$S:0}
A.cy.prototype={
gn(a){return this.b},
i(a,b){if(b>=this.b)throw A.d(A.FS(b,this))
return this.a[b]},
p(a,b,c){if(b>=this.b)throw A.d(A.FS(b,this))
this.a[b]=c},
sn(a,b){var s,r,q,p=this,o=p.b
if(b<o)for(s=p.a,r=b;r<o;++r)s[r]=0
else{o=p.a.length
if(b>o){if(o===0)q=new Uint8Array(b)
else q=p.fE(b)
B.y.aN(q,0,p.b,p.a)
p.a=q}}p.b=b},
aq(a){var s=this,r=s.b,q=s.a
if(r===q.length){q=s.fE(null)
B.y.aN(q,0,r,s.a)
s.a=q
r=q}else r=q
r[s.b++]=a},
u(a,b){var s=this,r=s.b,q=s.a
if(r===q.length){q=s.fE(null)
B.y.aN(q,0,r,s.a)
s.a=q
r=q}else r=q
r[s.b++]=b},
h2(a,b,c,d){A.bg(c,"start")
if(d!=null&&c>d)throw A.d(A.av(d,c,null,"end",null))
this.tP(b,c,d)},
J(a,b){return this.h2(a,b,0,null)},
tP(a,b,c){var s,r,q,p,o,n,m,l=this,k="Too few elements"
if(A.o(l).k("r<cy.E>").b(a))c=c==null?a.length:c
if(c!=null){s=l.b
r=J.ad(a)
if(b>r.gn(a)||c>r.gn(a))A.a6(A.aJ(k))
q=c-b
p=l.b+q
l.uO(p)
r=l.a
o=s+q
B.y.W(r,o,l.b+q,r,s)
B.y.W(l.a,s,o,a,b)
l.b=p
return}for(s=J.a2(a),n=0;s.m();){m=s.gq()
if(n>=b)l.aq(m);++n}if(n<b)throw A.d(A.aJ(k))},
uO(a){var s,r=this
if(a<=r.a.length)return
s=r.fE(a)
B.y.aN(s,0,r.b,r.a)
r.a=s},
fE(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
W(a,b,c,d,e){var s=this.b
if(c>s)throw A.d(A.av(c,0,s,null,null))
s=this.a
if(A.o(this).k("cy<cy.E>").b(d))B.y.W(s,b,c,d.a,e)
else B.y.W(s,b,c,d,e)},
aN(a,b,c,d){return this.W(a,b,c,d,0)}}
A.p2.prototype={}
A.nv.prototype={}
A.bX.prototype={
j(a){return A.p(this).j(0)+"("+this.a+", "+A.k(this.b)+")"}}
A.vN.prototype={
U(a){return A.el(B.a9.am(B.ap.eF(a)).buffer,0,null)},
aV(a){return B.ap.bh(B.a7.am(A.bd(a.buffer,0,null)))}}
A.vP.prototype={
bk(a){return B.t.U(A.ah(["method",a.a,"args",a.b],t.N,t.z))},
b4(a){var s,r,q=null,p=B.t.aV(a)
if(!t.f.b(p))throw A.d(A.aq("Expected method call Map, got "+A.k(p),q,q))
s=p.i(0,"method")
r=p.i(0,"args")
if(typeof s=="string")return new A.bX(s,r)
throw A.d(A.aq("Invalid method call: "+p.j(0),q,q))}}
A.yA.prototype={
U(a){var s=A.DZ()
this.ap(s,!0)
return s.cl()},
aV(a){var s=new A.mx(a),r=this.b7(s)
if(s.b<a.byteLength)throw A.d(B.H)
return r},
ap(a,b){var s,r,q,p,o=this
if(b==null)a.b.aq(0)
else if(A.jL(b)){s=b?1:2
a.b.aq(s)}else if(typeof b=="number"){s=a.b
s.aq(6)
a.ca(8)
a.c.setFloat64(0,b,B.w===$.aM())
s.J(0,a.d)}else if(A.jM(b)){s=-2147483648<=b&&b<=2147483647
r=a.b
q=a.c
if(s){r.aq(3)
q.setInt32(0,b,B.w===$.aM())
r.h2(0,a.d,0,4)}else{r.aq(4)
B.bi.lW(q,0,b,$.aM())}}else if(typeof b=="string"){s=a.b
s.aq(7)
p=B.a9.am(b)
o.aM(a,p.length)
s.J(0,p)}else if(t.E.b(b)){s=a.b
s.aq(8)
o.aM(a,b.length)
s.J(0,b)}else if(t.bW.b(b)){s=a.b
s.aq(9)
r=b.length
o.aM(a,r)
a.ca(4)
s.J(0,A.bd(b.buffer,b.byteOffset,4*r))}else if(t.kI.b(b)){s=a.b
s.aq(11)
r=b.length
o.aM(a,r)
a.ca(8)
s.J(0,A.bd(b.buffer,b.byteOffset,8*r))}else if(t.j.b(b)){a.b.aq(12)
s=J.ad(b)
o.aM(a,s.gn(b))
for(s=s.gE(b);s.m();)o.ap(a,s.gq())}else if(t.f.b(b)){a.b.aq(13)
o.aM(a,b.gn(b))
b.N(0,new A.yC(o,a))}else throw A.d(A.cC(b,null,null))},
b7(a){if(a.b>=a.a.byteLength)throw A.d(B.H)
return this.c4(a.d8(0),a)},
c4(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:s=null
break
case 1:s=!0
break
case 2:s=!1
break
case 3:r=b.a.getInt32(b.b,B.w===$.aM())
b.b+=4
s=r
break
case 4:s=b.ii(0)
break
case 5:q=k.aB(b)
s=A.d3(B.a7.am(b.d9(q)),16)
break
case 6:b.ca(8)
r=b.a.getFloat64(b.b,B.w===$.aM())
b.b+=8
s=r
break
case 7:q=k.aB(b)
s=B.a7.am(b.d9(q))
break
case 8:s=b.d9(k.aB(b))
break
case 9:q=k.aB(b)
b.ca(4)
p=b.a
o=A.Gb(p.buffer,p.byteOffset+b.b,q)
b.b=b.b+4*q
s=o
break
case 10:s=b.ij(k.aB(b))
break
case 11:q=k.aB(b)
b.ca(8)
p=b.a
o=A.G9(p.buffer,p.byteOffset+b.b,q)
b.b=b.b+8*q
s=o
break
case 12:q=k.aB(b)
s=[]
for(p=b.a,n=0;n<q;++n){m=b.b
if(m>=p.byteLength)A.a6(B.H)
b.b=m+1
s.push(k.c4(p.getUint8(m),b))}break
case 13:q=k.aB(b)
p=t.z
s=A.x(p,p)
for(p=b.a,n=0;n<q;++n){m=b.b
if(m>=p.byteLength)A.a6(B.H)
b.b=m+1
m=k.c4(p.getUint8(m),b)
l=b.b
if(l>=p.byteLength)A.a6(B.H)
b.b=l+1
s.p(0,m,k.c4(p.getUint8(l),b))}break
default:throw A.d(B.H)}return s},
aM(a,b){var s,r,q
if(b<254)a.b.aq(b)
else{s=a.b
r=a.c
q=a.d
if(b<=65535){s.aq(254)
r.setUint16(0,b,B.w===$.aM())
s.h2(0,q,0,2)}else{s.aq(255)
r.setUint32(0,b,B.w===$.aM())
s.h2(0,q,0,4)}}},
aB(a){var s=a.d8(0)
switch(s){case 254:s=a.a.getUint16(a.b,B.w===$.aM())
a.b+=2
return s
case 255:s=a.a.getUint32(a.b,B.w===$.aM())
a.b+=4
return s
default:return s}}}
A.yC.prototype={
$2(a,b){var s=this.a,r=this.b
s.ap(r,a)
s.ap(r,b)},
$S:43}
A.yE.prototype={
b4(a){var s=new A.mx(a),r=B.V.b7(s),q=B.V.b7(s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.bX(r,q)
else throw A.d(B.dj)},
eG(a){var s=A.DZ()
s.b.aq(0)
B.V.ap(s,a)
return s.cl()},
cU(a,b,c){var s=A.DZ()
s.b.aq(1)
B.V.ap(s,a)
B.V.ap(s,c)
B.V.ap(s,b)
return s.cl()}}
A.zH.prototype={
ca(a){var s,r,q=this.b,p=B.f.b_(q.b,a)
if(p!==0)for(s=a-p,r=0;r<s;++r)q.aq(0)},
cl(){var s,r
this.a=!0
s=this.b
r=s.a
return A.el(r.buffer,0,s.b*r.BYTES_PER_ELEMENT)}}
A.mx.prototype={
d8(a){return this.a.getUint8(this.b++)},
ii(a){B.bi.lK(this.a,this.b,$.aM())},
d9(a){var s=this.a,r=A.bd(s.buffer,s.byteOffset+this.b,a)
this.b+=a
return r},
ij(a){var s
this.ca(8)
s=this.a
B.cx.oq(s.buffer,s.byteOffset+this.b,a)},
ca(a){var s=this.b,r=B.f.b_(s,a)
if(r!==0)this.b=s+(a-r)}}
A.kq.prototype={
gc0(){return this.gfN().c},
gfN(){var s,r=this,q=r.r
if(q===$){s=A.b([],t.a8)
r.r!==$&&A.ag()
q=r.r=new A.fL(r,s,B.z)}return q},
kK(a){var s=this
a=new A.i6(Math.floor(a.a))
if(a.h(0,s.f))return
A.bp("stopwatch")
s.gfN().Aj(a)
s.e=!0
s.f=a
s.x=null},
AS(){var s,r=this.x
if(r==null){s=this.x=this.uv()
return s}return A.Fx(r,!0)},
uv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.W(self.document,"flt-paragraph"),a5=a4.style
A.i(a5,"position","absolute")
A.i(a5,"white-space","pre")
s=t.K
r=t.a8
q=0
while(!0){p=a3.r
if(p===$){o=A.b([],r)
a3.r!==$&&A.ag()
n=a3.r=new A.fL(a3,o,B.z)
m=n
p=m}else m=p
if(!(q<p.y.length))break
if(m===$){o=A.b([],r)
a3.r!==$&&A.ag()
p=a3.r=new A.fL(a3,o,B.z)}else p=m
for(o=p.y[q].w,l=o.length,k=0;k<o.length;o.length===l||(0,A.D)(o),++k){j=o[k]
if(j.gd1())continue
i=j.ik(a3)
if(i.length===0)continue
h=A.W(self.document,"flt-span")
if(j.d===B.G){g=A.y("rtl")
if(g==null)g=s.a(g)
h.setAttribute("dir",g)}g=j.f.a
a5=h.style
f=g.a
if(f!=null){e=A.eV(f.a)
a5.setProperty("color",e,"")}e=g.cx
d=e==null?null:e.gbg()
if(d!=null){e=A.eV(d.a)
a5.setProperty("background-color",e,"")}c=g.at
if(c!=null){e=B.f.bB(c)
a5.setProperty("font-size",""+e+"px","")}e=g.f
if(e!=null){e=A.I7(e)
e.toString
a5.setProperty("font-weight",e,"")}e=A.Cf(g.y)
e.toString
a5.setProperty("font-family",e,"")
e=g.ax
if(e!=null)a5.setProperty("letter-spacing",A.k(e)+"px","")
e=g.b
b=e!=null
a=b&&!0
if(a)if(b){e=e.a
b=(e|1)===e?""+"underline ":""
if((e|2)===e)b+="overline "
e=(e|4)===e?b+"line-through ":b
a0=e.length===0?null:e.charCodeAt(0)==0?e:e
if(a0!=null){e=$.ay()
if(e===B.r){e=h.style
e.setProperty("-webkit-text-decoration",a0,"")}else a5.setProperty("text-decoration",a0,"")
a1=g.c
if(a1!=null){g=A.eV(a1.a)
a5.setProperty("text-decoration-color",g,"")}}}g=j.qq()
e=g.a
b=g.b
a2=h.style
a2.setProperty("position","absolute","")
a2.setProperty("top",A.k(b)+"px","")
a2.setProperty("left",A.k(e)+"px","")
a2.setProperty("width",A.k(g.c-e)+"px","")
a2.setProperty("line-height",A.k(g.d-b)+"px","")
h.append(self.document.createTextNode(i))
a4.append(h)}++q}return a4}}
A.i7.prototype={}
A.fC.prototype={
qk(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a
if(a==null){s=b.giX()
r=b.gj4()
q=b.gj5()
p=b.gj6()
o=b.gj7()
n=b.gjk()
m=b.gji()
l=b.gjM()
k=b.gje()
j=b.gjf()
i=b.gjg()
h=b.gjj()
g=b.gjh()
f=b.gjr()
e=b.gjT()
d=b.gjq()
c=b.gjt()
e=b.a=A.FL(b.giP(),s,r,q,p,o,k,j,i,g,m,h,n,b.gfI(),d,f,c,b.gjK(),l,e)
return e}return a}}
A.ku.prototype={
giX(){var s=this.c.a
if(s==null){this.gfI()
s=this.b.giX()}return s},
gj4(){var s=this.c.b
return s==null?this.b.gj4():s},
gj5(){var s=this.c.c
return s==null?this.b.gj5():s},
gj6(){var s=this.b.gj6()
return s},
gj7(){var s=this.b.gj7()
return s},
gjk(){var s=this.c.f
return s==null?this.b.gjk():s},
gji(){var s=this.b.gji()
return s},
gjM(){var s=this.c.w
return s==null?this.b.gjM():s},
gjf(){var s=this.c.z
return s==null?this.b.gjf():s},
gjg(){var s=this.b.gjg()
return s},
gjj(){var s=this.b.gjj()
return s},
gjh(){var s=this.c.at
return s==null?this.b.gjh():s},
gjr(){var s=this.c.ax
return s==null?this.b.gjr():s},
gjT(){var s=this.b.gjT()
return s},
gjq(){var s=this.c.ch
return s==null?this.b.gjq():s},
gjt(){var s=this.b.gjt()
return s},
giP(){var s=this.c.cx
return s==null?this.b.giP():s},
gfI(){var s=this.b.gfI()
return s},
gjK(){var s=this.b.gjK()
return s},
gje(){var s=this.c
return s.x?s.y:this.b.gje()}}
A.mI.prototype={
giX(){return null},
gj4(){return null},
gj5(){return null},
gj6(){return null},
gj7(){return null},
gjk(){return this.b.c},
gji(){return this.b.d},
gjM(){return null},
gje(){var s=this.b.f
return s==null?"sans-serif":s},
gjf(){return null},
gjg(){return null},
gjj(){return null},
gjh(){return 14},
gjr(){return null},
gjT(){return null},
gjq(){return this.b.w},
gjt(){return this.b.Q},
giP(){return null},
gfI(){return null},
gjK(){return null}}
A.tt.prototype={
gmP(){var s=this.d,r=s.length
return r===0?this.e:s[r-1]},
Ar(a){this.d.push(new A.ku(this.gmP(),t.lf.a(a)))},
xE(a){var s,r=this,q=r.a,p=q.a,o=p+a
q.a=o
s=r.gmP().qk()
r.xh(s)
r.c.push(new A.i7(s,p.length,o.length))},
xh(a){var s,r
if(!this.w)return
s=a.b
if(s!=null){r=s.a
r=B.d.a!==r}else r=!1
if(r){this.w=!1
return}},
aa(){var s,r=this,q=r.c
if(q.length===0)q.push(new A.i7(r.e.qk(),0,0))
s=r.a.a
return new A.kq(q,r.b,s.charCodeAt(0)==0?s:s,r.w)}}
A.vm.prototype={
hM(a){return this.zY(a)},
zY(a0){var s=0,r=A.H(t.ck),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hM=A.I(function(a1,a2){if(a1===1)return A.E(a2,r)
while(true)switch(s){case 0:b=A.b([],t.m0)
for(o=a0.a,n=o.length,m=0;m<o.length;o.length===n||(0,A.D)(o),++m){l=o[m]
for(k=l.b,j=k.length,i=0;i<k.length;k.length===j||(0,A.D)(k),++i)b.push(new A.vn(p,k[i],l).$0())}h=A.b([],t.s)
g=A.x(t.N,t.eu)
a=J
s=3
return A.J(A.Dv(b,t.z),$async$hM)
case 3:o=a.a2(a2),n=t.e6
case 4:if(!o.m()){s=5
break}k=o.gq()
f=A.GO("#0#1",new A.vo(k))
e=A.GO("#0#2",new A.vp(k))
if(typeof f.fR()=="string"){d=f.fR()
if(n.b(e.fR())){c=e.fR()
k=!0}else{c=null
k=!1}}else{d=null
c=null
k=!1}if(!k)throw A.d(A.aJ("Pattern matching error"))
if(c==null)h.push(d)
else g.p(0,d,c)
s=4
break
case 5:q=new A.kc()
s=1
break
case 1:return A.F(q,r)}})
return A.G($async$hM,r)},
B(a){self.document.fonts.clear()},
eg(a,b,c){return this.vW(a,b,c)},
vW(a0,a1,a2){var s=0,r=A.H(t.e6),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$eg=A.I(function(a4,a5){if(a4===1){o=a5
s=p}while(true)switch(s){case 0:f=A.b([],t.J)
e=A.b([],t.nP)
p=4
j=$.ID()
s=j.b.test(a0)||$.IC().rb(a0)!==a0?7:8
break
case 7:b=J
a=f
s=9
return A.J(n.eh("'"+a0+"'",a1,a2),$async$eg)
case 9:b.dY(a,a5)
case 8:p=2
s=6
break
case 4:p=3
d=o
j=A.K(d)
if(j instanceof A.b1){m=j
J.dY(e,m)}else throw d
s=6
break
case 3:s=2
break
case 6:p=11
b=J
a=f
s=14
return A.J(n.eh(a0,a1,a2),$async$eg)
case 14:b.dY(a,a5)
p=2
s=13
break
case 11:p=10
c=o
j=A.K(c)
if(j instanceof A.b1){l=j
J.dY(e,l)}else throw c
s=13
break
case 10:s=2
break
case 13:if(J.ak(f)===0){q=J.dZ(e)
s=1
break}try{for(j=f,h=j.length,g=0;g<j.length;j.length===h||(0,A.D)(j),++g){k=j[g]
self.document.fonts.add(k)}}catch(a3){q=new A.lm()
s=1
break}q=null
s=1
break
case 1:return A.F(q,r)
case 2:return A.E(o,r)}})
return A.G($async$eg,r)},
eh(a,b,c){return this.vX(a,b,c)},
vX(a,b,c){var s=0,r=A.H(t.e),q,p=2,o,n,m,l,k,j
var $async$eh=A.I(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:p=4
n=A.Pb(a,"url("+$.jI.ie(b)+")",c)
s=7
return A.J(A.eX(n.load(),t.e),$async$eh)
case 7:l=e
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o
m=A.K(j)
$.eZ().$1('Error while loading font family "'+a+'":\n'+A.k(m))
l=A.KX(b,m)
throw A.d(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.F(q,r)
case 2:return A.E(o,r)}})
return A.G($async$eh,r)}}
A.vn.prototype={
$0(){var s=0,r=A.H(t.dz),q,p=this,o,n,m,l
var $async$$0=A.I(function(a,b){if(a===1)return A.E(b,r)
while(true)switch(s){case 0:o=p.b
n=o.a
m=A
l=n
s=3
return A.J(p.a.eg(p.c.a,n,o.b),$async$$0)
case 3:q=new m.q4(l,b)
s=1
break
case 1:return A.F(q,r)}})
return A.G($async$$0,r)},
$S:167}
A.vo.prototype={
$0(){return t.dz.a(this.a).a},
$S:18}
A.vp.prototype={
$0(){return t.dz.a(this.a).b},
$S:56}
A.z2.prototype={}
A.z1.prototype={}
A.wh.prototype={
hx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.b([],t.q),c=this.a,b=A.Lf(c).hx(),a=new J.cg(b,b.length)
a.m()
c=A.NU(c)
s=new J.cg(c,c.length)
s.m()
c=this.b
r=new J.cg(c,c.length)
r.m()
q=a.d
if(q==null)q=A.o(a).c.a(q)
p=s.d
if(p==null)p=A.o(s).c.a(p)
o=r.d
if(o==null)o=A.o(r).c.a(o)
for(c=A.o(a).c,b=A.o(s).c,n=A.o(r).c,m=0;!0;m=i){l=q.b
k=p.b
j=o.c
i=Math.min(l,Math.min(k,j))
h=l-i
g=h===0?q.c:B.i
f=i-m
d.push(A.DD(m,i,g,p.c,p.d,o,A.HX(q.d-h,0,f),A.HX(q.e-h,0,f)))
if(l===i)if(a.m()){q=a.d
if(q==null)q=c.a(q)
e=!0}else e=!1
else e=!1
if(k===i)if(s.m()){p=s.d
if(p==null)p=b.a(p)
e=!0}if(j===i)if(r.m()){o=r.d
if(o==null)o=n.a(o)
e=!0}if(!e)break}return d}}
A.A2.prototype={
gl(a){var s=this
return A.t(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
return b instanceof A.c5&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d==s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w}}
A.c5.prototype={
gn(a){return this.b-this.a},
gkI(){return this.b-this.a===this.w},
gd1(){return!1},
ik(a){var s=a.c
s===$&&A.m()
return B.c.L(s,this.a,this.b-this.r)},
fn(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===b)return A.b([null,j],t.es)
s=j.b
if(s===b)return A.b([j,null],t.es)
r=s-b
q=j.r
p=Math.min(q,r)
o=j.w
n=Math.min(o,r)
m=j.d
l=j.e
k=j.f
return A.b([A.DD(i,b,B.i,m,l,k,q-p,o-n),A.DD(b,s,j.c,m,l,k,p,n)],t.q)},
j(a){var s=this
return B.zZ.j(0)+"("+s.a+", "+s.b+", "+s.c.j(0)+", "+A.k(s.d)+")"}}
A.Aa.prototype={
fi(a,b,c,d,e){var s=this
s.pa$=a
s.cV$=b
s.cW$=c
s.cm$=d
s.aW$=e}}
A.Ab.prototype={
geX(){var s,r,q=this,p=q.b5$
p===$&&A.m()
s=q.eK$
if(p.x===B.q){s===$&&A.m()
p=s}else{s===$&&A.m()
r=q.aW$
r===$&&A.m()
r=p.a.f-(s+(r+q.aX$))
p=r}return p},
gi2(){var s,r=this,q=r.b5$
q===$&&A.m()
s=r.eK$
if(q.x===B.q){s===$&&A.m()
q=r.aW$
q===$&&A.m()
q=s+(q+r.aX$)}else{s===$&&A.m()
q=q.a.f-s}return q},
zQ(a){var s,r,q=this,p=q.b5$
p===$&&A.m()
s=p.e
if(q.b>p.c-s)return
r=q.w
if(r===0)return
q.aX$=(a-p.a.f)/(p.f-s)*r}}
A.A9.prototype={
qq(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b5$
g===$&&A.m()
if(h.b>g.c-g.e){s=h.d
s.toString
g=g.a.r
if(s===B.q){s=h.geX()
r=h.b5$.a
q=h.cV$
q===$&&A.m()
p=h.gi2()
o=h.aW$
o===$&&A.m()
n=h.aX$
m=h.cm$
m===$&&A.m()
l=h.b5$
k=h.cW$
k===$&&A.m()
j=h.d
j.toString
j=new A.fH(g+s,r.w-q,r.r+p-(o+n-m),l.a.w+k,j)
g=j}else{s=h.geX()
r=h.aW$
r===$&&A.m()
q=h.aX$
p=h.cm$
p===$&&A.m()
o=h.b5$.a
n=h.cV$
n===$&&A.m()
m=h.gi2()
l=h.b5$
k=h.cW$
k===$&&A.m()
j=h.d
j.toString
j=new A.fH(g+s+(r+q-p),o.w-n,o.r+m,l.a.w+k,j)
g=j}return g}i=h.hj$
if(i===$){s=h.geX()
r=h.b5$.a
q=h.cV$
q===$&&A.m()
p=h.gi2()
o=h.b5$
n=h.cW$
n===$&&A.m()
m=h.d
m.toString
h.hj$!==$&&A.ag()
i=h.hj$=new A.fH(g.a.r+s,r.w-q,r.r+p,o.a.w+n,m)}return i}}
A.l0.prototype={
gkI(){return!1},
gd1(){return!1},
ik(a){var s=a.b.z
s.toString
return s},
fn(a,b){throw A.d(A.bj("Cannot split an EllipsisFragment"))}}
A.fL.prototype={
gm1(){var s=this.Q
if(s===$){s!==$&&A.ag()
s=this.Q=new A.n5(this.a)}return s},
Aj(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a1.a
a.b=a0
a.c=0
a.d=null
a.f=a.e=0
s=a.y
B.b.B(s)
r=a.a
q=A.G2(r,a.gm1(),0,A.b([],t.q),0,a0)
p=a.as
if(p===$){a0=r.c
a0===$&&A.m()
p!==$&&A.ag()
p=a.as=new A.wh(r.a,a0)}o=p.hx()
B.b.N(o,a.gm1().gA2())
$label0$0:for(n=0;n<o.length;++n){m=o[n]
q.h_(m)
if(m.c!==B.i)q.Q=q.a.length
B.b.u(q.a,m)
for(;q.w>q.c;){if(q.gxW()){q.zF()
s.push(q.aa())
break $label0$0}if(q.gzL())q.AI()
else q.z1()
n+=q.xJ(o,n+1)
s.push(q.aa())
q=q.pZ()}a0=q.a
if(a0.length!==0){a0=B.b.gT(a0).c
a0=a0===B.a3||a0===B.W}else a0=!1
if(a0){s.push(q.aa())
q=q.pZ()}}for(a0=s.length,l=1/0,k=-1/0,j=0;j<a0;++j){i=s[j]
h=i.a
a.c=a.c+h.e
if(a.r===-1)a.r=h.w
g=a.d
f=g==null?null:g.a.f
if(f==null)f=0
g=h.f
if(f<g)a.d=i
e=h.r
if(e<l)l=e
d=e+g
if(d>k)k=d}a.z=new A.a4(l,0,k,a.c)
if(a0!==0)if(isFinite(a.b)&&r.b.a===B.cK)for(n=0;n<s.length-1;++n)for(a0=s[n].w,r=a0.length,j=0;j<a0.length;a0.length===r||(0,A.D)(a0),++j)a0[j].zQ(a.b)
B.b.N(s,a.gwn())
for(a0=o.length,c=0,b=0,j=0;j<a0;++j){m=o[j]
s=m.cm$
s===$&&A.m()
c+=s
s=m.aW$
s===$&&A.m()
b+=s+m.aX$
switch(m.c.a){case 1:break
case 0:a.e=Math.max(a.e,c)
c=0
break
case 2:case 3:a.e=Math.max(a.e,c)
a.f=Math.max(a.f,b)
c=0
b=0
break}}},
wo(a){var s,r,q,p,o,n,m=this,l=null,k=m.a.b.b,j=k==null,i=j?B.q:k
for(s=a.w,r=l,q=0,p=0,o=0;n=s.length,o<=n;++o){if(o<n){n=s[o].e
if(n===B.aW){r=l
continue}if(n===B.bN){if(r==null)r=o
continue}if((n===B.dk?B.q:B.G)===i){r=l
continue}}if(r==null)q+=m.jF(i,o,a,p,q)
else{q+=m.jF(i,r,a,p,q)
q+=m.jF(j?B.q:k,o,a,r,q)}if(o<s.length){n=s[o].d
n.toString
i=n}p=o
r=l}},
jF(a,b,c,d,e){var s,r,q,p,o=this.a.b.b
if(a===(o==null?B.q:o))for(o=c.w,s=d,r=0;s<b;++s){q=o[s]
q.eK$=e+r
if(q.d==null)q.d=a
p=q.aW$
p===$&&A.m()
r+=p+q.aX$}else for(s=b-1,o=c.w,r=0;s>=d;--s){q=o[s]
q.eK$=e+r
if(q.d==null)q.d=a
p=q.aW$
p===$&&A.m()
r+=p+q.aX$}return r}}
A.wi.prototype={
gp5(){var s=this.a
if(s.length!==0)s=B.b.gT(s).b
else{s=this.b
s.toString
s=B.b.gK(s).a}return s},
gzL(){var s=this.a
if(s.length===0)return!1
if(B.b.gT(s).c!==B.i)return this.as>1
return this.as>0},
gxG(){var s=this.c-this.w,r=this.d.b
switch(r.a.a){case 2:return s/2
case 1:return s
case 4:r=r.b
return(r==null?B.q:r)===B.G?s:0
case 5:r=r.b
return(r==null?B.q:r)===B.G?0:s
default:return 0}},
gxW(){return!1},
gud(){var s=this.a
if(s.length!==0){s=B.b.gT(s).c
s=s===B.a3||s===B.W}else s=!1
if(s)return!1
s=this.b
s=s==null?null:s.length!==0
if(s===!0)return!1
return!0},
oi(a){var s=this
s.h_(a)
if(a.c!==B.i)s.Q=s.a.length
B.b.u(s.a,a)},
h_(a){var s,r=this,q=a.w
r.at=r.at+q
if(a.gkI())r.ax+=q
else{r.ax=q
q=r.x
s=a.cm$
s===$&&A.m()
r.w=q+s}q=r.x
s=a.aW$
s===$&&A.m()
r.x=q+(s+a.aX$)
if(a.gd1())r.u_(a)
if(a.c!==B.i)++r.as
q=r.y
s=a.cV$
s===$&&A.m()
r.y=Math.max(q,s)
s=r.z
q=a.cW$
q===$&&A.m()
r.z=Math.max(s,q)},
u_(a){var s,r,q,p,o,n=this,m=t.hg.a(a.f)
switch(m.gol()){case B.vy:s=n.y
r=m.gc0().c8(0,n.y)
break
case B.vz:s=m.gc0().c8(0,n.z)
r=n.z
break
case B.vA:q=n.y
p=n.z
o=m.gc0().bM(0,2).c8(0,(q+p)/2)
s=B.e.aZ(n.y,o)
r=B.e.aZ(n.z,o)
break
case B.vw:s=m.gc0()
r=0
break
case B.vx:r=m.gc0()
s=0
break
case B.vv:s=m.gBh()
r=m.gc0().c8(0,s)
break
default:s=null
r=null}q=a.cm$
q===$&&A.m()
p=a.aW$
p===$&&A.m()
a.fi(n.e,s,r,q,p+a.aX$)},
ei(){var s,r=this,q=r.as=r.ax=r.at=r.z=r.y=r.x=r.w=0
r.Q=-1
for(s=r.a;q<s.length;++q){r.h_(s[q])
if(s[q].c!==B.i)r.Q=q}},
pq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b==null)b=g.c
if(g.b==null)g.b=A.b([],t.q)
s=g.a
r=s.length>1||a
q=B.b.gT(s)
if(q.gd1()){if(r){p=g.b
p.toString
B.b.hF(p,0,B.b.lt(s))
g.ei()}return}p=g.e
p.shd(q.f)
o=g.x
n=q.aW$
n===$&&A.m()
m=q.aX$
l=q.b-q.r
k=p.z0(q.a,l,r,b-(o-(n+m)))
if(k===l)return
B.b.lt(s)
g.ei()
j=q.fn(0,k)
i=B.b.gK(j)
if(i!=null){p.kQ(i)
g.oi(i)}h=B.b.gT(j)
if(h!=null){p.kQ(h)
s=g.b
s.toString
B.b.hF(s,0,h)}},
z1(){return this.pq(!1,null)},
zF(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d.b.z
f.toString
g.b=A.b([],t.q)
s=g.e
r=g.a
s.shd(B.b.gT(r).f)
q=$.rK()
p=A.rD(q,f,0,f.gn(f),null)
o=g.c
n=Math.max(0,o-p)
m=f.length
while(!0){if(r.length>1){l=g.x
k=B.b.gT(r)
j=k.aW$
j===$&&A.m()
k=l-(j+k.aX$)
l=k}else l=0
if(!(l>n))break
l=g.b
l.toString
B.b.hF(l,0,B.b.lt(r))
g.ei()
s.shd(B.b.gT(r).f)
p=A.rD(q,f,0,m,null)
n=o-p}i=B.b.gT(r)
g.pq(!0,n)
f=g.gp5()
h=new A.l0($,$,$,$,$,$,$,$,0,B.W,null,B.bN,i.f,0,0,f,f)
f=i.cV$
f===$&&A.m()
r=i.cW$
r===$&&A.m()
h.fi(s,f,r,p,p)
g.oi(h)},
AI(){var s,r=this.a,q=r.length,p=q-2
for(;r[p].c===B.i;)--p
s=p+1
A.bA(s,q,q)
this.b=A.cb(r,s,q,A.b_(r).c).qp(0)
B.b.qg(r,s,r.length)
this.ei()},
xJ(a,b){var s,r=this,q=r.a,p=b
while(!0){if(r.gud())if(p<a.length){s=a[p].cm$
s===$&&A.m()
s=s===0}else s=!1
else s=!1
if(!s)break
s=a[p]
r.h_(s)
if(s.c!==B.i)r.Q=q.length
B.b.u(q,s);++p}return p-b},
aa(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.b==null){s=d.a
r=d.Q+1
q=s.length
A.bA(r,q,q)
d.b=A.cb(s,r,q,A.b_(s).c).qp(0)
B.b.qg(s,d.Q+1,s.length)}s=d.a
p=s.length===0?0:B.b.gT(s).r
if(s.length!==0)r=B.b.gK(s).a
else{r=d.b
r.toString
r=B.b.gK(r).a}q=d.gp5()
o=d.ax
n=d.at
if(s.length!==0){m=B.b.gT(s).c
m=m===B.a3||m===B.W}else m=!1
l=d.w
k=d.x
j=d.gxG()
i=d.y
h=d.z
g=d.d.b.b
if(g==null)g=B.q
f=new A.dx(new A.l4(m,i,h,i,i+h,l,j,d.r+i,d.f),r,q,p,o,n,k,s,g)
for(r=s.length,e=0;e<r;++e)s[e].b5$=f
return f},
pZ(){var s=this,r=s.y,q=s.z,p=s.b
if(p==null)p=A.b([],t.q)
return A.G2(s.d,s.e,s.r+(r+q),p,s.f+1,s.c)}}
A.n5.prototype={
shd(a){var s,r,q,p,o=a.a,n=o.goI()
if($.HA!==n){$.HA=n
$.rK().font=n}if(a===this.c)return
this.c=a
s=o.dy
if(s===$){r=o.goU()
q=o.at
if(q==null)q=14
o.dy!==$&&A.ag()
s=o.dy=new A.iD(r,q,o.ch,null,null)}p=$.Gz.i(0,s)
if(p==null){p=new A.nk(s,$.IO(),new A.yT(A.W(self.document,"flt-paragraph")))
$.Gz.p(0,s,p)}this.b=p},
kQ(a){var s,r,q,p,o,n,m,l=this,k=a.f
if(a.gd1()){t.hg.a(k)
a.fi(l,k.gc0(),0,k.gqB(),k.gqB())}else{l.shd(k)
k=a.a
s=a.b
r=$.rK()
q=l.a.c
q===$&&A.m()
p=A.rD(r,q,k,s-a.w,l.c.a.ax)
o=A.rD(r,q,k,s-a.r,l.c.a.ax)
s=l.b.gom()
k=l.b
n=k.r
if(n===$){r=k.e
q=r.b
r=q==null?r.b=r.a.getBoundingClientRect():q
m=r.height
r=$.ay()
if(r===B.U&&!0)++m
k.r!==$&&A.ag()
n=k.r=m}a.fi(l,s,n-l.b.gom(),p,o)}},
z0(a,b,c,d){var s,r,q,p,o,n
if(d<=0)return c?a:a+1
for(s=this.a.c,r=b,q=a;r-q>1;){p=B.f.bv(q+r,2)
o=$.rK()
s===$&&A.m()
n=A.rD(o,s,a,p,this.c.a.ax)
if(n<d)q=p
else{q=n>d?q:p
r=p}}return q===a&&!c?q+1:q}}
A.ds.prototype={
D(){return"LineBreakType."+this.b}}
A.uR.prototype={
hx(){return A.NX(this.a)}}
A.zF.prototype={
hx(){var s=this.a
return A.P0(s,s,this.b)}}
A.dr.prototype={
gl(a){var s=this
return A.t(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
return b instanceof A.dr&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
j(a){return"LineBreakFragment("+this.a+", "+this.b+", "+this.c.j(0)+")"}}
A.BB.prototype={
$2(a,b){var s=this,r=a===B.W?s.b.length:s.a.f,q=s.a,p=q.a
if(p===B.ad)++q.d
else if(p===B.au||p===B.b1||p===B.b5){++q.e;++q.d}if(a===B.i)return
p=q.c
s.c.push(new A.dr(a,q.e,q.d,p,r))
q.c=q.f
q.d=q.e=0
q.a=q.b=null},
$S:54}
A.mL.prototype={
F(){this.a.remove()}}
A.zl.prototype={
bp(a,b){var s,r,q,p,o,n,m,l=this.a.gfN().y
for(s=l.length,r=0;r<l.length;l.length===s||(0,A.D)(l),++r){q=l[r]
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.D)(p),++n){m=p[n]
this.wj(a,b,m)
this.wk(a,b,q,m)}}},
wj(a,b,c){var s,r,q
if(c.gd1())return
s=t.oI.a(c.f.a.cx)
if(s!=null){r=c.qq()
q=new A.a4(r.a,r.b,r.c,r.d)
if(!q.gH(q)){r=q.r2(b)
s.b=!0
a.bx(r,s.a)}}},
wk(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a0.gd1())return
if(a0.gkI())return
s=a0.f.a
r=t.i0.a($.bF().ke())
q=s.a
if(q!=null)r.sbg(q)
q=s.goI()
p=a0.d
p.toString
o=a.d
n=o.gaG()
p=p===B.q?"ltr":"rtl"
n.direction=p
if(q!==a.e){n.font=q
a.e=q}r.b=!0
q=r.a
o.gaK().fm(q,d)
q=a0.d
q.toString
m=q===B.q?a0.geX():a0.gi2()
q=c.a
l=b.a+q.r+m
k=b.b+q.w
j=a0.ik(this.a)
i=s.ax
if(i==null||i===0)a.oT(j,l,k,s.db,d)
else{h=j.length
for(q=s.db,g=l,f=0;f<h;++f){e=j[f]
p=B.e.AK(g)
a.oT(e,p,k,q,d)
n=o.d
if(n==null){o.j2()
n=o.d}p=n.measureText(e).width
if(p==null)p=d
p.toString
g+=i+p}}o.gaK().i4()}}
A.l4.prototype={
gl(a){var s=this
return A.t(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.u(b)!==A.p(s))return!1
return b instanceof A.l4&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x},
j(a){return this.ai(0)}}
A.dx.prototype={
gl(a){var s=this
return A.t(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.u(b)!==A.p(s))return!1
return b instanceof A.dx&&b.a.h(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&!0},
j(a){return B.A0.j(0)+"("+this.b+", "+this.c+", "+this.a.j(0)+")"}}
A.hp.prototype={
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.u(b)!==A.p(r))return!1
if(b instanceof A.hp)if(b.a===r.a)if(b.b==r.b)if(b.c==r.c)if(b.f==r.f)if(b.w==r.w)if(J.w(b.x,r.x))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gl(a){var s=this
return A.t(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.z,s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return this.ai(0)}}
A.hq.prototype={
goU(){var s=this.y
return s.length===0?"sans-serif":s},
goI(){var s,r,q,p=this,o=p.dx
if(o==null){o=p.f
s=p.at
r=p.goU()
q=""+"normal "
o=(o!=null?q+A.k(A.I7(o)):q+"normal")+" "
o=s!=null?o+B.f.bB(s):o+"14"
r=o+"px "+A.k(A.Cf(r))
r=p.dx=r.charCodeAt(0)==0?r:r
o=r}return o},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.u(b)!==A.p(s))return!1
return b instanceof A.hq&&J.w(b.a,s.a)&&J.w(b.b,s.b)&&J.w(b.c,s.c)&&b.f==s.f&&b.w==s.w&&b.y===s.y&&b.at==s.at&&b.ax==s.ax&&b.ch==s.ch&&b.cx==s.cx&&A.Ie(b.db,s.db)&&A.Ie(b.z,s.z)},
gl(a){var s=this
return A.t(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.y,s.z,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,B.a,B.a)},
j(a){return this.ai(0)}}
A.iD.prototype={
h(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.iD&&b.gl(b)===this.gl(this)},
gl(a){var s,r=this,q=r.f
if(q===$){s=A.t(r.a,r.b,r.c,null,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
r.f!==$&&A.ag()
r.f=s
q=s}return q}}
A.yT.prototype={}
A.nk.prototype={
gvM(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i===$){s=A.W(self.document,"div")
r=s.style
A.i(r,"visibility","hidden")
A.i(r,"position","absolute")
A.i(r,"top","0")
A.i(r,"left","0")
A.i(r,"display","flex")
A.i(r,"flex-direction","row")
A.i(r,"align-items","baseline")
A.i(r,"margin","0")
A.i(r,"border","0")
A.i(r,"padding","0")
r=j.e
q=j.a
p=q.a
o=r.a
n=o.style
A.i(n,"font-size",""+B.f.bB(q.b)+"px")
m=A.Cf(p)
m.toString
A.i(n,"font-family",m)
l=q.c
if(l==null)k=p==="FlutterTest"?1:null
else k=l
if(k!=null)A.i(n,"line-height",B.e.j(k))
r.b=null
A.i(o.style,"white-space","pre")
r.b=null
A.Fy(o," ")
s.append(o)
r.b=null
j.b.a.append(s)
j.d!==$&&A.ag()
j.d=s
i=s}return i},
gom(){var s,r=this,q=r.f
if(q===$){q=r.c
if(q===$){s=A.W(self.document,"div")
r.gvM().append(s)
r.c!==$&&A.ag()
r.c=s
q=s}q=q.getBoundingClientRect().bottom
r.f!==$&&A.ag()
r.f=q}return q}}
A.fj.prototype={
D(){return"FragmentFlow."+this.b}}
A.e1.prototype={
gl(a){var s=this
return A.t(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
return b instanceof A.e1&&b.a===s.a&&b.b===s.b&&b.c==s.c&&b.d===s.d},
j(a){return"BidiFragment("+this.a+", "+this.b+", "+A.k(this.c)+")"}}
A.iQ.prototype={
D(){return"_ComparisonResult."+this.b}}
A.aj.prototype={
y5(a){if(a<this.a)return B.Ax
if(a>this.b)return B.Aw
return B.Av}}
A.eK.prototype={
hw(a){var s,r,q,p,o=this
if(a==null)return o.b
s=o.c
r=s.i(0,a)
if(r!=null)return r
q=o.u5(a)
p=q===-1?o.b:o.a[q].c
s.p(0,a,p)
return p},
u5(a){var s,r,q=this.a,p=q.length
for(s=0;s<p;){r=s+B.f.cL(p-s,1)
switch(q[r].y5(a).a){case 1:s=r+1
break
case 2:p=r
break
case 0:return r}}return-1}}
A.tj.prototype={}
A.kD.prototype={
gmJ(){var s,r=this,q=r.a$
if(q===$){s=t.e.a(A.a5(r.gve()))
r.a$!==$&&A.ag()
r.a$=s
q=s}return q},
gmK(){var s,r=this,q=r.b$
if(q===$){s=t.e.a(A.a5(r.gvg()))
r.b$!==$&&A.ag()
r.b$=s
q=s}return q},
gmI(){var s,r=this,q=r.c$
if(q===$){s=t.e.a(A.a5(r.gvc()))
r.c$!==$&&A.ag()
r.c$=s
q=s}return q},
h3(a){A.at(a,"compositionstart",this.gmJ(),null)
A.at(a,"compositionupdate",this.gmK(),null)
A.at(a,"compositionend",this.gmI(),null)},
vf(a){this.d$=null},
vh(a){var s,r=globalThis.CompositionEvent
if(r!=null&&a instanceof r){s=a.data
this.d$=s==null?null:s}},
vd(a){this.d$=null},
yD(a){var s,r,q
if(this.d$==null||a.a==null)return a
s=a.b
r=this.d$.length
q=s-r
if(q<0)return a
return A.uh(s,q,q+r,a.c,a.a)}}
A.ux.prototype={
y9(a){var s
if(this.gby()==null)return
s=$.aS()
if(s!==B.C)s=s===B.bj||this.gby()==null
else s=!0
if(s){s=this.gby()
s.toString
s=A.y(s)
if(s==null)s=t.K.a(s)
a.setAttribute("enterkeyhint",s)}}}
A.wJ.prototype={
gby(){return null}}
A.uO.prototype={
gby(){return"enter"}}
A.uc.prototype={
gby(){return"done"}}
A.vg.prototype={
gby(){return"go"}}
A.wI.prototype={
gby(){return"next"}}
A.xf.prototype={
gby(){return"previous"}}
A.y1.prototype={
gby(){return"search"}}
A.yp.prototype={
gby(){return"send"}}
A.uy.prototype={
kd(){return A.W(self.document,"input")},
oB(a){var s
if(this.gbC()==null)return
s=$.aS()
if(s!==B.C)s=s===B.bj||this.gbC()==="none"
else s=!0
if(s){s=this.gbC()
s.toString
s=A.y(s)
if(s==null)s=t.K.a(s)
a.setAttribute("inputmode",s)}}}
A.wL.prototype={
gbC(){return"none"}}
A.zf.prototype={
gbC(){return null}}
A.wM.prototype={
gbC(){return"numeric"}}
A.tY.prototype={
gbC(){return"decimal"}}
A.wU.prototype={
gbC(){return"tel"}}
A.um.prototype={
gbC(){return"email"}}
A.zz.prototype={
gbC(){return"url"}}
A.lT.prototype={
gbC(){return null},
kd(){return A.W(self.document,"textarea")}}
A.fI.prototype={
D(){return"TextCapitalization."+this.b}}
A.iC.prototype={
lU(a){var s,r,q,p="sentences"
switch(this.a.a){case 0:s=$.ay()
r=s===B.r?p:"words"
break
case 2:r="characters"
break
case 1:r=p
break
case 3:default:r="off"
break}q=globalThis.HTMLInputElement
if(q!=null&&a instanceof q){s=A.y(r)
if(s==null)s=t.K.a(s)
a.setAttribute("autocapitalize",s)}else{q=globalThis.HTMLTextAreaElement
if(q!=null&&a instanceof q){s=A.y(r)
if(s==null)s=t.K.a(s)
a.setAttribute("autocapitalize",s)}}}}
A.uq.prototype={
eq(){var s=this.b,r=A.b([],t.i)
new A.a8(s,A.o(s).k("a8<1>")).N(0,new A.ur(this,r))
return r}}
A.ut.prototype={
$1(a){a.preventDefault()},
$S:1}
A.ur.prototype={
$1(a){var s=this.a,r=s.b.i(0,a)
r.toString
this.b.push(A.am(r,"input",new A.us(s,a,r)))},
$S:60}
A.us.prototype={
$1(a){var s,r=this.a.c,q=this.b
if(r.i(0,q)==null)throw A.d(A.aJ("AutofillInfo must have a valid uniqueIdentifier."))
else{r=r.i(0,q)
r.toString
s=A.FH(this.c)
$.L().bD("flutter/textinput",B.E.bk(new A.bX("TextInputClient.updateEditingStateWithTag",[0,A.ah([r.b,s.qo()],t.jv,t.z)])),A.rv())}},
$S:1}
A.ke.prototype={
op(a,b){var s,r,q="password",p=this.d,o=this.e,n=globalThis.HTMLInputElement
if(n!=null&&a instanceof n){if(o!=null)a.placeholder=o
s=p==null
if(!s){a.name=p
a.id=p
if(B.c.t(p,q))A.ua(a,q)
else A.ua(a,"text")}s=s?"on":p
a.autocomplete=s}else{n=globalThis.HTMLTextAreaElement
if(n!=null&&a instanceof n){if(o!=null)a.placeholder=o
s=p==null
if(!s){a.name=p
a.id=p}r=A.y(s?"on":p)
s=r==null?t.K.a(r):r
a.setAttribute("autocomplete",s)}}},
aF(a){return this.op(a,!1)}}
A.fJ.prototype={}
A.f8.prototype={
ghT(){return Math.min(this.b,this.c)},
ghS(){return Math.max(this.b,this.c)},
qo(){var s=this
return A.ah(["text",s.a,"selectionBase",s.b,"selectionExtent",s.c,"composingBase",s.d,"composingExtent",s.e],t.N,t.z)},
gl(a){var s=this
return A.t(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.p(s)!==J.u(b))return!1
return b instanceof A.f8&&b.a==s.a&&b.ghT()===s.ghT()&&b.ghS()===s.ghS()&&b.d===s.d&&b.e===s.e},
j(a){return this.ai(0)},
aF(a){var s,r,q=this,p=globalThis.HTMLInputElement
if(p!=null&&a instanceof p){a.toString
A.Ft(a,q.a)
s=q.ghT()
r=q.ghS()
a.setSelectionRange(s,r)}else{p=globalThis.HTMLTextAreaElement
if(p!=null&&a instanceof p){a.toString
A.Fu(a,q.a)
s=q.ghT()
r=q.ghS()
a.setSelectionRange(s,r)}else{s=a==null?null:A.Ky(a)
throw A.d(A.a0("Unsupported DOM element type: <"+A.k(s)+"> ("+J.u(a).j(0)+")"))}}}}
A.vF.prototype={}
A.lp.prototype={
br(){var s,r=this,q=r.w
if(q!=null){s=r.c
s.toString
q.aF(s)}q=r.d
q===$&&A.m()
if(q.w!=null){r.f3()
q=r.e
if(q!=null)q.aF(r.c)
r.gpo().focus()
r.c.focus()}}}
A.xO.prototype={
br(){var s,r=this,q=r.w
if(q!=null){s=r.c
s.toString
q.aF(s)}q=r.d
q===$&&A.m()
if(q.w!=null){r.f3()
r.gpo().focus()
r.c.focus()
q=r.e
if(q!=null){s=r.c
s.toString
q.aF(s)}}},
eT(){if(this.w!=null)this.br()
this.c.focus()}}
A.hg.prototype={
gbj(){var s=null,r=this.f
if(r==null){r=this.e.a
r.toString
r=this.f=new A.fJ(r,"",-1,-1,s,s,s,s)}return r},
gpo(){var s=this.d
s===$&&A.m()
s=s.w
return s==null?null:s.a},
dR(a,b,c){var s,r,q,p=this,o="none",n="transparent"
p.c=a.a.kd()
p.k0(a)
s=p.c
s.classList.add("flt-text-editing")
r=s.style
A.i(r,"forced-color-adjust",o)
A.i(r,"white-space","pre-wrap")
A.i(r,"align-content","center")
A.i(r,"position","absolute")
A.i(r,"top","0")
A.i(r,"left","0")
A.i(r,"padding","0")
A.i(r,"opacity","1")
A.i(r,"color",n)
A.i(r,"background-color",n)
A.i(r,"background",n)
A.i(r,"caret-color",n)
A.i(r,"outline",o)
A.i(r,"border",o)
A.i(r,"resize",o)
A.i(r,"text-shadow",o)
A.i(r,"overflow","hidden")
A.i(r,"transform-origin","0 0 0")
q=$.ay()
if(q!==B.a_)q=q===B.r
else q=!0
if(q)s.classList.add("transparentTextEditing")
s=p.r
if(s!=null){q=p.c
q.toString
s.aF(q)}s=p.d
s===$&&A.m()
if(s.w==null){s=$.br.x
s===$&&A.m()
q=p.c
q.toString
s.append(q)
p.Q=!1}p.eT()
p.b=!0
p.x=c
p.y=b},
k0(a){var s,r,q,p,o,n=this
n.d=a
s=n.c
if(a.c){s.toString
r=A.y("readonly")
if(r==null)r=t.K.a(r)
s.setAttribute("readonly",r)}else s.removeAttribute("readonly")
if(a.d){s=n.c
s.toString
r=A.y("password")
if(r==null)r=t.K.a(r)
s.setAttribute("type",r)}if(a.a===B.cZ){s=n.c
s.toString
r=A.y("none")
if(r==null)r=t.K.a(r)
s.setAttribute("inputmode",r)}q=A.KK(a.b)
s=n.c
s.toString
q.y9(s)
p=a.r
s=n.c
if(p!=null){s.toString
p.op(s,!0)}else{s.toString
r=A.y("off")
if(r==null)r=t.K.a(r)
s.setAttribute("autocomplete",r)}o=a.e?"on":"off"
s=n.c
s.toString
r=A.y(o)
if(r==null)r=t.K.a(r)
s.setAttribute("autocorrect",r)},
eT(){this.br()},
ep(){var s,r,q=this,p=q.d
p===$&&A.m()
p=p.w
if(p!=null)B.b.J(q.z,p.eq())
p=q.z
s=q.c
s.toString
r=q.geQ()
p.push(A.am(s,"input",r))
s=q.c
s.toString
p.push(A.am(s,"keydown",q.geY()))
p.push(A.am(self.document,"selectionchange",r))
r=q.c
r.toString
A.at(r,"beforeinput",t.e.a(A.a5(q.ghy())),null)
r=q.c
r.toString
q.h3(r)
r=q.c
r.toString
p.push(A.am(r,"blur",new A.tZ(q)))
q.hV()},
lG(a){this.w=a
if(this.b)this.br()},
lH(a){var s
this.r=a
if(this.b){s=this.c
s.toString
a.aF(s)}},
bi(){var s,r,q,p=this,o=null,n=p.b=!1
p.w=p.r=p.f=p.e=null
for(s=p.z,r=0;r<s.length;++r){q=s[r]
q.b.removeEventListener(q.a,q.c)}B.b.B(s)
s=p.c
s.toString
A.ck(s,"compositionstart",p.gmJ(),o)
A.ck(s,"compositionupdate",p.gmK(),o)
A.ck(s,"compositionend",p.gmI(),o)
if(p.Q){n=p.d
n===$&&A.m()
n=n.w
n=(n==null?o:n.a)!=null}s=p.c
if(n){s.blur()
n=p.c
n.toString
A.rw(n,!0)
n=p.d
n===$&&A.m()
n=n.w
if(n!=null){s=n.e
n=n.a
$.rB.p(0,s,n)
A.rw(n,!0)}}else s.remove()
p.c=null},
lV(a){var s
this.e=a
if(this.b)s=!(a.b>=0&&a.c>=0)
else s=!0
if(s)return
a.aF(this.c)},
br(){this.c.focus()},
f3(){var s,r,q=this.d
q===$&&A.m()
q=q.w
q.toString
s=this.c
s.toString
r=q.a
r.insertBefore(s,q.d)
q=$.br.x
q===$&&A.m()
q.append(r)
this.Q=!0},
pt(a){var s,r,q=this,p=q.c
p.toString
s=q.yD(A.FH(p))
p=q.d
p===$&&A.m()
if(p.f){q.gbj().r=s.d
q.gbj().w=s.e
r=A.MB(s,q.e,q.gbj())}else r=null
if(!s.h(0,q.e)){q.e=s
q.f=r
q.x.$2(s,r)
q.f=null}},
z5(a){var s=this,r=A.aL(a.data),q=A.aL(a.inputType)
if(q!=null)if(B.c.t(q,"delete")){s.gbj().b=""
s.gbj().d=s.e.c}else if(q==="insertLineBreak"){s.gbj().b="\n"
s.gbj().c=s.e.c
s.gbj().d=s.e.c}else if(r!=null){s.gbj().b=r
s.gbj().c=s.e.c
s.gbj().d=s.e.c}},
A1(a){var s,r,q=globalThis.KeyboardEvent
if(q!=null&&a instanceof q)if(a.keyCode===13){s=this.y
s.toString
r=this.d
r===$&&A.m()
s.$1(r.b)
if(!(this.d.a instanceof A.lT))a.preventDefault()}},
kp(a,b,c){var s,r=this
r.dR(a,b,c)
r.ep()
s=r.e
if(s!=null)r.lV(s)
r.c.focus()},
hV(){var s=this,r=s.z,q=s.c
q.toString
r.push(A.am(q,"mousedown",new A.u_()))
q=s.c
q.toString
r.push(A.am(q,"mouseup",new A.u0()))
q=s.c
q.toString
r.push(A.am(q,"mousemove",new A.u1()))}}
A.tZ.prototype={
$1(a){this.a.c.focus()},
$S:1}
A.u_.prototype={
$1(a){a.preventDefault()},
$S:1}
A.u0.prototype={
$1(a){a.preventDefault()},
$S:1}
A.u1.prototype={
$1(a){a.preventDefault()},
$S:1}
A.vw.prototype={
dR(a,b,c){var s,r=this
r.iF(a,b,c)
s=r.c
s.toString
a.a.oB(s)
s=r.d
s===$&&A.m()
if(s.w!=null)r.f3()
s=r.c
s.toString
a.x.lU(s)},
eT(){A.i(this.c.style,"transform","translate(-9999px, -9999px)")
this.p1=!1},
ep(){var s,r,q,p=this,o=p.d
o===$&&A.m()
o=o.w
if(o!=null)B.b.J(p.z,o.eq())
o=p.z
s=p.c
s.toString
r=p.geQ()
o.push(A.am(s,"input",r))
s=p.c
s.toString
o.push(A.am(s,"keydown",p.geY()))
o.push(A.am(self.document,"selectionchange",r))
r=p.c
r.toString
A.at(r,"beforeinput",t.e.a(A.a5(p.ghy())),null)
r=p.c
r.toString
p.h3(r)
r=p.c
r.toString
o.push(A.am(r,"focus",new A.vz(p)))
p.tX()
q=new A.iy()
$.rH()
q.m2()
r=p.c
r.toString
o.push(A.am(r,"blur",new A.vA(p,q)))},
lG(a){var s=this
s.w=a
if(s.b&&s.p1)s.br()},
bi(){this.rw()
var s=this.ok
if(s!=null)s.bT()
this.ok=null},
tX(){var s=this.c
s.toString
this.z.push(A.am(s,"click",new A.vx(this)))},
nI(){var s=this.ok
if(s!=null)s.bT()
this.ok=A.bC(B.df,new A.vy(this))},
br(){var s,r
this.c.focus()
s=this.w
if(s!=null){r=this.c
r.toString
s.aF(r)}}}
A.vz.prototype={
$1(a){this.a.nI()},
$S:1}
A.vA.prototype={
$1(a){var s=A.bc(this.b.goV(),0).a<2e5,r=self.document.hasFocus()&&s,q=this.a
if(r)q.c.focus()
else q.a.it()},
$S:1}
A.vx.prototype={
$1(a){var s=this.a
if(s.p1){s.eT()
s.nI()}},
$S:1}
A.vy.prototype={
$0(){var s=this.a
s.p1=!0
s.br()},
$S:0}
A.rU.prototype={
dR(a,b,c){var s,r,q=this
q.iF(a,b,c)
s=q.c
s.toString
a.a.oB(s)
s=q.d
s===$&&A.m()
if(s.w!=null)q.f3()
else{s=$.br.x
s===$&&A.m()
r=q.c
r.toString
s.append(r)}s=q.c
s.toString
a.x.lU(s)},
ep(){var s,r,q=this,p=q.d
p===$&&A.m()
p=p.w
if(p!=null)B.b.J(q.z,p.eq())
p=q.z
s=q.c
s.toString
r=q.geQ()
p.push(A.am(s,"input",r))
s=q.c
s.toString
p.push(A.am(s,"keydown",q.geY()))
p.push(A.am(self.document,"selectionchange",r))
r=q.c
r.toString
A.at(r,"beforeinput",t.e.a(A.a5(q.ghy())),null)
r=q.c
r.toString
q.h3(r)
r=q.c
r.toString
p.push(A.am(r,"blur",new A.rV(q)))
q.hV()},
br(){var s,r
this.c.focus()
s=this.w
if(s!=null){r=this.c
r.toString
s.aF(r)}}}
A.rV.prototype={
$1(a){var s=this.a
if(self.document.hasFocus())s.c.focus()
else s.a.it()},
$S:1}
A.uS.prototype={
dR(a,b,c){var s
this.iF(a,b,c)
s=this.d
s===$&&A.m()
if(s.w!=null)this.f3()},
ep(){var s,r,q=this,p=q.d
p===$&&A.m()
p=p.w
if(p!=null)B.b.J(q.z,p.eq())
p=q.z
s=q.c
s.toString
r=q.geQ()
p.push(A.am(s,"input",r))
s=q.c
s.toString
p.push(A.am(s,"keydown",q.geY()))
s=q.c
s.toString
A.at(s,"beforeinput",t.e.a(A.a5(q.ghy())),null)
s=q.c
s.toString
q.h3(s)
s=q.c
s.toString
p.push(A.am(s,"keyup",new A.uU(q)))
s=q.c
s.toString
p.push(A.am(s,"select",r))
r=q.c
r.toString
p.push(A.am(r,"blur",new A.uV(q)))
q.hV()},
wp(){A.bC(B.x,new A.uT(this))},
br(){var s,r,q=this
q.c.focus()
s=q.w
if(s!=null){r=q.c
r.toString
s.aF(r)}s=q.e
if(s!=null){r=q.c
r.toString
s.aF(r)}}}
A.uU.prototype={
$1(a){this.a.pt(a)},
$S:1}
A.uV.prototype={
$1(a){this.a.wp()},
$S:1}
A.uT.prototype={
$0(){this.a.c.focus()},
$S:0}
A.z4.prototype={}
A.z9.prototype={
aL(a){var s=a.b
if(s!=null&&s!==this.a&&a.c){a.c=!1
a.gba().bi()}a.b=this.a
a.d=this.b}}
A.zg.prototype={
aL(a){var s=a.gba(),r=a.d
r.toString
s.k0(r)}}
A.zb.prototype={
aL(a){a.gba().lV(this.a)}}
A.ze.prototype={
aL(a){if(!a.c)a.x4()}}
A.za.prototype={
aL(a){a.gba().lG(this.a)}}
A.zd.prototype={
aL(a){a.gba().lH(this.a)}}
A.z3.prototype={
aL(a){if(a.c){a.c=!1
a.gba().bi()}}}
A.z6.prototype={
aL(a){if(a.c){a.c=!1
a.gba().bi()}}}
A.zc.prototype={
aL(a){}}
A.z8.prototype={
aL(a){}}
A.z7.prototype={
aL(a){}}
A.z5.prototype={
aL(a){a.it()
if(this.a)A.PZ()
A.P1()}}
A.CV.prototype={
$2(a,b){var s=t.n
s=A.al(new A.aZ(b.getElementsByClassName("submitBtn"),s),s.k("l.E"),t.e)
A.o(s).z[1].a(J.dZ(s.a)).click()},
$S:61}
A.yU.prototype={
zr(a,b){var s,r,q,p,o,n,m,l=B.E.b4(a)
switch(l.a){case"TextInput.setClient":s=l.b
r=J.ad(s)
q=new A.z9(A.jF(r.i(s,0)),A.FT(t.a.a(r.i(s,1))))
break
case"TextInput.updateConfig":this.a.d=A.FT(t.a.a(l.b))
q=B.p6
break
case"TextInput.setEditingState":q=new A.zb(A.FI(t.a.a(l.b)))
break
case"TextInput.show":q=B.p4
break
case"TextInput.setEditableSizeAndTransform":q=new A.za(A.KE(t.a.a(l.b)))
break
case"TextInput.setStyle":s=t.a.a(l.b)
p=A.jF(s.i(0,"textAlignIndex"))
o=A.jF(s.i(0,"textDirectionIndex"))
n=A.jG(s.i(0,"fontWeightIndex"))
m=n!=null?A.I6(n):"normal"
r=A.Hk(s.i(0,"fontSize"))
if(r==null)r=null
q=new A.zd(new A.ug(r,m,A.aL(s.i(0,"fontFamily")),B.rj[p],B.r2[o]))
break
case"TextInput.clearClient":q=B.p_
break
case"TextInput.hide":q=B.p0
break
case"TextInput.requestAutofill":q=B.p1
break
case"TextInput.finishAutofillContext":q=new A.z5(A.h_(l.b))
break
case"TextInput.setMarkedTextRect":q=B.p3
break
case"TextInput.setCaretRect":q=B.p2
break
default:$.L().aC(b,null)
return}q.aL(this.a)
new A.yV(b).$0()}}
A.yV.prototype={
$0(){$.L().aC(this.a,B.t.U([!0]))},
$S:0}
A.vt.prototype={
gev(){var s=this.a
if(s===$){s!==$&&A.ag()
s=this.a=new A.yU(this)}return s},
gba(){var s,r,q,p,o=this,n=null,m=o.f
if(m===$){s=$.aT
if((s==null?$.aT=A.cG():s).x){s=A.Mk(o)
r=s}else{s=$.ay()
if(s===B.r){q=$.aS()
q=q===B.C}else q=!1
if(q)p=new A.vw(o,A.b([],t.i),$,$,$,n)
else if(s===B.r)p=new A.xO(o,A.b([],t.i),$,$,$,n)
else{if(s===B.a_){q=$.aS()
q=q===B.bj}else q=!1
if(q)p=new A.rU(o,A.b([],t.i),$,$,$,n)
else p=s===B.U?new A.uS(o,A.b([],t.i),$,$,$,n):A.L0(o)}r=p}o.f!==$&&A.ag()
m=o.f=r}return m},
x4(){var s,r,q=this
q.c=!0
s=q.gba()
r=q.d
r.toString
s.kp(r,new A.vu(q),new A.vv(q))},
it(){var s,r=this
if(r.c){r.c=!1
r.gba().bi()
r.gev()
s=r.b
$.L().bD("flutter/textinput",B.E.bk(new A.bX("TextInputClient.onConnectionClosed",[s])),A.rv())}}}
A.vv.prototype={
$2(a,b){var s,r,q="flutter/textinput",p=this.a
if(p.d.f){p.gev()
p=p.b
s=t.N
r=t.z
$.L().bD(q,B.E.bk(new A.bX("TextInputClient.updateEditingStateWithDeltas",[p,A.ah(["deltas",A.b([A.ah(["oldText",b.a,"deltaText",b.b,"deltaStart",b.c,"deltaEnd",b.d,"selectionBase",b.e,"selectionExtent",b.f,"composingBase",b.r,"composingExtent",b.w],s,r)],t.bV)],s,r)])),A.rv())}else{p.gev()
p=p.b
$.L().bD(q,B.E.bk(new A.bX("TextInputClient.updateEditingState",[p,a.qo()])),A.rv())}},
$S:62}
A.vu.prototype={
$1(a){var s=this.a
s.gev()
s=s.b
$.L().bD("flutter/textinput",B.E.bk(new A.bX("TextInputClient.performAction",[s,a])),A.rv())},
$S:63}
A.ug.prototype={
aF(a){var s=this,r=a.style
A.i(r,"text-align",A.Q5(s.d,s.e))
A.i(r,"font",s.b+" "+A.k(s.a)+"px "+A.k(A.Cf(s.c)))}}
A.ue.prototype={
aF(a){var s=A.dU(this.c),r=a.style
A.i(r,"width",A.k(this.a)+"px")
A.i(r,"height",A.k(this.b)+"px")
A.i(r,"transform",s)}}
A.uf.prototype={
$1(a){return A.jH(a)},
$S:64}
A.iF.prototype={
D(){return"TransformKind."+this.b}}
A.aP.prototype={
ar(a){var s=a.a,r=this.a
r[15]=s[15]
r[14]=s[14]
r[13]=s[13]
r[12]=s[12]
r[11]=s[11]
r[10]=s[10]
r[9]=s[9]
r[8]=s[8]
r[7]=s[7]
r[6]=s[6]
r[5]=s[5]
r[4]=s[4]
r[3]=s[3]
r[2]=s[2]
r[1]=s[1]
r[0]=s[0]},
i(a,b){return this.a[b]},
ag(a,b){var s=this.a,r=s[0],q=s[4],p=s[8],o=s[12],n=s[1],m=s[5],l=s[9],k=s[13],j=s[2],i=s[6],h=s[10],g=s[14],f=s[3],e=s[7],d=s[11],c=s[15]
s[12]=r*a+q*b+p*0+o
s[13]=n*a+m*b+l*0+k
s[14]=j*a+i*b+h*0+g
s[15]=f*a+e*b+d*0+c},
hH(){var s=this.a
return s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===0&&s[5]===1&&s[6]===0&&s[7]===0&&s[8]===0&&s[9]===0&&s[10]===1&&s[11]===0&&s[12]===0&&s[13]===0&&s[14]===0&&s[15]===1},
lZ(a,b,c){var s=this.a
s[14]=c
s[13]=b
s[12]=a},
ey(b5){var s,r,q,p,o=b5.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5],h=o[6],g=o[7],f=o[8],e=o[9],d=o[10],c=o[11],b=o[12],a=o[13],a0=o[14],a1=o[15],a2=n*i-m*j,a3=n*h-l*j,a4=n*g-k*j,a5=m*h-l*i,a6=m*g-k*i,a7=l*g-k*h,a8=f*a-e*b,a9=f*a0-d*b,b0=f*a1-c*b,b1=e*a0-d*a,b2=e*a1-c*a,b3=d*a1-c*a0,b4=a2*b3-a3*b2+a4*b1+a5*b0-a6*a9+a7*a8
if(b4===0){this.ar(b5)
return 0}s=1/b4
r=this.a
r[0]=(i*b3-h*b2+g*b1)*s
r[1]=(-m*b3+l*b2-k*b1)*s
r[2]=(a*a7-a0*a6+a1*a5)*s
r[3]=(-e*a7+d*a6-c*a5)*s
q=-j
r[4]=(q*b3+h*b0-g*a9)*s
r[5]=(n*b3-l*b0+k*a9)*s
p=-b
r[6]=(p*a7+a0*a4-a1*a3)*s
r[7]=(f*a7-d*a4+c*a3)*s
r[8]=(j*b2-i*b0+g*a8)*s
r[9]=(-n*b2+m*b0-k*a8)*s
r[10]=(b*a6-a*a4+a1*a2)*s
r[11]=(-f*a6+e*a4-c*a2)*s
r[12]=(q*b1+i*a9-h*a8)*s
r[13]=(n*b1-m*a9+l*a8)*s
r[14]=(p*a5+a*a3-a0*a2)*s
r[15]=(f*a5-e*a3+d*a2)*s
return b4},
d3(b5){var s=this.a,r=s[15],q=s[0],p=s[4],o=s[8],n=s[12],m=s[1],l=s[5],k=s[9],j=s[13],i=s[2],h=s[6],g=s[10],f=s[14],e=s[3],d=s[7],c=s[11],b=b5.a,a=b[15],a0=b[0],a1=b[4],a2=b[8],a3=b[12],a4=b[1],a5=b[5],a6=b[9],a7=b[13],a8=b[2],a9=b[6],b0=b[10],b1=b[14],b2=b[3],b3=b[7],b4=b[11]
s[0]=q*a0+p*a4+o*a8+n*b2
s[4]=q*a1+p*a5+o*a9+n*b3
s[8]=q*a2+p*a6+o*b0+n*b4
s[12]=q*a3+p*a7+o*b1+n*a
s[1]=m*a0+l*a4+k*a8+j*b2
s[5]=m*a1+l*a5+k*a9+j*b3
s[9]=m*a2+l*a6+k*b0+j*b4
s[13]=m*a3+l*a7+k*b1+j*a
s[2]=i*a0+h*a4+g*a8+f*b2
s[6]=i*a1+h*a5+g*a9+f*b3
s[10]=i*a2+h*a6+g*b0+f*b4
s[14]=i*a3+h*a7+g*b1+f*a
s[3]=e*a0+d*a4+c*a8+r*b2
s[7]=e*a1+d*a5+c*a9+r*b3
s[11]=e*a2+d*a6+c*b0+r*b4
s[15]=e*a3+d*a7+c*b1+r*a},
A7(a){var s=new A.aP(new Float32Array(16))
s.ar(this)
s.d3(a)
return s},
j(a){return this.ai(0)}}
A.kL.prototype={
tE(a){var s=A.Pc(new A.tT(this))
this.b=s
s.observe(this.a)},
u7(a){this.c.u(0,a)},
V(){var s=this.b
s===$&&A.m()
s.disconnect()
this.c.V()},
gq0(){var s=this.c
return new A.cV(s,A.o(s).k("cV<1>"))},
dA(){var s,r=$.b9().x
if(r==null){s=self.window.devicePixelRatio
r=s===0?1:s}s=this.a
return new A.ai(s.clientWidth*r,s.clientHeight*r)},
oz(a,b){return B.aP}}
A.tT.prototype={
$2(a,b){new A.aA(a,new A.tS(),a.$ti.k("aA<V.E,ai>")).N(0,this.a.gu6())},
$S:66}
A.tS.prototype={
$1(a){return new A.ai(a.contentRect.width,a.contentRect.height)},
$S:67}
A.u5.prototype={}
A.ln.prototype={
wh(a){this.b.u(0,null)},
V(){var s=this.a
s===$&&A.m()
s.b.removeEventListener(s.a,s.c)
this.b.V()},
gq0(){var s=this.b
return new A.cV(s,A.o(s).k("cV<1>"))},
dA(){var s,r,q=A.bp("windowInnerWidth"),p=A.bp("windowInnerHeight"),o=self.window.visualViewport,n=$.b9().x
if(n==null){s=self.window.devicePixelRatio
n=s===0?1:s}if(o!=null){s=$.aS()
if(s===B.C){s=self.document.documentElement.clientWidth
r=self.document.documentElement.clientHeight
q.b=s*n
p.b=r*n}else{s=o.width
if(s==null)s=null
s.toString
q.b=s*n
s=A.FC(o)
s.toString
p.b=s*n}}else{s=self.window.innerWidth
if(s==null)s=null
s.toString
q.b=s*n
s=A.FF(self.window)
s.toString
p.b=s*n}return new A.ai(q.au(),p.au())},
oz(a,b){var s,r,q,p=$.b9().x
if(p==null){s=self.window.devicePixelRatio
p=s===0?1:s}r=self.window.visualViewport
q=A.bp("windowInnerHeight")
if(r!=null){s=$.aS()
if(s===B.C&&!b)q.b=self.document.documentElement.clientHeight*p
else{s=A.FC(r)
s.toString
q.b=s*p}}else{s=A.FF(self.window)
s.toString
q.b=s*p}return new A.nH(0,0,0,a-q.au())}}
A.tU.prototype={
pF(a){var s
a.gbl().N(0,new A.tV(this))
s=A.y("custom-element")
if(s==null)s=t.K.a(s)
this.d.setAttribute("flt-embedding",s)},
os(a){A.i(a.style,"width","100%")
A.i(a.style,"height","100%")
A.i(a.style,"display","block")
A.i(a.style,"overflow","hidden")
A.i(a.style,"position","relative")
this.d.appendChild(a)
this.ls(a)},
oQ(){return this.oR(this.d)},
oW(){return this.oX(this.d)}}
A.tV.prototype={
$1(a){var s=A.y(a.b)
if(s==null)s=t.K.a(s)
this.a.d.setAttribute(a.a,s)},
$S:38}
A.un.prototype={
ls(a){}}
A.A3.prototype={
oR(a){if(!this.Q$)return
A.at(a,"contextmenu",this.as$,null)
this.Q$=!1},
oX(a){if(this.Q$)return
A.ck(a,"contextmenu",this.as$,null)
this.Q$=!0}}
A.ob.prototype={
$1(a){a.preventDefault()},
$S:1}
A.v7.prototype={
pF(a){var s,r,q="0",p="none"
a.gbl().N(0,new A.v8(this))
s=self.document.body
s.toString
r=A.y("full-page")
if(r==null)r=t.K.a(r)
s.setAttribute("flt-embedding",r)
this.u3()
r=self.document.body
r.toString
A.bt(r,"position","fixed")
A.bt(r,"top",q)
A.bt(r,"right",q)
A.bt(r,"bottom",q)
A.bt(r,"left",q)
A.bt(r,"overflow","hidden")
A.bt(r,"padding",q)
A.bt(r,"margin",q)
A.bt(r,"user-select",p)
A.bt(r,"-webkit-user-select",p)
A.bt(r,"touch-action",p)},
os(a){var s=a.style
A.i(s,"position","absolute")
A.i(s,"top","0")
A.i(s,"right","0")
A.i(s,"bottom","0")
A.i(s,"left","0")
self.document.body.append(a)
this.ls(a)},
oQ(){return this.oR(self.window)},
oW(){return this.oX(self.window)},
u3(){var s,r,q
for(s=t.n,s=A.al(new A.aZ(self.document.head.querySelectorAll('meta[name="viewport"]'),s),s.k("l.E"),t.e),r=J.a2(s.a),s=A.o(s),s=s.k("@<1>").O(s.z[1]).z[1];r.m();)s.a(r.gq()).remove()
q=A.W(self.document,"meta")
s=A.y("")
if(s==null)s=t.K.a(s)
q.setAttribute("flt-viewport",s)
q.name="viewport"
q.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
self.document.head.append(q)
this.ls(q)}}
A.v8.prototype={
$1(a){var s,r=self.document.body
r.toString
s=A.y(a.b)
if(s==null)s=t.K.a(s)
r.setAttribute(a.a,s)},
$S:38}
A.l3.prototype={
tF(a,b){var s=this,r=s.b,q=s.a
r.d.p(0,q,s)
r.e.p(0,q,B.d_)
$.dQ.push(new A.uv(s))},
gk8(){var s=this.c
if(s==null){s=$.D5()
s=this.c=A.Et(s)}return s},
en(){var s=0,r=A.H(t.H),q,p=this,o,n
var $async$en=A.I(function(a,b){if(a===1)return A.E(b,r)
while(true)switch(s){case 0:n=p.c
if(n==null){n=$.D5()
n=p.c=A.Et(n)}if(n instanceof A.iv){s=1
break}o=n.gcC()
n=p.c
s=3
return A.J(n==null?null:n.bL(),$async$en)
case 3:p.c=A.Gw(o)
case 1:return A.F(q,r)}})
return A.G($async$en,r)},
h0(){var s=0,r=A.H(t.H),q,p=this,o,n
var $async$h0=A.I(function(a,b){if(a===1)return A.E(b,r)
while(true)switch(s){case 0:n=p.c
if(n==null){n=$.D5()
n=p.c=A.Et(n)}if(n instanceof A.hX){s=1
break}o=n.gcC()
n=p.c
s=3
return A.J(n==null?null:n.bL(),$async$h0)
case 3:p.c=A.G8(o)
case 1:return A.F(q,r)}})
return A.G($async$h0,r)},
eo(a){return this.xu(a)},
xu(a){var s=0,r=A.H(t.y),q,p=2,o,n=[],m=this,l,k,j
var $async$eo=A.I(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:k=m.d
j=new A.aY(new A.R($.B,t.D),t.h)
m.d=j.a
s=3
return A.J(k,$async$eo)
case 3:l=!1
p=4
s=7
return A.J(a.$0(),$async$eo)
case 7:l=c
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
j.dw()
s=n.pop()
break
case 6:q=l
s=1
break
case 1:return A.F(q,r)
case 2:return A.E(o,r)}})
return A.G($async$eo,r)},
ky(a){return this.zh(a)},
zh(a){var s=0,r=A.H(t.y),q,p=this
var $async$ky=A.I(function(b,c){if(b===1)return A.E(c,r)
while(true)switch(s){case 0:q=p.eo(new A.uw(p,a))
s=1
break
case 1:return A.F(q,r)}})
return A.G($async$ky,r)},
gcO(){var s=this.b.e.i(0,this.a)
return s==null?B.d_:s},
gf2(){if(this.r==null)this.dA()
var s=this.r
s.toString
return s},
dA(){var s=this.e
s===$&&A.m()
this.r=s.dA()},
oA(a){var s=this.e
s===$&&A.m()
this.f=s.oz(this.r.b,a)},
zP(){var s,r,q,p
if(this.r!=null){s=this.e
s===$&&A.m()
r=s.dA()
s=this.r
q=s.b
p=r.b
if(q!==p&&s.a!==r.a){s=s.a
if(!(q>s&&p<r.a))s=s>q&&r.a<p
else s=!0
if(s)return!0}}return!1}}
A.uv.prototype={
$0(){var s=this.a,r=s.c
if(r!=null)r.F()
$.bF().xZ()
s=s.e
s===$&&A.m()
s.V()},
$S:0}
A.uw.prototype={
$0(){var s=0,r=A.H(t.y),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.I(function(a,b){if(a===1)return A.E(b,r)
while(true)switch(s){case 0:i=B.E.b4(p.b)
h=t.dZ.a(i.b)
case 3:switch(i.a){case"selectMultiEntryHistory":s=5
break
case"selectSingleEntryHistory":s=6
break
case"routeUpdated":s=7
break
case"routeInformationUpdated":s=8
break
default:s=4
break}break
case 5:s=9
return A.J(p.a.h0(),$async$$0)
case 9:q=!0
s=1
break
case 6:s=10
return A.J(p.a.en(),$async$$0)
case 10:q=!0
s=1
break
case 7:o=p.a
s=11
return A.J(o.en(),$async$$0)
case 11:o.gk8().lY(A.aL(h.i(0,"routeName")))
q=!0
s=1
break
case 8:n=A.aL(h.i(0,"uri"))
if(n!=null){m=A.nB(n)
o=m.gcv().length===0?"/":m.gcv()
l=m.gf5()
l=l.gH(l)?null:m.gf5()
o=A.E9(m.gdP().length===0?null:m.gdP(),o,l).gfZ()
k=A.js(o,0,o.length,B.v,!1)}else{o=A.aL(h.i(0,"location"))
o.toString
k=o}o=p.a.gk8()
l=h.i(0,"state")
j=A.jE(h.i(0,"replace"))
o.fk(k,j===!0,l)
q=!0
s=1
break
case 4:q=!1
s=1
break
case 1:return A.F(q,r)}})
return A.G($async$$0,r)},
$S:69}
A.l8.prototype={}
A.nH.prototype={}
A.ov.prototype={}
A.oB.prototype={}
A.oH.prototype={}
A.p8.prototype={}
A.p9.prototype={}
A.pa.prototype={}
A.r7.prototype={}
A.ra.prototype={}
A.DA.prototype={}
J.hA.prototype={
h(a,b){return a===b},
gl(a){return A.c6(a)},
j(a){return"Instance of '"+A.xi(a)+"'"},
I(a,b){throw A.d(A.Gc(a,b))},
ga1(a){return A.bs(A.Ej(this))}}
J.hC.prototype={
j(a){return String(a)},
gl(a){return a?519018:218159},
ga1(a){return A.bs(t.y)},
$iac:1,
$iO:1}
J.fq.prototype={
h(a,b){return null==b},
j(a){return"null"},
gl(a){return 0},
ga1(a){return A.bs(t.P)},
I(a,b){return this.rI(a,b)},
$iac:1,
$iX:1}
J.C.prototype={}
J.dq.prototype={
gl(a){return 0},
ga1(a){return B.zY},
j(a){return String(a)}}
J.mk.prototype={}
J.dI.prototype={}
J.dk.prototype={
j(a){var s=a[$.EM()]
if(s==null)return this.rR(a)
return"JavaScript function for "+J.bG(s)},
$ied:1}
J.q.prototype={
h8(a,b){return new A.bH(a,A.b_(a).k("@<1>").O(b).k("bH<1,2>"))},
u(a,b){if(!!a.fixed$length)A.a6(A.a0("add"))
a.push(b)},
i_(a,b){if(!!a.fixed$length)A.a6(A.a0("removeAt"))
if(b<0||b>=a.length)throw A.d(A.xm(b,null))
return a.splice(b,1)[0]},
hF(a,b,c){var s
if(!!a.fixed$length)A.a6(A.a0("insert"))
s=a.length
if(b>s)throw A.d(A.xm(b,null))
a.splice(b,0,c)},
lt(a){if(!!a.fixed$length)A.a6(A.a0("removeLast"))
if(a.length===0)throw A.d(A.h2(a,-1))
return a.pop()},
C(a,b){var s
if(!!a.fixed$length)A.a6(A.a0("remove"))
for(s=0;s<a.length;++s)if(J.w(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
if(!!a.fixed$length)A.a6(A.a0("addAll"))
if(Array.isArray(b)){this.tQ(a,b)
return}for(s=J.a2(b);s.m();)a.push(s.gq())},
tQ(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.d(A.aF(a))
for(s=0;s<r;++s)a.push(b[s])},
B(a){if(!!a.fixed$length)A.a6(A.a0("clear"))
a.length=0},
N(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw A.d(A.aF(a))}},
bG(a,b,c){return new A.aA(a,b,A.b_(a).k("@<1>").O(c).k("aA<1,2>"))},
aA(a,b){var s,r=A.ab(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.k(a[s])
return r.join(b)},
kJ(a){return this.aA(a,"")},
lx(a,b){return A.cb(a,0,A.c2(b,"count",t.S),A.b_(a).c)},
bs(a,b){return A.cb(a,b,null,A.b_(a).c)},
a2(a,b){return a[b]},
gK(a){if(a.length>0)return a[0]
throw A.d(A.c4())},
gT(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.c4())},
gm0(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.d(A.c4())
throw A.d(A.L5())},
qg(a,b,c){if(!!a.fixed$length)A.a6(A.a0("removeRange"))
A.bA(b,c,a.length)
a.splice(b,c-b)},
W(a,b,c,d,e){var s,r,q,p,o
if(!!a.immutable$list)A.a6(A.a0("setRange"))
A.bA(b,c,a.length)
s=c-b
if(s===0)return
A.bg(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.Da(d,e).i5(0,!1)
q=0}p=J.ad(r)
if(q+s>p.gn(r))throw A.d(A.FU())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.i(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.i(r,q+o)},
aN(a,b,c,d){return this.W(a,b,c,d,0)},
bO(a,b){if(!!a.immutable$list)A.a6(A.a0("sort"))
A.Mp(a,b==null?J.On():b)},
iB(a){return this.bO(a,null)},
cZ(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.w(a[s],b))return s
return-1},
t(a,b){var s
for(s=0;s<a.length;++s)if(J.w(a[s],b))return!0
return!1},
gH(a){return a.length===0},
ga7(a){return a.length!==0},
j(a){return A.vK(a,"[","]")},
gE(a){return new J.cg(a,a.length)},
gl(a){return A.c6(a)},
gn(a){return a.length},
sn(a,b){if(!!a.fixed$length)A.a6(A.a0("set length"))
if(b<0)throw A.d(A.av(b,0,null,"newLength",null))
if(b>a.length)A.b_(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.d(A.h2(a,b))
return a[b]},
p(a,b,c){if(!!a.immutable$list)A.a6(A.a0("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.h2(a,b))
a[b]=c},
ku(a,b){return A.FN(a,b,A.b_(a).c)},
ga1(a){return A.bs(A.b_(a))},
$ib2:1,
$iz:1,
$il:1,
$ir:1}
J.vS.prototype={}
J.cg.prototype={
gq(){var s=this.d
return s==null?A.o(this).c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.D(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ef.prototype={
bW(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ghI(b)
if(this.ghI(a)===s)return 0
if(this.ghI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ghI(a){return a===0?1/a<0:a<0},
A(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.a0(""+a+".toInt()"))},
bU(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.a0(""+a+".ceil()"))},
bB(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.a0(""+a+".floor()"))},
i3(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.a0(""+a+".round()"))},
AK(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
G(a,b){var s
if(b>20)throw A.d(A.av(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.ghI(a))return"-"+s
return s},
d5(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.av(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.a6(A.a0("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.c.da("0",q)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aZ(a,b){return a+b},
b_(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
mm(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.nV(a,b)},
bv(a,b){return(a|0)===a?a/b|0:this.nV(a,b)},
nV(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.a0("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+A.k(b)))},
r3(a,b){if(b<0)throw A.d(A.jS(b))
return b>31?0:a<<b>>>0},
x_(a,b){return b>31?0:a<<b>>>0},
cL(a,b){var s
if(a>0)s=this.nQ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
x0(a,b){if(0>b)throw A.d(A.jS(b))
return this.nQ(a,b)},
nQ(a,b){return b>31?0:a>>>b},
dn(a,b){if(b>31)return 0
return a>>>b},
ga1(a){return A.bs(t.cZ)},
$iT:1,
$idV:1}
J.hD.prototype={
ga1(a){return A.bs(t.S)},
$iac:1,
$ij:1}
J.ly.prototype={
ga1(a){return A.bs(t.dx)},
$iac:1}
J.dj.prototype={
y3(a,b){if(b<0)throw A.d(A.h2(a,b))
if(b>=a.length)A.a6(A.h2(a,b))
return a.charCodeAt(b)},
xH(a,b,c){var s=b.length
if(c>s)throw A.d(A.av(c,0,s,null,null))
return new A.qq(b,a,c)},
Bf(a,b){return this.xH(a,b,0)},
aZ(a,b){return a+b},
yL(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.bP(a,r-s)},
fn(a,b){var s=A.b(a.split(b),t.s)
return s},
dY(a,b,c,d){var s=A.bA(b,c,a.length)
return A.Iv(a,b,s,d)},
aE(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.av(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a4(a,b){return this.aE(a,b,0)},
L(a,b,c){return a.substring(b,A.bA(b,c,a.length))},
bP(a,b){return this.L(a,b,null)},
AT(a){return a.toLowerCase()},
qr(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Dy(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.Dz(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
AW(a){var s,r
if(typeof a.trimLeft!="undefined"){s=a.trimLeft()
if(s.length===0)return s
r=s.charCodeAt(0)===133?J.Dy(s,1):0}else{r=J.Dy(a,0)
s=a}if(r===0)return s
if(r===s.length)return""
return s.substring(r)},
lD(a){var s,r,q
if(typeof a.trimRight!="undefined"){s=a.trimRight()
r=s.length
if(r===0)return s
q=r-1
if(s.charCodeAt(q)===133)r=J.Dz(s,q)}else{r=J.Dz(a,a.length)
s=a}if(r===s.length)return s
if(r===0)return""
return s.substring(0,r)},
da(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.oE)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
hU(a,b,c){var s=b-a.length
if(s<=0)return a
return this.da(c,s)+a},
hD(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.av(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cZ(a,b){return this.hD(a,b,0)},
zT(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
t(a,b){return A.Q1(a,b,0)},
bW(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
j(a){return a},
gl(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga1(a){return A.bs(t.N)},
gn(a){return a.length},
i(a,b){if(!(b>=0&&b<a.length))throw A.d(A.h2(a,b))
return a[b]},
$ib2:1,
$iac:1,
$in:1}
A.dK.prototype={
gE(a){var s=A.o(this)
return new A.ks(J.a2(this.gbu()),s.k("@<1>").O(s.z[1]).k("ks<1,2>"))},
gn(a){return J.ak(this.gbu())},
gH(a){return J.k0(this.gbu())},
ga7(a){return J.D9(this.gbu())},
bs(a,b){var s=A.o(this)
return A.al(J.Da(this.gbu(),b),s.c,s.z[1])},
a2(a,b){return A.o(this).z[1].a(J.k_(this.gbu(),b))},
gK(a){return A.o(this).z[1].a(J.dZ(this.gbu()))},
t(a,b){return J.D7(this.gbu(),b)},
j(a){return J.bG(this.gbu())}}
A.ks.prototype={
m(){return this.a.m()},
gq(){return this.$ti.z[1].a(this.a.gq())}}
A.e2.prototype={
gbu(){return this.a}}
A.iU.prototype={$iz:1}
A.iN.prototype={
i(a,b){return this.$ti.z[1].a(J.jZ(this.a,b))},
p(a,b,c){J.F2(this.a,b,this.$ti.c.a(c))},
sn(a,b){J.JQ(this.a,b)},
u(a,b){J.dY(this.a,this.$ti.c.a(b))},
W(a,b,c,d,e){var s=this.$ti
J.JR(this.a,b,c,A.al(d,s.z[1],s.c),e)},
aN(a,b,c,d){return this.W(a,b,c,d,0)},
$iz:1,
$ir:1}
A.bH.prototype={
h8(a,b){return new A.bH(this.a,this.$ti.k("@<1>").O(b).k("bH<1,2>"))},
gbu(){return this.a}}
A.e3.prototype={
ci(a,b,c){var s=this.$ti
return new A.e3(this.a,s.k("@<1>").O(s.z[1]).O(b).O(c).k("e3<1,2,3,4>"))},
v(a){return this.a.v(a)},
i(a,b){return this.$ti.k("4?").a(this.a.i(0,b))},
p(a,b,c){var s=this.$ti
this.a.p(0,s.c.a(b),s.z[1].a(c))},
ak(a,b){var s=this.$ti
return s.z[3].a(this.a.ak(s.c.a(a),new A.tx(this,b)))},
C(a,b){return this.$ti.k("4?").a(this.a.C(0,b))},
N(a,b){this.a.N(0,new A.tw(this,b))},
ga0(){var s=this.$ti
return A.al(this.a.ga0(),s.c,s.z[2])},
gal(){var s=this.$ti
return A.al(this.a.gal(),s.z[1],s.z[3])},
gn(a){var s=this.a
return s.gn(s)},
gH(a){var s=this.a
return s.gH(s)},
ga7(a){var s=this.a
return s.ga7(s)},
gbl(){return this.a.gbl().bG(0,new A.tv(this),this.$ti.k("aD<3,4>"))}}
A.tx.prototype={
$0(){return this.a.$ti.z[1].a(this.b.$0())},
$S(){return this.a.$ti.k("2()")}}
A.tw.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.z[2].a(a),s.z[3].a(b))},
$S(){return this.a.$ti.k("~(1,2)")}}
A.tv.prototype={
$1(a){var s=this.a.$ti,r=s.z[3]
return new A.aD(s.z[2].a(a.a),r.a(a.b),s.k("@<3>").O(r).k("aD<1,2>"))},
$S(){return this.a.$ti.k("aD<3,4>(aD<1,2>)")}}
A.bV.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.f5.prototype={
gn(a){return this.a.length},
i(a,b){return this.a.charCodeAt(b)}}
A.CR.prototype={
$0(){return A.bU(null,t.P)},
$S:34}
A.yq.prototype={}
A.z.prototype={}
A.az.prototype={
gE(a){return new A.ej(this,this.gn(this))},
N(a,b){var s,r=this,q=r.gn(r)
for(s=0;s<q;++s){b.$1(r.a2(0,s))
if(q!==r.gn(r))throw A.d(A.aF(r))}},
gH(a){return this.gn(this)===0},
gK(a){if(this.gn(this)===0)throw A.d(A.c4())
return this.a2(0,0)},
t(a,b){var s,r=this,q=r.gn(r)
for(s=0;s<q;++s){if(J.w(r.a2(0,s),b))return!0
if(q!==r.gn(r))throw A.d(A.aF(r))}return!1},
aA(a,b){var s,r,q,p=this,o=p.gn(p)
if(b.length!==0){if(o===0)return""
s=A.k(p.a2(0,0))
if(o!==p.gn(p))throw A.d(A.aF(p))
for(r=s,q=1;q<o;++q){r=r+b+A.k(p.a2(0,q))
if(o!==p.gn(p))throw A.d(A.aF(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.k(p.a2(0,q))
if(o!==p.gn(p))throw A.d(A.aF(p))}return r.charCodeAt(0)==0?r:r}},
bG(a,b,c){return new A.aA(this,b,A.o(this).k("@<az.E>").O(c).k("aA<1,2>"))},
bs(a,b){return A.cb(this,b,null,A.o(this).k("az.E"))}}
A.eI.prototype={
tN(a,b,c,d){var s,r=this.b
A.bg(r,"start")
s=this.c
if(s!=null){A.bg(s,"end")
if(r>s)throw A.d(A.av(r,0,s,"start",null))}},
guN(){var s=J.ak(this.a),r=this.c
if(r==null||r>s)return s
return r},
gx6(){var s=J.ak(this.a),r=this.b
if(r>s)return s
return r},
gn(a){var s,r=J.ak(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a2(a,b){var s=this,r=s.gx6()+b
if(b<0||r>=s.guN())throw A.d(A.lw(b,s.gn(s),s,null,"index"))
return J.k_(s.a,r)},
bs(a,b){var s,r,q=this
A.bg(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.e9(q.$ti.k("e9<1>"))
return A.cb(q.a,s,r,q.$ti.c)},
lx(a,b){var s,r,q,p=this
A.bg(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.cb(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.cb(p.a,r,q,p.$ti.c)}},
i5(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ad(n),l=m.gn(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.vL(0,n):J.FX(0,n)}r=A.ab(s,m.a2(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a2(n,o+q)
if(m.gn(n)<l)throw A.d(A.aF(p))}return r},
qp(a){return this.i5(a,!0)}}
A.ej.prototype={
gq(){var s=this.d
return s==null?A.o(this).c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ad(q),o=p.gn(q)
if(r.b!==o)throw A.d(A.aF(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a2(q,s);++r.c
return!0}}
A.bk.prototype={
gE(a){return new A.cp(J.a2(this.a),this.b)},
gn(a){return J.ak(this.a)},
gH(a){return J.k0(this.a)},
gK(a){return this.b.$1(J.dZ(this.a))},
a2(a,b){return this.b.$1(J.k_(this.a,b))}}
A.e8.prototype={$iz:1}
A.cp.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gq())
return!0}s.a=null
return!1},
gq(){var s=this.a
return s==null?A.o(this).z[1].a(s):s}}
A.aA.prototype={
gn(a){return J.ak(this.a)},
a2(a,b){return this.b.$1(J.k_(this.a,b))}}
A.bP.prototype={
gE(a){return new A.nI(J.a2(this.a),this.b)},
bG(a,b,c){return new A.bk(this,b,this.$ti.k("@<1>").O(c).k("bk<1,2>"))}}
A.nI.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()}}
A.hs.prototype={
gE(a){return new A.lc(J.a2(this.a),this.b,B.cW)}}
A.lc.prototype={
gq(){var s=this.d
return s==null?A.o(this).z[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.a2(r.$1(s.gq()))
q.c=p}else return!1}q.d=q.c.gq()
return!0}}
A.eJ.prototype={
gE(a){return new A.nf(J.a2(this.a),this.b)}}
A.hn.prototype={
gn(a){var s=J.ak(this.a),r=this.b
if(s>r)return r
return s},
$iz:1}
A.nf.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gq(){if(this.b<0){A.o(this).c.a(null)
return null}return this.a.gq()}}
A.cN.prototype={
bs(a,b){A.f_(b,"count")
A.bg(b,"count")
return new A.cN(this.a,this.b+b,A.o(this).k("cN<1>"))},
gE(a){return new A.n0(J.a2(this.a),this.b)}}
A.f9.prototype={
gn(a){var s=J.ak(this.a)-this.b
if(s>=0)return s
return 0},
bs(a,b){A.f_(b,"count")
A.bg(b,"count")
return new A.f9(this.a,this.b+b,this.$ti)},
$iz:1}
A.n0.prototype={
m(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gq(){return this.a.gq()}}
A.iw.prototype={
gE(a){return new A.n1(J.a2(this.a),this.b)}}
A.n1.prototype={
m(){var s,r,q=this
if(!q.c){q.c=!0
for(s=q.a,r=q.b;s.m();)if(!r.$1(s.gq()))return!0}return q.a.m()},
gq(){return this.a.gq()}}
A.e9.prototype={
gE(a){return B.cW},
gH(a){return!0},
gn(a){return 0},
gK(a){throw A.d(A.c4())},
a2(a,b){throw A.d(A.av(b,0,0,"index",null))},
t(a,b){return!1},
bG(a,b,c){return new A.e9(c.k("e9<0>"))},
bs(a,b){A.bg(b,"count")
return this}}
A.l1.prototype={
m(){return!1},
gq(){throw A.d(A.c4())}}
A.cH.prototype={
gE(a){return new A.lk(J.a2(this.a),this.b)},
gn(a){return J.ak(this.a)+J.ak(this.b)},
gH(a){return J.k0(this.a)&&J.k0(this.b)},
ga7(a){return J.D9(this.a)||J.D9(this.b)},
t(a,b){return J.D7(this.a,b)||J.D7(this.b,b)},
gK(a){var s=J.a2(this.a)
if(s.m())return s.gq()
return J.dZ(this.b)}}
A.hm.prototype={
a2(a,b){var s=this.a,r=J.ad(s),q=r.gn(s)
if(b<q)return r.a2(s,b)
return J.k_(this.b,b-q)},
gK(a){var s=this.a,r=J.ad(s)
if(r.ga7(s))return r.gK(s)
return J.dZ(this.b)},
$iz:1}
A.lk.prototype={
m(){var s,r=this
if(r.a.m())return!0
s=r.b
if(s!=null){s=J.a2(s)
r.a=s
r.b=null
return s.m()}return!1},
gq(){return this.a.gq()}}
A.cU.prototype={
gE(a){return new A.nJ(J.a2(this.a),this.$ti.k("nJ<1>"))}}
A.nJ.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())}}
A.ht.prototype={
sn(a,b){throw A.d(A.a0("Cannot change the length of a fixed-length list"))},
u(a,b){throw A.d(A.a0("Cannot add to a fixed-length list"))}}
A.ny.prototype={
p(a,b,c){throw A.d(A.a0("Cannot modify an unmodifiable list"))},
sn(a,b){throw A.d(A.a0("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.d(A.a0("Cannot add to an unmodifiable list"))},
W(a,b,c,d,e){throw A.d(A.a0("Cannot modify an unmodifiable list"))},
aN(a,b,c,d){return this.W(a,b,c,d,0)}}
A.fN.prototype={}
A.eE.prototype={
gn(a){return J.ak(this.a)},
a2(a,b){var s=this.a,r=J.ad(s)
return r.a2(s,r.gn(s)-1-b)}}
A.cP.prototype={
gl(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.c.gl(this.a)&536870911
this._hashCode=s
return s},
j(a){return'Symbol("'+this.a+'")'},
h(a,b){if(b==null)return!1
return b instanceof A.cP&&this.a===b.a},
$ifE:1}
A.jB.prototype={}
A.q4.prototype={$r:"+(1,2)",$s:1}
A.jb.prototype={$r:"+domBlurListener,domFocusListener,element,semanticsNodeId(1,2,3,4)",$s:7}
A.e4.prototype={}
A.f6.prototype={
ci(a,b,c){var s=A.o(this)
return A.G5(this,s.c,s.z[1],b,c)},
gH(a){return this.gn(this)===0},
ga7(a){return this.gn(this)!==0},
j(a){return A.DG(this)},
p(a,b,c){A.Di()},
ak(a,b){A.Di()},
C(a,b){A.Di()},
gbl(){return new A.fY(this.yM(),A.o(this).k("fY<aD<1,2>>"))},
yM(){var s=this
return function(){var r=0,q=1,p,o,n,m
return function $async$gbl(a,b,c){if(b===1){p=c
r=q}while(true)switch(r){case 0:o=s.ga0(),o=o.gE(o),n=A.o(s),n=n.k("@<1>").O(n.z[1]).k("aD<1,2>")
case 2:if(!o.m()){r=3
break}m=o.gq()
r=4
return a.b=new A.aD(m,s.i(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p,3}}}},
$ia9:1}
A.aa.prototype={
gn(a){return this.a},
v(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
i(a,b){if(!this.v(b))return null
return this.b[b]},
N(a,b){var s,r,q,p,o=this.c
for(s=o.length,r=this.b,q=0;q<s;++q){p=o[q]
b.$2(p,r[p])}},
ga0(){return new A.iR(this,this.$ti.k("iR<1>"))},
gal(){var s=this.$ti
return A.hP(this.c,new A.tO(this),s.c,s.z[1])}}
A.tO.prototype={
$1(a){return this.a.b[a]},
$S(){return this.a.$ti.k("2(1)")}}
A.iR.prototype={
gE(a){var s=this.a.c
return new J.cg(s,s.length)},
gn(a){return this.a.c.length}}
A.aX.prototype={
dk(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.L_(r)
o=A.ei(A.Oy(),q,r,s.z[1])
A.I5(p.a,o)
p.$map=o}return o},
v(a){return this.dk().v(a)},
i(a,b){return this.dk().i(0,b)},
N(a,b){this.dk().N(0,b)},
ga0(){var s=this.dk()
return new A.a8(s,A.o(s).k("a8<1>"))},
gal(){return this.dk().gal()},
gn(a){return this.dk().a}}
A.vc.prototype={
$1(a){return this.a.b(a)},
$S:31}
A.hE.prototype={
gA3(){var s=this.a
if(s instanceof A.cP)return s
return this.a=new A.cP(s)},
gAl(){var s,r,q,p,o,n=this
if(n.c===1)return B.dy
s=n.d
r=J.ad(s)
q=r.gn(s)-J.ak(n.e)-n.f
if(q===0)return B.dy
p=[]
for(o=0;o<q;++o)p.push(r.i(s,o))
return J.FY(p)},
gA9(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.jr
s=k.e
r=J.ad(s)
q=r.gn(s)
p=k.d
o=J.ad(p)
n=o.gn(p)-q-k.f
if(q===0)return B.jr
m=new A.bw(t.bX)
for(l=0;l<q;++l)m.p(0,new A.cP(r.i(s,l)),o.i(p,n+l))
return new A.e4(m,t.i9)}}
A.xh.prototype={
$0(){return B.e.bB(1000*this.a.now())},
$S:26}
A.xg.prototype={
$2(a,b){var s=this.a
s.b=s.b+"$"+a
this.b.push(a)
this.c.push(b);++s.a},
$S:33}
A.zq.prototype={
bJ(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.i4.prototype={
j(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.lz.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.nx.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.m3.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$ib0:1}
A.hr.prototype={}
A.je.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibO:1}
A.d9.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.IA(r==null?"unknown":r)+"'"},
ga1(a){var s=A.Er(this)
return A.bs(s==null?A.cA(this):s)},
$ied:1,
gBa(){return this},
$C:"$1",
$R:1,
$D:null}
A.ky.prototype={$C:"$0",$R:0}
A.kz.prototype={$C:"$2",$R:2}
A.ng.prototype={}
A.n8.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.IA(s)+"'"}}
A.f1.prototype={
h(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.f1))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.h3(this.a)^A.c6(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.xi(this.a)+"'")}}
A.or.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.mM.prototype={
j(a){return"RuntimeError: "+this.a}}
A.CK.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
for(s=h.a,r=s.a,q=h.b,p=h.w,o=h.r,n=h.f,m=h.d,l=h.e,k=h.c;r<q;++r){if(k[r])return;++s.a
j=m[r]
i=l[r]
if(n(i)){A.eU(g,"alreadyInitialized",i,j,g)
continue}if(o(i)){A.eU(g,"initilize",i,j,g)
p(i)}else{A.eU(g,"missing",i,j,g)
throw A.d(A.Fj("Loading "+m[r]+" failed: the code with hash '"+i+"' was not loaded.\nevent log:\n"+A.Hw()+"\n"))}}},
$S:0}
A.CL.prototype={
$1(a){var s=this
if(s.a(s.b[a])){s.c[a]=!1
return A.bU(null,t.z)}return A.OA(s.d[a],s.e,s.f).aH(new A.CM(s.c,a,s.r),t.z)},
$S:73}
A.CM.prototype={
$1(a){this.a[this.b]=!1
this.c.$0()},
$S:53}
A.CJ.prototype={
$1(a){this.b.$0()
$.JB().u(0,this.d)},
$S:75}
A.BS.prototype={
$1(a){return null},
$S:53}
A.BY.prototype={
$0(){var s=null
A.eU(s,"downloadSuccess",s,this.a,s)
this.b.bX(s)},
$S:0}
A.BX.prototype={
$3(a,b,c){var s=this.a
A.eU(b,"downloadFailure",null,s,null)
$.D4().p(0,s,null)
if(c==null)c=A.GA()
this.b.hb(new A.hh("Loading "+this.c+" failed: "+A.k(a)+"\nevent log:\n"+A.Hw()+"\n"),c)},
$S:76}
A.BT.prototype={
$1(a){this.a.$3(A.K(a),"js-failure-wrapper",A.Y(a))},
$S:4}
A.BU.prototype={
$1(a){var s,r,q,p,o=this,n=o.a,m=n.status
if(m!==200)o.b.$3("Request status: "+m,"worker xhr",null)
s=n.responseText
try{new Function(s)()
o.c.$0()}catch(p){r=A.K(p)
q=A.Y(p)
o.b.$3(r,"evaluating the code in worker xhr",q)}},
$S:4}
A.BV.prototype={
$1(a){this.a.$3(a,"xhr error handler",null)},
$S:4}
A.BW.prototype={
$1(a){this.a.$3(a,"xhr abort handler",null)},
$S:4}
A.B1.prototype={}
A.bw.prototype={
gn(a){return this.a},
gH(a){return this.a===0},
ga7(a){return this.a!==0},
ga0(){return new A.a8(this,A.o(this).k("a8<1>"))},
gal(){var s=A.o(this)
return A.hP(new A.a8(this,s.k("a8<1>")),new A.vV(this),s.c,s.z[1])},
v(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.pG(a)},
pG(a){var s=this.d
if(s==null)return!1
return this.eV(s[this.eU(a)],a)>=0},
yd(a){return new A.a8(this,A.o(this).k("a8<1>")).jZ(0,new A.vU(this,a))},
J(a,b){b.N(0,new A.vT(this))},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.pH(b)},
pH(a){var s,r,q=this.d
if(q==null)return null
s=q[this.eU(a)]
r=this.eV(s,a)
if(r<0)return null
return s[r].b},
p(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.mp(s==null?q.b=q.jy():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.mp(r==null?q.c=q.jy():r,b,c)}else q.pJ(b,c)},
pJ(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jy()
s=p.eU(a)
r=o[s]
if(r==null)o[s]=[p.jz(a,b)]
else{q=p.eV(r,a)
if(q>=0)r[q].b=b
else r.push(p.jz(a,b))}},
ak(a,b){var s,r,q=this
if(q.v(a)){s=q.i(0,a)
return s==null?A.o(q).z[1].a(s):s}r=b.$0()
q.p(0,a,r)
return r},
C(a,b){var s=this
if(typeof b=="string")return s.nC(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.nC(s.c,b)
else return s.pI(b)},
pI(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eU(a)
r=n[s]
q=o.eV(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.nZ(p)
if(r.length===0)delete n[s]
return p.b},
B(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.jx()}},
N(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.aF(s))
r=r.c}},
mp(a,b,c){var s=a[b]
if(s==null)a[b]=this.jz(b,c)
else s.b=c},
nC(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.nZ(s)
delete a[b]
return s.b},
jx(){this.r=this.r+1&1073741823},
jz(a,b){var s,r=this,q=new A.wj(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.jx()
return q},
nZ(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.jx()},
eU(a){return J.e(a)&0x3fffffff},
eV(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.w(a[r].a,b))return r
return-1},
j(a){return A.DG(this)},
jy(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.vV.prototype={
$1(a){var s=this.a,r=s.i(0,a)
return r==null?A.o(s).z[1].a(r):r},
$S(){return A.o(this.a).k("2(1)")}}
A.vU.prototype={
$1(a){return J.w(this.a.i(0,a),this.b)},
$S(){return A.o(this.a).k("O(1)")}}
A.vT.prototype={
$2(a,b){this.a.p(0,a,b)},
$S(){return A.o(this.a).k("~(1,2)")}}
A.wj.prototype={}
A.a8.prototype={
gn(a){return this.a.a},
gH(a){return this.a.a===0},
gE(a){var s=this.a,r=new A.hK(s,s.r)
r.c=s.e
return r},
t(a,b){return this.a.v(b)},
N(a,b){var s=this.a,r=s.e,q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.d(A.aF(s))
r=r.c}}}
A.hK.prototype={
gq(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.Cy.prototype={
$1(a){return this.a(a)},
$S:27}
A.Cz.prototype={
$2(a,b){return this.a(a,b)},
$S:78}
A.CA.prototype={
$1(a){return this.a(a)},
$S:28}
A.ja.prototype={
ga1(a){return A.bs(this.n3())},
n3(){return A.Po(this.$r,this.jl())},
j(a){return this.nY(!1)},
nY(a){var s,r,q,p,o,n=this.uU(),m=this.jl(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Gl(o):l+A.k(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
uU(){var s,r=this.$s
for(;$.B_.length<=r;)$.B_.push(null)
s=$.B_[r]
if(s==null){s=this.uk()
$.B_[r]=s}return s},
uk(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.FW(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.wm(j,k)}}
A.q2.prototype={
jl(){return[this.a,this.b]},
h(a,b){if(b==null)return!1
return b instanceof A.q2&&this.$s===b.$s&&J.w(this.a,b.a)&&J.w(this.b,b.b)},
gl(a){return A.t(this.$s,this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.q3.prototype={
jl(){return this.a},
h(a,b){if(b==null)return!1
return b instanceof A.q3&&this.$s===b.$s&&A.Nh(this.a,b.a)},
gl(a){return A.t(this.$s,A.cs(this.a),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.vR.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
gwa(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.G_(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
kt(a){var s=this.b.exec(a)
if(s==null)return null
return new A.j2(s)},
rb(a){var s=this.kt(a)
if(s!=null)return s.b[0]
return null},
uQ(a,b){var s,r=this.gwa()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.j2(s)}}
A.j2.prototype={
gp0(){var s=this.b
return s.index+s[0].length},
i(a,b){return this.b[b]},
$ihQ:1,
$iDO:1}
A.zL.prototype={
gq(){var s=this.d
return s==null?t.lu.a(s):s},
m(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.uQ(m,s)
if(p!=null){n.d=p
o=p.gp0()
if(p.b.index===o){if(q.b.unicode){s=n.c
q=s+1
if(q<r){s=m.charCodeAt(s)
if(s>=55296&&s<=56319){s=m.charCodeAt(q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
o=(s?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1}}
A.iz.prototype={
i(a,b){if(b!==0)A.a6(A.xm(b,null))
return this.c},
$ihQ:1}
A.qq.prototype={
gE(a){return new A.Ba(this.a,this.b,this.c)},
gK(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.iz(r,s)
throw A.d(A.c4())}}
A.Ba.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.iz(s,o)
q.c=r===q.c?r+1:r
return!0},
gq(){var s=this.d
s.toString
return s}}
A.zX.prototype={
au(){var s=this.b
if(s===this)throw A.d(new A.bV("Local '"+this.a+"' has not been initialized."))
return s},
ww(){var s=this.b
if(s===this)throw A.d(A.Ld(this.a))
return s},
scY(a){var s=this
if(s.b!==s)throw A.d(new A.bV("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.Av.prototype={
fR(){var s,r=this,q=r.b
if(q===r){s=r.c.$0()
if(r.b!==r)throw A.d(new A.bV("Local '"+r.a+u.m))
r.b=s
q=s}return q}}
A.hZ.prototype={
ga1(a){return B.zR},
oq(a,b,c){throw A.d(A.a0("Int64List not supported by dart2js."))},
xM(a,b,c){A.jJ(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
xL(a){return this.xM(a,0,null)},
$iac:1,
$iDd:1}
A.i2.prototype={
vR(a,b,c,d){var s=A.av(b,0,c,d,null)
throw A.d(s)},
mz(a,b,c,d){if(b>>>0!==b||b>c)this.vR(a,b,c,d)}}
A.i_.prototype={
ga1(a){return B.zS},
lK(a,b,c){throw A.d(A.a0("Int64 accessor not supported by dart2js."))},
lW(a,b,c,d){throw A.d(A.a0("Int64 accessor not supported by dart2js."))},
$iac:1,
$iaE:1}
A.fu.prototype={
gn(a){return a.length},
nO(a,b,c,d,e){var s,r,q=a.length
this.mz(a,b,q,"start")
this.mz(a,c,q,"end")
if(b>c)throw A.d(A.av(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.bh(e,null))
r=d.length
if(r-e<s)throw A.d(A.aJ("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ib2:1,
$ibI:1}
A.du.prototype={
i(a,b){A.d0(b,a,a.length)
return a[b]},
p(a,b,c){A.d0(b,a,a.length)
a[b]=c},
W(a,b,c,d,e){if(t.dQ.b(d)){this.nO(a,b,c,d,e)
return}this.mc(a,b,c,d,e)},
aN(a,b,c,d){return this.W(a,b,c,d,0)},
$iz:1,
$il:1,
$ir:1}
A.bK.prototype={
p(a,b,c){A.d0(b,a,a.length)
a[b]=c},
W(a,b,c,d,e){if(t.aj.b(d)){this.nO(a,b,c,d,e)
return}this.mc(a,b,c,d,e)},
aN(a,b,c,d){return this.W(a,b,c,d,0)},
$iz:1,
$il:1,
$ir:1}
A.i0.prototype={
ga1(a){return B.zT},
$iac:1,
$iuW:1}
A.lU.prototype={
ga1(a){return B.zU},
$iac:1,
$iuX:1}
A.lV.prototype={
ga1(a){return B.zV},
i(a,b){A.d0(b,a,a.length)
return a[b]},
$iac:1,
$ivG:1}
A.i1.prototype={
ga1(a){return B.zW},
i(a,b){A.d0(b,a,a.length)
return a[b]},
$iac:1,
$ivH:1}
A.lW.prototype={
ga1(a){return B.zX},
i(a,b){A.d0(b,a,a.length)
return a[b]},
$iac:1,
$ivI:1}
A.lX.prototype={
ga1(a){return B.A1},
i(a,b){A.d0(b,a,a.length)
return a[b]},
$iac:1,
$izs:1}
A.lY.prototype={
ga1(a){return B.A2},
i(a,b){A.d0(b,a,a.length)
return a[b]},
$iac:1,
$izt:1}
A.i3.prototype={
ga1(a){return B.A3},
gn(a){return a.length},
i(a,b){A.d0(b,a,a.length)
return a[b]},
$iac:1,
$izu:1}
A.em.prototype={
ga1(a){return B.A4},
gn(a){return a.length},
i(a,b){A.d0(b,a,a.length)
return a[b]},
e7(a,b,c){return new Uint8Array(a.subarray(b,A.NR(b,c,a.length)))},
$iac:1,
$iem:1,
$icv:1}
A.j5.prototype={}
A.j6.prototype={}
A.j7.prototype={}
A.j8.prototype={}
A.bZ.prototype={
k(a){return A.jo(v.typeUniverse,this,a)},
O(a){return A.H_(v.t