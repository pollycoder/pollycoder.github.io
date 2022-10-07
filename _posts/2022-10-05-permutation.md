---
title: Full Permutation with Recursion
date: 2022-10-05 08:12:30 +0800
categories: [TechNotes, Advanced Python]
tags: [algorithm]
author: Polly
math: true
mermaid: true
pin: true
---

# Origianl Problem

<big><b>Give you a number $n$, print the full permutation of the number list $(1\to n)$.</b></big>

# My Solution

Here we use `recursion`. My source code is listed below:

```python
#!/usr/bin/env python3


"""
 Permutation with recursion
 Written by Polly Zhou, Tsinghua University
 E-mail:
    pollyjoe2003@gmail.com
 Solution:
    Fix one element, and permute the remaining elements.
 Acknowledgement:
    CSDN blog: Output the Full Permutation of A List
    URL: https://blog.csdn.net/yezi1993/article/details/84143458
"""


################################
# Generate the number list: 1--n
################################
def list_generator(n):
    num_list = []
    num = int(n)
    for i in range(0,num):
        num_list.append(str(i + 1))
    return num_list


####################################################
# Permutation
# We use recursion to solve the problem:
# For each trial, pick one element as the first one, 
# and permute the remaining elements
####################################################
def permutation(input_list):
    result_list = []
    length = len(input_list)
    if length == 1:
        result_list.append(input_list)
        return result_list
    else:
        for i in range(0, length):
            # Fix element [i]
            temp_list = input_list[:i] + input_list[i+1:]
            c = input_list[i]
            per_list = permutation(temp_list)
            result_list += [[c] + j for j in per_list]
        return result_list


##################
# Print the result
##################
def perm_print(result_list):
    for i in range(0, len(result_list)):
        output_str = " ".join(result_list[i])
        print(output_str)


if __name__ == '__main__':
    input_n = input()
    original_list = list_generator(input_n)
    output_list = permutation(original_list)
    perm_print(output_list)
```

If we sometimes see a function calling itself inside itself, that is recursion.

> My idea:<br>
Recursion is an important way of thinking.<br>
The main idea of recursion is to imitate. Because each time you call the function inside itself, it is solving the same problem, just with a lower dimension.<br>
Therefore, for this problem, we can assign one element as the first one, do the permutation to the remaining elements, put all the situations together and we will get a full permutation.
{: .prompt-tip }