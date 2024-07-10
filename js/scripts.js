const name = prompt('Creiamo una password personalizzata. Come ti chiami?')
console.log('Name ', name)

const surname = prompt('Step 2, dimmi il tuo cognome')
console.log('Surname ', surname)

const color = prompt('Ultimo step, qual è il tuo colore preferito?')
console.log('Color ', color)

document.getElementById('result').innerHTML = (name + surname + color + 130)
