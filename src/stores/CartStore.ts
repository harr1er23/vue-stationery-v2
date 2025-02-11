import ProductsApiService from "@/features/product/data/remote/productsApiService";
import Product from "@/features/product/domain/entities/Product";
import { defineStore } from "pinia";
import { reactive, watch } from "vue";

export class CartProduct extends Product {
    readonly id: number;
    count: number;
    title: string;
    subtitle: string;
    price: number;
    discountPrice: number;
    image: string;
    mult: number;

    getMinimalInfo() {
        return {
            id: this.id,
            count: this.count
        }
    }

    constructor(product: Product & { count: number }) {
        super();
        this.id = product.id;
        this.count = product.count || 0;
        this.title = product.title;
        this.subtitle = product.subtitle;
        this.price = product.price;
        this.discountPrice = product.discountPrice;
        this.image = product.image;
        this.mult = product.mult;
    }
}

export const useCartStore = defineStore('cart', () => {
    const storageKey = 'cart_store';
    const cart = reactive<Map<number, CartProduct>>(
        new Map<number, CartProduct>(getStoredCart())
    );

    watch(cart, (cart) => {
        localStorage.setItem(storageKey, JSON.stringify([...cart].map(([key, obj]) => [key, obj.getMinimalInfo()])));
    });
    fetchProducts();
    async function fetchProducts() {
        try{
            let productsId = [];
            if(cart){
                for(const res of cart){
                    productsId.push(res[0]);
                }
            }
            const resp = await ProductsApiService.getProducts();
            resp.forEach(obj => 
                    cart.set(obj.id, new CartProduct({
                        ...obj,
                        count: cart.get(obj.id)?.count ?? 0
            })));
        }catch(err){
            console.error(err);
        }
    }
    function getStoredCart():Iterable<readonly [number, CartProduct]> | undefined {
        let result:Iterable<readonly [number, CartProduct]> | undefined;

        try{
            result = JSON.parse(localStorage.getItem(storageKey)??'[]');
        }catch {
            result = undefined
        }

        return result;
    }
    
    return {
        has(productId: number) {
            return cart.has(productId);
        },
        add(product: CartProduct) {
            if(cart.has(product.id))
                throw new Error (`Product #${product.id} already exist in cart!`);
            cart.set(product.id, product)
        },
        get(productId: number) {
            return cart.get(productId) as CartProduct;
        },
        delete(productId:number | CartProduct) {
            if(typeof productId === 'number')
                cart.delete(productId);
            else
                cart.delete(productId.id);
        },
        getCount() {
            return cart.size;
        },
        clear() {
            return cart.clear();
        },
        getCartSum() {
            let sum = 0;
            cart.forEach(product => sum += product.count * product.price)
            return sum;
        }
    }
})