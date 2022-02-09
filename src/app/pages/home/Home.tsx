import { useContext } from 'react';
import { Portal } from '../../context/Portal/Portal';
import PortalContext from '../../context/Portal/PortalContext';
import PortalContainer from '../../components/templates/portal/PortalContainer';
import './Home.scss';

const Home = () => {
	const { portal, togglePortal } = useContext<Portal>(PortalContext);

	return (
		<section className="home container content">
			<div className="home__about">
				<div className="home__logo">
					<h2 className="home__classmate">UC</h2>
				</div>
				<h3 className="home__title">
					Enseña y aprende con la Universidad Nacional Experimental de la Gran
					Caracas
				</h3>
				<p className="home__description">
					Unexca Classmate es la plataforma educativa que une la enseñanza y el
					aprendizaje en un solo lugar. Una herramienta segura y fácil de usar que
					ayuda a educadores y a estudiantes.
				</p>
			</div>

			<div className="home__buttons">
				<button
					className="home__button home__register"
					onClick={() => togglePortal('register', true)}
				>
					Registrarse
				</button>
				<button
					className="home__button home__login"
					onClick={() => togglePortal('login', true)}
				>
					Iniciar sesión
				</button>
			</div>

			{portal && <PortalContainer />}
		</section>
	);
};

export default Home;
