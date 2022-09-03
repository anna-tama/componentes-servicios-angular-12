# angular-12-pl
Para que funcione NGModel es necesario tener incorporado FormsModule en app.module.ts

--angular DevTools
https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh

--Firebase
Compilacion/Hosting
npm install -g firebase-tools
firebase -V  (11.8.0)
firebase login
firebase init (elegir Hosting Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys )
Use an existing project
escribir la palabra public
? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? (y/N) n
eliminar carpetar public



ng build (genera la carpeta build)

se genera automaticamente firebase.json
seteo public por mi ruta dist/nombre del proyecto
    "public": "dist/my-store",

firebase deploy (sube la dist al hosting)
