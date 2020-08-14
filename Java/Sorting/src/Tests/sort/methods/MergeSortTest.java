package sort.methods;

import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class MergeSortTest {

    @Test
    public void breakAndCallMerge() {
        ArrayList<Integer> testArrayList = new ArrayList();
        ArrayList<Integer> correctArrayList = new ArrayList();

        testArrayList.add(5);
        testArrayList.add(4);
        testArrayList.add(6);
        testArrayList.add(3);

        correctArrayList.add(3);
        correctArrayList.add(4);
        correctArrayList.add(5);
        correctArrayList.add(6);

        MergeSort sorter = new MergeSort();
        ArrayList sortedArray = sorter.BreakAndCallMerge(testArrayList);

        assertEquals(sortedArray, correctArrayList);
    }

    @Test
    public void merge() {
        ArrayList<Integer> testArrayList = new ArrayList();
        ArrayList<Integer> testArrayListTwo = new ArrayList();

        ArrayList<Integer> correctArrayList = new ArrayList();

        testArrayList.add(2);
        testArrayListTwo.add(1);

        correctArrayList.add(1);
        correctArrayList.add(2);

        MergeSort sorter = new MergeSort();
        assertEquals(sorter.merge(testArrayList, testArrayListTwo), correctArrayList);
    }
}
