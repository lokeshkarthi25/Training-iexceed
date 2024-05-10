public class pattern {
   public static void main(String args[]){
    int rows=6;
    for(int i=0;i<rows;i++){
        for(int j=0;j<i+1;j++){
            System.out.print(j+1 +" ");
        }
        System.out.println();
    }
    for(int i=1;i<=6;i++){
        for(int j=1;j<=rows-i;j++){
            System.out.print(i+j+" ");
        }
        System.out.println();
    }
   } 
}
