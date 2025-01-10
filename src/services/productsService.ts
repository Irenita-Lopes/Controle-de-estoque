import { IProduct } from "../utils/interfaces/IProduct";
import fs from 'fs';
import path from 'path';

const productsFilePath = path.join(__dirname, 'products.json');

const readProductsFromFile = (): IProduct[] => {
    try {
        const data = fs.readFileSync(productsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const saveProductsToFile = (products: IProduct[]): void => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
};

export { readProductsFromFile, saveProductsToFile };