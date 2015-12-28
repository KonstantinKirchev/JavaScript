window.HTMLGen = function() {

};

HTMLGen.createLink = function(id, text, url){
    var theATag = document.createElement('a');
    var linkText = document.createTextNode(text);
    theATag.appendChild(linkText);

    theATag.href = url;

    var element = document.getElementById(id);
    element.appendChild(theATag);
}

HTMLGen.createDiv = function(id, aClass){
    var theDiv = document.createElement('div');
    theDiv.className = aClass;

    var element = document.getElementById(id);
    element.appendChild(theDiv);
}

HTMLGen.createParagraph = function(id, text){
    var theParagraph = document.createElement('p');
    var theTextNode = document.createTextNode(text);

    theParagraph.appendChild(theTextNode);

    var element = document.getElementById(id);
    element.appendChild(theParagraph);
}

document.onload = function loadHTML(){
    window.location = 'CreateHTMLGeneratorObject.html';
};

HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createParagraph('wrapper', 'Soft Uni');
