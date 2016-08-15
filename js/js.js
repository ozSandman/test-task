
var url = 'http://cm.mmi.macc.com.ua/tests/sample.php';
var ajax = new XMLHttpRequest();
var data;

ajax.open("GET", url, true);
ajax.send(null);
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && (ajax.status == 200)) {
        data = JSON.parse(ajax.responseText);
            for (var i = 0; i < data.length; i++) {
                buildTable(data[i]);
            }
    }
};

var tbody = document.getElementById("tbody");
var table = document.querySelector('.table');
var modalName = document.getElementById("modal-title");
var modalImg = document.getElementById("modal-img");
var modalAuthor = document.getElementById("modal-author");
var modalDate = document.getElementById("modal-date");
var modalNumber = document.getElementById("modal-number");
var modalDescription = document.getElementById("description");

table.addEventListener('click', function(event) {
    var target = event.target;
    while(target.nodeName !== "TR") {
        target = target.parentNode;
    }

    var bookData = target.bookData;
    if(bookData) {
        var modal = $('.modal');

        modalName.innerHTML = bookData.name;
        modalImg.setAttribute("src", bookData.img);
        modalAuthor.innerHTML = bookData.author;
        modalDate.innerHTML = bookData.date;
        modalNumber.innerHTML = bookData.number;
        modalDescription.innerHTML = bookData.description;

        modal.modal('toggle');
    }
});

function buildTable(data) {
    var newTr = document.createElement("tr");
    newTr.bookData = data;
    newTr.innerHTML = "<td>" + data.id + "</td>" +
                        "<td>" + data.name + "</td>" +
                        "<td>" + data.author + "</td>" +
                        "<td>" + data.date + "</td>" +
                        "<td>" + data.number + "</td>";

    tbody.appendChild(newTr);
}