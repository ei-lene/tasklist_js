$(document).ready(function(){

	//GLOBAL VARS
	var myTasks = [];
	var newTask, removeTask, numTask; 

	//DISPLAY LIST FUNCTION
	function listTasks() {
		$.each(myTasks,function(i,task){
			var idTask;
			idTask = i + 1;
			$('#task_list').append('<li>' + idTask + ') ' + task + '</li>');	
		});
	}

	function showError(){
		$('#error_message').append('<li>' + 'This is not a valid list number. Please input a valid list number' + '</li>');	
	}

	//EVENT ADD_task FORM SUBMIT 
	$('#add_task').submit(function(){
		newTask = $(this).find('input:eq(0)').val();
		myTasks.push(newTask);
		$('#task_list').empty();
		$('#error_message').empty();
		// $('#task_list').text('');
		// $('#task_list').html('');
		listTasks();	

		return false; // prevent the form from submitting a page re-load
	});
	
	//EVENT REMOVE_task FORM SUBMIT
	$('#remove_task').submit(function(){
		removeTask = $(this).find('input:eq(0)').val();
		$('#error_message').empty();
		if (parseInt(removeTask)===0 || isNaN(removeTask) || parseInt(removeTask) > myTasks.length){
			$('#task_list').empty();
			showError();
			listTasks();
		}
		else{
			numTask = parseInt(removeTask) - 1 ;
			myTasks.splice(numTask,1);	
			$('#task_list').empty();
			listTasks();
		}

		return false; // prevent the form from submitting a page re-load
	});

	//SORTABLE PLUGIN

	$(function() {
		$('#task_list').sortable();
		$('#task_list').disableSelection();
	});
	
});