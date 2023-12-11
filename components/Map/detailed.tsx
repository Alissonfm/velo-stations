'use client'
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import { LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

import { DEFAULT_POSITION } from "@/constants"
import { DetailedMapProps } from "."

export default function Map(props: DetailedMapProps) {
  const { position, zoom, width, height, aspectRatio, mapContainerOptions, markers } = props;

  if(!window) return null;

  const centerPoint = position ?? DEFAULT_POSITION;

  return (
  <MapContainer
    style={{
      aspectRatio: aspectRatio ?? (600/300),
      minWidth: width ?? '100%',
      minHeight: height ?? '250px'
    }}
    center={centerPoint as LatLngExpression}
    zoom={zoom ?? 12}
    scrollWheelZoom={false}
    zoomControl={false}
    attributionControl={false}
    {...mapContainerOptions}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {(!!markers && markers.length >= 1) && markers.map(markItem => (
      <Marker key={markItem.id} position={[markItem.latitude, markItem.longitude]}>
        <Popup>
          <div>
            <strong>{markItem.name}</strong>
            <p>Free bikes: {markItem.free_bikes}</p>
            <p>Empty Slots: {markItem.empty_slots}</p>
          </div>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
  )
}