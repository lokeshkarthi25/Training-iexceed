class tamil{
    String name="Tamilan";
    String mean="veeram";
    class Nellai{
        public void famous(){
            System.out.println("Famous in nellai is alwa");
        }
    }
}
public class demoinnerclass {
    public static void main(String[] args) {
        tamil s1=new tamil();
        tamil.Nellai s2=s1.new Nellai();
        s2.famous();     
    }
}
