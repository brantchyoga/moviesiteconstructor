// Backend
function ticket(movie,time,age){
  this.movie= movie;
  this.time = time;
  this.age = age;
}

// var savingPrivateRyan = new ticket ("saving private ryan", ["4:30", "5:30", "9:30"], ["64+", "18+"] );
// var italianJob = new ticket ("Italian Job", ["4:30", "5:30", "9:30"], ["64+", "18+", "13+"])

ticket.prototype.ticketCalc=function(){

  var ticketPrice = 10;
  if ((this.movie === "saving private ryan"|| this.movie ==="the longest day") && (this.age === "13+" || this.age === "3+")) {
    return alert("You shall not pass!");
  } else if ((this.movie === "italian job") && (this.age === "3+")) {
    return alert("You shall not pass!");
  }else if ((this.age === "64+" || this.age=== "3+") && (this.time === "4:30")){
     return ticketPrice - 5;
  }else if ((this.age === "64+" || this.age=== "3+") || (this.time === "4:30")){
     return ticketPrice -3;
  }else{
    return ticketPrice;
  }
}





// userinterface
$(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    var movieChoice = $("#movies").val();
    var age = $("input:radio[name=age]:checked").val();
    var movieTime = $("input:radio[name=time]:checked").val();
    var ticketNew = new ticket(movieChoice, movieTime, age);
    console.log(ticketNew.ticketCalc());
    $("#title").text(ticketNew.movie);
    $("#price").text("$"+ticketNew.ticketCalc());
  });
});
