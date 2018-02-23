var libraries = new XMLHttpRequest();
libraries.open("GET", "colors.json", false);

libraries.send();
if (libraries.status != 200) {
  console.log( libraries.status + ': ' + libraries.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
 document.write( libraries.responseText ); // responseText -- текст ответа.
}