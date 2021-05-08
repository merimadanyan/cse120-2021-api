const typeOfDancesYouDo = document.querySelectorAll('input[name="language"]');

const yourGender = document.querySelectorAll('input[name="gender"]');

const typeOfDancesYouLike = document.querySelectorAll('input[name="like"]');

const perceptionOfDancing = document.querySelectorAll('input[name="perception"]');

let data= {};

const input = document.querySelectorAll('.other');


let leblelanguage, leblegender, leblelike, lebleperception;
if (document.getElementById('submit')!=null) {
 document.getElementById('submit').addEventListener('click' , (event)=>{
   sendForm();
})
}

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
            if (value === 'language') {
                leblelanguage = document.getElementById(`${value}`).value;
            }
            if (value === 'like') {
                leblelike = document.getElementById(`${value}`).value;
            }
          });
    }
}


typeOfDancesYouDo.forEach((language) => {
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


yourGender.forEach((gender) => {
    gender.addEventListener('click', (event)=>{
        const key = event.target.className;
        if(key === "other"){
            return;
        }
        else{
            leblegender = event.target.value;
        }
    });
});


perceptionOfDancing.forEach((perception) => {
    perception.addEventListener('click', (event)=>{
        const key = event.target.className;
        if(key === "other"){
            return;
        }
        else{
            lebleperception = event.target.value;
        }
    });
});

typeOfDancesYouLike.forEach((like) => {
    like.addEventListener('click', (event)=>{
        const key = event.target.className;
        if(key === "other"){
            return;
        }
        else{
            leblelike = event.target.value;
        }
    });
});

function sendForm() { 
    const fullName = document.querySelector('input[name="fullname"]').value;
    const dateofBirth = document.querySelector('input[type="date" ][name = "originalDate"]').value;
    const yourGender = leblegender;
    const yearsofDancing = document.querySelector('input[name="author"]').value;
    const typeOfDancesYouLike = leblelike;
    const perceptionOfDancing = lebleperception;
    const roleModel = document.querySelector('input[name="edition"]').value;
    const experiencewithPartnerDances = document.querySelector('input[name="dimensions"]').value;
    const needForSpecialSportsWear = document.querySelector('input[name="publisher"]').value;
    const participationInCompetitions = document.querySelector('input[name="genre"]').value;
    const namesOfCompetitions = document.querySelector('input[name="age"]').value;
    const typeOfDancesYouDo = leblelanguage; 
    
    
    if (fullName == "") {
        return
    }
    if ( dateofBirth == "" ) {
        return
    }
    if (!yourGender) {
        return
    }
    if(!typeOfDancesYouDo){
        return;
    }
    if (!perceptionOfDancing) {
        return
    }
    if (!typeOfDancesYouLike) {
        return
    }

    if (yearsofDancing == "") {
        return
    }
    if (needForSpecialSportsWear == "" ) {
        return
    }
    if (participationInCompetitions == "") {
        return
    }

    data = {
        "owner":"MeriMadanyan",
        "project":"Dance",
        fullName,
        dateofBirth,
        yourGender,
        yearsofDancing,
        typeOfDancesYouLike,
        perceptionOfDancing, 
        roleModel, 
        experiencewithPartnerDances, 
        needForSpecialSportsWear, 
        participationInCompetitions,
        namesOfCompetitions,
        typeOfDancesYouDo,       
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



function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == true) {
      
    } else {
      return;
    }

    let tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-meri.herokuapp.com/data/delete",
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

function updateBook() {
  console.log('true')
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem)
  var tmp = {
    "id" : editItem._id,
    "title" : document.getElementById("title").value,
    "fullName":document.getElementById("fullName").value,
    "author":document.getElementById("author").value, 
    "colour":document.getElementById("colour").value,
    "number":document.getElementById("page").value, 
    "price": document.getElementById("price").value,
    "currency":document.getElementById("currency").value,
    "edition": document.getElementById("editionForm").value,
    "publisher":document.getElementById("pubDateForm").value , 
    "genre":   document.getElementById("genreForm").value
    //"age": document.getElementById("agerestrictForm").value;
    //"publisherDate": document.getElementById("publisherForm").value,
    //"originalDate": document.getElementById("origPubDateForm").value,
    //"coverType":  document.getElementById("coverType").value;
    //"originalLanguage": document.getElementById("origLangForm").value,
    //"language":document.getElementById("language").value 
  }
    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-meri.herokuapp.com/data/update",
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

function updateDance() {
  console.log('true')
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem)
  const id = editItem._id
  var tmp = {
    "id" : id,
    "fullName": document.getElementById("fullName").value,
    "dateofBirth": document.getElementById("BirthDate").value,
    "yourGender":  document.getElementById("gender").value,
    "yearsofDancing":  document.getElementById("beDancing").value,
    // "typeOfDancesYouLike": document.getElementById("typeDance").value,
    // perceptionOfDancing, 
    "roleModel":  document.getElementById("role").value, 
    "experiencewithPartnerDances":  document.getElementById("partenDanc").value, 
    "needForSpecialSportsWear":  document.getElementById("sportswear").value , 
    "participationInCompetitions":  document.getElementById("competition").value,
    "namesOfCompetitions":  document.getElementById("question").value,
    "typeOfDancesYouD":  document.getElementById("styleDenc").value, 
  }
  
    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-meri.herokuapp.com/data/update",
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
  myBookData = [];
  myDanceData = [];
  otherData = [];
    $.ajax({
        type : "GET",
        url : "https://cse-120-2021-api-meri.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
          loadedData = data.data;
        	console.log("success", data);
            data.data.forEach(elem => {
          if (elem["owner"] == "MeriMadanyan") {
            if (elem["project"] == "Book") {
              myBookData.push(elem);
            } else {
              myDanceData.push(elem);
            }
          } else {
            otherData.push(elem);
          }
        })
        displayData(myBookData, "bookDataContainer");
        displayData(myDanceData, "danceDataContainer");
        displayData(otherData, "otherDataContainer");
      },
        error : function(data) {
            console.log("Error");
        }
    });
}

function displayData(data, containerDivName) {
    document.getElementById(containerDivName).innerHTML = "";
    data.forEach(elem => {
        let item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            let span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                let span = document.createElement("span");

                let b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    let span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "N/A";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                let br = document.createElement("br");
                item.appendChild(br);
            }
        })

        if (elem["owner"] == "MeriMadanyan") {
          let button2 = document.createElement("button");
          button2.innerHTML = "Edit";
          button2.className = "editButton";
          button2.id = "edit_"+ elem["_id"];
          button2.addEventListener("click", function(e){
          editData(e.target.id);
          }, false);
          item.appendChild(button2);
        }

        if (elem["owner"] == "MeriMadanyan" || (elem["fullname"] && elem["fullname"].indexOf("MeriMadanyan") > -1)) {
          let button = document.createElement("button");
          button.innerHTML = "Delete";
          button.id = elem["_id"];
          button.addEventListener("click", function(e){
          deleteData(e.target.id);
          }, false);
          item.appendChild(button);
         }
         document.getElementById(containerDivName).appendChild(item);
     
    })

}

function toggleOtherData() {
  let otherData = document.getElementById("otherDataContainer");
  if (otherData.style.display == "block") {
    otherData.style.display = "none";
  } else {
    otherData.style.display = "block";
  }
}



let loadedData = [];

function editData(id){
 var tmp = id.split("edit_");
 var item_id = tmp[1];
 console.log(item_id);

loadedData.forEach(item => {
    if (item._id == item_id && item["owner"] == "MeriMadanyan") {
        console.log(item); 
        localStorage = window.localStorage;
        localStorage.setItem('editItem', JSON.stringify(item));
        if (item["project"] == "Book") {
          document.location  = "edit.book.html"; 
        } else {
          document.location  = "edit.hobby.html"; 
        }
    }
  })
}

function loadEditItem() {
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem)
  const project = editItem.project

  if(project === 'Dance'){
  document.getElementById("fullName").value = editItem["fullName"];
  document.getElementById("BirthDate").value = editItem["yourGender"];
  document.getElementById("gender").value =editItem["dateofBirth"];
  document.getElementById("beDancing").value = editItem["yearsofDancing"];  
  document.getElementById("typeDance").value = editItem["typeOfDancesYouDo"]; 
  document.getElementById("styleDenc").value = editItem["typeOfDancesYouLike"]; 
  document.getElementById("describes").value = editItem["perceptionOfDancing"]; 
  document.getElementById("role").value = editItem["roleModel"]; 
  document.getElementById("partenDanc").value = editItem["experiencewithPartnerDances"]; 
  document.getElementById("sportswear").value = editItem["needForSpecialSportsWear"]; 
  document.getElementById("competition").value = editItem["participationInCompetitions"]; 
  document.getElementById("question").value = editItem["namesOfCompetitions"];
  }
  else{
  document.getElementById("fullName").value = editItem["fullName"];
  document.getElementById("title").value = editItem["title"];
  document.getElementById("author").value =editItem["author"];
  document.getElementById("colour").value = editItem["colour"];  
  document.getElementById("coverType").value = editItem["coverType"]; 
  document.getElementById("page").value = editItem["number"]; 
  document.getElementById("price").value = editItem["price"]; 
  document.getElementById("currency").value = editItem["currency"]; 
  document.getElementById("language").value = editItem["language"]; 
  document.getElementById("origLangForm").value = editItem["originalLanguage"]; 
  document.getElementById("editionForm").value = editItem["edition"]; 
  document.getElementById("publisherForm").value = editItem["publisher"];
   document.getElementById("pubDateForm").value = editItem["publisherDate"];
     document.getElementById("origPubDateForm").value = editItem["originalDate"];
      document.getElementById("genreForm").value = editItem["genre"];
     document.getElementById("agerestrictForm").value = editItem["age"];
  }

}
