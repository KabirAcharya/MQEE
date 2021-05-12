document.querySelectorAll('a[onclick]').forEach((el) => {
  if (el.getAttribute("onclick") != "") {
    el.href = el.getAttribute("onclick").replace(/.*\('(http.*)'\)/g, "$1");
    el.setAttribute('target', '_blank');
  }
  el.removeAttribute('onclick');
});