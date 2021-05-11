document.querySelectorAll('a[onclick]').forEach((el) => {
  el.href = el.getAttribute("onclick").replace(/.*\('(http.*)'\)/g, "$1");
  if (el.getAttribute("onclick") != "") {
    el.setAttribute('target', '_blank');
  }
  el.removeAttribute('onclick');
});