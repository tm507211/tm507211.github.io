import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-B6CMAte1.js";import{nt as f,tt as p}from"./index-DR98KW2g.js";import{t as m}from"./Record-FQV3bhhb.js";import{t as h}from"./slidev/default-r-WX4f_l.js";var g={class:`cols2`,style:{"align-items":`start`,"grid-template-columns":`1.25fr 1fr`}},_={class:`col`},v={class:`cap`,style:{"margin-top":`.5rem`}},y={class:`mono`,style:{"font-size":`.62em`}},b={class:`term`,style:{width:`100%`}},x={class:`cap`,style:{"margin-top":`.5rem`}},S={__name:`slides.md__slidev_25`,setup(S){let{$slidev:C,$nav:w,$clicksContext:T,$clicks:E,$page:D,$renderContext:O,$frontmatter:k}=f();return T.setup(),(f,S)=>{let C=m,w=e(`click`);return t(),a(h,o(n(l(p)(l(k),24))),{default:r(()=>[S[7]||=c(`h2`,null,`Composed calls stay put`,-1),c(`div`,g,[S[6]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`pre`,{class:`code`,style:{"font-size":`.56em`}},[s(`struct Bag { items: [String] }
impl Bag {
    fn add(self, x: String) -> Bag =
        Bag { items: x :: self.items };
    fn add_all(self, xs: [String]) -> Bag =
        `),c(`span`,{class:`amb`},`fold(xs, self, |b: Bag, x: String| b.add(x))`),s(`;
    fn size(self) -> Int = len(self.items);
}
\xA0
struct CountingBag { bag: Bag, adds: Int }
impl CountingBag {
    fn add(self, x: String) -> CountingBag =
        CountingBag { bag: self.bag.add(x),
                      adds: self.adds + 1 };
    fn add_all(self, xs: [String]) -> CountingBag =
        CountingBag { bag: self.bag.add_all(xs),
                      adds: self.adds + len(xs) };
    fn size(self) -> Int = self.bag.size();
}`)])],-1),c(`div`,_,[u(C,{name:`CountingBag`,fields:`bag=Bag { … }|adds=3`,scale:.85}),S[4]||=c(`div`,{class:`mono`,style:{"font-size":`.62em`}},`c.add("a").add_all(["b", "c"])`,-1),S[5]||=c(`div`,{class:`term`,style:{width:`100%`}},[c(`div`,{class:`ok`},`size() ⇒ 3 \xA0 adds ⇒ 3`)],-1),i((t(),d(`div`,v,[...S[0]||=[s(`rewrite `,-1),c(`code`,null,`Bag`,-1),s(`'s `,-1),c(`code`,null,`add_all`,-1),s(` as`,-1)]])),[[w,1]]),i((t(),d(`div`,y,[...S[1]||=[s(`Bag { items: xs ++ self.items }`,-1)]])),[[w,1]]),i((t(),d(`div`,b,[...S[2]||=[c(`div`,{class:`ok`},`size() ⇒ 3 \xA0 adds ⇒ 3`,-1)]])),[[w,1]]),i((t(),d(`div`,x,[...S[3]||=[c(`code`,null,`b.add(x)`,-1),s(` inside `,-1),c(`code`,null,`Bag`,-1),s(` always runs `,-1),c(`code`,null,`Bag`,-1),s(`'s `,-1),c(`code`,null,`add`,-1),s(` · the price: `,-1),c(`code`,null,`CountingBag`,-1),s(` writes `,-1),c(`code`,null,`size`,-1),s(` and `,-1),c(`code`,null,`add_all`,-1),s(` itself`,-1)]])),[[w,2]])])])]),_:1},16)}}};export{S as default};