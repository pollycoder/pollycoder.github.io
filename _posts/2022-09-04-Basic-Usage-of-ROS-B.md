---
title: Basic usage of ROS (2)
date: 2022-09-04 15:26:30 +0800
categories: [TechNotes, ROS]
tags: [ros]
author: Polly
math: true
mermaid: true
---

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=27069718&auto=1&height=66"></iframe>

# Basic Operations and Learning Resources

## Part 1 Learning Resources

### 1. Official resources

<a href="http://wiki.ros.org/">ROS wiki</a>

<a href="https://answers.ros.org/">ROS answers</a>

ROS wiki have the most comprehensive learning materials, including operations and package introduction.

ROS answers is the official Q&A community.

> VPN is unnecessary here. However, a VPN can make your visit faster and smoother, so better get one.
{: .prompt-tip }

### 2. Other convenient resources

The best solution when you can't find answer on ROS wiki is<b>` GOOGLING`</b>

When you google, you may find many useful websites and blogs written by fully experienced developers, such as <a href="https://www.csdn.net/"> CSDN</a>, <a href="https://stackoverflow.com/">Stackoverflow</a> and so on.

> VPN is required when googling.
{: .prompt-warning }

<b><big><font color=pink>With those resources, your learning process may become easier.</font></big></b>

## Part 2 Basic Operations

### 1. Configure your environment

To start ROS automatically whenever you open a new terminal, run:

```shell
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc # Write "source" into bash config
source ~/.bashrc # Activate new bash config
```

Now ROS environment can be acitivated once you open a new terminal.

### 2. Manage ROS filesystem

Here are some useful commands to navigate ROS filesystem:

```shell
roscd [package][/subdir]		# Automatically go to /opt/ros/noetic
rospack find [package]			# Show the path of certain package
rosls [package]
```

These commands will save you a lot of time of inputting a long file path.

### 3. Start your work

#### Step 1: Create a new workspace

Each time you start your work, you need a `workspace` to use `catkin tools`.

```shell
mkdir -p WORKSPACE_NAME/src	# Replace WORKSPACE_NAME with custom name of your new workspace
cd WORKSPACE_NAME/src				# Go to /src in your workspace
```

#### Step 2 Create a package

ROS use `packages` to accomplish all the functions. To create your own ROS package, run:

```shell
catkin_create_pkg PKG_NAME [dependency 1][dependency 2]...
# Replace PKG_NAME with custom package name
# If you develop ROS project with Cpp, dependency 'roscpp' is required at least
# Else if you develop with Python, dependency 'rospy' is required at least
# You can also add other dependencies, it depends on which packages you need to include
```

> Actually, this command mainly helps you to generate the files entailed to build your project. Therefore, if you are not sure what dependency you may need in your work, you can add`roscpp`/ `rospy` only, and add the other dependencies in `CMakeLists.txt`  and  `package.xml` later.
{: .prompt-tip }

#### Step 3 Build your package

Go to your package directory:

```shell
cd PKG_NAME
```

If you run `ls` , you will see:

```console
CMakeLists.txt package.xml src include
```

Now you can start your work like a normal Cpp or Python project. Take Cpp as example, put header files in `/include`, and put source files in `/src,`.

> Remember to modify CMakeLists.txt and package.xml, how to do this will be posted in <a href="https://blog.polly-mindpalace.xyz/posts/Basic-Usage-of-ROS-C/"><b>Basic Usage of ROS (3)</b></a>
{: .prompt-danger }

After you finish your work, build the package:

```shell
cd $PATH_OF_WORKSPACE
catkin_make
cd src
```

If you run `ls `, you will see the following:

```console
PKG_NAME CMakeLists.txt
```

This means building and compilation are all successful. 

#### Step 4 Test your package

Use `rosrun` to run your project:

```shell
rosrun [package] [exec file]
```

> There is something different from ROS 2. In ROS 1, what we need to run is executable file, instead of .cpp or .py file !
{: .prompt-warning }

<b><big><font color=pink>HOORAY !!!!!!!! Now you can create your own work now !</font></big></b>













