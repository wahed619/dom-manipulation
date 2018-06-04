/* Task 1 */
var heading = document.getElementById('headimg')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
function addText2(){
    var task2div = document.getElemenById('task2a')
    var paragraph = document.createElememt('p')
    paragraph.innerText = "Hello World"
    task2div.appendChild(paragraph)
}
var textBtn = document.getElementById('textBtn2a')
textBtn.addEventListener('click', addText2)



function changeBGcolor(event){
    var body = document.getElementsByTagName('body')[0]
    if(event.target.innerText == "Red"){
        body.style.backgroundColor = 'red'
}
if(event.target.innerText == 'Green'){
    body.style.backgroundColor = 'green'
}
}
var textBtn = document.getElementById('textBtn2a')
textBtn.addEventListener('click',addText2)

//Task2b
function changeBGcolor(event){
    var body = document.getElementsByTagName('body')[0]
    if(event.target.innerText == "Red"){
        body.style.backgroundColor = 'red'
    }
    if(event.target.innerText == "Greeen"){
        body.style.backgroundColor = 'green'
    }
}
//Task 2c
function redirectToGoogle(){
    window.location.assign('http://google.com')
}

/* Task 4 using jQuery */
$('#addText4').click(function(event){
    var paragraph = $('<p>').text("Hello World");
    $('#task4a').append(paragraph);
    
});