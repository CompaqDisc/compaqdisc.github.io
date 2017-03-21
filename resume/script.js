var toggle = false;

function tux() {
    toggle = !toggle;
    if (toggle) {
        document.getElementById("tux").innerHTML = "<img src=\"luke-tuxwalker.png\"></img>";
    } else {
        document.getElementById("tux").innerHTML = "";
    }
}
