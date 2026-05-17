let marks = [];

function enterMarks() {
  let n = document.getElementById("subjects").value;
  let container = document.getElementById("marksInput");

  container.innerHTML = "";
  marks = [];

  for (let i = 0; i < n; i++) {
    container.innerHTML +=
      `<input type="number" id="m${i}" placeholder="Enter marks for subject ${i + 1}"><br>`;
  }
}

function calculateResult() {
  let total = 0;
  let n = document.getElementById("subjects").value;

  for (let i = 0; i < n; i++) {
    let mark = Number(document.getElementById("m" + i).value);
    total += mark;
  }

  let average = total / n;

  let grade = "";

  if (average >= 90) grade = "A+";
  else if (average >= 75) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 40) grade = "C";
  else grade = "D";

  let result = average >= 40 ? "PASS" : "FAIL";

  document.getElementById("result").innerHTML =
    `Total Marks: ${total} <br>
     Average: ${average.toFixed(2)} <br>
     Grade: ${grade} <br>
     Result: ${result}`;
}