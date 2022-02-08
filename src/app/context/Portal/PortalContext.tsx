import { createContext } from 'react';

interface PortalInitialState {
	id: string;
	portal: boolean;
	modal: string;
	form: boolean;
	togglePortal: (modal: string, form: boolean) => void;
}

const PortalContext = createContext<PortalInitialState>(null!);

export default PortalContext;
