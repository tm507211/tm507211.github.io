import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-B6CMAte1.js";import{nt as f,tt as p}from"./index-DR98KW2g.js";import{t as m}from"./Record-FQV3bhhb.js";import{t as h}from"./slidev/default-r-WX4f_l.js";var g={class:`cols2`,style:{"align-items":`start`}},_={class:`col`},v={class:`pair2`},y={class:`cap`,style:{"margin-top":`.6rem`}},b={class:`code`,style:{"font-size":`.6em`}},x={class:`cap`,style:{"margin-top":`.5rem`}},S={class:`term`,style:{width:`100%`,"font-size":`.58em`}},C={class:`read`,style:{"margin-top":`.6rem`}},w={__name:`slides.md__slidev_21`,setup(w){let{$slidev:T,$nav:E,$clicksContext:D,$clicks:O,$page:k,$renderContext:A,$frontmatter:j}=f();return D.setup(),(f,w)=>{let T=m,E=e(`click`);return t(),a(h,o(n(l(p)(l(j),20))),{default:r(()=>[w[10]||=c(`h2`,null,`? converts errors with From`,-1),c(`div`,g,[w[9]||=c(`div`,{class:`col`,style:{"align-items":`stretch`}},[c(`pre`,{class:`code`,style:{"font-size":`.56em`}},[s(`struct ParseError { at: Int }
type ConfigError = BadNumber(Int) | Missing(String);
\xA0
impl From<ParseError> for ConfigError {
    fn from(e: ParseError) -> Self = BadNumber(e.at);
}
\xA0
fn digit(s: String) -> Result<Int, ParseError> =
    if s == "7" { Ok(7) }
    else { Err(ParseError { at: 0 }) };
\xA0
fn port(s: String) -> Result<Int, ConfigError> {
    let d = `),c(`span`,{class:`amb`},`digit(s)?`),s(`;
    Ok(8000 + d)
}`)]),c(`div`,{class:`term`},[c(`div`,{class:`ok`},`port("7") ⇒ Ok(8007)`),c(`div`,{class:`ok`},`port("x") ⇒ Err(BadNumber(0))`)])],-1),c(`div`,_,[c(`div`,v,[u(T,{name:`ParseError`,fields:`at=0`,scale:.75}),w[0]||=c(`span`,{class:`arrow`},`⟶`,-1),w[1]||=c(`span`,{class:`mono`,style:{"font-size":`.66em`}},`ConfigError.from`,-1),w[2]||=c(`span`,{class:`arrow`},`⟶`,-1),w[3]||=c(`div`,{class:`box mono`},`BadNumber(0)`,-1)]),i((t(),d(`div`,y,[...w[4]||=[s(`when the error types differ, `,-1),c(`code`,null,`e?`,-1),s(` desugars to`,-1)]])),[[E,1]]),i((t(),d(`pre`,b,[...w[5]||=[s(`match e { Ok(v) => v,
          Err(err) => return Err(`,-1),c(`span`,{class:`amb`},`E.from(err)`,-1),s(`) }`,-1)]])),[[E,1]]),i((t(),d(`div`,x,[...w[6]||=[s(`without the impl:`,-1)]])),[[E,2]]),i((t(),d(`div`,S,[...w[7]||=[c(`div`,{class:`err`},`× type mismatch: expected ConfigError, found ParseError`,-1)]])),[[E,2]]),i((t(),d(`div`,C,[...w[8]||=[c(`code`,null,`from`,-1),s(` has no receiver, so no head: the `,-1),c(`b`,null,`checker`,-1),s(` picks the impl by the argument's type and records its choice`,-1)]])),[[E,3]])])])]),_:1},16)}}};export{w as default};