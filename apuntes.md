# CURSO DE TYPESCRIPT

Se puede prevenir hasta un 15% de Bugs en tus proyectos usando analisis de código estático.

Typescript analiza el código constantemente a la velocidad en que yo lo vaya escribiendo


JAVASCRIPT vs TYPESCRIPT
 - En JS solo te das cuenta si hay algún error hasta que el código está en ejecución.

Instalacion typescript en un proyecto:
 **npm install typescript --save-dev**


**Ni el navegador ni node corren typescript nativamente**

transpilar ts para transformarlo a js:
 - **npx tsc src/*.ts --target es6 --outDir dist **  

Para evitar estar haciendo el proceso de transpilacion cada que queremos ejecutar se crea un archivo **tsconfig.json** el cual lo podemos crear con el comando *npx tsc --init*, este archivo vendra con las configuraciones básicas se puede personalizar a la necesidad del proyecto.
Para compilar en tiempo real podemos usar el comando  *npx tsc --watch*
