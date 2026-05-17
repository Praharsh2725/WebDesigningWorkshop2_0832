let employees = [];

function addEmployee() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("empId").value;
  let salary = Number(document.getElementById("salary").value);
  let dept = document.getElementById("department").value;

  let emp = { name, id, salary, department: dept };

  employees.push(emp);

  alert("Employee Added Successfully!");
}

// Display all employees
function displayAll() {
  let output = "<h3>All Employees</h3>";

  employees.forEach(emp => {
    output += `
      <p>
        <b>${emp.name}</b> | ID: ${emp.id} <br>
        Salary: ₹${emp.salary} <br>
        Dept: ${emp.department}
      </p><hr>
    `;
  });

  document.getElementById("output").innerHTML = output;
}

// Salary > 50000
function filterSalary() {
  let filtered = employees.filter(e => e.salary > 50000);

  let output = "<h3>Salary > 50000</h3>";

  filtered.forEach(emp => {
    output += `<p>${emp.name} - ₹${emp.salary}</p>`;
  });

  document.getElementById("output").innerHTML = output;
}

// Total salary
function totalSalary() {
  let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

  document.getElementById("output").innerHTML =
    `<h3>Total Salary</h3> ₹${total}`;
}

// Average salary
function averageSalary() {
  let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  let avg = total / employees.length;

  document.getElementById("output").innerHTML =
    `<h3>Average Salary</h3> ₹${avg.toFixed(2)}`;
}

// Count department
function countDepartment() {
  let dept = prompt("Enter Department Name");

  let count = employees.filter(e =>
    e.department.toLowerCase() === dept.toLowerCase()
  ).length;

  document.getElementById("output").innerHTML =
    `<h3>Department Count</h3>${dept}: ${count}`;
}