import { useEffect } from "react";
import { Window } from "@components/Window";
import { applyOfflineProgress } from "@engine/offlineProgression";
import { loadLocal } from "@engine/save";
import { useAutosave } from "@hooks/autosave";
/* atoms */
import { useAtom, useSetAtom } from "jotai";
import { hydratedAtom } from "@atoms/game";
import { tickAtom, resetTick } from "@atoms/game/tick";
import { loadSaveAtom } from "@atoms/save/loadSave";

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

  return <Window />;
}

export default App;
