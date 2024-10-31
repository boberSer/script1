const button = document.getElementById('button');
const inputFile = document.querySelector('.inputTable');
const form = document.querySelector('.form');
const h2 = document.querySelector('.h2');
const adaptive = document.querySelector('.adaptive');
// button.addEventListener('click', () => input.reset());

let fform = document.createElement('form');



function createForm(object) {
    h2.innerHTML = object.name;
    form.innerHTML = '';


    if (object.fields) {
        object.fields.forEach((field) => {
            // console.log(field)

            let div = document.createElement('div')
            div.classList.add('input-block');

            if (field.label) {
                let label = document.createElement('label');
                label.innerHTML = field.label;

                div.append(label);
            }

            if (field.input) {
                let input = document.createElement('input');
                
                for (let key of Object.keys(field.input)) { //  ну вроде проход по ключам объекта
                    input.setAttribute(key, field.input[key])   //  вписываю атрибуты для input
                    if (field.input.mask) {
                        input.setAttribute('placeholder',field.input.mask);
                        // input.setAttribute('class','mask');


                    }
                }

                if (field.input.technologies) {
                    input = document.createElement('select');
                    input.setAttribute('multiple',true)
                    field.input.technologies.forEach((technology => { //выполнение функции для элемента массива 
                        technology.innerHTML = field.input.technologies.technology;  // вписывает в хтмл
                        let option = document.createElement('option');
                        option.append(technology);
                        input.append(option);
                        div.append(input);   
                        // console.log(div)

                                    
                    }))
                }
        
                div.append(input) 
            }

            
            
             
               
            

             
            
            form.append(div)
        });    
    }

    if (object.references) {
        let div = document.createElement('div');
        object.references.forEach((inputRef) => {
            // console.log(inputRef)


            if (inputRef.input) {
                let input = document.createElement('input');
                for (let key of Object.keys(inputRef.input)) {
                    input.setAttribute(key, inputRef.input[key])
                    input.classList.add('input-ref')
                    
                }
                div.append(input)

            } else {
                if(inputRef.ref) {
                    let a = document.createElement('a');
                    let p = document.createElement('p');
                    a.setAttribute('href', inputRef.ref);
                    div.classList.add('ref-forms');

                    a.append(inputRef["text"]);
                    if (inputRef['text without ref']) {
                        p.append(inputRef['text without ref'],a);
                    }

                    p.append(a);
                    div.append(p);


                }
              
            }
            form.append(div)
            
            
        });

    }

    if (object.buttons) {
        let div = document.createElement('div');
        div.classList.add("buttonForm");

        object.buttons.forEach((button) => {
            let buttonElem = document.createElement('button');

            buttonElem.innerText = button.text;
            if (button.text === "Send") {
                buttonElem.classList.add("send-button")

            } else {
                buttonElem.classList.add("cancel-button")

            }

            div.append(buttonElem);
            form.append(div);

        })

    }

}

button.onclick = function (e) {
    e.preventDefault();
    form.innerHTML = 'Паша красавчик';
    h2.innerHTML = 'nothing';
    inputFile.value = ''


}



function donwLoad(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
        createForm(JSON.parse(reader.result))
    }            
        }

// func = function(e) {
//
//     e.preventDefault();
//     document.querySelector(".form").reset();
//     }
