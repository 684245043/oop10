class _Product{
    constructor(public name:string,public price:number,public quantity:number){}
        getSubtotal():number {
            return this.price * this.quantity;
        }
    }
    class _Order{
        private products: _Product[]=[];
        addProduct(product: _Product):void{
            this.products.push(product);
            console.log(`${product.name}: ${product.price} บาท ${product.quantity} ชิ้น = ${product.getSubtotal()}`);
        }
        calculateTotal():number{
            let total = 0;
            for (const p of this.products){
                total += p.getSubtotal();
            }
            return total;
        }
        calculateDiscount(percent:number):number{
            return this.calculateTotal()* percent / 100;
        }
        calculateNetTotal(percent:number):number{
            return this.calculateTotal() - this.calculateDiscount(percent);
        }
    }

    const order = new _Order();
    const prod1 = new _Product("Laptop",25000,2);
    const prod2 = new _Product("Iphone",30000,3);
    const prod3 = new _Product("Mouse",200,5);
    order.addProduct(prod1);
    order.addProduct(prod2);
    order.addProduct(prod3);
    const disc = 10;
    console.log(`รวมเงินทั้งหมด ${order.calculateTotal()} บาท`);
    console.log(`ส่วนลด ${disc}% เป็นเงิน ${order.calculateDiscount(disc)}`)
    console.log(`ชำระเงินสุทธิ ${order.calculateNetTotal(disc)} บาท`)