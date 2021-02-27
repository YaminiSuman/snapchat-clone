import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    cameraImage: null
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetCameraImage: (state, action) => {
      state.cameraImage = null;
    }
  }
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

// pulling info from store
export const selectCameraImage = state => state.camera.cameraImage;

export default cameraSlice.reducer;
