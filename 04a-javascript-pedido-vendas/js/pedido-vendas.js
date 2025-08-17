
const nome = document.querySelector('#nome')
const quantidade = document.querySelector('#quantidade')
const valor = document.querySelector('#valor')

const tbody = document.querySelector('#tbodyItemPedido')

const btnCadastro = document.querySelector('#btnCadastro')

btnCadastro.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    const campos = [nome.value, quantidade.value, valor.value]
    let linha = document.createElement('tr')

   campos.forEach( campo  =>  {
        let celula = document.createElement('td')
        celula.textContent = campo
        linha.appendChild(celula)
    }) 

    let celulaSubtotal = document.createElement('td')
    celulaSubtotal.textContent = calculaSubtotal(quantidade.value, valor.value)
    celulaSubtotal.classList = 'js-subtotal text-center'
    linha.appendChild(celulaSubtotal )

     tbody.appendChild(linha )

    let total = calculaTotal()
    document.querySelector('.js-total').textContent = total.toFixed(2)


     limpaCampos()
   
})

function calculaSubtotal(quantidade, valor) {

    return (parseFloat(quantidade) * parseFloat(valor)).toFixed(2)
}

function limpaCampos() {
    nome.value = ''
    quantidade.value = ''
    valor.value = ''

    nome.focus() // Foca no campo nome após limpar
}

function calculaTotal() {
    let total = 0
    document.querySelectorAll('.js-subtotal')
        .forEach(celula => {
            total += parseFloat(celula.textContent)
        })   
    return total      
}

/* let inputNome = document.querySelector('#nome')
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

} */