// write js code here corresponding to matches.html


var addArr = JSON.parse(localStorage.getItem("schedule"));




function handlejobsort()
{
  var selected=document.querySelector("#filterVenue").value
  
    var filterList=addArr.filter(function (elem){
      return elem.venue==selected
    })
    displayData(filterList)
}
    

    displayData(addArr);

    var favouritesArr=JSON.parse(localStorage.getItem("favourites"))||[]
    function displayData(data){
      document.querySelector("tbody").innerHTML=""
      data.forEach(function (elem){

      var tr=document.createElement("tr");

        var td1=document.createElement("td");

          td1.innerText=elem.matchNum;

        var td2=document.createElement("td");

        td2.innerText=elem.teamA;

        var td3=document.createElement("td");

        td3.innerText=elem.teamB;

        var td4=document.createElement("td");

        td4.innerText=elem.date;


        var td5=document.createElement("td");

        td5.innerText=elem.venue;

        


        var td6=document.createElement("td")
        
        td6.innerText="favourites"

        td6.style.color="teal"

        td6.style.cursor="pointer"

        td6.addEventListener("click",function(){
          
          favourites(elem)
        });
      

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
        
      });

    }
function favourites(elem){
  // store in local storage with keyname [{}]
  favouritesArr.push(elem)
  favouritesArr.push(elem)

localStorage.setItem("favourites",JSON.stringify(favouritesArr))
  
}
    