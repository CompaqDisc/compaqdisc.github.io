---
layout: post
title: "Grand Theft Auto V Under Linux?"
published: true
tags: ["Linux", "Gaming", "Proton"]
image: https://www.compaqdisc.com/files/2020-06-15-grand-theft-auto-v-under-linux.thumb.png
---

## Background
Grand Theft Auto V released on September 17th, 2013 for the PlayStation 3 and Xbox 360, eventaully making it's way to Windows PCs on April 15th, 2015. The Rockstar North developed title was extensively marketed and widely anticipated by fans of the franchise world-over, and quickly broke industry sales records.

Today GTA V is the second best-selling video game of all time, with over 130 million copies sold. All of this fame begs the question: Can we get it working under Linux?

## Getting Started
Thanks to the Wine project alongside Valve's investments in Linux gaming, we now have the tools to make this possible. "Well, what is Wine?" you ask. Simply put, Wine is a compatibility layer capable of running Windows applications on operating systems like Linux, macOS, and BSD, while remaining lightweight and performant.

Of course, everthing here is my own experience on the matter, and your milage may vary. I'm doing all of this under Arch Linux, other distros should work as well as long as they are up to date.

## Installing
First off, ensure you have Steam Play enabled for all titles by navigating to `Steam > Settings > Steam Play` and marking both checkboxes. Next, install GTA V, this will take a while as it's roughly a 90 GB title. Before attempting to run, click the settings cog under the game banner (it's tooltip should say 'Manage') and select Properties. Check the box at the bottom to force a specific version of Proton, Valve's toolset based on Wine, and select version `4.11-13` (things might work under proton 5.x, but I haven't tried this recently, last time I attempted it the game would not launch).

The game should launch fine at this point, but there's still a few issues. If you attempt to play online things will look promising until the point you'd gain control of your character, where the game crashes. You may also notice the lack of controller detection, so let's solve those now.

## Workarounds
Fire up a shell and run the following, replacing paths where appropriate. 
```
env WINEPREFIX="/path/to/steamapps/compatdata/271590/pfx/" WINEPATH="/path/to/steamapps/common/Proton 4.11/dist/bin/wine64" winecfg
```
You may decline the Wine Mono/Gecko Installers if prompted. Select the libraries tab and enter `winedbg.exe` into the 'New override for library' text field. Click add, then find the new entry in the list below and click edit. Set the load order to disabled. Now go back to the text field and locate `dinput8` in the dropdown, then change the load order to builtin. Apply the changes and exit the config menu.

Now GTA should run without any major issues. Changing any of the graphics settings that force a restart may be problematic, as somethimes the game refuses to exit completely, if that occurs just exit steam completely and it should take care of the non-compliant process. If that fails to help, try logging out and back in. If the controller still fails to register on occasion, try restarting the game.

## Closing Remarks
Obviously Proton is not perfect, but it's still amazing to see all of the work that has gone into allowing us to run massive Windows AAA titles under Linux. I hope this encourages others to give Linux a try and find that it has come a long way, especially in the last 5-10 years.
