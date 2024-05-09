
class samplethis{
    String name;
    int age;
    samplethis(String name,int age){
            this.name=name;
            this.age=age;

        }
        public void display(){
            System.out.println("My name is "+name);
            System.out.println("My age is "+age);
            System.out.println(this);
        }
}



public class demothis {
    public static void main(String args[]){
      samplethis obj1Samplethis =  new samplethis("loki", 21);
      obj1Samplethis.display();
      samplethis obj2Sample=  new samplethis("ravi", 18);
      obj2Sample.display();
    }
}
