package Day6;

class demothread extends Thread{   
    public void run(){
        System.out.println("KL won't play this wc");
    }
}
public class thread1 {
    public static void main(String[] args) {
        demothread tobj=new demothread();
        demothread tobj1=new demothread();
        Thread t1=new Thread(tobj1);
        tobj.start();  //we can directly call using instance object 
        t1.start();    //and also using thread
    }
}   