import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    fileInfo: {},
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setFileInfo: (state, action) => {state.fileInfo = action.payload},
    }
})

export const {setFileInfo} = navSlice.actions

export const selectFileInfo = (state) => state.navFilePicker.fileInfo;

export default navSlice.reducer