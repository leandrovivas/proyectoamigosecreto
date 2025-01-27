# proyectoamigosecreto
# Amigo Secreto - Aplicación Web

Este proyecto es una aplicación sencilla que permite a los usuarios agregar nombres a una lista y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". El principal objetivo es practicar lógica de programación con JavaScript y habilidades básicas de HTML.

---

## Características Principales

1. **Agregar nombres**: Los usuarios pueden ingresar nombres de amigos mediante un campo de texto y un botón "Adicionar".
2. **Validar entradas**: Se asegura que el campo no esté vacío antes de agregar un nombre a la lista. Si el campo está vacío, se muestra un mensaje de error.
3. **Visualizar lista**: Los nombres ingresados se muestran dinámicamente en una lista HTML.
4. **Sorteo aleatorio**: Los usuarios pueden hacer clic en un botón "Sortear Amigo" para seleccionar aleatoriamente un nombre de la lista.

---

## Estructura del Proyecto

### **1. Archivos Principales**

- **index.html**: Contiene la estructura básica de la página web.
- **app.js**: Contiene toda la lógica del programa en JavaScript.
- **style.css**: Define el estilo visual de la aplicación (no incluido en este repositorio, pero puede ser implementado).

### **2. Tecnologías Utilizadas**

- **HTML**: Para la estructura de la interfaz de usuario.
- **JavaScript**: Para implementar la lógica de la aplicación.
- **CSS** (opcional): Para el diseño y estilos.

---

## Guía de Instalación

1. Clonar este repositorio:
   ```bash
   git clone [URL-del-repositorio]
   ```
2. Abrir el archivo `index.html` en cualquier navegador web.

---

## Guía de Uso

1. Abrir la aplicación en un navegador web.
2. Escribir el nombre de un amigo en el campo de texto.
3. Hacer clic en el botón **Adicionar** para agregar el nombre a la lista.
4. Repetir los pasos 2 y 3 para agregar más amigos.
5. Hacer clic en el botón **Sortear Amigo** para seleccionar aleatoriamente un nombre de la lista.
6. El nombre seleccionado se mostrará en la pantalla.

---

## Funcionalidades y Lógica Implementada

### **1. Declaración del Array**

- Se utiliza un array llamado `listaDeNombres` para almacenar los nombres ingresados por los usuarios:
  ```javascript
  let listaDeNombres = [];
  ```

### **2. Agregar Amigos**

- La función `agregarAmigo()` captura el valor del campo de texto, valida que no esté vacío, lo agrega al array y actualiza la lista visual:
  ```javascript
  function agregarAmigo() {
      let nombreAmigo = document.getElementById("amigo").value;
      if (nombreAmigo === "") {
          asignarTextoElemento("h2", "Por favor, ingresar un nombre");
      } else {
          listaDeNombres.push(nombreAmigo);
          limpiarCaja();
          actualizarLista();
      }
  }
  ```

### **3. Limpiar el Campo de Entrada**

- Después de agregar un nombre, el campo de texto se restablece a una cadena vacía:
  ```javascript
  function limpiarCaja() {
      document.getElementById("amigo").value = "";
  }
  ```

### **4. Actualizar Lista Visual**

- La función `actualizarLista()` recorre el array `listaDeNombres` y agrega cada nombre como un elemento `<li>` en una lista HTML:
  ```javascript
  function actualizarLista() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";
      for (let i = 0; i < listaDeNombres.length; i++) {
          lista.innerHTML += "<li>" + listaDeNombres[i] + "</li>";
      }
  }
  ```

### **5. Sorteo Aleatorio**

- La función `sortearAmigo()` selecciona aleatoriamente un nombre del array usando `Math.random()` y `Math.floor()`:
  ```javascript
  function sortearAmigo() {
      if (listaDeNombres.length < 2) {
          alert("Tenes que ingresar al menos dos amigos para realizar el sorteo.");
          return;
      }
      let indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);
      let amigoSorteado = listaDeNombres[indiceAleatorio];
      mostrarResultado(amigoSorteado);
  }
  ```

### **6. Mostrar Resultado**

- Se utiliza la función `mostrarResultado()` para mostrar el nombre del amigo sorteado en pantalla:
  ```javascript
  function mostrarResultado(amigoSorteado) {
      let resultadoHTML = document.getElementById("resultado");
      resultadoHTML.innerHTML = "El amigo sorteado es: " + amigoSorteado;
  }
  ```

---

## Autor

Proyecto desarrollado por Leandro Vivas.

