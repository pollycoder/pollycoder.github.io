---
title: Cite your source
date: 2022-09-13 22:59:30 +0800
categories: [TechNotes, Advanced Programming]
tags: [cite]
author: Polly
math: true
mermaid: true
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/b-2j_27FeH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> Whenever you copy code from others,  you have to cite the source !
For details, please go to: <a href="https://integrity.mit.edu/handbook/writing-code">MIT Code Writing Handbook</a>.
{: .prompt-danger }

## What should be provided

1. URL
2. Date of retrieval
3. ( <font color=red>If you adapted the code</font> ) Add "Adapted from.." or "Based on.."
4. ( <font color=red>If you use open source software</font> ) Copyright ( in your code ) + License ( in your workspace folder )

## Format of citing code sources

### Example 1------Qt comment format ( No copyright )

```c++
/**
 * A utility class.
 * Adapted from [xxxx, source name] on [YYYYMMDD, date of retrieval]
 * Source: [URL]
 * [..., Other introduction]
 */
class Util{
    // Insert your code here...
}
```

### Example 2 ( No copyright )

```c++
// Adapted from [xxxx, source name]:
// [URL, where you find it]
// (Source: [URL, source code] retrieved in [YYYY MM DD]
```

### Example 3 ( Open source software )

```c++
// Copyright (c) YYYY ........
// ....
// (You can just copy the copyright from git)
```

