'use client';
import { MapContainer, Marker, TileLayer, Popup, } from "react-leaflet"
import { LatLngExpression } from "leaflet";
import { DEFAULT_POSITION } from "@/constants";
import { CompactMapProps } from ".";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function Map(props: CompactMapProps) {
  const { position, zoom } = props;

  if(!window) return null;

  return (
  <MapContainer
    style={{
      aspectRatio: 2/1,
      minWidth: '4rem',
      minHeight: '4rem'
    }}
    center={position ?? DEFAULT_POSITION as LatLngExpression}
    zoom={zoom ?? 17}
    scrollWheelZoom={false}
    zoomControl={false}
    attributionControl={false}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position as LatLngExpression} />
  </MapContainer>
  )
}