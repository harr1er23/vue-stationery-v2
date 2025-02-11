import type Product from "@/features/product/domain/entities/Product";
import { CartProduct, useCartStore } from "@/stores/CartStore";
import { computed, ref } from "vue";

export function useProduct(productValue?: Product, multValue: number = 0) {
    const product = ref<Product | undefined>(productValue);
    const mult = ref<number>(multValue);
    const cart = useCartStore();

    const cartProduct = computed(() => {
        const id = product.value?.id;
        if(!id) return null;
    
        return cart.get(id)?? new CartProduct({
            id,
            count: 0,
            title: product.value?.title ?? "",
            subtitle: product.value?.subtitle ?? "",
            price: product.value?.price ?? 0,
            discountPrice: product.value?.discountPrice ?? 0,
            image: product.value?.image ?? '',
            mult: product.value?.mult ?? 0,
        })
    })

    function onIncrease() {
        if(!cartProduct.value) throw Error('ProductId must been provided!')
    
        if(!cartProduct.value.count)
            cart.add(cartProduct.value);
        cartProduct.value.count += mult.value;
        cartProduct.value.count = Number(cartProduct.value.count.toFixed(1));
    }

    function onDecrease() {
        if(!cartProduct.value) throw Error('ProductId must been provided!');

        if(cartProduct.value.count==mult.value){
            cart.delete(cartProduct.value);
        }else{
            cartProduct.value.count-=mult.value;
            cartProduct.value.count = Number(cartProduct.value.count.toFixed(1));
        }
    }

    function onInputCount(count: number) {
        if(!count) return;
        setCount(count);
    }

    function onChangeCount(count: number) {
        setCount(count);
    }

    function setCount(count: number) {
        if(!cartProduct.value) throw Error('ProductId must been provided!');

        count = Math.floor(count/mult.value)*mult.value;
        if(!cartProduct.value.count && count) {
            cart.add(cartProduct.value);
        }else if(cartProduct.value.count && !count) {
            cart.delete(cartProduct.value);
        }
        cartProduct.value.count = count;
    }

    return {
        cartProduct,
        /**
         *
         * @param id айди товара
         * @param multValue кратность увелечение кол-ва товара в корзине
         */
        set(good: Product, multValue: number = 0){
            product.value = good;
            mult.value = multValue;
        },
        onIncrease,
        onDecrease,
        onInputCount,
        onChangeCount
    }
}