package sort.methods;

import java.util.ArrayList;

public class InsertionSort {

    public ArrayList<Integer> InsertionSort(ArrayList arr) {
        /** Iterate over each element **/
        for (int i = 0; i < arr.size(); i++) {
            /** For each element seen we want to check if values on it's left are less than itself
             *  Key will be the element in question
             *  j will be the elements left of key using a while loop
             * **/
            Integer key = (Integer) arr.get(i);
            int j = i - 1;

            /** So if the key is greater than left element we need to shift elements to the right opening a gap **/
            while ( j >= 0 && key < (Integer) arr.get(j)) {
                arr.set(j + 1, arr.get(j));
                j--;
            }
            arr.set(j + 1, key);
        }
        return arr;
    }
}
