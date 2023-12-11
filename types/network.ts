import { LatLng, LatLngExpression } from 'leaflet';

export type LocationT = {
  city: string,
  country: string,
  latitude: number,
  // latitude: LatLng,
  longitude: number
  // longitude: LatLng
}

export type StationT = {
  empty_slots: number,
  extra: {
    address: string,
    status: string
    uid: number,
  },
  free_bikes: number,
  id: string,
  latitude: number,
  // latitude: LatLng,
  longitude: number,
  // longitude: LatLng,
  name: string,
  timestamp: string
}

export type NetworkT = {
  network: {
    company: Array<"ClearChannel">,
    href: string,
    id: string,
    location: LocationT,
    name: string,
    stations: Array<StationT>,
  }
}
