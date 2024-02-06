type tCrumbs = {
	id: number, 
	name: string, 
	href: string,
}

export type tProduct = {
	id?: number;
	name?: string;
	href?: string;
	breadcrumbs: tCrumbs[];
	imageSrc?: string;
	imageGallery: string[];
	imageAlt?: string;
	price?: string;
	description?: string;
	judulHightLight?: string;
	highLights?: string;
	details?: string;
};
