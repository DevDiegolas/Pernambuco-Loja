// ============ SECTIONS ============

const waLinkGeneric = `https://wa.me/${STORE.whatsapp}`;
const waLink = (txt) => `${waLinkGeneric}?text=${encodeURIComponent(txt)}`;

// ---------- SOBRE ----------
const About = () => (
  <section className="sec" id="sobre" style={{ background: "#fff" }}>
    <div className="container">
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1.15fr",
        gap: "clamp(32px, 5vw, 72px)", alignItems: "center",
      }} className="about-grid">
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <PH label="loja 1 · praia de pernambuco" h={380} style={{ height: 380, borderRadius: 16 }} />
            <PH label="loja 2 · shopping acapulco" h={380} style={{ height: 380, borderRadius: 16 }} />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div>
            <div className="eyebrow">Sobre a loja</div>
            <h2 className="sec-title" style={{ marginTop: 16 }}>
              Desde 2025, lado a lado <br/>com cada obra.
            </h2>
            <p style={{ fontSize: 16, color: "var(--stone-700)", marginTop: 20, maxWidth: "56ch", lineHeight: 1.65 }}>
              Nossa loja nasceu com um propósito claro: oferecer soluções completas, com agilidade,
              preço justo e atendimento de qualidade para cada cliente. Entendemos a necessidade de
              cada projeto e oferecemos os materiais adequados com praticidade e eficiência, de um
              estoque que vai do básico ao acabamento.
            </p>
            <p style={{ fontSize: 15, color: "var(--stone-600)", marginTop: 14, maxWidth: "56ch", lineHeight: 1.65 }}>
              Trabalhamos com fornecedores confiáveis pra garantir qualidade e durabilidade. Mais do
              que vender materiais, o objetivo é facilitar a obra do cliente — entrega rápida,
              pronta entrega, suporte na montagem do pedido e locação de equipamentos.
            </p>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
              gap: 0, marginTop: 32,
              borderTop: "1px solid var(--stone-200)",
              borderLeft: "1px solid var(--stone-200)",
            }}>
              {[
                ["Entrega rápida", "No prazo certo pra obra não parar."],
                ["Pronta entrega", "Diversos produtos prontos pra sair."],
                ["Montagem do pedido", "A gente ajuda a montar a lista da obra."],
                ["Locação", "Andaimes e equipamentos quando você precisa."],
              ].map(([t, d], i) => (
                <div key={i} style={{
                  padding: "20px 22px",
                  borderRight: "1px solid var(--stone-200)",
                  borderBottom: "1px solid var(--stone-200)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
                    color: "var(--brand-600)",
                  }}>{t}</div>
                  <div style={{ fontSize: 13.5, color: "var(--stone-600)", marginTop: 6, lineHeight: 1.55 }}>{d}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Atendemos todo tipo de obra</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {AUDIENCES.map(a => (
                  <span key={a} className="chip" style={{ cursor: "default" }}>{a}</span>
                ))}
              </div>
              <a href={waLink("Olá! Quero montar o pedido para minha obra.")}
                 target="_blank" rel="noopener"
                 className="btn btn-primary btn-lg" style={{ marginTop: 26 }}>
                <Icon name="whatsapp" size={18}/> Montar pedido para minha obra
              </a>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  </section>
);

// ---------- PRODUTOS (categorias — sem catálogo com preço) ----------
const Products = () => (
  <section className="sec" id="produtos" style={{ background: "var(--stone-50)" }}>
    <div className="container">
      <div className="sec-head">
        <Reveal>
          <div>
            <div className="eyebrow">Produtos</div>
            <h2 className="sec-title" style={{ marginTop: 12 }}>
              Linha completa pra<br/>todas as etapas da obra.
            </h2>
            <p className="sec-sub" style={{ marginTop: 16 }}>
              Organizado por categoria — consulte preço e disponibilidade direto no WhatsApp.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="grid cols-3">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.id} delay={i * 50}>
            <a href={waLink(`Olá! Queria saber sobre ${c.t.toLowerCase()}.`)}
               target="_blank" rel="noopener"
               className="card"
               style={{
                 display: "flex", flexDirection: "column",
                 overflow: "hidden", height: "100%",
               }}>
              <div style={{
                padding: "36px 28px 28px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--stone-50)",
                borderBottom: "1px solid var(--stone-200)",
                minHeight: 200,
                position: "relative",
                overflow: "hidden",
              }}>
                {/* grid decorativo suave */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage:
                    "linear-gradient(to right, rgba(11,18,32,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,.05) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)",
                }}/>
                <div style={{
                  position: "relative",
                  width: 110, height: 110, borderRadius: 24,
                  background: "var(--ink-900)", color: "var(--brand-400)",
                  display: "grid", placeItems: "center",
                  boxShadow: "0 18px 40px -16px rgba(11,18,32,.4)",
                }}>
                  <Icon name={c.i} size={56} stroke={1.5}/>
                </div>
              </div>
              <div style={{ padding: "22px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 22, letterSpacing: "-0.02em",
                }}>{c.t}</div>
                <p style={{ fontSize: 14, color: "var(--stone-600)", marginTop: 6, flex: 1 }}>{c.d}</p>
                <div style={{
                  marginTop: 18, paddingTop: 14,
                  borderTop: "1px solid var(--stone-200)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{
                    fontSize: 13, fontWeight: 600, color: "var(--brand-600)",
                    display: "inline-flex", alignItems: "center", gap: 6,
                  }}>
                    <Icon name="whatsapp" size={14}/> Consultar preço no WhatsApp
                  </span>
                  <Icon name="arrow-right" size={16}/>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ---------- SERVIÇOS ----------
const Services = () => (
  <section className="sec" id="servicos" style={{ background: "#fff" }}>
    <div className="container">
      <div className="sec-head">
        <Reveal>
          <div>
            <div className="eyebrow">Serviços</div>
            <h2 className="sec-title" style={{ marginTop: 12 }}>
              Mais que fornecer material —<br/>parceira da sua obra.
            </h2>
            <p className="sec-sub" style={{ marginTop: 16 }}>
              Soluções completas pra facilitar todo o processo, do planejamento à execução.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="grid cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <div style={{
              padding: "28px 28px 26px",
              borderRadius: 16,
              border: "1px solid var(--stone-200)",
              background: "var(--stone-50)",
              height: "100%",
              display: "flex", gap: 20, alignItems: "flex-start",
              transition: "border-color .2s, background .2s, transform .2s",
            }}
            onMouseOver={e=>{ e.currentTarget.style.borderColor = "var(--ink-900)"; e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseOut={e=>{ e.currentTarget.style.borderColor = "var(--stone-200)"; e.currentTarget.style.background = "var(--stone-50)"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: "var(--brand-500)", color: "#fff",
                display: "grid", placeItems: "center", flexShrink: 0,
              }}>
                <Icon name={s.i} size={24}/>
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 20, letterSpacing: "-0.02em",
                }}>{s.t}</div>
                <p style={{ fontSize: 14.5, color: "var(--stone-600)", marginTop: 8, lineHeight: 1.6 }}>{s.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <p style={{
          marginTop: 44, maxWidth: "62ch",
          fontFamily: "var(--font-display)", fontSize: 18, lineHeight: 1.55,
          color: "var(--stone-700)",
        }}>
          Aqui você encontra não só os materiais, mas também o suporte necessário pra fazer sua
          obra acontecer com mais segurança, agilidade e confiança.
        </p>
      </Reveal>
    </div>
  </section>
);

// ---------- LOCALIZAÇÃO (2 lojas) ----------
const Locations = () => (
  <section className="sec" id="localizacao" style={{ background: "var(--stone-100)" }}>
    <div className="container">
      <div className="sec-head">
        <Reveal>
          <div>
            <div className="eyebrow">Localização</div>
            <h2 className="sec-title" style={{ marginTop: 12 }}>Nossas unidades no Guarujá.</h2>
          </div>
        </Reveal>
      </div>

      <div className="grid cols-2" style={{ gap: 20 }}>
        {STORE.units.map((u, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{
              background: "#fff",
              border: "1px solid var(--stone-200)",
              borderRadius: 18,
              overflow: "hidden",
              display: "flex", flexDirection: "column",
              height: "100%",
            }}>
              <div style={{ position: "relative" }}>
                <PH label={`${u.name.toLowerCase()} · fachada`} h={220}
                    style={{ height: 220, borderRadius: 0 }}/>
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  padding: "6px 12px", borderRadius: 999,
                  background: i === 0 ? "var(--brand-500)" : "var(--ink-900)",
                  color: "#fff",
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 600,
                }}>{u.name}</div>
              </div>
              <div style={{ padding: "24px 26px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: 13.5, color: "var(--stone-600)", lineHeight: 1.55 }}>{u.note}</p>
                <div style={{ marginTop: 16, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 999,
                    background: "var(--stone-100)", color: "var(--brand-600)",
                    display: "grid", placeItems: "center", flexShrink: 0,
                  }}><Icon name="pin" size={18}/></div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16,
                      letterSpacing: "-0.01em",
                    }}>{u.address}</div>
                    <div style={{ fontSize: 13.5, color: "var(--stone-600)", marginTop: 2 }}>{u.area}</div>
                  </div>
                </div>
                <div style={{ marginTop: "auto", paddingTop: 20, display: "flex", gap: 10 }}>
                  <a href={`https://www.google.com/maps/search/${encodeURIComponent(u.mapQ)}`}
                     target="_blank" rel="noopener"
                     className="btn btn-outline btn-sm" style={{ flex: 1 }}>
                    <Icon name="pin" size={14}/> Ver no mapa
                  </a>
                  <a href={waLink(`Olá! Estou interessado na ${u.name}.`)}
                     target="_blank" rel="noopener"
                     className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                    <Icon name="whatsapp" size={14}/> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Horário */}
      <Reveal delay={160}>
        <div style={{
          marginTop: 24,
          background: "#fff",
          border: "1px solid var(--stone-200)",
          borderRadius: 18,
          padding: "28px 32px",
          display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flex: "0 0 auto" }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: "var(--ink-900)", color: "var(--brand-400)",
              display: "grid", placeItems: "center",
            }}><Icon name="clock" size={22}/></div>
            <div>
              <div className="eyebrow">Horário</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                letterSpacing: "-0.01em", marginTop: 4,
              }}>de funcionamento</div>
            </div>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14, flex: 1, minWidth: 280,
          }}>
            {STORE.hours.map((h, i) => (
              <div key={i} style={{
                padding: "14px 16px", borderLeft: "3px solid var(--brand-500)",
                background: "var(--stone-50)", borderRadius: 6,
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: ".14em", textTransform: "uppercase", color: "var(--stone-500)",
                }}>{h.d}</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
                  marginTop: 4, letterSpacing: "-0.01em",
                }}>{h.h}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// ---------- CONTATO ----------
const Contact = () => (
  <section className="sec" id="contato" style={{ background: "var(--ink-900)", color: "#fff" }}>
    <div className="container">
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1.1fr",
        gap: "clamp(32px, 5vw, 64px)", alignItems: "center",
      }} className="contact-grid">
        <Reveal>
          <div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,.55)" }}>Contato</div>
            <h2 className="sec-title" style={{ marginTop: 16, color: "#fff" }}>
              Fala com a gente<br/>e resolve sua obra mais rápido.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.7)", marginTop: 22, maxWidth: "46ch", lineHeight: 1.6 }}>
              Manda a lista da obra pelo WhatsApp, liga na loja ou acompanha a gente no Instagram.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                i: "whatsapp", t: "WhatsApp",
                v: STORE.whatsappLabel,
                sub: "Orçamento rápido pela conversa",
                href: waLink("Olá! Gostaria de solicitar um orçamento."),
                primary: true,
              },
              {
                i: "phone", t: "Telefone da loja",
                v: STORE.phone,
                sub: "Ligue direto na Loja 1",
                href: `tel:${STORE.phoneRaw}`,
              },
              {
                i: "instagram", t: "Instagram",
                v: STORE.instagram,
                sub: "Obras, novidades e bastidores",
                href: STORE.instagramUrl,
              },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener"
                 style={{
                   padding: "22px 26px",
                   border: `1px solid ${c.primary ? "var(--brand-500)" : "rgba(255,255,255,.15)"}`,
                   borderRadius: 16,
                   display: "flex", gap: 18, alignItems: "center",
                   background: c.primary ? "var(--brand-500)" : "rgba(255,255,255,.02)",
                   color: "#fff",
                   transition: "background .2s, border-color .2s, transform .2s",
                 }}
                 onMouseOver={e=>{
                   e.currentTarget.style.transform = "translateY(-2px)";
                   if (!c.primary) e.currentTarget.style.borderColor = "rgba(255,255,255,.35)";
                 }}
                 onMouseOut={e=>{
                   e.currentTarget.style.transform = "none";
                   if (!c.primary) e.currentTarget.style.borderColor = "rgba(255,255,255,.15)";
                 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: c.primary ? "rgba(255,255,255,.18)" : "var(--ink-900)",
                  color: c.primary ? "#fff" : "var(--brand-400)",
                  display: "grid", placeItems: "center", flexShrink: 0,
                  border: c.primary ? "none" : "1px solid rgba(255,255,255,.08)",
                }}>
                  <Icon name={c.i} size={22}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: ".14em", textTransform: "uppercase",
                    opacity: c.primary ? .85 : .55,
                  }}>{c.t}</div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 20, marginTop: 4, letterSpacing: "-0.01em",
                  }}>{c.v}</div>
                  <div style={{ fontSize: 13, opacity: c.primary ? .85 : .6, marginTop: 4 }}>{c.sub}</div>
                </div>
                <Icon name="arrow-up-right" size={20}/>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  </section>
);

// ---------- FOOTER ----------
const Footer = () => (
  <footer style={{ background: "#000", color: "#fff", padding: "56px 0 28px" }}>
    <div className="container">
      <div style={{
        display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
        gap: 40,
      }} className="footer-grid">
        <div>
          <Logo dark />
          <p style={{ color: "rgba(255,255,255,.55)", marginTop: 16, fontSize: 13.5, maxWidth: "34ch", lineHeight: 1.6 }}>
            Materiais de construção com entrega rápida no Guarujá — do básico ao acabamento,
            com suporte pra obra não parar.
          </p>
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--brand-400)", marginBottom: 16 }}>Navegar</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[["Sobre","#sobre"],["Produtos","#produtos"],["Serviços","#servicos"],["Localização","#localizacao"],["Contato","#contato"]].map(([t,h],j)=>(
              <a key={j} href={h} style={{ fontSize: 13.5, color: "rgba(255,255,255,.75)" }}>{t}</a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--brand-400)", marginBottom: 16 }}>Unidades</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {STORE.units.map((u, i) => (
              <div key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.7)", lineHeight: 1.5 }}>
                <div style={{ color: "#fff", fontWeight: 600, marginBottom: 2 }}>{u.name}</div>
                {u.address}<br/>{u.area}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--brand-400)", marginBottom: 16 }}>Contato</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13.5 }}>
            <a href={waLinkGeneric} target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,.85)" }}>WhatsApp {STORE.whatsappLabel}</a>
            <a href={`tel:${STORE.phoneRaw}`} style={{ color: "rgba(255,255,255,.85)" }}>Loja {STORE.phone}</a>
            <a href={STORE.instagramUrl} target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,.85)" }}>Instagram {STORE.instagram}</a>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 48, paddingTop: 22,
        borderTop: "1px solid rgba(255,255,255,.08)",
        display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap",
        fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: ".14em", textTransform: "uppercase",
        color: "rgba(255,255,255,.45)",
      }}>
        <div>© 2026 Pernambuco Materiais</div>
        <div>Guarujá · SP · Desde {STORE.since}</div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  </footer>
);

Object.assign(window, { About, Products, Services, Locations, Contact, Footer });
