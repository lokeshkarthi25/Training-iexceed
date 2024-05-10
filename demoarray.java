public class demoarray {
    public static void main(String args[]){
        int numbers[]={10,27,21,4,7,1};
        int smallest=numbers[0];
        int largest=numbers[0];
        for(int i=1;i<numbers.length;i++){
            if(numbers[i]<smallest){
                smallest=numbers[i];
            }
            if(numbers[i]>largest){
                largest=numbers[i];
            }
        }
        System.out.println("minimum among given array is "+smallest);
        System.out.println("maximum among given array is "+largest);
    }
}
