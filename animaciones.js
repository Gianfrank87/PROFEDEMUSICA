
    // Año en footer
    document.getElementById('y').textContent = new Date().getFullYear();

    // Menú móvil
    const btn = document.querySelector('.menu-btn');
    const menu = document.getElementById('menu');
    btn?.addEventListener('click', ()=>{
      menu.classList.toggle('open');
      const open = menu.classList.contains('open');
      btn.setAttribute('aria-expanded', String(open));
    });

    // Resaltar enlace activo al hacer scroll
    const links = [...document.querySelectorAll('nav a')];
    const ids = links.map(a => a.getAttribute('href')).filter(x=>x && x.startsWith('#'));

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        const id = '#' + entry.target.id;
        const link = links.find(a=>a.getAttribute('href')===id);
        if(link){
          if(entry.isIntersecting){
            links.forEach(a=>a.classList.remove('active'));
            link.classList.add('active');
          }
        }
      })
    }, {rootMargin: '-40% 0px -55% 0px', threshold: 0});

    ids.forEach(id=>{
      const el = document.querySelector(id);
      if(el) observer.observe(el);
    });

    // Preferencias de movimiento reducido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
