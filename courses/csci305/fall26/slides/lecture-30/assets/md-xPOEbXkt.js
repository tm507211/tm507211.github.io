import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-B6CMAte1.js";import{nt as f,tt as p}from"./index-bYcwFt6Z.js";import{t as m}from"./Record-CD0foUaw.js";import{t as h}from"./slidev/default-BgQzB58m.js";var g={class:`cols2`,style:{"align-items":`start`}},_={class:`col`,style:{"align-items":`stretch`}},v={class:`code`},y={class:`term`},b={class:`pair`,style:{gap:`1rem`}},x={__name:`slides.md__slidev_15`,setup(x){let{$slidev:S,$nav:C,$clicksContext:w,$clicks:T,$page:E,$renderContext:D,$frontmatter:O}=f();return w.setup(),(f,x)=>{let S=m,C=e(`click`);return t(),a(h,o(n(l(p)(l(O),14))),{default:r(()=>[x[4]||=c(`h2`,null,`Methods`,-1),c(`div`,g,[x[3]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`pre`,{class:`code`},`impl Point {
    fn origin() -> Point = Point { x: 0, y: 0 };
    fn move_by(self, dx: Int, dy: Int) -> Point =
        Point { x: self.x + dx, y: self.y + dy };
}
\xA0
impl Size {
    fn new(w: Int, h: Int) -> Size =
        Size { w: w, h: h };
    fn area(self) -> Int = self.w * self.h;
    fn grow(self, d: Int) -> Size =
        Size { w: self.w + d, h: self.h + d };
}`)],-1),c(`div`,_,[x[2]||=c(`div`,{class:`read`},[s(`a `),c(`b`,null,`method`),s(` is a function whose first parameter has the record's type, attached to the type`)],-1),i((t(),d(`pre`,v,[...x[0]||=[s(`let p = Point.origin().move_by(2, 5);
let s = Size.new(3, 4).grow(1);
println(p);
println(s);
println(s.area());`,-1)]])),[[C,1]]),i((t(),d(`div`,y,[...x[1]||=[c(`div`,{class:`ok`},`Point { x: 2, y: 5 }`,-1),c(`div`,{class:`ok`},`Size { w: 4, h: 5 }`,-1),c(`div`,{class:`ok`},`20`,-1)]])),[[C,1]]),i((t(),d(`div`,b,[u(S,{name:`Point`,fields:`x=2|y=5`,scale:.8}),u(S,{name:`Size`,fields:`w=4|h=5`,scale:.8})])),[[C,2]])])])]),_:1},16)}}};export{x as default};