export function load() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowH = document.documentElement.clientHeight || document.body.clientHeight;
    var h = scrollTop + windowH;
    var sh = document.documentElement.scrollHeight;
    if (sh < h + 20) {
        return true;
    }else {
        return false;
    }
}

