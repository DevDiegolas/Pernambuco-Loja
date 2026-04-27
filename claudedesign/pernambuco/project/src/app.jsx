// ============ App root ============

const { TweaksPanel, useTweaks, TweakSection, TweakRadio } = window;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroMode": "dark"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);
  const dark = tweaks.heroMode !== "light";

  return (
    <>
      <Navbar />
      <Hero dark={dark} />
      <About />
      <Products />
      <Services />
      <Locations />
      <Contact />
      <Footer />
      <WAFab />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero">
          <TweakRadio
            label="Modo do Hero"
            value={tweaks.heroMode}
            options={[
              { value: "dark", label: "Dark (padrão)" },
              { value: "light", label: "Light" },
            ]}
            onChange={v => setTweak("heroMode", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
