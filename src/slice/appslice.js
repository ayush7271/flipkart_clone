import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  app: undefined,
  loading: undefined,
  sucess: undefined,
};
const AppSaga = createSlice({
  name: "appSaga",
  initialState: initialState,
  reducers: {
    AppSagaRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    AppSagaSucccess: (state,action) => {
      return {
        ...state,
        loading: false,
        sucess:true,
        app:action.payload
      };
    
    },
    AppSagaFailure: (state) => {
      return {
        ...state,
        loading: false,
        sucess: false,
      };
    },
  },
});
export const { AppSagaRequest, AppSagaSucccess, AppSagaFailure } =
  AppSaga.actions;
export default AppSaga.reducer;
