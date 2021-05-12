function atendimento(){
    semana = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    tecnico_9 = ["Daniel","Felipe","Fhelipe","Rodolfo","Wagner","Wallace"];
    tecnico_10 = ["Alisson","Erik","Humberto","Jose Alfredo","Jose Schimit","Lucca"];

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
    if(dia == 11){
    listar();                     
    }
    atualizar();
    if(dia == 12){
        listar();
    }
    atualizar()
    if(dia == 13){
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
    lista = [];
    nome = document.getElementById("tecnico");
    estado = document.getElementById("status");
    tecnico = document.getElementById("tec");
    atendimentos = document.getElementById("lista_atendimentos");

    n_chamado = document.getElementById("chamado").value;
    nome_tecnico = nome.options[nome.selectedIndex].text;
    status_chamado = estado.options[estado.selectedIndex].text;

    //console.log(n_chamado,nome_tecnico,status_chamado);
    if(n_chamado != "" && nome_tecnico != "" && status_chamado != ""){
        for (let i = 0; i < lista.length; i++) {
            if(lista[i] == "Daniel"){
                lista.push(nome_tecnico);
                lista.push(n_chamado);
                lista.push(status_chamado);
    
                row = atendimentos.insertRow(); // cria a linha
                cell1 = row.insertCell(); // cria uma célula na linha
                cell2 = row.insertCell(); // cria uma célula na linha
                cell3 = row.insertCell();// cria uma célula na linha
                cell1.innerHTML = lista[0] // na célula passa o valor 
                cell2.innerHTML = lista[1] // na célula passa o valor  
                cell3.innerHTML = lista[2] // na célula passa o valor   
            }
            console.log(lista[i]);
        }
    }
    //console.log(lista[0]);
}

