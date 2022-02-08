import { ReactNode } from 'react';

export interface Portal {
	id: string;
	portal: boolean;
	modal: string;
	form: boolean;
	togglePortal: (modal: string, form: boolean) => void;
}

export interface PortalInitialState {
	id?: string;
	portal: boolean;
	modal: string;
	form: boolean;
}

export interface PortalData {
	portal: boolean;
	modal: string;
	form: boolean;
}

export interface PortalAction {
	type: string;
	payload: PortalData;
}

export interface PortalStateProps {
	children: ReactNode;
}
