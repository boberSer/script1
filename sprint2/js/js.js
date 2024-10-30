// const button = document.getElementById('button');
// const input2 = document.querySelector('.inputTable');
const form = document.querySelector('.form');
const h2 = document.querySelector('.h2');
const adaptive = document.querySelector('.adaptive');
// button.addEventListener('click', () => input.reset());

let fform = document.createElement('form');



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
                    a.append(inputRef["text without ref"]);
                    p.append(inputRef['text'],a);
                    div.append(p)
                    div.append(a)

                }
              
            }
            form.append(div)
            
            
        });

    }

    if (object.buttons) {
        let button = document.createElement('button')
        object.buttons.forEach((buttonew) => {
            // console.log(buttonew)
            
            buttonew.text = object.buttons.text;
            console.log(buttonew);
            button.setAttribute('onclick', "func()");
            button.append(buttonew);

            // if (buttonew.buttons) {
            //     buttonew.buttons.forEach((news) => {
            //         // let button = document.createElement('button');
            //         news.innerHTML = buttons.text;
            //         button.append(news)
            //         console.log(news)
            //     })
                
                

            //     // for (let key of Object.keys(buttonew.button)){
            //     //     
                    
            //     // }
                
            // }
            form.append(button)
            // console.log(buttonew);
            console.log(button);


            
            
            
            


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

func = function(e) {

    e.preventDefault();
    document.querySelector(".form").reset();
    }
