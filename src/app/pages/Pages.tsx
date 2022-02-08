import { Routes, Route } from 'react-router-dom';
import HomeContainer from './home/HomeContainer';
import LayoutContainer from '../components/templates/layout/LayoutContainer';

const Pages = () => {
	return (
		<LayoutContainer>
			<Routes>
				<Route path="/" element={<HomeContainer />} />
			</Routes>
		</LayoutContainer>
	);
};

export default Pages;
