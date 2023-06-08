const textFile = fetch("./beautiful.txt");
const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const phoneNumber = document.getElementById("num");
const cnicNumber = document.getElementById("cnic");
const btnElem = document.getElementById("searchButton");
const listElem = document.getElementById("list");
const readBtn = document.getElementById("readBtn");
const displayElem = document.getElementById("hidden");



btnElem.addEventListener("click", searchResult);

function searchResult() {
    const query = firstName.value;
    const query1 = lastName.value;
    const query2 = phoneNumber.value;
    const query3 = cnicNumber.value;

    listElem.innerHTML=`
    <li>First Name = ${query}</li>
    <li>Last Name = ${query1}</li>
    <li>Phone Number = ${query2}</li>
    <li>CNIC Number = ${query3}</li>
    `;
}
searchResult();
displayElem.style.display = "block"
readBtn.addEventListener("click", displayblock);
function displayblock() {
    if (displayElem.style.display === "block") {
        displayElem.style.display = "none";
    }
    
    else{
        displayElem.style.display = "block"
    }
    
}
displayblock();

function addStudent(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;


    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    

    const nameCell = newRow.insertCell();
    nameCell.innerHTML = name;

    const ageCell = newRow.insertCell();
    ageCell.innerHTML = age;

    const gradeCell = newRow.insertCell();
    gradeCell.innerHTML = grade;

    const editCell = newRow.insertCell();
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", () => editStudent(newRow));
    editCell.appendChild(editButton);

    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => deleteStudent(newRow));
    deleteCell.appendChild(deleteButton);

    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
  }


  function deleteStudent(row) {
    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    table.removeChild(row);
  }


  function editStudent(row) {

    const hiddenForm = document.getElementById("hiddenForm");
    hiddenForm.style.display = "block";

    const name = row.cells[0].innerHTML;
    const age = row.cells[1].innerHTML;
    const grade = row.cells[2].innerHTML;

    document.getElementById("editName").value = name;
    document.getElementById("editAge").value = age;
    document.getElementById("editGrade").value = grade;

    hiddenForm.addEventListener("submit", (event) => {
      event.preventDefault();

      row.cells[0].innerHTML = document.getElementById("editName").value;
      row.cells[1].innerHTML = document.getElementById("editAge").value;
      row.cells[2].innerHTML = document.getElementById("editGrade").value;

      hiddenForm.style.display = "none";
    });
  }
  
  document.getElementById("studentForm").addEventListener("submit", addStudent);
  

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const images = document.getElementsByClassName("image");

function openModal(imageSrc) {
  modal.style.display = "block";
  modalImg.src = imageSrc;
}


function closeModal() {
  modal.style.display = "none";
}


for (let i = 0; i < images.length; i++) {
  const image = images[i];
  image.addEventListener("click", function() {
    openModal(image.src);
  });
}


const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", closeModal);

const paragraph = document.getElementById("myParagraph");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");

zoomInBtn.addEventListener("click", function() {
  const fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = fontSize + 10 + "px";
});

zoomOutBtn.addEventListener("click", function() {
  const fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = fontSize - 10 + "px";
});

