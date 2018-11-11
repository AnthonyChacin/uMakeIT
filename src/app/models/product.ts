export interface Product {
    available?: string;
    name?: string;
    plato?: string;
    price?: number;
    url_img?: Promise<string>;
    name_img?: string;
}