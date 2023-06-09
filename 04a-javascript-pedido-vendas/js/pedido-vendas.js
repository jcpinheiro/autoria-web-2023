//  let nome = prompt('Digite o seu nome')
//  alert('Bom dia ' + nome) 

let inputNome = document.querySelector('#nome')
let inputQuantidade = document.querySelector('#quantidade')
let inputValor = document.querySelector('#valor')

let tbody = document.querySelector('#tbodyItemPedido')


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

            let celulaSubtotal = document.createElement('td')
           

            celulaSubtotal.textContent = (inputs[1] * inputs[2]).toFixed(2)
            celulaSubtotal.classList = 'js-subtotal text-center'

            linha.appendChild(celulaSubtotal )


            tbody.appendChild(linha )

            let total = atualizaTotal()
            document.querySelector('.js-total').textContent = total.toFixed(2)
          
})


function atualizaTotal() {
    let total = 0
    document.querySelectorAll('.js-subtotal')
            .forEach(celula => {
                total = total +  parseFloat(celula.textContent)
    })  
    
    return total 

}