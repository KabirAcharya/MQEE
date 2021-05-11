var parent = document.getElementsByClassName("block_alp")[0];
var elem1 = parent.getElementsByTagName("a")[0];
var elem2 = parent.getElementsByTagName("a")[1];

elem1.href = elem1.attributes.onclick.value
.replace("window.open('", "")
.replace("')", "");

elem1.removeAttribute("onclick");
elem2.href = elem2.attributes.onclick.value
.replace("window.open('", "")
.replace("')", "");