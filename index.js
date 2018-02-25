// var libraries = new XMLHttpRequest();
// libraries.open("GET", "colors.json", false);

// libraries.send();
// if (libraries.status != 200) {
//   console.log( libraries.status + ': ' + libraries.statusText ); // пример вывода: 404: Not Found
// } else {
//   // вывести результат
//  document.write( libraries.responseText ); // responseText -- текст ответа.
// }

fetch('./colors.json')
  .then(function(response) {
    console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
    console.log(response.status); // 200

    return response.json();
   })
  .then(function(user) {
    console.log(user.name); // iliakan
  })
  .catch( alert );