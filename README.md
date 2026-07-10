<div align="center">

# JavaScript — Ejercicios Prácticos de Estructuras Condicionales

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)

</div>

## 📋 Descripción

Colección de 19 ejercicios de JavaScript enfocados en lógica condicional y estructuras de decisión (`if/else`, `switch`). Diseñados como progresión de aprendizaje: desde comparaciones simples hasta escenarios más complejos con manipulación de fechas y lógica de calculadora.

## 🎯 Progresión de los ejercicios

| Rango | Enfoque |
|---|---|
| E1 – E4 | Valores fijos, `if/else` simple |
| E5 – E11 | Condiciones más complejas, operaciones con strings |
| E12 – E19 | Entrada interactiva por consola (`prompt-sync`), `switch`, casos como calculadora, años bisiestos y cálculo de días por mes |

## 🛠️ Stack

- **Lenguaje:** JavaScript (Node.js)
- **Librería:** [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) — entrada de datos interactiva por consola

## 📦 Instalación y ejecución

```bash
git clone https://github.com/Camilocostas/JavaScript-ejercicios-Practicos.git
cd JavaScript-ejercicios-Practicos
npm install
```

Ejecutar un ejercicio puntual:

```bash
node E1.js     # Comparación simple, no requiere input
node E12.js    # Calculadora interactiva (usa prompt-sync)
node E16.js    # Días por mes con lógica de año bisiesto (usa prompt-sync)
```

## 🗂️ Estructura

```
JavaScript-ejercicios-Practicos/
├── E1.js ... E19.js     # 19 ejercicios progresivos
├── package.json
└── package-lock.json
```

## ⚠️ Nota de mantenimiento

Este repo tiene actualmente la carpeta `node_modules/` versionada por error. Pendiente: agregarla al `.gitignore` y eliminarla del historial con `git rm -r --cached node_modules`.
