// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    var item = $(this);
    item.toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(){
    var item = $(this).parent();

    item.fadeOut(500, function(){
        item.remove();
    });
    event.stopPropagation();
});

// Add todos to list
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $("ul").append("<li id='todo-item'><span id='delete'>X</span> " + todoText + "</li>")
        $(this).val("");
    }
});