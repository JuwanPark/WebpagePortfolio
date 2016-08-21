function chkToggle(elementid) {
  chkk = document.getElementById(elementid).checked;
  document.getElementById(elementid).checked = !chkk;
}

function rememberWarning() {
  if (document.getElementById('idRemember').checked) {
    ccc = confirm('브라우저를 닫더라도 로그인이 계속 유지될 수 있습니다. 로그인 유지 기능을 사용할 경우 다음 접속부터는 로그인할 필요가 없습니다. 단, 게임방, 학교 등 공공장소에서 이용 시 개인정보가 유출될 수 있으니 꼭 로그아웃을 해주세요.');
    if (!ccc) {
      document.getElementById('idRemember').checked = false;
    }
  }
}

function toggleJoinmenu() {
  if (document.getElementById('moreJoin').style.visibility == 'visible') {
    hideJoinmenu();
  } else {
    document.getElementById('moreJoin').style.opacity = 1;
    document.getElementById('moreJoin').style.visibility = 'visible';
  }
}

function hideJoinmenu() {
  document.getElementById('moreJoin').style.opacity = 0;
  document.getElementById('moreJoin').style.visibility = 'hidden';
}
