$(document).ready(function(){

var totalCalorieCount = 0;
var cal = 0;

    $("#sbmt").on("click", function(event){
      event.preventDefault();
      if($("#name").val()===""){
          alert("Search input cannot be empty");
          return;
      }
      $("#main-table > tbody").empty();
      $("#results").empty();
        var rstrnt = $("#name").val().trim();
        var queryURL = "https://api.nutritionix.com/v1_1/search/"+ rstrnt + "?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=9eacd9de&appKey=cabf4ade817ceab05e66dc17ecb50cd6";
        $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        for(var i=0;i<response.hits.length;i++){
            var name = response.hits[i].fields.brand_name;
            var item = response.hits[i].fields.item_name;
            var calories = response.hits[i].fields.nf_calories;
     // $("#results").append("<b>Location: </b>" + name + ", "+ "<b>Name of item: </b>" + item + ", " + "<b>Calories: </b>" + calories + "<br>");
      $("#main-table > tbody").append("<tr id=row" + [i] + "><td>" + name + "</td><td>" + item + "</td><td>" +
          calories + "<button class= tbtn id=item" + [i] + " value=" + calories + ">Add to total</button></td></tr>");
          $("#name").val("");
        }
     
    });
    

});

$(document).on("click", ".tbtn", function(event){
    event.preventDefault();
    
   cal = parseFloat($(this).val());
   totalCalorieCount += cal;

   $("#calNum").html(totalCalorieCount);
    
 

  });

$("#clrbtn").on("click", function(){
  $("#calNum").html(0);
  totalCalorieCount = 0;

})
   
});