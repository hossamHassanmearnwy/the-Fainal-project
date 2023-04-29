export interface IOrder {
    _id?:number;
    shippingAddressEn:string;
    phone:string;
    userId:string;
    paid?:string;
    statusEn:string;
    quantity: number;
    totalPrice: number;
    data?: any;
}
