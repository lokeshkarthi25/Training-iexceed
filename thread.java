class demothread implements Runnable{
    
    public void run(){
        System.out.println("virat will play for india");
    }
}



public class thread {
    public static void main(String[] args) {
        demothread tobj=new demothread();
        Thread t=new Thread(tobj);
        t.start();   //thread method can't be called twice
    }
}   
