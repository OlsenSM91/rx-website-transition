window.onload = function() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the span (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Function to open the modal
    function openModal() {
      modal.style.display = "block";
    }

    // Call the function to open the modal with a 5 second delay
    setTimeout(openModal, 5000);
}
