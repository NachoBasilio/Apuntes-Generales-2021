export default {
    port: 4321,             // Usamos el puerto 4321 en lugar de 8000
    watch: true,            // Vigilamos cambios (actualiza automágicamente)
    appIndex: "index.html", // Routing SPA (los 404 envían a esa ruta)
    nodeResolve: true,      // Resolvemos paquetes a node_modules
    preserveSymlinks: true,  // Sigue los enlaces simbólicos con nodeResolve
    esbuildTarget: ["auto", "safari11", "chrome80"],  // Compatibilidad JS
    open: true,             // Abrimos la página principal en el navegador
    debug: false,           // Se puede activar modo verbose
    http2: true,            // Utilizamos HTTPS en lugar de HTTP
    sslKey: "./ssl.key",    // Clave privada HTTPS
    sslCert: "./ssl.cert",  // Clave pública HTTPS
    rootDir: ".",           // Utilizamos esta carpeta raíz
    plugins: []             // Plugins a utilizar
  }