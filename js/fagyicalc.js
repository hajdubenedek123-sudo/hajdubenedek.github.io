


let calcButton = document.getElementById("calcButton");


if (calcButton) {
    calcButton.addEventListener("click", function() {

       
        let scoopsInput = document.getElementById("scoops");
        let scoops = Number(scoopsInput.value);

      
        if (isNaN(scoops)) {
            scoops = 1;
        }
        if (scoops < 1) {
            scoops = 1;
        }
        if (scoops > 5) {
            scoops = 5;
        }

     
        let price = scoops * 400;

        let coneChocolate = document.querySelector("input[name='cone'][value='chocolate']");
        let coneCup = document.querySelector("input[name='cone'][value='cup']");

        if (coneChocolate && coneChocolate.checked) {
            price = price + 150; 
        } else if (coneCup && coneCup.checked) {
            price = price + 100; 
        }

 
        let topFruit = document.getElementById("topFruit");
        let topNuts = document.getElementById("topNuts");
        let topSyrup = document.getElementById("topSyrup");

        if (topFruit && topFruit.checked) {
            price = price + 200;
        }
        if (topNuts && topNuts.checked) {
            price = price + 250;
        }
        if (topSyrup && topSyrup.checked) {
            price = price + 150;
        }

  
        let resultBox = document.getElementById("calcResult");
        resultBox.textContent = "A fagylalt becsült ára: " + price + " Ft";
    });
}
