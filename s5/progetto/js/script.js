// NEW TASK
function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task_txt").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
      alert("Scrivi qualcosa! Procrastinatore che non sei altro.");
    } else {
      document.getElementById("tasks_list_html").appendChild(li);
    }
    document.getElementById("task_txt").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  document.querySelector("button").addEventListener("click", newTask);

  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  var list = document.querySelector('ul');
list.addEventListener('click', function(evento) {
  if (evento.target.tagName === 'LI') {
    evento.target.classList.toggle('checked');
  }
}, false);


 /* //SAVE IT
 function salvaElementi(tasks_list_html){
     let savedElements = localStorage.getItem("tasks_list_html");
    let db = savedElements == null ? [] : JSON.parse(savedElements);
    db.push(tasks_list_html);
    localStorage.setItem("tasks_list_html", JSON.stringify(db));
    }
function creaHTML(){
        let savedElements = localStorage.getItem('tasks_list_html')
        let db = savedElements == null ? [] : JSON.parse(savedElements)



    db.forEach(function (elemento) {
            let li = document.createElement('li')

            li.innerText = elemento

            document.querySelector('#tasks_list_html').append(li)

            li.addEventListener('click', function () {
                li.remove()
                elimina(li)
            })

        })
    }

creaHTML();

    function elimina(elemento) {
        let savedElements = localStorage.getItem("tasks_list_html");
    let db = savedElements == null ? [] : JSON.parse(savedElements);

        var indice = db.indexOf(elemento)

        db.splice(indice, 1)
        localStorage.setItem('tasks_list_html', JSON.stringify(db))
    }
console.log(salvaElementi);*/

