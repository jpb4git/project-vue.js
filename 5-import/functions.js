export const hello = () => console.log('hello')
export const showError = message => console.error(message)



/// C'est celle là, la fonction anonyme ///
export default () => {
    var _nyan = 0;
var __nyan = [[
"+      o     +              o      ",
"    +             o     +       +  ",
"o          +                       ",
"    o  +           +        +      ",
"+        o     o       +        o  ",
"-_-_-_-_-_-_-_,------,      o      ",
"_-_-_-_-_-_-_-|   /\\_/\\            ",
"-_-_-_-_-_-_-~|__( ^ .^)  +     +  ",
"_-_-_-_-_-_-_-\"\"  \"\"               ",
"+      o         o   +       o     ",
"    +         +                    ",
"o        o         o      o     +  ",
"    o           +                  ",
"+      +     o        o      +     "],
[
"+      o     +              +      ",
"    o             o     o       +  ",
"o          +                       ",
"    +  o           +        o      ",
"o        o     o       +        o  ",
"_-_-_-_-_-_-_-,------,      +      ",
"-_-_-_-_-_-_-_|   /\\_/\\            ",
"_-_-_-_-_-_-_-|__( ^ .^)  o     +  ",
"-_-_-_-_-_-_-_ \"\"  \"\"              ",
"+      +         o   +       o     ",
"    o         +                    ",
"+        +         +      +     o  ",
"    +           o                  ",
"+      o     o        o      +     "
]]

function nyan(){
    console.clear();
    console.log(__nyan[_nyan].join("\n"))
    if(_nyan == 0){ _nyan = 1; } else { _nyan = 0; }
}

window.setInterval(nyan, 300)
}
