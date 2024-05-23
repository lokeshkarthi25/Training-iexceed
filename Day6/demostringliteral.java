package Day6;

class literal{
    literal(){ 
        String a="played well";
        String b="keep well";
       StringBuffer c =new StringBuffer("Dhoni");//this method can be mutable
       c.append(b);
       System.out.println(c);
       
    }
}

public class demostringliteral {
    public static void main(String[] args) {
     new literal();
    }
}
//op : Dhoni keep well