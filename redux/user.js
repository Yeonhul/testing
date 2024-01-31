import { createSlice } from '@reduxjs/toolkit'

export const userStore = createSlice({
	name: 'user',
	initialState: {
		name: '123'
	},
	reducers: {
		updateUserName(state, action) {
			state.name = action.payload
		}
	}
})

export const { updateUserName } = userStore.actions

export default userStore.reducer
