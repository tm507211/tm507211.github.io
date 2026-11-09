import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,y as u}from"./modules/shiki-B6CMAte1.js";import{nt as d,tt as f,vt as p}from"./index-DiT2iguK.js";import{t as m}from"./slidev/default-CIcQ1HjV.js";var h={class:`stack`},g={class:`code`},_={class:`code`},v={class:`term`,style:{"margin-top":`.6rem`}},y=p({__name:`slides.md__slidev_23`,setup(p){let{$slidev:y,$nav:b,$clicksContext:x,$clicks:S,$page:C,$renderContext:w,$frontmatter:T}=d();return x.setup(),(d,p)=>{let y=e(`click`);return t(),a(m,o(n(l(f)(l(T),22))),{default:r(()=>[p[4]||=c(`h2`,null,`map, filter, and fold`,-1),c(`div`,h,[p[2]||=c(`pre`,{class:`code`},`fn my_map<A, B>(xs: [A], f: fn(A) -> B) -> [B] = match xs {
    [] => [],
    x :: rest => f(x) :: my_map(rest, f),
};`,-1),i((t(),u(`pre`,g,[...p[0]||=[s(`fn my_filter<A>(xs: [A], keep: fn(A) -> Bool) -> [A] = match xs {
    [] => [],
    x :: rest =>
        if keep(x) { x :: my_filter(rest, keep) } else { my_filter(rest, keep) },
};`,-1)]])),[[y,1]]),i((t(),u(`pre`,_,[...p[1]||=[s(`fn my_fold<A, B>(xs: [A], acc: B, f: fn(B, A) -> B) -> B = match xs {
    [] => acc,
    x :: rest => my_fold(rest, f(acc, x), f),
};`,-1)]])),[[y,2]])]),i((t(),u(`div`,v,[...p[3]||=[c(`div`,{class:`ok`},`my_map([1, 2, 3], |x: Int| x * 10) ⇒ [10, 20, 30]`,-1),c(`div`,{class:`ok`},`my_filter([1, 2, 3, 4], |x: Int| even(x)) ⇒ [2, 4]`,-1),c(`div`,{class:`ok`},`my_fold([1, 2, 3], 0, |a: Int, x: Int| a + x) ⇒ 6`,-1)]])),[[y,3]])]),_:1},16)}}},[[`__scopeId`,`data-v-42a55a91`]]);export{y as default};