---
layout: default
title: "Waybar restart"
date: 2025-09-05 
categories: 
---
# The Problem

When you change the waybar config file you have to restart waybar to see the changes.

# The solution

The command to restart waybar is
```
killall -SIGUSR2 waybar
```
