//adding a close button to every list
var myTaskList = $("li");

function addCloseButton(list) {
        var span =  document.createElement("span");       //creating a new element of type span
        var sign = document.createTextNode("\u00D7");       //creating a multiplication sign or close sign
        span.classList.add("close");
        span.appendChild(sign);                             //adding sign inside span i.e. <span> \u00D7 </span>
        list.appendChild(span);                //appending span to each list present         
        $(".close").on("click", function() {
            // $(this).parent().css("display", "none");
            console.log($(this).parent().remove());
            $(".noOfTask").html($(".todos").children().length);
            motivate($(".todos").children().length);
        });
}

function motivate(no) {
    if(no == 0) alert("Hurrah!!!! All works completed.");
    else if(no == 1) alert("Very Good, You are very close. Only one task is left.")
}

for(var i=0; i<myTaskList.length; i++) 
    addCloseButton(myTaskList[i]);

let days = ["Sunday" , "Monday" , "Tuesday", "Wednesday" , "Thusday", "Friday", "Saturday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Nov", "Dec"];

//time section
let today = new Date();
let date = today.getDate();
let day = today.getDay();
let year = today.getFullYear();
let month = today.getMonth();

let time = date + " - " + months[month] + " - " + year + " : " + days[day]; 

$(".time").html(time);
$(".noOfTask").html($(".todos").children().length);

//onclick effect for span 
function clickButton() {
    document.querySelector(".addTaskBtn").classList.add("click1");   
    setTimeout(() => {
        document.querySelector(".addTaskBtn").classList.remove("click1");   
    }, 100)
}

document.querySelector(".addTaskBtn").addEventListener("click", clickButton);

$("ul").on("click", function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle("checked");   
    }
}); 

//Excepting the new task from the user
//on click 
$(".addTaskBtn").on("click", function() {
    // $('.userInput').val("");
    let task = $(".userInput").val();
    addTask(task);    
    $(".userInput").val("");
});

//on enter keypress event
$(document).on("keypress", function(event){
    // $('.userInput').val("");
    let code = event.keycode ? event.keycode : event.which;
    if(code == "13") {

        let task = $(".userInput").val();
        addTask(task);
        $(".userInput").val("");
    }
});

//adding a new task 
function addTask(task) {
    task = task.trim();     //will remove all the extra space from front and rear
    if(task == "") 
        alert("Please write some task to add.");
    else {
        let li = document.createElement("li");
        let newTask = document.createTextNode(task);
        li.classList.add("task");
        li.append(newTask);
        $(".todos").append(li);
        addCloseButton(li);
        $(".noOfTask").html($(".todos").children().length);
    }   
}



