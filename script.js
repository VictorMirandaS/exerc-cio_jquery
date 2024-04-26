$(document).ready(function() {
    $('#task-form').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get the value of the task input
      var taskName = $('#task-input').val();
  
      if (taskName.trim() !== '') {
        // Add the task to the list
        $('#task-list').append('<li>' + taskName + '</li>');
        $('#task-input').val(''); // Clear the input field
      }
    });
  
    // Toggle line-through style on click
    $(document).on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  