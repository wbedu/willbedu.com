import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import config from '../config.json'
import githubAPI from '../apis/githubAPI'

const getProjects = async () => {
  let projects = await githubAPI.getProjects(config.github.username)
  const urls = projects.map(project => project.languages_url)

  const languages_promises = urls.map(url => githubAPI.getLanguages(url))

  await Promise.all(languages_promises).then(languages => {
    languages.forEach((language, index) => {
      projects[index]["languages"] = []
      if (language) {
        projects[index]["languages"] = Object.keys(language)
      }
      console.log(projects[index]["languages"])
    })
  });


  return projects;
};


// First, create the thunk
export const fetchProjects = createAsyncThunk(
  'github/fetchProjects',
  getProjects
);

// Then, handle actions in your reducers:
const githubSlice = createSlice({
  name: 'github',
  initialState: {
    projects: [],
    isLoading: false,
    isDone: false,
    hasError: false
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects = action.payload
      state.isLoading = false
      state.isDone = true
      state.hasError = false
    },
    [fetchProjects.pending]: (state, action) => {
      state.isLoading = true
      state.isDone = false
      state.hasError = false
    },
    [fetchProjects.rejected]: (state, action) => {
      state.isLoading = false
      state.isDone = true
      state.hasError = true
    }
  }
});

export default githubSlice.reducer

export const selectGithub = (state) => state.github;