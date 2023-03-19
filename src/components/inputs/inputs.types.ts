export interface InputProps {
	id?: string;
	modelValue?: any;
	name?: string;
	label?: string;
	type?: string;
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	cols?: number;
	rows?: number;
	options?: {
		value: string;
		label: string;
	}[];
}