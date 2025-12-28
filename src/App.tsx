import { useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";
import { hydratedAtom } from "./atoms/hydration";
import { loadSaveAtom } from "./atoms/loadSave";
import { loadLocal } from "./lib/localSave";
import { useAutosave } from "./hooks/autosave";
import { tickAtom } from "./atoms/tick";
import { Game } from "./components/Game";

function App() {
  const loadSave = useSetAtom(loadSaveAtom);
  const tick = useSetAtom(tickAtom);
  const [hydrated, setHydrated] = useAtom(hydratedAtom);

  useEffect(() => {
    if (hydrated) return;

    const save = loadLocal();
    if (save) {
      loadSave(save);
    }

    setHydrated(true);
  }, [hydrated, loadSave, setHydrated]);

  useAutosave();

  useEffect(() => {
    if (!hydrated) return;

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [hydrated, tick]);

  return <Game />;
}

export default App;
