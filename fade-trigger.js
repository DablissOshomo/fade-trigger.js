<script>
  // fade-trigger.js
(function() {
  var triggerDate = new Date('2026-10-30T00:00:00'); // set your target date
  var now = new Date();

  if (now >= triggerDate) {
    document.documentElement.style.transition = 'opacity 1.5s ease';
    document.documentElement.style.opacity = '0';
    document.documentElement.style.pointerEvents = 'none';
  }
})();
  </script>
