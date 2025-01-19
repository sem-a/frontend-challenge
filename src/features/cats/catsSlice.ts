import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { catsApi } from "../../app/services/cats";
import { Cat } from "../../types";

interface InitialState {
  cats: Cat[] | null;
}

const initialState: InitialState = {
  cats: null,
};

const slice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers(builder) {
    builder.addMatcher(
      catsApi.endpoints.getCats.matchFulfilled,
      (state, action) => {
        state.cats = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectCats = (state: RootState) => state.cats;
