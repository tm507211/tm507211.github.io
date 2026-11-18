import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-B6CMAte1.js";import{nt as f,tt as p}from"./index-DT-oSyzn.js";import{t as m}from"./Record-Dkd79bTg.js";import{t as h}from"./slidev/default-ufuASoRM.js";var g={class:`cols2`,style:{"align-items":`start`}},_={class:`col`},v={class:`cap`,style:{"margin-top":`.4rem`}},y={class:`cap`,style:{"margin-top":`.4rem`}},b={__name:`slides.md__slidev_20`,setup(b){let{$slidev:x,$nav:S,$clicksContext:C,$clicks:w,$page:T,$renderContext:E,$frontmatter:D}=f();return C.setup(),(f,b)=>{let x=m,S=e(`click`);return t(),a(h,o(n(l(p)(l(D),19))),{default:r(()=>[b[4]||=c(`h2`,null,`A generic stack`,-1),c(`div`,g,[b[3]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`pre`,{class:`code`},`struct Stack<T> { items: [T] }
\xA0
impl<T> Stack<T> {
    fn empty() -> Stack<T> = Stack { items: [] };
    fn push(self, x: T) -> Stack<T> =
        Stack { items: x :: self.items };
    fn top(self) -> Option<T> =
        match self {
            Stack { items: [] } => None,
            Stack { items: h :: _ } => Some(h),
        };
}`)],-1),c(`div`,_,[u(x,{name:`Stack<T>`,fields:`items: [T]`}),b[2]||=c(`div`,{class:`cap`},[s(`a list wrapped in a struct; a type parameter, as a `),c(`code`,null,`type`),s(` declaration takes one`)],-1),i((t(),d(`div`,v,[...b[0]||=[c(`code`,null,`impl<T> Stack<T>`,-1),s(` gives every `,-1),c(`code`,null,`Stack<σ>`,-1),s(` these methods, with `,-1),c(`code`,null,`T`,-1),s(` standing for `,-1),c(`code`,null,`σ`,-1)]])),[[S,1]]),i((t(),d(`div`,y,[...b[1]||=[c(`code`,null,`top`,-1),s(` takes `,-1),c(`code`,null,`self`,-1),s(` apart with the struct patterns from Part VIII`,-1)]])),[[S,2]])])])]),_:1},16)}}};export{b as default};