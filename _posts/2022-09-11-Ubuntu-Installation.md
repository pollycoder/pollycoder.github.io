---
title: Usage of Ubuntu on PC installed Windows Before
date: 2022-09-11 14:43:30 +0800
categories: [TechNotes, Ubuntu]
tags: [Ubuntu]
author: Polly
math: true
mermaid: true
---

# Some bugs you are going to encounter



(<font color=red>Thanks for Danny Wu's image on his blog:https://www.idannywu.com//1203.html?preview=true</font>)

Here we use `DELL` computer to install Ubuntu 20.04.

## For installation:

### Bug: Partition and mount point

My computer is not completely compatible with all the softwares in Ubuntu, which caused a lot of problem. One of the most serious problems is that partition should be done manually. Here I will provide you a solution.

#### Caution 1: Choose something else when the system remind you to choose installation type.

There might be some errors because of your disk's file system, and you didn't set up the mount point when you try to install ubuntu. `Something else` allows you to set up new partition table and set your mount point manually. 

Like this: 

![ubuntu_partition](https://raw.githubusercontent.com/pollycoder/blog_image/main/ubuntu/ubuntu_partition.png)



Then create a new partition table:

![newtable](https://raw.githubusercontent.com/pollycoder/blog_image/main/ubuntu/newtable.png)

This will generate freespace:

![freespace](https://raw.githubusercontent.com/pollycoder/blog_image/main/ubuntu/freespace.png)

Creating two partitions is enough. One is for `efi`, one is for root directory `/`.![mount](https://raw.githubusercontent.com/pollycoder/blog_image/main/ubuntu/mount.png)

Then just install, and wait for completing.

## For usage:

### Bug 1: Bluetooth usage

Most of the times, when you try to start your bluetooth through GUI operation,  you may fail totally. Because there are some files missing on your computer or you need to generate by yourself manually.

#### Step 1 Test your bluetooth status:

```shell
hciconfig
```

