
let circulos = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  circulos.push(new Circulo(width * 0.2, height * 0.2, 30, "https://antoaguirre.github.io/ie23-01/", "Encargo 1"));
  circulos.push(new Circulo(width * 0.4, height * 0.5, 50, "https://antoaguirre.github.io/ie2023-02/", "Encargo 2"));
  circulos.push(new Circulo(width * 0.6, height * 0.8, 80, "https://antoaguirre.github.io/ie2023-03/", "Encargo 3"));
  circulos.push(new Circulo(width * 0.3, height * 0.7, 40, "https://antoaguirre.github.io/ie2023-04/", "Encargo 4"));
  circulos.push(new Circulo(width * 0.7, height * 0.3, 60, "https://antoaguirre.github.io/ie2023-05/", "Encargo 5"));
  circulos.push(new Circulo(width * 0.8, height * 0.6, 45, "https://antoaguirre.github.io/ie2023-06/", "Encargo 6"));
}

function draw() {
    background(255); // Fondo blanco

  circulos.forEach(circulo => {
    circulo.mostrar();
    circulo.actualizar();
  });
}

class Circulo {
  constructor(x, y, diametro, url, nombre) {
    this.x = x;
    this.y = y;
    this.diametro = diametro;
    this.url = url;
    this.nombre = nombre;
    this.sobre = false;
  }

  mostrar() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.diametro / 2) {
      this.sobre = true;
      cursor(HAND);
    } else {
      this.sobre = false;
    }

    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.diametro);

    if (this.sobre) {
      fill(0);
      textAlign(CENTER);
      text(this.nombre, this.x, this.y + this.diametro / 2 + 15);
    }
  }

  actualizar() {
    if (this.sobre && mouseIsPressed) {
      window.open(this.url);
    }
  }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  
    // Redimensionar los círculos al cambiar el tamaño de la pantalla
    circulos.forEach(circulo => {
      circulo.x = width * circulo.x / windowWidth;
      circulo.y = height * circulo.y / windowHeight;
    });
  }