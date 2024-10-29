// const button = document.getElementById('button');
// const input2 = document.querySelector('.inputTable');
const form = document.querySelector('.form');
const h2 = document.querySelector('.h2');
// button.addEventListener('click', () => input.reset());

function createForm(object) {
    h2.innerHTML = object.name;


    if (object.fields) {
        object.fields.forEach((field) => {
            // console.log(field)

            let div = document.createElement('div')

            if (field.label) {
                let label = document.createElement('label');
                label.innerHTML = field.label;

                div.append(label);
            }

            if (field.input) {
                let input = document.createElement('input');
                
                for (let key of Object.keys(field.input)) { //  ну вроде проход по ключам объекта
                    input.setAttribute(key, field.input[key])   //  вписываю атрибуты для input
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
                        console.log(div)

                                    
                    }))
                }
        
                div.append(input) 
            }

            
            
             
               
            

             
            
            form.append(div)
        });    
    }

    if (object.references) {
        object.references.forEach((inputRef) => {
            // console.log(inputRef)

            let div = document.createElement('div');


            if (inputRef.input) {
                let input = document.createElement('input');
                for (let key of Object.keys(inputRef.input)) {
                    input.setAttribute(key, inputRef.input[key])
                }
                div.append(input)

            } else {
                if(inputRef.ref) {
                    let a = document.createElement('a');
                    let p = document.createElement('p');
                    a.setAttribute('href', inputRef.ref);
                    a.append(['text without ref']);
                    p.append(inputRef['text'],a);
                    div.append(p)
                    div.append(a)

                }
              
            }
            form.append(div)
            
            
        });

    }

    if (object.buttons) {
        object.buttons.forEach((buttonew) => {
            // console.log(buttonew)

            if (buttonew.buttons) {
                let buttonew = document.createElement('button');
                for (let key of Object.keys(buttonew.button)){
                    buttonew.setAttribute(key, buttonew.buttons[key])
                }
                
            }
            form.append(button)

            
            
            


        })
    }

}

function donwLoad(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
        createForm(JSON.parse(reader.result))
    }            
        }


