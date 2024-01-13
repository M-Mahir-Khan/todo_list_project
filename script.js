
const body = document.querySelector("body")
const mainContainer = createAndAppend("div","class","mainContainer",body);
const mainForm = createAndAppend("form","class","mainForm",mainContainer,null,"submit")
let mainInput = createAndAppend("input","type","text",mainForm)
const submit = createAndAppend("input","type","submit",mainForm)

function createAndAppend(tag,attType,AttNname,parent,text,event){
    const element = document.createElement(tag)
    if(!!(attType&&AttNname)){
        element.setAttribute(attType,AttNname)
    }
    if(!!parent){
        parent.append(element)
    }
    if(!!text){
        element.innerText = text
    }
    //Event
    if(!!event){
        element.addEventListener(event,listener)
        function listener(e){
            e.preventDefault();
            e.stopPropagation();
            if(e.type === "submit"){
                if(e.target.classList[0] === "mainForm"){
                    const todoContainer = createAndAppend("div","class","todoContainer",mainContainer)
                    const para = createAndAppend("p","class","para",todoContainer,mainInput.value);
                    const btnContainer = createAndAppend("div","class","btnContainer",todoContainer)
                    const editBtn = createAndAppend("button","class","editBtn",btnContainer,"Edit","click")
                    const deleteBtn = createAndAppend("button","class","deleteBtn",btnContainer,"Delete","click")
                    mainInput.value = ""
                }
                // if(e.target.classList.contains("innerForm")){
                //     // 
                //     const inputOfInnerForm = e.target.querySelector(".innerFormInput");
                // const paraOfOutput = e.target.closest(".todoContainer").querySelector(".para");
                // paraOfOutput.textContent = inputOfInnerForm.value;
                // e.target.remove();
                // }
            }
            if(e.type === "click"){
                if(e.target.textContent === "Delete"){
                    const todoContainerGetting = e.target.closest(".todoContainer");
                    if(confirm("are you sure")){
                        todoContainerGetting.remove()
                    }
                }
                if(e.target.textContent === "Edit"){
                    const paraOfOutput = e.target.closest(".todoContainer").querySelector(".para");
                    const innerFormContainer = createAndAppend("div","class","innerDivOfForm",mainContainer)
                    const innerForm = createAndAppend("form","class","innerForm",innerFormContainer,null,"submit")
                    const innerFormInput = createAndAppend("input","type","text",innerForm)
                    innerForm.setAttribute("class","innerFormInput")
                    const innerFormSubmit = createAndAppend("button","type","submit",innerForm,"Save")
                    const innerFormCancel = createAndAppend("button","type","submit",innerForm,"Cancel")
                    innerForm.addEventListener("submit", function (e) {
                        paraOfOutput.textContent = innerFormInput.value;
                        innerForm.remove();
                    });
                    innerFormCancel.addEventListener("click", function (e) {
                        innerForm.remove();
                    });
                }
            }
        }
    }
    return element;
}
