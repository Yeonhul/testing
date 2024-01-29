import LayoutLogin from '@component/layout/login'
import LayoutDefault from '@component/layout/default'
const Index = ({ type, children }) => {
	const getLayout = () => {
		if (type === 'login') {
			return <LayoutLogin>{children}</LayoutLogin>
		} else {
			return <LayoutDefault>{children}</LayoutDefault>
		}

		// return children
	}
	return getLayout()
}

export default Index
