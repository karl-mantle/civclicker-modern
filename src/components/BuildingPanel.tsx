import { useAtom, useSetAtom } from "jotai";
import { hutsAtom, farmsAtom, lumberCampsAtom } from "../atoms/buildings";
import { populationCapAtom } from "../atoms/populationCaps";
import { buildBuildingAtom } from "../atoms/buildingsActions";
import { BUILDINGS } from "../engine/buildings";

export function BuildingPanel() {
  const [cap] = useAtom(populationCapAtom);
  const [huts] = useAtom(hutsAtom);
  const [farms] = useAtom(farmsAtom);
  const [lumberCamps] = useAtom(lumberCampsAtom);

  const buildBuilding = useSetAtom(buildBuildingAtom);

  const hutCostString = Object.entries(BUILDINGS.hut.cost)
    .map(([resource, amount]) => `${amount} ${resource}`)
    .join(", ");
  const farmCostString = Object.entries(BUILDINGS.farm.cost)
    .map(([resource, amount]) => `${amount} ${resource}`)
    .join(", ");
  const lumberCampCostString = Object.entries(BUILDINGS.lumberCamp.cost)
    .map(([resource, amount]) => `${amount} ${resource}`)
    .join(", ");

  return (
    <div>
      <h2>Buildings</h2>
      <p>Population Cap: {cap}</p>
      <p>Huts: {huts}</p>
      <button onClick={() => buildBuilding("hut")}>
        Build Hut ({hutCostString})
      </button>

      <p>Farms: {farms}</p>
      <button onClick={() => buildBuilding("farm")}>
        Build Farm ({farmCostString})
      </button>

      <p>Lumber Camps: {lumberCamps}</p>
      <button onClick={() => buildBuilding("lumberCamp")}>
        Build Lumber Camp ({lumberCampCostString})
      </button>
    </div>
  );
}
