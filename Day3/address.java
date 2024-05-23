package Day3;

class address {
    String st_name,city;
    int plot_no,pin;
    address(String st_name,String city,int plot_no,int pin){
      this.st_name=st_name;
      this.city=city;
      this.plot_no=plot_no;
      this.pin=pin;
    }
    public void displayadr(){
      System.out.println("Street name "+st_name);
      System.out.println("city name  "+city);
      System.out.println("Plot no "+plot_no);
      System.out.println("Pin no"+pin);
    }
        
}