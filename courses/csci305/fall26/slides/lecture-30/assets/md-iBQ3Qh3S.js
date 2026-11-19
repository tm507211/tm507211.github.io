import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-B6CMAte1.js";import{nt as f,tt as p}from"./index-bYcwFt6Z.js";import{t as m}from"./Record-CD0foUaw.js";import{t as h}from"./slidev/default-BgQzB58m.js";var g={class:`cols2`,style:{"align-items":`start`}},_={class:`col`,style:{"align-items":`stretch`}},v={class:`term`},y={class:`col`},b={class:`pair`},x={class:`pair`,style:{"margin-top":`.8rem`}},S={class:`cap`},C={__name:`slides.md__slidev_9`,setup(C){let{$slidev:w,$nav:T,$clicksContext:E,$clicks:D,$page:O,$renderContext:k,$frontmatter:A}=f();return E.setup(),(f,C)=>{let w=m,T=e(`click`);return t(),a(h,o(n(l(p)(l(A),8))),{default:r(()=>[C[3]||=c(`h2`,null,`Declaring a struct`,-1),c(`div`,g,[c(`div`,_,[C[1]||=c(`pre`,{class:`code`},`struct Point { x: Int, y: Int }
struct Size { w: Int, h: Int }
\xA0
fn area(s: Size) -> Int = s.w * s.h;
fn is_tall(s: Size) -> Bool = s.h > s.w;
\xA0
fn main() {
    let corner = Point { x: 2, y: 5 };
    let size = Size { w: 3, h: 4 };
    println(size);
    println(area(size));
    println(is_tall(size));
}`,-1),i((t(),d(`div`,v,[...C[0]||=[c(`div`,{class:`ok`},`Size { w: 3, h: 4 }`,-1),c(`div`,{class:`ok`},`12`,-1),c(`div`,{class:`ok`},`true`,-1)]])),[[T,2]])]),c(`div`,y,[c(`div`,b,[u(w,{name:`Point`,fields:`x: Int|y: Int`}),u(w,{name:`Size`,fields:`w: Int|h: Int`})]),i((t(),d(`div`,x,[u(w,{name:`Point`,fields:`x=2|y=5`}),u(w,{name:`Size`,fields:`w=3|h=4`,ok:[`h`,`w`]})])),[[T,1]]),i((t(),d(`div`,S,[...C[2]||=[c(`b`,null,`struct literal`,-1),s(),c(`code`,null,`Size { w: 3, h: 4 }`,-1),s(` names each field · `,-1),c(`b`,null,`field access`,-1),s(),c(`code`,null,`s.h`,-1),s(` reads one by name`,-1)]])),[[T,1]])])])]),_:1},16)}}};export{C as default};