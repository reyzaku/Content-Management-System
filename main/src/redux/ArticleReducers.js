import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
	name: 'article',
	initialState: {
        title: "",
        tags: [],
        cover_image: "",
        element: [],
        id: 0
    },
    reducers: {
        addElement: (state, action) => {
            state.element.push(action.payload)
            state.id++
        },
        editElement: (state, action) => {
            state.element.map(item => item._id === action.payload._id ? item.content = action.payload.content : "")
        },
        removeElement: (state, action) => {
            state.element = state.element.filter(item => item._id !== action.payload._id)
        },
        deleteDraft: (state) => {
            state.element = []
            state.id = 0
        }
    }
});

export const {addElement, editElement, removeElement, deleteDraft} = articleSlice.actions;
export default articleSlice.reducer;