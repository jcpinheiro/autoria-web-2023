//  let nome = prompt('Digite o seu nome')
//  alert('Bom dia ' + nome) 

let inputNome = document.querySelector('#nome')
let inputQuantidade = document.querySelector('#quantidade')
let inputValor = document.querySelector('#valor')


document.querySelector('#btnCadastro')
        .addEventListener('click',  function(event) {
            event.preventDefault()

            let linha = document.createElement('tr')
            let inputs = [inputNome.value, inputQuantidade.value, inputValor.value]

            inputs.forEach(campo => {
                let celula = document.createElement('td')
                celula.textContent = campo
                linha.appendChild(celula )

            })

            console.log(linha )
            
/* 
            inputs.forEach(function(campo) {
                console.log(campo )
            }) */


/*             for(let i=0; i < inputs.length; i++ ) {
                console.log(inputs[i] )
            } */
           




  /*     
     let celula = document.createElement('td')
     linha.appendChild(celula)
     console.log(linha )
 */
    

/*  <tr>
       <td>Caderno</td>
       <td>5</td>
       <td>8.50</td>
       <td>42.50</td>
    </tr> */
})










 function imprime() {
    console.log(inputNome.value)
    console.log(inputQuantidade.value)
    console.log(inputValor.value)

    return 10;

 }


 let exibe = function() {
    console.log(inputNome.value)
    console.log(inputQuantidade.value)
    console.log(inputValor.value)

    return 10;

 }

// let numero = exibe()
// console.log(numero)

/* (function() {
    console.log(inputNome.value)
    console.log(inputQuantidade.value)
    console.log(inputValor.value)
 })() */


