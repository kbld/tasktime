document.addEventListener("DOMContentLoaded", function () {
  const tacheInput = document.getElementById("tacheInput");
  const addTache = document.getElementById("addTache");
  const tacheList = document.getElementById("tacheList");

  addTache.addEventListener("click", function () {
    const taskText = tacheInput.value.trim();
    if (taskText !== "") {
      const currentTime = new Date();
      const maTime = currentTime.toLocaleTimeString();
      const maDate = currentTime.toLocaleDateString();

      const li = document.createElement("li");
      li.textContent = taskText + " - Ajouté le " + maDate + " à " + maTime;
      li.classList.add("text-black", "px-2", "py-1");

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Supprimer";
      deleteButton.classList.add(
        "text-red-500",
        "px-2",
        "py-1",
        "bg-transparent",
        "border",
        "border-red-500",
        "rounded",
        "m-3"
      );
      deleteButton.addEventListener("click", function () {
        li.remove();
      });

      li.appendChild(deleteButton);
      tacheList.appendChild(li);

      tacheInput.value = "";
    }
  });
});
