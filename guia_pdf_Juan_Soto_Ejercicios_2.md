# Guía para el PDF de Entrega — Juan_Soto_Ejercicios_2.pdf

*Valor: 30 % (6 puntos)*

---

## Estructura sugerida del documento

### 1. Portada (0,5 pt)
- Nombre completo del alumno
- Asignatura, profesor, fecha
- Título: *"Ejercicio 2 — API REST Laravel + SPA Angular"*

### 2. Introducción (0,5 pt)
- Breve descripción del ejercicio
- Tecnologías utilizadas (Laravel 11, Angular 17+, MySQL/SQLite)

### 3. Backend — Laravel (2 pts)

| Requisito                                  | Captura indispensable                     |
|--------------------------------------------|--------------------------------------------|
| 3.1 Código de la migración `movies`        | Mostrar el contenido del archivo de migración |
| 3.2 Modelo `Movie`                         | Captura del modelo con `$fillable`         |
| 3.3 `MovieController` con `index()` y `store()` | Captura del controlador completo       |
| 3.4 Rutas API (`routes/api.php`)           | Captura del archivo de rutas               |
| 3.5 Configuración CORS (`config/cors.php`) | Captura mostrando `allowed_origins` con `localhost:4200` |
| 3.6 **Prueba con Postman o curl**          | **Captura 1:** GET a `http://localhost:8000/api/movies` devolviendo `[]` |
|                                             | **Captura 2:** POST a `http://localhost:8000/api/movies` con `{"title":"Inception"}` devolviendo `201` |
|                                             | **Captura 3:** GET nuevamente mostrando la película recién creada |

### 4. Frontend — Angular (2 pts)

| Requisito                                          | Captura indispensable                          |
|----------------------------------------------------|-------------------------------------------------|
| 4.1 `provideHttpClient` en `app.config.ts`          | Captura del archivo de configuración           |
| 4.2 Código TypeScript (`app.component.ts`)          | Captura completa del componente                |
| 4.3 Vista HTML (`app.component.html`)               | Captura de la plantilla                        |
| 4.4 Estilos CSS (`app.component.css`)               | Captura del archivo de estilos                 |
| 4.5 **Pantallazo de la aplicación funcionando**     | **Captura 1:** Formulario + lista vacía        |
|                                                      | **Captura 2:** Escribir "Inception" y hacer clic en "Añadir" |
|                                                      | **Captura 3:** Lista mostrando "Inception" + fecha |
|                                                      | **Captura 4:** Al menos 3 películas en la lista visibles |

### 5. Evidencia de comunicación Backend ↔ Frontend (1 pt)
- **Captura:** Consola del navegador (F12 → Network) mostrando las peticiones `GET` y `POST` a `localhost:8000/api/movies` con código de estado `200` y `201`.
- **Captura:** Opcional — consola de Laravel (`php artisan serve`) mostrando los logs de las peticiones entrantes.

---

## Resumen de capturas obligatorias (mínimo 10)

| #   | Contenido                                       | Puntos |
|-----|-------------------------------------------------|--------|
| 1   | Migración `create_movies_table`                 | 0,4    |
| 2   | Modelo `Movie`                                  | 0,2    |
| 3   | `MovieController` completo                      | 0,6    |
| 4   | `routes/api.php`                                | 0,4    |
| 5   | `config/cors.php` con `localhost:4200`          | 0,4    |
| 6   | GET /api/movies devolviendo lista vacía (Postman) | 0,4  |
| 7   | POST /api/movies creando + 201 (Postman)        | 0,4    |
| 8   | GET /api/movies con la película (Postman)       | 0,2    |
| 9   | `app.config.ts` con `provideHttpClient`         | 0,2    |
| 10  | `app.component.ts` completo                     | 0,6    |
| 11  | `app.component.html` y `app.component.css`      | 0,4    |
| 12  | Pantallazo Angular con formulario + lista       | 0,8    |
| 13  | Network tab con GET/POST exitosos               | 1,0    |
|     | **Total**                                       | **6,0** |

---

## Comandos rápidos de verificación

```bash
# Backend
cd backend
composer create-project laravel/laravel .
php artisan make:model Movie -m
# Copiar el código de la migración, modelo, controlador y rutas
php artisan serve

# Frontend
cd frontend
ng new frontend --standalone --routing=false
# Copiar app.config.ts, app.component.ts/html/css
ng serve --port 4200
```
