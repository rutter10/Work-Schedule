// Current Date / Time using Moment
var currentDate = moment().format("dddd , Do MMM YYYY")
var currentHour = moment().format("h:mm:ss a")

// Time variables for local storage
var nine = $("#9am")
var ten = $("#10am")
var eleven = $("#11am")
var twelve = $("#12pm")
var one = $("#13pm")
var two = $("#14pm")
var three = $("#15pm")
var four = $("#16pm")
var five = $("#17pm")

// This does not work... parseInt needs a number larger than 9 for condition statement
// IDs need to change, variables changed to match IDs
// var one = $("#1pm")
// var two = $("#2pm")
// var three = $("#3pm")
// var four = $("#4pm")
// var five = $("#5pm")

var hour = moment().hours()
var userInput;
var hourSpan;

var interval = setInterval(function(){
    var momentNow = moment();
    $("#currentDay").html(momentNow.format("YYYY MMM DD, dddd"))
    $("#currentDay").html(currentDate + " " + momentNow.format("h:mm:ss a"))    
}, 100)

function initPage(){

    var init9 = JSON.parse(localStorage.getItem("9:00am"))
    nine.val(init9)

    var init10 = JSON.parse(localStorage.getItem("10:00am"))
    ten.val(init10)

    var init11 = JSON.parse(localStorage.getItem("11:00am"))
    eleven.val(init11)

    var init12 = JSON.parse(localStorage.getItem("12:00pm"))
    twelve.val(init12)

    var init13 = JSON.parse(localStorage.getItem("1:00pm"))
    one.val(init13)

    var init14 = JSON.parse(localStorage.getItem("2:00pm"))
    two.val(init14)

    var init15 = JSON.parse(localStorage.getItem("3:00pm"))
    three.val(init15)

    var init16 = JSON.parse(localStorage.getItem("4:00pm"))
    four.val(init16)

    var init17 = JSON.parse(localStorage.getItem("5:00pm"))
    five.val(init17)
}


// conditional statement that checks what current time and compares with each time slot, and styles appropriately.
function timeCheck() {
    $(".event").each(function(){
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);

        if (hour > timeTest) {
            $(this).addClass("past")
        } else if (hour < timeTest) {
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
    })
}

$(document).ready(function(){
    initPage()
    timeCheck()

    $(".saveBtn").on("click", function(){
        userInput = $(this).siblings(".event").val()
        console.log(userInput)
        hourSpan = $(this).siblings(".hour").text()
        console.log(hourSpan)
        localStorage.setItem(hourSpan, JSON.stringify(userInput))
    })
})