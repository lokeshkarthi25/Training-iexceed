 import java.util.Objects;
class literalss{
    literalss(){ 
        String name="pant";
        String name1="PANT";
        if(name.equalsIgnoreCase(name1)){                // it will ignore the case whether its lower or upper
            System.out.println("rishaph pant has played good knock in australia ");
        }
        else{
            System.out.println("please compare your spelling");
        }
    }
}
public class demostringliteralss {
    public static void main(String[] args) {
     new literalss();
    }
}
