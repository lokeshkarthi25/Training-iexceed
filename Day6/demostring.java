package Day6;

import java.util.Objects;

class strings{
    strings(){
      String name="soccer";
      String name1="SocceR";
            System.out.println(name.equalsIgnoreCase(name1)); //return boolean
            String name2=new String("football");
            System.out.println(name==name2);//return boolean
            System.out.println(Objects.equals(name1, name2)); //return boolean
}
}
public class demostring {
  public static void main(String[] args) {
   new strings();
  }
}