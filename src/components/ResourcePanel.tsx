import { useAtom } from "jotai";
import { foodAtom, woodAtom } from "../atoms/resources";

export function ResourcePanel() {
  const [food, setFood] = useAtom(foodAtom);
  const [wood, setWood] = useAtom(woodAtom);

  return (
    <div>
      <h2>Resources</h2>
      <p>Food: {food.toFixed(1)}</p>
      <p>Wood: {wood.toFixed(1)}</p>
      <button onClick={() => setFood((f) => f + 1)}>Gather Food</button>
      <button onClick={() => setWood((f) => f + 1)}>Gather Wood</button>
    </div>
  );
}
