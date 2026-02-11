import { Outlet, useNavigation } from 'react-router';
import { Header, Navbar } from '../components/index.js';
import Loading from '../components/Loading.jsx';

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === 'loading';

	return (
		<>
			<Header />
			<Navbar />

			{isPageLoading ? (
				<Loading />
			) : (
				<section className="align-element py-20">
					<Outlet />
				</section>
			)}
		</>
	);
};

export default HomeLayout;
