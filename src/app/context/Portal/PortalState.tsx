import { Reducer, useReducer } from 'react';
import { PortalInitialState, PortalAction, PortalStateProps } from './Portal';
import PortalReducer from './PortalReducer';
import PortalContext from './PortalContext';

const PortalState = (props: PortalStateProps): JSX.Element => {
	const { children } = props;

	const initialState: PortalInitialState = {
		id: 'portal',
		portal: false,
		modal: '',
		form: false,
	};

	const [state, dispatch] = useReducer<
		Reducer<PortalInitialState, PortalAction>
	>(PortalReducer, initialState);

	const togglePortal = (modal: string, form: boolean) => {
		const data = {
			portal: state.portal,
			modal: modal,
			form: form,
		};

		dispatch({
			type: 'TOGGLE_PORTAL',
			payload: data,
		});
	};

	return (
		<PortalContext.Provider
			value={{
				id: state.id!,
				portal: state.portal,
				modal: state.modal,
				form: state.form,
				togglePortal,
			}}
		>
			{children}
		</PortalContext.Provider>
	);
};

export default PortalState;
