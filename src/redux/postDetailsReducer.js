import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postDetails: null,
  isLoading: false,
  error: null,
  countValue: 1,
  //   toglerTest: false,
};

const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    countValueCount: state => {
      state.countValue = state.countValue = 0;
    },
    incrementCountValue: state => {
      state.countValue = state.countValue + 1;
    },
    decrementCountValue: state => {
      state.countValue = state.countValue - 1;
    },
  },
});

export const {
  setIsLoading,
  setPostDetails,
  setError,
  incrementCountValue,
  decrementCountValue,
} = postDetailsSlice.actions;

export const postDetailsReducer = postDetailsSlice.reducer;

// export const postDetailsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'postDetails/setIsLoading': {
//       return {
//         ...state,
//         isLoading: action.payload,
//         // toglerTest: !state.toglerTest,
//       };
//     }
//     case 'postDetails/setPostDetails': {
//       return {
//         ...state,
//         postDetails: action.payload,
//       };
//     }
//     case 'postDetails/setError': {
//       return {
//         ...state,
//         error: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const setIsLoading = payload => {
//   return {
//     type: 'postDetails/setIsLoading',
//     payload,
//   };
// };

// export const setPostDetails = payload => {
//   return {
//     type: 'postDetails/setPostDetails',
//     payload,
//   };
// };

// export const setError = payload => {
//   return {
//     type: 'postDetails/setError',
//     payload,
//   };
// };
