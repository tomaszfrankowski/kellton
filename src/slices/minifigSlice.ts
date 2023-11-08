import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IMinifig } from '../interfaces/Minifig.interface';

export const fetchMinifigurines = createAsyncThunk('api/fetchMinifigurines', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/minifigs/?key=${process.env.REACT_APP_API_KEY}&in_theme_id=710`);
  return response.json();
})

export const fetchMinifigParts = createAsyncThunk('api/fetchMinifigParts', async (index: number, state: any) => {
  const selectedElement = state.getState().minifigReducer.data[index].set_num
  const url = `${process.env.REACT_APP_API_URL}/minifigs/${selectedElement}/parts/?key=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url);
  return response.json();

});

interface minifigState {
  data: Array<IMinifig> | null,
  loading: string,
  error: string | undefined,
  selectedIndex: number | null
}

const initialState: minifigState = {
  data: null,
  loading: 'idle',
  error: undefined,
  selectedIndex: null,
}

const minifigSlice = createSlice({
  name: 'minifigSlice',
  initialState,
  reducers: {
    setSelectedIndex: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMinifigurines.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchMinifigurines.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload.results.sort(() => { return 0.5 - Math.random() }).slice(0, 3);
      })
      .addCase(fetchMinifigurines.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(fetchMinifigParts.fulfilled, (state, action) => {
        const indexToUpdate = action.meta.arg as unknown as number
        if (state.data !== null) {
          state.data[indexToUpdate].parts = action.payload
        }
      })
  },
});

export const { setSelectedIndex } = minifigSlice.actions;
export default minifigSlice.reducer;
