// JavaScript
const todoid = document.getElementById("todoid");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Array
let allList = []

// Delete Section
const deleteList = (index)=>{
    allList.splice(index,1);
    generateList(allList)
}

// Generate Section
const generateList = (todos)=>{
    list.innerHTML = ""
    todos.forEach((input, index) => {
        list.innerHTML += 
        `<div class="alert alert-light border-primary rounded-pill d-flex justify-content-center align-items-center">
            <h5 class="inpcss">${input}</h5>
            <div>
                <button class="btn btn-success rounded-pill"  onclick=editList(${index}) >Edit</button>
                <button class="btn btn-danger rounded-pill"  onclick=deleteList(${index}) >Delete</button>
            </div>
        </div>` 
    })
}

// Add Section
const addList = (input) => {
    if (input === "") {
        alert("Please Fill Your Field First")
        return
    }
    allList.push(input);
    
}

// Edit Section
const editList = (index)=>{
    const updateValue = prompt("Please Edit your Todo: ", allList[index]);
    allList[index] = updateValue;
    generateList(allList)
}

// Submit Section
todoid.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const input = e.target.input.value;
    addList(input)
    generateList(allList)
    todoid.reset();
    console.log(input);
    console.log(allList);
})





