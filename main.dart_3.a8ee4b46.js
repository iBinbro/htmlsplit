.a(s):s},
c2(a,b){var s,r,q,p,o,n,m=this,l=m.a.length-1,k=(m.c-m.b&l)>>>0
if(k===0){s=J.kV(0,m.$ti.c)
return s}s=m.$ti.c
r=A.aK(k,m.gJ(m),!0,s)
for(q=m.a,p=m.b,o=0;o<k;++o){n=q[(p+o&l)>>>0]
r[o]=n==null?s.a(n):n}return r},
cQ(a){return this.c2(a,!0)},
I(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.$ti
if(j.k("C<1>").b(b)){s=b.length
r=k.gu(k)
q=r+s
p=k.a
o=p.length
if(q>=o){n=A.aK(A.a_8(q+(q>>>1)),null,!1,j.k("1?"))
k.c=k.Oh(n)
k.a=n
k.b=0
B.b.aQ(n,r,q,b,0)
k.c+=s}else{j=k.c
m=o-j
if(s<m){B.b.aQ(p,j,j+s,b,0)
k.c+=s}else{l=s-m
B.b.aQ(p,j,j+m,b,0)
B.b.aQ(k.a,0,l,b,m)
k.c=l}}++k.d}else for(j=J.at(b);j.q();)k.dJ(j.gB())},
L(a){var s,r,q=this,p=q.b,o=q.c
if(p!==o){for(s=q.a,r=s.length-1;p!==o;p=(p+1&r)>>>0)s[p]=null
q.b=q.c=0;++q.d}},
i(a){return A.w6(this,"{","}")},
Ol(a){var s=this,r=s.b,q=s.a
r=s.b=(r-1&q.length-1)>>>0
q[r]=a
if(r===s.c)s.xC();++s.d},
m_(){var s,r,q=this,p=q.b
if(p===q.c)throw A.d(A.bz());++q.d
s=q.a
r=s[p]
if(r==null)r=q.$ti.c.a(r)
s[p]=null
q.b=(p+1&s.length-1)>>>0
return r},
eF(a){var s,r=this,q=r.b,p=r.c
if(q===p)throw A.d(A.bz());++r.d
q=r.a
p=r.c=(p-1&q.length-1)>>>0
s=q[p]
if(s==null)s=r.$ti.c.a(s)
q[p]=null
return s},
dJ(a){var s=this,r=s.a,q=s.c
r[q]=a
r=(q+1&r.length-1)>>>0
s.c=r
if(s.b===r)s.xC();++s.d},
xC(){var s=this,r=A.aK(s.a.length*2,null,!1,s.$ti.k("1?")),q=s.a,p=s.b,o=q.length-p
B.b.aQ(r,0,o,q,p)
B.b.aQ(r,o,o+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=r},
Oh(a){var s,r,q=this,p=q.b,o=q.c,n=q.a
if(p<=o){s=o-p
B.b.aQ(a,0,s,n,p)
return s}else{r=n.length-p
B.b.aQ(a,0,r,n,p)
B.b.aQ(a,r,r+q.c,q.a,0)
return q.c+r}}}
A.Bu.prototype={
gB(){var s=this.e
return s==null?A.o(this).c.a(s):s},
q(){var s,r=this,q=r.a
if(r.c!==q.d)A.R(A.bi(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.i2.prototype={
gN(a){return this.gu(this)===0},
gbg(a){return this.gu(this)!==0},
I(a,b){var s
for(s=J.at(b);s.q();)this.D(0,s.gB())},
Tj(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.G)(a),++r)this.v(0,a[r])},
op(a){var s,r,q=this.iw(0)
for(s=this.gK(this);s.q();){r=s.gB()
if(!a.A(0,r))q.v(0,r)}return q},
c2(a,b){return A.af(this,!0,A.o(this).c)},
cQ(a){return this.c2(a,!0)},
eA(a,b,c){return new A.iQ(this,b,A.o(this).k("@<1>").ah(c).k("iQ<1,2>"))},
giH(a){var s,r=this
if(r.gu(r)>1)throw A.d(A.a__())
s=r.gK(r)
if(!s.q())throw A.d(A.bz())
return s.gB()},
i(a){return A.w6(this,"{","}")},
j9(a,b){var s
for(s=this.gK(this);s.q();)if(b.$1(s.gB()))return!0
return!1},
eJ(a,b){return A.a05(this,b,A.o(this).c)},
gJ(a){var s=this.gK(this)
if(!s.q())throw A.d(A.bz())
return s.gB()},
gY(a){var s,r=this.gK(this)
if(!r.q())throw A.d(A.bz())
do s=r.gB()
while(r.q())
return s},
bf(a,b){var s,r
A.cD(b,"index")
s=this.gK(this)
for(r=b;s.q();){if(r===0)return s.gB();--r}throw A.d(A.w3(b,b-r,this,null,"index"))},
$iP:1,
$it:1,
$icF:1}
A.jY.prototype={
i_(a){var s,r,q=this.ku()
for(s=this.gK(this);s.q();){r=s.gB()
if(!a.A(0,r))q.D(0,r)}return q},
op(a){var s,r,q=this.ku()
for(s=this.gK(this);s.q();){r=s.gB()
if(a.A(0,r))q.D(0,r)}return q},
iw(a){var s=this.ku()
s.I(0,this)
return s}}
A.En.prototype={
D(a,b){return A.XE()},
I(a,b){return A.XE()},
v(a,b){return A.XE()}}
A.cf.prototype={
ku(){return A.ei(this.$ti.c)},
A(a,b){return this.a.P(b)},
gK(a){var s=this.a.gb2()
return s.gK(s)},
gu(a){var s=this.a
return s.gu(s)}}
A.th.prototype={}
A.tC.prototype={}
A.Bj.prototype={
j(a,b){var s,r=this.b
if(r==null)return this.c.j(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.MG(b):s}},
gu(a){return this.b==null?this.c.a:this.iS().length},
gN(a){return this.gu(this)===0},
gbg(a){return this.gu(this)>0},
gb2(){if(this.b==null){var s=this.c
return new A.aR(s,A.o(s).k("aR<1>"))}return new A.Bk(this)},
gaV(){var s=this
if(s.b==null)return s.c.gaV()
return A.oz(s.iS(),new A.RR(s),t.N,t.z)},
l(a,b,c){var s,r,q=this
if(q.b==null)q.c.l(0,b,c)
else if(q.P(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.zQ().l(0,b,c)},
P(a){if(this.b==null)return this.c.P(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
bt(a,b){var s
if(this.P(a))return this.j(0,a)
s=b.$0()
this.l(0,a,s)
return s},
v(a,b){if(this.b!=null&&!this.P(b))return null
return this.zQ().v(0,b)},
a_(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a_(0,b)
s=o.iS()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.U8(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.bi(o))}},
iS(){var s=this.c
if(s==null)s=this.c=A.a(Object.keys(this.a),t.s)
return s},
zQ(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.w(t.N,t.z)
r=n.iS()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.j(0,o))}if(p===0)r.push("")
else B.b.L(r)
n.a=n.b=null
return n.c=s},
MG(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.U8(this.a[a])
return this.b[a]=s}}
A.RR.prototype={
$1(a){return this.a.j(0,a)},
$S:78}
A.Bk.prototype={
gu(a){var s=this.a
return s.gu(s)},
bf(a,b){var s=this.a
return s.b==null?s.gb2().bf(0,b):s.iS()[b]},
gK(a){var s=this.a
if(s.b==null){s=s.gb2()
s=s.gK(s)}else{s=s.iS()
s=new J.eJ(s,s.length)}return s},
A(a,b){return this.a.P(b)}}
A.re.prototype={
aJ(){var s,r,q=this
q.GN()
s=q.a
r=s.a
s.a=""
s=q.c
s.D(0,A.UB(r.charCodeAt(0)==0?r:r,q.b))
s.aJ()}}
A.Q7.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:40}
A.Q6.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:40}
A.G3.prototype={
gll(){return B.tV},
SC(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a0=A.cj(b,a0,a.length)
s=$.a3n()
for(r=b,q=r,p=null,o=-1,n=-1,m=0;r<a0;r=l){l=r+1
k=a.charCodeAt(r)
if(k===37){j=l+2
if(j<=a0){i=A.ad1(a,l)
if(i===37)i=-1
l=j}else i=-1}else i=k
if(0<=i&&i<=127){h=s[i]
if(h>=0){i=u.n.charCodeAt(h)
if(i===k)continue
k=i}else{if(h===-1){if(o<0){g=p==null?null:p.a.length
if(g==null)g=0
o=g+(r-q)
n=r}++m
if(k===61)continue}k=i}if(h!==-2){if(p==null){p=new A.bj("")
g=p}else g=p
g.a+=B.d.a8(a,q,r)
g.a+=A.cu(k)
q=l
continue}}throw A.d(A.bn("Invalid base64 data",a,r))}if(p!=null){g=p.a+=B.d.a8(a,q,a0)
f=g.length
if(o>=0)A.YN(a,n,a0,o,m,f)
else{e=B.f.cT(f-1,4)+1
if(e===1)throw A.d(A.bn(c,a,a0))
for(;e<4;){g+="="
p.a=g;++e}}g=p.a
return B.d.jH(a,b,a0,g.charCodeAt(0)==0?g:g)}d=a0-b
if(o>=0)A.YN(a,n,a0,o,m,d)
else{e=B.f.cT(d,4)
if(e===1)throw A.d(A.bn(c,a,a0))
if(e>1)a=B.d.jH(a,a0,a0,e===2?"==":"=")}return a}}
A.G4.prototype={
bW(a){var s=a.length
if(s===0)return""
s=new A.zC(u.n).Be(a,0,s,!0)
s.toString
return A.Xe(s,0,null)},
fP(a){return new A.TI(new A.Eq(new A.tk(!1),a,a.a),new A.zC(u.n))}}
A.zC.prototype={
Pv(a){return new Uint8Array(a)},
Be(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.f.bS(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.Pv(o)
r.a=A.a9A(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.Qv.prototype={
D(a,b){this.x5(b,0,b.length,!1)},
aJ(){this.x5(B.xV,0,0,!0)}}
A.TI.prototype={
x5(a,b,c,d){var s=this.b.Be(a,b,c,d)
if(s!=null)this.a.j7(s,0,s.length,d)}}
A.Gl.prototype={}
A.QA.prototype={
D(a,b){this.a.a.a+=b},
aJ(){this.a.aJ()}}
A.uz.prototype={}
A.Dx.prototype={
D(a,b){this.b.push(b)},
aJ(){this.a.$1(this.b)}}
A.uG.prototype={
lj(a){return this.gll().bW(a)}}
A.ng.prototype={
Qu(a){return new A.B1(this,a)},
fP(a){throw A.d(A.aq("This converter does not support chunked conversions: "+this.i(0)))}}
A.B1.prototype={
bW(a){return A.UB(this.a.bW(a),this.b.a)},
fP(a){return this.a.fP(new A.re(this.b.a,a,new A.bj("")))}}
A.I1.prototype={}
A.ok.prototype={
i(a){var s=A.iR(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.w8.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.Ke.prototype={
er(a){var s=A.UB(a,this.gPJ().a)
return s},
lj(a){var s=A.a9I(a,this.gll().b,null)
return s},
gll(){return B.wJ},
gPJ(){return B.hT}}
A.Kg.prototype={
bW(a){var s,r=new A.bj("")
A.Xu(a,r,this.b,null)
s=r.a
return s.charCodeAt(0)==0?s:s},
fP(a){return new A.RQ(null,this.b,a)}}
A.RQ.prototype={
D(a,b){var s,r=this
if(r.d)throw A.d(A.aB("Only one call to add allowed"))
r.d=!0
s=r.c.Aj()
A.Xu(b,s,r.b,r.a)
s.aJ()},
aJ(){}}
A.Kf.prototype={
fP(a){return new A.re(this.a,a,new A.bj(""))},
bW(a){return A.UB(a,this.a)}}
A.RT.prototype={
Dy(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.pb(a,s,r)
s=r+1
n.bB(92)
n.bB(117)
n.bB(100)
p=q>>>8&15
n.bB(p<10?48+p:87+p)
p=q>>>4&15
n.bB(p<10?48+p:87+p)
p=q&15
n.bB(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.pb(a,s,r)
s=r+1
n.bB(92)
switch(q){case 8:n.bB(98)
break
case 9:n.bB(116)
break
case 10:n.bB(110)
break
case 12:n.bB(102)
break
case 13:n.bB(114)
break
default:n.bB(117)
n.bB(48)
n.bB(48)
p=q>>>4&15
n.bB(p<10?48+p:87+p)
p=q&15
n.bB(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.pb(a,s,r)
s=r+1
n.bB(92)
n.bB(q)}}if(s===0)n.de(a)
else if(s<m)n.pb(a,s,m)},
pX(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.w8(a,null))}s.push(a)},
pa(a){var s,r,q,p,o=this
if(o.Dx(a))return
o.pX(a)
try{s=o.b.$1(a)
if(!o.Dx(s)){q=A.a_5(a,null,o.gyr())
throw A.d(q)}o.a.pop()}catch(p){r=A.a8(p)
q=A.a_5(a,r,o.gyr())
throw A.d(q)}},
Dx(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.U6(a)
return!0}else if(a===!0){r.de("true")
return!0}else if(a===!1){r.de("false")
return!0}else if(a==null){r.de("null")
return!0}else if(typeof a=="string"){r.de('"')
r.Dy(a)
r.de('"')
return!0}else if(t.j.b(a)){r.pX(a)
r.U4(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.pX(a)
s=r.U5(a)
r.a.pop()
return s}else return!1},
U4(a){var s,r,q=this
q.de("[")
s=J.aY(a)
if(s.gbg(a)){q.pa(s.j(a,0))
for(r=1;r<s.gu(a);++r){q.de(",")
q.pa(s.j(a,r))}}q.de("]")},
U5(a){var s,r,q,p,o=this,n={}
if(a.gN(a)){o.de("{}")
return!0}s=a.gu(a)*2
r=A.aK(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a_(0,new A.RU(n,r))
if(!n.b)return!1
o.de("{")
for(p='"';q<s;q+=2,p=',"'){o.de(p)
o.Dy(A.bS(r[q]))
o.de('":')
o.pa(r[q+1])}o.de("}")
return!0}}
A.RU.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:36}
A.RS.prototype={
gyr(){var s=this.c
return s instanceof A.bj?s.i(0):null},
U6(a){this.c.md(B.c.i(a))},
de(a){this.c.md(a)},
pb(a,b,c){this.c.md(B.d.a8(a,b,c))},
bB(a){this.c.bB(a)}}
A.yF.prototype={
D(a,b){this.j7(b,0,b.length,!1)},
Aj(){return new A.Tm(new A.bj(""),this)}}
A.QF.prototype={
aJ(){this.a.$0()},
bB(a){this.b.a+=A.cu(a)},
md(a){this.b.a+=a}}
A.Tm.prototype={
aJ(){if(this.a.a.length!==0)this.qp()
this.b.aJ()},
bB(a){var s=this.a.a+=A.cu(a)
if(s.length>16)this.qp()},
md(a){if(this.a.a.length!==0)this.qp()
this.b.D(0,a)},
qp(){var s=this.a,r=s.a
s.a=""
this.b.D(0,r.charCodeAt(0)==0?r:r)}}
A.t6.prototype={
aJ(){},
j7(a,b,c,d){var s,r
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r)s.a+=A.cu(a.charCodeAt(r))
else this.a.a+=a
if(d)this.aJ()},
D(a,b){this.a.a+=b},
Oz(a){return new A.Eq(new A.tk(a),this,this.a)},
Aj(){return new A.QF(this.gP1(),this.a)}}
A.Eq.prototype={
aJ(){this.a.Ql(this.c)
this.b.aJ()},
D(a,b){this.j7(b,0,b.length,!1)},
j7(a,b,c,d){this.c.a+=this.a.AA(a,b,c,!1)
if(d)this.aJ()}}
A.Q4.prototype={
er(a){return B.aW.bW(a)},
gll(){return B.b3}}
A.Q8.prototype={
bW(a){var s,r,q=A.cj(0,null,a.length),p=q-0
if(p===0)return new Uint8Array(0)
s=new Uint8Array(p*3)
r=new A.Ep(s)
if(r.xo(a,0,q)!==q)r.nv()
return B.G.bo(s,0,r.b)},
fP(a){return new A.TJ(new A.QA(a),new Uint8Array(1024))}}
A.Ep.prototype={
nv(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
zX(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.nv()
return!1}},
xo(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=a.charCodeAt(q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.zX(p,a.charCodeAt(n)))q=n}else if(o===56320){if(l.b+3>r)break
l.nv()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
s[o]=p>>>12|224
o=l.b=m+1
s[m]=p>>>6&63|128
l.b=o+1
s[o]=p&63|128}}}return q}}
A.TJ.prototype={
aJ(){if(this.a!==0){this.j7("",0,0,!0)
return}this.d.a.aJ()},
j7(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.zX(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.xo(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.nv()
else n.a=a.charCodeAt(b);++b}s.D(0,B.G.bo(r,0,n.b))
if(o)s.aJ()
n.b=0}while(b<c)
if(d)n.aJ()}}
A.Q5.prototype={
bW(a){var s=this.a,r=A.a9o(s,a,0,null)
if(r!=null)return r
return new A.tk(s).AA(a,0,null,!0)},
fP(a){return a.Oz(this.a)}}
A.tk.prototype={
AA(a,b,c,d){var s,r,q,p,o,n=this,m=A.cj(b,c,J.b1(a))
if(b===m)return""
if(t.E.b(a)){s=a
r=0}else{s=A.aao(a,b,m)
m-=b
r=b
b=0}q=n.q9(s,b,m,d)
p=n.b
if((p&1)!==0){o=A.a1c(p)
n.b=0
throw A.d(A.bn(o,a,r+n.c))}return q},
q9(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.f.bS(b+c,2)
r=q.q9(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.q9(a,s,c,d)}return q.PI(a,b,c,d)},
Ql(a){var s=this.b
this.b=0
if(s<=32)return
if(this.a)a.a+=A.cu(65533)
else throw A.d(A.bn(A.a1c(77),null,null))},
PI(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.bj(""),g=b+1,f=a[b]
$label0$0:for(s=l.a;!0;){for(;!0;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){h.a+=A.cu(i)
if(g===c)break $label0$0
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:h.a+=A.cu(k)
break
case 65:h.a+=A.cu(k);--g
break
default:q=h.a+=A.cu(k)
h.a=q+A.cu(k)
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break $label0$0
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){while(!0){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m)h.a+=A.cu(a[m])
else h.a+=A.Xe(a,g,o)
if(o===c)break $label0$0
g=p}else g=p}if(d&&j>32)if(s)h.a+=A.cu(k)
else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.F7.prototype={}
A.Lp.prototype={
$2(a,b){var s=this.b,r=this.a,q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.iR(b)
r.a=", "},
$S:95}
A.hl.prototype={
h(a,b){if(b==null)return!1
return b instanceof A.hl&&this.a===b.a&&this.b===b.b},
au(a,b){return B.f.au(this.a,b.a)},
gp(a){var s=this.a
return(s^B.f.en(s,30))&1073741823},
i(a){var s=this,r=A.a5m(A.a7Z(s)),q=A.uU(A.a7X(s)),p=A.uU(A.a7T(s)),o=A.uU(A.a7U(s)),n=A.uU(A.a7W(s)),m=A.uU(A.a7Y(s)),l=A.a5n(A.a7V(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.aO.prototype={
T(a,b){return new A.aO(this.a+b.a)},
V(a,b){return new A.aO(this.a-b.a)},
W(a,b){return new A.aO(B.c.c1(this.a*b))},
h(a,b){if(b==null)return!1
return b instanceof A.aO&&this.a===b.a},
gp(a){return B.f.gp(this.a)},
au(a,b){return B.f.au(this.a,b.a)},
i(a){var s,r,q,p,o,n=this.a,m=B.f.bS(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.f.bS(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.f.bS(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.d.lS(B.f.i(n%1e6),6,"0")}}
A.AI.prototype={
i(a){return this.C()}}
A.aX.prototype={
gmx(){return A.av(this.$thrownJsError)}}
A.iz.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iR(s)
return"Assertion failed"},
gCq(){return this.a}}
A.fT.prototype={}
A.e4.prototype={
gqm(){return"Invalid argument"+(!this.a?"(s)":"")},
gql(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.f(p),n=s.gqm()+q+o
if(!s.a)return n
return n+s.gql()+": "+A.iR(s.gtO())},
gtO(){return this.b}}
A.pm.prototype={
gtO(){return this.b},
gqm(){return"RangeError"},
gql(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.f(q):""
else if(q==null)s=": Not greater than or equal to "+A.f(r)
else if(q>r)s=": Not in inclusive range "+A.f(r)+".."+A.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.f(r)
return s}}
A.ob.prototype={
gtO(){return this.b},
gqm(){return"RangeError"},
gql(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.wK.prototype={
i(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.bj("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.iR(n)
j.a=", "}k.d.a_(0,new A.Lp(j,i))
m=A.iR(k.a)
l=i.i(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.z6.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.lL.prototype={
i(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.ev.prototype={
i(a){return"Bad state: "+this.a}}
A.uK.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iR(s)+"."}}
A.wS.prototype={
i(a){return"Out of Memory"},
gmx(){return null},
$iaX:1}
A.qa.prototype={
i(a){return"Stack Overflow"},
gmx(){return null},
$iaX:1}
A.AK.prototype={
i(a){var s=this.a
if(s==null)return"Exception"
return"Exception: "+A.f(s)},
$ic7:1}
A.hp.prototype={
i(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.d.a8(e,0,75)+"..."
return g+"\n"+e}for(r=1,q=0,p=!1,o=0;o<f;++o){n=e.charCodeAt(o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}g=r>1?g+(" (at line "+r+", character "+(f-q+1)+")\n"):g+(" (at character "+(f+1)+")\n")
m=e.length
for(o=f;o<m;++o){n=e.charCodeAt(o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(f-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-f<75){k=m-75
l=m
i=""}else{k=f-36
l=f+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}return g+j+B.d.a8(e,k,l)+i+"\n"+B.d.W(" ",f-k+j.length)+"^\n"}else return f!=null?g+(" (at offset "+A.f(f)+")"):g},
$ic7:1}
A.t.prototype={
nJ(a,b){return A.bc(this,A.o(this).k("t.E"),b)},
tC(a,b){var s=this,r=A.o(s)
if(r.k("P<t.E>").b(s))return A.ZM(s,b,r.k("t.E"))
return new A.fz(s,b,r.k("fz<t.E>"))},
eA(a,b,c){return A.oz(this,b,A.o(this).k("t.E"),c)},
eH(a,b){return new A.bp(this,b,A.o(this).k("bp<t.E>"))},
A(a,b){var s
for(s=this.gK(this);s.q();)if(J.c(s.gB(),b))return!0
return!1},
a_(a,b){var s
for(s=this.gK(this);s.q();)b.$1(s.gB())},
bm(a,b){var s,r,q=this.gK(this)
if(!q.q())return""
s=J.dj(q.gB())
if(!q.q())return s
if(b.length===0){r=s
do r+=J.dj(q.gB())
while(q.q())}else{r=s
do r=r+b+J.dj(q.gB())
while(q.q())}return r.charCodeAt(0)==0?r:r},
tT(a){return this.bm(a,"")},
j9(a,b){var s
for(s=this.gK(this);s.q();)if(b.$1(s.gB()))return!0
return!1},
c2(a,b){return A.af(this,b,A.o(this).k("t.E"))},
cQ(a){return this.c2(a,!0)},
iw(a){return A.hF(this,A.o(this).k("t.E"))},
gu(a){var s,r=this.gK(this)
for(s=0;r.q();)++s
return s},
gN(a){return!this.gK(this).q()},
gbg(a){return!this.gN(this)},
uK(a,b){return A.a8V(this,b,A.o(this).k("t.E"))},
eJ(a,b){return A.a05(this,b,A.o(this).k("t.E"))},
gJ(a){var s=this.gK(this)
if(!s.q())throw A.d(A.bz())
return s.gB()},
gY(a){var s,r=this.gK(this)
if(!r.q())throw A.d(A.bz())
do s=r.gB()
while(r.q())
return s},
bf(a,b){var s,r
A.cD(b,"index")
s=this.gK(this)
for(r=b;s.q();){if(r===0)return s.gB();--r}throw A.d(A.w3(b,b-r,this,null,"index"))},
i(a){return A.a_0(this,"(",")")}}
A.b2.prototype={
i(a){return"MapEntry("+A.f(this.a)+": "+A.f(this.b)+")"}}
A.ao.prototype={
gp(a){return A.x.prototype.gp.call(this,this)},
i(a){return"null"}}
A.x.prototype={$ix:1,
h(a,b){return this===b},
gp(a){return A.eo(this)},
i(a){return"Instance of '"+A.Ml(this)+"'"},
E(a,b){throw A.d(A.a_p(this,b))},
gbA(a){return A.q(this)},
toString(){return this.i(this)},
$0(){return this.E(this,A.H("$0","$0",0,[],[],0))},
$1(a){return this.E(this,A.H("$1","$1",0,[a],[],0))},
$2(a,b){return this.E(this,A.H("$2","$2",0,[a,b],[],0))},
$1$2$onError(a,b,c){return this.E(this,A.H("$1$2$onError","$1$2$onError",0,[a,b,c],["onError"],1))},
$3(a,b,c){return this.E(this,A.H("$3","$3",0,[a,b,c],[],0))},
$4(a,b,c,d){return this.E(this,A.H("$4","$4",0,[a,b,c,d],[],0))},
$1$1(a,b){return this.E(this,A.H("$1$1","$1$1",0,[a,b],[],1))},
$1$hostElementAttributes(a){return this.E(this,A.H("$1$hostElementAttributes","$1$hostElementAttributes",0,[a],["hostElementAttributes"],0))},
$1$highContrast(a){return this.E(this,A.H("$1$highContrast","$1$highContrast",0,[a],["highContrast"],0))},
$1$accessibilityFeatures(a){return this.E(this,A.H("$1$accessibilityFeatures","$1$accessibilityFeatures",0,[a],["accessibilityFeatures"],0))},
$3$replace$state(a,b,c){return this.E(this,A.H("$3$replace$state","$3$replace$state",0,[a,b,c],["replace","state"],0))},
$2$path(a,b){return this.E(this,A.H("$2$path","$2$path",0,[a,b],["path"],0))},
$1$growable(a){return this.E(this,A.H("$1$growable","$1$growable",0,[a],["growable"],0))},
$3$onAction$onChange(a,b,c){return this.E(this,A.H("$3$onAction$onChange","$3$onAction$onChange",0,[a,b,c],["onAction","onChange"],0))},
$1$0(a){return this.E(this,A.H("$1$0","$1$0",0,[a],[],1))},
$1$locales(a){return this.E(this,A.H("$1$locales","$1$locales",0,[a],["locales"],0))},
$1$textScaleFactor(a){return this.E(this,A.H("$1$textScaleFactor","$1$textScaleFactor",0,[a],["textScaleFactor"],0))},
$1$platformBrightness(a){return this.E(this,A.H("$1$platformBrightness","$1$platformBrightness",0,[a],["platformBrightness"],0))},
$12$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp(a,b,c,d,e,f,g,h,i,j,k,l){return this.E(this,A.H("$12$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp","$12$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp",0,[a,b,c,d,e,f,g,h,i,j,k,l],["buttons","change","device","kind","physicalX","physicalY","pressure","pressureMax","scale","signalKind","timeStamp"],0))},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp(a,b,c,d,e,f,g,h,i,j,k,l,m){return this.E(this,A.H("$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp","$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp",0,[a,b,c,d,e,f,g,h,i,j,k,l,m],["buttons","change","device","kind","physicalX","physicalY","pressure","pressureMax","scrollDeltaX","scrollDeltaY","signalKind","timeStamp"],0))},
$11$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$timeStamp(a,b,c,d,e,f,g,h,i,j,k){return this.E(this,A.H("$11$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$timeStamp","$11$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$timeStamp",0,[a,b,c,d,e,f,g,h,i,j,k],["buttons","change","device","kind","physicalX","physicalY","pressure","pressureMax","signalKind","timeStamp"],0))},
$10$buttons$change$device$physicalX$physicalY$pressure$pressureMax$signalKind$timeStamp(a,b,c,d,e,f,g,h,i,j){return this.E(this,A.H("$10$buttons$change$device$physicalX$physicalY$pressure$pressureMax$signalKind$timeStamp","$10$buttons$change$device$physicalX$physicalY$pressure$pressureMax$signalKind$timeStamp",0,[a,b,c,d,e,f,g,h,i,j],["buttons","change","device","physicalX","physicalY","pressure","pressureMax","signalKind","timeStamp"],0))},
$4$checkModifiers(a,b,c,d){return this.E(this,A.H("$4$checkModifiers","$4$checkModifiers",0,[a,b,c,d],["checkModifiers"],0))},
$12$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp(a,b,c,d,e,f,g,h,i,j,k,l){return this.E(this,A.H("$12$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp","$12$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp",0,[a,b,c,d,e,f,g,h,i,j,k,l],["buttons","change","device","kind","physicalX","physicalY","pressure","pressureMax","signalKind","tilt","timeStamp"],0))},
$1$accessibleNavigation(a){return this.E(this,A.H("$1$accessibleNavigation","$1$accessibleNavigation",0,[a],["accessibleNavigation"],0))},
$1$semanticsEnabled(a){return this.E(this,A.H("$1$semanticsEnabled","$1$semanticsEnabled",0,[a],["semanticsEnabled"],0))},
$2$priority$scheduler(a,b){return this.E(this,A.H("$2$priority$scheduler","$2$priority$scheduler",0,[a,b],["priority","scheduler"],0))},
$2$position(a,b){return this.E(this,A.H("$2$position","$2$position",0,[a,b],["position"],0))},
$1$style(a){return this.E(this,A.H("$1$style","$1$style",0,[a],["style"],0))},
$21$background$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$shadows$textBaseline$wordSpacing(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){return this.E(this,A.H("$21$background$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$shadows$textBaseline$wordSpacing","$21$background$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$shadows$textBaseline$wordSpacing",0,[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1],["background","color","decoration","decorationColor","decorationStyle","decorationThickness","fontFamily","fontFamilyFallback","fontFeatures","fontSize","fontStyle","fontVariations","fontWeight","foreground","height","leadingDistribution","letterSpacing","locale","shadows","textBaseline","wordSpacing"],0))},
$12$ellipsis$fontFamily$fontSize$fontStyle$fontWeight$height$locale$maxLines$strutStyle$textAlign$textDirection$textHeightBehavior(a,b,c,d,e,f,g,h,i,j,k,l){return this.E(this,A.H("$12$ellipsis$fontFamily$fontSize$fontStyle$fontWeight$height$locale$maxLines$strutStyle$textAlign$textDirection$textHeightBehavior","$12$ellipsis$fontFamily$fontSize$fontStyle$fontWeight$height$locale$maxLines$strutStyle$textAlign$textDirection$textHeightBehavior",0,[a,b,c,d,e,f,g,h,i,j,k,l],["ellipsis","fontFamily","fontSize","fontStyle","fontWeight","height","locale","maxLines","strutStyle","textAlign","textDirection","textHeightBehavior"],0))},
$2$aspect(a,b){return this.E(this,A.H("$2$aspect","$2$aspect",0,[a,b],["aspect"],0))},
$1$findFirstFocus(a){return this.E(this,A.H("$1$findFirstFocus","$1$findFirstFocus",0,[a],["findFirstFocus"],0))},
$1$withDelay(a){return this.E(this,A.H("$1$withDelay","$1$withDelay",0,[a],["withDelay"],0))},
$1$2$arguments(a,b,c){return this.E(this,A.H("$1$2$arguments","$1$2$arguments",0,[a,b,c],["arguments"],1))},
$3$curve$duration(a,b,c){return this.E(this,A.H("$3$curve$duration","$3$curve$duration",0,[a,b,c],["curve","duration"],0))},
$5(a,b,c,d,e){return this.E(this,A.H("$5","$5",0,[a,b,c,d,e],[],0))},
$2$reversed(a,b){return this.E(this,A.H("$2$reversed","$2$reversed",0,[a,b],["reversed"],0))},
$1$range(a){return this.E(this,A.H("$1$range","$1$range",0,[a],["range"],0))},
$2$1(a,b,c){return this.E(this,A.H("$2$1","$2$1",0,[a,b,c],[],2))},
$1$reversed(a){return this.E(this,A.H("$1$reversed","$1$reversed",0,[a],["reversed"],0))},
$1$2(a,b,c){return this.E(this,A.H("$1$2","$1$2",0,[a,b,c],[],1))},
$6$alignment$alignmentPolicy$curve$duration$targetRenderObject(a,b,c,d,e,f){return this.E(this,A.H("$6$alignment$alignmentPolicy$curve$duration$targetRenderObject","$6$alignment$alignmentPolicy$curve$duration$targetRenderObject",0,[a,b,c,d,e,f],["alignment","alignmentPolicy","curve","duration","targetRenderObject"],0))},
$2$alignmentPolicy(a,b){return this.E(this,A.H("$2$alignmentPolicy","$2$alignmentPolicy",0,[a,b],["alignmentPolicy"],0))},
$2$ignoreCurrentFocus(a,b){return this.E(this,A.H("$2$ignoreCurrentFocus","$2$ignoreCurrentFocus",0,[a,b],["ignoreCurrentFocus"],0))},
$1$5(a,b,c,d,e,f){return this.E(this,A.H("$1$5","$1$5",0,[a,b,c,d,e,f],[],1))},
$3$debugReport(a,b,c){return this.E(this,A.H("$3$debugReport","$3$debugReport",0,[a,b,c],["debugReport"],0))},
$1$padding(a){return this.E(this,A.H("$1$padding","$1$padding",0,[a],["padding"],0))},
$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(a,b,c,d,e,f,g,h){return this.E(this,A.H("$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding","$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding",0,[a,b,c,d,e,f,g,h],["removeBottomInset","removeBottomPadding","removeLeftPadding","removeRightPadding","removeTopPadding"],0))},
$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(a,b,c,d,e,f,g){return this.E(this,A.H("$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding","$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding",0,[a,b,c,d,e,f,g],["removeBottomPadding","removeLeftPadding","removeRightPadding","removeTopPadding"],0))},
$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(a,b,c,d,e,f,g,h){return this.E(this,A.H("$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding","$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding",0,[a,b,c,d,e,f,g,h],["maintainBottomViewPadding","removeBottomPadding","removeLeftPadding","removeRightPadding","removeTopPadding"],0))},
$1$bottom(a){return this.E(this,A.H("$1$bottom","$1$bottom",0,[a],["bottom"],0))},
$2$textDirection(a,b){return this.E(this,A.H("$2$textDirection","$2$textDirection",0,[a,b],["textDirection"],0))},
$1$floatingActionButtonScale(a){return this.E(this,A.H("$1$floatingActionButtonScale","$1$floatingActionButtonScale",0,[a],["floatingActionButtonScale"],0))},
$2$viewInsets$viewPadding(a,b){return this.E(this,A.H("$2$viewInsets$viewPadding","$2$viewInsets$viewPadding",0,[a,b],["viewInsets","viewPadding"],0))},
$2$padding$viewPadding(a,b){return this.E(this,A.H("$2$padding$viewPadding","$2$padding$viewPadding",0,[a,b],["padding","viewPadding"],0))},
$1$color(a){return this.E(this,A.H("$1$color","$1$color",0,[a],["color"],0))},
$3$foregroundColor$iconSize$overlayColor(a,b,c){return this.E(this,A.H("$3$foregroundColor$iconSize$overlayColor","$3$foregroundColor$iconSize$overlayColor",0,[a,b,c],["foregroundColor","iconSize","overlayColor"],0))},
$8$color$fill$grade$opacity$opticalSize$shadows$size$weight(a,b,c,d,e,f,g,h){return this.E(this,A.H("$8$color$fill$grade$opacity$opticalSize$shadows$size$weight","$8$color$fill$grade$opacity$opticalSize$shadows$size$weight",0,[a,b,c,d,e,f,g,h],["color","fill","grade","opacity","opticalSize","shadows","size","weight"],0))},
$2$value(a,b){return this.E(this,A.H("$2$value","$2$value",0,[a,b],["value"],0))},
$1$details(a){return this.E(this,A.H("$1$details","$1$details",0,[a],["details"],0))},
$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(a,b,c,d,e,f,g,h,i,j,k){return this.E(this,A.H("$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection","$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection",0,[a,b,c,d,e,f,g,h,i,j,k],["borderRadius","color","containedInkWell","controller","customBorder","onRemoved","position","radius","rectCallback","referenceBox","textDirection"],0))},
$1$context(a){return this.E(this,A.H("$1$context","$1$context",0,[a],["context"],0))},
$2$color$fontSize(a,b){return this.E(this,A.H("$2$color$fontSize","$2$color$fontSize",0,[a,b],["color","fontSize"],0))},
$2$minHeight$minWidth(a,b){return this.E(this,A.H("$2$minHeight$minWidth","$2$minHeight$minWidth",0,[a,b],["minHeight","minWidth"],0))},
$3$cancel$down$reason(a,b,c){return this.E(this,A.H("$3$cancel$down$reason","$3$cancel$down$reason",0,[a,b,c],["cancel","down","reason"],0))},
$2$down$up(a,b){return this.E(this,A.H("$2$down$up","$2$down$up",0,[a,b],["down","up"],0))},
$1$down(a){return this.E(this,A.H("$1$down","$1$down",0,[a],["down"],0))},
$3$textDirection(a,b,c){return this.E(this,A.H("$3$textDirection","$3$textDirection",0,[a,b,c],["textDirection"],0))},
$1$letterSpacing(a){return this.E(this,A.H("$1$letterSpacing","$1$letterSpacing",0,[a],["letterSpacing"],0))},
$3$code$details$message(a,b,c){return this.E(this,A.H("$3$code$details$message","$3$code$details$message",0,[a,b,c],["code","details","message"],0))},
$2$code$message(a,b){return this.E(this,A.H("$2$code$message","$2$code$message",0,[a,b],["code","message"],0))},
$5$elevationAdjustment$parentPaintClipRect$parentSemanticsClipRect$result$siblingNodes(a,b,c,d,e){return this.E(this,A.H("$5$elevationAdjustment$parentPaintClipRect$parentSemanticsClipRect$result$siblingNodes","$5$elevationAdjustment$parentPaintClipRect$parentSemanticsClipRect$result$siblingNodes",0,[a,b,c,d,e],["elevationAdjustment","parentPaintClipRect","parentSemanticsClipRect","result","siblingNodes"],0))},
$1$config(a){return this.E(this,A.H("$1$config","$1$config",0,[a],["config"],0))},
$2$descendant$rect(a,b){return this.E(this,A.H("$2$descendant$rect","$2$descendant$rect",0,[a,b],["descendant","rect"],0))},
$4$boxHeightStyle$boxWidthStyle(a,b,c,d){return this.E(this,A.H("$4$boxHeightStyle$boxWidthStyle","$4$boxHeightStyle$boxWidthStyle",0,[a,b,c,d],["boxHeightStyle","boxWidthStyle"],0))},
$2$end$start(a,b){return this.E(this,A.H("$2$end$start","$2$end$start",0,[a,b],["end","start"],0))},
$1$paragraphWidth(a){return this.E(this,A.H("$1$paragraphWidth","$1$paragraphWidth",0,[a],["paragraphWidth"],0))},
$2$0(a,b){return this.E(this,A.H("$2$0","$2$0",0,[a,b],[],2))},
$1$3$onlyFirst(a,b,c,d){return this.E(this,A.H("$1$3$onlyFirst","$1$3$onlyFirst",0,[a,b,c,d],["onlyFirst"],1))},
$1$includeChildren(a){return this.E(this,A.H("$1$includeChildren","$1$includeChildren",0,[a],["includeChildren"],0))},
$1$oldLayer(a){return this.E(this,A.H("$1$oldLayer","$1$oldLayer",0,[a],["oldLayer"],0))},
$3$oldLayer(a,b,c){return this.E(this,A.H("$3$oldLayer","$3$oldLayer",0,[a,b,c],["oldLayer"],0))},
$3$offset$oldLayer(a,b,c){return this.E(this,A.H("$3$offset$oldLayer","$3$offset$oldLayer",0,[a,b,c],["offset","oldLayer"],0))},
$4$isComplexHint$willChangeHint(a,b,c,d){return this.E(this,A.H("$4$isComplexHint$willChangeHint","$4$isComplexHint$willChangeHint",0,[a,b,c,d],["isComplexHint","willChangeHint"],0))},
$5$borderRadius$shape$textDirection(a,b,c,d,e){return this.E(this,A.H("$5$borderRadius$shape$textDirection","$5$borderRadius$shape$textDirection",0,[a,b,c,d,e],["borderRadius","shape","textDirection"],0))},
$2$oldLayer(a,b){return this.E(this,A.H("$2$oldLayer","$2$oldLayer",0,[a,b],["oldLayer"],0))},
$3$clipBehavior$oldLayer(a,b,c){return this.E(this,A.H("$3$clipBehavior$oldLayer","$3$clipBehavior$oldLayer",0,[a,b,c],["clipBehavior","oldLayer"],0))},
$2$doAntiAlias(a,b){return this.E(this,A.H("$2$doAntiAlias","$2$doAntiAlias",0,[a,b],["doAntiAlias"],0))},
$1$maxHeight(a){return this.E(this,A.H("$1$maxHeight","$1$maxHeight",0,[a],["maxHeight"],0))},
$2$parentUsesSize(a,b){return this.E(this,A.H("$2$parentUsesSize","$2$parentUsesSize",0,[a,b],["parentUsesSize"],0))},
$6(a,b,c,d,e,f){return this.E(this,A.H("$6","$6",0,[a,b,c,d,e,f],[],0))},
$1$height(a){return this.E(this,A.H("$1$height","$1$height",0,[a],["height"],0))},
$1$maxWidth(a){return this.E(this,A.H("$1$maxWidth","$1$maxWidth",0,[a],["maxWidth"],0))},
$1$width(a){return this.E(this,A.H("$1$width","$1$width",0,[a],["width"],0))},
$2$bottomNavigationBarTop$floatingActionButtonArea(a,b){return this.E(this,A.H("$2$bottomNavigationBarTop$floatingActionButtonArea","$2$bottomNavigationBarTop$floatingActionButtonArea",0,[a,b],["bottomNavigationBarTop","floatingActionButtonArea"],0))},
j(a,b){return this.E(a,A.H("j","j",0,[b],[],0))},
uT(){return this.E(this,A.H("uT","uT",0,[],[],0))},
rC(a){return this.E(this,A.H("rC","rC",0,[a],[],0))},
hZ(){return this.E(this,A.H("hZ","hZ",0,[],[],0))},
bk(){return this.E(this,A.H("bk","bk",0,[],[],0))},
nf(a){return this.E(this,A.H("nf","nf",0,[a],[],0))},
T(a,b){return this.E(a,A.H("T","T",0,[b],[],0))},
V(a,b){return this.E(a,A.H("V","V",0,[b],[],0))},
W(a,b){return this.E(a,A.H("W","W",0,[b],[],0))},
gu(a){return this.E(a,A.H("gu","gu",1,[],[],0))},
gbp(){return this.E(this,A.H("gbp","gbp",1,[],[],0))},
gdm(){return this.E(this,A.H("gdm","gdm",1,[],[],0))},
gaW(){return this.E(this,A.H("gaW","gaW",1,[],[],0))},
gdO(){return this.E(this,A.H("gdO","gdO",1,[],[],0))},
sdm(a){return this.E(this,A.H("sdm","sdm",2,[a],[],0))},
saW(a){return this.E(this,A.H("saW","saW",2,[a],[],0))},
sdO(a){return this.E(this,A.H("sdO","sdO",2,[a],[],0))},
sbp(a){return this.E(this,A.H("sbp","sbp",2,[a],[],0))}}
A.DG.prototype={
i(a){return""},
$idA:1}
A.qb.prototype={
gBa(){var s,r=this.b
if(r==null)r=$.xr.$0()
s=r-this.a
if($.Fq()===1e6)return s
return s*1000},
vH(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.xr.$0()-r)
s.b=null}},
fe(){var s=this.b
this.a=s==null?$.xr.$0():s}}
A.bj.prototype={
gu(a){return this.a.length},
md(a){this.a+=A.f(a)},
bB(a){this.a+=A.cu(a)},
Dz(a){this.a+=A.f(a)+"\n"},
U8(){return this.Dz("")},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.Q0.prototype={
$2(a,b){throw A.d(A.bn("Illegal IPv4 address, "+a,this.a,b))},
$S:97}
A.Q1.prototype={
$2(a,b){throw A.d(A.bn("Illegal IPv6 address, "+a,this.a,b))},
$S:98}
A.Q2.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=A.hc(B.d.a8(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:99}
A.ti.prototype={
gkI(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?""+s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.f(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n!==$&&A.az()
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gut(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.d.eM(s,1)
r=s.length===0?B.bU:A.KH(new A.an(A.a(s.split("/"),t.s),A.ac9(),t.nf),t.N)
q.x!==$&&A.az()
p=q.x=r}return p},
gp(a){var s,r=this,q=r.y
if(q===$){s=B.d.gp(r.gkI())
r.y!==$&&A.az()
r.y=s
q=s}return q},
giq(){var s,r,q=this,p=q.Q
if(p===$){s=q.f
r=A.aai(s==null?"":s)
q.Q!==$&&A.az()
q.Q=r
p=r}return p},
gDv(){return this.b},
gtM(){var s=this.c
if(s==null)return""
if(B.d.bw(s,"["))return B.d.a8(s,1,s.length-1)
return s},
guu(){var s=this.d
return s==null?A.a0Y(this.a):s},
guw(){var s=this.f
return s==null?"":s},
ghn(){var s=this.r
return s==null?"":s},
gBS(){return this.a.length!==0},
gBO(){return this.c!=null},
gBR(){return this.f!=null},
gBP(){return this.r!=null},
i(a){return this.gkI()},
h(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.eP.b(b))if(q.a===b.gjO())if(q.c!=null===b.gBO())if(q.b===b.gDv())if(q.gtM()===b.gtM())if(q.guu()===b.guu())if(q.e===b.gfb()){s=q.f
r=s==null
if(!r===b.gBR()){if(r)s=""
if(s===b.guw()){s=q.r
r=s==null
if(!r===b.gBP()){if(r)s=""
s=s===b.ghn()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$iz7:1,
gjO(){return this.a},
gfb(){return this.e}}
A.TG.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=A.Eo(B.cW,a,B.C,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=A.Eo(B.cW,b,B.C,!0)}},
$S:100}
A.TF.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.at(b),r=this.a;s.q();)r.$2(a,s.gB())},
$S:74}
A.TH.prototype={
$3(a,b,c){var s,r,q,p
if(a===c)return
s=this.a
r=this.b
if(b<0){q=A.mv(s,a,c,r,!0)
p=""}else{q=A.mv(s,a,b,r,!0)
p=A.mv(s,b+1,c,r,!0)}J.fl(this.c.bt(q,A.aca()),p)},
$S:101}
A.Q_.prototype={
gfM(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.d.om(m,"?",s)
q=m.length
if(r>=0){p=A.tj(m,r+1,q,B.cY,!1,!1)
q=r}else p=n
m=o.c=new A.Al("data","",n,n,A.tj(m,s,q,B.i0,!1,!1),p,n)}return m},
i(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.U9.prototype={
$2(a,b){var s=this.a[a]
B.G.Qf(s,0,96,b)
return s},
$S:102}
A.Ua.prototype={
$3(a,b,c){var s,r
for(s=b.length,r=0;r<s;++r)a[b.charCodeAt(r)^96]=c},
$S:66}
A.Ub.prototype={
$3(a,b,c){var s,r
for(s=b.charCodeAt(0),r=b.charCodeAt(1);s<=r;++s)a[(s^96)>>>0]=c},
$S:66}
A.Dy.prototype={
gBS(){return this.b>0},
gBO(){return this.c>0},
gRl(){return this.c>0&&this.d+1<this.e},
gBR(){return this.f<this.r},
gBP(){return this.r<this.a.length},
gjO(){var s=this.w
return s==null?this.w=this.Iw():s},
Iw(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.d.bw(r.a,"http"))return"http"
if(q===5&&B.d.bw(r.a,"https"))return"https"
if(s&&B.d.bw(r.a,"file"))return"file"
if(q===7&&B.d.bw(r.a,"package"))return"package"
return B.d.a8(r.a,0,q)},
gDv(){var s=this.c,r=this.b+3
return s>r?B.d.a8(this.a,r,s-1):""},
gtM(){var s=this.c
return s>0?B.d.a8(this.a,s,this.d):""},
guu(){var s,r=this
if(r.gRl())return A.hc(B.d.a8(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.d.bw(r.a,"http"))return 80
if(s===5&&B.d.bw(r.a,"https"))return 443
return 0},
gfb(){return B.d.a8(this.a,this.e,this.f)},
guw(){var s=this.f,r=this.r
return s<r?B.d.a8(this.a,s+1,r):""},
ghn(){var s=this.r,r=this.a
return s<r.length?B.d.eM(r,s+1):""},
gut(){var s,r,q=this.e,p=this.f,o=this.a
if(B.d.cu(o,"/",q))++q
if(q===p)return B.bU
s=A.a([],t.s)
for(r=q;r<p;++r)if(o.charCodeAt(r)===47){s.push(B.d.a8(o,q,r))
q=r+1}s.push(B.d.a8(o,q,p))
return A.KH(s,t.N)},
giq(){if(this.f>=this.r)return B.n3
var s=A.a1b(this.guw())
s.Dl(A.a24())
return A.W9(s,t.N,t.E4)},
gp(a){var s=this.x
return s==null?this.x=B.d.gp(this.a):s},
h(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.i(0)},
i(a){return this.a},
$iz7:1}
A.Al.prototype={}
A.i1.prototype={}
A.PE.prototype={
my(a){A.kh(a,"name")
this.d.push(null)
return},
Bt(){var s=this.d
if(s.length===0)throw A.d(A.aB("Uneven calls to start and finish"))
if(s.pop()==null)return
A.aar(null)}}
A.Vj.prototype={
$1(a){var s,r,q,p
if(A.a1F(a))return a
s=this.a
if(s.P(a))return s.j(0,a)
if(t.F.b(a)){r={}
s.l(0,a,r)
for(s=a.gb2(),s=s.gK(s);s.q();){q=s.gB()
r[q]=this.$1(a.j(0,q))}return r}else if(t.n0.b(a)){p=[]
s.l(0,a,p)
B.b.I(p,J.mG(a,this,t.z))
return p}else return a},
$S:65}
A.Vv.prototype={
$1(a){return this.a.d2(a)},
$S:18}
A.Vw.prototype={
$1(a){if(a==null)return this.a.nN(new A.wL(a===undefined))
return this.a.nN(a)},
$S:18}
A.UU.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.a1E(a))return a
s=this.a
a.toString
if(s.P(a))return s.j(0,a)
if(a instanceof Date){r=a.getTime()
if(Math.abs(r)<=864e13)s=!1
else s=!0
if(s)A.R(A.c3("DateTime is outside valid range: "+r,null))
A.e2(!0,"isUtc",t.y)
return new A.hl(r,!0)}if(a instanceof RegExp)throw A.d(A.c3("structured clone of RegExp",null))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.k6(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.w(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bt(n),p=s.gK(n);p.q();)m.push(A.Y2(p.gB()))
for(l=0;l<s.gu(n);++l){k=s.j(n,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=a.length
for(s=J.aY(i),l=0;l<h;++l)o.push(this.$1(s.j(i,l)))
return o}return a},
$S:65}
A.wL.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$ic7:1}
A.vm.prototype={}
A.uA.prototype={
C(){return"ClipOp."+this.b}}
A.xc.prototype={
C(){return"PathFillType."+this.b}}
A.QC.prototype={
e8(a,b){A.acN(this.a,this.b,a,b)}}
A.t3.prototype={
cM(a){A.tZ(this.b,this.c,a)}}
A.fY.prototype={
gu(a){var s=this.a
return s.gu(s)},
T0(a){var s,r,q=this
if(!q.d&&q.e!=null){q.e.e8(a.a,a.gC3())
return!1}s=q.c
if(s<=0)return!0
r=q.xi(s-1)
q.a.dJ(a)
return r},
xi(a){var s,r,q
for(s=this.a,r=!1;(s.c-s.b&s.a.length-1)>>>0>a;r=!0){q=s.m_()
A.tZ(q.b,q.c,null)}return r},
J2(){var s=this,r=s.a
if(!r.gN(r)&&s.e!=null){r=r.m_()
s.e.e8(r.a,r.gC3())
A.hg(s.gxh())}else s.d=!1}}
A.Gv.prototype={
T1(a,b,c){this.a.bt(a,new A.Gw()).T0(new A.t3(b,c,$.a_))},
Ef(a,b){var s=this.a.bt(a,new A.Gx()),r=s.e
s.e=new A.QC(b,$.a_)
if(r==null&&!s.d){s.d=!0
A.hg(s.gxh())}},
QK(a){var s,r,q,p,o,n,m,l="Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (arguments must be a two-element list, channel name and new capacity)",k="Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (arguments must be a two-element list, channel name and flag state)",j=A.cC(a.buffer,a.byteOffset,a.byteLength)
if(j[0]===7){s=j[1]
if(s>=254)throw A.d(A.bF("Unrecognized message sent to dev.flutter/channel-buffers (method name too long)"))
r=2+s
q=B.C.er(B.G.bo(j,2,r))
switch(q){case"resize":if(j[r]!==12)throw A.d(A.bF(l))
p=r+1
if(j[p]<2)throw A.d(A.bF(l));++p
if(j[p]!==7)throw A.d(A.bF("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (first argument must be a string)"));++p
o=j[p]
if(o>=254)throw A.d(A.bF("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (channel name must be less than 254 characters long)"));++p
r=p+o
n=B.C.er(B.G.bo(j,p,r))
if(j[r]!==3)throw A.d(A.bF("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (second argument must be an integer in the range 0 to 2147483647)"))
this.D2(n,a.getUint32(r+1,B.E===$.bT()))
break
case"overflow":if(j[r]!==12)throw A.d(A.bF(k))
p=r+1
if(j[p]<2)throw A.d(A.bF(k));++p
if(j[p]!==7)throw A.d(A.bF("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (first argument must be a string)"));++p
o=j[p]
if(o>=254)throw A.d(A.bF("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (channel name must be less than 254 characters long)"));++p
r=p+o
B.C.er(B.G.bo(j,p,r))
r=j[r]
if(r!==1&&r!==2)throw A.d(A.bF("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (second argument must be a boolean)"))
break
default:throw A.d(A.bF("Unrecognized method '"+q+"' sent to dev.flutter/channel-buffers"))}}else{m=A.a(B.C.er(j).split("\r"),t.s)
if(m.length===3&&J.c(m[0],"resize"))this.D2(m[1],A.hc(m[2],null))
else throw A.d(A.bF("Unrecognized message "+A.f(m)+" sent to dev.flutter/channel-buffers."))}},
D2(a,b){var s=this.a,r=s.j(0,a)
if(r==null)s.l(0,a,new A.fY(A.hG(b,t.mt),b))
else{r.c=b
r.xi(b)}}}
A.Gw.prototype={
$0(){return new A.fY(A.hG(1,t.mt),1)},
$S:64}
A.Gx.prototype={
$0(){return new A.fY(A.hG(1,t.mt),1)},
$S:64}
A.wN.prototype={
h(a,b){if(b==null)return!1
return b instanceof A.wN&&b.a===this.a&&b.b===this.b},
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"OffsetBase("+B.c.R(this.a,1)+", "+B.c.R(this.b,1)+")"}}
A.v.prototype={
gc7(){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
go4(){var s=this.a,r=this.b
return s*s+r*r},
V(a,b){return new A.v(this.a-b.a,this.b-b.b)},
T(a,b){return new A.v(this.a+b.a,this.b+b.b)},
W(a,b){return new A.v(this.a*b,this.b*b)},
eg(a,b){return new A.v(this.a/b,this.b/b)},
h(a,b){if(b==null)return!1
return b instanceof A.v&&b.a===this.a&&b.b===this.b},
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"Offset("+B.c.R(this.a,1)+", "+B.c.R(this.b,1)+")"}}
A.N.prototype={
gN(a){return this.a<=0||this.b<=0},
V(a,b){var s=this
if(b instanceof A.N)return new A.v(s.a-b.a,s.b-b.b)
if(b instanceof A.v)return new A.N(s.a-b.a,s.b-b.b)
throw A.d(A.c3(b,null))},
T(a,b){return new A.N(this.a+b.a,this.b+b.b)},
W(a,b){return new A.N(this.a*b,this.b*b)},
eg(a,b){return new A.N(this.a/b,this.b/b)},
h5(a){return new A.v(a.a+this.a/2,a.b+this.b/2)},
OJ(a){return new A.v(a.a+this.a,a.b+this.b)},
A(a,b){var s=b.a
if(s>=0)if(s<this.a){s=b.b
s=s>=0&&s<this.b}else s=!1
else s=!1
return s},
h(a,b){if(b==null)return!1
return b instanceof A.N&&b.a===this.a&&b.b===this.b},
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"Size("+B.c.R(this.a,1)+", "+B.c.R(this.b,1)+")"}}
A.A.prototype={
gC8(a){var s=this
return isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)},
gN(a){var s=this
return s.a>=s.c||s.b>=s.d},
cV(a){var s=this,r=a.a,q=a.b
return new A.A(s.a+r,s.b+q,s.c+r,s.d+q)},
aA(a,b){var s=this
return new A.A(s.a+a,s.b+b,s.c+a,s.d+b)},
cC(a){var s=this
return new A.A(s.a-a,s.b-a,s.c+a,s.d+a)},
dC(a){var s=this
return new A.A(Math.max(s.a,a.a),Math.max(s.b,a.b),Math.min(s.c,a.c),Math.min(s.d,a.d))},
tn(a){var s=this
return new A.A(Math.min(s.a,a.a),Math.min(s.b,a.b),Math.max(s.c,a.c),Math.max(s.d,a.d))},
geI(){var s=this
return Math.min(Math.abs(s.c-s.a),Math.abs(s.d-s.b))},
gaf(){var s=this,r=s.a,q=s.b
return new A.v(r+(s.c-r)/2,q+(s.d-q)/2)},
A(a,b){var s=this,r=b.a
if(r>=s.a)if(r<s.c){r=b.b
r=r>=s.b&&r<s.d}else r=!1
else r=!1
return r},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.q(s)!==J.B(b))return!1
return b instanceof A.A&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"Rect.fromLTRB("+B.c.R(s.a,1)+", "+B.c.R(s.b,1)+", "+B.c.R(s.c,1)+", "+B.c.R(s.d,1)+")"}}
A.as.prototype={
dX(a,b){return new A.as(A.XY(this.a,b.a,1/0),A.XY(this.b,b.b,1/0))},
V(a,b){return new A.as(this.a-b.a,this.b-b.b)},
T(a,b){return new A.as(this.a+b.a,this.b+b.b)},
W(a,b){return new A.as(this.a*b,this.b*b)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.q(s)!==J.B(b))return!1
return b instanceof A.as&&b.a===s.a&&b.b===s.b},
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this.a,r=this.b
return s===r?"Radius.circular("+B.c.R(s,1)+")":"Radius.elliptical("+B.c.R(s,1)+", "+B.c.R(r,1)+")"}}
A.ep.prototype={
cV(a){var s=this,r=a.a,q=a.b
return new A.ep(s.a+r,s.b+q,s.c+r,s.d+q,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,!1)},
cC(a){var s=this,r=Math.max(0,s.e+a),q=Math.max(0,s.f+a),p=Math.max(0,s.r+a),o=Math.max(0,s.w+a),n=Math.max(0,s.z+a),m=Math.max(0,s.Q+a)
return new A.ep(s.a-a,s.b-a,s.c+a,s.d+a,r,q,p,o,Math.max(0,s.x+a),Math.max(0,s.y+a),n,m,!1)},
mV(a,b,c,d){var s=b+c
if(s>d&&s!==0)return Math.min(a,d/s)
return a},
mm(){var s=this,r=s.c,q=s.a,p=Math.abs(r-q),o=s.d,n=s.b,m=Math.abs(o-n),l=s.Q,k=s.f,j=s.e,i=s.r,h=s.w,g=s.y,f=s.x,e=s.z,d=s.mV(s.mV(s.mV(s.mV(1,l,k,m),j,i,p),h,g,m),f,e,p)
if(d<1)return new A.ep(q,n,r,o,j*d,k*d,i*d,h*d,f*d,g*d,e*d,l*d,!1)
return new A.ep(q,n,r,o,j,k,i,h,f,g,e,l,!1)},
A(a,b){var s,r,q,p,o,n,m=this,l=b.a,k=m.a
if(!(l<k))if(!(l>=m.c)){s=b.b
s=s<m.b||s>=m.d}else s=!0
else s=!0
if(s)return!1
r=m.mm()
q=r.e
if(l<k+q&&b.b<m.b+r.f){p=l-k-q
o=r.f
n=b.b-m.b-o}else{s=m.c
q=r.r
if(l>s-q&&b.b<m.b+r.w){p=l-s+q
o=r.w
n=b.b-m.b-o}else{q=r.x
if(l>s-q&&b.b>m.d-r.y){p=l-s+q
o=r.y
n=b.b-m.d+o}else{q=r.z
if(l<k+q&&b.b>m.d-r.Q){p=l-k-q
o=r.Q
n=b.b-m.d+o}else return!0}}}p/=q
n/=o
if(p*p+n*n>1)return!1
return!0},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.q(s)!==J.B(b))return!1
return b instanceof A.ep&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.z===s.z&&b.Q===s.Q&&b.x===s.x&&b.y===s.y},
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.z,s.Q,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r,q=this,p=B.c.R(q.a,1)+", "+B.c.R(q.b,1)+", "+B.c.R(q.c,1)+", "+B.c.R(q.d,1),o=q.e,n=q.f,m=q.r,l=q.w
if(new A.as(o,n).h(0,new A.as(m,l))){s=q.x
r=q.y
s=new A.as(m,l).h(0,new A.as(s,r))&&new A.as(s,r).h(0,new A.as(q.z,q.Q))}else s=!1
if(s){if(o===n)return"RRect.fromLTRBR("+p+", "+B.c.R(o,1)+")"
return"RRect.fromLTRBXY("+p+", "+B.c.R(o,1)+", "+B.c.R(n,1)+")"}return"RRect.fromLTRBAndCorners("+p+", topLeft: "+new A.as(o,n).i(0)+", topRight: "+new A.as(m,l).i(0)+", bottomRight: "+new A.as(q.x,q.y).i(0)+", bottomLeft: "+new A.as(q.z,q.Q).i(0)+")"}}
A.VC.prototype={
$1(a){return this.DD(a)},
$0(){return this.$1(null)},
$C:"$1",
$R:0,
$D(){return[null]},
DD(a){var s=0,r=A.W(t.H)
var $async$$1=A.X(function(b,c){if(b===1)return A.T(c,r)
while(true)switch(s){case 0:s=2
return A.a4(A.Vc(a),$async$$1)
case 2:return A.U(null,r)}})
return A.V($async$$1,r)},
$S:106}
A.VD.prototype={
$0(){var s=0,r=A.W(t.P),q=this
var $async$$0=A.X(function(a,b){if(a===1)return A.T(b,r)
while(true)switch(s){case 0:q.a.$0()
s=2
return A.a4(A.Y7(),$async$$0)
case 2:q.b.$0()
return A.U(null,r)}})
return A.V($async$$0,r)},
$S:73}
A.ol.prototype={
C(){return"KeyEventType."+this.b}}
A.d7.prototype={
LC(){var s=this.d
return"0x"+B.f.hB(s,16)+new A.Ki(B.c.dA(s/4294967296)).$0()},
Jc(){var s=this.e
if(s==null)return"<none>"
switch(s){case"\n":return'"\\n"'
case"\t":return'"\\t"'
case"\r":return'"\\r"'
case"\b":return'"\\b"'
case"\f":return'"\\f"'
default:return'"'+s+'"'}},
MK(){var s=this.e
if(s==null)return""
return" (0x"+new A.an(new A.kr(s),new A.Kj(),t.sU.k("an<ap.E,u>")).bm(0," ")+")"},
i(a){var s=this,r=A.a6I(s.b),q=B.f.hB(s.c,16),p=s.LC(),o=s.Jc(),n=s.MK(),m=s.f?", synthesized":""
return"KeyData(type: "+r+", physical: 0x"+q+", logical: "+p+", character: "+o+n+m+")"}}
A.Ki.prototype={
$0(){switch(this.a){case 0:return" (Unicode)"
case 1:return" (Unprintable)"
case 2:return" (Flutter)"
case 23:return" (Web)"}return""},
$S:20}
A.Kj.prototype={
$1(a){return B.d.lS(B.f.hB(a,16),2,"0")},
$S:107}
A.K.prototype={
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.K&&b.gn()===this.gn()},
gp(a){return B.f.gp(this.gn())},
i(a){return"Color(0x"+B.d.lS(B.f.hB(this.gn(),16),8,"0")+")"},
gn(){return this.a}}
A.yG.prototype={
C(){return"StrokeCap."+this.b}}
A.OA.prototype={
C(){return"StrokeJoin."+this.b}}
A.xa.prototype={
C(){return"PaintingStyle."+this.b}}
A.uo.prototype={
C(){return"BlendMode."+this.b}}
A.kq.prototype={
C(){return"Clip."+this.b}}
A.Ga.prototype={
C(){return"BlurStyle."+this.b}}
A.oA.prototype={
h(a,b){if(b==null)return!1
return b instanceof A.oA&&b.a===this.a&&b.b===this.b},
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"MaskFilter.blur("+this.a.i(0)+", "+B.c.R(this.b,1)+")"}}
A.LZ.prototype={}
A.hq.prototype={
i(a){var s,r=A.q(this).i(0),q=this.a,p=A.c5(q[2],0),o=q[1],n=A.c5(o,0),m=q[4],l=A.c5(m,0),k=A.c5(q[3],0)
o=A.c5(o,0)
s=q[0]
return r+"(buildDuration: "+(A.f((p.a-n.a)*0.001)+"ms")+", rasterDuration: "+(A.f((l.a-k.a)*0.001)+"ms")+", vsyncOverhead: "+(A.f((o.a-A.c5(s,0).a)*0.001)+"ms")+", totalSpan: "+(A.f((A.c5(m,0).a-A.c5(s,0).a)*0.001)+"ms")+", layerCacheCount: "+q[6]+", layerCacheBytes: "+q[7]+", pictureCacheCount: "+q[8]+", pictureCacheBytes: "+q[9]+", frameNumber: "+B.b.gY(q)+")"}}
A.eH.prototype={
C(){return"AppLifecycleState."+this.b}}
A.mS.prototype={
C(){return"AppExitResponse."+this.b}}
A.hH.prototype={
gjB(){var s=this.a,r=B.ad.j(0,s)
return r==null?s:r},
gnS(){var s=this.c,r=B.ap.j(0,s)
return r==null?s:r},
h(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(b instanceof A.hH)if(b.gjB()===this.gjB())s=b.gnS()==this.gnS()
else s=!1
else s=!1
return s},
gp(a){return A.D(this.gjB(),null,this.gnS(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.ML("_")},
ML(a){var s=this.gjB()
if(this.c!=null)s+=a+A.f(this.gnS())
return s.charCodeAt(0)==0?s:s}}
A.H_.prototype={
C(){return"DartPerformanceMode."+this.b}}
A.lo.prototype={}
A.fJ.prototype={
C(){return"PointerChange."+this.b}}
A.dW.prototype={
C(){return"PointerDeviceKind."+this.b}}
A.lc.prototype={
C(){return"PointerSignalKind."+this.b}}
A.f3.prototype={
i(a){return"PointerData(x: "+A.f(this.x)+", y: "+A.f(this.y)+")"}}
A.ph.prototype={}
A.br.prototype={
i(a){return"SemanticsAction."+this.b}}
A.bo.prototype={
i(a){return"SemanticsFlag."+this.b}}
A.O9.prototype={}
A.hT.prototype={
C(){return"PlaceholderAlignment."+this.b}}
A.dM.prototype={
i(a){var s=B.A4.j(0,this.a)
s.toString
return s}}
A.ex.prototype={
C(){return"TextAlign."+this.b}}
A.qg.prototype={
C(){return"TextBaseline."+this.b}}
A.qj.prototype={
h(a,b){if(b==null)return!1
return b instanceof A.qj&&b.a===this.a},
gp(a){return B.f.gp(this.a)},
i(a){var s,r=this.a
if(r===0)return"TextDecoration.none"
s=A.a([],t.s)
if((r&1)!==0)s.push("underline")
if((r&2)!==0)s.push("overline")
if((r&4)!==0)s.push("lineThrough")
if(s.length===1)return"TextDecoration."+s[0]
return"TextDecoration.combine(["+B.b.bm(s,", ")+"])"}}
A.OT.prototype={
C(){return"TextDecorationStyle."+this.b}}
A.yP.prototype={
h(a,b){var s
if(b==null)return!1
if(J.B(b)!==A.q(this))return!1
if(b instanceof A.yP)s=b.c===this.c
else s=!1
return s},
gp(a){return A.D(!0,!0,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"TextHeightBehavior(applyHeightToFirstAscent: true, applyHeightToLastDescent: true, leadingDistribution: "+this.c.i(0)+")"}}
A.f6.prototype={
C(){return"TextDirection."+this.b}}
A.cS.prototype={
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.cS&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"TextBox.fromLTRBD("+B.c.R(s.a,1)+", "+B.c.R(s.b,1)+", "+B.c.R(s.c,1)+", "+B.c.R(s.d,1)+", "+s.e.i(0)+")"}}
A.yO.prototype={
C(){return"TextAffinity."+this.b}}
A.e0.prototype={
h(a,b){if(b==null)return!1
if(J.B(b)!==A.q(this))return!1
return b instanceof A.e0&&b.a===this.a&&b.b===this.b},
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return A.q(this).i(0)+"(offset: "+this.a+", affinity: "+this.b.i(0)+")"}}
A.f7.prototype={
gib(){return this.a>=0&&this.b>=0},
h(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.f7&&b.a===this.a&&b.b===this.b},
gp(a){return A.D(B.f.gp(this.a),B.f.gp(this.b),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"TextRange(start: "+this.a+", end: "+this.b+")"}}
A.hR.prototype={
h(a,b){if(b==null)return!1
if(J.B(b)!==A.q(this))return!1
return b instanceof A.hR&&b.a===this.a},
gp(a){return B.c.gp(this.a)},
i(a){return A.q(this).i(0)+"(width: "+A.f(this.a)+")"}}
A.Gc.prototype={
C(){return"BoxHeightStyle."+this.b}}
A.Gd.prototype={
C(){return"BoxWidthStyle."+this.b}}
A.yX.prototype={
C(){return"TileMode."+this.b}}
A.iX.prototype={}
A.yq.prototype={}
A.km.prototype={
C(){return"Brightness."+this.b}}
A.vS.prototype={
h(a,b){var s
if(b==null)return!1
if(J.B(b)!==A.q(this))return!1
if(b instanceof A.vS)s=!0
else s=!1
return s},
gp(a){return A.D(null,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"GestureSettings(physicalTouchSlop: null, physicalDoubleTapSlop: null)"}}
A.Gg.prototype={
vi(a){return $.a1G.bt(a,new A.Gh(a))}}
A.Gh.prototype={
$0(){return t.e.a(A.aT(this.a))},
$S:41}
A.Ju.prototype={
rI(a){var s=new A.Jx(a)
A.bv(self.window,"popstate",B.fE.vi(s),null)
return new A.Jw(this,s)},
DP(){var s=self.window.location.hash
if(s.length===0||s==="#")return"/"
return B.d.eM(s,1)},
vl(){return A.Zo(self.window.history)},
CJ(a){var s,r=a.length===0||a==="/"?"":"#"+a,q=self.window.location.pathname
if(q==null)q=null
q.toString
s=self.window.location.search
if(s==null)s=null
s.toString
return q+s+r},
CR(a,b,c){var s=this.CJ(c),r=self.window.history,q=A.O(a)
if(q==null)q=t.K.a(q)
r.pushState(q,b,s)},
it(a,b,c){var s,r=this.CJ(c),q=self.window.history
if(a==null)s=null
else{s=A.O(a)
if(s==null)s=t.K.a(s)}q.replaceState(s,b,r)},
mi(a){var s=self.window.history
s.go(a)
return this.Od()},
Od(){var s=new A.ac($.a_,t.D),r=A.by("unsubscribe")
r.b=this.rI(new A.Jv(r,new A.bl(s,t.Q)))
return s}}
A.Jx.prototype={
$1(a){var s=t.e.a(a).state
if(s==null)s=null
else{s=A.Y2(s)
s.toString}this.a.$1(s)},
$S:108}
A.Jw.prototype={
$0(){var s=this.b
A.eS(self.window,"popstate",B.fE.vi(s),null)
$.a1G.v(0,s)
return null},
$S:0}
A.Jv.prototype={
$1(a){this.a.b5().$0()
this.b.h7()},
$S:2}
A.oO.prototype={
an(){return new A.BN(B.m)}}
A.BN.prototype={
aN(){this.d=A.acS("home",0)
this.ba()},
M(a){var s=this.d
s===$&&A.e()
return new A.kK(s,new A.Sl(),null,t.fN)}}
A.Sl.prototype={
$2(a,b){var s
if(b.a===B.cA){s=b.c
if(s!=null)return A.a0f("Error: "+A.f(s))
A.abY("home")
return C.a7d("\u6d4b\u8bd5")}return B.v6},
$S:109}
A.vW.prototype={
mO(a){var s=this.b[a]
if(s==null){this.$ti.c.a(null)
s=null}return s},
gu(a){return this.c},
i(a){var s=this.b
return A.a_0(A.dB(s,0,A.e2(this.c,"count",t.S),A.ad(s).c),"(",")")},
HO(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=b*2+2
for(s=j.a,r=j.$ti.c;q=j.c,i<q;b=l){p=i-1
q=j.b
o=q[p]
if(o==null){r.a(null)
o=null}n=q[i]
if(n==null){r.a(null)
n=null}if(s.$2(o,n)<0){m=o
l=p}else{m=n
l=i}if(s.$2(a,m)<=0){j.b[b]=a
return}j.b[b]=m
i=l*2+2}p=i-1
if(p<q){k=j.mO(p)
if(s.$2(a,k)>0){j.b[b]=k
b=p}}j.b[b]=a}}
A.cZ.prototype={
C(){return"AnimationStatus."+this.b}}
A.bq.prototype={
i(a){return"<optimized out>#"+A.aZ(this)+"("+this.p5()+")"},
p5(){switch(this.gak().a){case 1:return"\u25b6"
case 2:return"\u25c0"
case 3:return"\u23ed"
case 0:return"\u23ee"}}}
A.lT.prototype={
C(){return"_AnimationDirection."+this.b}}
A.FO.prototype={
C(){return"AnimationBehavior."+this.b}}
A.mK.prototype={
gn(){var s=this.x
s===$&&A.e()
return s},
sn(a){var s=this
s.iI()
s.xY(a)
s.b3()
s.kc()},
xY(a){var s=this,r=s.x=A.M(a,0,1)
if(r===0)s.Q=B.z
else if(r===1)s.Q=B.V
else s.Q=s.z===B.at?B.aC:B.a8},
gak(){var s=this.Q
s===$&&A.e()
return s},
Qr(a){this.z=B.at
if(a!=null)this.sn(a)
return this.wt(1)},
fD(){return this.Qr(null)},
D7(a){this.z=B.fh
return this.wt(0)},
m2(){return this.D7(null)},
pR(a,b,c){var s,r,q,p,o,n=this,m=$.X7.Bl$
m===$&&A.e()
if((m.a&4)!==0){switch(0){case 0:break}s=0.05}else s=1
if(c==null){if(isFinite(1)){m=n.x
m===$&&A.e()
r=Math.abs(a-m)/1}else r=1
if(n.z===B.fh&&n.f!=null){m=n.f
m.toString
q=m}else{m=n.e
m.toString
q=m}p=new A.aO(B.c.c1(q.a*r))}else{m=n.x
m===$&&A.e()
p=a===m?B.v:c}n.iI()
m=p.a
if(m===B.v.a){m=n.x
m===$&&A.e()
if(m!==a){n.x=A.M(a,0,1)
n.b3()}n.Q=n.z===B.at?B.V:B.z
n.kc()
return A.Xi()}o=n.x
o===$&&A.e()
return n.zc(new A.RO(m*s/1e6,o,a,b,B.t0))},
wt(a){return this.pR(a,B.aw,null)},
D1(){var s,r,q=this,p=q.e
q.iI()
s=q.x
s===$&&A.e()
r=p.a/1e6
return q.zc(new A.SO(0,1,!1,q.gIV(),r,s/1*r,B.t0))},
IW(a){this.z=a
this.Q=a===B.at?B.aC:B.a8
this.kc()},
zc(a){var s,r,q,p=this
p.w=a
p.x=A.M(a.va(0),0,1)
s=p.r
s.a=new A.jF(new A.bl(new A.ac($.a_,t.D),t.Q))
if(!s.b)r=s.e==null
else r=!1
if(r){r=$.cy
r.toString
s.e=r.mn(s.grm(),!1)}r=$.cy
q=r.k1$.a
if(q>0&&q<4){r=r.p2$
r.toString
s.c=r}s=s.a
s.toString
p.Q=p.z===B.at?B.aC:B.a8
p.kc()
return s},
mA(a){this.w=null
this.r.mA(a)},
iI(){return this.mA(!0)},
m(){var s=this
s.r.m()
s.r=null
s.bD$.L(0)
s.c8$.L(0)
s.pA()},
kc(){var s=this,r=s.Q
r===$&&A.e()
if(s.as!==r){s.as=r
s.lQ(r)}},
HD(a){var s=this,r=a.a/1e6
s.x=A.M(s.w.va(r),0,1)
if(s.w.C7(r)){s.Q=s.z===B.at?B.V:B.z
s.mA(!1)}s.b3()
s.kc()},
p5(){var s,r=this.r,q=r==null,p=!q&&r.a!=null?"":"; paused"
if(q)s="; DISPOSED"
else s=r.b?"; silenced":""
r=this.pz()
q=this.x
q===$&&A.e()
return r+" "+B.c.R(q,3)+p+s}}
A.RO.prototype={
va(a){var s,r,q=this,p=A.M(a/q.b,0,1)
if(p===0)return q.c
else{s=q.d
if(p===1)return s
else{r=q.c
return r+(s-r)*q.e.a4(p)}}},
C7(a){return a>this.b}}
A.SO.prototype={
va(a){var s=this,r=a+s.r,q=s.f,p=B.c.cT(r/q,1)
B.c.iQ(r,q)
s.e.$1(B.at)
q=A.z(s.b,s.c,p)
q.toString
return q},
C7(a){return!1}}
A.zr.prototype={}
A.zs.prototype={}
A.zt.prototype={}
A.zm.prototype={
a5(a){},
O(a){},
d_(a){},
bL(a){},
gak(){return B.V},
gn(){return 1},
i(a){return"kAlwaysCompleteAnimation"}}
A.zn.prototype={
a5(a){},
O(a){},
d_(a){},
bL(a){},
gak(){return B.z},
gn(){return 0},
i(a){return"kAlwaysDismissedAnimation"}}
A.mO.prototype={
a5(a){return this.gbK().a5(a)},
O(a){return this.gbK().O(a)},
d_(a){return this.gbK().d_(a)},
bL(a){return this.gbK().bL(a)},
gak(){return this.gbK().gak()}}
A.pk.prototype={
sbK(a){var s,r=this,q=r.c
if(a==q)return
if(q!=null){r.a=q.gak()
r.b=r.c.gn()
if(r.hc$>0)r.o_()}r.c=a
if(a!=null){if(r.hc$>0)r.nZ()
q=r.b
s=r.c.gn()
if(q==null?s!=null:q!==s)r.b3()
if(r.a!==r.c.gak())r.lQ(r.c.gak())
r.b=r.a=null}},
nZ(){var s=this,r=s.c
if(r!=null){r.a5(s.ghy())
s.c.d_(s.gCt())}},
o_(){var s=this,r=s.c
if(r!=null){r.O(s.ghy())
s.c.bL(s.gCt())}},
gak(){var s=this.c
if(s!=null)s=s.gak()
else{s=this.a
s.toString}return s},
gn(){var s=this.c
if(s!=null)s=s.gn()
else{s=this.b
s.toString}return s},
i(a){var s=this.c
if(s==null)return"ProxyAnimation(null; "+this.pz()+" "+B.c.R(this.gn(),3)+")"
return s.i(0)+"\u27a9ProxyAnimation"}}
A.er.prototype={
a5(a){this.bk()
this.a.a5(a)},
O(a){this.a.O(a)
this.hZ()},
nZ(){this.a.d_(this.gj4())},
o_(){this.a.bL(this.gj4())},
np(a){this.lQ(this.yP(a))},
gak(){return this.yP(this.a.gak())},
gn(){return 1-this.a.gn()},
yP(a){switch(a.a){case 1:return B.a8
case 2:return B.aC
case 3:return B.z
case 0:return B.V}},
i(a){return this.a.i(0)+"\u27aaReverseAnimation"}}
A.nj.prototype={
zC(a){var s=this
switch(a.a){case 0:case 3:s.d=null
break
case 1:if(s.d==null)s.d=B.aC
break
case 2:if(s.d==null)s.d=B.a8
break}},
gzR(){if(this.c!=null){var s=this.d
s=(s==null?this.a.gak():s)!==B.a8}else s=!0
return s},
m(){this.a.bL(this.gzB())},
gn(){var s=this,r=s.gzR()?s.b:s.c,q=s.a.gn()
if(r==null)return q
if(q===0||q===1)return q
return r.a4(q)},
i(a){var s=this,r=s.c
if(r==null)return s.a.i(0)+"\u27a9"+s.b.i(0)
if(s.gzR())return s.a.i(0)+"\u27a9"+s.b.i(0)+"\u2092\u2099/"+r.i(0)
return s.a.i(0)+"\u27a9"+s.b.i(0)+"/"+r.i(0)+"\u2092\u2099"},
gbK(){return this.a}}
A.Ai.prototype={}
A.CH.prototype={}
A.CI.prototype={}
A.CJ.prototype={}
A.D9.prototype={}
A.Da.prototype={}
A.p6.prototype={
a4(a){return this.hC(a)},
hC(a){throw A.d(A.c1(null))},
i(a){return"ParametricCurve"}}
A.cN.prototype={
a4(a){if(a===0||a===1)return a
return this.Fw(a)}}
A.rg.prototype={
hC(a){return a}}
A.pN.prototype={
hC(a){a*=this.a
return a-(a<0?Math.ceil(a):Math.floor(a))},
i(a){return"SawTooth("+this.a+")"}}
A.eg.prototype={
hC(a){var s=this.a
a=A.M((a-s)/(this.b-s),0,1)
if(a===0||a===1)return a
return this.c.a4(a)},
i(a){var s=this,r=s.c
if(!(r instanceof A.rg))return"Interval("+A.f(s.a)+"\u22ef"+A.f(s.b)+")\u27a9"+r.i(0)
return"Interval("+A.f(s.a)+"\u22ef"+A.f(s.b)+")"}}
A.d1.prototype={
xn(a,b,c){var s=1-c
return 3*a*s*s*c+3*b*s*c*c+c*c*c},
hC(a){var s,r,q,p,o,n,m=this
for(s=m.a,r=m.c,q=0,p=1;!0;){o=(q+p)/2
n=m.xn(s,r,o)
if(Math.abs(a-n)<0.001)return m.xn(m.b,m.d,o)
if(n<a)q=o
else p=o}},
i(a){var s=this
return"Cubic("+B.c.R(s.a,2)+", "+B.c.R(s.b,2)+", "+B.c.R(s.c,2)+", "+B.c.R(s.d,2)+")"}}
A.yV.prototype={
hC(a){var s=a<0.198,r=s?0.198:0.802,q=s?0.541:0.45899999999999996,p=(a-(s?0:0.198))/r
if(s)return new A.d1(0.056/r,0.024/q,0.108/r,0.3085/q).a4(p)*q
else return new A.d1(0.16749999999999998/r,0.45899999999999996/q,0.3485/r,0.44799999999999995/q).a4(p)*q+0.541},
i(a){return"ThreePointCubic("+B.AQ.i(0)+", "+B.AL.i(0)+", "+B.AU.i(0)+", "+B.AN.i(0)+", "+B.AO.i(0)+") "}}
A.kD.prototype={
hC(a){return 1-this.a.a4(1-a)},
i(a){return"FlippedCurve("+this.a.i(0)+")"}}
A.mM.prototype={
bk(){if(this.hc$===0)this.nZ();++this.hc$},
hZ(){if(--this.hc$===0)this.o_()}}
A.mL.prototype={
bk(){},
hZ(){},
m(){}}
A.iy.prototype={
a5(a){var s
this.bk()
s=this.c8$
s.b=!0
s.a.push(a)},
O(a){if(this.c8$.v(0,a))this.hZ()},
b3(){var s,r,q,p,o,n,m,l,k=this.c8$,j=k.a,i=J.kW(j.slice(0),A.ad(j).c)
for(j=i.length,p=0;p<i.length;i.length===j||(0,A.G)(i),++p){o={}
s=i[p]
o.a=null
try{if(k.A(0,s))s.$0()}catch(n){r=A.a8(n)
q=A.av(n)
m=A.b5("while notifying listeners for "+A.q(this).i(0))
o=o.a
l=$.eE()
if(l!=null)l.$1(new A.bd(r,q,"animation library",m,o,!1))}}}}
A.hh.prototype={
d_(a){var s
this.bk()
s=this.bD$
s.b=!0
s.a.push(a)},
bL(a){if(this.bD$.v(0,a))this.hZ()},
lQ(a){var s,r,q,p,o,n,m,l=this.bD$,k=l.a,j=J.kW(k.slice(0),A.ad(k).c)
for(k=j.length,p=0;p<j.length;j.length===k||(0,A.G)(j),++p){s=j[p]
try{if(l.A(0,s))s.$1(a)}catch(o){r=A.a8(o)
q=A.av(o)
n=A.b5("while notifying status listeners for "+A.q(this).i(0))
m=$.eE()
if(m!=null)m.$1(new A.bd(r,q,"animation library",n,null,!1))}}}}
A.ak.prototype={
dV(a){return new A.jP(a,this,A.o(this).k("jP<ak.T>"))}}
A.aQ.prototype={
gn(){return this.b.a4(this.a.gn())},
i(a){var s=this.a,r=this.b
return s.i(0)+"\u27a9"+r.i(0)+"\u27a9"+A.f(r.a4(s.gn()))},
p5(){return this.pz()+" "+this.b.i(0)},
gbK(){return this.a}}
A.jP.prototype={
a4(a){return this.b.a4(this.a.a4(a))},
i(a){return this.a.i(0)+"\u27a9"+this.b.i(0)}}
A.ar.prototype={
cE(a){var s=this.a
return A.o(this).k("ar.T").a(J.a4g(s,J.a4h(J.a4i(this.b,s),a)))},
a4(a){var s,r=this
if(a===0){s=r.a
return s==null?A.o(r).k("ar.T").a(s):s}if(a===1){s=r.b
return s==null?A.o(r).k("ar.T").a(s):s}return r.cE(a)},
i(a){return"Animatable("+A.f(this.a)+" \u2192 "+A.f(this.b)+")"},
srS(a){return this.a=a},
sjl(a){return this.b=a}}
A.j5.prototype={
cE(a){var s,r=this.a
r.toString
s=this.b
s.toString
return B.c.c1(r+(s-r)*a)}}
A.fs.prototype={
a4(a){if(a===0||a===1)return a
return this.a.a4(a)},
i(a){return"CurveTween(curve: "+this.a.i(0)+")"}}
A.tv.prototype={}
A.qw.prototype={
Hm(a,b){var s,r,q,p,o,n,m,l=this.a
B.b.I(l,a)
for(s=l.length,r=0,q=0;q<s;++q)r+=l[q].b
for(s=this.b,p=0,o=0;n=l.length,o<n;++o,p=m){m=o===n-1?1:p+l[o].b/r
s.push(new A.Bi(p,m))}},
Jd(a,b){var s=this.a[b],r=this.b[b],q=r.a
return s.a.a4((a-q)/(r.b-q))},
a4(a){var s,r,q,p,o,n,m=this
if(a===1)return m.Jd(a,m.a.length-1)
for(s=m.a,r=s.length,q=m.b,p=0;p<r;++p){o=q[p]
n=o.a
if(a>=n&&a<o.b)return s[p].a.a4((a-n)/(o.b-n))}throw A.d(A.aB("TweenSequence.evaluate() could not find an interval for "+A.f(a)))},
i(a){return"TweenSequence("+this.a.length+" items)"}}
A.lK.prototype={}
A.Bi.prototype={
i(a){return"<"+A.f(this.a)+", "+A.f(this.b)+">"}}
A.e7.prototype={
gn(){return this.b.a},
gkr(){var s=this
return!s.e.h(0,s.f)||!s.x.h(0,s.y)||!s.r.h(0,s.w)||!s.z.h(0,s.Q)},
gkp(){var s=this
return!s.e.h(0,s.r)||!s.f.h(0,s.w)||!s.x.h(0,s.z)||!s.y.h(0,s.Q)},
gkq(){var s=this
return!s.e.h(0,s.x)||!s.f.h(0,s.y)||!s.r.h(0,s.z)||!s.w.h(0,s.Q)},
Tu(a){var s,r,q,p,o,n=this,m=null
if(n.gkr()){s=a.ab(t.zD)
r=s==null?m:s.f.c.gkV()
if(r==null){r=A.du(a,B.to)
r=r==null?m:r.d
q=r}else q=r
if(q==null)q=B.M}else q=B.M
if(n.gkp()){r=A.du(a,B.tm)
r=r==null?m:r.Q
p=r===!0}else p=!1
if(n.gkq())A.a5f(a)
switch(q.a){case 1:switch(0){case 0:o=p?n.r:n.e
break}break
case 0:switch(0){case 0:o=p?n.w:n.f
break}break
default:o=m}return new A.e7(o,n.c,m,n.e,n.f,n.r,n.w,n.x,n.y,n.z,n.Q,0)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.e7&&b.b.a===s.b.a&&b.e.h(0,s.e)&&b.f.h(0,s.f)&&b.r.h(0,s.r)&&b.w.h(0,s.w)&&b.x.h(0,s.x)&&b.y.h(0,s.y)&&b.z.h(0,s.z)&&b.Q.h(0,s.Q)},
gp(a){var s=this
return A.D(s.b.a,s.e,s.f,s.r,s.x,s.y,s.w,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=new A.GS(s),q=A.a([r.$2("color",s.e)],t.s)
if(s.gkr())q.push(r.$2("darkColor",s.f))
if(s.gkp())q.push(r.$2("highContrastColor",s.r))
if(s.gkr()&&s.gkp())q.push(r.$2("darkHighContrastColor",s.w))
if(s.gkq())q.push(r.$2("elevatedColor",s.x))
if(s.gkr()&&s.gkq())q.push(r.$2("darkElevatedColor",s.y))
if(s.gkp()&&s.gkq())q.push(r.$2("highContrastElevatedColor",s.z))
if(s.gkr()&&s.gkp()&&s.gkq())q.push(r.$2("darkHighContrastElevatedColor",s.Q))
r=s.c
if(r==null)r="CupertinoDynamicColor"
q=B.b.bm(q,", ")
return r+"("+q+", resolved by: UNRESOLVED)"}}
A.GS.prototype={
$2(a,b){var s=b.h(0,this.a.b)?"*":""
return s+a+" = "+b.i(0)+s},
$S:114}
A.Ad.prototype={}
A.GU.prototype={
$0(){return A.a5c(this.a)},
$S:8}
A.GV.prototype={
$0(){var s=this.a,r=s.gu3()
r.toString
s=s.grZ()
s.toString
r.PV()
return new A.qY(s,r)},
$S(){return this.b.k("qY<0>()")}}
A.uO.prototype={
M(a){var s,r=this,q=a.ab(t.u)
q.toString
s=q.w
q=r.e
return A.a06(A.a06(new A.uW(q,r.f,q,null),r.c,s,!0),r.d,s,!1)}}
A.lX.prototype={
an(){return new A.lY(B.m,this.$ti.k("lY<1>"))},
Q_(){return this.d.$0()},
SL(){return this.e.$0()}}
A.lY.prototype={
aN(){var s,r=this
r.ba()
s=A.ZR(r,null)
s.ay=r.gKi()
s.ch=r.gKk()
s.CW=r.gKg()
s.cx=r.gKe()
r.e=s},
m(){var s=this.e
s===$&&A.e()
s.ok.L(0)
s.k_()
this.aR()},
Kj(a){this.d=this.a.SL()},
Kl(a){var s,r,q=this.d
q.toString
s=a.c
s.toString
s=this.x6(s/this.c.gG().a)
q=q.a
r=q.x
r===$&&A.e()
q.sn(r-s)},
Kh(a){var s=this,r=s.d
r.toString
r.B3(s.x6(a.a.a.a/s.c.gG().a))
s.d=null},
Kf(){var s=this.d
if(s!=null)s.B3(0)
this.d=null},
N6(a){var s
if(this.a.Q_()){s=this.e
s===$&&A.e()
s.A5(a)}},
x6(a){var s=this.c.ab(t.u)
s.toString
switch(s.w.a){case 0:return-a
case 1:return a}},
M(a){var s,r,q=null,p=a.ab(t.u)
p.toString
s=t.gN
r=p.w===B.n?A.cP(a,B.cu,s).w.f.a:A.cP(a,B.cu,s).w.f.c
r=Math.max(r,20)
return A.Xc(B.ft,A.a([this.a.c,new A.xp(0,0,0,r,A.KI(B.bJ,q,q,this.gN5(),q,q),q)],t.nA),B.Da)}}
A.qY.prototype={
B3(a){var s,r,q,p,o=this
if(Math.abs(a)>=1)s=a<=0
else{r=o.a.x
r===$&&A.e()
s=r>0.5}if(s){r=o.a
q=r.x
q===$&&A.e()
q=A.z(800,0,q)
q.toString
q=A.c5(0,Math.min(B.c.dA(q),300))
r.z=B.at
r.pR(1,B.hE,q)}else{o.b.fc()
r=o.a
q=r.r
if(q!=null&&q.a!=null){q=r.x
q===$&&A.e()
q=A.z(0,800,q)
q.toString
q=A.c5(0,B.c.dA(q))
r.z=B.fh
r.pR(0,B.hE,q)}}q=r.r
if(q!=null&&q.a!=null){p=A.by("animationStatusCallback")
p.b=new A.QL(o,p)
q=p.b5()
r.bk()
r=r.bD$
r.b=!0
r.a.push(q)}else o.b.o1()}}
A.QL.prototype={
$1(a){var s=this.a
s.b.o1()
s.a.bL(this.b.b5())},
$S:9}
A.eB.prototype={
bI(a,b){var s
if(a instanceof A.eB){s=A.QM(a,this,b)
s.toString
return s}s=A.QM(null,this,b)
s.toString
return s},
bJ(a,b){var s
if(a instanceof A.eB){s=A.QM(this,a,b)
s.toString
return s}s=A.QM(this,null,b)
s.toString
return s},
AI(a){return new A.QP(this,a)},
h(a,b){var s,r
if(b==null)return!1
if(J.B(b)!==A.q(this))return!1
if(b instanceof A.eB){s=b.a
r=this.a
r=s==null?r==null:s===r
s=r}else s=!1
return s},
gp(a){return J.j(this.a)}}
A.QN.prototype={
$1(a){var s=A.l(null,a,this.a)
s.toString
return s},
$S:59}
A.QO.prototype={
$1(a){var s=A.l(null,a,1-this.a)
s.toString
return s},
$S:59}
A.QP.prototype={
uq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this.b.a
if(h==null)return
s=c.e
r=s.a
q=0.05*r
p=s.b
o=q/(h.length-1)
switch(c.d.a){case 0:n=b.a+r
m=1
break
case 1:n=b.a
m=-1
break
default:n=null
m=null}for(s=b.b,r=s+p,l=0,k=0;k<q;++k){if(B.f.iQ(k,o)!==l)++l
j=$.am().b6()
i=A.l(h[l],h[l+1],B.f.cT(k,o)/o)
i.toString
j.saa(i)
i=n+m*k-1
a.bX(new A.A(i,s,i+1,r),j)}}}
A.UO.prototype={
$0(){return null},
$S:121}
A.U1.prototype={
$0(){var s,r=globalThis.window.navigator.platform
if(r==null)r=null
s=r==null?null:r.toLowerCase()
if(s==null)s=""
if(B.d.bw(s,"mac"))return B.aV
if(B.d.bw(s,"win"))return B.bp
if(B.d.A(s,"iphone")||B.d.A(s,"ipad")||B.d.A(s,"ipod"))return B.aA
if(B.d.A(s,"android"))return B.ar
r=globalThis.window
if(r.matchMedia("only screen and (pointer: fine)").matches)return B.bo
return B.ar},
$S:58}
A.ia.prototype={
m7(a,b){var s=A.d2.prototype.gn.call(this)
s.toString
return J.YI(s)},
i(a){return this.m7(a,B.S)}}
A.kB.prototype={}
A.vv.prototype={}
A.vt.prototype={}
A.bd.prototype={
Q8(){var s,r,q,p,o,n,m,l=this.a
if(t.hK.b(l)){s=l.gCq()
r=l.i(0)
if(typeof s=="string"&&s!==r){q=r.length
p=J.aY(s)
if(q>p.gu(s)){o=B.d.S5(r,s)
if(o===q-p.gu(s)&&o>2&&B.d.a8(r,o-2,o)===": "){n=B.d.a8(r,0,o-2)
m=B.d.i8(n," Failed assertion:")
if(m>=0)n=B.d.a8(n,0,m)+"\n"+B.d.eM(n,m+1)
l=p.uW(s)+"\n"+n}else l=null}else l=null}else l=null
if(l==null)l=r}else if(!(typeof l=="string"))l=t.yt.b(l)||t.A2.b(l)?J.dj(l):"  "+A.f(l)
l=B.d.uW(l)
return l.length===0?"  <no message available>":l},
gEC(){return A.a5t(new A.IO(this).$0(),!0,B.ea)},
bu(){return"Exception caught by "+this.c},
i(a){A.a9D(null,B.vU,this)
return""}}
A.IO.prototype={
$0(){return J.a4x(this.a.Q8().split("\n")[0])},
$S:20}
A.kG.prototype={
gCq(){return this.i(0)},
bu(){return"FlutterError"},
i(a){var s,r=new A.fW(this.a,t.dw)
if(!r.gN(r)){s=r.gJ(r)
s=A.d2.prototype.gn.call(s)
s.toString
s=J.YI(s)}else s="FlutterError"
return s},
$iiz:1}
A.IP.prototype={
$1(a){return A.b5(a)},
$S:123}
A.IQ.prototype={
$1(a){return a+1},
$S:56}
A.IR.prototype={
$1(a){return a+1},
$S:56}
A.UV.prototype={
$1(a){return B.d.A(a,"StackTrace.current")||B.d.A(a,"dart-sdk/lib/_internal")||B.d.A(a,"dart:sdk_internal")},
$S:39}
A.AQ.prototype={}
A.AS.prototype={}
A.AR.prototype={}
A.un.prototype={
Hc(){var s,r,q,p,o,n,m,l=this
A.a99("Framework initialization")
l.GZ()
$.b0=l
s=t.h
r=A.cs(s)
q=A.a([],t.pX)
p=t.S
o=new A.B4(new A.o5(A.hE(null,null,t.tP,p),t.b4))
n=A.Wt(!0,"Root Focus Scope",!1)
m=new A.o_(o,n,A.aP(t.lc),A.a([],t.e6),$.aU())
n.w=m
n=$.fP.cb$
n===$&&A.e()
n.a=o.gQF()
$.dO.x1$.b.l(0,o.gQT(),null)
s=new A.Gi(new A.Bc(r),q,m,A.w(t.uY,s))
l.b_$=s
s.a=l.gK5()
s=$.ae()
s.fr=l.gQI()
s.fx=$.a_
B.dd.jS(l.gKA())
s=new A.v0(A.w(p,t.lv),B.nh)
B.nh.jS(s.gLP())
l.hi$=s
l.H_()
s=t.N
A.ad3("Flutter.FrameworkInitialization",A.w(s,s),"Extension")
A.a98()},
dB(){},
i9(){},
Sh(a){var s,r=A.a0l()
r.my("Lock events");++this.c
s=a.$0()
s.ix(new A.G7(this,r))
return s},
uY(){},
i(a){return"<BindingBase>"}}
A.G7.prototype={
$0(){var s,r,q,p=this.a
if(--p.c<=0){this.b.Bt()
try{p.GR()
if(p.cy$.c!==0)p.xl()}catch(q){s=A.a8(q)
r=A.av(q)
p=A.b5("while handling pending events")
A.d4(new A.bd(s,r,"foundation",p,null,!1))}}},
$S:24}
A.a3.prototype={}
A.dI.prototype={
a5(a){var s,r,q,p,o=this
if(o.gbp()===o.gaW().length){s=t.xR
if(o.gbp()===0)o.saW(A.aK(1,null,!1,s))
else{r=A.aK(o.gaW().length*2,null,!1,s)
for(q=0;q<o.gbp();++q)r[q]=o.gaW()[q]
o.saW(r)}}s=o.gaW()
p=o.gbp()
o.sbp(p+1)
s[p]=a},
nf(a){var s,r,q,p=this
p.sbp(p.gbp()-1)
if(p.gbp()*2<=p.gaW().length){s=A.aK(p.gbp(),null,!1,t.xR)
for(r=0;r<a;++r)s[r]=p.gaW()[r]
for(r=a;r<p.gbp();r=q){q=r+1
s[r]=p.gaW()[q]}p.saW(s)}else{for(r=a;r<p.gbp();r=q){q=r+1
p.gaW()[r]=p.gaW()[q]}p.gaW()[p.gbp()]=null}},
O(a){var s,r=this
for(s=0;s<r.gbp();++s)if(J.c(r.gaW()[s],a)){if(r.gdm()>0){r.gaW()[s]=null
r.sdO(r.gdO()+1)}else r.nf(s)
break}},
m(){this.saW($.aU())
this.sbp(0)},
b3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(f.gbp()===0)return
f.sdm(f.gdm()+1)
p=f.gbp()
for(s=0;s<p;++s)try{o=f.gaW()[s]
if(o!=null)o.$0()}catch(n){r=A.a8(n)
q=A.av(n)
o=A.b5("while dispatching notifications for "+A.q(f).i(0))
m=$.eE()
if(m!=null)m.$1(new A.bd(r,q,"foundation library",o,new A.Gu(f),!1))}f.sdm(f.gdm()-1)
if(f.gdm()===0&&f.gdO()>0){l=f.gbp()-f.gdO()
if(l*2<=f.gaW().length){k=A.aK(l,null,!1,t.xR)
for(j=0,s=0;s<f.gbp();++s){i=f.gaW()[s]
if(i!=null){h=j+1
k[j]=i
j=h}}f.saW(k)}else for(s=0;s<l;++s)if(f.gaW()[s]==null){g=s+1
for(;f.gaW()[g]==null;)++g
f.gaW()[s]=f.gaW()[g]
f.gaW()[g]=null}f.sdO(0)
f.sbp(l)}},
$ia3:1,
gbp(){return this.H$},
gaW(){return this.S$},
gdm(){return this.a2$},
gdO(){return this.a3$},
sbp(a){return this.H$=a},
saW(a){return this.S$=a},
sdm(a){return this.a2$=a},
sdO(a){return this.a3$=a}}
A.Gu.prototype={
$0(){var s=null,r=this.a
return A.a([A.eO("The "+A.q(r).i(0)+" sending notification was",r,!0,B.a4,s,!1,s,s,B.S,s,!1,!0,!0,B.an,s,t.ig)],t.p)},
$S:7}
A.lO.prototype={
gn(){return this.a},
sn(a){var s=this.a
if(s==null?a==null:s===a)return
this.a=a
this.b3()},
i(a){return"<optimized out>#"+A.aZ(this)+"("+A.f(this.a)+")"}}
A.nv.prototype={
C(){return"DiagnosticLevel."+this.b}}
A.eP.prototype={
C(){return"DiagnosticsTreeStyle."+this.b}}
A.Sn.prototype={}
A.c4.prototype={
m7(a,b){return this.b9(0)},
i(a){return this.m7(a,B.S)}}
A.d2.prototype={
gn(){this.LM()
return this.at},
LM(){return}}
A.nw.prototype={}
A.v7.prototype={}
A.L.prototype={
bu(){return"<optimized out>#"+A.aZ(this)},
m7(a,b){var s=this.bu()
return s},
i(a){return this.m7(a,B.S)}}
A.Hb.prototype={
bu(){return"<optimized out>#"+A.aZ(this)}}
A.eN.prototype={
i(a){return this.Dc(B.ea).b9(0)},
bu(){return"<optimized out>#"+A.aZ(this)},
TI(a,b){return A.Wd(a,b,this)},
Dc(a){return this.TI(null,a)}}
A.v8.prototype={}
A.At.prototype={}
A.eW.prototype={}
A.ov.prototype={}
A.qy.prototype={
i(a){return"[#"+A.aZ(this)+"]"}}
A.dQ.prototype={}
A.oq.prototype={}
A.J.prototype={
ir(a){var s=a.a,r=this.a
if(s<=r){a.a=r+1
a.ec()}},
ec(){},
gb4(){return this.b},
ad(a){this.b=a},
a6(){this.b=null},
fs(a){var s
a.c=this
s=this.b
if(s!=null)a.ad(s)
this.ir(a)},
jk(a){a.c=null
if(this.b!=null)a.a6()}}
A.aL.prototype={
gnb(){var s,r=this,q=r.c
if(q===$){s=A.cs(r.$ti.c)
r.c!==$&&A.az()
r.c=s
q=s}return q},
v(a,b){this.b=!0
this.gnb().L(0)
return B.b.v(this.a,b)},
L(a){this.b=!1
B.b.L(this.a)
this.gnb().L(0)},
A(a,b){var s=this,r=s.a
if(r.length<3)return B.b.A(r,b)
if(s.b){s.gnb().I(0,r)
s.b=!1}return s.gnb().A(0,b)},
gK(a){var s=this.a
return new J.eJ(s,s.length)},
gN(a){return this.a.length===0},
gbg(a){return this.a.length!==0},
c2(a,b){var s=this.a,r=A.ad(s)
return b?A.a(s.slice(0),r):J.kW(s.slice(0),r.c)},
cQ(a){return this.c2(a,!0)}}
A.o5.prototype={
v(a,b){var s=this.a,r=s.j(0,b)
if(r==null)return!1
if(r===1)s.v(0,b)
else s.l(0,b,r-1)
return!0},
A(a,b){return this.a.P(b)},
gK(a){var s=this.a
return A.hD(s,s.r)},
gN(a){return this.a.a===0},
gbg(a){return this.a.a!==0}}
A.pd.prototype={
T8(a,b){var s=this.a,r=s==null?$.u4():s,q=r.fd(0,a,A.eo(a),b)
if(q===s)return this
return new A.pd(q)},
j(a,b){var s=this.a
if(s==null)return null
return s.jM(0,b,J.j(b))}}
A.TB.prototype={}
A.B_.prototype={
fd(a,b,c,d){var s,r,q,p,o=B.f.j3(c,a)&31,n=this.a,m=n[o]
if(m==null)m=$.u4()
s=m.fd(a+5,b,c,d)
if(s===m)n=this
else{r=n.length
q=A.aK(r,null,!1,t.X)
for(p=0;p<r;++p)q[p]=n[p]
q[o]=s
n=new A.B_(q)}return n},
jM(a,b,c){var s=this.a[B.f.j3(c,a)&31]
return s==null?null:s.jM(a+5,b,c)}}
A.i8.prototype={
fd(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=B.f.j3(a6,a4)&31,a0=1<<a>>>0,a1=c.a,a2=(a1&a0-1)>>>0,a3=a2-(a2>>>1&1431655765)
a3=(a3&858993459)+(a3>>>2&858993459)
a3=a3+(a3>>>4)&252645135
a3+=a3>>>8
s=a3+(a3>>>16)&63
if((a1&a0)>>>0!==0){a=c.b
a2=2*s
r=a[a2]
q=a2+1
p=a[q]
if(r==null){o=p.fd(a4+5,a5,a6,a7)
if(o===p)return c
a2=a.length
n=A.aK(a2,b,!1,t.X)
for(m=0;m<a2;++m)n[m]=a[m]
n[q]=o
return new A.i8(a1,n)}if(J.c(a5,r)){if(a7==null?p==null:a7===p)a=c
else{a2=a.length
n=A.aK(a2,b,!1,t.X)
for(m=0;m<a2;++m)n[m]=a[m]
n[q]=a7
a=new A.i8(a1,n)}return a}l=a4+5
k=J.j(r)
if(k===a6){j=A.aK(4,b,!1,t.X)
j[0]=r
j[1]=p
j[2]=a5
j[3]=a7
o=new A.r9(a6,j)}else o=$.u4().fd(l,r,k,p).fd(l,a5,a6,a7)
l=a.length
n=A.aK(l,b,!1,t.X)
for(m=0;m<l;++m)n[m]=a[m]
n[a2]=null
n[q]=o
return new A.i8(a1,n)}else{a3=a1-(a1>>>1&1431655765)
a3=(a3&858993459)+(a3>>>2&858993459)
a3=a3+(a3>>>4)&252645135
a3+=a3>>>8
i=a3+(a3>>>16)&63
if(i>=16){a1=c.Lj(a4)
a1.a[a]=$.u4().fd(a4+5,a5,a6,a7)
return a1}else{h=2*s
g=2*i
f=A.aK(g+2,b,!1,t.X)
for(a=c.b,e=0;e<h;++e)f[e]=a[e]
f[h]=a5
f[h+1]=a7
for(d=h+2,e=h;e<g;++e,++d)f[d]=a[e]
return new A.i8((a1|a0)>>>0,f)}}},
jM(a,b,c){var s,r,q,p,o=1<<(B.f.j3(c,a)&31)>>>0,n=this.a
if((n&o)>>>0===0)return null
n=(n&o-1)>>>0
s=n-(n>>>1&1431655765)
s=(s&858993459)+(s>>>2&858993459)
s=s+(s>>>4)&252645135
s+=s>>>8
n=this.b
r=2*(s+(s>>>16)&63)
q=n[r]
p=n[r+1]
if(q==null)return p.jM(a+5,b,c)
if(b===q)return p
return null},
Lj(a){var s,r,q,p,o,n,m,l=A.aK(32,null,!1,t.X)
for(s=this.a,r=a+5,q=this.b,p=0,o=0;o<32;++o)if((B.f.j3(s,o)&1)!==0){n=q[p]
m=p+1
if(n==null)l[o]=q[m]
else l[o]=$.u4().fd(r,n,J.j(n),q[m])
p+=2}return new A.B_(l)}}
A.r9.prototype={
fd(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(c===i){s=j.xR(b)
if(s!==-1){i=j.b
r=s+1
q=i[r]
if(q==null?d==null:q===d)i=j
else{q=i.length
p=A.aK(q,null,!1,t.X)
for(o=0;o<q;++o)p[o]=i[o]
p[r]=d
i=new A.r9(c,p)}return i}i=j.b
n=i.length
m=A.aK(n+2,null,!1,t.X)
for(l=0;l<n;++l)m[l]=i[l]
m[n]=b
m[n+1]=d
return new A.r9(c,m)}i=B.f.j3(i,a)
k=A.aK(2,null,!1,t.X)
k[1]=j
return new A.i8(1<<(i&31)>>>0,k).fd(a,b,c,d)},
jM(a,b,c){var s=this.xR(b)
return s<0?null:this.b[s+1]},
xR(a){var s,r,q=this.b,p=q.length
for(s=J.fk(a),r=0;r<p;r+=2)if(s.h(a,q[r]))return r
return-1}}
A.ce.prototype={
C(){return"TargetPlatform."+this.b}}
A.Qd.prototype={
cj(a){var s,r,q=this
if(q.b===q.a.length)q.MX()
s=q.a
r=q.b
s[r]=a
q.b=r+1},
hL(a){var s=this,r=a.length,q=s.b+r
if(q>=s.a.length)s.re(q)
B.G.cU(s.a,s.b,q,a)
s.b+=r},
kE(a,b,c){var s=this,r=c==null?s.e.length:c,q=s.b+(r-b)
if(q>=s.a.length)s.re(q)
B.G.cU(s.a,s.b,q,a)
s.b=q},
Nh(a){return this.kE(a,0,null)},
re(a){var s=this.a,r=s.length,q=a==null?0:a,p=Math.max(q,r*2),o=new Uint8Array(p)
B.G.cU(o,0,r,s)
this.a=o},
MX(){return this.re(null)},
eO(a){var s=B.f.cT(this.b,a)
if(s!==0)this.kE($.a3m(),0,a-s)},
h9(){var s,r=this
if(r.c)throw A.d(A.aB("done() must not be called more than once on the same "+A.q(r).i(0)+"."))
s=A.jb(r.a.buffer,0,r.b)
r.a=new Uint8Array(0)
r.c=!0
return s}}
A.pr.prototype={
iA(a){return this.a.getUint8(this.b++)},
pe(a){var s=this.b,r=$.bT()
B.db.vf(this.a,s,r)},
iB(a){var s=this.a,r=A.cC(s.buffer,s.byteOffset+this.b,a)
this.b+=a
return r},
pf(a){var s
this.eO(8)
s=this.a
B.eO.Ai(s.buffer,s.byteOffset+this.b,a)},
eO(a){var s=this.b,r=B.f.cT(s,a)
if(r!==0)this.b=s+(a-r)}}
A.eu.prototype={
gp(a){var s=this
return A.D(s.b,s.d,s.f,s.r,s.w,s.x,s.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(J.B(b)!==A.q(s))return!1
return b instanceof A.eu&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.a===s.a},
i(a){var s=this
return"StackFrame(#"+s.b+", "+s.c+":"+s.d+"/"+s.e+":"+s.f+":"+s.r+", className: "+s.w+", method: "+s.x+")"}}
A.Op.prototype={
$1(a){return a.length!==0},
$S:39}
A.bI.prototype={
ed(a,b,c){var s=a.$1(this.a)
if(c.k("a2<0>").b(s))return s
return new A.bI(s,c.k("bI<0>"))},
b8(a,b){return this.ed(a,null,b)},
ix(a){var s,r,q,p,o,n=this
try{s=a.$0()
if(t.d.b(s)){p=s.b8(new A.OI(n),n.$ti.c)
return p}return n}catch(o){r=A.a8(o)
q=A.av(o)
p=A.Wx(r,q,n.$ti.c)
return p}},
$ia2:1}
A.OI.prototype={
$1(a){return this.a.a},
$S(){return this.a.$ti.k("1(@)")}}
A.vR.prototype={
C(){return"GestureDisposition."+this.b}}
A.bG.prototype={}
A.o2.prototype={}
A.m7.prototype={
i(a){var s=this,r=s.a
r=r.length===0?""+"<empty>":""+new A.an(r,new A.Rw(s),A.ad(r).k("an<1,u>")).bm(0,", ")
if(s.b)r+=" [open]"
if(s.c)r+=" [held]"
if(s.d)r+=" [hasPendingSweep]"
return r.charCodeAt(0)==0?r:r}}
A.Rw.prototype={
$1(a){if(a===this.a.e)return a.i(0)+" (eager winner)"
return a.i(0)},
$S:128}
A.J6.prototype={
A1(a,b,c){this.a.bt(b,new A.J8(this,b)).a.push(c)
return new A.o2(this,b,c)},
P2(a){var s=this.a.j(0,a)
if(s==null)return
s.b=!1
this.zs(a,s)},
wb(a){var s,r=this.a,q=r.j(0,a)
if(q==null)return
if(q.c){q.d=!0
return}r.v(0,a)
r=q.a
if(r.length!==0){B.b.gJ(r).eR(a)
for(s=1;s<r.length;++s)r[s].fK(a)}},
Ry(a){var s=this.a.j(0,a)
if(s==null)return
s.c=!0},
Ti(a){var s=this.a.j(0,a)
if(s==null)return
s.c=!1
if(s.d)this.wb(a)},
kC(a,b,c){var s=this.a.j(0,a)
if(s==null)return
if(c===B.N){B.b.v(s.a,b)
b.fK(a)
if(!s.b)this.zs(a,s)}else if(s.b){if(s.e==null)s.e=b}else this.yN(a,s,b)},
zs(a,b){var s=b.a.length
if(s===1)A.hg(new A.J7(this,a,b))
else if(s===0)this.a.v(0,a)
else{s=b.e
if(s!=null)this.yN(a,b,s)}},
N1(a,b){var s=this.a
if(!s.P(a))return
s.v(0,a)
B.b.gJ(b.a).eR(a)},
yN(a,b,c){var s,r,q,p
this.a.v(0,a)
for(s=b.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.G)(s),++q){p=s[q]
if(p!==c)p.fK(a)}c.eR(a)}}
A.J8.prototype={
$0(){return new A.m7(A.a([],t.ia))},
$S:129}
A.J7.prototype={
$0(){return this.a.N1(this.b,this.c)},
$S:0}
A.SQ.prototype={
iI(){var s,r,q,p,o,n=this
for(s=n.a,r=s.gaV(),r=new A.dt(J.at(r.a),r.b),q=n.r,p=A.o(r).z[1];r.q();){o=r.a;(o==null?p.a(o):o).Ue(q)}s.L(0)
n.c=B.v
s=n.y
if(s!=null)s.bM()}}
A.kL.prototype={
KJ(a){var s,r,q,p,o=this
try{o.to$.I(0,A.a7B(a.a,o.gIR()))
if(o.c<=0)o.qs()}catch(q){s=A.a8(q)
r=A.av(q)
p=A.b5("while handling a pointer data packet")
A.d4(new A.bd(s,r,"gestures library",p,null,!1))}},
IS(a){var s=$.ae().d.j(0,a)
if(s==null)s=null
else{s=s.x
if(s==null){s=self.window.devicePixelRatio
if(s===0)s=1}}return s},
OR(a){var s=this.to$
if(s.b===s.c&&this.c<=0)A.hg(this.gJx())
s.Ol(A.a_C(0,0,0,0,0,B.cf,!1,0,a,B.h,1,1,0,0,0,0,0,0,B.v,0))},
qs(){for(var s=this.to$;!s.gN(s);)this.tH(s.m_())},
tH(a){this.gyL().iI()
this.xL(a)},
xL(a){var s,r,q,p,o=this,n=!t.qi.b(a)
if(!n||t.zs.b(a)||t.hV.b(a)||t.v.b(a)){s=A.Wy()
r=a.gaU()
q=a.gjL()
p=o.aw$
p===$&&A.e()
p.e.bs(s,r)
o.vQ(s,r,q)
if(!n||t.v.b(a))o.y1$.l(0,a.gaT(),s)
n=s}else if(t.Cs.b(a)||t.AJ.b(a)||t.zv.b(a)){s=o.y1$.v(0,a.gaT())
n=s}else n=a.go5()||t._.b(a)?o.y1$.j(0,a.gaT()):null
if(n!=null||t.ye.b(a)||t.x.b(a)){r=o.aZ$
r.toString
r.U_(a,t.f2.b(a)?null:n)
o.F7(a,n)}},
Rw(a,b,c){a.D(0,new A.fA(this,t.Cq))},
PW(a,b){var s,r,q,p,o,n,m,l,k,j,i="gesture library"
if(b==null){try{this.x1$.D8(a)}catch(p){s=A.a8(p)
r=A.av(p)
A.d4(A.a6i(A.b5("while dispatching a non-hit-tested pointer event"),a,s,null,new A.J9(a),i,r))}return}for(n=b.a,m=n.length,l=0;l<n.length;n.length===m||(0,A.G)(n),++l){q=n[l]
try{q.a.hp(a.ac(q.b),q)}catch(s){p=A.a8(s)
o=A.av(s)
k=A.b5("while dispatching a pointer event")
j=$.eE()
if(j!=null)j.$1(new A.nZ(p,o,i,k,new A.Ja(a,q),!1))}}},
hp(a,b){var s=this
s.x1$.D8(a)
if(t.qi.b(a)||t.v.b(a))s.x2$.P2(a.gaT())
else if(t.Cs.b(a)||t.zv.b(a))s.x2$.wb(a.gaT())
else if(t.zs.b(a))s.xr$.Z(a)},
KZ(){if(this.c<=0)this.gyL().iI()},
gyL(){var s=this,r=s.y2$
if(r===$){$.Fq()
r!==$&&A.az()
r=s.y2$=new A.SQ(A.w(t.S,t.d0),B.v,new A.qb(),B.v,B.v,s.gKM(),s.gKY(),B.w2)}return r},
$ia1:1}
A.J9.prototype={
$0(){var s=null
return A.a([A.eO("Event",this.a,!0,B.a4,s,!1,s,s,B.S,s,!1,!0,!0,B.an,s,t.cL)],t.p)},
$S:7}
A.Ja.prototype={
$0(){var s=null
return A.a([A.eO("Event",this.a,!0,B.a4,s,!1,s,s,B.S,s,!1,!0,!0,B.an,s,t.cL),A.eO("Target",this.b.a,!0,B.a4,s,!1,s,s,B.S,s,!1,!0,!0,B.an,s,t.kZ)],t.p)},
$S:7}
A.nZ.prototype={}
A.M5.prototype={
$1(a){return a.f!==B.BK},
$S:134}
A.M6.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a.$1(0)
if(j==null)return null
s=new A.v(a.x,a.y).eg(0,j)
r=new A.v(a.z,a.Q).eg(0,j)
q=a.dy/j
p=a.dx/j
o=a.fr/j
n=a.fx/j
m=a.c
l=a.e
k=a.f
switch((k==null?B.bj:k).a){case 0:switch(a.d.a){case 1:return A.a7y(a.r,a.cx,a.cy,0,l,!1,a.fy,s,a.CW,a.ch,n,o,a.go,m,0)
case 3:return A.a7D(a.as,r,a.r,a.cx,a.cy,0,l,!1,a.fy,s,a.CW,a.ch,p,n,o,q,a.db,a.ax,a.go,m,0)
case 4:return A.a7z(A.a1Q(a.as,l),a.r,a.cy,0,l,!1,a.fy,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.go,m,0)
case 5:return A.a7E(A.a1Q(a.as,l),r,a.r,a.cy,0,l,!1,a.fy,a.id,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.ax,a.go,m,0)
case 6:return A.a7M(a.as,a.r,a.cx,a.cy,0,l,!1,a.fy,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.go,m,0)
case 0:return A.a_C(a.as,a.r,a.cx,a.cy,0,l,!1,a.fy,a.w,s,a.CW,a.ch,p,n,o,q,a.db,a.go,m,0)
case 2:return A.a7I(a.r,a.cy,0,l,!1,s,a.CW,a.ch,n,o,m,0)
case 7:return A.a7G(a.r,0,a.w,s,a.ax,m,0)
case 8:return A.a7H(a.r,0,new A.v(0,0).eg(0,j),new A.v(0,0).eg(0,j),a.w,s,0,a.p2,a.ax,m,0)
case 9:return A.a7F(a.r,0,a.w,s,a.ax,m,0)}break
case 1:k=a.k1
if(!isFinite(k)||!isFinite(a.k2)||j<=0)return null
return A.a7K(a.r,0,l,s,new A.v(k,a.k2).eg(0,j),m,0)
case 2:return A.a7L(a.r,0,l,s,m,0)
case 3:return A.a7J(a.r,0,l,s,a.p2,m,0)
case 4:throw A.d(A.aB("Unreachable"))}},
$S:135}
A.iP.prototype={
i(a){return"DragDownDetails("+this.a.i(0)+")"}}
A.fv.prototype={
i(a){return"DragStartDetails("+this.b.i(0)+")"}}
A.fw.prototype={
i(a){return"DragUpdateDetails("+this.b.i(0)+")"}}
A.dL.prototype={
i(a){return"DragEndDetails("+this.a.i(0)+")"}}
A.al.prototype={
gcq(){return this.r},
gCj(){return this.w},
gjL(){return this.a},
geG(){return this.c},
gaT(){return this.d},
gcN(){return this.e},
gdZ(){return this.f},
gaU(){return this.r},
gl7(){return this.w},
gbU(){return this.x},
go5(){return this.y},
glR(){return this.z},
gCK(){return this.Q},
goQ(){return this.as},
glX(){return this.at},
gc7(){return this.ax},
gth(){return this.ay},
gG(){return this.ch},
gux(){return this.CW},
guA(){return this.cx},
guz(){return this.cy},
guy(){return this.db},
guo(){return this.dx},
guS(){return this.dy},
gk8(){return this.fx},
gaO(){return this.fy}}
A.bQ.prototype={$ial:1}
A.zh.prototype={$ial:1}
A.E6.prototype={
geG(){return this.gaz().c},
gaT(){return this.gaz().d},
gcN(){return this.gaz().e},
gdZ(){return this.gaz().f},
gaU(){return this.gaz().r},
gl7(){return this.gaz().w},
gbU(){return this.gaz().x},
go5(){return this.gaz().y},
glR(){this.gaz()
return!1},
gCK(){return this.gaz().Q},
goQ(){return this.gaz().as},
glX(){return this.gaz().at},
gc7(){return this.gaz().ax},
gth(){return this.gaz().ay},
gG(){return this.gaz().ch},
gux(){return this.gaz().CW},
guA(){return this.gaz().cx},
guz(){return this.gaz().cy},
guy(){return this.gaz().db},
guo(){return this.gaz().dx},
guS(){return this.gaz().dy},
gk8(){return this.gaz().fx},
gcq(){var s,r=this,q=r.a
if(q===$){s=A.M8(r.gaO(),r.gaz().r)
r.a!==$&&A.az()
r.a=s
q=s}return q},
gCj(){var s,r,q,p,o=this,n=o.b
if(n===$){s=o.gaO()
r=o.gaz()
q=o.gaz()
p=A.M7(s,o.gcq(),r.w,q.r)
o.b!==$&&A.az()
o.b=p
n=p}return n},
gjL(){return this.gaz().a}}
A.zY.prototype={}
A.jh.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.E2(this,a)}}
A.E2.prototype={
ac(a){return this.c.ac(a)},
$ijh:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A7.prototype={}
A.jl.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.Ed(this,a)}}
A.Ed.prototype={
ac(a){return this.c.ac(a)},
$ijl:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A2.prototype={}
A.ji.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.E8(this,a)}}
A.E8.prototype={
ac(a){return this.c.ac(a)},
$iji:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A0.prototype={}
A.hV.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.E5(this,a)}}
A.E5.prototype={
ac(a){return this.c.ac(a)},
$ihV:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A1.prototype={}
A.hW.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.E7(this,a)}}
A.E7.prototype={
ac(a){return this.c.ac(a)},
$ihW:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A_.prototype={}
A.dX.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.E4(this,a)}}
A.E4.prototype={
ac(a){return this.c.ac(a)},
$idX:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A3.prototype={}
A.hX.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.E9(this,a)}}
A.E9.prototype={
ac(a){return this.c.ac(a)},
$ihX:1,
gaz(){return this.c},
gaO(){return this.d}}
A.Ab.prototype={}
A.hY.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.Eh(this,a)}}
A.Eh.prototype={
ac(a){return this.c.ac(a)},
$ihY:1,
gaz(){return this.c},
gaO(){return this.d}}
A.d9.prototype={}
A.A9.prototype={}
A.xn.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.Ef(this,a)}}
A.Ef.prototype={
ac(a){return this.c.ac(a)},
$id9:1,
gaz(){return this.c},
gaO(){return this.d}}
A.Aa.prototype={}
A.xo.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.Eg(this,a)}}
A.Eg.prototype={
ac(a){return this.c.ac(a)},
$id9:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A8.prototype={}
A.xm.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.Ee(this,a)}}
A.Ee.prototype={
ac(a){return this.c.ac(a)},
$id9:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A5.prototype={}
A.fK.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.Eb(this,a)}}
A.Eb.prototype={
ac(a){return this.c.ac(a)},
$ifK:1,
gaz(){return this.c},
gaO(){return this.d}}
A.A6.prototype={}
A.jk.prototype={
gtW(){return this.id},
gCk(){return this.k1},
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.Ec(this,a)},
gus(){return this.id},
gCC(){return this.k1}}
A.Ec.prototype={
gus(){return this.e.id},
gtW(){var s,r=this,q=r.c
if(q===$){s=A.M8(r.f,r.e.id)
r.c!==$&&A.az()
r.c=s
q=s}return q},
gCC(){return this.e.k1},
gCk(){var s,r,q=this,p=q.d
if(p===$){s=q.e
r=A.M7(q.f,q.gtW(),s.k1,s.id)
q.d!==$&&A.az()
q.d=r
p=r}return p},
ac(a){return this.e.ac(a)},
$ijk:1,
gaz(){return this.e},
gaO(){return this.f}}
A.A4.prototype={}
A.jj.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.Ea(this,a)}}
A.Ea.prototype={
ac(a){return this.c.ac(a)},
$ijj:1,
gaz(){return this.c},
gaO(){return this.d}}
A.zZ.prototype={}
A.hU.prototype={
ac(a){if(a==null||a.h(0,this.fy))return this
return new A.E3(this,a)}}
A.E3.prototype={
ac(a){return this.c.ac(a)},
$ihU:1,
gaz(){return this.c},
gaO(){return this.d}}
A.C9.prototype={}
A.Ca.prototype={}
A.Cb.prototype={}
A.Cc.prototype={}
A.Cd.prototype={}
A.Ce.prototype={}
A.Cf.prototype={}
A.Cg.prototype={}
A.Ch.prototype={}
A.Ci.prototype={}
A.Cj.prototype={}
A.Ck.prototype={}
A.Cl.prototype={}
A.Cm.prototype={}
A.Cn.prototype={}
A.Co.prototype={}
A.Cp.prototype={}
A.Cq.prototype={}
A.Cr.prototype={}
A.Cs.prototype={}
A.Ct.prototype={}
A.Cu.prototype={}
A.Cv.prototype={}
A.Cw.prototype={}
A.Cx.prototype={}
A.Cy.prototype={}
A.Cz.prototype={}
A.CA.prototype={}
A.CB.prototype={}
A.CC.prototype={}
A.CD.prototype={}
A.ER.prototype={}
A.ES.prototype={}
A.ET.prototype={}
A.EU.prototype={}
A.EV.prototype={}
A.EW.prototype={}
A.EX.prototype={}
A.EY.prototype={}
A.EZ.prototype={}
A.F_.prototype={}
A.F0.prototype={}
A.F1.prototype={}
A.F2.prototype={}
A.F3.prototype={}
A.F4.prototype={}
A.F5.prototype={}
A.F6.prototype={}
A.v6.prototype={
gp(a){return A.D(this.a,23,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){if(b==null)return!1
if(J.B(b)!==A.q(this))return!1
return b instanceof A.v6&&b.a==this.a},
i(a){return"DeviceGestureSettings(touchSlop: "+A.f(this.a)+")"}}
A.fA.prototype={
i(a){return"<optimized out>#"+A.aZ(this)+"("+this.a.i(0)+")"}}
A.mt.prototype={}
A.BC.prototype={
c_(a){return this.a.u1(a)}}
A.BZ.prototype={
c_(a){var s,r,q,p,o=new Float64Array(16),n=new A.aS(o)
n.aE(a)
s=this.a
r=s.a
q=s.b
s=o[0]
p=o[3]
o[0]=s+r*p
o[1]=o[1]+q*p
o[2]=o[2]+0*p
o[3]=p
p=o[4]
s=o[7]
o[4]=p+r*s
o[5]=o[5]+q*s
o[6]=o[6]+0*s
o[7]=s
s=o[8]
p=o[11]
o[8]=s+r*p
o[9]=o[9]+q*p
o[10]=o[10]+0*p
o[11]=p
p=o[12]
s=o[15]
o[12]=p+r*s
o[13]=o[13]+q*s
o[14]=o[14]+0*s
o[15]=s
return n}}
A.hs.prototype={
JV(){var s,r,q,p,o=this.c
if(o.length===0)return
s=this.b
r=B.b.gY(s)
for(q=o.length,p=0;p<o.length;o.length===q||(0,A.G)(o),++p){r=o[p].c_(r)
s.push(r)}B.b.L(o)},
D(a,b){this.JV()
b.b=B.b.gY(this.b)
this.a.push(b)},
CH(){var s=this.c
if(s.length!==0)s.pop()
else this.b.pop()},
i(a){var s=this.a
return"HitTestResult("+(s.length===0?"<empty path>":B.b.bm(s,", "))+")"}}
A.h6.prototype={
j(a,b){return this.c[b+this.a]},
W(a,b){var s,r,q,p,o,n,m
for(s=this.b,r=this.c,q=this.a,p=b.c,o=b.a,n=0,m=0;m<s;++m)n+=r[m+q]*p[m+o]
return n}}
A.Xw.prototype={}
A.Me.prototype={
i(a){var s=this.a,r=A.cg(s).k("an<ap.E,u>"),q=A.w6(A.af(new A.an(s,new A.Mf(),r),!0,r.k("aJ.E")),"[","]")
r=this.b
r===$&&A.e()
return"PolynomialFit("+q+", confidence: "+B.c.R(r,3)+")"}}
A.Mf.prototype={
$1(a){return B.c.TO(a,3)},
$S:136}
A.wh.prototype={
vF(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this.a,a5=a4.length
if(a6>a5)return null
s=a6+1
r=new A.Me(new Float64Array(s))
q=s*a5
p=new Float64Array(q)
for(o=this.c,n=0*a5,m=0;m<a5;++m){p[n+m]=o[m]
for(l=1;l<s;++l)p[l*a5+m]=p[(l-1)*a5+m]*a4[m]}q=new Float64Array(q)
n=new Float64Array(s*s)
for(k=0;k<s;++k){for(j=k*a5,m=0;m<a5;++m){i=j+m
q[i]=p[i]}for(l=0;l<k;++l){i=l*a5
h=new A.h6(j,a5,q).W(0,new A.h6(i,a5,q))
for(m=0;m<a5;++m){g=j+m
q[g]=q[g]-h*q[i+m]}}i=new A.h6(j,a5,q)
f=Math.sqrt(i.W(0,i))
if(f<1e-10)return null
e=1/f
for(m=0;m<a5;++m){i=j+m
q[i]=q[i]*e}for(i=k*s,l=0;l<s;++l){g=l<k?0:new A.h6(j,a5,q).W(0,new A.h6(l*a5,a5,p))
n[i+l]=g}}p=new Float64Array(a5)
d=new A.h6(0,a5,p)
for(j=this.b,m=0;m<a5;++m)p[m]=j[m]*o[m]
for(l=s-1,p=r.a,c=l;c>=0;--c){p[c]=new A.h6(c*a5,a5,q).W(0,d)
for(i=c*s,k=l;k>c;--k)p[c]=p[c]-n[i+k]*p[k]
p[c]=p[c]/n[i+c]}for(b=0,m=0;m<a5;++m)b+=j[m]
b/=a5
for(a=0,a0=0,m=0;m<a5;++m){q=j[m]
a1=q-p[0]
for(a2=1,l=1;l<s;++l){a2*=a4[m]
a1-=a2*p[l]}n=o[m]
n*=n
a+=n*a1*a1
a3=q-b
a0+=n*a3*a3}r.b=a0<=1e-10?1:1-a/a0
return r}}
A.r0.prototype={
C(){return"_DragState."+this.b}}
A.kw.prototype={
ht(a){var s=this
if(s.k1==null){if(s.ax==null&&s.ay==null&&s.ch==null&&s.CW==null&&s.cx==null)return!1}else if(a.gbU()!==s.k1)return!1
return s.jZ(a)},
wl(a){var s,r=this
r.ok.l(0,a.gaT(),A.ZA(a))
s=r.fx
if(s===B.aX){r.fx=B.I2
s=a.gaU()
r.fy=new A.dU(a.gcq(),s)
r.go=B.ne
r.k3=0
r.id=a.geG()
r.k2=a.gaO()
r.I7()}else if(s===B.dz)r.Z(B.aJ)},
eS(a){var s=this
s.pG(a)
if(s.fx===B.aX)s.k1=a.gbU()
s.wl(a)},
rF(a){var s=this
s.F8(a)
s.mz(a.gaT(),a.gaO())
if(s.fx===B.aX)s.k1=1
s.wl(a)},
ho(a){var s,r,q,p,o,n,m,l,k,j=this
if(!a.gk8())s=t.qi.b(a)||t.f2.b(a)||t.v.b(a)||t._.b(a)
else s=!1
if(s){s=j.ok.j(0,a.gaT())
s.toString
if(t.v.b(a))s.kR(a.geG(),B.h)
else if(t._.b(a))s.kR(a.geG(),a.gus())
else s.kR(a.geG(),a.gcq())}s=t.f2.b(a)
if(s&&a.gbU()!==j.k1){j.qB(a.gaT())
return}if(s||t._.b(a)){r=s?a.gl7():t._.a(a).gCC()
q=s?a.gCj():t._.a(a).gCk()
p=s?a.gaU():a.gaU().T(0,t._.a(a).gus())
o=s?a.gcq():a.gcq().T(0,t._.a(a).gtW())
if(j.fx===B.dz){s=a.geG()
j.wK(j.kl(q),p,o,j.km(q),s)}else{s=j.go
s===$&&A.e()
j.go=s.T(0,new A.dU(q,r))
j.id=a.geG()
j.k2=a.gaO()
n=j.kl(q)
if(a.gaO()==null)m=null
else{s=a.gaO()
s.toString
m=A.KX(s)}s=j.k3
s===$&&A.e()
l=A.M7(m,null,n,o).gc7()
k=j.km(n)
j.k3=s+l*J.ka(k==null?1:k)
s=a.gcN()
l=j.b
if(j.qL(s,l==null?null:l.a)){j.k4=!0
if(j.p1.A(0,a.gaT()))j.wF(a.gaT())
else j.Z(B.aJ)}}}if(t.Cs.b(a)||t.AJ.b(a)||t.zv.b(a))j.qB(a.gaT())},
eR(a){var s=this
s.p1.D(0,a)
if(!s.dy||s.k4)s.wF(a)},
fK(a){this.qB(a)},
o0(a){var s,r=this
switch(r.fx.a){case 0:break
case 1:r.Z(B.N)
s=r.cx
if(s!=null)r.co("onCancel",s)
break
case 2:r.I8(a)
break}r.k4=!1
r.ok.L(0)
r.k1=null
r.fx=B.aX},
qB(a){var s,r
this.eL(a)
if(!this.p1.v(0,a)){s=this.f
r=s.j(0,a)
if(r!=null){s.v(0,a)
r.a.kC(r.b,r.c,B.N)}}},
I7(){var s,r=this
if(r.ax!=null){s=r.fy
s===$&&A.e()
r.co("onDown",new A.HB(r,new A.iP(s.b)))}},
wF(a){var s,r,q,p,o,n,m,l,k=this
if(k.fx===B.dz)return
k.fx=B.dz
s=k.go
s===$&&A.e()
r=k.id
q=k.k2
switch(k.at.a){case 1:p=k.fy
p===$&&A.e()
k.fy=p.T(0,s)
o=B.h
break
case 0:o=k.kl(s.a)
break
default:o=null}k.go=B.ne
k.k2=k.id=null
k.Id(r,a)
if(!J.c(o,B.h)&&k.ch!=null){n=q!=null?A.KX(q):null
s=k.fy
s===$&&A.e()
m=A.M7(n,null,o,s.a.T(0,o))
l=k.fy.T(0,new A.dU(o,m))
k.wK(o,l.b,l.a,k.km(o),r)}k.Z(B.aJ)},
Id(a,b){var s,r=this
if(r.ay!=null){s=r.fy
s===$&&A.e()
r.e.j(0,b).toString
r.co("onStart",new A.HG(r,new A.fv(s.b)))}},
wK(a,b,c,d,e){if(this.ch!=null)this.co("onUpdate",new A.HH(this,new A.fw(a,d,b)))},
I8(a){var s,r,q,p,o,n=this,m={}
if(n.CW==null)return
s=n.ok.j(0,a)
r=s.vm()
m.a=null
if(r==null){q=new A.HC()
p=null}else{o=m.a=n.q7(r,s.a)
q=o!=null?new A.HD(m,r):new A.HE(r)
p=o}if(p==null)m.a=new A.dL(B.cs)
n.RQ("onEnd",new A.HF(m,n),q)},
m(){this.ok.L(0)
this.k_()}}
A.HB.prototype={
$0(){return this.a.ax.$1(this.b)},
$S:0}
A.HG.prototype={
$0(){return this.a.ay.$1(this.b)},
$S:0}
A.HH.prototype={
$0(){return this.a.ch.$1(this.b)},
$S:0}
A.HC.prototype={
$0(){return"Could not estimate velocity."},
$S:20}
A.HD.prototype={
$0(){return this.b.i(0)+"; fling at "+this.a.a.a.i(0)+"."},
$S:20}
A.HE.prototype={
$0(){return this.a.i(0)+"; judged to not be a fling."},
$S:20}
A.HF.prototype={
$0(){var s,r=this.b.CW
r.toString
s=this.a.a
s.toString
return r.$1(s)},
$S:0}
A.ee.prototype={
q7(a,b){var s=A.tW(b,this.b),r=a.a.a
if(!(Math.abs(r)>50&&Math.abs(a.d.a)>s))return null
return new A.dL(new A.ez(new A.v(A.M(r,-8000,8000),0)))},
qL(a,b){var s=this.k3
s===$&&A.e()
return Math.abs(s)>A.tW(a,this.b)},
kl(a){return new A.v(a.a,0)},
km(a){return a.a}}
A.M9.prototype={
A6(a,b,c){this.a.bt(a,new A.Mb()).l(0,b,c)},
CZ(a,b){var s=this.a,r=s.j(0,a)
r.toString
r.v(0,b)
if(r.gN(r))s.v(0,a)},
IX(a,b,c){var s,r,q,p
try{b.$1(a.ac(c))}catch(q){s=A.a8(q)
r=A.av(q)
p=A.b5("while routing a pointer event")
A.d4(new A.bd(s,r,"gesture library",p,null,!1))}},
D8(a){var s=this,r=s.a.j(0,a.gaT()),q=s.b,p=t.yd,o=t.rY,n=A.l_(q,p,o)
if(r!=null)s.xe(a,r,A.l_(r,p,o))
s.xe(a,q,n)},
xe(a,b,c){c.a_(0,new A.Ma(this,b,a))}}
A.Mb.prototype={
$0(){return A.w(t.yd,t.rY)},
$S:137}
A.Ma.prototype={
$2(a,b){if(this.b.P(a))this.a.IX(this.c,a,b)},
$S:138}
A.Mc.prototype={
Z(a){return}}
A.HI.prototype={
C(){return"DragStartBehavior."+this.b}}
A.bw.prototype={
rF(a){},
A5(a){var s=this
s.e.l(0,a.gaT(),a.gcN())
if(s.ht(a))s.eS(a)
else s.lx(a)},
eS(a){},
lx(a){},
ht(a){var s,r=this.c
if(r!=null){s=a.gcN()
s=r.a.P(s)
r=s}else r=!0
return r&&this.d.$1(a.gbU())},
S0(a){var s,r=this.c
if(r!=null){s=a.gcN()
s=r.a.P(s)
r=s}else r=!0
return r},
m(){},
C4(a,b,c){var s,r,q,p,o=null
try{o=b.$0()}catch(q){s=A.a8(q)
r=A.av(q)
p=A.b5("while handling a gesture")
A.d4(new A.bd(s,r,"gesture",p,null,!1))}return o},
co(a,b){return this.C4(a,b,null,t.z)},
RQ(a,b,c){return this.C4(a,b,c,t.z)}}
A.l6.prototype={
eS(a){this.mz(a.gaT(),a.gaO())},
lx(a){this.Z(B.N)},
eR(a){},
fK(a){},
Z(a){var s,r,q=this.f,p=A.af(q.gaV(),!0,t.DP)
q.L(0)
for(q=p.length,s=0;s<q;++s){r=p[s]
r.a.kC(r.b,r.c,a)}},
m(){var s,r,q,p,o,n,m,l=this
l.Z(B.N)
for(s=l.r,r=new A.ic(s,s.kh()),q=A.o(r).c;r.q();){p=r.d
if(p==null)p=q.a(p)
o=$.dO.x1$
n=l.glv()
o=o.a
m=o.j(0,p)
m.toString
m.v(0,n)
if(m.gN(m))o.v(0,p)}s.L(0)
l.vR()},
Hx(a){return $.dO.x2$.A1(0,a,this)},
mz(a,b){var s=this
$.dO.x1$.A6(a,s.glv(),b)
s.r.D(0,a)
s.f.l(0,a,s.Hx(a))},
eL(a){var s=this.r
if(s.A(0,a)){$.dO.x1$.CZ(a,this.glv())
s.v(0,a)
if(s.a===0)this.o0(a)}},
vI(a){if(t.Cs.b(a)||t.AJ.b(a)||t.zv.b(a))this.eL(a.gaT())}}
A.dU.prototype={
T(a,b){return new A.dU(this.a.T(0,b.a),this.b.T(0,b.b))},
V(a,b){return new A.dU(this.a.V(0,b.a),this.b.V(0,b.b))},
i(a){return"OffsetPair(local: "+this.a.i(0)+", global: "+this.b.i(0)+")"}}
A.B2.prototype={}
A.ez.prototype={
V(a,b){return new A.ez(this.a.V(0,b.a))},
T(a,b){return new A.ez(this.a.T(0,b.a))},
OW(a,b){var s=this.a,r=s.go4()
if(r>b*b)return new A.ez(s.eg(0,s.gc7()).W(0,b))
if(r<a*a)return new A.ez(s.eg(0,s.gc7()).W(0,a))
return this},
h(a,b){if(b==null)return!1
return b instanceof A.ez&&b.a.h(0,this.a)},
gp(a){var s=this.a
return A.D(s.a,s.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this.a
return"Velocity("+B.c.R(s.a,1)+", "+B.c.R(s.b,1)+")"}}
A.z8.prototype={
i(a){var s=this,r=s.a
return"VelocityEstimate("+B.c.R(r.a,1)+", "+B.c.R(r.b,1)+"; offset: "+s.d.i(0)+", duration: "+s.c.i(0)+", confidence: "+B.c.R(s.b,1)+")"}}
A.rF.prototype={
i(a){return"_PointAtTime("+this.b.i(0)+" at "+this.a.i(0)+")"}}
A.i6.prototype={
kR(a,b){var s=++this.c
if(s===20)s=this.c=0
this.b[s]=new A.rF(a,b)},
vm(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.W,e=A.a([],f),d=A.a([],f),c=A.a([],f),b=A.a([],f),a=this.c
f=this.b
s=f[a]
if(s==null)return null
r=s.a.a
q=s
p=q
o=0
do{n=f[a]
if(n==null)break
m=n.a.a
l=(r-m)/1000
if(l>100||Math.abs(m-p.a.a)/1000>40)break
k=n.b
e.push(k.a)
d.push(k.b)
c.push(1)
b.push(-l)
a=(a===0?20:a)-1;++o
if(o<20){q=n
p=q
continue}else{q=n
break}}while(!0)
if(o>=3){j=new A.wh(b,e,c).vF(2)
if(j!=null){i=new A.wh(b,d,c).vF(2)
if(i!=null){f=j.a[1]
m=i.a[1]
h=j.b
h===$&&A.e()
g=i.b
g===$&&A.e()
return new A.z8(new A.v(f*1000,m*1000),h*g,new A.aO(r-q.a.a),s.b.V(0,q.b))}}}return new A.z8(B.h,1,new A.aO(r-q.a.a),s.b.V(0,q.b))}}
A.kg.prototype={
gp(a){var s=this
return A.D(s.gbP(),s.gcB(),s.c,s.d,s.gcG(),s.gdI(),s.r,s.glz(),s.grD(),s.y,s.z,s.Q,s.gm8(),s.gm5(),s.ax,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.kg&&J.c(b.gbP(),s.gbP())&&J.c(b.gcB(),s.gcB())&&b.c==s.c&&b.d==s.d&&J.c(b.gcG(),s.gcG())&&J.c(b.gdI(),s.gdI())&&J.c(b.r,s.r)&&J.c(b.glz(),s.glz())&&J.c(b.grD(),s.grD())&&b.z==s.z&&b.Q==s.Q&&J.c(b.gm8(),s.gm8())&&J.c(b.gm5(),s.gm5())&&!0},
gbP(){return this.a},
gcB(){return this.b},
gcG(){return this.e},
gdI(){return this.f},
glz(){return this.w},
grD(){return this.x},
gm8(){return this.as},
gm5(){return this.at}}
A.zv.prototype={}
A.mV.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.mV&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&b.c==s.c&&b.d==s.d&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&J.c(b.w,s.w)}}
A.zB.prototype={}
A.oE.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.oE&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&b.f==s.f&&J.c(b.r,s.r)&&J.c(b.w,s.w)}}
A.By.prototype={}
A.mX.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.mX&&J.c(b.a,s.a)&&b.b==s.b&&b.d==s.d&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)}}
A.zG.prototype={}
A.mY.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.mY)if(J.c(b.a,r.a))if(b.b==r.b)if(J.c(b.c,r.c))if(J.c(b.d,r.d))if(J.c(b.e,r.e))if(J.c(b.f,r.f))if(J.c(b.r,r.r))if(J.c(b.w,r.w))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.zH.prototype={}
A.mZ.prototype={
gp(a){var s=this
return A.D(s.gbP(),s.gdI(),s.c,s.d,s.e,s.gcG(),s.r,s.w,s.x,s.gti(),s.gtj(),s.Q,s.gaK(),B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.mZ)if(J.c(b.gbP(),r.gbP()))if(J.c(b.gdI(),r.gdI()))if(b.c==r.c)if(J.c(b.d,r.d))if(J.c(b.gcG(),r.gcG()))if(J.c(b.e,r.e))if(b.r==r.r)if(J.c(b.w,r.w))if(J.c(b.gti(),r.gti()))if(J.c(b.gtj(),r.gtj()))s=J.c(b.gaK(),r.gaK())
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gbP(){return this.a},
gdI(){return this.b},
gcG(){return this.f},
gti(){return this.y},
gtj(){return this.z},
gaK(){return this.as}}
A.zI.prototype={}
A.n3.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.n3)if(b.d==r.d)if(b.e==r.e)if(J.c(b.f,r.f))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.zK.prototype={}
A.Gk.prototype={
C(){return"ButtonTextTheme."+this.b}}
A.uv.prototype={
gdE(){switch(0){case 0:case 1:return B.w9}},
gct(){switch(0){case 0:case 1:return B.BQ}},
h(a,b){var s=this
if(b==null)return!1
if(J.B(b)!==A.q(s))return!1
return b instanceof A.uv&&b.gdE().h(0,s.gdE())&&b.gct().h(0,s.gct())&&J.c(b.w,s.w)&&J.c(b.y,s.y)&&J.c(b.z,s.z)&&J.c(b.at,s.at)&&b.ax==s.ax},
gp(a){var s=this
return A.D(B.tR,88,36,s.gdE(),s.gct(),!1,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.zM.prototype={}
A.n4.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.n4&&J.c(b.b,s.b)&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&b.e==s.e&&J.c(b.f,s.f)&&J.c(b.r,s.r)}}
A.zN.prototype={}
A.n5.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.n5&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e&&J.c(b.w,s.w)&&J.c(b.x,s.x)}}
A.zO.prototype={}
A.n7.prototype={
gp(a){var s=this
return A.bN([s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy])},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.n7&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&J.c(b.w,s.w)&&b.x==s.x&&J.c(b.y,s.y)&&J.c(b.z,s.z)&&J.c(b.Q,s.Q)&&J.c(b.as,s.as)&&J.c(b.at,s.at)&&J.c(b.ax,s.ax)&&J.c(b.ay,s.ay)&&b.ch==s.ch&&b.CW==s.CW&&b.cx==s.cx&&J.c(b.cy,s.cy)}}
A.zQ.prototype={}
A.uH.prototype={
h(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
if(a0==null)return!1
if(b===a0)return!0
if(J.B(a0)!==A.q(b))return!1
if(a0 instanceof A.uH)if(a0.a===b.a){s=a0.b
r=b.b
if(s.h(0,r)){q=a0.c
p=b.c
if(q.h(0,p)){o=a0.d
if(o==null)o=s
n=b.d
if(o.h(0,n==null?r:n)){o=a0.e
if(o==null)o=q
n=b.e
if(o.h(0,n==null?p:n)){o=a0.f
n=b.f
if(o.h(0,n)){m=a0.r
l=b.r
if(m.h(0,l)){k=a0.w
if(k==null)k=o
j=b.w
if(k.h(0,j==null?n:j)){k=a0.x
if(k==null)k=m
j=b.x
if(k.h(0,j==null?l:j)){k=a0.y
j=k==null
i=j?o:k
h=b.y
g=h==null
if(i.h(0,g?n:h)){i=a0.z
f=i==null
e=f?m:i
d=b.z
c=d==null
if(e.h(0,c?l:d)){e=a0.Q
if(e==null)o=j?o:k
else o=e
k=b.Q
if(k==null)n=g?n:h
else n=k
if(o.h(0,n)){o=a0.as
if(o==null)o=f?m:i
n=b.as
if(n==null)n=c?l:d
if(o.h(0,n)){o=a0.at
n=b.at
if(o.h(0,n)){m=a0.ax
l=b.ax
if(m.h(0,l)){k=a0.ay
o=k==null?o:k
k=b.ay
if(o.h(0,k==null?n:k)){o=a0.ch
if(o==null)o=m
n=b.ch
if(o.h(0,n==null?l:n))if(a0.CW.h(0,b.CW)){o=a0.cx
n=b.cx
if(o.h(0,n)){m=a0.cy
l=b.cy
if(m.h(0,l)){k=a0.db
j=b.db
if(k.h(0,j)){i=a0.dx
if(i==null)i=m
h=b.dx
if(i.h(0,h==null?l:h)){i=a0.dy
if(i==null)i=k
h=b.dy
if(i.h(0,h==null?j:h)){i=a0.fr
if(i==null)i=o
h=b.fr
if(i.h(0,h==null?n:h)){i=a0.fx
o=i==null?o:i
i=b.fx
if(o.h(0,i==null?n:i)){o=a0.fy
if(o==null)o=B.j
n=b.fy
if(o.h(0,n==null?B.j:n)){o=a0.go
if(o==null)o=B.j
n=b.go
if(o.h(0,n==null?B.j:n)){o=a0.id
if(o==null)o=k
n=b.id
if(o.h(0,n==null?j:n)){o=a0.k1
if(o==null)o=m
n=b.k1
if(o.h(0,n==null?l:n)){o=a0.k2
q=o==null?q:o
o=b.k2
if(q.h(0,o==null?p:o)){q=a0.k3
s=q==null?s:q
q=b.k3
s=s.h(0,q==null?r:q)}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
return s},
gp(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.b,a9=a7.c,b0=a7.d
if(b0==null)b0=a8
s=a7.e
if(s==null)s=a9
r=a7.f
q=a7.r
p=a7.w
if(p==null)p=r
o=a7.x
if(o==null)o=q
n=a7.y
m=n==null
l=m?r:n
k=a7.z
j=k==null
i=j?q:k
h=a7.Q
if(h==null){if(m)n=r}else n=h
m=a7.as
if(m==null)m=j?q:k
k=a7.at
j=a7.ax
h=a7.ay
if(h==null)h=k
g=a7.ch
if(g==null)g=j
f=a7.cx
e=a7.cy
d=a7.db
c=a7.dx
if(c==null)c=e
b=a7.dy
if(b==null)b=d
a=a7.fr
if(a==null)a=f
a0=a7.fx
if(a0==null)a0=f
a1=a7.fy
if(a1==null)a1=B.j
a2=a7.go
if(a2==null)a2=B.j
a3=a7.id
if(a3==null)a3=d
a4=a7.k1
if(a4==null)a4=e
a5=a7.k2
if(a5==null)a5=a9
a6=a7.k3
return A.D(a7.a,a8,a9,b0,s,r,q,p,o,l,i,n,m,k,j,h,g,a7.CW,f,A.D(e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6==null?a8:a6,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.zT.prototype={}
A.wo.prototype={}
A.no.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.no)if(J.c(b.a,r.a))if(b.b==r.b)if(b.c==r.c)if(b.d==r.d)if(J.c(b.e,r.e))if(b.f==r.f)if(b.r==r.r)if(J.c(b.w,r.w))if(b.x==r.x)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.Ak.prototype={}
A.np.prototype={
gp(a){var s=this
return A.bN([s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,s.dx,s.dy,s.fr,s.fx,s.fy,s.go,s.id,s.k1,s.k2,s.k3,s.k4,s.ok])},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.np&&J.c(b.a,s.a)&&b.b==s.b&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&J.c(b.w,s.w)&&J.c(b.x,s.x)&&J.c(b.y,s.y)&&J.c(b.z,s.z)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&b.ay==s.ay&&J.c(b.ch,s.ch)&&J.c(b.CW,s.CW)&&b.cx==s.cx&&b.cy==s.cy&&b.db==s.db&&J.c(b.dx,s.dx)&&b.dy==s.dy&&J.c(b.fr,s.fr)&&J.c(b.fx,s.fx)&&J.c(b.fy,s.fy)&&J.c(b.go,s.go)&&J.c(b.id,s.id)&&J.c(b.k1,s.k1)&&J.c(b.k2,s.k2)&&J.c(b.k3,s.k3)&&b.k4==s.k4&&J.c(b.ok,s.ok)}}
A.Am.prototype={}
A.nx.prototype={
gp(a){return J.j(this.e)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.nx&&J.c(b.a,s.a)&&b.b==s.b&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.y,s.y)&&J.c(b.r,s.r)&&J.c(b.w,s.w)&&J.c(b.x,s.x)}}
A.Au.prototype={}
A.ny.prototype={
gp(a){var s=this
return A.D(s.gaa(),s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.ny&&J.c(b.gaa(),s.gaa())&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e},
gaa(){return this.a}}
A.Ay.prototype={}
A.nD.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.nD&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&b.c==s.c&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&b.w==s.w}}
A.AC.prototype={}
A.nE.prototype={
gp(a){return A.D(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.nE)if(J.c(b.a,r.a))s=J.c(b.c,r.c)
else s=!1
else s=!1
return s}}
A.AD.prototype={}
A.nI.prototype={
gp(a){return J.j(this.a)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.nI&&J.c(b.a,this.a)}}
A.AF.prototype={}
A.nS.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.nS&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&J.c(b.w,s.w)&&J.c(b.x,s.x)&&J.c(b.y,s.y)&&J.c(b.z,s.z)&&!0}}
A.AM.prototype={}
A.nW.prototype={
gp(a){return J.j(this.a)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.nW&&J.c(b.a,this.a)}}
A.AO.prototype={}
A.kE.prototype={
gp(a){var s=this
return A.D(s.gcB(),s.gbP(),s.glr(),s.gly(),s.gjW(),s.f,s.r,s.w,s.x,s.y,s.gct(),s.Q,s.gf5(),s.at,s.ax,s.ay,s.ch,s.CW,s.gln(),A.D(s.glo(),s.db,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.kE&&J.c(b.gcB(),s.gcB())&&J.c(b.gbP(),s.gbP())&&J.c(b.glr(),s.glr())&&J.c(b.gly(),s.gly())&&J.c(b.gjW(),s.gjW())&&b.f==s.f&&b.r==s.r&&b.w==s.w&&b.x==s.x&&b.y==s.y&&J.c(b.gct(),s.gct())&&b.Q==s.Q&&b.gf5()==s.gf5()&&J.c(b.at,s.at)&&J.c(b.ax,s.ax)&&J.c(b.ay,s.ay)&&J.c(b.ch,s.ch)&&b.CW==s.CW&&J.c(b.gln(),s.gln())&&J.c(b.glo(),s.glo())&&!0},
gcB(){return this.a},
gbP(){return this.b},
glr(){return this.c},
gly(){return this.d},
gjW(){return this.e},
gct(){return this.z},
gf5(){return this.as},
gln(){return this.cx},
glo(){return this.cy}}
A.AP.prototype={}
A.kN.prototype={
gp(a){return J.j(this.a)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.kN&&J.c(b.a,this.a)}}
A.Ba.prototype={}
A.Ue.prototype={
$0(){var s=this.a.gG()
return new A.A(0,0,0+s.a,0+s.b)},
$S:139}
A.RN.prototype={
Pu(a,b,c,d,e,f,g,h,i,j,k){var s,r,q=null,p=h==null?A.ab7(j,c,i,g):h,o=new A.oe(g,B.W,p,A.ab4(j,c,i),!c,k,b,e,d,j,f),n=d.t,m=A.fn(q,B.hJ,q,q,n),l=d.gdD()
m.bk()
s=m.c8$
s.b=!0
s.a.push(l)
m.fD()
o.CW=m
s=t.a7
r=t.yz
o.ch=new A.aQ(r.a(m),new A.ar(0,p,s),s.k("aQ<ak.T>"))
n=A.fn(q,B.ax,q,q,n)
n.bk()
s=n.c8$
s.b=!0
s.a.push(l)
n.bk()
l=n.bD$
l.b=!0
l.a.push(o.gLn())
o.cy=n
l=b.gn()
o.cx=new A.aQ(r.a(n),new A.j5(l>>>24&255,0),t.xD.k("aQ<ak.T>"))
d.A4(o)
return o}}
A.oe.prototype={
rY(){var s=B.c.dA(this.as/1),r=this.CW
r===$&&A.e()
r.e=A.c5(0,s)
r.fD()
this.cy.fD()},
bM(){var s=this.cy
if(s!=null)s.fD()},
Lo(a){if(a===B.V)this.m()},
m(){var s=this,r=s.CW
r===$&&A.e()
r.m()
s.cy.m()
s.cy=null
s.hJ()},
CB(a,b){var s,r=this,q=$.am().b6(),p=r.e,o=r.cx
o===$&&A.e()
q.saa(A.aN(o.b.a4(o.a.gn()),p.gn()>>>16&255,p.gn()>>>8&255,p.gn()&255))
s=r.z
if(r.ax){p=r.b.gG().h5(B.h)
o=r.CW
o===$&&A.e()
o=o.x
o===$&&A.e()
s=A.wO(s,p,o)}s.toString
p=r.ch
p===$&&A.e()
p=p.b.a4(p.a.gn())
r.SR(r.Q,a,s,r.at,r.f,q,p,r.ay,b)}}
A.hw.prototype={
rY(){},
bM(){},
saa(a){if(a.h(0,this.e))return
this.e=a
this.a.aj()},
st6(a){if(J.c(a,this.f))return
this.f=a
this.a.aj()},
SR(a,b,c,d,e,f,g,h,i){var s,r=A.WO(i)
b.dg()
if(r==null)b.a4(i.a)
else b.aA(r.a,r.b)
if(d!=null){s=d.$0()
if(e!=null)b.eU(e.eh(s,h))
else if(!a.h(0,B.W))b.jb(A.Mo(s,a.c,a.d,a.a,a.b))
else b.kZ(s)}b.ha(c,g,f)
b.dc()}}
A.K3.prototype={}
A.IL.prototype={
C(){return"FloatingLabelBehavior."+this.b}}
A.vC.prototype={
gp(a){return B.f.gp(-1)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.vC&&!0},
i(a){return A.a6h(-1)}}
A.w5.prototype={
gp(a){var s=null
return A.D(s,s,s,s,s,s,s,B.wk,B.dX,!1,s,!1,s,s,s,s,s,s,!1,A.D(s,s,s,s,s,s,s,s,s,s,s,!1,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
h(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
if(b instanceof A.w5)if(B.dX.h(0,B.dX))s=!0
else s=!1
else s=!1
return s}}
A.Be.prototype={}
A.ot.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.ot)if(J.c(b.b,r.b))if(b.c==r.c)if(J.c(b.d,r.d))if(J.c(b.e,r.e))if(J.c(b.r,r.r))if(J.c(b.w,r.w))if(J.c(b.x,r.x))if(J.c(b.f,r.f))if(J.c(b.y,r.y))if(J.c(b.z,r.z))if(J.c(b.Q,r.Q))if(b.as==r.as)if(b.at==r.at)if(b.ax==r.ax)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.Bv.prototype={}
A.hu.prototype={
m(){this.a.MQ(this)
this.c.$0()},
i(a){return"<optimized out>#"+A.aZ(this)}}
A.ww.prototype={}
A.oI.prototype={
gp(a){return J.j(this.a)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.oI&&J.c(b.a,this.a)}}
A.BE.prototype={}
A.l3.prototype={
gp(a){return J.j(this.a)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.l3&&J.c(b.a,this.a)}}
A.BG.prototype={}
A.oW.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.oW&&b.a==s.a&&J.c(b.b,s.b)&&b.c==s.c&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&b.w==s.w&&b.x==s.x&&!0}}
A.BQ.prototype={}
A.oX.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.oX&&b.a==s.a&&J.c(b.b,s.b)&&b.c==s.c&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&J.c(b.w,s.w)&&b.x==s.x&&b.y==s.y}}
A.BR.prototype={}
A.oY.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.oY&&J.c(b.a,s.a)&&b.b==s.b&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&b.r==s.r&&J.c(b.y,s.y)&&J.c(b.z,s.z)&&b.Q==s.Q&&b.as==s.as}}
A.BS.prototype={}
A.p1.prototype={
gp(a){return J.j(this.a)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.p1&&J.c(b.a,this.a)}}
A.C0.prototype={}
A.Ey.prototype={
M(a){var s=this
return new A.kx(s.c,new A.TU(s),new A.TV(s),new A.kx(new A.er(s.d,new A.aL(A.a([],t.uO),t.zc),0),new A.TW(s),new A.TX(s),s.f,null),null)}}
A.TU.prototype={
$3(a,b,c){return new A.il(b,c,this.a.e&&!0,!1,null)},
$C:"$3",
$R:3,
$S:49}
A.TV.prototype={
$3(a,b,c){return new A.im(b,this.a.e,!0,c,null)},
$C:"$3",
$R:3,
$S:48}
A.TW.prototype={
$3(a,b,c){return new A.il(b,c,this.a.e&&!0,!0,null)},
$C:"$3",
$R:3,
$S:49}
A.TX.prototype={
$3(a,b,c){return new A.im(b,this.a.e,!1,c,null)},
$C:"$3",
$R:3,
$S:48}
A.il.prototype={
an(){return new A.Ew(new A.q9($.aU()),$,$,B.m)}}
A.Ew.prototype={
gv4(){return!1},
kw(){var s,r=this,q=r.a,p=q.f
if(p)s=B.bA
else{s=$.a3B()
s=new A.aQ(q.c,s,s.$ti.k("aQ<ak.T>"))}r.fz$=s
p=p?$.a3C():$.a3D()
q=q.c
r.he$=new A.aQ(q,p,p.$ti.k("aQ<ak.T>"))
q.a5(r.gjF())
r.a.c.d_(r.gjE())},
aN(){var s,r,q,p,o=this
o.kw()
s=o.a
r=s.f
q=o.fz$
q===$&&A.e()
p=o.he$
p===$&&A.e()
o.d=A.a1f(s.c,q,r,p)
o.ba()},
aL(a){var s,r,q,p=this,o=p.a
if(a.f!==o.f||a.c!==o.c){o=a.c
o.O(p.gjF())
o.bL(p.gjE())
p.kw()
o=p.d
o===$&&A.e()
o.m()
o=p.a
s=o.f
r=p.fz$
r===$&&A.e()
q=p.he$
q===$&&A.e()
p.d=A.a1f(o.c,r,s,q)}p.bh(a)},
m(){var s,r=this
r.a.c.O(r.gjF())
r.a.c.bL(r.gjE())
s=r.d
s===$&&A.e()
s.m()
r.H9()},
M(a){var s=this.d
s===$&&A.e()
return A.a07(!0,this.a.d,this.hd$,B.rT,s)}}
A.im.prototype={
an(){return new A.Ex(new A.q9($.aU()),$,$,B.m)}}
A.Ex.prototype={
gv4(){return!1},
kw(){var s,r=this,q=r.a,p=q.e
if(p){s=$.a3F()
s=new A.aQ(q.c,s,s.$ti.k("aQ<ak.T>"))}else s=B.bA
r.fz$=s
p=p?$.a3G():$.a3H()
q=q.c
r.he$=new A.aQ(q,p,p.$ti.k("aQ<ak.T>"))
q.a5(r.gjF())
r.a.c.d_(r.gjE())},
aN(){var s,r,q,p,o=this
o.kw()
s=o.a
r=s.e
q=o.fz$
q===$&&A.e()
p=o.he$
p===$&&A.e()
o.d=A.a1g(s.c,q,r,p)
o.ba()},
aL(a){var s,r,q,p=this,o=p.a
if(a.e!==o.e||a.c!==o.c){o=a.c
o.O(p.gjF())
o.bL(p.gjE())
p.kw()
o=p.d
o===$&&A.e()
o.m()
o=p.a
s=o.e
r=p.fz$
r===$&&A.e()
q=p.he$
q===$&&A.e()
p.d=A.a1g(o.c,r,s,q)}p.bh(a)},
m(){var s,r=this
r.a.c.O(r.gjF())
r.a.c.bL(r.gjE())
s=r.d
s===$&&A.e()
s.m()
r.Ha()},
M(a){var s=this.d
s===$&&A.e()
return A.a07(!0,this.a.f,this.hd$,B.rT,s)}}
A.fI.prototype={}
A.zg.prototype={
Ao(a,b,c,d,e){return new A.Ey(c,d,!0,e,!0,null)}}
A.uP.prototype={
Ao(a,b,c,d,e,f){return A.a5d(a,b,c,d,e,f)}}
A.wU.prototype={
pQ(a){var s=t.dM
return A.af(new A.an(B.yl,new A.LF(a),s),!0,s.k("aJ.E"))},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
s=b instanceof A.wU
if(s&&!0)return!0
return s&&A.cm(r.pQ(B.d7),r.pQ(B.d7))},
gp(a){return A.bN(this.pQ(B.d7))}}
A.LF.prototype={
$1(a){return this.a.j(0,a)},
$S:81}
A.mw.prototype={
SG(){var s,r=this,q=r.he$
q===$&&A.e()
if(J.c(q.b.a4(q.a.gn()),1)){q=r.fz$
q===$&&A.e()
q=J.c(q.gn(),0)||J.c(r.fz$.gn(),1)}else q=!1
s=r.hd$
if(q)s.snB(!1)
else{r.gv4()
s.snB(!1)}},
SF(a){switch(a.a){case 0:case 3:this.hd$.snB(!1)
break
case 1:case 2:this.gv4()
this.hd$.snB(!1)
break}}}
A.tt.prototype={
r4(a){this.b3()},
J3(a,b,c){var s,r,q,p,o
if(!this.r&&this.w.gak()!==B.V){s=$.a3E().a4(this.w.gn())
s.toString
r=s}else r=0
if(r>0){s=a.gbb()
q=b.a
p=b.b
o=$.am().b6()
o.saa(A.aN(B.c.c1(255*r),0,0,0))
s.bX(new A.A(q,p,q+c.a,p+c.b),o)}},
CA(a,b,c,d){var s,r,q=this
switch(q.w.gak().a){case 3:case 0:return d.$2(a,b)
case 1:case 2:break}q.J3(a,b,c)
s=q.z
r=q.x
A.a1S(s,r.b.a4(r.a.gn()),c)
r=q.as
r.saG(a.uv(!0,b,s,new A.TS(q,d),r.a))},
m(){var s=this,r=s.w,q=s.ghy()
r.O(q)
r.bL(s.gkv())
s.x.a.O(q)
s.y.O(q)
s.Q.saG(null)
s.as.saG(null)
s.fS()},
iG(a){var s,r,q=this
if(a.r===q.r)if(J.c(a.w.gn(),q.w.gn())){s=a.x
r=q.x
s=!J.c(s.b.a4(s.a.gn()),r.b.a4(r.a.gn()))||!J.c(a.y.gn(),q.y.gn())}else s=!0
else s=!0
return s}}
A.TS.prototype={
$2(a,b){var s=this.a,r=s.Q
r.saG(a.CQ(b,B.c.c1(s.y.gn()*255),this.b,r.a))},
$S:16}
A.tu.prototype={
r4(a){this.b3()},
CA(a,b,c,d){var s,r,q=this
switch(q.y.gak().a){case 3:case 0:return d.$2(a,b)
case 1:case 2:break}s=q.z
r=q.w
A.a1S(s,r.b.a4(r.a.gn()),c)
r=q.as
r.saG(a.uv(!0,b,s,new A.TT(q,d),r.a))},
iG(a){var s,r
if(a.r===this.r)if(J.c(a.x.gn(),this.x.gn())){s=a.w
r=this.w
r=!J.c(s.b.a4(s.a.gn()),r.b.a4(r.a.gn()))
s=r}else s=!0
else s=!0
return s},
m(){var s,r=this
r.Q.saG(null)
r.as.saG(null)
s=r.ghy()
r.w.a.O(s)
r.x.O(s)
r.y.bL(r.gkv())
r.fS()}}
A.TT.prototype={
$2(a,b){var s=this.a,r=s.Q
r.saG(a.CQ(b,B.c.c1(s.x.gn()*255),this.b,r.a))},
$S:16}
A.C5.prototype={}
A.tD.prototype={
m(){var s=this.hd$
s.S$=$.aU()
s.H$=0
this.aR()}}
A.tE.prototype={
m(){var s=this.hd$
s.S$=$.aU()
s.H$=0
this.aR()}}
A.pi.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.pi)if(J.c(b.a,r.a))if(J.c(b.b,r.b))if(b.c==r.c)if(J.c(b.d,r.d))if(J.c(b.e,r.e))if(J.c(b.f,r.f))if(b.r==r.r)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.CE.prototype={}
A.Qh.prototype={
C(){return"_ActivityIndicatorType."+this.b}}
A.xt.prototype={}
A.zR.prototype={
aH(a,b){var s,r,q,p,o,n,m=this,l=$.am(),k=l.b6()
k.saa(m.c)
s=m.x
k.sfQ(s)
k.sc4(B.B)
r=s/2*-m.y
q=r*2
p=b.a-q
q=b.b-q
o=m.b
if(o!=null){n=l.b6()
n.saa(o)
n.sfQ(s)
n.sc4(B.B)
a.B4(new A.A(r,r,r+p,r+q),0,6.282185307179586,!1,n)}k.sEA(B.De)
a.B4(new A.A(r,r,r+p,r+q),m.z,m.Q,!1,k)},
iG(a){var s=this
return!J.c(a.b,s.b)||!a.c.h(0,s.c)||a.e!==s.e||a.f!==s.f||a.r!==s.r||a.w!==s.w||a.x!==s.x||a.y!==s.y||!1}}
A.n8.prototype={
an(){return new A.zS(null,null,B.m)}}
A.zS.prototype={
aN(){var s,r=this
r.ba()
s=A.fn(null,B.w3,null,null,r)
r.d=s
r.a.toString
s.D1()},
aL(a){var s,r
this.bh(a)
this.a.toString
s=this.d
s===$&&A.e()
r=s.r
r=!(r!=null&&r.a!=null)
if(r)s.D1()},
m(){var s=this.d
s===$&&A.e()
s.m()
this.H0()},
HQ(a,b,c,d,e){var s,r,q,p,o=null
A.aV(a)
this.a.toString
s=A.a_M(a)
this.a.toString
r=new A.QD(a,o,o,o,o,o).gaa()
q=A.a_M(a).a
r=q==null?r:q
this.a.toString
q=c*3/2*3.141592653589793
p=Math.max(b*3/2*3.141592653589793-q,0.001)
s=A.Wb(o,A.Z5(o,o,new A.zR(s.d,r,o,b,c,d,e,4,0,-1.5707963267948966+q+e*3.141592653589793*2+d*0.5*3.141592653589793,p,o,o)),o,B.tL,o,o,o,o,o)
return A.dc(o,s,!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)},
HP(){var s=this.d
s===$&&A.e()
return A.kd(s,new A.QE(this),null)},
M(a){this.a.toString
switch(0){case 0:return this.HP()}}}
A.QE.prototype={
$2(a,b){var s=this.a,r=$.a3q(),q=s.d
q===$&&A.e()
return s.HQ(a,r.a4(q.gn()),$.a3r().a4(s.d.gn()),$.a3o().a4(s.d.gn()),$.a3p().a4(s.d.gn()))},
$S:46}
A.QD.prototype={
gaa(){var s,r=this,q=r.r
if(q===$){s=A.aV(r.f)
r.r!==$&&A.az()
q=r.r=s.ax}return q.b}}
A.tx.prototype={
m(){var s=this,r=s.d5$
if(r!=null)r.O(s.gkL())
s.d5$=null
s.aR()},
bT(){this.fn()
this.dT()
this.kM()}}
A.le.prototype={
gp(a){var s=this
return A.D(s.gaa(),s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.le&&J.c(b.gaa(),s.gaa())&&J.c(b.b,s.b)&&b.c==s.c&&J.c(b.d,s.d)&&J.c(b.e,s.e)},
gaa(){return this.a}}
A.CG.prototype={}
A.pl.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.pl)if(b.b==r.b)if(b.c==r.c)if(b.d==r.d)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.CK.prototype={}
A.pU.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.pU&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e&&J.c(b.f,s.f)&&b.r==s.r&&b.w==s.w&&b.x==s.x&&b.y==s.y&&b.z==s.z&&b.Q==s.Q}}
A.Dh.prototype={}
A.pV.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.pV&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e&&b.f==s.f&&b.r==s.r&&b.w==s.w&&b.x==s.x&&b.y==s.y&&J.c(b.z,s.z)}}
A.Di.prototype={}
A.pW.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.pW&&J.c(b.a,s.a)&&b.b==s.b&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&J.c(b.w,s.w)&&J.c(b.x,s.x)}}
A.Dj.prototype={}
A.pX.prototype={
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.pX&&J.c(b.a,this.a)&&!0}}
A.Dk.prototype={}
A.q6.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.r,s.f,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,A.D(s.cy,s.db,s.dx,s.dy,s.fr,s.fx,s.fy,s.go,s.id,s.k1,s.k2,s.k3,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.q6)if(b.a==r.a)if(J.c(b.b,r.b))if(J.c(b.c,r.c))if(J.c(b.d,r.d))if(J.c(b.e,r.e))if(J.c(b.r,r.r))if(J.c(b.f,r.f))if(J.c(b.w,r.w))if(J.c(b.x,r.x))if(J.c(b.y,r.y))if(J.c(b.z,r.z))if(J.c(b.Q,r.Q))if(J.c(b.as,r.as))if(J.c(b.at,r.at))if(J.c(b.ax,r.ax))if(J.c(b.ay,r.ay))if(J.c(b.go,r.go))if(b.id==r.id)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.DB.prototype={}
A.q8.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,null,s.z,s.Q,s.as,s.at,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.q8&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&b.e==s.e&&J.c(b.f,s.f)&&b.w==s.w&&J.c(b.x,s.x)&&J.c(b.z,s.z)&&b.Q==s.Q&&J.c(b.as,s.as)&&J.c(b.at,s.at)}}
A.DC.prototype={}
A.qe.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.qe&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.r==s.r&&b.w==s.w&&!0}}
A.DH.prototype={}
A.qf.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.qf)if(J.c(b.a,r.a))if(J.c(b.b,r.b))if(J.c(b.d,r.d))if(J.c(b.e,r.e))if(J.c(b.f,r.f))if(J.c(b.r,r.r))if(J.c(b.w,r.w))if(J.c(b.x,r.x))if(b.y==r.y)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.DK.prototype={}
A.qh.prototype={
gp(a){return J.j(this.a)},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.qh&&J.c(b.a,this.a)}}
A.DM.prototype={}
A.qo.prototype={
gp(a){return A.D(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.qo&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&J.c(b.c,s.c)}}
A.DN.prototype={}
A.bP.prototype={
by(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
if(b3==null)return b1
s=b1.a
r=s==null?b2:s.by(b3.a)
if(r==null)r=b3.a
q=b1.b
p=q==null?b2:q.by(b3.b)
if(p==null)p=b3.b
o=b1.c
n=o==null?b2:o.by(b3.c)
if(n==null)n=b3.c
m=b1.d
l=m==null?b2:m.by(b3.d)
if(l==null)l=b3.d
k=b1.e
j=k==null?b2:k.by(b3.e)
if(j==null)j=b3.e
i=b1.f
h=i==null?b2:i.by(b3.f)
if(h==null)h=b3.f
g=b1.r
f=g==null?b2:g.by(b3.r)
if(f==null)f=b3.r
e=b1.w
d=e==null?b2:e.by(b3.w)
if(d==null)d=b3.w
c=b1.x
b=c==null?b2:c.by(b3.x)
if(b==null)b=b3.x
a=b1.y
a0=a==null?b2:a.by(b3.y)
if(a0==null)a0=b3.y
a1=b1.z
a2=a1==null?b2:a1.by(b3.z)
if(a2==null)a2=b3.z
a3=b1.Q
a4=a3==null?b2:a3.by(b3.Q)
if(a4==null)a4=b3.Q
a5=b1.as
a6=a5==null?b2:a5.by(b3.as)
if(a6==null)a6=b3.as
a7=b1.at
a8=a7==null?b2:a7.by(b3.at)
if(a8==null)a8=b3.at
a9=b1.ax
b0=a9==null?b2:a9.by(b3.ax)
if(b0==null)b0=b3.ax
if(r==null)r=b2
s=r==null?s:r
r=p==null?b2:p
if(r==null)r=q
q=n==null?b2:n
if(q==null)q=o
p=l==null?m:l
o=j==null?b2:j
if(o==null)o=k
n=h==null?b2:h
if(n==null)n=i
m=f==null?b2:f
if(m==null)m=g
l=d==null?b2:d
if(l==null)l=e
k=b==null?b2:b
if(k==null)k=c
j=a0==null?b2:a0
if(j==null)j=a
i=a2==null?b2:a2
if(i==null)i=a1
h=a4==null?b2:a4
if(h==null)h=a3
g=a6==null?b2:a6
if(g==null)g=a5
f=a8==null?a7:a8
e=b0==null?b2:b0
return A.a0i(j,i,h,s,r,q,p,o,n,g,f,e==null?a9:e,m,l,k)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.bP&&J.c(s.a,b.a)&&J.c(s.b,b.b)&&J.c(s.c,b.c)&&J.c(s.d,b.d)&&J.c(s.e,b.e)&&J.c(s.f,b.f)&&J.c(s.r,b.r)&&J.c(s.w,b.w)&&J.c(s.x,b.x)&&J.c(s.y,b.y)&&J.c(s.z,b.z)&&J.c(s.Q,b.Q)&&J.c(s.as,b.as)&&J.c(s.at,b.at)&&J.c(s.ax,b.ax)},
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,B.a,B.a,B.a,B.a,B.a)}}
A.DQ.prototype={}
A.wt.prototype={
C(){return"MaterialTapTargetSize."+this.b}}
A.dC.prototype={
h(a,b){var s,r,q=this
if(b==null)return!1
if(J.B(b)!==A.q(q))return!1
if(b instanceof A.dC)if(b.a===q.a)if(A.Vs(b.c,q.c))if(b.d.h(0,q.d))if(b.e===q.e)if(b.f.h(0,q.f))if(b.r===q.r)if(b.w.h(0,q.w))if(b.x===q.x)if(b.z.h(0,q.z))if(b.as.h(0,q.as))if(b.at.h(0,q.at))if(b.ax.h(0,q.ax))if(b.ay.h(0,q.ay))if(b.ch.h(0,q.ch))if(b.CW.h(0,q.CW))if(b.cx.h(0,q.cx))if(b.cy.h(0,q.cy))if(b.db.h(0,q.db))if(b.dx.h(0,q.dx))if(b.dy.h(0,q.dy))if(b.fr.h(0,q.fr))if(b.fx.h(0,q.fx))if(b.fy.h(0,q.fy))if(b.go.h(0,q.go))if(b.id.h(0,q.id))if(b.k2.h(0,q.k2))if(b.k3.h(0,q.k3))if(b.k4.h(0,q.k4))if(b.ok.h(0,q.ok))if(b.p1.h(0,q.p1))if(b.p2.h(0,q.p2))if(b.p3.h(0,q.p3))if(b.p4.h(0,q.p4))if(J.c(b.R8,q.R8))if(b.RG.h(0,q.RG))if(b.rx.h(0,q.rx))if(b.ry.h(0,q.ry))if(b.to.h(0,q.to))if(b.x1.h(0,q.x1))if(b.x2.h(0,q.x2))if(b.xr.h(0,q.xr))if(b.y1.h(0,q.y1))if(b.y2.h(0,q.y2))if(b.av.h(0,q.av))if(b.bq.h(0,q.bq))if(b.ar.h(0,q.ar))if(b.b0.h(0,q.b0))if(b.aZ.h(0,q.aZ))if(b.aw.h(0,q.aw))if(b.aM.h(0,q.aM))if(b.bQ.h(0,q.bQ))if(b.cm.h(0,q.cm))if(b.e4.h(0,q.e4))if(b.H.h(0,q.H))if(b.S.h(0,q.S))if(b.a2.h(0,q.a2))if(b.a3.h(0,q.a3))if(b.ag.h(0,q.ag))if(b.bd.h(0,q.bd))if(b.bF.h(0,q.bF))if(b.cb.h(0,q.cb))if(b.bG.h(0,q.bG))if(b.bH.h(0,q.bH))if(b.br.h(0,q.br))if(b.f1.h(0,q.f1))if(b.e5.h(0,q.e5))if(b.F.h(0,q.F))if(b.b_.h(0,q.b_))if(b.hi.h(0,q.hi))if(b.bO.h(0,q.bO))if(b.f2.h(0,q.f2))if(b.fA.h(0,q.fA))if(b.i4.h(0,q.i4))if(b.f3.h(0,q.f3))if(b.fB.h(0,q.fB))if(b.hj.h(0,q.hj))if(b.js.h(0,q.js))if(b.hk.h(0,q.hk))if(b.i5.h(0,q.i5)){s=b.jv
s.toString
r=q.jv
r.toString
if(s.h(0,r)){s=b.k1
s.toString
r=q.k1
r.toString
if(s.h(0,r)){s=b.jt
s.toString
r=q.jt
r.toString
if(s.h(0,r)){s=b.ju
s.toString
r=q.ju
r.toString
if(s.h(0,r)){s=b.Q
s.toString
r=q.Q
r.toString
r=s.h(0,r)
s=r}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gp(a){var s=this,r=[s.a,s.b],q=s.c
B.b.I(r,q.gb2())
B.b.I(r,q.gaV())
r.push(s.d)
r.push(s.e)
r.push(s.f)
r.push(s.r)
r.push(s.w)
r.push(s.x)
r.push(!1)
r.push(s.z)
r.push(s.as)
r.push(s.at)
r.push(s.ax)
r.push(s.ay)
r.push(s.ch)
r.push(s.CW)
r.push(s.cx)
r.push(s.cy)
r.push(s.db)
r.push(s.dx)
r.push(s.dy)
r.push(s.fr)
r.push(s.fx)
r.push(s.fy)
r.push(s.go)
r.push(s.id)
r.push(s.k2)
r.push(s.k3)
r.push(s.k4)
r.push(s.ok)
r.push(s.p1)
r.push(s.p2)
r.push(s.p3)
r.push(s.p4)
r.push(s.R8)
r.push(s.RG)
r.push(s.rx)
r.push(s.ry)
r.push(s.to)
r.push(s.x1)
r.push(s.x2)
r.push(s.xr)
r.push(s.y1)
r.push(s.y2)
r.push(s.av)
r.push(s.bq)
r.push(s.ar)
r.push(s.b0)
r.push(s.aZ)
r.push(s.aw)
r.push(s.aM)
r.push(s.bQ)
r.push(s.cm)
r.push(s.e4)
r.push(s.H)
r.push(s.S)
r.push(s.a2)
r.push(s.a3)
r.push(s.ag)
r.push(s.bd)
r.push(s.bF)
r.push(s.cb)
r.push(s.bG)
r.push(s.bH)
r.push(s.br)
r.push(s.f1)
r.push(s.e5)
r.push(s.F)
r.push(s.b_)
r.push(s.hi)
r.push(s.bO)
r.push(s.f2)
r.push(s.fA)
r.push(s.i4)
r.push(s.f3)
r.push(s.fB)
r.push(s.hj)
r.push(s.js)
r.push(s.hk)
r.push(s.i5)
r.push(s.ob)
q=s.jv
q.toString
r.push(q)
q=s.k1
q.toString
r.push(q)
q=s.jt
q.toString
r.push(q)
q=s.ju
q.toString
r.push(q)
q=s.Q
q.toString
r.push(q)
return A.bN(r)}}
A.PB.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=this.a,b3=this.b,b4=b3.by(b2.p2)
b3=b3.by(b2.p3)
s=b2.ax
r=s.b
q=s.c
p=s.d
if(p==null)p=r
o=s.e
if(o==null)o=q
n=s.f
m=s.r
l=s.w
if(l==null)l=n
k=s.x
if(k==null)k=m
j=s.y
i=j==null?n:j
h=s.z
g=h==null?m:h
f=s.Q
if(f==null){if(j==null)j=n}else j=f
f=s.as
if(f==null){if(h==null)h=m}else h=f
f=s.at
e=s.ax
d=s.ay
if(d==null)d=f
c=s.ch
if(c==null)c=e
b=s.cx
a=s.cy
a0=s.db
a1=s.dx
if(a1==null)a1=a
a2=s.dy
if(a2==null)a2=a0
a3=s.fr
if(a3==null)a3=b
a4=s.fx
if(a4==null)a4=b
a5=s.fy
if(a5==null)a5=B.j
a6=s.go
if(a6==null)a6=B.j
a7=s.id
if(a7==null)a7=a0
a8=s.k1
if(a8==null)a8=a
a9=s.k2
if(a9==null)a9=q
b0=s.k3
if(b0==null)b0=r
j=A.W5(s.CW,s.a,f,d,a9,a7,b,e,c,a8,q,o,m,k,a0,a2,g,h,a3,a4,r,p,a6,n,l,a5,a,b0,a1,i,j)
return A.Xh(b2.R8,b2.ob,b2.RG,b2.a,b2.ju,b2.rx,b2.ry,b2.Q,b2.to,b2.x1,b2.x2,b2.xr,b2.y1,b2.as,b2.at,b2.y2,b2.av,b2.bq,j,b2.b,b2.ar,b2.b0,b2.ay,b2.aZ,b2.ch,b2.CW,b2.aw,b2.aM,b2.bQ,b2.cm,b2.jt,b2.e4,b2.c,b2.H,b2.S,b2.cx,b2.cy,b2.db,b2.dx,b2.a2,b2.ok,b2.dy,b2.d,b2.a3,b2.e,b2.ag,b2.bd,b2.bF,b2.cb,b2.bG,b2.bH,b2.br,b2.f,b2.r,b2.f1,b2.fr,b2.fx,b2.fy,b2.p1,b4,b2.e5,b2.F,b2.go,b2.w,b2.b_,b2.hi,b2.id,b2.bO,b2.k1,b2.k2,b2.f2,b2.fA,b2.k3,b2.x,b2.i4,b2.f3,b2.fB,b2.hj,b3,b2.js,b2.hk,b2.jv,b2.i5,b2.p4,b2.k4,!1,b2.z)},
$S:145}
A.ma.prototype={
gp(a){return(A.mE(this.a)^A.mE(this.b))>>>0},
h(a,b){if(b==null)return!1
return b instanceof A.ma&&b.a===this.a&&b.b===this.b}}
A.AN.prototype={
bt(a,b){var s,r=this.a,q=r.j(0,a)
if(q!=null)return q
if(r.a===this.b){s=new A.aR(r,A.o(r).k("aR<1>"))
r.v(0,s.gJ(s))}s=b.$0()
r.l(0,a,s)
return s}}
A.lQ.prototype={
B8(a){var s=this.a,r=this.b,q=A.M(a.a+new A.v(s,r).W(0,4).a,0,a.b)
return a.Pp(A.M(a.c+new A.v(s,r).W(0,4).b,0,a.d),q)},
h(a,b){if(b==null)return!1
if(J.B(b)!==A.q(this))return!1
return b instanceof A.lQ&&b.a===this.a&&b.b===this.b},
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bu(){return this.F2()+"(h: "+A.fi(this.a)+", v: "+A.fi(this.b)+")"}}
A.DS.prototype={}
A.Es.prototype={}
A.qq.prototype={
gp(a){var s=this
return A.bN([s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,s.dx])},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.qq&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&J.c(b.w,s.w)&&J.c(b.x,s.x)&&J.c(b.y,s.y)&&J.c(b.z,s.z)&&J.c(b.Q,s.Q)&&b.as==s.as&&J.c(b.at,s.at)&&J.c(b.ax,s.ax)&&J.c(b.ay,s.ay)&&J.c(b.ch,s.ch)&&J.c(b.CW,s.CW)&&J.c(b.cx,s.cx)&&J.c(b.db,s.db)&&J.c(b.dx,s.dx)}}
A.DU.prototype={}
A.qr.prototype={
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.y,s.x,s.z,s.Q,s.as,s.ax,s.at,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.qr&&J.c(b.a,s.a)&&J.c(b.b,s.b)&&J.c(b.c,s.c)&&J.c(b.d,s.d)&&J.c(b.e,s.e)&&J.c(b.f,s.f)&&J.c(b.r,s.r)&&J.c(b.w,s.w)&&J.c(b.y,s.y)&&J.c(b.x,s.x)&&J.c(b.z,s.z)&&J.c(b.Q,s.Q)&&J.c(b.as,s.as)&&J.c(b.ax,s.ax)&&b.at==s.at}}
A.DW.prototype={}
A.qt.prototype={
gp(a){var s=this,r=null
return A.D(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,r,r,r,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.qt)if(b.a==r.a)if(J.c(b.b,r.b))if(J.c(b.c,r.c))if(b.d==r.d)if(J.c(b.r,r.r))if(J.c(b.w,r.w))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.DY.prototype={}
A.Nw.prototype={
C(){return"ScriptCategory."+this.b}}
A.qx.prototype={
DE(a){switch(a.a){case 0:return this.c
case 1:return this.d
case 2:return this.e}},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.qx&&b.a.h(0,s.a)&&b.b.h(0,s.b)&&b.c.h(0,s.c)&&b.d.h(0,s.d)&&b.e.h(0,s.e)},
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Ei.prototype={}
A.ua.prototype={
i(a){var s=this
if(s.geN()===0)return A.VY(s.geP(),s.geQ())
if(s.geP()===0)return A.VX(s.geN(),s.geQ())
return A.VY(s.geP(),s.geQ())+" + "+A.VX(s.geN(),0)},
h(a,b){if(b==null)return!1
return b instanceof A.ua&&b.geP()===this.geP()&&b.geN()===this.geN()&&b.geQ()===this.geQ()},
gp(a){return A.D(this.geP(),this.geN(),this.geQ(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.cz.prototype={
geP(){return this.a},
geN(){return 0},
geQ(){return this.b},
V(a,b){return new A.cz(this.a-b.a,this.b-b.b)},
T(a,b){return new A.cz(this.a+b.a,this.b+b.b)},
W(a,b){return new A.cz(this.a*b,this.b*b)},
j8(a){var s=a.a/2,r=a.b/2
return new A.v(s+this.a*s,r+this.b*r)},
Z(a){return this},
i(a){return A.VY(this.a,this.b)}}
A.eG.prototype={
geP(){return 0},
geN(){return this.a},
geQ(){return this.b},
V(a,b){return new A.eG(this.a-b.a,this.b-b.b)},
T(a,b){return new A.eG(this.a+b.a,this.b+b.b)},
W(a,b){return new A.eG(this.a*b,this.b*b)},
Z(a){var s=this
switch(a.a){case 0:return new A.cz(-s.a,s.b)
case 1:return new A.cz(s.a,s.b)}},
i(a){return A.VX(this.a,this.b)}}
A.BI.prototype={
W(a,b){return new A.BI(this.a*b,this.b*b,this.c*b)},
Z(a){var s=this
switch(a.a){case 0:return new A.cz(s.a-s.b,s.c)
case 1:return new A.cz(s.a+s.b,s.c)}},
geP(){return this.a},
geN(){return this.b},
geQ(){return this.c}}
A.pz.prototype={
C(){return"RenderComparison."+this.b}}
A.x9.prototype={$icx:1}
A.DI.prototype={
b3(){var s,r,q
for(s=this.a,s=A.dF(s,s.r),r=A.o(s).c;s.q();){q=s.d;(q==null?r.a(q):q).$0()}},
a5(a){this.a.D(0,a)},
O(a){this.a.v(0,a)}}
A.mW.prototype={
py(a){var s=this
return new A.rq(s.gcv().V(0,a.gcv()),s.gdS().V(0,a.gdS()),s.gdL().V(0,a.gdL()),s.gel().V(0,a.gel()),s.gcw().V(0,a.gcw()),s.gdR().V(0,a.gdR()),s.gem().V(0,a.gem()),s.gdK().V(0,a.gdK()))},
D(a,b){var s=this
return new A.rq(s.gcv().T(0,b.gcv()),s.gdS().T(0,b.gdS()),s.gdL().T(0,b.gdL()),s.gel().T(0,b.gel()),s.gcw().T(0,b.gcw()),s.gdR().T(0,b.gdR()),s.gem().T(0,b.gem()),s.gdK().T(0,b.gdK()))},
i(a){var s,r,q,p,o=this
if(o.gcv().h(0,o.gdS())&&o.gdS().h(0,o.gdL())&&o.gdL().h(0,o.gel()))if(!o.gcv().h(0,B.x))s=o.gcv().a===o.gcv().b?"BorderRadius.circular("+B.c.R(o.gcv().a,1)+")":"BorderRadius.all("+o.gcv().i(0)+")"
else s=null
else{r=""+"BorderRadius.only("
if(!o.gcv().h(0,B.x)){r+="topLeft: "+o.gcv().i(0)
q=!0}else q=!1
if(!o.gdS().h(0,B.x)){if(q)r+=", "
r+="topRight: "+o.gdS().i(0)
q=!0}if(!o.gdL().h(0,B.x)){if(q)r+=", "
r+="bottomLeft: "+o.gdL().i(0)
q=!0}if(!o.gel().h(0,B.x)){if(q)r+=", "
r+="bottomRight: "+o.gel().i(0)}r+=")"
s=r.charCodeAt(0)==0?r:r}if(o.gcw().h(0,o.gdR())&&o.gdR().h(0,o.gdK())&&o.gdK().h(0,o.gem()))if(!o.gcw().h(0,B.x))p=o.gcw().a===o.gcw().b?"BorderRadiusDirectional.circular("+B.c.R(o.gcw().a,1)+")":"BorderRadiusDirectional.all("+o.gcw().i(0)+")"
else p=null
else{r=""+"BorderRadiusDirectional.only("
if(!o.gcw().h(0,B.x)){r+="topStart: "+o.gcw().i(0)
q=!0}else q=!1
if(!o.gdR().h(0,B.x)){if(q)r+=", "
r+="topEnd: "+o.gdR().i(0)
q=!0}if(!o.gem().h(0,B.x)){if(q)r+=", "
r+="bottomStart: "+o.gem().i(0)
q=!0}if(!o.gdK().h(0,B.x)){if(q)r+=", "
r+="bottomEnd: "+o.gdK().i(0)}r+=")"
p=r.charCodeAt(0)==0?r:r}r=s!=null
if(r&&p!=null)return A.f(s)+" + "+p
if(r)return s
if(p!=null)return p
return"BorderRadius.zero"},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.mW&&b.gcv().h(0,s.gcv())&&b.gdS().h(0,s.gdS())&&b.gdL().h(0,s.gdL())&&b.gel().h(0,s.gel())&&b.gcw().h(0,s.gcw())&&b.gdR().h(0,s.gdR())&&b.gem().h(0,s.gem())&&b.gdK().h(0,s.gdK())},
gp(a){var s=this
return A.D(s.gcv(),s.gdS(),s.gdL(),s.gel(),s.gcw(),s.gdR(),s.gem(),s.gdK(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bJ.prototype={
gcv(){return this.a},
gdS(){return this.b},
gdL(){return this.c},
gel(){return this.d},
gcw(){return B.x},
gdR(){return B.x},
gem(){return B.x},
gdK(){return B.x},
cR(a){var s=this,r=s.a.dX(0,B.x),q=s.b.dX(0,B.x)
return A.Mo(a,s.c.dX(0,B.x),s.d.dX(0,B.x),r,q)},
py(a){if(a instanceof A.bJ)return this.V(0,a)
return this.EQ(a)},
D(a,b){if(b instanceof A.bJ)return this.T(0,b)
return this.EP(0,b)},
V(a,b){var s=this
return new A.bJ(s.a.V(0,b.a),s.b.V(0,b.b),s.c.V(0,b.c),s.d.V(0,b.d))},
T(a,b){var s=this
return new A.bJ(s.a.T(0,b.a),s.b.T(0,b.b),s.c.T(0,b.c),s.d.T(0,b.d))},
W(a,b){var s=this
return new A.bJ(s.a.W(0,b),s.b.W(0,b),s.c.W(0,b),s.d.W(0,b))},
Z(a){return this}}
A.rq.prototype={
W(a,b){var s=this
return new A.rq(s.a.W(0,b),s.b.W(0,b),s.c.W(0,b),s.d.W(0,b),s.e.W(0,b),s.f.W(0,b),s.r.W(0,b),s.w.W(0,b))},
Z(a){var s=this
switch(a.a){case 0:return new A.bJ(s.a.T(0,s.f),s.b.T(0,s.e),s.c.T(0,s.w),s.d.T(0,s.r))
case 1:return new A.bJ(s.a.T(0,s.e),s.b.T(0,s.f),s.c.T(0,s.r),s.d.T(0,s.w))}},
gcv(){return this.a},
gdS(){return this.b},
gdL(){return this.c},
gel(){return this.d},
gcw(){return this.e},
gdR(){return this.f},
gem(){return this.r},
gdK(){return this.w}}
A.ur.prototype={
C(){return"BorderStyle."+this.b}}
A.bE.prototype={
ao(a){var s=Math.max(0,this.b*a),r=a<=0?B.b0:this.c
return new A.bE(this.a,s,r,-1)},
fL(){switch(this.c.a){case 1:var s=$.am().b6()
s.saa(this.a)
s.sfQ(this.b)
s.sc4(B.B)
return s
case 0:s=$.am().b6()
s.saa(B.cx)
s.sfQ(0)
s.sc4(B.B)
return s}},
gce(){return this.b*(1-(1+this.d)/2)},
giJ(){return this.b*(1+this.d)/2},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return b instanceof A.bE&&b.a.h(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bu(){return"BorderSide"}}
A.b_.prototype={
dU(a,b,c){return null},
D(a,b){return this.dU(a,b,!1)},
T(a,b){var s=this.D(0,b)
if(s==null)s=b.dU(0,this,!0)
return s==null?new A.e1(A.a([b,this],t.h_)):s},
bI(a,b){if(a==null)return this.ao(b)
return null},
bJ(a,b){if(a==null)return this.ao(1-b)
return null},
i(a){return"ShapeBorder()"}}
A.c8.prototype={
gjj(){var s=Math.max(this.a.gce(),0)
return new A.b4(s,s,s,s)},
bI(a,b){if(a==null)return this.ao(b)
return null},
bJ(a,b){if(a==null)return this.ao(1-b)
return null}}
A.e1.prototype={
gjj(){return B.b.Qp(this.a,B.b5,new A.QH())},
dU(a,b,c){var s,r,q,p=b instanceof A.e1
if(!p){s=this.a
r=c?B.b.gY(s):B.b.gJ(s)
q=r.dU(0,b,c)
if(q==null)q=b.dU(0,r,!c)
if(q!=null){p=A.af(s,!0,t.mD)
p[c?p.length-1:0]=q
return new A.e1(p)}}s=A.a([],t.h_)
if(c)B.b.I(s,this.a)
if(p)B.b.I(s,b.a)
else s.push(b)
if(!c)B.b.I(s,this.a)
return new A.e1(s)},
D(a,b){return this.dU(a,b,!1)},
ao(a){var s=this.a,r=A.ad(s).k("an<1,b_>")
return new A.e1(A.af(new A.an(s,new A.QI(a),r),!0,r.k("aJ.E")))},
bI(a,b){return A.a0y(a,this,b)},
bJ(a,b){return A.a0y(this,a,b)},
eh(a,b){return B.b.gJ(this.a).eh(a,b)},
fa(a,b,c){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.G)(s),++q){p=s[q]
p.fa(a,b,c)
o=p.gjj().Z(c)
b=new A.A(b.a+o.a,b.b+o.b,b.c-o.c,b.d-o.d)}},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.e1&&A.cm(b.a,this.a)},
gp(a){return A.bN(this.a)},
i(a){var s=this.a,r=A.ad(s).k("ca<1>")
return new A.an(new A.ca(s,r),new A.QJ(),r.k("an<aJ.E,u>")).bm(0," + ")}}
A.QH.prototype={
$2(a,b){return a.D(0,b.gjj())},
$S:146}
A.QI.prototype={
$1(a){return a.ao(this.a)},
$S:147}
A.QJ.prototype={
$1(a){return a.i(0)},
$S:148}
A.zF.prototype={}
A.Gz.prototype={
q_(a,b,c,d){var s=this
s.gbb().dg()
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbb().vq(c,$.am().b6())
break}d.$0()
if(b===B.e1)s.gbb().dc()
s.gbb().dc()},
OY(a,b,c,d){this.q_(new A.GA(this,a),b,c,d)},
OZ(a,b,c,d){this.q_(new A.GB(this,a),b,c,d)},
P0(a,b,c,d){this.q_(new A.GC(this,a),b,c,d)}}
A.GA.prototype={
$1(a){return this.a.gbb().Ar(this.b,a)},
$S:19}
A.GB.prototype={
$1(a){return this.a.gbb().As(this.b,a)},
$S:19}
A.GC.prototype={
$1(a){return this.a.gbb().P_(this.b,a)},
$S:19}
A.hk.prototype={
j(a,b){return this.b.j(0,b)},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
return s.ET(0,b)&&A.o(s).k("hk<hk.T>").b(b)&&A.Vs(b.b,s.b)},
gp(a){return A.D(A.q(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"ColorSwatch(primary value: "+this.EU(0)+")"}}
A.e8.prototype={
bu(){return"Decoration"},
gdE(){return B.b5},
gtP(){return!1},
bI(a,b){return null},
bJ(a,b){return null},
BT(a,b,c){return!0}}
A.n1.prototype={
m(){}}
A.An.prototype={}
A.bW.prototype={
gBU(){var s=this
return s.gcg()+s.gci()+s.gcZ()+s.gcY()},
D(a,b){var s=this
return new A.ig(s.gcg()+b.gcg(),s.gci()+b.gci(),s.gcZ()+b.gcZ(),s.gcY()+b.gcY(),s.gc6()+b.gc6(),s.gcf()+b.gcf())},
nL(a,b,c){var s=this
return new A.ig(A.M(s.gcg(),b.a,c.a),A.M(s.gci(),b.c,c.b),A.M(s.gcZ(),0,c.c),A.M(s.gcY(),0,c.d),A.M(s.gc6(),b.b,c.e),A.M(s.gcf(),b.d,c.f))},
i(a){var s=this
if(s.gcZ()===0&&s.gcY()===0){if(s.gcg()===0&&s.gci()===0&&s.gc6()===0&&s.gcf()===0)return"EdgeInsets.zero"
if(s.gcg()===s.gci()&&s.gci()===s.gc6()&&s.gc6()===s.gcf())return"EdgeInsets.all("+B.c.R(s.gcg(),1)+")"
return"EdgeInsets("+B.c.R(s.gcg(),1)+", "+B.c.R(s.gc6(),1)+", "+B.c.R(s.gci(),1)+", "+B.c.R(s.gcf(),1)+")"}if(s.gcg()===0&&s.gci()===0)return"EdgeInsetsDirectional("+B.c.R(s.gcZ(),1)+", "+B.c.R(s.gc6(),1)+", "+B.c.R(s.gcY(),1)+", "+B.c.R(s.gcf(),1)+")"
return"EdgeInsets("+B.c.R(s.gcg(),1)+", "+B.c.R(s.gc6(),1)+", "+B.c.R(s.gci(),1)+", "+B.c.R(s.gcf(),1)+") + EdgeInsetsDirectional("+B.c.R(s.gcZ(),1)+", 0.0, "+B.c.R(s.gcY(),1)+", 0.0)"},
h(a,b){var s=this
if(b==null)return!1
return b instanceof A.bW&&b.gcg()===s.gcg()&&b.gci()===s.gci()&&b.gcZ()===s.gcZ()&&b.gcY()===s.gcY()&&b.gc6()===s.gc6()&&b.gcf()===s.gcf()},
gp(a){var s=this
return A.D(s.gcg(),s.gci(),s.gcZ(),s.gcY(),s.gc6(),s.gcf(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.b4.prototype={
gcg(){return this.a},
gc6(){return this.b},
gci(){return this.c},
gcf(){return this.d},
gcZ(){return 0},
gcY(){return 0},
D(a,b){if(b instanceof A.b4)return this.T(0,b)
return this.vL(0,b)},
nL(a,b,c){var s=this
return new A.b4(A.M(s.a,b.a,c.a),A.M(s.b,b.b,c.e),A.M(s.c,b.c,c.b),A.M(s.d,b.d,c.f))},
V(a,b){var s=this
return new A.b4(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
T(a,b){var s=this
return new A.b4(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
W(a,b){var s=this
return new A.b4(s.a*b,s.b*b,s.c*b,s.d*b)},
Z(a){return this},
l2(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.b4(r,q,p,a==null?s.d:a)},
t_(a){return this.l2(a,null,null,null)}}
A.ig.prototype={
W(a,b){var s=this
return new A.ig(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
Z(a){var s=this
switch(a.a){case 0:return new A.b4(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.b4(s.c+s.a,s.e,s.d+s.b,s.f)}},
gcg(){return this.a},
gci(){return this.b},
gcZ(){return this.c},
gcY(){return this.d},
gc6(){return this.e},
gcf(){return this.f}}
A.JT.prototype={
L(a){var s,r,q,p
for(s=this.b,r=s.gaV(),r=new A.dt(J.at(r.a),r.b),q=A.o(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.L(0)
for(s=this.a,r=s.gaV(),r=new A.dt(J.at(r.a),r.b),q=A.o(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).UO()}s.L(0)}}
A.oa.prototype={
h(a,b){var s=this
if(b==null)return!1
if(J.B(b)!==A.q(s))return!1
return b instanceof A.oa&&b.a==s.a&&b.b==s.b&&J.c(b.c,s.c)&&b.d==s.d&&J.c(b.e,s.e)&&b.f==s.f},
gp(a){var s=this
return A.D(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=""+"ImageConfiguration(",p=r.a
if(p!=null){q+="bundle: "+p.i(0)
s=!0}else s=!1
p=r.b
if(p!=null){if(s)q+=", "
p=q+("devicePixelRatio: "+B.c.R(p,1))
q=p
s=!0}p=r.c
if(p!=null){if(s)q+=", "
p=q+("locale: "+p.i(0))
q=p
s=!0}p=r.d
if(p!=null){if(s)q+=", "
p=q+("textDirection: "+p.i(0))
q=p
s=!0}p=r.e
if(p!=null){if(s)q+=", "
p=q+("size: "+p.i(0))
q=p
s=!0}p=r.f
if(p!=null){if(s)q+=", "
p=q+("platform: "+p.b)
q=p}q+=")"
return q.charCodeAt(0)==0?q:q}}
A.FD.prototype={}
A.kU.prototype={
h(a,b){var s
if(b==null)return!1
if(b instanceof A.kU)if(b.a===this.a)if(b.b==this.b)s=A.cm(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gp(a){return A.D(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.f(this.b)+", recognizer: "+A.f(this.c)+"}"}}
A.fC.prototype={
DU(a){var s={}
s.a=null
this.aD(new A.JZ(s,a,new A.FD()))
return s.a},
h(a,b){if(b==null)return!1
if(this===b)return!0
if(J.B(b)!==A.q(this))return!1
return b instanceof A.lE&&J.c(b.a,this.a)},
gp(a){return J.j(this.a)}}
A.JZ.prototype={
$1(a){var s=a.DV(this.b,this.c)
this.a.a=s
return s==null},
$S:31}
A.ck.prototype={
ao(a){var s=this.a.ao(a)
return new A.ck(this.b.W(0,a),s)},
bI(a,b){var s,r,q=this
if(a instanceof A.ck){s=A.Y(a.a,q.a,b)
r=A.eK(a.b,q.b,b)
r.toString
return new A.ck(r,s)}if(t.sS.b(a)){s=A.Y(a.a,q.a,b)
return new A.cU(q.b,1-b,a.b,s)}return q.iL(a,b)},
bJ(a,b){var s,r,q=this
if(a instanceof A.ck){s=A.Y(q.a,a.a,b)
r=A.eK(q.b,a.b,b)
r.toString
return new A.ck(r,s)}if(t.sS.b(a)){s=A.Y(q.a,a.a,b)
return new A.cU(q.b,b,a.b,s)}return q.iM(a,b)},
eh(a,b){var s=$.am().cI()
s.eT(this.b.Z(b).cR(a))
return s},
fa(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cA(s.Z(c).cR(b),o.fL())
else{r=$.am().b6()
r.saa(o.a)
q=s.Z(c).cR(b)
p=q.cC(-o.gce())
a.lf(q.cC(o.giJ()),p,r)}break}},
h(a,b){if(b==null)return!1
if(J.B(b)!==A.q(this))return!1
return b instanceof A.ck&&b.a.h(0,this.a)&&b.b.h(0,this.b)},
gp(a){return A.D(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.cU.prototype={
ao(a){var s=this.a.ao(a)
return new A.cU(this.b.W(0,a),a,this.d,s)},
bI(a,b){var s,r,q,p=this
if(a instanceof A.ck){s=A.Y(a.a,p.a,b)
r=A.eK(a.b,p.b,b)
r.toString
return new A.cU(r,p.c*b,p.d,s)}if(t.sS.b(a)){s=A.Y(a.a,p.a,b)
r=p.c
return new A.cU(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.cU){s=A.Y(a.a,p.a,b)
r=A.eK(a.b,p.b,b)
r.toString
q=A.z(a.c,p.c,b)
q.toString
return new A.cU(r,q,p.d,s)}return p.iL(a,b)},
bJ(a,b){var s,r,q,p=this
if(a instanceof A.ck){s=A.Y(p.a,a.a,b)
r=A.eK(p.b,a.b,b)
r.toString
return new A.cU(r,p.c*(1-b),p.d,s)}if(t.sS.b(a)){s=A.Y(p.a,a.a,b)
r=p.c
return new A.cU(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.cU){s=A.Y(p.a,a.a,b)
r=A.eK(p.b,a.b,b)
r.toString
q=A.z(p.c,a.c,b)
q.toString
return new A.cU(r,q,p.d,s)}return p.iM(a,b)},
wq(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.A(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.A(r+l,o,s-l,p)}},
wo(a,b){var s,r,q,p=this.b.Z(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.kj(p,A.uq(new A.as(r/2,s*q/2)),o)
o.toString
return o}else{o=A.kj(p,A.uq(new A.as(s*r/2,q/2)),o)
o.toString
return o}}return A.kj(p,A.YO(a.geI()/2),o)},
eh(a,b){var s=$.am().cI(),r=this.wo(a,b)
r.toString
s.eT(r.cR(this.wq(a)))
return s},
fa(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.wo(b,c)
s.toString
a.cA(s.cR(this.wq(b)).cC(r.b*r.d/2),r.fL())
break}},
h(a,b){var s=this
if(b==null)return!1
if(J.B(b)!==A.q(s))return!1
return b instanceof A.cU&&b.a.h(0,s.a)&&b.b.h(0,s.b)&&b.c===s.c},
gp(a){return A.D(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.c.R(s.c*100,1)+"% of the way to being a CircleBorder that is "+B.c.R(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.c.R(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.qm.prototype={
C(){return"TextOverflow."+this.b}}
A.pf.prototype={
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.pf)if(b.a.h(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gp(a){var s=this
return A.D(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q="PlaceholderDimensions(",p=r.b
$label0$0:{if(B.qQ===p||B.eU===p||B.qR===p||B.qO===p||B.qP===p){s=q+r.a.i(0)+", "+p.i(0)+")"
break $label0$0}if(B.qN===p){s=q+r.a.i(0)+", "+p.i(0)+"("+A.f(r.c)+" from top))"
break $label0$0}s=null}return s}}
A.Px.prototype={
C(){return"TextWidthBasis."+this.b}}
A.Tp.prototype={
DK(a){var s
switch(a.a){case 0:s=this.a.gnC()
break
case 1:s=this.a.gRz()
break
default:s=null}return s}}
A.Tq.prototype={
gio(){var s,r=this.c
if(r===0)return B.h
s=this.a
if(!isFinite(s.a.ghF()))return B.AP
return new A.v(r*(this.b-s.a.ghF()),0)},
N_(a,b,c){var s,r=this,q=r.a,p=A.a0P(a,b,c,q)
if(p===r.b)return!0
if(!isFinite(r.gio().a)&&!isFinite(q.a.ghF())&&isFinite(a))return!1
s=q.a.gow()
if(q.a.ghF()-s>-1e-10&&b-s>-1e-10){r.b=p
return!0}return!1}}
A.yS.prototype={
a0(){var s=this.b
if(s!=null)s.a.a.m()
this.b=null},
sm4(a){var s,r,q=this
if(J.c(q.f,a))return
s=q.f
s=s==null?null:s.a
if(!J.c(s,a.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.f
s=s==null?null:s.au(0,a)
r=s==null?B.bk:s
q.f=a
q.r=null
s=r.a
if(s>=3)q.a0()
else if(s>=2)q.c=!0},
suL(a){if(this.w===a)return
this.w=a
this.a0()},
sbR(a){var s,r=this
if(r.x===a)return
r.x=a
r.a0()
s=r.CW
if(s!=null)s.m()
r.CW=null},
suM(a){var s,r=this
if(r.y===a)return
r.y=a
r.a0()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sPZ(a){if(this.z==a)return
this.z=a
this.a0()},
slJ(a){if(J.c(this.Q,a))return
this.Q=a
this.a0()},
stZ(a){if(this.as==a)return
this.as=a
this.a0()},
suO(a){if(this.ax===a)return
this.ax=a},
gRK(){var s,r,q,p=this.b
if(p==null)return null
s=p.gio()
if(!isFinite(s.a)||!isFinite(s.b))return A.a([],t.m)
r=p.d
if(r==null)r=p.d=p.a.a.pd()
if(s.h(0,B.h))return r
q=A.ad(r).k("an<1,cS>")
return A.af(new A.an(r,new A.Pv(s),q),!1,q.k("aJ.E"))},
pq(a){if(a==null||a.length===0||A.cm(a,this.ch))return
this.ch=a
this.a0()},
II(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.f.a
if(e==null)e=f
else{s=g.w
r=g.x
if(r==null)r=a
q=g.y
p=g.as
o=g.ay
n=g.z
m=g.Q
l=e.at
o=l==null?f:new A.yP(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.WX(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.w
s=g.x
if(s==null)s=a
r=g.y
q=g.as
p=g.ay
p=A.WX(g.z,f,14*r,f,f,f,g.Q,q,f,e,s,p)
e=p}return e},
IH(){return this.II(null)},
x9(a){var s=this,r=s.IH(),q=$.am().AK(r)
r=s.y
a.Am(q,s.ch,r)
s.c=!1
return q.be()},
tV(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.b,i=j==null
if(!i&&j.N_(b,a,k.ax))return
s=k.f
if(s==null)throw A.d(A.aB("TextPainter.text must be set to a non-null value before using the TextPainter."))
r=k.x
if(r==null)throw A.d(A.aB("TextPainter.textDirection must be set to a non-null value before using the TextPainter."))
q=A.a9_(k.w,r)
if(!(!isFinite(a)&&q!==0))p=a
else p=i?null:Math.ceil(j.a.a.gow())
o=p==null
k.d=o?a:p
n=i?null:j.a.a
if(n==null)n=k.x9(s)
n.hu(new A.hR(k.d))
i=new A.Tp(n)
m=A.a0P(b,a,k.ax,i)
if(o&&isFinite(b)){l=Math.ceil(i.a.gow())
n.hu(new A.hR(l))
k.d=l}k.b=new A.Tq(i,m,q)},
S9(){return this.tV(1/0,0)},
aH(a,b){var s,r,q,p=this,o=p.b
if(o==null)throw A.d(A.aB("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(!isFinite(o.gio().a)||!isFinite(o.gio().b))return
if(p.c){s=o.a
r=s.a
q=p.f
q.toString
q=p.x9(q)
q.hu(new A.hR(p.d))
s.a=q
r.m()}a.i0(o.a.a,b.T(0,o.gio()))},
DH(a,b,c){var s,r,q=this.b,p=q.gio()
if(!isFinite(p.a)||!isFinite(p.b))return A.a([],t.m)
s=q.a.a.DG(a.a,a.b,b,c)
if(p.h(0,B.h))r=s
else{r=A.ad(s).k("an<1,cS>")
r=A.af(new A.an(s,new A.Pu(p),r),!1,r.k("aJ.E"))}return r},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.b
if(r!=null)r.a.a.m()
s.f=s.b=null}}
A.Pv.prototype={
$1(a){return A.a0g(a,this.a)},
$S:50}
A.Pn.prototype={
$0(){return this.a.a},
$S:151}
A.Pp.prototype={
$0(){return this.a.b},
$S:152}
A.Po.prototype={
$0(){return B.aB===this.a.al()},
$S:8}
A.Pq.prototype={
$0(){return B.n===this.a.al()},
$S:8}
A.Pr.prototype={
$0(){return B.D===this.a.al()},
$S:8}
A.Ps.prototype={
$0(){return B.dw===this.a.al()},
$S:8}
A.Pt.prototype={
$0(){return B.fc===this.a.al()},
$S:8}
A.Pu.prototype={
$1(a){return A.a0g(a,this.a)},
$S:50}
A.lE.prototype={
gAO(){return this.e},
gv5(){return!0},
hp(a,b){t.qi.b(a)},
Am(a,b,c){var s,r,q,p,o,n=this.a,m=n!=null
if(m)a.CS(n.DX(c))
n=this.b
if(n!=null)try{a.rK(n)}catch(q){n=A.a8(q)
if(n instanceof A.e4){s=n
r=A.av(q)
A.d4(new A.bd(s,r,"painting library",A.b5("while building a TextSpan"),null,!1))
a.rK("\ufffd")}else throw q}p=this.c
if(p!=null)for(o=0;o<1;++o)p[o].Am(a,b,c)
if(m)a.fc()},
aD(a){var s,r
if(this.b!=null&&!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aD(a))return!1
return!0},
DV(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.ai))if(!(q<r&&r<p))o=p===r&&s===B.co
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
Ax(a,b,c){var s,r,q,p=this.b
if(p!=null){s=A.a([],t.ve)
a.push(A.ZX(p,null,null,s))}r=this.c
if(r!=null)for(q=0;q<1;++q)r[q].Ax(a,b,!1)},
P8(a){return this.Ax(a,null,!1)},
au(a,b){var s,r,q,p,o,n=this
if(n===b)return B.ch
if(A.q(b)!==A.q(n))return B.bk
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.bk
s=n.a
if(s!=null){r=b.a
r.toString
q=s.au(0,r)
p=q.a>0?q:B.ch
if(p===B.bk)return p}else p=B.ch
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].au(0,r[o])
if(q.a>p.a)p=q
if(p===B.bk)return p}return p},
h(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.B(b)!==A.q(s))return!1
if(!s.Fa(0,b))return!1
return b instanceof A.lE&&b.b==s.b&&s.e.h(0,b.e)&&A.cm(b.c,s.c)},
gp(a){var s=this,r=null,q=A.fC.prototype.gp.call(s,s),p=s.c
p=p==null?r:A.bN(p)
return A.D(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bu(){return"TextSpan"},
$ia1:1,
$if0:1,
gu9(){return null},
gua(){return null}}
A.k.prototype={
gjw(){return this.e},
gj6(){return this.d},
nQ(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.ay
if(a0==null&&b6==null)s=a3==null?a.b:a3
else s=null
r=a.ch
if(r==null&&a1==null)q=a2==null?a.c:a2
else q=null
p=b2==null?a.r:b2
o=b5==null?a.w:b5
n=b9==null?a.y:b9
m=c5==null?a.z:c5
l=c4==null?a.Q:c4
k=b7==null?a.as:b7
j=b8==null?a.at:b8
a0=b6==null?a0:b6
r=a1==null?r:a1
i=c3==null?a.dy:c3
h=b4==null?a.fx:b4
g=a5==null?a.CW:a5
f=a6==null?a.cx:a6
e=a7==null?a.cy:a7
d=a8==null?a.db:a8
c=a9==null?a.gj6():a9
b=b0==null?a.e:b0
return A.yT(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a0,k,a.a,j,n,a.ax,a.fy,a.f,i,l,m)},
ft(a){return this.nQ(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
AH(a,b){return this.nQ(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null)},
Pk(a){return this.nQ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
by(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if(a4==null)return this
if(!a4.a)return a4
s=a4.b
r=a4.c
q=a4.r
p=a4.w
o=a4.x
n=a4.y
m=a4.z
l=a4.Q
k=a4.as
j=a4.at
i=a4.ax
h=a4.ay
g=a4.ch
f=a4.dy
e=a4.fr
d=a4.fx
c=a4.CW
b=a4.cx
a=a4.cy
a0=a4.db
a1=a4.gj6()
a2=a4.e
a3=a4.f
return this.nQ(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
DX(a){var s,r,q=this,p=q.gjw(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.am().b6()
r.saa(s)
s=r}else s=null}return A.a0h(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
au(a,b){var s=this
if(s===b)return B.ch
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cm(s.dy,b.dy)||!A.cm(s.fr,b.fr)||!A.cm(s.fx,b.fx)||!A.cm(s.gjw(),b.gjw())||!1)return B.bk
if(!J.c(s.b,b.b)||!J.c(s.c,b.c)||!J.c(s.CW,b.CW)||!J.c(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.BP
return B.ch},
h(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.B(b)!==A.q(r))return!1
if(b instanceof A.k)if(b.a===r.a)if(J.c(b.b,r.b))if(J.c(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cm(b.dy,r.dy))if(A.cm(b.fr,r.fr))if(A.cm(b.fx,r.fx))if(J.c(b.CW,r.CW))if(J.c(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cm(b.gjw(),r.gjw()))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gp(a){var s,r=this,q=null,p=r.gjw(),o=p==null?q:A.bN(p),n=A.D(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.bN(m)
s=l==null?q:A.bN(l)
return A.D(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bu(){return"TextStyle"}}
A.DO.prototype={}
A.Oj.prototype={
i(a){return"Simulation"}}
A.PF.prototype={
i(a){return"Tolerance(distance: \xb1"+A.f(this.a)+", time: \xb10.001, velocity: \xb1"+A.f(this.c)+")"}}
A.li.prototype={
tE(){var s=this,r=s.aw$
r===$&&A.e()
r=r.e
r.toString
r.srX(s.AM())
if(s.aw$.e.F$!=null)s.E2()},
tK(){},
tG(){},
AM(){var s,r=$.ae().d.j(0,0),q=r.x
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.zb(r.gip().eg(0,q),q)},
RI(){var s,r=this.aZ$
if(r!=null){r.S$=$.aU()
r.H$=0}r=t.S
s=$.aU()
this.aZ$=new A.wA(new A.N4(this),new A.L8(B.f9,A.w(r,t.Df)),A.w(r,t.eg),s)},
L4(){var s=this.aw$
s===$&&A.e()
s=s.e
s.toString
A.J.prototype.gb4.call(s).ch.D(0,s)
A.J.prototype.gb4.call(s).jI()},
L8(a){var s=this.aw$
s===$&&A.e()
s.e.toString
s=$.c6;(s==null?$.c6=A.fx():s).TZ(a)},
L6(){var s=this.aw$
s===$&&A.e()
s.e.kY()},
Lh(a){B.AB.iW("first-frame",null,!1,t.H)},
KF(a){this.tk()
this.Nc()},
Nc(){$.cy.fy$.push(new A.N3(this))},
Aa(){--this.bQ$
if(!this.cm$)this.vt()},
tk(){var s=this,r=s.aw$
r===$&&A.e()
r.Bv()
s.aw$.Bu()
s.aw$.Bw()
if(s.cm$||s.bQ$===0){s.aw$.e.P6()
s.aw$.Bx()
s.cm$=!0}},
$ia1:1,
