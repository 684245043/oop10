class Patient{
    constructor(private id:string,private name:string, private age:number){}
    showInfo():string{
        return `ผู้ป่วย รหัส - ${this.id} ชื่อ - ${this.name} อายุ ${this.age}`;
    }
}
class Doctor{
    constructor(private id:string,private name:string,private speciality: string){}
    showInfo(): string{
        return `แพทย์ รหัส - ${this.id} ชื่อ - ${this.name} ความเชี่ยวชาญ ${this.speciality}`;
    }
    examine(patient:Patient):void{
        console.log(`${this.showInfo()} ตรวจผู้ป่วย ${patient.showInfo()}`);
    }
    diagnose(Patient:Patient,diagnose:string):void{
        console.log(`แพทย์ - ${this.name} วินิจฉัย ${Patient.showInfo()} เป็นโรค${diagnose}`);
    }
    calculateTreatmentCost(patient: Patient, fee: number, medication: number): void {
        const totalCost = fee + medication;
        console.log(`แพทย์ - ${this.name} รักษา ${patient.showInfo()} มีค่าใช้จ่ายรวม ${totalCost} บาท`);
    }
}

const p1 = new Patient('P001','แก้วตา',25);
const p2 = new Patient('P002','แก้วยาย',52);
const d1 = new Doctor('D001','บุญมี','หัวใจ');
const d2 = new Doctor('D002','บุญไม่มี','จักษุ');
d1.examine(p1);
d2.examine(p2);
d1.diagnose(p1,"หัวใจเต้นผิดจังหวะ");
d2.diagnose(p2,"ต้อกระจก");
d1.calculateTreatmentCost(p1,500,280);
d2.calculateTreatmentCost(p2,700,350);