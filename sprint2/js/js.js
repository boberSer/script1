// const button = document.getElementById('button');
// const input2 = document.querySelector('.inputTable');
const form = document.querySelector('.form');
const h2 = document.querySelector('.h2');
// button.addEventListener('click', () => input.reset());

function createForm(object) {
    h2.innerHTML = object.name;


    if (object.fields) {
        object.fields.forEach((field) => {
            console.log(field)

            if (field.label) {
                let label = document.createElement('label');
                label.innerHTML = field.label;

                form.append(label);
            }

            if (field.input) {
                let input = document.createElement('input');

                for (let key of Object.keys(field.input)) {
                    input.setAttribute(key, field.input[key])
                }

                form.append(input)

            }          
        });    
    }

    if (object.references) {
        object.references.forEach((inputRef) => {
            console.log(inputRef)


            if (inputRef.input) {
                let input = document.createElement('input');
                for (let key of Object.keys(inputRef.input)) {
                    input.setAttribute(key, inputRef.input[key])
                }
                form.append(input)
            } else {
                if(inputRef.ref) {
                    let a = document.createElement('a');
                    let p = document.createElement('p');
                    a.setAttribute('href', inputRef.ref);
                    a.append(['text without ref']);
                    p.append(inputRef['text'],a);
                    form.append(p)
                    form.append(a)

                }
                
                


                
                
            }
            
            // let p = document.createElement('p');
            // for (let key of object.keys(references)) {
            //     p.innerHTML = references[key]
            //     console.log(p)
            // }
            
        });

    }

    if (object.buttons) {
        object.buttons.forEach((buttonew) => {
            console.log(buttonew)

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


