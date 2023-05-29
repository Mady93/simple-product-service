import { Product } from "../models/product";


export class ProductService{

/* 
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
      ]; */


      private products: Product[] = [
        new Product(1,"Product1",10.99),
        new Product(2,"Product2",19.99),
        new Product(1,"Product3",5.99)
      ];



      getProduct(){

        return this.products;
      }
}
