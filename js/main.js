(function () {
  "use strict";

  /* Header scroll + mobile menu */
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navMobile = document.getElementById("navMobile");

  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (menuToggle && navMobile) {
    menuToggle.addEventListener("click", () => {
      const open = navMobile.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navMobile.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Footer year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Testimonials */
  const testimonials = [
    {
      quote:
        "Excelente servicio, hacemos llegar a nuestros clientes recordatorios y estatus de sus compras en línea.",
      author: "Arturo Albiter",
      role: "Director General",
    },
    {
      quote:
        "Todo funciona muy bien, nuestros clientes reciben su guía de envío e información importante al instante.",
      author: "Ana Nava",
      role: "Asistente Administrativo",
    },
    {
      quote:
        "Podemos mandar nuestras campañas e información importante a nuestros voluntarios.",
      author: "Orlando Piñon",
      role: "Presidente — Cámara de Comercio",
    },
    {
      quote:
        "Las escuelas pueden recibir información sobre su convenio, es excelente el servicio.",
      author: "Aaron Fragoso",
      role: "Director Adjunto",
    },
    {
      quote:
        "Recomendables al 100%, enviamos facturas, recordatorios y promociones a todos nuestros clientes.",
      author: "Armando Vázquez",
      role: "Director General",
    },
    {
      quote:
        "Coordinamos nuestras causas e informamos a nuestros voluntarios por SMS. Excelente y económico.",
      author: "Paola Flores",
      role: "Presidenta",
    },
  ];

  const quoteEl = document.getElementById("testimonialQuote");
  const authorEl = document.getElementById("testimonialAuthor");
  const roleEl = document.getElementById("testimonialRole");
  const dotsEl = document.getElementById("testimonialDots");

  if (quoteEl && authorEl && roleEl && dotsEl) {
    let current = 0;
    let timer;

    const render = (index) => {
      const t = testimonials[index];
      quoteEl.textContent = `"${t.quote}"`;
      authorEl.textContent = t.author;
      roleEl.textContent = t.role;
      dotsEl.querySelectorAll("button").forEach((btn, i) => {
        btn.classList.toggle("is-active", i === index);
        btn.setAttribute("aria-selected", String(i === index));
      });
    };

    testimonials.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-label", `Testimonio ${i + 1}`);
      btn.addEventListener("click", () => {
        current = i;
        render(current);
        resetTimer();
      });
      dotsEl.appendChild(btn);
    });

    const next = () => {
      current = (current + 1) % testimonials.length;
      render(current);
    };

    const resetTimer = () => {
      clearInterval(timer);
      timer = setInterval(next, 7000);
    };

    render(0);
    resetTimer();
  }
})();
