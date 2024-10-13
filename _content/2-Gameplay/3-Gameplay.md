---
title: onTick

sub: Gameplay
category: Developer Guides

icon: mdi-gamepad-round
show: true
func: true
---
# onTick
This function is executed every tick of the game

```lua
function onTick(var, currentMoment)
	-- Doing something every 5 seconds
	if currentMoment % 5000 == 0 then
		-- Your code here
	end
end
```