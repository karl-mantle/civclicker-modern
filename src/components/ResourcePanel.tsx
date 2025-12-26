import { useAtom } from "jotai";
import { foodAtom } from "../atoms/resources";

export function ResourcePanel() {
  const [food, setFood] = useAtom(foodAtom);

  return (
    <div>
      <h2>Resources</h2>
      <p>Food: {food.toFixed(1)}</p>
      <button onClick={() => setFood((f) => f + 1)}>Gather Food</button>
    </div>
  );
}
