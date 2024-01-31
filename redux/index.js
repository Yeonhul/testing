import { configureStore } from '@reduxjs/toolkit'
import userStore from '@store/user'
import snackBarStore from '@store/snackbar'

export default configureStore({
	reducer: {
		user: userStore,
		snack: snackBarStore
	},
	devTools: process.env.NODE_ENV !== 'production'
	// middleware: getDefaultMiddleware =>
	//   getDefaultMiddleware({ serializableCheck: false }),
})
