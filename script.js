const myForm = document.getElementById('my-form')
const buttonSubmit = document.getElementById('my-button')
const myCard = document.getElementById('my-card')

let isCardShow = true

// Object, CRUD
// create
let variableObject = {
  role: 'Back-End Developer',
  name: 'Faridah Hanifah',
  availability: 'Full-Time',
  usia: 21,
  lokasi: 'Tasikmalaya, Indonesia',
  pengalaman: 2,
  email: 'hanifahfaridah23@gmail.com' 
}

//read
role.innerHTML = variableObject.role;
name_profil.innerHTML = variableObject.name;
availability.innerHTML = variableObject.availability;
usia.innerHTML = variableObject.usia;
lokasi.innerHTML = variableObject.lokasi;
pengalaman.innerHTML = variableObject.pengalaman;
email.innerHTML = variableObject.email;

//formShow
function toggleCard () {
  if(isCardShow) {
    isCardShow = false
    myCard.classList.remove('hide')
  } else {
    isCardShow = true
    myCard.classList.add('hide')
  }
}

//buttonEdit
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault()

  if (myForm.elements.data_role.value == "") {
    const data_role = document.getElementById("data_role");
    data_role.value = variableObject.role;
  }

  if (myForm.elements.data_name.value == "") {
    const data_name = document.getElementById("data_name");
    data_name.value = variableObject.name;
  }

  if (myForm.elements.data_availability.value == "") {
    const data_availability = document.getElementById("data_availability");
    data_availability.value = variableObject.availability;
  }

  if (myForm.elements.data_usia.value == "") {
    const data_usia = document.getElementById("data_usia");
    data_usia.value = variableObject.usia;
  }

  if (myForm.elements.data_lokasi.value == "") {
    const data_lokasi = document.getElementById("data_lokasi");
    data_lokasi.value = variableObject.lokasi;
  }

  if (myForm.elements.data_pengalaman.value == "") {
    const data_pengalaman = document.getElementById("data_pengalaman");
    data_pengalaman.value = variableObject.pengalaman;
  }

  if (myForm.elements.data_email.value == "") {
    const data_email = document.getElementById("data_email");
    data_email.value = variableObject.email;
  }

  toggleCard()
})

//update
myForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const currentRole = myForm.elements.data_role.value
  const currentName = myForm.elements.data_name.value
  const currentAvailability = myForm.elements.data_availability.value
  const currentUsia = myForm.elements.data_usia.value
  const currentLokasi = myForm.elements.data_lokasi.value
  const currentPengalaman = myForm.elements.data_pengalaman.value
  const currentEmail = myForm.elements.data_email.value
  
  role.innerHTML = currentRole;
  name_profil.innerHTML = currentName;
  availability.innerHTML = currentAvailability;
  usia.innerHTML = currentUsia;
  lokasi.innerHTML = currentLokasi;
  pengalaman.innerHTML = currentPengalaman;
  email.innerHTML = currentEmail;

  toggleCard()
})