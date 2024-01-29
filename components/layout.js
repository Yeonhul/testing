import LayoutLogin from '@/components/layout/login'
import LayoutDefault from '@/components/layout/default'
const Index = ({ type, children }) => {
	const getLayout = () => {
		if (type === 'login') {
			return <LayoutLogin>{children}</LayoutLogin>
		} else {
			return <LayoutDefault>{children}</LayoutDefault>
		}
	}
	return getLayout()
}

export default Index
