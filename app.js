let button			= document.querySelector('#button')
let name			= document.querySelector('#name')
let height			= document.querySelector('#height')
let mass			= document.querySelector('#mass')
let hairColor		= document.querySelector('#hair-color')
let skinColor		= document.querySelector('#skin-color')
let eyeColor		= document.querySelector('#eye-color')
let birthYear		= document.querySelector('#birth-year')
let gender			= document.querySelector('#gender')

function getInfo() {
	let randomNumber = Math.floor((Math.random() * 88) * 1)
	let apiUrl = 'https://swapi.co/api/people/' + randomNumber

	axios.get(apiUrl).then(function(response){
		updateInfo(response.data)
	}).catch(e => {
		updateInfoWithError()
	})
}

function updateInfo(data) {
	name.innerText 				= data.name
	height.innerText 			= `Height: ${data.height}`
	mass.innerText 				= `Mass: ${data.mass}`
	hairColor.innerText 		= `Hair: ${data.hair_color}`
	skinColor.innerText 		= `Skin: ${data.skin_color}`
	eyeColor.innerText 			= `Eye: ${data.eye_color}`
	birthYear.innerText 		= `Birth Year: ${data.birth_year}`
	gender.innerText 			= `Gender: ${data.gender}`
}

function updateInfoWithError() {
	name.innerText 			= "These are not the people you are looking for.  Please try again."
	height.innerText 		= ""
	mass.innerText 			= ""
	hairColor.innerText 	= ""
	skinColor.innerText 	= ""
	eyeColor.innerText 		= ""
	birthYear.innerText 	= ""
	gender.innerText 		= ""
}


button.addEventListener('click' , getInfo)