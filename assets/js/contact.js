var res = "";

function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);
  sendLetter.addEventListener("click", addClass);
// var S = document.querySelector('#newtask input').value;
document.querySelector('#submitBtn').onclick = function () {
    if (document.querySelector('name').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {

        var name = document.querySelector('#fullname name').value;
        
        // document.querySelector('#tasks').innerHTML += `
       
        
        //     <div class="task" id="task">
        //         <span id="taskname">
        //             ${res = document.querySelector('#newtask input').value}
        //         </span>
                
        //         <button class="delete">
        //             <i class="fa fa-trash-o" style="color:red"> </i>
        //         </button>
                
        //         </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                
                
        //     </div>
        // `;

        console.log(name);
        // var email = document.querySelector('#newtask input').value;
        const submitOrderHandler = async (userDat) => {
            const response = await fetch(
                "https://charitable-7d453-default-rtdb.firebaseio.com/credentials.json",
                {
                    method: "POST",
                    body: JSON.stringify({ name: name , email: name}),
                }
            );
        };

        submitOrderHandler();

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentElement.parentElement.remove();
            }
        }



    }
}
