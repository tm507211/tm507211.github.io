import{_ as e}from"../modules/shiki-BDOa5D_m.js";import{i as t}from"../utils-QKqV1Vbb.js";var n={theme:`../theme-csci305`,title:`First-Class Functions`,titleTemplate:`%s - Slidev`,addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:`local`,monacoTypesAdditionalPackages:[],monacoTypesIgnorePackages:[],monacoRunAdditionalDeps:[],monacoRunUseStrict:!0,download:!1,export:{},info:`<p>Lecture 14 (First-Class Functions). Part V opens; Ch. 19 / functions/functions.md,
on the road to M4. The problem: two loops that differ in one line (squares vs.
cubes) — writing the loop once needs the differing line to be HANDED OVER like a
list is. History, visual: subroutines (Goldstine–von Neumann; the Wheeler jump
animated on a store diagram; Wheeler 1952's integration routine that needs f(x));
functions vs. procedures (FORTRAN II FUNCTION vs SUBROUTINE, Algol 58 → 60's
function designator, &quot;function&quot; names a POSITION, not a promise of no effects —
f()*10 + f() is 12 or 21 by order; Pascal and Fortran 77 made the promise a rule;
C one kind + void); second-class citizens (Algol 60 checklist, Strachey), and the
λ line (Church, McCarthy). Bridger: functions pass the checklist (== and printing
excepted); <code>fn</code> and lambda make the same value; E-Lam evaluates nothing and
RECORDS the environment, because a function body is the first code that runs
where it was not written; build = provided Closure types, no arm printed. Design
space: one routine or two; how first-class (Algol/Pascal pass-down, C pointers
with no nesting, full closures) and why pass-down is cheaper (stack picture).
Static scope is Bridger's stated semantics — no &quot;naive rule to repair&quot; framing.
Target 40 min, example- and picture-led.</p>
`,highlighter:`shiki`,twoslash:!0,lineNumbers:!1,colorSchema:`light`,routerMode:`hash`,aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:``,selectable:!1,themeConfig:{},fonts:{sans:[`ui-sans-serif`,`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`"Helvetica Neue"`,`Arial`,`"Noto Sans"`,`sans-serif`,`"Apple Color Emoji"`,`"Segoe UI Emoji"`,`"Segoe UI Symbol"`,`"Noto Color Emoji"`],serif:[`ui-serif`,`Georgia`,`Cambria`,`"Times New Roman"`,`Times`,`serif`],mono:[`ui-monospace`,`SFMono-Regular`,`Menlo`,`Monaco`,`Consolas`,`"Liberation Mono"`,`"Courier New"`,`monospace`],webfonts:[],provider:`google`,local:[],italic:!1,weights:[`200`,`400`,`600`]},favicon:`https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png`,drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:`https://www.plantuml.com/plantuml`,codeCopy:!0,magicMoveCopy:!0,author:``,record:`dev`,css:`unocss`,presenter:!0,browserExporter:`dev`,htmlAttrs:{},transition:`slide-left`,editor:!0,mcp:!0,contextMenu:null,wakeLock:!0,pwa:!1,mdc:!1,comark:!1,seoMeta:{},notesAutoRuby:{},duration:`30min`,timer:`stopwatch`,magicMoveDuration:800,preloadImages:!0,clickAnimation:``,layout:`cover`,date:`Monday, September 28, 2026`,readings:`<a href="../../../../../books/pl-design/functions/functions.html">Ch. 19</a>`,slidesTitle:`First-Class Functions - Slidev`},r=`build`,i=e(()=>n.aspectRatio),a=e(()=>n.canvasWidth),o=e(()=>Math.ceil(a.value/i.value)),s=e(()=>t(n.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t])),c=n.slidesTitle,l=`./#/`;export{a,n as c,o as i,l as n,c as o,i as r,s,r as t};