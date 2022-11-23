const element = document.getElementById('myIp')
element.addEventListener('click', findMyIp)

function findMyIp() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", 'https://api.ipify.org');
  xmlhttp.send();
  xmlhttp.onload = function (e) {
    document.getElementById('text').innerText = xmlhttp.responseText
  }
}



