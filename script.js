var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  if (screen.value.charAt(screen.value.length - 1) == "+") {
    screen.value = Number(screen.value.charAt(0)) + Math.PI;
  } else if (screen.value.charAt(screen.value.length - 1) == "-") {
    screen.value = Number(screen.value.charAt(0)) - Math.PI;
  } else if (screen.value.charAt(screen.value.length - 1) == "*") {
    screen.value = Number(screen.value.charAt(0)) * Math.PI;
  } else if (screen.value.charAt(screen.value.length - 1) == "/") {
    screen.value = Number(screen.value.charAt(0)) / Math.PI;
  } else if (screen.value.charAt(screen.value.length - 1) == "%") {
    screen.value = Number(screen.value.charAt(0)) % Math.PI;
  } else {
    screen.value = Math.PI;
  }
}

function e() {
  if (screen.value.charAt(screen.value.length - 1) == "+") {
    screen.value = Number(screen.value.charAt(0)) + Math.E;
  } else if (screen.value.charAt(screen.value.length - 1) == "-") {
    screen.value = Number(screen.value.charAt(0)) - Math.E;
  } else if (screen.value.charAt(screen.value.length - 1) == "*") {
    screen.value = Number(screen.value.charAt(0)) * Math.E;
  } else if (screen.value.charAt(screen.value.length - 1) == "/") {
    screen.value = Number(screen.value.charAt(0)) / Math.E;
  } else if (screen.value.charAt(screen.value.length - 1) == "%") {
    screen.value = Number(screen.value.charAt(0)) % Math.E;
  } else {
    screen.value = Math.E;
  }
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function calculate() {
  var splitScreen = screen.value.split("%", 2);
  if (splitScreen.length > 1) {
    screen.value = eval(splitScreen[0] + "/100*" + splitScreen[1]);
  } else {
    screen.value = eval(screen.value);
  }
}
