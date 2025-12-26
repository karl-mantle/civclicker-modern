import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { tickAtom } from "./atoms/gameLoop";
import { Game } from "./components/Game";

function App() {
  const tick = useSetAtom(tickAtom);

  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <Game />;
}

export default App;
