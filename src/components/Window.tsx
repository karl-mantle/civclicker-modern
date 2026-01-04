import { ResourcePanel } from "@components/views/Resources";
import { PopulationPanel } from "@components/views/Population";
import { BuildingPanel } from "@components/views/Building";

export function Window() {
  return (
    <div>
      <h1>CivClicker</h1>
      <ResourcePanel />
      <PopulationPanel />
      <BuildingPanel />
    </div>
  );
}
