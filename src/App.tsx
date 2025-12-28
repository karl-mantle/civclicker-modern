import { useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";
import { hydratedAtom } from "./atoms/hydration";
import { loadSaveAtom } from "./atoms/loadSave";
import { loadLocal } from "./lib/localSave";
import { useAutosave } from "./hooks/autosave";
import { tickAtom, resetTick } from "./atoms/tick";
import { Game } from "./components/Game";
import { applyOfflineProgress } from "./engine/offlineProgression";

function App() {
  const loadSave = useSetAtom(loadSaveAtom);
  const tick = useSetAtom(tickAtom);
  const [hydrated, setHydrated] = useAtom(hydratedAtom);

  useEffect(() => {
    if (hydrated) return;

    const save = loadLocal();
    if (save) {
      const progressedSave = applyOfflineProgress(save);
      loadSave(progressedSave);
      resetTick();

      const foodGained = progressedSave.resources.food - save.resources.food;
      const woodGained = progressedSave.resources.wood - save.resources.wood;
      const gainedPop = progressedSave.population.total - save.population.total;
      console.log(
        `Welcome back! Offline gains: +${gainedPop} population, +${foodGained.toFixed(
          1
        )} food, +${woodGained.toFixed(1)} wood`
      );
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
