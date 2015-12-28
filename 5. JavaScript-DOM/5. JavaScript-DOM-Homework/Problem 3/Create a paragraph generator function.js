function createParagraph(id, text){
    var divelement= document.getElementById(id);
    var par = document.createElement('p');
    par.innerHTML = text;
    divelement.appendChild(par);
}
createParagraph('wrapper', 'Some text');
