# 🎬 Ejercicio Laravel + Angular — Lista de Películas

> Ejercicio académico: Backend API REST en Laravel + Frontend SPA en Angular Standalone.

---

## 📁 Estructura del proyecto

```
EjercicioLaravelAngular/
├── backend/
│   ├── 01_migracion_movies.php          # Migración de la tabla 'movies'
│   ├── 02_Model_Movie.php               # Modelo Eloquent
│   ├── 03_MovieController.php           # Controlador API (index + store)
│   ├── 04_routes_api.php                # Definición de rutas API
│   └── 05_configuracion_cors.md         # Pasos para habilitar CORS
├── frontend/
│   └── src/app/
│       ├── app.config.ts                # Configuración (provideHttpClient)
│       ├── app.component.ts             # Lógica del componente
│       ├── app.component.html           # Vista
│       └── app.component.css            # Estilos
└── README.md
```

---

## 🚀 Puesta en marcha rápida

### 1. Backend (Laravel)

```bash
# Crear proyecto
cd backend
composer create-project laravel/laravel .

# Configurar .env (base de datos SQLite recomendada para pruebas)
# DB_CONNECTION=sqlite
# DB_DATABASE=:memory:  o  database/database.sqlite

# Ejecutar migración
php artisan migrate

# Copiar los archivos:
#   - 01_migracion_movies.php → database/migrations/
#   - 02_Model_Movie.php      → app/Models/Movie.php
#   - 03_MovieController.php  → app/Http/Controllers/Api/MovieController.php
#   - 04_routes_api.php       → routes/api.php
#   - Configurar CORS según 05_configuracion_cors.md → config/cors.php

# Iniciar servidor
php artisan serve
# → http://localhost:8000
```

### 2. Frontend (Angular)

```bash
# Crear proyecto (Standalone, sin routing)
cd frontend
ng new frontend --standalone --routing=false

# Copiar los archivos:
#   - app.config.ts
#   - app.component.ts / .html / .css

# Iniciar servidor de desarrollo
cd frontend
ng serve --port 4200
# → http://localhost:4200
```

---

## ✅ Verificar funcionamiento

| Prueba | Método | URL | Respuesta esperada |
|--------|--------|-----|-------------------|
| Listar (vacío) | `GET` | `/api/movies` | `[]` (status 200) |
| Crear | `POST` | `/api/movies` | `{"id":1,"title":"Inception",...}` (status 201) |
| Listar (con datos) | `GET` | `/api/movies` | Array con la película (status 200) |

Desde Angular:
- Abrir `http://localhost:4200`
- Escribir un título y presionar "Añadir"
- Ver la película aparecer en la lista
- Abrir F12 → Network y confirmar las peticiones HTTP exitosas
