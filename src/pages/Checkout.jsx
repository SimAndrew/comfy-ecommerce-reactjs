import { useSelector } from 'react-redux';
import { redirect } from 'react-router';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => async () => {
	const user = store.getState().userState.user;

	if (!user) {
		setTimeout(() => toast.warn('You must be logged in to checkout'), 1000);
		return redirect('/login');
	}
	return null;
};

const Checkout = () => {
	const cartTotal = useSelector((state) => state.cartState.cartTotal);

	if (cartTotal.length === 0) {
		return <SectionTitle text="Your cart is empty" />;
	}
	return (
		<>
			<SectionTitle text="Place your order" />
			<div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
				<CheckoutForm />
				<CartTotals />
			</div>
		</>
	);
};
export default Checkout;
