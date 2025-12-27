import { useAtom, useSetAtom } from "jotai";
import { farmersAtom, idlePopulationAtom } from "../atoms/population";
import {
  assignFarmerAtom,
  unassignFarmerAtom,
} from "../atoms/populationActions";
import { foodPerSecondAtom } from "../atoms/rates";

export function PopulationPanel() {
  const [farmers] = useAtom(farmersAtom);
  const [idle] = useAtom(idlePopulationAtom);
  const [foodRate] = useAtom(foodPerSecondAtom);
  const assign = useSetAtom(assignFarmerAtom);
  const unassign = useSetAtom(unassignFarmerAtom);

  return (
    <div>
      <h2>Population</h2>
      <p>Idle: {idle}</p>
      <p>Farmers: {farmers}</p>
      <p>Food/sec: {foodRate.toFixed(2)}</p>

      <button onClick={assign}>+ Farmer</button>
      <button onClick={unassign}>- Farmer</button>
    </div>
  );
}
