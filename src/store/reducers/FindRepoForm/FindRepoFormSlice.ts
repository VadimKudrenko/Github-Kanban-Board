import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRepoIssue } from '../../../models/IRepoIssue'
import { IRepoData } from '../../../models/IRepoData'
import { fetchIssues, fetchRepoStargazers } from './ActionCreators';

interface RepoIssuesState {
  issues: IRepoIssue[];
  isLoading: boolean;
  error: string;
  repositoryData: IRepoData;
}

const initialState: RepoIssuesState = {
  issues: [],
  isLoading: false,
  error: '',
  repositoryData: {},
}

export const findRepoFormSlice = createSlice({
  name: 'findRepoForm',
  initialState,
  reducers: {
 
  },
  extraReducers: {
    [fetchIssues.fulfilled.type]: (state, action: PayloadAction<IRepoIssue[]>) => {
      state.isLoading = false;
      state.error = ''
      state.issues = action.payload;
    },
    [fetchIssues.pending.type]: (state) => {
        state.isLoading = true;
    },
    [fetchIssues.rejected.type]: (state,  action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
    },


    [fetchRepoStargazers.fulfilled.type]: (state, action: PayloadAction<IRepoData>) => {
      state.isLoading = false;
      state.error = ''
      state.repositoryData = action.payload;
    },
    [fetchRepoStargazers.pending.type]: (state) => {
        state.isLoading = true;
    },
    [fetchRepoStargazers.rejected.type]: (state,  action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
    },
  }
});

// export const {} = findRepoFormSlice.actions;

export default findRepoFormSlice.reducer