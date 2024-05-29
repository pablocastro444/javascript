var diaSem = new Date()
var diaSem = diaSem.getDay()

switch(diaSem) {

    case 0:
        console.log('Domingo')
        break

    case 1: 
        console.log('Segunda')
        break

    case 2: 
        console.log('Terça')
        break

    case 3: 
        console.log('Quarta')
        break

    case 4: 
        console.log('Quita')
        break

    case 5: 
        console.log('Sexta')
        break

    case 6: 
        console.log('Sábado')
        break

    default:
        console.log('[ERROR] Dia inválido') 
        break   
}