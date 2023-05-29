import { Product } from "../models/product";


export class ProductService{


    private products: Product[] = [
        {
          productID: 1,
          name: "Product1",
          price: 10.99
        },
        {
          productID: 2,
          name: "Product2",
          price: 19.99
        },
        {
          productID: 3,
          name: "Product3",
          price: 5.99
        }
      ];

      getProduct(){

        return this.products;
      }
}
