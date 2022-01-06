#include <iostream>
#include <stdio.h>
using namespace std;

int main() 
{
    ARRAY of INT[] arr1 = [1,2,3]
  ARRAY of STRING[] arr2 = [“apple”,”blueberry”,”cherry”]
  LIST of STRING<> result
  
  FOR (INT i = 0; i < arr1.length; i++)
    result.add(CAST TO STRING(arr1[i]))
  END FOR
  
  FOR (INT j = 0; j < arr2.length; j++)
    result.add(arr2[j])
  END FOR
  
  FOR (INT k = 0; k < result.size(); k++)
    print(result.get(k))
  END FOR
}