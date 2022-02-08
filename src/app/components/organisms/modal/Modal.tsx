import { useContext } from 'react';
import { Portal } from '../../../context/Portal/Portal';
import PortalContext from '../../../context/Portal/PortalContext';
import Form from '../form/Form';

const Modal = () => {
	const { form } = useContext<Portal>(PortalContext);

	return <section className="modal">{form && <Form />}</section>;
};

export default Modal;
