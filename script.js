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

    const beyazGeceler = document.getElementById('beyazGeceler');
    if (beyazGeceler) {
      beyazGeceler.addEventListener('click', function() {
        window.location.href = 'movies.html';
      });
    }

    const yabanci = document.getElementById('yabanci');
    if (yabanci) {
      yabanci.addEventListener('click', function() {
        window.location.href = 'leavehertoheaven.html';
      });
    }
  });
  