
# FOODERS - Restaurant Website

This is a fully responsive restaurant website that includes various routes and features to provide a seamless user experience for customers.




## Demo

https://www.kapwing.com/videos/665dee1b24ea7ab9063de911


## Table of Content

- Features
- Routes
- Functionality
 - Backend Dependencies
- Frontend Dependencies
- Installation
- Usage
- Contributing
## Features

- Fully responsive design
- Home route displaying the main page
- Menu route showing the available menu
- Success route for successful order placement
 - Not found page for invalid routes
- Form validation for reservations


## Routes

- **'/'** - Home route displaying the main page.
- **'/menu'** - Route to view the available menu.
- **'/success'** - Route displayed after successful order placement.
- **'/*'** - Not found page for any route that doesn't exist.
## Functionality

- **Home Page**: The main landing page of the restaurant website.
- **Menu Page**: Displays the available menu items.
- **Success Page**: Shown when an order is placed successfully. This page automatically redirects to the home page after 5 seconds.
- **Not Found Page**: Displayed for any non-existent routes.
- **Reservation Form**: Ensures all fields are filled. If any field is missing, the user is prompted to complete the form. Upon successful booking, the user is redirected to the success page.
## Frontend Dependencies

- **"axios"**: "^1.7.2",
- **"react"**: "^18.2.0",
- **"react-dom"**: "^18.2.0",
- **"react-hot-toast"**: "^2.4.1",
- **"react-icons"**: "^5.2.1",
- **"react-router-dom"**: "^6.23.1",
- **"react-scroll"**: "^1.9.0"
## Backend Dependencies

- **"bcrypt"**: "^5.1.1"
- **"cors"**: "^2.8.5"
- **"dotenv"**: "^16.4.5"
- **"express"**: "^4.19.2"
- **"jsonwebtoken"**: "^9.0.2"
- **"mongoose"**: "^8.4.1"
- **"nodemon"**: "^3.1.2"
- **"validation"**: "^0.0.1"
- **"validator"**: "^13.12.0"
## Installation

1. Clone the repository:

```bash
  git clone https://github.com/royricha42002/Fooders_RestaurantWebsite.git
```
    
2. Navigate to the project directory:
```bash
  cd Fooders_RestaurantWebsite
```

3. Install backend dependencies:
```bash
  cd backend
  npm install
```

4. Install frontend dependencies:

```bash
  cd ../frontend
  npm install
```
## Usage/Examples

1. Start the backend server:

```bash
  cd backend
  npm start
```

2. Start the frontend development server:

```bash
  cd ../frontend
  npm start
```

3. Open your browser and navigate to http://localhost:3000 to view the website.






## Contributing


Contributions are welcome! 

Please fork the repository and submit a pull request for any improvements or bug fixes.


## License

This project is licensed under the MIT License. See the LICENSE file for details.

