export interface IOrder {
    _id?:number;
    shippingAddressEn?:string;
    shippingAddressAr?:string;
    cityEn?:string;
    cityAr?:string;
    phone?:string;
    userId:string;
    paid?:string;
    statusEn:string;
    statusAr?:string;
    quantity: number;
    totalPrice: number;
    data?: any;
}
