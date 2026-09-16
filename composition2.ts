class CPU{
    constructor(private brand: string, private core: number){}
        process():void{
            console.log(`CPU ${this.brand} ${this.core} cores กำลังประมวลผล`);
        }
        showInfo():void{
            console.log(`CPU Info: Brand = ${this.brand}, Cores - ${this.core}`);
        }
    }

class RAM{
    constructor(private capacity:number){}
    load():void{
        console.log(`RAM ${this.capacity} GB กำลังโหลดข้อมูล`);
    }
    showInfo():void{
        console.log(`RAM Info: ความจุ - ${this.capacity} GB`);
    }
}
class _Storage{
    constructor(private capacity:number,private type:string){}
    readData():void{
        console.log(`Storage ${this.type} with ${this.capacity} GB is reading data`);
    }
    showInfo():void{
        console.log(`Storage Info: Type - ${this.type}, Capacity - ${this.capacity} GB`);
    }
    

    
}
class Computer{
    private cpu : CPU;
    private ram : RAM;
    private storage : _Storage;
    constructor(cpu: string,core: number,rcapacity: number,scapacity: number,type: string){
        this.cpu = new CPU(cpu,core);
        this.ram = new RAM(rcapacity);
        this.storage = new _Storage(scapacity,type)
    }
    boot(): void{
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
        console.log(`Computer บูสเรียบร้อยแล้ว พร้อมทำงานได้`);
    }
    showComputerInfo():void{
        console.log("Computer Infomation");
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}

const computer1 = new Computer("Intel",8,16,512,"SSD");
computer1.boot();
computer1.showComputerInfo();