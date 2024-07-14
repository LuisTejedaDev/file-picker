import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {appSlice, filePickerSlice} from './slices'

import thunk from 'redux-thunk';

export const store = configureStore({
   reducer: {
      navApp: appSlice,
      navFilePicker: filePickerSlice,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
  })
}, applyMiddleware(thunk))