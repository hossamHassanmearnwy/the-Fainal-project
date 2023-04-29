export interface IProduct {
    id:number,
    name:string,
    quantity:number,
    price:number,
    img?:string,
    categoryId:number,
    colors:string[]
    count?:number;
    totalPrice?:number;
}
