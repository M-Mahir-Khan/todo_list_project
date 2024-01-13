const body = document.querySelector("body")
const mainContainer = createAndAppend("div","class","mainContainer",body)
const mainForm = createAndAppend("form","class","mainForm",mainContainer,null,"submit")
let input = createAndAppend("input","type","text",mainForm)
const submit = createAndAppend("input","type","submit",mainForm)

function createAndAppend(tag,attType,attName,parent,text,event){
  const elemet = document.createElement(tag);
  if(!!(attType && attName)){
      elemet.setAttribute(attType,attName)
  }
  if(!!parent){
     parent.append(elemet)
  }
  if(!!text){
    elemet.innerText = text
  }

//   event
if(!!event){
    elemet.addEventListener(event,listener)
    function listener(e){
      e.preventDefault();
      e.stopPropagation();
      if(e.type === "submit"){
        if(e.target.classList[0] === "mainForm"){
          const todoContainer = createAndAppend("div","class","todoContainer",mainContainer);
          const para = createAndAppend("p","class","para",todoContainer,input.value);
          const btnContainer = createAndAppend("div","class","btnContainer",todoContainer)
          const editBtn = createAndAppend("button","class","editBtn",btnContainer,"Edit","click")
          const deleteBtn = createAndAppend("button","class","deleteBtn",btnContainer,"Delete","click")
          input.value = ""
        }
        if(e.target.classList[0] === "innerForm"){
            const inputOfInnerForm = document.querySelector(".innerFormInput")
            const paraOfOutput = document.querySelector(".todoContainer")
            const checkingTask = paraOfOutput.querySelectorAll("p")
            console.log(checkingTask);
            const task = inputOfInnerForm.value;
            const innerForm = document.querySelector(".innerForm")
            paraOfOutput.innerText = task
            console.log(task);
            innerForm.remove()
        }
      }
      if(e.type === "click"){
       if(e.target.textContent === "Delete"){
        const todoContainerGetting = document.querySelector(".todoContainer")
        if(confirm("are you sure")){
              todoContainerGetting.remove()
        }
    }
    if(e.target.textContent === "Edit"){
        // elemet.removeEventListener(event,listener)
      const innerFormContainer = createAndAppend("div","class","innerDivOfForm",mainContainer)
      const innerForm = createAndAppend("form","class","innerForm",innerFormContainer,null,"submit")
      const innerFormInput = createAndAppend("input","type","text",innerForm)
      innerFormInput.setAttribute("class","innerFormInput")
      const innerFormSubmit = createAndAppend("button","type","submit",innerForm,"Save")
      const innerFormCancel = createAndAppend("button","class","cancelChanges",innerForm,"Cancel")
    }
      }
    }
}   
  return elemet
}