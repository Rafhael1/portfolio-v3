export interface HomePage {
	section: string;
	info_type: string;
	info?: string;
	info2?: string;
	info3?: string;
	info4?: string;
	image?: string;
	url?: string;
}

export class HomePageObject implements HomePage {
	constructor(
		section: string,
		info_type: string,
		info?: string,
		info2?: string,
		info3?: string,
		info4?: string,
		image?: string,
		url?: string
	) {
		this.section = section;
		this.info_type = info_type;
		this.info = info || "";
		this.info2 = info2 || "";
		this.info3 = info3 || "";
		this.info4 = info4 || "";
		this.image = image || "";
		this.url = url || "";
	}

	section: string;
	info_type: string;
	info!: string;
	info2!: string;
	info3!: string;
	info4!: string;
	image!: string;
	url!: string;
}
