import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt='Logo' className='logo' />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
						earum nam minus consectetur atque totam quod natus nisi aliquam
						alias.
					</p>
					<button className='btn btn-hero'>Login/Register</button>
				</div>
				<img src={main} alt='Main' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
