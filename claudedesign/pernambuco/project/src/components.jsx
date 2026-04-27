// ============ Componentes compartilhados ============

const { useEffect, useRef, useState, useMemo } = React;

// Reveal on scroll
const Reveal = ({ children, delay = 0, as: As = "div", className = "", ...rest }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) { setInView(true); return; }
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.05 }
    );
    io.observe(ref.current);
    // Fallback: se por qualquer motivo não disparar, força entrada após 1.2s
    const fallback = setTimeout(() => setInView(true), 1200);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return (
    <As ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}>
      {children}
    </As>
  );
};

// Placeholder img
const PH = ({ label = "imagem", h = 240, dark = false, style, className = "", children }) => (
  <div className={`ph ${dark ? "dark" : ""} ${className}`}
       style={{ height: h, ...(style || {}) }}>
    <span className="lbl">{label}</span>
    {children}
  </div>
);

// Logo
const Logo = ({ dark = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div style={{
      width: 34, height: 34, borderRadius: 8,
      background: "var(--brand-500)",
      display: "grid", placeItems: "center",
      fontFamily: "var(--font-display)", fontWeight: 800,
      color: "#fff", fontSize: 18, letterSpacing: "-0.04em",
    }}>P</div>
    <div style={{ lineHeight: 1.05 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em", color: dark ? "#fff" : "var(--ink-900)" }}>
        Pernambuco
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,.55)" : "var(--stone-500)" }}>
        Materiais
      </div>
    </div>
  </div>
);

// Navbar
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 10);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  const links = [
    { href: "#sobre",       t: "Sobre" },
    { href: "#produtos",    t: "Produtos" },
    { href: "#servicos",    t: "Serviços" },
    { href: "#localizacao", t: "Localização" },
    { href: "#contato",     t: "Contato" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 30,
      background: scrolled ? "rgba(250,250,249,0.85)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--stone-200)" : "1px solid transparent",
      transition: "background .25s ease, border-color .25s ease",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>
        <a href="#top"><Logo /></a>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desk">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 14, fontWeight: 500, color: "var(--ink-800)",
              transition: "color .15s",
            }}
              onMouseOver={e=>e.currentTarget.style.color="var(--brand-600)"}
              onMouseOut={e=>e.currentTarget.style.color="var(--ink-800)"}
            >{l.t}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="nav-desk">
          <a href={`tel:${STORE.phone}`} className="btn btn-sm btn-outline" style={{ fontWeight: 500 }}>
            <Icon name="phone" size={16} /> {STORE.phone}
          </a>
          <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noopener"
             className="btn btn-sm btn-primary">
            <Icon name="whatsapp" size={16} /> WhatsApp
          </a>
        </div>

        <button onClick={()=>setOpen(o=>!o)} aria-label="Menu"
          className="nav-mob"
          style={{
            width: 42, height: 42, borderRadius: 10,
            border: "1px solid var(--stone-200)", background: "#fff",
            display: "none", alignItems: "center", justifyContent: "center",
          }}>
          <Icon name={open ? "x" : "menu"} size={20} />
        </button>
      </div>

      {open && (
        <div className="nav-mob" style={{
          background: "#fff", borderBottom: "1px solid var(--stone-200)",
          padding: "12px 0 20px",
        }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{
                padding: "14px 8px",
                borderBottom: "1px solid var(--stone-100)",
                fontWeight: 500,
              }}>{l.t}</a>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <a href={`tel:${STORE.phone}`} className="btn btn-outline" style={{ flex: 1 }}>
                <Icon name="phone" size={16}/> Ligar
              </a>
              <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noopener"
                 className="btn btn-primary" style={{ flex: 1 }}>
                <Icon name="whatsapp" size={16}/> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desk { display: none !important; }
          .nav-mob { display: flex !important; }
        }
        @media (min-width: 861px) {
          .nav-mob { display: none !important; }
        }
      `}</style>
    </header>
  );
};

// WhatsApp floating
const WAFab = () => (
  <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noopener"
     className="wa-fab" aria-label="Fale no WhatsApp">
    <Icon name="whatsapp" size={28} stroke={2} />
  </a>
);

Object.assign(window, { Reveal, PH, Logo, Navbar, WAFab });
