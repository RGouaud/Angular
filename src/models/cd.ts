export class Cd {
    id!:number;
    title!:string;
    author!:string;
    price!:number;
    thumbnail!:string;
    dateRelease!:Date;
    quantity!:number;
    onSale?:boolean;
    
    constructor(id:number, title:string, author:string, price:number, thumbnail:string, dateRelease:Date, quantity:number, onSale?:boolean) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.thumbnail = thumbnail;
        this.dateRelease = dateRelease;
        this.quantity = quantity;
        if (onSale != undefined){
            this.onSale = onSale;
        }
    }
}
