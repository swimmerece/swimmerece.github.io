document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('flierElement').addEventListener('click', function() {
      window.location.href = 'home.html';
    });

    const sircaFanus = document.getElementById('sircaFanus');
    if (sircaFanus) {
      sircaFanus.addEventListener('click', function() {
        window.location.href = 'https://allpoetry.com/mad-girl%27s-love-song';
      });
    }
  });
  