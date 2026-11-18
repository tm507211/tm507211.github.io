import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,y as u}from"./modules/shiki-B6CMAte1.js";import{nt as d,tt as f,vt as p}from"./index-DT-oSyzn.js";import{t as m}from"./slidev/default-ufuASoRM.js";var h={class:`cols2`,style:{"align-items":`start`}},g={class:`col`},_={class:`env dimenv`},v={class:`term`,style:{width:`100%`}},y={class:`cap`},b=p({__name:`slides.md__slidev_19`,setup(p){let{$slidev:b,$nav:x,$clicksContext:S,$clicks:C,$page:w,$renderContext:T,$frontmatter:E}=d();return S.setup(),(d,p)=>{let b=e(`click`);return t(),a(m,o(n(l(f)(l(E),18))),{default:r(()=>[p[7]||=c(`h2`,null,`What a method sees`,-1),c(`div`,h,[p[6]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`pre`,{class:`code`},`struct Size { w: Int, h: Int }
let border = 1;
\xA0
impl Size {
    fn outer(self) -> Size =
        Size { w: self.w + 2 * border,
               h: self.h + 2 * border };
}
\xA0
fn main() {
    let border = 10;
    println(Size { w: 3, h: 4 }.outer());
}`)],-1),c(`div`,g,[p[3]||=c(`div`,{class:`env`},[c(`div`,{class:`eh`},`top level`),c(`div`,{class:`mono`},`border = 1 \xA0 · \xA0 fns, types`)],-1),p[4]||=c(`div`,{class:`arrow`},`↑`,-1),p[5]||=c(`div`,{class:`env amb2`},[c(`div`,{class:`eh`},`outer's body`),c(`div`,{class:`mono`},`self = Size { w: 3, h: 4 }`)],-1),i((t(),u(`div`,_,[...p[0]||=[c(`div`,{class:`eh`},`main`,-1),c(`div`,{class:`mono`},[c(`s`,null,`border = 10`)],-1)]])),[[b,1]]),i((t(),u(`div`,v,[...p[1]||=[c(`div`,{class:`ok`},`Size { w: 5, h: 6 }`,-1)]])),[[b,1]]),i((t(),u(`div`,y,[...p[2]||=[s(`an `,-1),c(`code`,null,`impl`,-1),s(` appears only at the top level, so a method is closer to a top-level `,-1),c(`code`,null,`fn`,-1),s(` than to a closure`,-1)]])),[[b,2]])])])]),_:1},16)}}},[[`__scopeId`,`data-v-6e1f0d75`]]);export{b as default};