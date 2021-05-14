function atendimento(){
    semana = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    tecnico_9 = ["Wagner"];
    tecnico_10 = ["Alisson","Erik","Humberto","Jose Schimit","Lucca"];

    tecnico09 = new Array();
    tecnico10 = new Array();

    d = new Date();
    dia_semana = semana[d.getDay()];
    data = (dia_semana + " - " +(d.getDate() )) + "/" +"0"+((d.getMonth() +1)) + "/" + d.getFullYear(); 

    dia = d.getDate();

    tamanho = tecnico_9.length -1;                      
    tabela = document.getElementById("dados");
    date = document.getElementById("data"); 

    row = "";
    cell1 = "";
    cell2 ="";

    date.innerHTML = data;

    //dia = 17;
    if(dia == 19){
    listar();                     
    }
    atualizar();
    if(dia == 20){
        listar();
    }
    atualizar()
    if(dia == 21){
        listar();
    }
    atualizar()
    if(dia == 14){
        listar();
    }
    atualizar()
    if(dia == 17){
        listar();
    }
    atualizar()
    if(dia == 18){
        listar();
    }                                                        

    function listar(){ 
        row2 = tabela.insertRow(); // cria a linha
        cell3 = row2.insertCell(); // cria uma célula na linha
        cell4 = row2.insertCell(); // cria uma célula na linha
        cell3.innerHTML = "Tecnico das 9:00" // na célula passa o valor
        cell4.innerHTML = "Tecnico das 10:00" // na célula passa o valor

        cell3.style.background = "black";
        cell4.style.background = "black";
        cell3.style.color = "white";
        cell4.style.color = "white";
        
        for (let i = 0; i < tecnico_9.length; i++) {
            row = tabela.insertRow(); // cria a linha
            cell1 = row.insertCell(); // cria uma célula na linha
            cell2 = row.insertCell(); // cria uma célula na linha
            cell1.innerHTML = tecnico_9[i] // na célula passa o valor 
            cell2.innerHTML = tecnico_10[i] // na célula passa o valor    
        }                         
    }

    function atualizar(){
        num_9 = tecnico_9[0];
        num_10 = tecnico_10[0];
        for (let i = 0; i < tecnico_9.length; i++) {
            tecnico09[i] = tecnico_9[i+1];
            tecnico09[tamanho] = num_9;
            tecnico_9[i] = tecnico09[i];

            tecnico10[i] = tecnico_10[i+1];
            tecnico10[tamanho] = num_10;                                  
            tecnico_10[i] = tecnico10[i];
        }  
    }
}

function salvar(){
    nome = document.getElementById("tecnico");
    estado = document.getElementById("status");
    tecnico = document.getElementById("tec");
    atendimentos = document.getElementById("lista_atendimentos");

    nome_tecnico = nome.options[nome.selectedIndex].text;
    n_chamado = document.getElementById("chamado").value; 
    status_chamado = estado.options[estado.selectedIndex].text;

    lista = '{"nome":"jose","idade":"28","sexo":"M"}'
    listajson = JSON.parse(lista);
    for (const lis in listajson) {
        console.log(lis)
    }
    console.log(listajson.sexo)

    if(n_chamado != "" && nome_tecnico != "" && status_chamado != ""){
       
        ArquivoJson = '{';
            ArquivoJson += '"Tecnico:" "' + nome_tecnico +'",';
            ArquivoJson += '"chamado:" "' + n_chamado +'",';
            ArquivoJson += '"status:" "' + status_chamado +'",';
        ArquivoJson += '}';
        

        blob = new Blob([ArquivoJson],{type:"txt/plain;charset=utf8"})
        //saveAs(blob,"ListAtendimento"+".json");
        

        row = atendimentos.insertRow(); // cria a linha
        cell1 = row.insertCell(); // cria uma célula na linha
        cell2 = row.insertCell(); // cria uma célula na linha
        cell3 = row.insertCell();// cria uma célula na linha
        cell1.innerHTML = nome_tecnico // na célula passa o valor 
        cell2.innerHTML = n_chamado // na célula passa o valor  
        cell3.innerHTML = status_chamado // na célula passa o valor 

        
        cell4 = row.insertCell();// cria uma célula na linha
        btn = document.createElement('BUTTON');//Adiciona um botão

        //estilo do botão
        btn.style.backgroundColor = "white";
        btn.style.color = "red";
        btn.style.padding = "1px 3px";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";


        texto_botão = document.createTextNode("Excluir");//Define o texto do botão     
        btn.appendChild(texto_botão);// Adicona texto no botão  
        cell4.appendChild(btn);//Adiciona o botão na celula

        btn.onclick = function()
        {
            conf = confirm("Deseja realmente excluir esse registro?")
            if(conf){
                var tecnico = $(this).parent().parent(); //tr
                tecnico.remove();   
            }
            console.log(conf)
           
        }
    }
    
    //console.log(lista[0]);
}











