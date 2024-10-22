document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-activity");
    const previewList = document.getElementById("preview-activity");
    const activitiesTable = document.getElementById("activities-table");

    // Input elements
    const typeSelect = document.getElementById("type");
    const intensitySelect = document.getElementById("intensity");
    const caloriesInput = document.getElementById("calories");
    const durationInput = document.getElementById("duration");
    const dateInput = document.getElementById("date");

    // Add event listener for the "Add Activity" button
    addButton.addEventListener("click", addActivity);

    function addActivity() {
        // Get values from inputs
        const type = typeSelect.value;
        const intensity = intensitySelect.value;
        const calories = caloriesInput.value;
        const duration = durationInput.value;
        const date = dateInput.value;

        // Check if any input is empty
        if (!type || !intensity || !calories || !duration || !date) {
            return; // If any field is empty, do nothing
        }

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = `Type: ${type}, Duration: ${duration} mins, Calories: ${calories}, Date: ${date}, Intensity: ${intensity}`;

        // Create Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editActivity(listItem, { type, intensity, calories, duration, date }));

        // Create Next button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", () => moveToTable(listItem, { type, intensity, calories, duration, date }));

        // Append buttons to the list item
        listItem.appendChild(editButton);
        listItem.appendChild(nextButton);

        // Add the list item to the preview list
        previewList.appendChild(listItem);

        // Clear input fields
        typeSelect.value = "";
        intensitySelect.value = "";
        caloriesInput.value = "";
        durationInput.value = "";
        dateInput.value = "";

        // Disable the "Add Activity" button
        addButton.disabled = true;
    }

    function editActivity(listItem, activityData) {
        // Populate inputs with the current data
        typeSelect.value = activityData.type;
        intensitySelect.value = activityData.intensity;
        caloriesInput.value = activityData.calories;
        durationInput.value = activityData.duration;
        dateInput.value = activityData.date;

        // Remove the list item from the preview list
        previewList.removeChild(listItem);

        // Enable the "Add Activity" button
        addButton.disabled = false;
    }

    function moveToTable(listItem, activityData) {
        // Remove the list item from the preview list
        previewList.removeChild(listItem);

        // Create a new row for the activities table
        const tableRow = document.createElement("tr");

        // Create and fill cells for each data point
        const typeCell = document.createElement("td");
        typeCell.textContent = activityData.type;
        const durationCell = document.createElement("td");
        durationCell.textContent = `${activityData.duration} mins`;
        const caloriesCell = document.createElement("td");
        caloriesCell.textContent = activityData.calories;
        const dateCell = document.createElement("td");
        dateCell.textContent = activityData.date;
        const intensityCell = document.createElement("td");
        intensityCell.textContent = activityData.intensity;

        // Create an actions cell with a Delete button
        const actionsCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            activitiesTable.removeChild(tableRow);
        });
        actionsCell.appendChild(deleteButton);

        // Append cells to the row
        tableRow.appendChild(typeCell);
        tableRow.appendChild(durationCell);
        tableRow.appendChild(caloriesCell);
        tableRow.appendChild(dateCell);
        tableRow.appendChild(intensityCell);
        tableRow.appendChild(actionsCell);

        // Add the row to the activities table
        activitiesTable.appendChild(tableRow);

        // Enable the "Add Activity" button again
        addButton.disabled = false;
    }
});