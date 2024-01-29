import axios from 'axios'

const submit = async () => {
	const { data: loginData } = await axios.post('/login', { username: 'bo001', password: '1q2w3e4r' })
	// if (data.code === 'S') {
	// 	// this.getCmpnInfo()
	// 	if (this.remember === true) {
	// 		this.$cookies.set('rememberId', this.loginInfo.id, {
	// 			maxAge: 60 * 60 * 24 * 365 * 50
	// 		})
	// 	}
	// 	this.msg.err = ''
	// 	console.log('됬씀!!')
	// 	console.log(data)
	// 	// this.$router.push('/biz')

	// 	//
	// 	// this.$store.commit('common/setCpath', this.$route.fullPath)
	// 	const routeInfo = this.$router.resolve({ path: '/' })
	// 	window.location.href = routeInfo.href
	// } else {
	// 	console.log('Error Login ' + data)
	// 	console.log(data)
	// 	this.msg.err = data.err
	// }

	console.log(loginData)
}

const Index = props => {
	return (
		<>
			<props.mui.Button variant="outlined" onClick={() => submit()}>
				로그인
			</props.mui.Button>
		</>
	)
}

export default Index
