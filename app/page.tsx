import List from '@/components/List';
import Map from "@/components/Map";
import { MAP_MODE } from "@/constants";

async function getStations() {
  const response = await fetch("http://api.citybik.es/v2/networks/velo-antwerpen", { method: 'GET' });

  if (!response.ok) {
    return { status: response.status, message: response.statusText };
  }

  return response.json();
}

export default async function NetworkOverview() {
  const { network } = await getStations();

  return (
    <div style={{ flex: 1, width: '100%', height: '100%' }}>
      <h2>Velo Stations</h2>
      <Map mode={MAP_MODE.DETAILED} markers={network.stations} zoom={14} mapContainerOptions={{ zoomControl: true }} />
      <List data={network.stations} />
    </div>
  )
}