let employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

// Helper function to display the output
function displayOutput(data) {
    const outputArea = document.getElementById("outputArea");
    outputArea.textContent = JSON.stringify(data, null, 2);
}

// Task 1: Print developers using the map function
function PrintDeveloperbyMap() {
    const developers = employees.map((employee) => {
        if (employee.profession === "developer") {
            return employee;
        }
    }).filter(Boolean); // filter out undefined values
    displayOutput(developers);
}

// Task 2: Print developers using the forEach function
function PrintDeveloperbyForEach() {
    let developers = [];
    employees.forEach((employee) => {
        if (employee.profession === "developer") {
            developers.push(employee);
        }
    });
    displayOutput(developers);
}

// Task 3: Add a new employee to the array
function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    displayOutput(employees);
}

// Task 4: Remove employees with the profession of admin
function removeAdmin() {
    employees = employees.filter((employee) => employee.profession !== "admin");
    displayOutput(employees);
}

// Task 5: Concatenate a new array with the existing array
function ConcatinateArray() {
    let newEmployees = [
        { id: 5, name: "mike", age: "21", profession: "designer" },
        { id: 6, name: "emma", age: "22", profession: "developer" },
        { id: 7, name: "robert", age: "23", profession: "manager" }
    ];

    let combinedArray = employees.concat(newEmployees);
    displayOutput(combinedArray);
}
