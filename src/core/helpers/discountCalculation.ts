export default function discountCalculation(price: number, discountPrice: number): number {
    const discount = 100 - ((discountPrice / price) * 100);

    return Number(discount.toFixed(0));
}