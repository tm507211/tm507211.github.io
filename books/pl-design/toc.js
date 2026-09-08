// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">About This Book</a></li><li class="chapter-item expanded affix "><li class="part-title">Part I — Languages as Designed Artifacts</li><li class="chapter-item expanded "><a href="foundations/why-interpreter.html"><strong aria-hidden="true">1.</strong> Why build an interpreter?</a></li><li class="chapter-item expanded "><a href="foundations/history.html"><strong aria-hidden="true">2.</strong> From machine code to high-level languages</a></li><li class="chapter-item expanded "><a href="foundations/paradigms.html"><strong aria-hidden="true">3.</strong> The paradigm branches</a></li><li class="chapter-item expanded "><a href="foundations/syntax-semantics.html"><strong aria-hidden="true">4.</strong> Syntax and semantics</a></li><li class="chapter-item expanded "><a href="foundations/ast.html"><strong aria-hidden="true">5.</strong> The abstract syntax tree</a></li><li class="chapter-item expanded affix "><li class="part-title">Part II — Evaluating Expressions</li><li class="chapter-item expanded "><a href="eval/values.html"><strong aria-hidden="true">6.</strong> Values and runtime errors</a></li><li class="chapter-item expanded "><a href="eval/tree-walking.html"><strong aria-hidden="true">7.</strong> Tree-walking evaluation</a></li><li class="chapter-item expanded "><a href="eval/error-handling.html"><strong aria-hidden="true">8.</strong> Error handling</a></li><li class="chapter-item expanded "><a href="eval/big-step.html"><strong aria-hidden="true">9.</strong> Program semantics</a></li><li class="chapter-item expanded "><a href="milestones/m1.html"><strong aria-hidden="true">10.</strong> Milestone M1: the expression evaluator</a></li><li class="chapter-item expanded affix "><li class="part-title">Part III — Names and Binding</li><li class="chapter-item expanded "><a href="binding/environments.html"><strong aria-hidden="true">11.</strong> Environments and let</a></li><li class="chapter-item expanded "><a href="binding/lexical-scope.html"><strong aria-hidden="true">12.</strong> Lexical scope</a></li><li class="chapter-item expanded "><a href="binding/representations.html"><strong aria-hidden="true">13.</strong> Environment representations and lookup</a></li><li class="chapter-item expanded "><a href="milestones/m2.html"><strong aria-hidden="true">14.</strong> Milestone M2: environments and binding</a></li><li class="chapter-item expanded affix "><li class="part-title">Part IV — State and Control Flow</li><li class="chapter-item expanded "><a href="imperative/control-flow.html"><strong aria-hidden="true">15.</strong> Expressions, statements, and blocks</a></li><li class="chapter-item expanded "><a href="imperative/mutation.html"><strong aria-hidden="true">16.</strong> Mutation and references</a></li><li class="chapter-item expanded "><a href="imperative/conditionals-loops.html"><strong aria-hidden="true">17.</strong> Conditionals and loops</a></li><li class="chapter-item expanded "><a href="milestones/m3.html"><strong aria-hidden="true">18.</strong> Milestone M3: control flow and mutation</a></li><li class="chapter-item expanded affix "><li class="part-title">Part V — Functions and Closures</li><li class="chapter-item expanded "><a href="functions/functions.html"><strong aria-hidden="true">19.</strong> First-class functions</a></li><li class="chapter-item expanded "><a href="functions/calls.html"><strong aria-hidden="true">20.</strong> Evaluating function calls</a></li><li class="chapter-item expanded "><a href="functions/closures.html"><strong aria-hidden="true">21.</strong> Closures</a></li><li class="chapter-item expanded "><a href="functions/scope.html"><strong aria-hidden="true">22.</strong> Static vs. dynamic scope</a></li><li class="chapter-item expanded "><a href="functions/functional.html"><strong aria-hidden="true">23.</strong> Recursion and higher-order functions</a></li><li class="chapter-item expanded "><a href="functions/functional-programming.html"><strong aria-hidden="true">24.</strong> Programming functionally</a></li><li class="chapter-item expanded "><a href="milestones/m4.html"><strong aria-hidden="true">25.</strong> Milestone M4: functions, closures, and static scope</a></li><li class="chapter-item expanded affix "><li class="part-title">Part VI — Types</li><li class="chapter-item expanded "><a href="types/motivation.html"><strong aria-hidden="true">26.</strong> Why types? From runtime errors to static checking</a></li><li class="chapter-item expanded "><a href="types/type-checker.html"><strong aria-hidden="true">27.</strong> A type checker</a></li><li class="chapter-item expanded "><a href="types/polymorphism.html"><strong aria-hidden="true">28.</strong> Function types and polymorphism</a></li><li class="chapter-item expanded "><a href="types/soundness.html"><strong aria-hidden="true">29.</strong> Soundness, informally</a></li><li class="chapter-item expanded "><a href="types/dynamic-gradual.html"><strong aria-hidden="true">30.</strong> Dynamic and gradual typing</a></li><li class="chapter-item expanded "><a href="milestones/m5.html"><strong aria-hidden="true">31.</strong> Milestone M5: the type checker</a></li><li class="chapter-item expanded affix "><li class="part-title">Part VII — Relations: a Logic Sublanguage</li><li class="chapter-item expanded "><a href="relations/datalog.html"><strong aria-hidden="true">32.</strong> Declarative programming</a></li><li class="chapter-item expanded "><a href="relations/unification.html"><strong aria-hidden="true">33.</strong> Unification</a></li><li class="chapter-item expanded "><a href="relations/fixpoint.html"><strong aria-hidden="true">34.</strong> Evaluating relations: the least fixpoint</a></li><li class="chapter-item expanded "><a href="relations/rules.html"><strong aria-hidden="true">35.</strong> Rule bodies and safety</a></li><li class="chapter-item expanded "><a href="relations/integration.html"><strong aria-hidden="true">36.</strong> Querying relations from the host language</a></li><li class="chapter-item expanded "><a href="milestones/m6.html"><strong aria-hidden="true">37.</strong> Milestone M6: relations</a></li><li class="chapter-item expanded affix "><li class="part-title">Part VIII — Algebraic Data Types</li><li class="chapter-item expanded "><a href="adt/adts.html"><strong aria-hidden="true">38.</strong> Sum and product types</a></li><li class="chapter-item expanded "><a href="adt/pattern-matching.html"><strong aria-hidden="true">39.</strong> Pattern matching</a></li><li class="chapter-item expanded "><a href="adt/exhaustiveness.html"><strong aria-hidden="true">40.</strong> Exhaustiveness checking</a></li><li class="chapter-item expanded "><a href="milestones/m7.html"><strong aria-hidden="true">41.</strong> Milestone M7: ADTs and pattern matching</a></li><li class="chapter-item expanded affix "><li class="part-title">Part IX — Objects</li><li class="chapter-item expanded "><a href="objects/structs.html"><strong aria-hidden="true">42.</strong> Structs with methods</a></li><li class="chapter-item expanded "><a href="objects/dispatch.html"><strong aria-hidden="true">43.</strong> Dispatch and encapsulation</a></li><li class="chapter-item expanded "><a href="objects/traits-inheritance.html"><strong aria-hidden="true">44.</strong> Traits vs. inheritance</a></li><li class="chapter-item expanded "><a href="milestones/m8.html"><strong aria-hidden="true">45.</strong> Milestone M8: structs, methods, and traits</a></li><li class="chapter-item expanded affix "><li class="part-title">Part X — Cost, Challenge, and Synthesis</li><li class="chapter-item expanded "><a href="challenge/cost-semantics.html"><strong aria-hidden="true">46.</strong> Cost semantics</a></li><li class="chapter-item expanded "><a href="challenge/challenge.html"><strong aria-hidden="true">47.</strong> The paradigm challenge</a></li><li class="chapter-item expanded "><a href="challenge/synthesis.html"><strong aria-hidden="true">48.</strong> Synthesis: the branches recombined</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Appendices</li><li class="chapter-item expanded "><a href="appendix/rust-reference.html"><strong aria-hidden="true">49.</strong> A. Rust for interpreter writers</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="milestones/m0.html"><strong aria-hidden="true">49.1.</strong> A.1 Milestone M0: Rust warm-up</a></li></ol></li><li class="chapter-item expanded "><a href="appendix/grammar.html"><strong aria-hidden="true">50.</strong> B. Bridger Concrete Grammar</a></li><li class="chapter-item expanded "><a href="appendix/prelude.html"><strong aria-hidden="true">51.</strong> C. Bridger Prelude</a></li><li class="chapter-item expanded "><a href="appendix/language-reference.html"><strong aria-hidden="true">52.</strong> D. Bridger Language Reference</a></li><li class="chapter-item expanded "><a href="appendix/milestones.html"><strong aria-hidden="true">53.</strong> E. Milestone index</a></li><li class="chapter-item expanded "><a href="appendix/timeline.html"><strong aria-hidden="true">54.</strong> F. A timeline of languages and ideas</a></li><li class="chapter-item expanded "><a href="appendix/notation.html"><strong aria-hidden="true">55.</strong> G. Notation reference</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
