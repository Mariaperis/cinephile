# 🎬 Cinephile

Cinephile is a modern movie discovery application built with React and TMDB API.

The project focuses on a cinematic UI/UX experience, responsive layouts, infinite scrolling, dynamic movie details, actor search, and clean frontend architecture.

---

# ✨ Features

## 🔎 Movie Search

* Search movies and actors in real time
* Debounced search requests
* Empty state handling
* Error handling

## 🎞 Trending Movies

* Weekly trending movies from TMDB
* Infinite scroll pagination
* Loading indicators
* Incremental loading retry

## 🎭 Movie Details

* Dynamic movie detail pages
* Real cast information
* Related movies section
* Dynamic backdrop and poster
* Fallback images for missing assets

## 📱 Responsive Design

* Mobile-first UI
* Desktop responsive layout
* Cinematic design inspired by streaming platforms

---

# 🛠 Tech Stack

## Frontend

* React
* React Router DOM
* TailwindCSS
* React Icons

## API

* TMDB API

## State Management

* React Hooks

  * useState
  * useEffect
  * useRef

---

# 📂 Project Structure

```bash
src/
│
├── assets/
├── components/
│   ├── layout/
│   ├── movie/
│   ├── search/
│   └── ui/
│
├── mappers/
│   └── movieMapper.js
│
├── pages/
│   ├── Home/
│   ├── Explore/
│   ├── MovieDetails/
│   └── Favorites/
│
├── routes/
├── services/
├── utils/
└── lib/
```

---

# ⚙️ Installation

## 1. Clone repository

```bash
git clone https://github.com/Mariaperis/cinephile.git
```

## 2. Install dependencies

```bash
npm install
```

## 3. Create environment variables

Create a `.env` file in the root of the project.

```env
VITE_API_KEY=your_tmdb_api_key
```

---

# ▶️ Run Project

```bash
npm run dev
```

---

# 🌐 TMDB API

This project uses:

* Trending Movies API
* Search Multi API
* Movie Details API
* Movie Credits API
* Related Movies API

Official TMDB documentation:

[https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)

---

# 🧠 Architecture

The project follows:

* DRY principles
* KISS principles
* Reusable component architecture
* Service-based API layer
* Internal data mapping layer

## Example

External API responses are transformed into internal models using:

```js
mapMovie()
```

This avoids exposing raw TMDB structures directly to the UI.

---

# 🚀 Implemented UX Features

* Infinite scroll
* Debounced search
* Skeleton/loading states
* Empty states
* Error states
* Retry actions
* Responsive navigation
* Fallback images
* Lazy loaded images

---

# 🔮 Future Improvements

* Authentication
* Favorites persistence
* Watchlist
* Trailer integration
* Advanced filtering
* Framer Motion animations
* Unit testing
* Accessibility improvements

---

# 👨‍💻 Author

Developed by Maria Peris.

---

# 📄 License

This project is for educational purposes.
