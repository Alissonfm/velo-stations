'use client'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'

import { MAP_MODE } from '@/constants'
import { MapContainerProps } from "react-leaflet"
import { StationT } from '@/types/network'

export type CompactMapProps = {
  position?: [number, number],
  zoom?: number
}

export type DetailedMapProps = CompactMapProps & {
  width?: string | number,
  height?: string | number,
  aspectRatio?: number,
  mapContainerOptions?: MapContainerProps,
  markers?: Array<StationT> 
}

export type MapProps = DetailedMapProps & {
  mode: MAP_MODE,
}

export default function Map(props: MapProps) {
  const { mode, ...mapProps } = props;
  const Map = useMemo(() => dynamic(
    mode === MAP_MODE.DETAILED ? () => import('./detailed') : () => import('./compact'),
    { 
      loading: () => <p>Loading map...</p>,
      ssr: false
    }
  ), [mode])

  return <Map {...mapProps} />
}