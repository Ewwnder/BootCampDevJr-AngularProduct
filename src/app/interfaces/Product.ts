import { Category } from "./Category";

export interface Product{
    id : number,
    name : string,
    description : string,
    price : number,
    category : Category, //Relação entre objetos, um produto se relaciona com objeto categoria
    promotion : boolean,
    newProduct : boolean;
}