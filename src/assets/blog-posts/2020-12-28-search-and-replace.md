---
layout: post
title:  "search and replace"
date:   2020-12-28 15:00:00 -0800
categories: thoughts
---

##

In vim, a quick and easy way to search and replace from normal mode is to:

1. ```shift + v``` to select the area that you want to replace in. (I would suggest the sequence ```gg<shift + v>G``` to select the whole file)
2. Use the command ```:s/old/new/r``` 