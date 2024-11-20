document.addEventListener("DOMContentLoaded",
    function(e){
        let choiceBtn = document.querySelector("#choiceBtn")
        let muneSelected = document.querySelector("#muneSelected")
        let img_selected = document.querySelector("#img_selected")
        let imgSrc = img_selected.getAttribute("src")
        let imgalt = img_selected.getAttribute("alt")

        let number = Math.floor(Math.random() * 100)

        choiceBtn.addEventListener("click",
            function(e){
                let number = Math.floor(Math.random() * 6)
                switch(number){
                    case 0 : muneSelected.textContent="감자"
                    break
                    case 1 : muneSelected.textContent="가지"
                    break
                    case 2 : muneSelected.textContent="두부"
                    break
                    case 3 : muneSelected.textContent="라면"
                    break
                    case 4 : muneSelected.textContent="물만두"
                    break   
                    case 5 : muneSelected.textContent="외식 NICE!"
                    break                 
                }
            }
        )












    }
)