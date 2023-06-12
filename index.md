---
title: Home
layout: home
---
<img class="float-right" src="/files/zilog_inside.gif" alt="'Zilog Inside' Badge" title="Imagine if your computer was running on a Zilog CPU..." width="100px">

Hello there! I'm Bradan Wolbeck (aka CompaqDisc), a 23-year-old software developer from Denver, Colorado. I enjoy reverse-engineering, old and/or esoteric technology, embedded computing, video games, mechanical keyboards and most combinations of those things.

I can be found across the web: [GitHub]({{ site.socials.github.uri }}), [Mastodon]({{ site.socials.mastodon.uri }}), or email me: [{{ site.email }}](mailto:{{ site.email }})

Like my stuff? Feel free to buy me a coffee: [Ko-fi]({{ site.donations.ko-fi.uri }}), <span class="nano_qr"><a href="{{ site.donations.nano.uri }}">Nano</a><span id="qrTarget"></span></span>

<style>
.nano_qr {
    position: relative;
}

.nano_qr span {
    display: none;
}

.nano_qr:hover span {
    display: block;
    position: absolute;
    z-index: 1000;
    left: 50px;
    top: 25px;
    background-color: #fff;
    padding: 0px;
    border: 2px solid black;
    border-radius: 0px;
}

#qrTarget {
  width: 200px;
  height: 200px;
}
</style>
<script src="https://larsjung.de/kjua/latest/kjua-0.9.0.min.js"></script>
<script>
var el = kjua({text: '{{ site.donations.nano.uri }}', rounded: 100, quiet: 1});
document.querySelector('#qrTarget').appendChild(el);
</script>
