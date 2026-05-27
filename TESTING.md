# Testing funcional — Cinephile

---

## Épica 1 — Exploración cinematográfica

### HU: acceso a exploración

### Escenario:
Usuario accede desde login a Explore.

### Pasos:
1. Abrir aplicación
2. Introducir credenciales
3. Pulsar "Iniciar sesión"

### Resultado esperado:
- Navegación correcta
- Home renderizado
- Trending visible

### Resultado:
✅ PASS

## HU: scroll infinito

### Pasos:
1. Entrar en Explore
2. Hacer scroll hasta final

### Resultado esperado:
- Loader visible
- Nuevas películas añadidas
- Scroll preservado
- Sin duplicados

### Resultado:
✅ PASS