import { useContext } from 'react';
import { Portal } from '../../context/Portal/Portal';
import PortalContext from '../../context/Portal/PortalContext';
import PortalContainer from '../../components/templates/portal/PortalContainer';

const Welcome = () => {
	const { portal, togglePortal } = useContext<Portal>(PortalContext);

	return (
		<section className="content welcome">
			<button onClick={() => togglePortal('register', true)}>Registrarse</button>
			<button onClick={() => togglePortal('login', true)}>Iniciar sesión</button>
			welcome
			{portal && <PortalContainer />}
		</section>
	);
};

export default Welcome;
