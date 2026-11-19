import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,y as u}from"./modules/shiki-B6CMAte1.js";import{nt as d,tt as f,vt as p}from"./index-DR98KW2g.js";import{t as m}from"./slidev/default-r-WX4f_l.js";var h={class:`cols2`,style:{"align-items":`start`}},g={class:`col`},_={class:`pair2`},v={class:`cls cb`},y={class:`cap`,style:{"margin-top":`.6rem`}},b=p({__name:`slides.md__slidev_23`,setup(p){let{$slidev:b,$nav:x,$clicksContext:S,$clicks:C,$page:w,$renderContext:T,$frontmatter:E}=d();return S.setup(),(d,p)=>{let b=e(`click`);return t(),a(m,o(n(l(f)(l(E),22))),{default:r(()=>[p[7]||=c(`h2`,null,`Base-class code calls overrides`,-1),c(`div`,h,[p[6]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`div`,{class:`src`},`Java-style sketch`),c(`pre`,{class:`code`},[s(`class Bag {
    void add(String x) { … }
    void addAll(List<String> xs) {
        for (String x : xs) `),c(`span`,{class:`amb`},`add(x)`),s(`;
    }
    int cardinality() { … }
}
class CountingBag extends Bag {
    int n = 0;
    void add(String x) { n++; super.add(x); }
    int cardinality() { return n; }
}`)]),c(`div`,{class:`cap`,style:{"text-align":`left`}},[s(`Simula 67: a `),c(`b`,null,`prefix`),s(` class · Smalltalk-80: one tree, `),c(`b`,null,`override`),s(`, `),c(`code`,null,`super`)])],-1),c(`div`,g,[p[3]||=c(`div`,{class:`box ab mono`},`cb.addAll(List.of("b", "c"))`,-1),p[4]||=c(`div`,{class:`arrow`},`↓`,-1),p[5]||=c(`div`,{class:`cls`},[c(`div`,{class:`ch`},`Bag`),c(`div`,{class:`mono`},[s(`add · `),c(`b`,null,`addAll`),s(` · cardinality`)])],-1),i((t(),u(`div`,_,[...p[0]||=[c(`span`,{class:`arrow`},`↓`,-1),c(`span`,{class:`cap red mono`},[s(`add(x) on `),c(`i`,null,`this`),s(` object`)],-1)]])),[[b,1]]),i((t(),u(`div`,v,[...p[1]||=[c(`div`,{class:`ch`},`CountingBag`,-1),c(`div`,{class:`mono`},[c(`b`,null,`add`),s(` (n++) · cardinality`)],-1)]])),[[b,1]]),i((t(),u(`div`,y,[...p[2]||=[s(`the base class's own calls run the subclass's overrides: `,-1),c(`code`,null,`addAll`,-1),s(` was written once, counting arrived later`,-1)]])),[[b,2]])])])]),_:1},16)}}},[[`__scopeId`,`data-v-ae3c9d1e`]]);export{b as default};