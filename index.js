function initPlayer(params) {
  const target = document.querySelector(params.target);

  if (target === null || params.slides === undefined) {
    return;
  }

  let timelineChunks = '';
  let playerChunks = '';

  let isFirst = true;

  for (const el of params.slides) {
    timelineChunks += `
<div class="timeline-chunk ${isFirst ? 'timeline-chunk-active' : ''}">
  <div class="timeline-chunk-inner"></div>
</div>`;

    playerChunks += `
<div class="player-chunk ${isFirst ? 'player-chunk-active' : ''}">
  <img src="${el.url}" alt="${el.alt || ''}">
</div>`;

    isFirst = false;
  }

  target.innerHTML = `
<div class="player">
	<div class="timeline">${timelineChunks}</div>

  <div class="player-content-wrapper">
    <div class="player-chunk-switcher player-chunk-prev"></div>
    <div class="player-chunk-switcher player-chunk-next"></div>
    <div class="player-content">${playerChunks}</div>
	</div>
</div>`;

  target.querySelector('.player-chunk-prev').addEventListener('click', function () {
    const prev = moveClass('timeline-chunk-active', 'previousElementSibling', (el) => {
      const inner = el.querySelector('.timeline-chunk-inner');
      const w = parseFloat(inner.style.width) || 0;
      inner.style.width = '';
  
      return w <= 30;
    });
  
    if (prev) {
      moveClass('player-chunk-active', 'previousElementSibling');
    }
  });

  target.querySelector('.player-chunk-next').addEventListener('click', next);

  function next() {
    moveClass('player-chunk-active', 'nextElementSibling');
  
    const el = moveClass('timeline-chunk-active', 'nextElementSibling');
  
    if (el) {
      el.querySelector('.timeline-chunk-inner').style.width = '';
    }
  }
  
  function moveClass(className, method, pred) {
    const active = target.querySelector('.' + className);
    const next = active[method];
  
    if (pred && !pred(active)) {
      return null;
    }
  
    if (next) {
      active.classList.remove(className);
      next.classList.add(className);
  
      return active;
    }
  
    return null;
  }
  
  function runInterval(time, step) {
    clearInterval(timer);
  
    timer = setInterval(() => {
      const active = target.querySelector('.timeline-chunk-active').querySelector('.timeline-chunk-inner');
      const w = parseFloat(active.style.width) || 0;
    
      if (w === 100) {
        next();
    
        return;
      }
    
      active.style.width = w + step + '%'
    }, time * 1000 * step / 100);
  }
  
  let timer;
  runInterval(params.delayPerSlide || 2, 1);
}
