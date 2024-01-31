import { Snackbar, Alert } from '@mui/material'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isShow, isClose } from '@store/snackbar'
const SnackbarComponent = forwardRef((props, ref) => {
	//hook
	const dispatch = useDispatch()
	const display = useSelector(state => state.snack.open)

	// state
	const [type, setType] = useState('info')
	const [message, setMessage] = useState('')

	// mounted
	useEffect(() => {}, [])

	// function
	const open = value => {
		value?.type && setType(value.type)
		value?.message && setMessage(value.message)
		dispatch(isShow())
	}
	const close = () => {
		dispatch(isClose())
		setType('info')
		setMessage('')
	}

	useImperativeHandle(ref, () => ({ open, close }))

	return (
		<Snackbar open={display} autoHideDuration={props?.autoHideDuration || 5000} onClose={close} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
			<Alert severity={type} variant="filled" sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
})

SnackbarComponent.displayName = 'SnackbarComponent'

export default SnackbarComponent
