
<p align="center">
    <img  src="images/Logo-letra-sin-fondo.png">
</p>

<p align="center">
  <a aria-label="SDK version" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="Expo SDK version" src="https://img.shields.io/npm/v/expo.svg?style=flat-square&label=SDK&labelColor=000000&color=4630EB">
  </a>
  <a aria-label="expo SDK version" href="https://docs.expo.io/versions/latest/" target="_blank">
    <img alt="Expo SDK version 39 " src="https://img.shields.io/badge/39.0.0-expo%20sdk-green">
  </a>
  <a aria-label="expo SDK version" href="https://reactnative.dev/docs/components-and-apis" target="_blank">
    <img alt="Expo SDK version 2 " src="https://img.shields.io/badge/0.63.2-React%20Native-blue">
  </a>
</p>

# app desplegada en expo

UniWheels Apk android

[![Download](https://img.shields.io/badge/download-1.0-brightgreen.svg)](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40vashigo/Uniwheels-a4aefc7ab17c489d87460e7a4183c6c3-signed.apk)

## 📚 DOCUMENTACIÓN

<p>Learn about building and deploying universal apps <a aria-label="expo documentation" href="https://docs.expo.io">in our official docs!</a></p>

- [Getting Started](https://docs.expo.io/)
- [API Reference](https://docs.expo.io/versions/latest/sdk/overview/)
- [Using Custom Native Modules](https://docs.expo.io/versions/latest/bare/exploring-bare-workflow/)

## Instalar Expo CLI
```
npm install --global expo-cli
```
Verifique que la instalación se haya realizado correctamente ejecutando expo whoami. Aún no ha iniciado sesión, por lo que verá "No iniciado sesión". Puede crear una cuenta ejecutando expo register si lo desea, o si ya tiene un inicio de sesión para expo, pero tampoco necesita una cuenta para comenzar.

## Aplicación cliente Expo para iOS y Android
La forma más rápida de empezar a trabajar es utilizar la aplicación cliente Expo en su dispositivo iOS o Android. El cliente de Expo le permite abrir aplicaciones que se sirven a través de Expo CLI.

- 🤖 Android Play Store: Android Lollipop (5) y superior. [Playstore](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_PR)
- 🍎 App Store de iOS: iOS 10 y superior. [App store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_PR)

Cuando el cliente de Expo haya terminado de instalarse, ábralo. Si creó una cuenta con expo-cli, puede iniciar sesión aquí en la pestaña "Perfil". Esto le facilitará la apertura de proyectos en el cliente cuando los tenga abiertos en desarrollo; aparecerán automáticamente en la pestaña "Proyectos" de la aplicación cliente.

# 💙 Empezar

instale los paquetes requeridos para ejecutar el proyecto

```
npm install
```

# Correr En Ambiente "Development"

```
expo start
```

## Abrir la aplicación en su teléfono / tableta
```
👨‍👩‍👧‍👧
Puede abrir el proyecto en varios dispositivos simultáneamente. Pruébelo en un teléfono iPhone y Android al mismo tiempo si tiene ambos a mano.
```
- 🍎 En su iPhone o iPad, abra la aplicación "Cámara" de Apple predeterminada y escanee el código QR que ve en la terminal o en Expo Dev Tools.

- 🤖 En su dispositivo Android, presione "Escanear código QR" en la pestaña "Proyectos" de la aplicación cliente de Expo y escanee el código QR que ve en la terminal o en Expo Dev Tools.

# Exportar APK Android

Run:
```
expo build:android
```

# Componentes externos:

Se usa la version free de sus planes que para este proyecto es mucho mas que suficiente para cubrir todos los servicios e interactividad que necesitamos con mapas,

## Api services map

[developer-here page](https://developer.here.com/documentation/maps/3.1.19.2/dev_guide/index.html)

# Equipo

* **Ron-404** - *Initial work* - [Ron-404](https://github.com/orgs/Ron-404)