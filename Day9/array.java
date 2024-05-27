class Main {

    public static void main(String[] args) {

        // declare the variable and allocate memory
        int[][] myArray = new int[4][2];
        myArray[2][1] = 1;
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(myArray[i][j] + " ");
            }
            System.out.println();
        }
    }
}
