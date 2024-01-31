import * as mui from '@/app/utils/MaterialUI'
import Layout from '@component/layout.js'

// store(redux)
import { Provider } from 'react-redux'
import store from '@store/index'

export default function MyApp({ Component, pageProps, router }) {
	const { route } = router
	const selectLayout = () => {
		if (route.includes('login')) return 'login'
		else return 'default'
	}
	return (
		<>
			<Provider store={store}>
				{/* layout 추가하는 곳 */}
				<Layout type={selectLayout()}>
					<Component {...pageProps} mui={mui} />
				</Layout>
			</Provider>
		</>
	)
}
