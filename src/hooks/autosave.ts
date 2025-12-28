import { useAtomValue } from "jotai";
import { useEffect, useRef } from "react";
import { hydratedAtom } from "../atoms/hydration";
import { saveAtom } from "../atoms/save";
import { saveLocal } from "../lib/localSave";

export function useAutosave(intervalMs = 60_000) {
  const hydrated = useAtomValue(hydratedAtom);
  const save = useAtomValue(saveAtom);
  const saveRef = useRef(save);

  useEffect(() => {
    saveRef.current = save;
  }, [save]);

  useEffect(() => {
    if (!hydrated) return;

    const id = setInterval(() => {
      saveLocal(saveRef.current);
      console.log(`Autosaved! ${new Date().toLocaleTimeString()}`);
    }, intervalMs);

    return () => clearInterval(id);
  }, [hydrated, intervalMs]);
}
