document.querySelector('.player-chunk-prev').addEventListener('click', function () {  
  const prev = moveClass('timeline-chunk-active', 'previousElementSibling', (el) => {
    const inner = el.querySelector('.timeline-chunk-inner');
    const w = parseFloat(inner.style.width) || 0;
    inner.style.width = '';

    return w <= 30;
  });

  if (prev) {
    moveClass('player-chunk-active', 'previousElementSibling');
  }
})

document.querySelector('.player-chunk-next').addEventListener('click', next)

function next() {  
  moveClass('player-chunk-active', 'nextElementSibling');

  const el = moveClass('timeline-chunk-active', 'nextElementSibling');

  if (el) {
    el.querySelector('.timeline-chunk-inner').style.width = '';
  }

}

function moveClass(className, method, pred) {
  const active = document.querySelector('.' + className);
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
    const active = document.querySelector('.timeline-chunk-active').querySelector('.timeline-chunk-inner');
    const w = parseFloat(active.style.width) || 0;
  
    if (w === 100) {
      next();
  
      return;
    }
  
    active.style.width = w + step + '%'
  }, time * 1000 * step / 100);
}

let timer;
runInterval(3, 1);
