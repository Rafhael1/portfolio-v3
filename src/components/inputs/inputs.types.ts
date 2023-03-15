export interface InputProps {
	modelValue: any;
	name?: string;
	label?: string;
	type?: string;
	value?: string;
	placeholder?: string;
	options?: {
		value: string;
		label: string;
	}[];
}