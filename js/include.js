// Pulls the shared header (header.html) into any page that has a
// <div id="site-header"></div> placeholder. Uses jQuery, which every
// page already loads. The "header.html" URL resolves against the page's
// base href, so sub-directory pages that set <base href="../" /> get the
// same root-level header.html as the top-level pages.
$(function () {
  $("#site-header").load("header.html");
});
