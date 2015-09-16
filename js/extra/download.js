/*

	Javascript code to download a file from Dropbox using the query string as the file to be downloaded.
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

function getQueryParams(queryString) {
    queryString = queryString.split('+').join(' ');

    var params = {},
        tokens,
        regex = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = regex.exec(queryString)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var query = getQueryParams(document.location.search);

if (query.db !== (undefined && "undefined")) {
	var dbid = query.db;
	var dblink = "https://www.dropbox.com/s/" + dbid + "?dl=1"
	document.getElementById("altdl").href = dblink
	
	var filename = dbid.split('/')[1];
	document.title = "Now Downloading " + filename + "...";

	setTimeout(function(){
		document.getElementById('dl').src = dblink;
	}, 0000);
} else {
	document.getElementById("dlerr").innerHTML = "Error: File to be downloaded unknown!";
}