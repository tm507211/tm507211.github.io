import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-B6CMAte1.js";import{nt as f,tt as p,vt as m}from"./index-DR98KW2g.js";import{t as h}from"./Record-FQV3bhhb.js";import{t as g}from"./slidev/default-r-WX4f_l.js";var _={class:`cols2`,style:{"align-items":`start`}},v={class:`col`},y={class:`pair`,style:{gap:`1.6rem`}},b={class:`col`},x={class:`col`},S={class:`cap`,style:{"margin-top":`.5rem`}},C={class:`mono`,style:{"font-size":`.66em`,"margin-top":`.5rem`}},w={class:`term`,style:{"font-size":`.58em`}},T=m({__name:`slides.md__slidev_15`,setup(m){let{$slidev:T,$nav:E,$clicksContext:D,$clicks:O,$page:k,$renderContext:A,$frontmatter:j}=f();return D.setup(),(f,m)=>{let T=h,E=e(`click`);return t(),a(g,o(n(l(p)(l(j),14))),{default:r(()=>[m[10]||=c(`h2`,null,`Closures can hide state`,-1),c(`div`,_,[m[9]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`pre`,{class:`code`,style:{"font-size":`.64em`}},`struct Counter { tick: fn() -> (),
                 read: fn() -> Int }
\xA0
fn counter() -> Counter {
    ref n = 0;
    Counter {
        tick: || { n := deref n + 1; },
        read: || deref n,
    }
}
\xA0
let c = counter();
(c.tick)(); (c.tick)();
println((c.read)());
println((counter().read)());`),c(`div`,{class:`term`},[c(`div`,{class:`ok`},`2`),c(`div`,{class:`ok`},`0`)])],-1),c(`div`,v,[c(`div`,y,[c(`div`,b,[m[0]||=c(`span`,{class:`mono vn`},`c`,-1),u(T,{name:`Counter`,fields:`tick=λ|read=λ`,scale:.8}),m[1]||=c(`div`,{class:`arrow`},`⇓`,-1),m[2]||=c(`div`,{class:`cell`},[c(`div`,{class:`mono`},`n ↦ 2`)],-1)]),i((t(),d(`div`,x,[m[3]||=c(`span`,{class:`mono vn`},`counter()`,-1),u(T,{name:`Counter`,fields:`tick=λ|read=λ`,scale:.8}),m[4]||=c(`div`,{class:`arrow`},`⇓`,-1),m[5]||=c(`div`,{class:`cell`},[c(`div`,{class:`mono`},`n ↦ 0`)],-1)])),[[E,1]])]),i((t(),d(`div`,S,[...m[6]||=[c(`code`,null,`n`,-1),s(` has no name outside `,-1),c(`code`,null,`counter`,-1),s(`: the closures are the only way in`,-1)]])),[[E,2]]),i((t(),d(`div`,C,[...m[7]||=[s(`c.tick()`,-1)]])),[[E,3]]),i((t(),d(`div`,w,[...m[8]||=[c(`div`,{class:`err`},"× `tick` is a field of Counter, not a method",-1)]])),[[E,3]])])])]),_:1},16)}}},[[`__scopeId`,`data-v-8fd48e7d`]]);export{T as default};