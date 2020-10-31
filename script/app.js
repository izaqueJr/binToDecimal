function convertNumber() {

  const binary = document.getElementById("binary").value


  function validateNum(value) {
    return value <= 1
  }

  const splitBin = binary.split("")
  const numValidate = splitBin.filter(validateNum)

  if (numValidate.length !== splitBin.length) {
    alert("It's not binary")
  } else if (splitBin.length > 8) {
    alert("Please, enter up to 8 binary digits")
  } else {
    const validBinary = parseInt(binary, 2)
    let decimalValue
    decimalValue = document.getElementById("decimal").value = `${validBinary}`
  }

  const teste = "abacaxi"
  const testeSplit = teste.split("")
  console.log(testeSplit)
}