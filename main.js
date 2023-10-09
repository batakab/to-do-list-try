const addList = document.querySelector(".add-button");
const userInput = document.querySelector(".user-input");

const mainList = document.querySelector(".main-list"); // this is the ul

const deleteBtn = document.querySelector(".delete");

function generateList() {
  const newList = document.createElement("li"); // nag create ng li element
  const xButton = document.createElement("button");

  if (userInput.value === "") {
    return;
  }

  xButton.innerHTML = "Delete";
  newList.innerHTML = userInput.value; // meaning lahat ng input ng user is magiging li content
  mainList.append(newList); // naglagay ng li sa ul
  mainList.append(xButton);

  newList.addEventListener("click", () => {
    if (newList.style.textDecoration == "line-through") {
      newList.style.textDecoration = "none";
      newList.classList.remove("active");
    } else {
      newList.style.textDecoration = "line-through";
      newList.classList.add("active");
    }
  });

  xButton.addEventListener("click", () => {
    newList.remove();
    xButton.remove();
  });

  deleteBtn.addEventListener("click", () => {
    mainList.childNodes;
    for (let i = 0; i < mainList.childNodes.length; i++) {
      mainList.childNodes[i].remove();
    }
  });
}

// const obj = [
//   {
//     name: "jherico",
//     age: 18,
//     sex: "male",
//     gender: "bisexual",
//   },
//   {
//     name: "pedro",
//     age: 16,
//     sex: "female",
//     gender: "gay",
//   },
//   {
//     name: "alyzhea",
//     age: 15,
//     sex: "female",
//     gender: "tomboy",
//   },
// ];

// const userName = document.querySelector(".name");
// const userAge = document.querySelector(".age");
// const userSex = document.querySelector(".sex");
// const userGender = document.querySelector(".gender");
// const btn = document.querySelector(".next");
// const newHeader = document.createElement("h1");

// let identifier = 0;

// btn.addEventListener("click", () => {
//   personId();
//   identifier++;
// });

// function personId() {
//   let thePerson = obj[identifier];
//   userName.innerHTML = `Name : ${thePerson.name}`;
//   userAge.innerHTML = `Age   : ${thePerson.age}`;
//   userSex.innerHTML = `Sex   : ${thePerson.sex}`;
//   userGender.innerHTML = `Gender: ${thePerson.gender}`;
//   newHeader.innerHTML = "wassap bro";
// }

// const radio = document.getElementById("list");

// const addHere = document.querySelector(".add-here");

// const addBtn = document.querySelector(".add");
// const removeBtn = document.querySelector(".remove");

// addBtn.addEventListener("click", () => {
//   addHere.value;

// });

// const toDo = document.querySelector(".todo");
// const radio = document.getElementById("list");

// const addHere = document.querySelector(".add-here");

// const addBtn = document.querySelector(".add");
// const removeBtn = document.querySelector(".remove");

// addBtn.addEventListener("click", () => {
//   const inputValue = addHere.value; // Declare inputValue using const or let
//   console.log(inputValue); // Log the value of the input field
// });
