function toggledisplay(dspid) {
  dspp = document.getElementById(dspid);
  if (dspp.style.display == "none") {
    dspp.style.display = "inline-block";
  } else {
    dspp.style.display = "none";
  }
}

function menubtnchange() {
  dspp = document.getElementById("sitetopmenu");
  dspm = document.getElementById("menubtnimg");
  if (dspp.style.display == "none") {
    dspm.src ="img/menubtn.png";
  } else {
    dspm.src ="img/menuxbtn.png";
  }
}
