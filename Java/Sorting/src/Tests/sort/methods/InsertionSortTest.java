package sort.methods;

import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class InsertionSortTest {

    @Test
    public void InsertionSortTest() {
        InsertionSort insertionSort = new InsertionSort();

        ArrayList<Integer> unsorted = new ArrayList();
        unsorted.add(5);
        unsorted.add(4);
        unsorted.add(3);
        unsorted.add(6);
        ArrayList actual = insertionSort.InsertionSort(unsorted);

        ArrayList<Integer> expected = new ArrayList();
        expected.add(3);
        expected.add(4);
        expected.add(5);
        expected.add(6);
        assertEquals(expected, actual);
    }
}