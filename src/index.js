document.addEventListener('DOMContentLoaded', addPups())

fetch("http://localhost:3000/pups")
.then((response => response.json()))
.then(addPups => {
    addPups.forEach(doggo => {
        const dogBar = document.querySelector('#dog-bar')
        const pupName = document.createElement("span")
        pupName.textContent = doggo.pupName
        dogBar.append(pupName)
    })
})

pupName.addEventListener('click', () => {
    const DogInfo = document.querySelector('#dog-info')
    const img = document.createElement('img')
    
})