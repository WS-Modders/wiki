---
title: States / Mods

sub: Getting Started
category: Developer Guides

icon: mdi-fire
show: true
---
# States / Mods

Lua states, also known as mod in War Selection, are separate instances of the Lua language that can only interact and communicate with one another. As they are separate Lua states, global variables in one state cannot be retrieved in another without using indirect communication methods.

States load their custom functions and callbacks through Lua files included by the engine. 

There are 2 Lua states in War Selection:

## Gameplay

## Visual