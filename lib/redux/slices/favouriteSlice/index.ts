
import { createSlice } from '@reduxjs/toolkit'

import { StationT } from '@/types/network'

export interface FavouritesSlice {
  stations: Array<StationT>
}

const initialState: FavouritesSlice = {
  stations: []
}

export const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (state, action) => {
      state.stations.push(action.payload)
    },
    remove: (state, action) => {
      const targetIndex = state.stations.indexOf(action.payload);
      if(targetIndex >= 0) {
        state.stations.splice(targetIndex, 1)
      }
    }
  }
})