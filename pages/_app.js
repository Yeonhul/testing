import * as mui from '@/app/utils/MaterialUI'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps, router }) {
	const { route } = router
	const selectLayout = () => {
		if (route.includes('login')) return 'login'
		else return 'default'
	}
	console.log('_app....')
	return (
		<>
			{/* layout 추가하는 곳 */}
			<Layout type={selectLayout()}>
				<Component {...pageProps} mui={mui} />
			</Layout>
		</>
	)
}
