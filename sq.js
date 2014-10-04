$(function() {
	var dataStructureType = "";
	$("#dataEntry").hide();

	//runs if the user wants to visualize a stack
	$("#stackButton").on("click", function() {
		dataStructureType = "stack";
		$("#queueButton").hide();
		$("#stackButton").hide();
		$("#title").html("<center>Visualization of a stack data structure<center>");
		$("#dataEntry").show();
		stack();
	});

	//runs if the user wants to visualize a queue
	$("#queueButton").on("click", function() {
		dataStructureType = "queue";
		$("#stackButton").hide();
		$("#queueButton").hide();
		$("#title").html("<center>Visualization of a queue data structure<center>");
		$("#dataEntry").show();
		queue();
	});

	function stack() {

		$("#selection").html("<button id='push'>push (add)</button><button id='pop'>pop (remove)</button>");

		//listens for a click on the push button
		$("#push").on("click", function(){			
			//reads in entry from textbox
			$dataEntry = $("#textBox").val();
			if ($dataEntry === "") {
				$("#error").html("<em>Don't you want to type something?</em>");
			}
			else {
				$("#error").html("");			
				pushStack($dataEntry);
				$("#textBox").val("");
			}
		});

		$("#pop").on("click", function(){
			popStack();			
		});
	}

	function queue() {
		
		//adds enqueue and dequeue buttons
		$("#selection").html("<button id='enqueue'>enqueue (add)</button><button id='dequeue'>dequeue (remove)</button>");

		//listens for a click on the enqueue button
		$("#enqueue").on("click", function(){
			console.log("hello");
			
			//reads in entry from textbox
			$dataEntry = $("#textBox").val();
			if ($dataEntry === "") {
				$("#error").html("<em>Don't you want to type something?</em>");
			}
			else {
				$("#error").html("");			
				enqueue($dataEntry);
				$("#textBox").val("");
			}
		});

		$("#dequeue").on("click", function(){
			dequeue();			
		});
}

	function pushStack(text) {
		$("ul").prepend("<li id='dataValue'>"+text+"</li>");
	}

	function popStack(text) {
		$removeItem = $("li").filter(":first-child");	
		$removeItem.slideUp("normal", function(){$(this).remove();});
	}

	function enqueue(text) {
		$("ul").prepend("<li id='dataValue'>"+text+"</li>");
	}

	function dequeue() {
		$removeItem = $("li").filter(":last-child");	
		$removeItem.slideUp("normal", function(){$(this).remove();});
	}

});




