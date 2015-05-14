jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"images",
        titleinbarwidthmode:"fixed",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"",
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:400,
        loadingformat:"Loading...",
        prevnextimage:"prevnext-24-24-1.png",
        showinfo:true,
        imageheight:400,
        skin:"LightBox",
        loopimage:"loop-24-24-2.png",
        loopimagewidth:24,
        showstop:false,
        prevnextimageheight:24,
        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",
        stopotherplayers:true,
        showloading:true,
        forcefirefoxflash:false,
        showvolumebar:true,
        imagefullwidth:true,
        width:800,
        showtitleinbar:false,
        showloop:true,
        volumeimage:"volume-24-24-2.png",
        playpauseimagewidth:24,
        loopimageheight:24,
        tracklistitem:10,
        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",
        prevnextimagewidth:24,
        tracklistarrowimage:"tracklistarrow-16-16-1.png",
        playpauseimageheight:24,
        showbackgroundimage:false,
        imagewidth:800,
        stopimage:"stop-24-24-1.png",
        playpauseimage:"playpause-24-24-2.png",
        showprevnext:true,
        backgroundimage:"",
        autoplay:false,
        volumebarpadding:8,
        progressheight:8,
        showtracklistbackgroundimage:false,
        titleinbarscroll:true,
        showtitle:true,
        defaultvolume:-1,
        tracklistarrowimageheight:16,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        volumebarheight:80,
        noncontinous:false,
        tracklistbackgroundimage:"",
        showbarbackgroundimage:false,
        showimage:true,
        tracklistarrowimagewidth:16,
        timeformat:"%CURRENT% / %DURATION%",
        showvolume:true,
        fullwidth:false,
        loop:1,
        preloadaudio:true
    });
});