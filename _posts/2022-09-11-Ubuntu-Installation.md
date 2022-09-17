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

```console
$ hciconfig
hci0:	Type: Primary  Bus: USB
	BD Address: xx:xx:xx:xx:xx:xx  ACL MTU: 1021:5  SCO MTU: 255:11
	UP RUNNING PSCAN ISCAN 
	RX bytes:5049586 acl:286 sco:0 events:717653 errors:0
	TX bytes:441366701 acl:716716 sco:0 commands:562 errors:0
```

Normally  you should see this output. However, sometimes you may find your device is down.

If so, try this:

```console
$ dmesg | grep -i 'bluetooth'
[    1.637491] usb 3-8: Product: Bluetooth Radio
[    1.998444] Bluetooth: Core ver x.xx
[    1.998714] NET: Registered PF_BLUETOOTH protocol family
[    1.998716] Bluetooth: HCI device and connection manager initialized
[    1.998719] Bluetooth: HCI socket layer initialized
[    1.998741] Bluetooth: L2CAP socket layer initialized
[    1.998745] Bluetooth: SCO socket layer initialized
[    2.047006] Bluetooth: hci0: RTL: examining hci_ver=0a hci_rev=000b lmp_ver=0a lmp_subver=8761
[    2.047817] Bluetooth: hci0: RTL: rom_version status=0 version=1
[    2.047820] Bluetooth: hci0: RTL: loading rtl_bt/rtl8761bu_fw.bin
[    2.056603] Bluetooth: hci0: RTL: loading rtl_bt/rtl8761bu_config.bin
[    2.056623] bluetooth hci0: Direct firmware load for rtl_bt/rtl8761bu_config.bin failed with error -2
[    2.056632] Bluetooth: hci0: RTL: cfg_sz -2, total sz 21364
[    2.195857] Bluetooth: hci0: RTL: fw version 0x0d99646b
[    3.733812] Bluetooth: BNEP (Ethernet Emulation) ver 1.3
[    3.733815] Bluetooth: BNEP filters: protocol multicast
[    3.733819] Bluetooth: BNEP socket layer initialized
[   48.211273] Bluetooth: RFCOMM TTY layer initialized
[   48.211282] Bluetooth: RFCOMM socket layer initialized
[   48.211285] Bluetooth: RFCOMM ver x.xx
[93405.468449] bluetoothd[567]: segfault at 18 ip xxxxxxxxxxxxxxx sp xxxxxxxxxxxxxxx error 4 in bluetoothd[5598d0f72000+9b000]
```

This command helps you to display boot info and show all the files whose name contains "bluetooth".

If you find any files missing, recover it manually. Take this binary file as an example:

```console
$ sudo cp  BCM43142A0-0a5c-21d7.hcd /lib/firmware/brcm/BCM43142A0-0a5c-21d7.hcd
$ sudo modprobe -r btusb
$ sudo modprobe btusb
```

Reboot your PC, and check whether it works.
