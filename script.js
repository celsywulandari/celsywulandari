document.querySelector('#push').onclick = function(){
    if(document.querySelector('#nwetask input').value.length ==0){

    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="tasks">
        <span id="tasksname">
           ${document.querySelector('#newtask input').value}
           </span>
           <button class="delete">
             <i class="far fa-trash-alt"></i>
             <buttom>
             </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
           current_tasks[i].onclick = function(){
                this.parentNode.remove();
           }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
         }
}