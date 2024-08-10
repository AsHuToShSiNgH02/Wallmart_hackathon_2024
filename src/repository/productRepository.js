import Product from "../models/product.js";
import CrudRepository from "./crudRepository.js";

class ProductRepository extends CrudRepository{
    constructor(){
        super(Product);
    }
}

export default ProductRepository;