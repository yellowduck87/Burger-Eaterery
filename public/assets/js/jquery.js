// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    console.log("clicky")
    var id = $(this).data("id")
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      devoured: true
    }).then(
      function () {
        console.log("devoured burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });



  $("#submit").on("click", function (event) {
    console.log("clicky")
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bur").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $("#delete").on("click", function(event) {

  //   $.ajax("/api/burgers/:id" + id, {
  //     type: "DELETE",
  //     data: req.params.id,
  //   }).then(
  //     function() {
  //       console.log("deleted", burger);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // })
});