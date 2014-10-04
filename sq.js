$(function() {
	var dataStructureType = "";

	//runs if the user wants to visualize a stack
	$("#stackButton").on("click", function() {
		dataStructureType = "stack";
		$("#queueButton").fadeOut();
		stack();
	});

	//runs if the user wants to visualize a queue
	$("#queueButton").on("click", function() {
		dataStructureType = "queue";
		$("#stackButton").fadeOut();
		queue();
	});

	function stack() {

		$("#selection").html("<button>push (add)</button><button>pop (remove)</button>");

		$("#dataEntry").on("blur", function(){
			//userInput = this.text();

		});
		console.log("hi");
		$(".node")
	}

	function queue() {
		
		//listens for a click on the enqueue button
		$("#enqueue").on("click", function(){
			console.log("hello");

			//adds enqueue and unqueue buttons
			$("#dataEntry").append("<button id='enqueue'>enqueue (add)</button><button id='unqueue'>unqueue (remove)</button>");
			
			//reads in entry from textbox
			$dataEntry = $("#textBox").val();
			if ($dataEntry === "") {
				$("#dataEntry").append("Don't you want to type something?");
			}
			else {
				enqueue($dataEntry);
				$("#dataEntry").text("");
				console.log("hi");
			}
	});
}

	function push(text) {
		$("ul").append("<li id='dataValue'>"+text+"</li>");
	}

	function pop() {
		$("ul").lastChild.remove();
	}

	function enqueue() {
		$("ul").prepend("<li id='dataValue'>"+text+"</li>");
	}

	function unqueue() {
		("ul").firstChild.remove();
	}
});




