const colorSelect = document.getElementById("colorSelect");
const removeButton = document.getElementById("removeButton");

// Add event listener to the remove button
removeButton.addEventListener("click", () => {
  let selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex >= 0) {
    colorSelect.remove(selectedIndex);
  }
});
