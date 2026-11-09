import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,y as u}from"./modules/shiki-B6CMAte1.js";import{nt as d,tt as f}from"./index-DiT2iguK.js";import{t as p}from"./slidev/default-CIcQ1HjV.js";var m={class:`cols2`,style:{"grid-template-columns":`1.05fr 1fr`,"align-items":`center`}},h={class:`col`,style:{"align-items":`stretch`}},g={class:`term`},_={__name:`slides.md__slidev_24`,setup(_){let{$slidev:v,$nav:y,$clicksContext:b,$clicks:x,$page:S,$renderContext:C,$frontmatter:w}=d();return b.setup(),(d,_)=>{let v=e(`click`);return t(),a(p,o(n(l(f)(l(w),23))),{default:r(()=>[_[4]||=c(`h2`,null,`The ? operator`,-1),c(`div`,m,[_[3]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`pre`,{class:`code`},`fn sum_first_two(xs: [Int]) -> Option<Int> {
    let a = head(xs)?;
    let rest = tail(xs)?;
    let b = head(rest)?;
    Some(a + b)
}`),c(`div`,{class:`term`},[c(`div`,{class:`ok`},`sum_first_two([1, 2, 3]) ⇒ Some(3)`),c(`div`,{class:`ok`},`sum_first_two([1]) ⇒ None`)])],-1),c(`div`,h,[i((t(),u(`div`,null,[..._[0]||=[c(`div`,{class:`cap`},[c(`code`,null,`e?`),s(` on an `),c(`code`,null,`Option`),s(` means`)],-1),c(`pre`,{class:`code`},`match e {
    Some(v) => v,
    None => return None,
}`,-1)]])),[[v,1]]),i((t(),u(`div`,null,[..._[1]||=[c(`div`,{class:`cap`},[c(`code`,null,`e?`),s(` on a `),c(`code`,null,`Result`),s(` means`)],-1),c(`pre`,{class:`code`},`match e {
    Ok(v) => v,
    Err(err) => return Err(err),
}`,-1)]])),[[v,2]]),i((t(),u(`div`,g,[..._[2]||=[c(`div`,{class:`err`},`fn f(x: Int) -> Int { Some(x)? … }`,-1),c(`div`,{class:`err`},`result type Int cannot carry it`,-1)]])),[[v,3]])])])]),_:1},16)}}};export{_ as default};