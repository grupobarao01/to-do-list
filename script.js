const novaTarefa = document.getElementById('novaTarefa');
const btnAddTarefa = document.getElementById('btnAddTarefa');
const listaTarfa = document.getElementById('listaTarfa');

btnAddTarefa.addEventListener('click', function(){
    const tarefa = novaTarefa.value;
   
    if(tarefa != " "){

        const li = document.createComment('li');

        li.textContent = tarefa; 

        const botaoRemover = document.createElement('button');
        botaoRremover.textContent = "Remover";

        botaoRemover.addEventListener('click',function(){
            li.remove();
        });


        li.appendChild(botaoRemover);
        listaTarfa.appendChild(li);

      
        novaTarefa.value ="";
       
        
    };




});