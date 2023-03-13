const morseCode = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..'
  };

  function translateToMorse() {
    let input = document.getElementById("input").value;
    input = input.toLowerCase();
    let result = "";
    for (let i = 0; i < input.length; i++) {
      result += morseCode[input[i]] + " ";
    }
    document.getElementById("output").innerHTML = result;
  }