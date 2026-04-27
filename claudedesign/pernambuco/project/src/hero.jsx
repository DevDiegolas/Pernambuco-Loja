// ============ HERO (Home) ============

const Hero = ({ dark = true }) => {
  const text = dark ? "#fff" : "var(--ink-900)";
  const muted = dark ? "rgba(255,255,255,0.65)" : "var(--stone-600)";
  const chipBg = dark ? "rgba(255,255,255,0.06)" : "#fff";
  const chipBorder = dark ? "rgba(255,255,255,0.12)" : "var(--stone-200)";
  const hairline = dark ? "rgba(255,255,255,0.1)" : "var(--stone-200)";
  const waUrl = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

  return (
    <section id="top" className={dark ? "hero-dark" : "hero-light"}>
      <div className="container" style={{
        position: "relative", zIndex: 2,
        paddingTop: "clamp(40px,6vw,80px)",
        paddingBottom: "clamp(64px,7vw,96px)",
      }}>
        <div className="hero-grid">
          {/* LEFT */}
          <div>
            <Reveal>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "8px 14px",
                background: chipBg,
                border: `1px solid ${chipBorder}`,
                borderRadius: 999,
                fontSize: 12, fontWeight: 500,
                color: text,
                fontFamily: "var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: 999,
                  background: "var(--brand-500)",
                  boxShadow: "0 0 0 4px rgba(249,115,22,.2)",
                }}/>
                <Icon name="pin" size={12}/> Guarujá & região · entrega rápida
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
                color: text,
                marginTop: 24,
              }}>
                Do básico <br/>
                <span style={{ color: "var(--brand-500)" }}>ao acabamento.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p style={{
                fontSize: "clamp(16px, 1.6vw, 19px)",
                color: muted, marginTop: 24, maxWidth: "48ch", lineHeight: 1.55,
              }}>
                Materiais de construção com entrega rápida no Guarujá.
                Tudo que sua obra precisa, com suporte pra montar o pedido certo.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
                <a href={waUrl} target="_blank" rel="noopener"
                   className="btn btn-primary btn-lg">
                  <Icon name="whatsapp" size={18}/> Solicitar orçamento
                </a>
                <a href="#produtos" className="btn btn-lg"
                   style={{
                     background: "transparent", color: text,
                     border: `1px solid ${dark ? "rgba(255,255,255,0.25)" : "var(--ink-900)"}`,
                   }}>
                  Ver categorias <Icon name="arrow-right" size={18}/>
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: 0, marginTop: 56,
                borderTop: `1px solid ${hairline}`,
                paddingTop: 28,
              }}>
                {[
                  { n: "2", u: "lojas", d: "no Guarujá" },
                  { n: "24h", u: "entrega", d: "na região" },
                  { n: "2025", u: "", d: "fundação" },
                ].map((s, i) => (
                  <div key={i} style={{
                    paddingRight: 16,
                    borderRight: i < 2 ? `1px solid ${hairline}` : "none",
                    paddingLeft: i > 0 ? 24 : 0,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: "clamp(26px,3.2vw,38px)", color: text,
                      letterSpacing: "-0.03em",
                    }}>
                      {s.n}
                      {s.u && <>
                        <span style={{ color: "var(--brand-500)", marginLeft: 4 }}>·</span>
                        <span style={{ fontSize: ".5em", marginLeft: 6, color: muted, fontWeight: 500 }}>{s.u}</span>
                      </>}
                    </div>
                    <div style={{ fontSize: 13, color: muted, marginTop: 4 }}>{s.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — colagem com obras atendidas */}
          <div className="hero-collage">
            <Reveal delay={120}>
              <div className="hero-img-a">
                <PH label="obra atendida · cliente guarujá" h="100%" dark={dark}
                    style={{ height: "100%", borderRadius: 20 }} />
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="hero-img-b">
                <PH label="obra atendida · reforma" h="100%" dark={dark}
                    style={{ height: "100%", borderRadius: 20 }} />
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="hero-card">
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  letterSpacing: ".16em", textTransform: "uppercase",
                  color: "var(--stone-500)",
                }}>Clientes atendidos</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 20, letterSpacing: "-0.02em", marginTop: 6,
                  color: "var(--ink-900)",
                }}>Obras no Guarujá</div>
                <div style={{ fontSize: 13, color: "var(--stone-600)", marginTop: 4 }}>
                  Residências, reformas, condomínios
                </div>
              </div>
            </Reveal>

            <div className="hero-accent">
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                letterSpacing: ".2em", textTransform: "uppercase", opacity: .9,
              }}>Guarujá · {STORE.since}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(34px,4.8vw,52px)", lineHeight: .9,
                letterSpacing: "-0.04em", marginTop: 6,
              }}>
                Obra<br/>em&nbsp;dia.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }
        .hero-collage {
          position: relative;
          aspect-ratio: 1 / 1.05;
          min-height: 460px;
        }
        .hero-img-a {
          position: absolute;
          inset: 0 30% 20% 0;
          animation: floatSlow 7s ease-in-out infinite;
        }
        .hero-img-b {
          position: absolute;
          inset: 28% 0 0 38%;
          animation: floatSlower 9s ease-in-out infinite;
        }
        .hero-card {
          position: absolute;
          left: -6%; bottom: 8%;
          width: 64%;
          background: #fff;
          border: 1px solid var(--stone-200);
          border-radius: 16px;
          padding: 18px 18px 16px;
          box-shadow: var(--shadow-lg);
          animation: floatSlow 8s ease-in-out infinite reverse;
        }
        .hero-accent {
          position: absolute;
          right: 4%; top: -4%;
          background: var(--brand-500);
          color: #fff;
          padding: 18px 22px 22px;
          border-radius: 14px;
          transform: rotate(3deg);
          box-shadow: 0 18px 40px -12px rgba(249,115,22,0.5);
        }
        @keyframes floatSlow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes floatSlower { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @media (prefers-reduced-motion: reduce) {
          .hero-img-a, .hero-img-b, .hero-card { animation: none; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-collage { min-height: 380px; aspect-ratio: 1 / 0.85; margin-top: 8px; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { Hero });
