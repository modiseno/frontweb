
export interface Experiencia {
    id: number;
    cliente: string;
    category: string;
    title: string;
    slug: string;
    excerpt: string;
    anio: number;
    lugar: string;
    ciudad: string;
    area: number;
    duracion: string,
    objetivo_img: string;
    objetivo: string;
    problema: string;
    condiciones: string;
    enfoque: string;
    solucion_img: string;
    solucion: string[];
    alcance: Alcance;
    feat_image: string;
    gallery: string[];
}

export interface Alcance {
    objetivo: string;
    bullets: string[];
}