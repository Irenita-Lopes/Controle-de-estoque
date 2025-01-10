import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';
import { IProduct } from "../utils/interfaces/IProduct";
import { readProductsFromFile, saveProductsToFile } from "../services/productsService";
import { v4 as uuidv4 } from 'uuid';

const ProductsRoute = Router();

ProductsRoute.get('/products', (req: Request, res: Response, next: NextFunction) => {
    const { category } = req.query;

    const products = readProductsFromFile();
    if (category) {
        const filteredProducts = products.filter(product => product.category === category);
        res.status(StatusCodes.OK).json(filteredProducts);
        return;
    }
    res.status(StatusCodes.OK).json(products);
});

ProductsRoute.post('/products', (req: Request, res: Response, next: NextFunction) => {
    const produto: IProduct = req.body;

    if (!produto.name) {
        res.status(StatusCodes.BAD_REQUEST).send('Você deve informar o nome do produto.');
        return;
    }

    if (!produto.category) {
        res.status(StatusCodes.BAD_REQUEST).send('Você deve informar a categoria do produto.');
        return;
    }

    if (!produto.quantity) {
        res.status(StatusCodes.BAD_REQUEST).send('Você deve informar a quantidade de produtos em estoque.');
        return;
    }

    if (!produto.price) {
        res.status(StatusCodes.BAD_REQUEST).send('Você deve informar o preço do produto.');
        return;
    }
    produto.id = uuidv4();
    const products = readProductsFromFile();

    products.push(produto);

    saveProductsToFile(products);

    res.status(StatusCodes.CREATED).send(produto);
});

ProductsRoute.get('/products/buscar', (req: Request, res: Response, next: NextFunction) => {

    const { id, name } = req.query;
    const products = readProductsFromFile();

    var productsSeleteds = products.filter(product => product.id === id || product.name === name);

    res.status(StatusCodes.OK).send(productsSeleteds);
});

ProductsRoute.put('/products/:id', (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;
    const produto: IProduct = req.body;

    const products = readProductsFromFile();
    const product = products.find(product => product.id === id);

    if (!product) {
        res.status(StatusCodes.NOT_FOUND).send('Produto nao encontrado.');
        return;
    }
    if (produto.name) {
        product.name = produto.name;
    }
    if (produto.category) {
        product.category = produto.category;
    }
    if (produto.quantity) {
        product.quantity = produto.quantity;
    }
    if (produto.price) {
        product.price = produto.price;
    }

    saveProductsToFile(products);
    res.status(StatusCodes.OK).send(product);
})

ProductsRoute.delete('/products/:id', (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const products = readProductsFromFile();

    const productIndex = products.findIndex(product => product.id === id);

    if (productIndex === -1) {

        res.status(StatusCodes.NOT_FOUND).send('Produto não encontrado.');
        return;
    }

    products.splice(productIndex, 1);

    saveProductsToFile(products);

    res.status(StatusCodes.OK).send(`Produto com ID ${id} excluído com sucesso.`);
});

export default ProductsRoute;