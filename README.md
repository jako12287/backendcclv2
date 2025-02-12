# backend CCL

## Requisitos de instalación

### node v20.13.1

### 1. Clonar el repositorio
Clona el repositorio con el siguiente comando:

```bash
git clone https://github.com/jako12287/backendcclv2.git
```
### 2. Navega hasta la carpeta del proyecto

```bash
cd backendcclv2
```

### 3. Instalacion de las dependencias necesarias para el proyecto

```bash
npm install
```

### 4 Configurar Docker Desktop
Puedes descargarlo aca

```bash
https://www.docker.com/products/docker-desktop/
```

### 5. Copiar el archivo .env
En la raiz del proyecto copiar el archivo .env proporcionado

### 6. Levantar los contenedores con Docker Compose

```bash
docker-compose up --build
```

Una vez que Docker haya levantado los contenedores, se podra acceder a la API en el siguiente endpoint

http://localhost:4000

### Usuario en BD
La base de datos de Docker ya tiene un usuario administrador creado con los siguientes datos:

Email: adminccl@ccl.com Contraseña: 123456

