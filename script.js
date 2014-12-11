var noAutoplay = {

  disableAutoplay: function() {
    var i,
        src,
        iframes = document.getElementsByTagName('iframe');

    for (i = 0; i < iframes.length; i++) {
        src = iframes[i].getAttribute('src');

        if (!src.match(/vimeo/i)) continue;

        if (src.match(/autoplay/i)) {
            src = src.replace('autoplay=1', 'autoplay=0');
            iframes[i].setAttribute('src', src);
        }

        else if (src.match(/\?/)) {
            iframes[i].setAttribute('src', src + '&autoplay=0');
        }

        else {
            iframes[i].setAttribute('src', src + '?autoplay=0');
        }

    }
  }

};

noAutoplay.disableAutoplay();
