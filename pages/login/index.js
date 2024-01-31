import axios from 'axios'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@component/snackBar'

const Index = props => {
	const dispatch = useDispatch()
	const userName = useSelector(state => state.user)
	const submit = async () => {
		const { data: loginData } = await axios.post('/login', { username: 'bo001', password: '1q2w3e4r' })
		console.log(loginData)
		if (loginData.code !== 'S') return alert.current.open({ type: 'error', message: '오류발생' })
	}

	const alert = useRef(null)

	useEffect(() => {
		// console.log(userName)
		console.log('alert: ', alert.current.open)
		alert.current.open({ type: 'error', message: '오류발생' })
	}, [])

	return (
		<>
			<props.mui.Button variant="outlined" onClick={() => submit()}>
				로그인
			</props.mui.Button>
			<Snackbar ref={alert} />
		</>
	)
}

export default Index
