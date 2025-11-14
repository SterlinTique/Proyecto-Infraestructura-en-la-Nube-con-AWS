# Proyecto de Login y CRUD con Flask y PostgreSQL

Este proyecto fue desarrollado como parte del curso de Sistemas Operativos, con el objetivo de aplicar conceptos clave como contenedorización y modularidad; y ahora utilizado en el curso Insfraestructura en la Nube con AWS para despliegue en la nube y uso de servicios AWS. La aplicación incluye un sistema de login/registro (con hasheo de contraseñas) y un CRUD para gestionar productos, con arquitectura desacoplada entre frontend y backend.

##  Arquitectura

- **Frontend**: HTML, CSS y JavaScript estáticos, desacoplados del backend.
- **Backend**: API REST construida con Flask, conectada a PostgreSQL.
- **Base de datos**: PostgreSQL, gestionada vía Docker.
- **Contenedores**: Docker + Docker Compose para levantar backend y base de datos.

## Tecnologías y herramientas utilizadas

| Categoría             | Herramientas / Tecnologías                            |
|-----------------------|-------------------------------------------------------|
| Lenguajes             | Python 3.11, HTML, CSS, JavaScript                    |
| Frameworks            | Flask (microframework para backend web/API)           |
| Base de datos         | PostgreSQL                                            |
| Contenedores          | Docker, Docker Compose                                |
| Seguridad             | Werkzeug (hash de contraseñas), variables de entorno  |

| Control de versiones  | Git                                                   |
| Editor sugerido       | Visual Studio Code                                    |


## Estructura del proyecto

├── backend/ 
│ ├── app.py 
│ ├── config.py 
│ ├── basededatos.py 
│ ├── conexion.py 
│ ├── requirements.txt 
│ ├── Dockerfile 
│ └── docker-compose.yml 
├── frontend/ 
│ ├── index.html 
│ ├── dashboard.html 
│ ├── loginRegistro.html 
│ ├── productos/ 
│ │ ├── crear.html 
│ │ ├── editar.html 
│ │ └── listar.html 
│ ├── css/ 
│ │ └── estilos.css 
│ └── js/ 
│ │ ├── api.js 
│ │ ├── dashboard.js 
│ │ ├── loginRegistro.js 
│ │ ├── index.js 
│ │ ├── crear.js 
│ │ ├── listar.js 
│ │ └── editar.js


## Funcionalidades

- Registro y login de usuarios con contraseña encriptada
- CRUD completo de productos (crear, listar, editar, eliminar)
- API REST con respuestas en JSON
- Frontend desacoplado que consume la API vía `fetch()`
- Contenedores Docker para backend y base de datos

## Responsable

- Jader Sterlin Tique Medina

## Instalación

### Sin Docker

1. Clona el repositorio.
2. Crea un entorno virtual: `python -m venv env`
3. Activa el entorno: `source env/bin/activate` (Linux/macOS) o `.\env\Scripts\activate` (Windows)
4. Instala dependencias: `pip install -r requirements.txt` o `python -m pip install -r requirements.txt`
5. Confirma la instalación de las dependencias en el entorno virtual `python -m pip list`
6. Configura la conexión a PostgreSQL en `config.py` 
7. Ejecuta el backend: `python app.py`
8. Abre `frontend/login.html` directamente en tu navegador.

### Con Docker y Docker Compose

1. Clona el repositorio.
2. Ejecuta: `docker-compose up --build`
3. Accede al backend en `http://localhost:5000/api`
4. El frontend puede abrirse directamente desde los archivos HTML o desplegarse en S3.

## Uso

1. Abre `frontend/login.html` en tu navegador.
2. Regístrate y accede con tus credenciales.
3. Navega entre las páginas para listar, crear, editar o eliminar productos.
4. El frontend se comunica con el backend vía API REST.

## Notas

- Si `pip` lanza errores, ejecuta: `pip install --upgrade setuptools`
- Puedes adaptar las variables de entorno en `docker-compose.yml` para producción
- Para desplegar el frontend en AWS S3, sube la carpeta `frontend/` como sitio web estático

---

| Paquete               | Descripción                                                                   |
|-----------------------|-------------------------------------------------------------------------------|
| `Flask`               | Microframework para construir aplicaciones web y APIs REST en Python.         |
| `Flask-Bcrypt`        | Integra `bcrypt` con Flask para hashear contraseñas de forma segura.          |
| `Flask-Login`         | Maneja sesiones de usuario, login/logout y protección de rutas.               |
| `Flask-SQLAlchemy`    | ORM que conecta Flask con bases de datos relacionales como PostgreSQL.        |
| `Flask-WTF`           | Integra formularios HTML con validación en Flask usando WTForms.              |
| `Flask-Cors`          | Permite que el frontend desacoplado consuma la API desde otro dominio.        |
| `Werkzeug`            | Biblioteca base de Flask para enrutamiento, servidor y seguridad HTTP.        |
| `Jinja2`              | Motor de plantillas usado por Flask (aunque no se usa en frontend desacoplado)|
| `WTForms`             | Permite definir y validar formularios HTML en Python.                         |
| `bcrypt`              | Algoritmo de cifrado para generar/verificar hashes de contraseñas.            |
| `psycopg2-binary`     | Driver que permite a Python conectarse a bases de datos PostgreSQL.           |
| `SQLAlchemy`          | ORM que traduce modelos Python a SQL y gestiona consultas.                    |
| `greenlet`            | Biblioteca de concurrencia ligera usada por SQLAlchemy.                       |
| `itsdangerous`        | Genera tokens seguros para sesiones o recuperación de contraseña.             |
| `blinker`             | Sistema de señales usado por Flask para emitir eventos internos.              |
| `click`               | Utilidad para crear comandos en la terminal (usado por Flask CLI).            |
| `colorama`            | Permite imprimir texto con colores en la terminal (útil para depuración).     |
| `MarkupSafe`          | Protege contra inyecciones de HTML/JS al escapar contenido en plantillas.     |
| `typing_extensions`   | Proporciona tipos adicionales para anotaciones en Python.                     |
| `python-dotenv`       | Permite cargar variables de entorno desde un archivo `.env`.                  |
