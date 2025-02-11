import Product from "../../domain/entities/Product";

export default class ProductModel extends Product {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    discountPrice: number;
    image: string;
    mult: number;

    constructor(data: any) {
        super();
        this.id = data.id;
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.price = data.price;
        this.discountPrice = data.discountPrice;
        this.image = data.image;
        this.mult = data.mult;
    }
}