
const coverType = document.querySelectorAll('input[name="coverType"]');

const language = document.querySelectorAll('input[name="language"]');

const originalLanguage =  document.querySelectorAll('input[name="originalLanguage"]');
const input = document.querySelectorAll('.other');
let labelCover ,leblelanguage,lebleOriginalLanguage;

document.getElementById('sumbit').addEventListener('click' , (event)=>{
   sendForm();
})

input.forEach((input) => {
    input.addEventListener('change', (event)=>{
        showInput(event);
    });
});

function showInput(event){
    const key = event.target.checked;
    let sp = event.target.parentElement.querySelector('.sp');
    let value =  event.target.parentElement.className;
    if(key==true){
        sp.innerHTML = '<input id=' + value + ' type="text" name="other" style="border:none;border-bottom:1px solid rgb(211, 208, 208);margin-bottom: 20px;">'
        document.getElementById(value).
          addEventListener('change', (event)=>{
            labelCover = event.target.value;
          });
    }
}

coverType.forEach((cover) => {
    cover.addEventListener('click', (event)=>{
        const key = event.target.className;
        if(key === "other"){
            return;
        }
        else{
            labelCover = event.target.value;
        }
    });
});
language.forEach((language) => {
    language.addEventListener('click', (event)=>{
        const key = event.target.className;
        if(key === "other"){
            return;
        }
        else{
            leblelanguage = event.target.value;
        }
    });
});

originalLanguage.forEach((language) => {
    language.addEventListener('click', (event)=>{
        const key = event.target.className;
        if(key === "other"){
            return;
        }
        else{
            lebleOriginalLanguage = event.target.value;
        }
    });
});

function sendForm() { 
    const fullName = document.querySelector('input[name="fullname"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const colour = document.querySelector('input[name="colour"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const currency = document.querySelector('input[name="currency"]').value;
    const edition = document.querySelector('input[name="edition"]').value;
    const dimensions = document.querySelector('input[name="dimensions"]').value;
    const publisher = document.querySelector('input[name="publisher"]').value;
    const genre = document.querySelector('input[name="genre"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const publisherDate = document.querySelector('input[type="date"][ name = "publisherDate"]').value;
    const originalDate = document.querySelector('input[type="date" ][name = "originalDate"]').value;
    const coverType = labelCover;
    const originalLanguage =  lebleOriginalLanguage;
    const language = leblelanguage;

    
     if (fullName == "") {
        return
    }
    if (title == "" ) {
        return
    }
    if (author == "") {
        return
    }
    if (number == "" ) {
        return
    }
    if (price == "") {
        return
    }
    if (currency == "" ) {
        return
    }
    if (publisher == "") {
        return
    }
    if (genre == "" ) {
        return
    }
    if(publisherDate == ""){
        return
    }
    if (!coverType) {
        return
    }
    if (!language) {
        return
    }
    const data = {
        "owner":"MeriMadanyan",
        "project":"Book",
        fullName,
        title,
        author, 
        colour, 
        number, 
        price, 
        currency,
        edition,
        dimensions,
        publisher, 
        genre,
        age,
        publisherDate,
        originalDate,
        coverType,
        originalLanguage,
        language,
    }
    console.log(data);
     $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-meri.herokuapp.com/data",
    data: data,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });
}

function loadExistingData() {
	var existingData = [];
  $.ajax({
    type : "GET",
    url : "https://cse120-2021-api.herokuapp.com/data",
    dataType : "json",
    success : function(data) {
      console.log("success", data);
      existingData = data;
      displayData(existingData.data);
    },
    error : function(data) {
        console.log("Error")
    }
  });
}

function displayData(existingData) {
  document.getElementById("existingData").innerHTML = "<ul>";
  for (var i = 0; i < existingData.length; i++) {
    currentBook = existingData[i];
    document.getElementById("existingData").innerHTML += "<li><i>" + currentBook.fullname + "</li> : <b>" + currentBook.title + "</b></li>";
  }
  document.getElementById("existingData").innerHTML += "</ul>"
}

    
function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == true) {
      
    } else {
      return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api.herokuapp.com/data/delete",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function saveData() {
	var tmp = {
		"test": "Data"
	}

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api.herokuapp.com/data",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
        	console.log("success");
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function loadExistingData() {
    $.ajax({
        type : "GET",
        url : "https://cse120-2021-api.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
        	console.log("success", data);
            displayData(data.data);
        },
        error : function(data) {
            console.log("Error")
        }
    });
}

function displayData(data) {
    document.getElementById("dataContainer").innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            var span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                var span = document.createElement("span");

                var b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    var span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "N/A";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                var br = document.createElement("br");
                item.appendChild(br);
            }
        })
        var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = elem["_id"];
        button.addEventListener("click", function(e){
            deleteData(e.target.id);
        }, false);
        item.appendChild(button);
        document.getElementById("dataContainer").appendChild(item);
    })

}

var loadedData = [];

function loadEditItem() {
    localStorage = window.localStorage;
    editItem = JSON.parse(localStorage.getItem("editItem"));
    console.log(editItem);
    document.getElementById("_id").innerHTML = editItem["_id"];
    document.getElementById("title").value = editItem["title"];
    document.getElementById("fullname").value = editItem["fullName"];   
    document.getElementById("author").value = editItem["author"];   
    document.getElementById("pages").value = editItem["noOfPgs"];
}

function editData(id) {
    var tmp = id.split("edit_");
    var item_id = tmp[1];

    loadedData.forEach(item => {
        if (item._id == item_id) {
            console.log(item); 
            localStorage = window.localStorage;
            localStorage.setItem('editItem', JSON.stringify(item));
            document.location  = "form.html"; 
        }
    })
}

function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == false) {
        return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api.herokuapp.com/data/delete",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function saveData() {
	var tmp = {
		"test": "Data"
	}

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api.herokuapp.com/data",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
        	console.log("success");
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function loadExistingData() {
  myDancingData = [];
  myBookData = [];
  otherData = [];
  $.ajax({
      type : "GET",
      url : "https://cse120-2021-api.herokuapp.com/data",
      dataType : "json",
      success : function(data) {
        console.log("success", data);
        data.data.forEach(elem => {
          if (elem["owner"] == "Meri Madanyan") {
            if (elem["project"] == "Dancing") {
              myDancingData.push(elem);
            } else {
              myBookData.push(elem);
            }
          } else {
            otherData.push(elem);
          }
        })
        displayData(myDancingData, "dancingDataContainer");
        displayData(myBookData, "bookDataContainer");
        displayData(otherData, "otherDataContainer");
      },
      error : function(data) {
          console.log("Error")
      }
  });
}

function displayData(data, containerDivName) {
    loadedData = data;
    document.getElementById(containerDivName).innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            var span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                var span = document.createElement("span");

                var b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    var span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "N/A";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                var br = document.createElement("br");
                item.appendChild(br);
            }
        })
        var edit_button = document.createElement("button");
        edit_button.innerHTML = "Edit";
        edit_button.id = "edit_" + elem["_id"];
        edit_button.className = "edit";
        edit_button.addEventListener("click", function(e){
            editData(e.target.id);
        }, false);
        item.appendChild(edit_button);

        var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = elem["_id"];
        button.addEventListener("click", function(e){
            deleteData(e.target.id);
        }, false);
        item.appendChild(button);
        document.getElementById(containerDivName).appendChild(item);
    })

}

function toggleOtherData() {
  var otherData = document.getElementById("otherDataContainer");
  if (otherData.style.display == "block") {
    otherData.style.display = "none";
  } else {
    otherData.style.display = "block";
  }
}
