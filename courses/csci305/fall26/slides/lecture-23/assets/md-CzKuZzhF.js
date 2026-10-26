import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-B6CMAte1.js";import{Ct as f,it as p,rt as m}from"./index-3d6LUT6_.js";import{t as h}from"./slidev/default-B1qw2Z1F.js";import{t as g}from"./FamilyTree-B60o6nby.js";import{t as _}from"./slidev/VSwitch-dR0Rs_CM.js";import{t as v}from"./slidev/CodeBlockWrapper-BNSnm_IE.js";var y={class:`two`},b={class:`side`},x={class:`out`},S=f({__name:`slides.md__slidev_2`,setup(f){let{$slidev:S,$nav:C,$clicksContext:w,$clicks:T,$page:E,$renderContext:D,$frontmatter:O}=p();return w.setup(),(f,p)=>{let S=v,C=g,w=_,T=e(`click`);return t(),a(h,o(n(l(m)(l(O),1))),{default:r(()=>[p[3]||=c(`h2`,null,`Ancestors as a function`,-1),c(`div`,y,[c(`div`,null,[u(S,{title:``,ranges:[`all`,`1-2`,`4-11`,`13-17`]},{default:r(()=>[...p[0]||=[c(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[c(`code`,{class:`language-text`},[c(`span`,{class:`line`},[c(`span`,null,`fn parents_of(family: [(String, String)], child: String)`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    -> [String] = map(filter(family, |p| p.1 == child), |p| p.0);`)]),s(`
`),c(`span`,{class:`line`},[c(`span`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`fn ancestors(family: [(String, String)], who: String)`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    -> [String] {`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    ref found = [];`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    for p in parents_of(family, who) {`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`        found := deref found ++ [p] ++ ancestors(family, p);`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    }`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    deref found`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`}`)]),s(`
`),c(`span`,{class:`line`},[c(`span`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`fn main() {`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    let family = [("tom", "bob"), ("tom", "liz"), ("bob", "ann"),`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`                  ("bob", "pat"), ("pat", "jim")];`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    println(ancestors(family, "jim"));`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`}`)])])],-1)]]),_:1})]),c(`div`,b,[u(w,null,{"0-3":r(()=>[u(C,{focus:`jim`,width:250})]),3:r(()=>[u(C,{focus:`jim`,hl:[`pat`,`bob`,`tom`],width:250})]),_:1}),p[2]||=c(`div`,{class:`pairs`},[c(`code`,null,`(p, c)`),s(` = p is a parent of c`)],-1),i((t(),d(`div`,x,[...p[1]||=[s(`["pat", "bob", "tom"]`,-1)]])),[[T,3]])])])]),_:1},16)}}},[[`__scopeId`,`data-v-9b736fb2`]]);export{S as default};