# Estudiantes

```js
- Camilo Andres Franco Duran
- Jhon Sebastian Gutierrez Garnica
- Juan Sebastian Reyes Loaiza
- William David Rodriguez Guerrero
```

# Proyecto - Aplicación de Compra y Venta de Artesanías

Esta aplicación tiene como objetivo conectar a artesanos de **Bucaramanga** con compradores interesados en productos artesanales únicos y auténticos. 
Este proyecto es una aplicación web desarrollada utilizando Vite, React y JavaScript. Ofrece una plataforma de comercio electrónico completa con autenticación de usuarios, gestión de productos y varios servicios adicionales.

## Estructura del Proyecto

Este proyecto sigue una estructura típica de aplicación React con algunos directorios personalizados:

```yaml
├── api/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── model/
│   ├── routes/
│   └── validators/
├── src/
│   ├── components/
│   │   ├── customerService/
│   │   ├── discounts/
│   │   ├── home/
│   │   ├── login/
│   │   ├── markets/
│   │   ├── shop/
│   │   ├── signup/
│   │   ├── start/
│   │   └── user/
│   ├── img/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

```


## Ramas trabajadas para cada persona

- camilo
- jhon
- sebastian
- william
- dev ()
- main

## Características Principales

1. **Autenticación**: Registro y login de usuarios con opciones de email y número de teléfono y/o correo electronico.
2. **Comercio Electrónico**: Navegación de productos, filtro según busqueda aplicada, gestión de carrito de compras y procesamiento de pedidos.
3. **Talleres**: Información de tiendas y disposición de los talleres que ofrecen.
4. **Descuentos**: Sistema de descuentos aplicado a los productos.
5. **Perfil de Usuario**: Gestión de información de usuario y favoritos.
6. **Servicio al Cliente**: Funcionalidad de chat para soporte al cliente. Este apartado fue desarrollado usando Socket.IO.

## Rutas de la API

El backend proporciona una API RESTful con los siguientes endpoints clave:

1. `/discounts`: Gestión de descuentos de productos
2. `/favorites`: Manejo de favoritos de usuarios
3. `/workshop`: Operaciones relacionadas con talleres
4. `/markets`: Gestión de mercado y productos
5. `/signup` y `/login`: Autenticación de usuarios
6. `/shop`: Gestión de carrito de compras y pedidos

Para una lista completa de endpoints, consulta la configuración del router en el código “/api/routes/router.js”

## Rutas del Frontend

La aplicación utiliza React Router para la navegación. Las rutas principales incluyen:

1. `/`: Página de inicio
2. `/home`: Panel principal
3. `/markets`: Mercado
4. `/discounts`: Página de descuentos
5. `/shop`: Carrito de compras
6. `/user`: Perfil de usuario
7. `/login` y `/signup`: Páginas de autenticación
8. `/workshops`: Páginas de talleres

Consulta el componente `<Routes>` en el código del frontend para una lista completa de rutas.

## Cómo Empezar

1. Clona el repositorio escribiendo el siguiente codigo en el terminal: 
    
    ```yaml
    git clone https://github.com/Thewilliamg/proyectoFinalExpress
    ```
    
2. Instala las dependencias:
    
    ```
    npm install
    ```
    
3. Inicia el servidor del desarrollo FronEnd:
    
    ```
    npm run dev // Abre el puerto "localhost:5173"
    ```
    
4. Para el backend, navega al directorio de la API y ejecuta:
    
    ```
    npm run start // Abre el puerto "localhost:5001"
    ```
    

## Notas de Desarrollo

El proyecto utiliza Vite para un desarrollo y construcción rápidos.

React se usa para el frontend, con JavaScript como lenguaje principal.

El backend está desarrollado utilizando NodeJs, Express.js conectado a una base de datos en MongoDB usando la bibliboteca mongoose para el trasnporte de la información entre api y DB

La URI de la base de datos es:

```yaml
mongodb://camiloandresfrancoduran:1095791057@ac-cdbtdae-shard-00-00.awgtpav.mongodb.net:27017,ac-cdbtdae-shard-00-01.awgtpav.mongodb.net:27017,ac-cdbtdae-shard-00-02.awgtpav.mongodb.net:27017/dbExpress?replicaSet=atlas-d84ity-shard-0&ssl=true&authSource=admin
```

Las variables de entorno estén correctamente configuradas en el archivo `.env` antes de ejecutar la aplicación.

Generar el archivo .env con exactamente la siguientes caracteristicas:

```yaml
EXPRESS_HOST=localhost
EXPRESS_PORT=5001
EXPRESS_STATIC="src"
CONECTION_MONGODB=mongodb://camiloandresfrancoduran:1095791057@ac-cdbtdae-shard-00-00.awgtpav.mongodb.net:27017,ac-cdbtdae-shard-00-01.awgtpav.mongodb.net:27017,ac-cdbtdae-shard-00-02.awgtpav.mongodb.net:27017/dbExpress?replicaSet=atlas-d84ity-shard-0&ssl=true&authSource=admin
DISCORD_CLIENT_ID=1288887797364555860
DISCORD_CLIENT_SECRET=n_-wn023OoPEeUhny_U4F3KOq8W2Vb1b
DISCORD_CALLBACK_URL=http://localhost:5001/auth/discord/callback
SESSION_SECRET="proyectoFinalExpress"
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
