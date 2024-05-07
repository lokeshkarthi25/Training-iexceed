class sampleif{
    String name,clg;
    int id;
    sampleif(String name,String clg,int id){
            this.name=name;
            this.clg=clg;
            this.id=id;
    }
    public void display(){
        System.out.println("hi,I am "+name);
        System.out.println("I have completed my clg in "+clg);
        System.out.println("My official id no is  "+id);
    }
}
public class day2 {

    public static void main(String args[]){
       sampleif obj= new sampleif("Karthi", "ST.Xavier's", 4457);
       obj.display();
    }
    
}