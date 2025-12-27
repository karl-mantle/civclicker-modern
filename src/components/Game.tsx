import { ResourcePanel } from "./ResourcePanel";
import { PopulationPanel } from "./PopulationPanel";
import { BuildingPanel } from "./BuildingPanel";

export function Game() {
  return (
    <div>
      <h1>CivClicker</h1>
      <ResourcePanel />
      <PopulationPanel />
      <BuildingPanel />
    </div>
  );
}
