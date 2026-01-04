import { useAtom, useSetAtom } from "jotai";
import {
  farmersAtom,
  idlePopulationAtom,
  woodcuttersAtom,
} from "@atoms/population";
import {
  assignFarmerAtom,
  unassignFarmerAtom,
  assignWoodcutterAtom,
  unassignWoodcutterAtom,
} from "@atoms/population/actions";
import { foodPerSecondAtom, woodPerSecondAtom } from "@atoms/resources/rates";

export function PopulationPanel() {
  const [idle] = useAtom(idlePopulationAtom);
  const [farmers] = useAtom(farmersAtom);
  const [woodcutters] = useAtom(woodcuttersAtom);
  const [foodRate] = useAtom(foodPerSecondAtom);
  const [woodRate] = useAtom(woodPerSecondAtom);
  const assignFarmer = useSetAtom(assignFarmerAtom);
  const unassignFarmer = useSetAtom(unassignFarmerAtom);
  const assignWoodcutter = useSetAtom(assignWoodcutterAtom);
  const unassignWoodcutter = useSetAtom(unassignWoodcutterAtom);

  return (
    <div>
      <h2>Population</h2>
      <p>Idle: {idle}</p>
      <p>Farmers: {farmers}</p>
      <p>Food/sec: {foodRate.toFixed(2)}</p>
      <button onClick={assignFarmer}>+ Farmer</button>
      <button onClick={unassignFarmer}>- Farmer</button>
      <p>Woodcutters: {woodcutters}</p>
      <p>Wood/sec: {woodRate.toFixed(2)}</p>
      ''
      <button onClick={assignWoodcutter}>+ Woodcutter</button>
      <button onClick={unassignWoodcutter}>- Woodcutter</button>
    </div>
  );
}
