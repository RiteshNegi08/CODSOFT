function appendToDisplay(value) {
    document.getElementById("result").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("result").value = "";
  }
  
  function calculateResult() {
    let expression = document.getElementById("result").value;
  
    try {
      let result = eval(expression);
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid expression");
    }
  }