//BACKEND//
function Task(task, date, importance) {
  this.task = task;
  this.date = date;
  this.importance = importance;
}

// var task = new Task(inputTask, inputDate, inputImportance);


//FRONT END//
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    var inputTask = $("#task").val();
    var inputDate = $("#date").val();
    var inputImportance = $("#importance").val();
    var task = new Task(inputTask, inputDate, inputImportance);
    console.log(task);
  });
});
