/*

	Javascript code to take a paramether named 'ytid' in the elements containing a class of 'ytid' and "autofill" the id in for video embeds and cover images.
    Copyright (C) 2015 Herobrine2Nether / Bradan Wolbeck

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

	The GNU GPL v3 can be found at <http://herobrine2nether.github.io/license.txt>
	
*/

var elems = document.getElementsByClassName("ytid");

for (var i = 0; i < elems.length;  i++) {
	console.log("Found video id: " + elems[i].getAttribute("ytid"));
	var id = elems[i].getAttribute("ytid");
	//var elem = elems[i];
	
	var links = document.querySelectorAll(".ytid .youtube-video");
	var imgs = document.querySelectorAll(".ytid div img");
	var ytls = document.querySelectorAll(".ytid p a");
	var ytcs = document.querySelectorAll(".ytid h2 a");
	
	var link = links[i];
	var img = imgs[i];
	var ytl = ytls[i];
	var ytc = ytcs[i];
	
	link.setAttribute("href", "https://www.youtube.com/embed/" + id + "?autoplay=1");
	img.setAttribute("src", "https://i3.ytimg.com/vi/" + id + "/mqdefault.jpg")
	ytl.setAttribute("href", "https://www.youtube.com/watch?v=" + id);
	ytc.setAttribute("href", "http://bit.ly/HB2N-YouTube");
}