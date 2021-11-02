$("ul").on("click", "li", function(){
	$(this).toggleClass("finished");

});

//click on X to delete the to-do
$("span").on("click",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text'").keypress(function(){
	if(event.which === 13){
		//inserting new To-do from input
		let toDoText=$(this).val();
		$(this).val("");

		//create a new li and add to ul
		$("ul").append("<li><span>X</span>" + toDoText + "</li>")
	}
});
