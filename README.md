# 🛒 Proyecto - Ecommerce

## 📌 Descripción del Proyecto
Este proyecto es una plataforma de compras en línea con una interfaz intuitiva y atractiva. Incluye una sección de productos con tarjetas dinámicas, un formulario de contacto bien diseñado y un modal para el carrito de compras. Además, la interfaz es completamente responsiva para adaptarse a distintos dispositivos.

## 🛠️ Tecnologías Utilizadas
- 🌐 **HTML5, CSS3 y JavaScript** (Estructura, estilos y funcionalidad interactiva)
- 🎨 **Bootstrap** (Para un diseño responsivo y atractivo)
- 💾 **LocalStorage** (Para almacenar temporalmente los productos en el carrito)
- 📍 **Google Maps API** (Para mostrar la ubicación en la sección de contacto)
- ⚡ **Font Awesome** (Para iconos elegantes en botones y elementos visuales)

## 🚀 Instrucciones de Instalación y Ejecución
### 🔹 Requisitos previos
- Un navegador web moderno (Google Chrome, Firefox, Edge, etc.)
- Un editor de código (Visual Studio Code recomendado)
- Servidor local (Opcional: XAMPP, WAMP o Live Server en VS Code)

### 📥 Instalación
1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/tuusuario/tu-repositorio.git
   ```
2. **Abrir el proyecto** en tu editor de código favorito.
3. **Ejecutar el proyecto**
   - Si usas VS Code, instala la extensión "Live Server" y ejecuta el archivo `index.html`.
   - Si prefieres un servidor local, mueve el proyecto a `htdocs` y accede mediante `http://localhost/proyecto/`.

## 🎨 Diseño General

### 🛍️ Sección de Productos (Zona de Compras)
- **📦 Contenedor de productos**: 
  - Un `div` con clase `.product-container` que contiene tarjetas de productos.
  - En pantallas grandes: cada tarjeta ocupa un **25% del ancho**.
  - En móviles: cada tarjeta ocupa **100% del ancho**.

- **🛒 Tarjeta de Producto**:
  - 📷 **Imagen:** 300x300px, bordes redondeados (`border-radius: 8px`), efecto hover con zoom y `object-fit: cover;`.
  - 🏷️ **Título y Descripción:** Texto en negrita (`1.2rem` para el título, `0.9rem` para la descripción en gris `#666`).
  - 💰 **Precio:** En negrita, color verde oscuro `#28a745`, tamaño `1.1rem`.
  - ➕ **Botón "Agregar al carrito"**: Verde `#28a745`, texto blanco, hover con tono más oscuro.

### 📩 Formulario de Contacto
- **📝 Casilleros de Información:**
  - Inputs (`Nombre`, `Correo`, `Mensaje`) con `100% width`, `border-radius: 4px`, borde gris claro `#ccc`, y efecto `focus` en azul `#4CAF50`.
  - 📍 **Mapa:** Se mostrará debajo del formulario en dispositivos pequeños.

- **📨 Botón de Envío:**
  - Fondo verde `#4CAF50`, texto blanco, borde redondeado, efecto hover para resaltarlo.

### 🛍️ Modal del Carrito de Compras (Opcional)
- 📦 **Estructura del Modal:**
  - Fondo semi-transparente `rgba(0, 0, 0, 0.5)`.
  - Contenedor centrado con fondo blanco, bordes redondeados y sombra suave.
  - 📜 **Listado de productos:** Muestra los productos agregados al carrito.
  - ❌ **Botón "Cerrar"**: Color gris claro.
  - 🗑️ **Botón "Vaciar Carrito"**: Fondo rojo oscuro `#dc3545`.

### 📱 Responsividad
- 🖥️ **Pantallas grandes:** Diseño en cuadrícula con tarjetas de productos en filas de 4.
- 📱 **Pantallas pequeñas:**
  - Las tarjetas ocupan **100% del ancho** y se centran con `margin: 10px auto;`.
  - El formulario y el mapa se muestran en columnas una debajo de otra.



