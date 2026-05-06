/* ============================================================
   Tweaks panel (React) — three controls: Mood, Density, Hero.
   Mounts into #tweaks-root. Persists via the host's edit-mode
   protocol (see EDITMODE-BEGIN block in index.html).
   ============================================================ */

const { useEffect } = React;

function PortfolioTweaks() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS__);

  useEffect(() => { window.__applyMood(t.mood); },                          [t.mood]);
  useEffect(() => { document.documentElement.dataset.density = t.density; }, [t.density]);
  useEffect(() => { document.documentElement.dataset.hero    = t.hero;    }, [t.hero]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Mood" subtitle="Palette + voice + texture">
        <TweakRadio
          value={t.mood}
          onChange={(v) => setTweak('mood', v)}
          options={[
            { value: 'graphite', label: 'Graphite' },
            { value: 'paper',    label: 'Paper' },
            { value: 'terminal', label: 'Terminal' },
            { value: 'midnight', label: 'Midnight' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Density" subtitle="Column, padding, hero scale">
        <TweakRadio
          value={t.density}
          onChange={(v) => setTweak('density', v)}
          options={[
            { value: 'spacious', label: 'Spacious' },
            { value: 'calm',     label: 'Calm' },
            { value: 'dense',    label: 'Dense' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Hero" subtitle="How the name lands">
        <TweakRadio
          value={t.hero}
          onChange={(v) => setTweak('hero', v)}
          options={[
            { value: 'soft',     label: 'Soft' },
            { value: 'outlined', label: 'Outlined' },
            { value: 'stacked',  label: 'Stacked' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<PortfolioTweaks />);
