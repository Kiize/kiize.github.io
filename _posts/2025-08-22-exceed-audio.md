---
layout: default
title: "Exceed 100% Audio in Arch"
date: 2025-08-21 
categories: 
---
Sometimes in Arch the audio is too low, to exceed the max value and go for example to 150%, we can use this command
```
pactl set-sink-volume @DEFAULT_SINK@ 150%
```
