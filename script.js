function calculate(operation) {
  let result;
  switch (operation) {
      case 'add':
          const add1 = parseFloat(document.getElementById("input1").value);
          const add2 = parseFloat(document.getElementById("input2").value);
          result = add1 + add2;
          document.getElementById("result1").textContent = result;
          break;
      case 'subtract':
          const sub1 = parseFloat(document.getElementById("input3").value);
          const sub2 = parseFloat(document.getElementById("input4").value);
          result = sub1 - sub2;
          document.getElementById("result2").textContent = result;
          break;
      case 'multiply':
          const mul1 = parseFloat(document.getElementById("input5").value);
          const mul2 = parseFloat(document.getElementById("input6").value);
          result = mul1 * mul2;
          document.getElementById("result3").textContent = result;
          break;
      case 'divide':
          const div1 = parseFloat(document.getElementById("input7").value);
          const div2 = parseFloat(document.getElementById("input8").value);
          result = div2 !== 0 ? div1 / div2 : "Ошибка";
          document.getElementById("result4").textContent = result;
          break;
  }
}