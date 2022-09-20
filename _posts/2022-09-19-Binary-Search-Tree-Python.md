---
title: Leetcode-----Binary Search Tree
date: 2022-09-14 18:52:30 +0800
categories: [TechNotes, Advanced Python]
tags: [DSA]
author: Polly
math: true
mermaid: true
---
<span id="/posts/%E7%BB%99%E6%96%87%E7%AB%A0%E5%8A%A0%E4%B8%8A%E4%BA%86%E8%AE%BF%E9%97%AE%E7%BB%9F%E8%AE%A1/" class="leancloud_visitors" data-flag-title="Leetcode-----Binary Search Tree">
    <i class="fa fa-eye"><span class="leancloud-visitors-count"></span></i>
</span>




# Original Problem

<big><b>Given a number list, you can confirm a binary search tree. Now given two specified elements, you have to find the lowest common ancestor. </b></big>


# My Solution

Source code is listed below:

```python
#!/usr/bin/env python3
# Minimum common ancestors of binary seaarch tree

# Special acknowledgement for Bingchuan Wei.
# After discussed this practice with him, I learned basic binary search tree operation
# by myself and succeeded to give an easier solution thanks to his help.

# Nodes of a binary tree
class TreeNode:
    def __init__(self, val) -> None:
        self.val = val
        self.left = None
        self.right = None

    def insert(self, val):
        if val < self.val:
            if self.left is None:
                self.left = TreeNode(val)
            else:
                self.left.insert(val)
        elif val > self.val:
            if self.right is None:
                self.right = TreeNode(val)
            else:
                self.right.insert(val)
        else:
            self.right.insert(val)

# A binary search tree
class BSTree:
    def __init__(self) -> None:
        self.root = None

    def construct(self, input_list):
        for node_val in input_list:
            if self.root is None:
                self.root = TreeNode(node_val)
            else:
                self.root.insert(node_val)

# Solution part
def solution(root: 'TreeNode', treenode1: 'TreeNode', treenode2: 'TreeNode'):
    while root:
        if treenode1.val < root.val and treenode2.val < root.val:
            root = root.left
            continue
        elif treenode1.val > root.val and treenode2.val > root.val:
            root = root.right
        else:
            return root


if __name__ == '__main__':
    N, M = input().split()
    input_list = list(map(int, input().split()))
    tree = BSTree()
    tree.construct(input_list)
    output_list = []
    for i in range(0, int(M)):
        val1, val2 = input().split()
        node1 = TreeNode(int(val1))
        node2 = TreeNode(int(val2))
        lowest_ance = solution(tree.root, node1, node2)
        output_list.append(lowest_ance.val)
    for result in output_list:
        print(result)
```

From the source code, you can already infer that my solution is totally based on binary tree operations.

> My idea:<br>
To solve this problem, binary search tree situation is much easier, for in a binary search tree, it is required that left child node value be smaller than parent node while right child node be larger than parent node. Therefore, if a node is smaller than root node, it should be on the left branch, or else it should be on the right branch. <br>
In this problem I tried post-order traversal, which means visit sub-branches first. But this is a little bit tricky, if you try in this way, you will lose the advantage of binary search tree, because you need to use original binary tree traversal. Therefore here we use pre-order traversal, which means we visit root node first.
{: .prompt-tip }

