const textareaText = document.getElementById("textareaText");
const output = document.getElementById("outputText");
const btnEncryptation = document.getElementById("btnEncryptation");
const btnDecryptation = document.getElementById("btnDecryptation");
const btnCopy = document.getElementById("btnCopy");
const encryptionRpta = document.getElementById("encryption__rpta");
const encryptionRight = document.getElementById("encryption__right");
let messageTimeout;

const encriptarTexto = () => {
  const inputText = textareaText.value;
  
  if (!inputText || !/^[a-z\s]*$/.test(inputText)) {
    showMessage("Por favor, ingresa solo letras minúsculas y espacios.!",true);
    encryptionRight.classList.remove("hidden");
    encryptionRpta.classList.add("hidden");
    return;
  }
    encryptionRight.classList.add("hidden");
    encryptionRpta.classList.remove("hidden");

    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    output.value = outputText;
};

const desencriptarTexto = () => {
    const inputText = textareaText.value;

    if (!inputText || !/^[a-z\s]*$/.test(inputText)) {
      showMessage("Por favor, ingresa solo letras minúsculas y espacios.!",true);
      encryptionRight.classList.remove("hidden");
      encryptionRpta.classList.add("hidden");  
      return;
    }

    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    output.value = outputText;
};

const copearTexto = () => {
  
  output.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  showMessage("Texto copiado al portapapeles!");
}


const showMessage = (message,error=false) => {
  messageBubble.textContent = message;
  messageBubble.classList.remove("hidden");
  messageBubble.classList.remove("danger");
  messageBubble.classList.add("show");
  if(error) messageBubble.classList.add("danger");
  if (messageTimeout) {
    clearTimeout(messageTimeout);
}

  messageTimeout= setTimeout(() => {
      messageBubble.classList.remove("show");
      messageBubble.classList.add("hidden");
      messageBubble.classList.remove("danger");
  }, 3000);
};

btnEncryptation.addEventListener("click", encriptarTexto);
btnDecryptation.addEventListener("click", desencriptarTexto);
btnCopy.addEventListener("click", copearTexto);
