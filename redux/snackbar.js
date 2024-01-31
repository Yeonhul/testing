import { createSlice } from '@reduxjs/toolkit'

export const snnckBarStroe = createSlice({
	name: 'sanckBar',
	initialState: {
		open: false
	},
	reducers: {
		isShow(state, action) {
			state.open = true
		},
		isClose(state, action) {
			state.open = false
		}
	}
})

export const { isShow, isClose } = snnckBarStroe.actions

export default snnckBarStroe.reducer
