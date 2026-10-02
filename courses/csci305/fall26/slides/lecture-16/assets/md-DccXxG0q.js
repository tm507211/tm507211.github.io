import{$ as e,B as t,C as n,D as r,G as i,S as a,bt as o,et as s,v as c,vt as l,x as u,y as d}from"./modules/shiki-BDOa5D_m.js";import{nt as f,rt as p,yt as m}from"./index-BHe84EHp.js";import{t as h}from"./slidev/CodeBlockWrapper-CVlbmQRE.js";import{t as g}from"./slidev/two-cols-header-DZ1MlLYL.js";var _={class:`qs`},v={class:`q`},y={class:`q`},b={class:`q`},x=m({__name:`slides.md__slidev_3`,setup(m){let{$slidev:x,$nav:S,$clicksContext:C,$clicks:w,$page:T,$renderContext:E,$frontmatter:D}=p();return C.setup(),(p,m)=>{let x=h,S=i(`click`);return t(),d(g,o(r(l(f)(l(D),2))),{left:e(t=>[n(x,{title:``,ranges:[]},{default:e(()=>[...m[0]||=[c(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[c(`code`,{class:`language-text`},[c(`span`,{class:`line`},[c(`span`,null,`fn make_adder(k: Int) -> fn(Int) -> Int =`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    |x: Int| x + k;`)]),a(`
`),c(`span`,{class:`line`},[c(`span`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`fn make_counter() -> fn() -> Int {`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    ref n = 0;`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    || { n := deref n + 1; deref n }`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`}`)]),a(`
`),c(`span`,{class:`line`},[c(`span`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`fn main() {`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    let add5 = make_adder(5);`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    println(add5(10));       // 15`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    let c1 = make_counter();`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    let c2 = make_counter();`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    c1(); c1();`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    println(c1());           // 3`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`    println(c2());           // 1`)]),a(`
`),c(`span`,{class:`line`},[c(`span`,null,`}`)])])],-1)]]),_:1})]),right:e(e=>[c(`div`,_,[s((t(),u(`div`,v,[...m[1]||=[c(`span`,{class:`n`},`1`,-1),c(`div`,null,[c(`b`,null,[a(`Where is `),c(`code`,null,`k`),a(`?`)]),c(`br`),c(`small`,null,[c(`code`,null,`make_adder(5)`),a(` is over by the time `),c(`code`,null,`add5(10)`),a(` runs — yet `),c(`code`,null,`x + k`),a(` finds `),c(`code`,null,`k ↦ 5`)])],-1)]])),[[S]]),s((t(),u(`div`,y,[...m[2]||=[c(`span`,{class:`n`},`2`,-1),c(`div`,null,[c(`b`,null,`Where does the count live?`),c(`br`),c(`small`,null,[a(`between calls of `),c(`code`,null,`c1`),a(`, long after `),c(`code`,null,`make_counter`),a(` returned`)])],-1)]])),[[S]]),s((t(),u(`div`,b,[...m[3]||=[c(`span`,{class:`n`},`3`,-1),c(`div`,null,[c(`b`,null,[a(`Why don't `),c(`code`,null,`c1`),a(` and `),c(`code`,null,`c2`),a(` share it?`)]),c(`br`),c(`small`,null,`same function, same body, two counts`)],-1)]])),[[S]])])]),default:e(()=>[m[4]||=c(`h2`,null,`A function that outlives its call`,-1)]),_:1},16)}}},[[`__scopeId`,`data-v-406c48ae`]]);export{x as default};