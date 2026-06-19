function executarCadastro(){

    const nomev = document.getElementById("nomevip").value;
    const idadev = parseInt(document.getElementById("idadevip").value);
    const cpfv = parseInt(document.getElementById("cpfvip").value);
    const emailv = document.getElementById("emailvip").value;

    if(!nomev || !emailv || isNaN(idadev) || isNaN(cpfv)){
        alert("Por favor, preencha todos os campos!");
        return;
    }

    formvip.disabled= false;

    const formulario = document.getElementById("form");
    const cadastro = document.getElementById("cadastro");

    formulario.style.display = "block"
    cadastro.style.display = "none"


}


//Escolha de cliente VIP não é permitida 
const formvip=document.getElementById('opcaoVIP');
formvip.disabled= true;

//Função de compra
function executarSistema(){
    //  Dados de Entrada do codigo 
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const valor = parseFloat(document.getElementById("inputValor").value);
    const cupom = document.getElementById("inputCupom").value === "true";
    const marcadovip = document.getElementById("inputVIP").value === "true";

    //  Dados de saída
    const msg = document.getElementById("mensagem-autorizacao");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    //  Validação para campos vazios
    if(!nome || isNaN(idade) || isNaN(valor)){
        alert("Por favor, preencha todos os campos!");
        return;
    }

    //  Regra de negócio
    if(idade>=16){
        msg.innerText = `Venda autorizada: ${nome}`;
        msg.style.color = "#00ff88";

    //  Desconto
        if(marcadovip===true){
            valorFinal = (valor>500 || cupom) ? valor * 0.75 : valor*0.9;
            
            //  Estoque
            let estoque = ["Placa de Vídeo", "Processador", "Memória RAM"];
            lista.innerHTML = ""; //  Limpa a lista anterior

            // forEach: Percorre um array e aplica uma ação para cada elemento
            estoque.forEach(item => {
                let li = document.createElement("li");
                li.innerText = `Item ${item} reservado.`;
                lista.appendChild(li); // usado para adicionar um novo elemento
            });
                
            relatorio.style.display = "block"
            relatorio.innerHTML=`
            <strong> RESUMO DO PEDIDO <\strong><br>
            Cliente: ${nome}<br>
            Total Original: R$ ${valor.toFixed(2)}<br>
            Desconto para cliente VIP: 10%<br>
            <strong> Total com Desconto: R$${valorFinal.toFixed(2)} <\strong>`
        }
        else{
            valorFinal = (valor>500 || cupom) ? valor * 0.85 : valor;

            //  Estoque
            let estoque = ["Placa de Vídeo", "Processador", "Memória RAM"];
            lista.innerHTML = ""; //  Limpa a lista anterior

            // forEach: Percorre um array e aplica uma ação para cada elemento
            estoque.forEach(item => {
                let li = document.createElement("li");
                li.innerText = `Item ${item} reservado.`;
                lista.appendChild(li); // usado para adicionar um novo elemento
            });
                
            relatorio.style.display = "block"
            relatorio.innerHTML=`
            <strong> RESUMO DO PEDIDO <\strong><br>
            Cliente: ${nome}<br>
            Total Original: R$ ${valor.toFixed(2)}<br>
            <strong> Total com Desconto: R$${valorFinal.toFixed(2)} <\strong>`
        }
    } else {
        msg.innerText = "Venda bloqueada: Menor de 16 Anos.";
        msg.style.color = "#ff4444";
        msg.style.fontWeight = "bold";
        relatorio.style.display = "none";
        lista.innerHTML = "";
    }
}

//Funções para trocar da compra para o cadastro VIP
function irCadastrar(){

    const formulario = document.getElementById("form");
    const cadastro = document.getElementById("cadastro");

    formulario.style.display = "none"
    cadastro.style.display = "block"
}

function voltarFormulario(){

    const formulario = document.getElementById("form");
    const cadastro = document.getElementById("cadastro");

    formulario.style.display = "block"
    cadastro.style.display = "none"
}