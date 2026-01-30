const About = () => {
	return (
		<>
			<div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
				<h2 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
					We love
				</h2>
				<div className="satats bg-primary shadow">
					<div className="stat">
						<div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
							comfy
						</div>
					</div>
				</div>
			</div>

			<p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
				At Comfy, we believe that your home is your sanctuary. We are dedicated
				to providing high-quality, stylish, and comfortable furniture that
				transforms your living spaces into places of relaxation and joy. Our
				curated collection features timeless designs and modern aesthetics,
				ensuring that you find the perfect pieces to express your unique style.
			</p>
		</>
	);
};

export default About;
