package Day5;

abstract class Book{
	String title;
	abstract void setTitle(String s);
	String getTitle(){
		return title;
	}
}
class MyBook extends Book{
    @Override
    void setTitle(String s) {
        title=s;
    }
}
public class abstractmain{
	
	public static void main(String []args){
		//Book new_novel=new Book(); This line prHMain.java:25: error: Book is abstract; cannot be instantiated
		MyBook mobj=new MyBook();
        mobj.setTitle("tale of two stories");
		System.out.println("The title is: "+mobj.getTitle());
      	
		
	}
}