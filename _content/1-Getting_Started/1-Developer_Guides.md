---
title: Auto Refresh/HotLoading

sub: Getting Started
category: Developer Guides

icon: mdi-fire
show: true
---

#  What is Auto Refresh? 

In War Selection all Lua scripts are reloaded "live" when they are changed on disk. This is useful if you're coding because your changes show up immediately - as soon as you save. 

# Restrictions 
Autorefresh does not always work. Not knowing these restrictions can lead to confusion. 

An unhandled lua refresh is fine and means it is working.

## My code doesn't work when I refresh it, but it works when I rejoin, why?
This typically means the script that is being refreshed was not written to support it

This could be many things, here are a few:
1. Not carrying over data(locals are reset, tables may be emptied/re-setup etc)
2. The refreshed script may be included in another one, in which case that one should be refreshed to reflect changes. 
3. Loading order. The refreshed script may overwrite functionality it otherwise wouldn't during the normal loading of the game (it would be loaded before or after whatever it needed to function properly). Refreshed scripts are "slapped on top", nothing is unloaded, it is just executed again. 