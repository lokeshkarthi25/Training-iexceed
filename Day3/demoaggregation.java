package Day3;


class samplestudent{
    String name;
    int age;
    address adr;

    samplestudent(String name,int age,address adr){
        this.name=name;
        this.age=age;
        this.adr=adr;
    }
    public void displaystudent(){
        System.out.println("Name "+name);
        System.out.println("Age "+age);
        adr.displayadr();
    }
}



public class demoaggregation {
    public static void main(String agrs[]){
        address ad1=new address("bala avenue", "Nellai", 6, 627358);
        samplestudent obj1=new samplestudent("Lokesh", 21,ad1);
        obj1.displaystudent();
    }
}