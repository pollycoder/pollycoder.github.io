---
title: Basic usage of ROS (1)
date: 2022-09-03 09:07:30 +0800
categories: [TechNotes, ROS]
tags: [ros]
author: Polly
math: true
mermaid: true
---

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=504329738&auto=1&height=66"></iframe>

# Introduction and Installation of ROS

## Part 1 What is ROS?

ROS (Robot Operating System) is a kind of software characteristic of operating system. Currently most developers use Ubuntu to run ROS. Actually it can be used to build a real robot, not only simulations.

If you want to learn ROS by yourself, you can go to <a href="http://wiki.ros.org/">ROS wiki</a>  for details.

## Part 2 Installation

<font color=gree>Tips: In this essay, we recommend Ubuntu 20.04, because this is the latest version compatible with both ROS 1 and 2. Even though we do not use ROS 2 here,  since ROS 1 has already stopped updating, we are almost sure that ROS 2 might replace ROS 1 in the future.</font>

### Step 1: Choose your ROS version

You may look up the correspondence between ROS and Ubuntu versions in ROS wiki. For Ubuntu 20.04 we choose <font color=red><a href="http://wiki.ros.org/noetic/Installation/Ubuntu">Noetic</a></font>.

### Step 2: Setup your source.list

Add <a href="http://packages.ros.org/">packages.ros.org</a> to your ubuntu source list:

```shell
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```

### Step 3: Setup your keys and check your source

Make sure that you've installed `curl` first. No matter whether you are sure or not, just run the following command:

```shell
sudo apt install curl
```

Do not worry that you may get two curls in your Ubuntu. If you've installed curl before, this command will do the update check only.

Then add keys:

```shell
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc 
# Use curl to download ros.asc
sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
```

<mark><font color=red>Warning:</font></mark>

<mark><font color=red>Don't just copy the command from ros wiki, because the command provided didn't provide the  pubkey, if you cmd 
c+v unquestioningly, you may see an error report like this when you try the next step:</font></mark>

![ros_installation_error_key](https://raw.githubusercontent.com/pollycoder/blog_image/main/ros/ros_installation_error_key.jpeg)

<mark><font color=red>This is because you didn't sign the source.</font></mark>

Now you can check your sources:

```shell
sudo apt update
```

### Step 4 Install ROS

Here we recommend `Desktop-full Install`, because the features in this version are the most complete, and it also contains tutorial projects.

```shell
sudo apt install ros-noetic-desktop-full
```

<font color=yellow>p.s. If you want to install more other packages ROS doesn't have, use the following command:</font>

```shell
sudo apt install ros-noetic-PACKAGE # Replace PACKAGE with target package name
```

### Step 5 Setup the environment

ROS environment is quite like bash, use the following command to source ros-bash:

```shell
source /opt/ros/noetic/setup.bash
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc 
source ~/.bashrc 
# Whenever you open your local bash, 'setup.bash' will be sourced automatically
# If you use zsh, replace 'bashrc' with 'zshrc'
```

### Step 6 Install dependencies

The work we've already done before allows us to run ros core packages. To make more convenience for your work, here some useful tools that are necessary. To install them, run the following command:

```shell
sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
# rosdep, rosinstall, wstool, etc.
```

 Before you use the tools, you need to initialize rosdep:

```shell
sudo rosdep init
rosdep update
```

<mark><font color=red>Warning:</font></mark>

<mark><font color=red>Some times you may get an error report like this:</font></mark>

![ros_installation_error_rosdep_init](https://raw.githubusercontent.com/pollycoder/blog_image/main/ros/ros_installation_error_rosdep_init.png)

If you encounter this problem, follow the following steps:

1. Ping the domain:

```shell
ping raw.githubusercontent.com
# 'raw.githubusercontent.com' is mainly used to store files (except source code), we download non-code files from here.
```

If it can't work, please check your network status. If it works,  go to the next step.

2. Find ip address of the domain:

<font color=gree>Tips: Here we recommend <a href="https://www.ipaddress.com/">ipaddress.com</a>, which is useful when looking up the ip address of one URL.</font>

<font color=gree>As for</font> `raw.githubusercontent.com`, <font color=gree>here are several common ip addresses:</font>

- <font color=gree>185.199.108.133</font>
- <font color=gree>185.199.109.133</font>
- <font color=gree>185.199.110.133</font>
- <font color=gree>185.199.111.133</font>

<font color=gree>The tip is just my experience, the ip may change sometimes, anyway, the core task is to find out the IP address.</font>

Add the IP address to `~/etc/hosts`, save and close the file.

3. Retry step 1. If it doesn't work,  you may need to complete the process of 'rosdep init' command manually.

<font color=gree>Tips: In linux, everything is file. If a command cannot work, the most possible reason is file loss. Therefore, if we can recover the missing files, most of the problems can be solved.</font>

<font color=gree>Just find another computer with ros,  compare the files and directories in /ros of the two computers, and add the file by yourself.</font>

<mark><font color=red>Warning: This is extremely unrecommended ! Because you are not sure whether other tools have the same problem. Also, keeping your network active is necessary for all work, so trying step 1 and step 2 is enough, if it can't work, I highly suggest you to change a computer...</font></mark>

<big><b><font color=pink>HOORAY !!!!!!!! You've already finished all the steps, and now you can explore ROS as you wish !</font></b></big>













