function easter_eggs() {
    var iframe = "<title>Easter Egg</title><iframe title='Easter_Egg' src='./easter_egg/index.html'></iframe>";
    var css = "<style>html {overflow: hidden;user-select:none;-webkit-user-select:none;} iframe {position: absolute;left: 0;top: 0;width: 100%;height: 100%;}</style>";
    document.write(iframe + css);
}
var times=0;
function go_easter_eggs() {
    if(times == 5) {
        easter_eggs();
    }
}