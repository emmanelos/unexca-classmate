import { Routes, Route } from 'react-router-dom';
import HomeContainer from './home/HomeContainer';
import WelcomeContainer from './welcome/WelcomeContainer';
import LayoutContainer from '../components/templates/layout/LayoutContainer';

const Pages = () => {
	return (
		<LayoutContainer>
			<Routes>
				<Route path="/" element={<HomeContainer />} />
				<Route path="/login" element={<WelcomeContainer />} />
			</Routes>
		</LayoutContainer>
	);
};

export default Pages;
