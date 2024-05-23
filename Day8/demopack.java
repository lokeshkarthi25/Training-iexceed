package Day8;
import Day8.slm2024.studentdata;

class samplepack extends studentdata{
    samplepack(String name,String place,int age){
        super(name,place,age);
        super.displaystudent();
    }
}
public class demopack {
    public static void main(String[] args) {
        new samplepack("loki", "Nellai", 20);
    }
}