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
        sp.innerHTML = '<input id='+ value +'type="text" name="other" style="border:none;border-bottom:1px solid rgb(211, 208, 208);margin-bottom: 20px;">';
       
        document.querySelector(`#${value}`).addEventListener('change', (event)=>{
            if (value == 'language ') {
                leblelanguage = event.target.value;
                
            }
            if (value == 'like ') {
                leblelike = event.target.value;
            }
          });
    }
}



typeOfDancesYouDo.forEach((language) => {
    language.addEventListener('click', (event)=>{
        const key = event.target.className;
        let input = document.querySelector(`#language`);
        if(key === "other"){
            return;
        }
        else{
            if(input){
              input.remove();
            }
            leblelanguage = event.target.value;
        }
    });
});


yourGender.forEach((gender) => {
    gender.addEventListener('click', (event)=>{
        leblegender = event.target.value;
    });
});


perceptionOfDancing.forEach((perception) => {
    perception.addEventListener('click', (event)=>{
        lebleperception = event.target.value;
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
      document.location.replace ("add.html");
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
    if (r != true) {
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
            window.location.reload();

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
 let labelCover,leblelanguage,lebleOriginalLanguage;
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));

if (document.getElementById("checkCoverHardcover").checked === true) {
    labelCover = "hardcover";
  } else if (document.getElementById("checkCoverPaperBack").checked === true) {
    labelCover = "paperBack";
  } else if(document.getElementById("checkCoverOther").checked === true){
    labelCover = document.getElementById("coverInput").value;
  }

  if (document.getElementById("checkEnglish").checked === true) {
    leblelanguage = "english";
  } else if (document.getElementById("checkArmenian").checked === true) {
    leblelanguage = "armenian";
  } else if (document.getElementById("checkRussian").checked === true) {
    leblelanguage = "russian";
  } else if (document.getElementById("checkFrench").checked === true) {
    leblelanguage = "french";
  } else if(document.getElementById("checkLanguageOther").checked === true){
    leblelanguage = document.getElementById("languageInput").value;
  }

  if (document.getElementById("checkOriginEnglish").checked === true) {
    lebleOriginalLanguage = "english";
  } else if (document.getElementById("checkOriginArmenian").checked === true) {
    lebleOriginalLanguage = "armenian";
  } else if (document.getElementById("checkOriginRussian").checked === true) {
    lebleOriginalLanguage = "russian";
  } else if (document.getElementById("checkOriginFrench").checked === true) {
    lebleOriginalLanguage = "french";
  }
  else if(document.getElementById("checkOriginLanguageOther").checked === true){
      lebleOriginalLanguage = document.getElementById("originLanguageInput").value;
  }
  let tmp = {
    "id" : editItem._id,
    "title" : document.getElementById("title").value,
    "fullName":document.getElementById("fullName").value,
    "author":document.getElementById("author").value, 
    "colour":document.getElementById("colour").value,
    "number":document.getElementById("page").value, 
    "price": document.getElementById("price").value,
    "currency":document.getElementById("currency").value,
    "edition": document.getElementById("edition").value,
    "publisher":document.getElementById("pubDate").value , 
    "genre":   document.getElementById("genre").value,
    "age": document.getElementById("age").value,
    "publisherDate": document.getElementById("publisher").value,
    "originalDate": document.getElementById("origPubDate").value,
    "coverType": labelCover ,
    "originalLanguage":lebleOriginalLanguage ,
    "language":leblelanguage
     
  }
  console.log(tmp);
    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-meri.herokuapp.com/data/update",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.location.replace ("admin.html");
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
  let lebleDoYou, leblegender, leblelike, lebleperception;
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  const id = editItem._id;

      if ( document.getElementById("checkMale").checked === true) {
        leblegender = "Male"
      } 
      else if ( document.getElementById("checkFemale").checked === true) {
          leblegender = "Female";
      } 

      if(document.getElementById("checkBallet").checked === true){
        lebleDoYou = "Ballet";
      }
      else if( document.getElementById('checkHipHop').checked === true){
        lebleDoYou = "Hip Hop";
      }
      else if(document.getElementById('checkContemporary').checked === true){
        lebleDoYou = "Contemporary";
      }
      else if( document.getElementById('checkFolk').checked === true){
        lebleDoYou = "Folk";
      }
      else if(document.getElementById('typeOFDanceOther').checked === true){
        lebleDoYou = document.getElementById('typeOfDanceInput').value;

      }


      if(document.getElementById("checkHobby").checked === true){
        lebleperception = "A hobby";

      }
      else if(  document.getElementById('checkArt').checked === true){
        lebleperception = "An art"
      }
      else if(document.getElementById('checkProfession').checked === true){
        
        lebleperception = "A profession";
      }
      else if( document.getElementById('checkSport').checked === true){
       
        lebleperception = "A sport";
      }

  
    
      if(document.getElementById("checkModern").checked === true){
        leblelike = "Modern types of dancing";
      }
      else if(document.getElementById('checkClassic').checked === true){
        leblelike = "Classic types of dancing";
      }
      else if( document.getElementById('checkLike').checked === true){
        leblelike = "I like both styles same way";
      }
      else if(document.getElementById('checkMovement').checked === true){
        leblelike = "I like the movement of one style and the costumes of another";
      }
        else if( document.getElementById('checkappealingOther').checked === true){

        leblelike = document.getElementById('appealingInput').value;

      }



  var tmp = {
    "id" : id,
    "fullName": document.getElementById("fullName").value,
    "dateofBirth": document.getElementById("BirthDate").value,
    "yourGender":  leblegender,
    "yearsofDancing":  document.getElementById("beDancing").value,
    "typeOfDancesYouLike": leblelike,
    "perceptionOfDancing":lebleperception, 
    "roleModel":  document.getElementById("role").value, 
    "experiencewithPartnerDances":  document.getElementById("partenDanc").value, 
    "needForSpecialSportsWear":  document.getElementById("sportswear").value , 
    "participationInCompetitions":  document.getElementById("competition").value ,
    "namesOfCompetitions":  document.getElementById("question").value,
    "typeOfDancesYouDo":  lebleDoYou, 
  }
  console.log(tmp);
  
    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-meri.herokuapp.com/data/update",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.location.replace ("admin.html");
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
            //span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
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
    if (editItem["yourGender"]) {
      if (editItem["yourGender"] == "Male") {
        document.getElementById("checkMale").checked = true;
      } 
      else if (editItem["yourGender"] == "Female") {
          document.getElementById("checkFemale").checked = true;
      } 
    }
     if(editItem["typeOfDancesYouDo"]){
      if(editItem["typeOfDancesYouDo"] == "Ballet"){
        document.getElementById("checkBallet").checked = true;
      }
      else if(editItem["typeOfDancesYouDo"] == "Hip Hop"){
        document.getElementById('checkHipHop').checked = true;
      }
      else if(editItem["typeOfDancesYouDo"] == "Contemporary"){
        document.getElementById('checkContemporary').checked = true;
      }
      else if(editItem["typeOfDancesYouDo"] == "Folk"){
        document.getElementById('checkFolk').checked = true;
      }
      else if(editItem["typeOfDancesYouDo"] != "Ballet" && editItem["typeOfDancesYouDo"] != "Hip Hop" && editItem["typeOfDancesYouDo"] != "Folk" && editItem["typeOfDancesYouDo"] != "Contemporary"){
        document.getElementById('typeOFDanceOther').checked = true;
        document.getElementById('typeOfDanceInput').value = editItem["typeOfDancesYouDo"] ;

      }
    }
    if(editItem["perceptionOfDancing"]){
      if(editItem["perceptionOfDancing"] == "A hobby"){
        document.getElementById("checkHobby").checked = true;
      }
      else if(editItem["perceptionOfDancing"] == "An art"){
        document.getElementById('checkArt').checked = true;
      }
      else if(editItem["perceptionOfDancing"] == "A profession"){
        document.getElementById('checkProfession').checked = true;
      }
      else if(editItem["perceptionOfDancing"] == "A sport"){
        document.getElementById('checkSport').checked = true;
      }

    }
    if(editItem["typeOfDancesYouLike"]){
      if(editItem["typeOfDancesYouLike"] == "Modern types of dancing"){
        document.getElementById("checkModern").checked = true;
      }
      else if(editItem["typeOfDancesYouLike"] == "Classic types of dancing"){
        document.getElementById('checkClassic').checked = true;
      }
      else if(editItem["typeOfDancesYouLike"] == "I like both styles same way"){
        document.getElementById('checkLike').checked = true;
      }
      else if(editItem["typeOfDancesYouLike"] == "I like the movement of one style and the costumes of another"){
        document.getElementById('checkMovement').checked = true;
      }
        else {
        document.getElementById('checkappealingOther').checked = true;
        document.getElementById('appealingInput').value = editItem["typeOfDancesYouLike"] ;

      }

    }
  document.getElementById("fullName").value = editItem["fullName"];
  document.getElementById("BirthDate").value = editItem["dateofBirth"];
  document.getElementById("beDancing").value = editItem["yearsofDancing"];    
  document.getElementById("role").value = editItem["roleModel"]; 
  document.getElementById("partenDanc").value = editItem["experiencewithPartnerDances"]; 
  document.getElementById("sportswear").value = editItem["needForSpecialSportsWear"]; 
  document.getElementById("competition").value = editItem["participationInCompetitions"]; 
  document.getElementById("question").value = editItem["namesOfCompetitions"];
  }
  else{
  if (editItem["coverType"]) {
      if (editItem["coverType"] == "hardcover") {
        document.getElementById("checkCoverHardcover").checked = true;
      } 
      else if (editItem["coverType"] == "paperBack") {
          document.getElementById("checkCoverPaperBack").checked = true;
      } else {
        document.getElementById("checkCoverOther").checked = true;
        document.getElementById("coverInput").value = editItem["coverType"];
      }
    }
    if(editItem["language"]){
      if(editItem["language"] == "english"){
        document.getElementById("checkEnglish").checked = true;
      }
      if(editItem["language"] == "armenian"){
        document.getElementById('checkArmenian').checked = true;
      }
      if(editItem["language"] == "russian"){
        document.getElementById('checkRussian').checked = true;
      }
      if(editItem["language"] == "french"){
        document.getElementById('checkFrench').checked = true;
      }
      else if(editItem["language"] != "english" && editItem["language"] != "armenian" && editItem["language"] != "russian" && editItem["language"] != "french"){
        document.getElementById('checkLanguageOther').checked = true;
        document.getElementById('languageInput').value = editItem["language"] ;

      }
    }

    if(editItem["originalLanguage"]){
      if(editItem["originalLanguage"] === "english"){
        document.getElementById("checkOriginEnglish").checked = true;
      }
      else if(editItem["originalLanguage"] === "armenian"){
        document.getElementById('checkOriginArmenian').checked = true;
      }
      else if(editItem["originalLanguage"] === "russian"){
        document.getElementById('checkOriginRussian').checked = true;
      }
      else if(editItem["originalLanguage"] === "french"){
        document.getElementById('checkOriginFrench').checked = true;
      }
      else if(editItem["originalLanguage"] !== "english" && editItem["originalLanguage"] !== "armenian" && editItem["originalLanguage"] !== "russian" && editItem["originalLanguage"] !== "french"){
        document.getElementById('checkOriginLanguageOther').checked = true;
        document.getElementById('originLanguageInput').value = editItem["originalLanguage"] ;
  
      }
    }

    document.getElementById("fullName").value = editItem["fullName"];
    document.getElementById("title").value = editItem["title"];
    document.getElementById("author").value = editItem["author"];
    document.getElementById("colour").value = editItem["colour"];
    document.getElementById("page").value = editItem["number"];
    document.getElementById("price").value = editItem["price"];
    document.getElementById("currency").value = editItem["currency"];
    document.getElementById("edition").value = editItem["edition"];
    document.getElementById("publisher").value = editItem["publisher"];
    document.getElementById("dimensions").value = editItem["dimensions"];
    document.getElementById("pubDate").value = editItem["publisherDate"];
    document.getElementById("origPubDate").value = editItem["originalDate"];
    document.getElementById("genre").value = editItem["genre"];
    document.getElementById("age").value = editItem["age"];
  }

}
