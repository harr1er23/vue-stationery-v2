export default abstract class Product {
    abstract readonly id: number;
    abstract readonly title: string;
    abstract readonly subtitle: string;
    abstract readonly price: number;
    abstract readonly discountPrice: number;
    abstract readonly image: string;
    abstract readonly mult: number;
} 