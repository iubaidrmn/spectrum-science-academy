// Simple countdown to 14 days from now (client-side)
(function(){
  const end = new Date(Date.now() + 14*24*60*60*1000); // 14 days
  function pad(n){ return String(n).padStart(2,'0') }
  function update(){
    const now = new Date();
    let diff = Math.max(0, end - now);
    const d = Math.floor(diff / (1000*60*60*24)); diff -= d*1000*60*60*24;
    const h = Math.floor(diff / (1000*60*60)); diff -= h*1000*60*60;
    const m = Math.floor(diff / (1000*60)); diff -= m*1000;
    const s = Math.floor(diff / 1000);
    document.getElementById('d').textContent = pad(d);
    document.getElementById('h').textContent = pad(h);
    document.getElementById('m').textContent = pad(m);
    document.getElementById('s').textContent = pad(s);
  }
  update();
  setInterval(update, 1000);

  window.handleNotify = function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('msg').textContent = 'Thanks — we will notify ' + email + ' (demo only)';
    document.getElementById('email').value = '';
    return false;
  };
})();
