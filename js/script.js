var newElements = document.getElementsByClassName("button");
var elementNumber = newElements.length;

for (var i = 0; i < elementNumber; i++) {
    var contents = newElements[i].innerText;
    alert(contents);
}