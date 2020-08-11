package sort.methods;

import java.util.ArrayList;

import static java.lang.Integer.parseInt;

public class mergeSort {

    /** This should simply merge two arrays into one in order **/
    public ArrayList merge(ArrayList L, ArrayList R) {
        int l = 0;
        int r = 0;
        ArrayList<Integer> result = new ArrayList();
        while (L.size() > 0 && R.size() > 0) {
            int left = parseInt(L.get(0).toString());
            int right = parseInt(R.get(0).toString());

            if (left > right) {
                result.add(right);
                R.remove(0);
            } else {
                result.add(left);
                L.remove(0);
            }
        }
        return null;
    }
}
