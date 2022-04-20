function insert(num) {
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}

function clean() {
    document.getElementById('display').innerHTML = "";
}

function back() {
    var res = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = res.substring(0, res.length - 1);
}

function calcular() {
    var res = document.getElementById('display').innerHTML;
    if (res) {
        document.getElementById('display').innerHTML = eval(res);
    } else {
        window.alert('[ERRO] Valor não encontrado ou inválido')
    }
}