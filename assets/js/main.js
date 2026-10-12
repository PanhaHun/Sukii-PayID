/* Hey_Sukii - copy buttons
   Copies the text in each button's data-copy attribute to the clipboard. */
(function () {
  'use strict';

  function fallbackCopy(text) {
    var field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    document.body.removeChild(field);
  }

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy;
      var done = function () {
        btn.textContent = 'Copied!';
        btn.classList.add('is-copied');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('is-copied');
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else {
        fallbackCopy(text);
        done();
      }
    });
  });
})();
