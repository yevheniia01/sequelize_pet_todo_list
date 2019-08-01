$(document).ready(function(){

$('#todoBtn').on('click', function(){
let inputValue = $('#todoInput').val()
$.ajax({
    type: "POST",
    url: "/todo",
    data:{
        todo: inputValue,
    },
    succes: function(data){
        console.log("DATA", data)
    }
})
displayTodos()
})
function displayTodos(){
    $('#todoList').empty()
    $.ajax({
        type: 'GET',
        url: '/todo',
    })
    .then(function(resp){
        var todoList = $('#todoList')
        for (i = 0; i < resp.length; i++) { 
            $('#todoList').append("<li id="+resp[i].id+">"+resp[i].todo+"<button id="+resp[i].id+" class='deleteBtn'>x</button>"+"</li>")
            console.log(resp[i].id)
            console.log(resp[i])
        }
    })
}
displayTodos()


$('#todoList').on('click', ".deleteBtn", function(){
    console.log("Im Working");
    let todoToDelete = $(this).attr('id')
    console.log("to delete id", todoToDelete);
   
    $.ajax({
        type: "GET",
        url: '/delete/'+ todoToDelete,
        succes:function(resp){
            console.log("Removed")
        }
    })
    
    displayTodos()
   })

})
