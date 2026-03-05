const API = "https://dummyjson.com/users"

const table = document.getElementById("userTable")
const form = document.getElementById("userForm")
const loading = document.getElementById("loading")

let users = []
let editUserId = null

// Fetch Users
async function getUsers() {

loading.classList.remove("hidden")

try {

const res = await fetch(API)
const data = await res.json()

users = data.users
renderUsers(users)

} catch (error) {

alert("Error loading users")

}

loading.classList.add("hidden")
}

// Render Users
function renderUsers(usersList){

table.innerHTML = ""

usersList.forEach(user => {

table.innerHTML += `
<tr class="border-b">

<td class="p-2">${user.id}</td>
<td class="p-2">${user.firstName}</td>
<td class="p-2">${user.lastName}</td>
<td class="p-2">${user.email}</td>
<td class="p-2">${user.phone}</td>

<td class="p-2">

<button onclick="openEdit(${user.id})"
class="bg-yellow-400 px-2 py-1 rounded mr-2">
Edit
</button>

<button onclick="deleteUser(${user.id})"
class="bg-red-500 text-white px-2 py-1 rounded">
Delete
</button>

</td>

</tr>
`
})

}

// Add User
form.addEventListener("submit", async (e) => {

e.preventDefault()

const newUser = {

firstName: firstName.value,
lastName: lastName.value,
email: email.value,
phone: phone.value

}

try {

const res = await fetch(`${API}/add`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify(newUser)

})

const data = await res.json()

users.unshift(data)
renderUsers(users)

alert("User Added")

form.reset()

} catch(error){

alert("Error adding user")

}

})

// Open Edit Modal
function openEdit(id){

const user = users.find(u => u.id === id)

editUserId = id

editFirstName.value = user.firstName
editLastName.value = user.lastName
editEmail.value = user.email
editPhone.value = user.phone

editModal.classList.remove("hidden")
editModal.classList.add("flex")

}

// Close Modal
function closeModal(){

editModal.classList.add("hidden")

}

// Update User
updateBtn.addEventListener("click", async ()=>{

const updatedUser = {

firstName: editFirstName.value,
lastName: editLastName.value,
email: editEmail.value,
phone: editPhone.value

}

try{

await fetch(`${API}/${editUserId}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify(updatedUser)

})

users = users.map(user =>
user.id === editUserId
? {...user, ...updatedUser}
: user
)

renderUsers(users)

closeModal()

alert("User Updated")

}catch(error){

alert("Update failed")

}

})

// Delete User
async function deleteUser(id){

if(!confirm("Delete this user?")) return

try{

await fetch(`${API}/${id}`,{
method:"DELETE"
})

users = users.filter(user => user.id !== id)

renderUsers(users)

alert("User Deleted")

}catch(error){

alert("Delete failed")

}

}

// Search Users
searchInput.addEventListener("keyup", ()=>{

const query = searchInput.value.toLowerCase()

const filtered = users.filter(user =>
user.firstName.toLowerCase().includes(query) ||
user.lastName.toLowerCase().includes(query)
)

renderUsers(filtered)

})

// Init
getUsers()