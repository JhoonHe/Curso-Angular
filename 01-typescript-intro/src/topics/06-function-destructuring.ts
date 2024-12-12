export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

const shoppingCart = [phone, tablet];
export const tax = 0.15;

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {

    let total = 0;

    const { products, tax } = options;

    // products.forEach((product) => {
    //     const { price } = product;
    //     total += price;
    // });

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax
});

console.log({ total, totalTax });
