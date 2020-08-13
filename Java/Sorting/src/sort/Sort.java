package sort;

import sort.methods.MergeSort;

import java.util.ArrayList;

public class Sort {
    public static void main(String[] args) {
        MergeSort mergeSort = new MergeSort();
        ArrayList testArray = new ArrayList();
        testArray.add(5);
        testArray.add(4);
        testArray.add(6);
        testArray.add(3);

        System.out.println(mergeSort.merge(new ArrayList(testArray.subList(0, 3)), new ArrayList(testArray.subList(3,4))));
        System.out.println(mergeSort.BreakAndCallMerge(testArray));
    }
}
