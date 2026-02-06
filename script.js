const display = document.getElementById("display");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

document.addEventListener("keydown",() => {
  if (event.key === "1") {
    display.value += "1"
  }
  else if(event.key === "2"){
    display.value += "2"
  }
  else if(event.key === "3"){
    display.value += "3"
  }
  else if(event.key === "4"){
    display.value += "4"
  }
  else if(event.key === "5"){
    display.value += "5"
  }
  else if(event.key === "6"){
    display.value += "6"
  }
  else if(event.key === "7"){
    display.value += "7"
  }
  else if(event.key === "8"){
    display.value += "8"
  }
  else if(event.key === "9"){
    display.value += "9"
  }
  else if(event.key === "0"){
    display.value += "0"
  }else if(event.key == "+"){
    display.value += "+"
  }else if(event.key == "-"){
    display.value += "-"
  }else if(event.key == "/"){
    display.value += "/"
  }else if(event.key == "*"){
    display.value += "*"
  }else if(event.key == "Enter"){
    try {
        result.value = "Ans = " + eval(display.value);
        
      } catch {
        display.value = "Error";
      }
  }else if(event.key == "Backspace"){
      display.value = display.value.slice(0, -1);
  }else if(event.key == "Delete"){
    display.value = "";
    result.value = "";
  }
})

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } 
    else if (value === "⌫") {
      display.value = display.value.slice(0, -1);
    } 
    else if (value === "=") {
      try {
        result.value = "Ans = " + eval(display.value);
        
      } catch {
        display.value = "Error";
      }
    } 
    else {
      display.value += value;
    }
  });
});

