// Inyecta el logo de la Pontificia Universidad Javeriana
// en todas las diapositivas como elemento fijo superpuesto
(function() {
  function injectLogo() {
    if (document.getElementById('logo-puj')) return; // ya existe, no duplicar
    var div = document.createElement('div');
    div.id = 'logo-puj';
    div.style.cssText = [
      'position:fixed',
      'top:10px',
      'right:1.25rem',
      'z-index:600',
      'display:flex',
      'align-items:center',
      'gap:6px',
      'opacity:0.85',
      'transition:opacity 0.3s',
      'pointer-events:none'
    ].join(';');
    var img = document.createElement('img');
    img.src = 'img/Javeriana.png';
    img.alt = 'Pontificia Universidad Javeriana';
    img.style.cssText = 'height:44px;width:auto;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.6))';
    img.onerror = function() {
      // fallback: texto si la imagen falla
      div.innerHTML = '';
      var span = document.createElement('span');
      span.style.cssText = 'font-size:0.6rem;color:rgba(200,168,75,0.8);font-family:serif;letter-spacing:0.03em;text-align:right;line-height:1.2;max-width:120px';
      span.textContent = 'Pontificia Universidad Javeriana';
      div.appendChild(span);
    };
    div.appendChild(img);
    document.body.appendChild(div);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectLogo);
  } else {
    injectLogo();
  }
})();
