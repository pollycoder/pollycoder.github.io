---
title: Bugs I Encountered (Week 1)
date: 2022-09-14 18:52:30 +0800
categories: [TechNotes, Advanced Programming]
tags: [debug]
author: Polly
math: true
mermaid: true
---

<mark><big><font color=red>Four steps when you build and run your code:</font></big></mark>

<mark><big><font color=red>1. Pre-processing</font></big></mark>

<mark><big><font color=red>2. Compiling</font></big></mark>

<mark><big><font color=red>3. Assembling</font></big></mark>

<mark><big><font color=red>4. Linking</font></big></mark>

<mark><big><font color=red>Mostly bugs may happen in step 2 and 4.</font></big></mark>

# Why Mac treat warning as ERROR when compiling ?

When I did Week 1 homework, there was a bug that only Mac users met.

Source code:

```c++
switch (type) {
    case kNoCompression:
      block_contents = raw;
      break;
    default:
      assert(false);
      break;
  }
```

Normally, this code may cause a warning:

```console
warning: enumeration value 'kSnappyCompression' not handled in switch [-Wswitch]
```

However, when I tested on Mac, it caused an error:

```console
error: enumeration value 'kSnappyCompression' not handled in switch [-Werror,-Wswitch]
```

Everything went right when I tested on Ubuntu. Therefore, I went to look up [Werror], and found the bug in `CMakeLists.txt`:

Original file:

```cmake
if(HAVE_CLANG_THREAD_SAFETY)
  target_compile_options(leveldb
    PUBLIC
      -Werror -Wthread-safety)
endif(HAVE_CLANG_THREAD_SAFETY)
```

Therefore the bug couldn't be clearer any more:

<mark><font color=red><big><b>Mac uses clang to compile files, and here according to the CMakeLists, once you have clang to compile, the compiler will treat some warnings as ERROR !</b></big></font></mark>

Once the bug was found, CMakeLists needed to be modified:

```cmake
if(HAVE_CLANG_THREAD_SAFETY)
  target_compile_options(leveldb
    PUBLIC
      -Wthread-safety)
endif(HAVE_CLANG_THREAD_SAFETY)
## Delete -Werror, which means closing Werror
```

We could see that everything went right then.

<b><font color=gree>Notes:</font></b>

<b><font color=gree> Mac has `clang` only, the so-called 'gcc' or 'g++' are actually a `pointer to clang`. When you install `gcc` through HomeBrew, you can use `gcc command`, which meets most programmers' taste, but what is working is still `clang`!!!  That's why every trial was a failure on Mac even though you'd installed gcc.</font></b>

```console
$ gcc --version
Apple clang version 13.1.6 (clang-1316.0.21.2.5)
Target: arm64-apple-darwin21.5.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
```



