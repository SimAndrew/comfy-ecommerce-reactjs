import { Outlet } from 'react-router';
import { Header, Navbar } from '../components/index.js';

const HomeLayout = () => {
	return (
		<>
			<Header />
			<Navbar />

			<section className="align-element py-20">
				<Outlet />
			</section>
		</>
	);
};

export default HomeLayout;
