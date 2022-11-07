const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

let form = document.querySelector('.quiz-form');



let inputQest1 = document.querySelectorAll('input[name="q1"]')
let inputQest2 = document.querySelectorAll('input[name="q2"]')
let inputQest3 = document.querySelectorAll('input[name="q3"]')
let inputQest4 = document.querySelectorAll('input[name="q4"]')
let inputQest5 = document.querySelectorAll('input[name="q5"]')





let allInputs = document.querySelectorAll('input')
let buttonSub = document.querySelector('button')

let questionsBloc = document.querySelectorAll('.question-block')

let greatAnswer1 = document.querySelector('input[id="Bonaparte"]')
let greatAnswer2 = document.querySelector('input[id="date1"]')
let greatAnswer3 = document.querySelector('input[id="date5"]')
let greatAnswer4 = document.querySelector('input[id="Ljubljana"]')
let greatAnswer5 = document.querySelector('input[id="m3"]')

    let allBlocks = [
                        {answers: inputQest1,
                         styleBlock: questionsBloc[0],
                         greatAnswer: greatAnswer1

                        },
                        {answers: inputQest2,
                         styleBlock: questionsBloc[1],
                         greatAnswer: greatAnswer2

                        },
                        {answers: inputQest3,
                         styleBlock: questionsBloc[2],
                         greatAnswer: greatAnswer3

                        },
                        {answers: inputQest4,
                         styleBlock: questionsBloc[3],
                         greatAnswer: greatAnswer4

                        },
                        {answers: inputQest5,
                         styleBlock: questionsBloc[4],
                         greatAnswer: greatAnswer5

                        }
                    ]

let verify = (block)=>{

       if(block.greatAnswer.checked){
         block.styleBlock.style.backgroundColor = 'blue'
       }
       else{
       block.styleBlock.style.backgroundColor = 'white'
       }
    //    }
        // if(!inputs.checked){
        //     console.log('nop')
        // }
        // else{
        //     console.log('yes')
        // }
        console.log(block.greatAnswer)
    
       
}


form.addEventListener('submit', function(evt){
    evt.preventDefault()
    allBlocks.forEach(tab => {
        verify(tab)
    });

   
})