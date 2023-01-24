function createElemen(tag, properties, styles, parentElem) {
    let parent = parentElem
    let elem = document.createElement(tag);
    for ( let propertie of properties){
        console.log(propertie, propertie[0], propertie[1])
        elem[propertie[0]] = propertie[1];
    };
    for ( let style of styles) {
        elem.style[style[0]] = style[1];
    };
    parent.appendChild(elem);
};
createElemen( tag = `input`, properties = [[ `innerHTML`, `Lorem ipsum`], [`type`, `text`], [`placeholder`, `dolor sit amet`]] , styles = [ [`fontSize`, `18px`], [`color`, `red`] ], parentElem = document.querySelector('.chort'));