document.querySelectorAll('a[onclick]').forEach((el) => {
  el.href = el.getAttribute("onclick").replace(/.*\('(http.*)'\)/g, "$1"); 
  el.setAttribute('onclick', '');
  el.setAttribute('target', '_blank');
});