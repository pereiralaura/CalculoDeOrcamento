let idcounter = 1;

function calcularvalor(){
    value = Number(document.getElementById('value').value);
    table = document.getElementById('table');
    productName = document.getElementById('productName').value;

    percent = 0.35;
    valueExtra = 15;
    frete = 10;

    if(value !== ""){ // Verifica se tem valor no input
        result = value+(value*percent)+valueExtra+frete; // Lógica do Programa

        /* Adiciona valores a tabela */
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = idcounter;
        cell2.innerHTML = productName;
        cell3.innerHTML = value + " Reais";
        cell4.innerHTML = result + " Reais";

        /* Reset */
        idcounter++
        document.getElementById('value').value="";
        document.getElementById('productName').value="";
    }else{
        document.getElementById('value').value="";
        document.getElementById('productName').value="";
    }

}