import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import fileService from "./fileService";
import { Record } from "@/types/records";


export enum ActivePage {
  HOME = "home",
  SUBFOLDER = "subfolder",
}
export interface FilesState {
  folderFiles: Record[];
  records: Record[];
  recordsLoading: boolean;
  folderFilesLoading: boolean;
  previewedImage: Record | null;
  sortBy: {
    home: {
      key: string;
      order: string;
    };
    subfolder: {
      key: string;
      order: string;
    };
  };
}

const initialState: FilesState = {
  folderFiles: [],
  records: [],
  recordsLoading: false,
  folderFilesLoading: false,
  previewedImage: null,
  sortBy: {
    home: {
      key: "",
      order: "asc",
    },
    subfolder: {
      key: "",
      order: "asc",
    },
  },
};

export const getFolderFiles = createAsyncThunk(
  "file/getFolderFiles",
  async (payload: string, thunkAPI) => {
    try {
      return await fileService.fetchFolderFiles(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getRecords = createAsyncThunk(
  "file/getRecords",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      return await fileService.fetchRecords();
      //simulate async call of 4 seconds
      // const dummyResponse = await new Promise<Record[]>((resolve) => {
      //   setTimeout(() => {
      //     resolve(dummyRecords);
      //   }, 4000);
      // });
      // return dummyResponse;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setPreviewedImage: (state, action: PayloadAction<Record | null>) => {
      state.previewedImage = action.payload;
    },
    updateSortBy: (
      state,
      action: PayloadAction<{
        key: string;
        order: string;
        activePage: ActivePage;
      }>
    ) => {
      const { key, order, activePage } = action.payload;
      if (activePage === ActivePage.HOME) {
        state.sortBy.home.key = key;
        state.sortBy.home.order = order;
      } else if (activePage === ActivePage.SUBFOLDER) {
        state.sortBy.subfolder.key = key;
        state.sortBy.subfolder.order = order;
      }
    },
    setRecords: (state, action: PayloadAction<Record[]>) => {
      state.records = action.payload;
    },
    setFolderFiles: (state, action: PayloadAction<Record[]>) => {
      state.folderFiles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecords.pending, (state) => {
        state.recordsLoading = true;
      })
      .addCase(getRecords.fulfilled, (state: FilesState, action) => {
        // console.log(action.payload.data);
        state.recordsLoading = false;
        state.records = action.payload;
      })
      .addCase(getRecords.rejected, (state: FilesState, action) => {
        state.recordsLoading = false;
      })
      .addCase(getFolderFiles.pending, (state) => {
        state.folderFilesLoading = true;
      })
      .addCase(getFolderFiles.fulfilled, (state: FilesState, action) => {
        state.folderFilesLoading = false;
        state.folderFiles = action.payload;
      })
      .addCase(getFolderFiles.rejected, (state: FilesState, action) => {
        state.recordsLoading = false;
      });
  },
});

export const { setPreviewedImage, updateSortBy, setRecords, setFolderFiles } =
  fileSlice.actions;

export default fileSlice.reducer;
