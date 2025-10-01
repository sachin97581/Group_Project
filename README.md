# WanderLust

A React-based web application for discovering, listing, and booking unique properties across India. Users can browse various property types, view details, and leave reviews. The project demonstrates routing, component-based architecture, and basic UI styling.

---

## 📁 Folder Structure

```
src/
│
├── App.jsx                # Main app component, routing setup
├── App.css                # Global app styles
├── index.css              # Global CSS resets
├── main.jsx               # React entry point
│
├── assets/                # Images and static assets
│   └── ...                # Property images, icons, etc.
│
├── pages/                 # Main React components/pages
│   ├── AddListing.jsx     # Add new property listing
│   ├── Cards.jsx          # Property cards grid
│   ├── Catagories.jsx     # Property categories
│   ├── CatagoriesCards.jsx# Cards for categories
│   ├── Footer.jsx         # Footer section
│   ├── Header.jsx         # Header/navbar
│   ├── Home.jsx           # (Optional) Home page
│   ├── ListingData.jsx    # Property details page
│   ├── Login.jsx          # Login form
│   ├── SignUp.jsx         # Signup form
│
├── style/                 # CSS files for each component
│   ├── addListing.css
│   ├── card.css
│   ├── catagories.css
│   ├── catagoriesCards.css
│   ├── footer.css
│   ├── header.css
│   ├── listingData.css
│   ├── login.css
│   ├── signup.css
```

---

## 🚀 Features

- **Property Cards:** Browse a grid of property listings with images, price, owner, and type.
- **Categories:** Filter properties by category (Room, Apartment, Cottage, etc.).
- **Property Details:** Click a card to view detailed info and actions (Edit, Delete, Book, Review).
- **Add Listing:** Form to add new property listings.
- **Authentication:** Signup and login forms (UI only).
- **Review System:** Leave ratings and reviews for properties.
- **Responsive Design:** Works on desktop and mobile screens.

---

## 🧩 Component Overview

- **App.jsx:** Routing setup using `react-router-dom`.
- **Cards.jsx:** Displays property cards grid.
- **ListingData.jsx:** Shows full details for a selected property.
- **Catagories.jsx & CatagoriesCards.jsx:** Displays property categories and category-specific cards.
- **AddListing.jsx:** Form for adding a new property listing.
- **Header.jsx & Footer.jsx:** Navigation bar and footer.
- **Login.jsx & SignUp.jsx:** Forms for user authentication (UI only).

---

## 🎨 Styling

- All styles are in the `style/` folder, scoped per component.
- Uses modern CSS (Flexbox, Grid, transitions).
- Responsive breakpoints for mobile support.

---

## 🛠️ How to Run

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173
   ```

---

## ⚙️ Customization

- **Add new properties:** Edit `cardData` array in `Cards.jsx`.
- **Change images:** Add images to `assets/` and update imports.
- **Edit categories:** Update `Catagories.jsx` and related files.
- **Styling:** Modify CSS files in `style/` for custom look.

---

## 📝 Notes

- This project is a front-end demo; backend/database integration is not included.
- Routing uses React Router v6.
- Review and authentication features are UI-only (no real data storage).

---

## 📚 Credits

- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).
- UI icons/images from [Unsplash](https://unsplash.com/) and local assets.

---

## 📄 License

This project is for educational/demo purposes.  
You may modify and use it as needed.

---