# Chunis-PetShop



## 🛠 Herramientas
Este proyecto esta hecho con HTML, CSS, Javascript y [React.JS](https://github.com/facebook/create-react-app).


### 📄 Descripcion
Es un pequeño e-commerce al por menor dedicado a la venta de productos
para perros y gatos. Entre ellos: alimentos, juguetes, snacks, cepillos, y accesorios.

El cliente puede realizar su compra desplazandose por las dos categorias que ofrece Chunis. Para poder comprar una prenda tiene que presionar en el boton que dice "VIEW" el cual lo direccionara al detalle del producto seleccionado. De esta forma se agrega al carrito (siempre y cuando tenga stock) el cual se encuentra en forma de icono en el navbar. Si el producto es agregado al carrito, el stock de la base de datos de Firestore se reduce.

Una vez que el usuario haya agregado los ítems que desee puede navegar al carrito, donde se muestran los ítems seleccionados y el costo total de la compra, allí tiene las opciones de borrar un ítem, vaciar el carrito, seguir comprando o proceder al pago.

Cuando se procede al pago, se le pide al usuario que ingrese nombre y correo. Una vez finalizada la compra le aparece el código de su orden de compra y se borra el carrito. Su orden de compra se almacena en otra base de datos de Firestore, donde se guarda el detalle de la compra, los datos de usuario y la hora y fecha de la compra.




# Getting Started with Create React App
This project was bootstrapped with Create React App.

## Available Scripts
In the project directory, you can run:

`npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

`npm run eject`
Note: this is a one-way operation. Once you `eject`, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

## Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

## Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

## Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

## Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

## Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

## `npm run build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Authors

- [@santiagoadiaz](https://www.github.com/santiagoadiaz)
