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
                muneSelected.textContent = ""
                let number = Math.floor(Math.random() * 6)

                setTimeout(() => {
                    switch(number){
                        case 0 : 
                            muneSelected.textContent="감자"
                            img_selected.setAttribute("src","/image/patato.jpg")
                        break
                        case 1 : muneSelected.textContent="가지"
                        img_selected.setAttribute("src","/image/eggplant.png")

                        break
                        case 2 : muneSelected.textContent="두부"
                        img_selected.setAttribute("src","/image/tofu.png")

                        break
                        case 3 : muneSelected.textContent="라면"
                        img_selected.setAttribute("src","/image/noodle.png")

                        break
                        case 4 : muneSelected.textContent="물만두"
                        img_selected.setAttribute("src","/image/dump.png")

                        break   
                        case 5 : muneSelected.textContent="외식 NICE!"
                        break                 
                    }
                    
                }, 200);
            }
        )












    }
)
