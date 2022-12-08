function insert(digit){
    var digit = document.getElementById(digit).innerText
    document.getElementById('screen').innerText += digit
}

function clean(){
    document.getElementById('screen').innerText = ''
}

function calculate() {
    alert('Ainda não é possível calcular :D')
    clean()
}