import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-B6CMAte1.js";import{nt as f,tt as p}from"./index-DR98KW2g.js";import{t as m}from"./Record-FQV3bhhb.js";import{t as h}from"./slidev/default-r-WX4f_l.js";var g={class:`cols2`,style:{"align-items":`start`}},_={class:`col`},v={class:`pair`,style:{gap:`1.2rem`,"margin-top":`.3rem`}},y={class:`col`},b={class:`pair2`},x={class:`col`},S={class:`read`,style:{"margin-top":`.8rem`}},C={__name:`slides.md__slidev_2`,setup(C){let{$slidev:w,$nav:T,$clicksContext:E,$clicks:D,$page:O,$renderContext:k,$frontmatter:A}=f();return E.setup(),(f,C)=>{let w=m,T=e(`click`);return t(),a(h,o(n(l(p)(l(A),1))),{default:r(()=>[C[11]||=c(`h2`,null,`Any type with an area`,-1),c(`div`,g,[C[10]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`pre`,{class:`code`},[s(`struct Circle { r: Int }
struct Square { side: Int }
\xA0
trait Shape { fn area(self) -> Int; }
\xA0
impl Shape for Circle {
    fn area(self) -> Int = 3 * self.r * self.r;
}
impl Shape for Square {
    fn area(self) -> Int = self.side * self.side;
}
\xA0
fn total<S: Shape>(xs: [S]) -> Int =
    fold(xs, 0, |a: Int, s: S| a + `),c(`span`,{class:`amb`},`s.area()`),s(`);`)])],-1),c(`div`,_,[C[9]||=c(`div`,{class:`mono`,style:{"font-size":`.95em`}},[c(`span`,{class:`amb`},`s.area()`)],-1),c(`div`,v,[i((t(),d(`div`,y,[C[0]||=c(`div`,{class:`arrow`},`↙`,-1),C[1]||=c(`div`,{class:`mono`,style:{"font-size":`.52em`,"white-space":`nowrap`}},`total([Circle { r: 1 }, Circle { r: 2 }])`,-1),c(`div`,b,[u(w,{name:`Circle`,fields:`r=1`,scale:.75}),u(w,{name:`Circle`,fields:`r=2`,scale:.75})]),C[2]||=c(`div`,{class:`mono cap`},`3 · r · r`,-1),C[3]||=c(`div`,{class:`term`,style:{width:`100%`}},[c(`div`,{class:`ok`},`15`)],-1)])),[[T,1]]),i((t(),d(`div`,x,[C[4]||=c(`div`,{class:`arrow`},`↘`,-1),C[5]||=c(`div`,{class:`mono`,style:{"font-size":`.52em`,"white-space":`nowrap`}},`total([Square { side: 3 }])`,-1),u(w,{name:`Square`,fields:`side=3`,scale:.75}),C[6]||=c(`div`,{class:`mono cap`},`side · side`,-1),C[7]||=c(`div`,{class:`term`,style:{width:`100%`}},[c(`div`,{class:`ok`},`9`)],-1)])),[[T,2]])]),i((t(),d(`div`,S,[...C[8]||=[s(`the body of `,-1),c(`code`,null,`total`,-1),s(` names neither struct`,-1)]])),[[T,3]])])])]),_:1},16)}}};export{C as default};