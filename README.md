# Project_2 - Kid Voice

The purpose of this web application is to create a fun and engaging learning environment for young children by allowing them to use their voices to navigate through the app and play games.  Aside from user verification, this app will be controlled entirely with voice input controls. 

The splash screen will welcome the user and allow them to decide where they would like to go: Play a Game (from our catalog of previous projects in this class) or go to the store and purchase trophies based on the amount of coins/points they’ve earned from winning games.  Current user and current score will be displayed live on all pages when interacting with the app. Databases storing each user and their scores will be dynamically updated on the back end.  This is sure to be a fun experience for all!

**Technologies Used:**
- Sequelize 
- MySQL
- Node.js
- Annyang.min.js (speech recognition library)
- Handlebars
- Passport (authentication middleware)
- Express 
- Javascript/jQuery
- HTML/CSS

**Sign-up/Sign-in:**

The user will sign-up (Passport) with First Name, Last Name, Email, Password to become a user in the database.  Once the user is registered, the database will keep track of their log-in information, current amount of coins, and attained trophies.  This allows the web application to store multiple users and their game information.  

Once the user is signed-in, they will be directed to the "town" page.  They can then chooose which direction they would like to go by speaking either of the following commands: "up", "down", "left", "right".  

**Component 1: "Up" - 
Game: Rock, Paper, Scissors**

The user will play Rock, Paper, Scissors with the computer.  The user will say one of the following options per round out loud: "rock", "paper", "sciossors". If the user wins, they will earn 50 coins.  The user can play the computer as many times as they would like!  

**Component 2: "Left" -
Game: Crystal Collector**

For this game, the user must match the number displayed on the screen by saying the name of the crystals provided.  Each value of the crystal is shown to help the user as they add value to match the computer generated number.  The options the user can say are: "water", "fire", "thunder", "dawn".  Once the number is matched, new numbers are generated for another round of fun! 

**Component 3: "Down" -
Trophy Store**

The user can view all of the trophies for sale in the Trophy Store.  Depending on the amount of coins they have, they will be able to purchase a trophy.  Once a trophy is purchased, it will hide from the screen and be added to the user's collection.  The database is then updated to reflect these changes.  

**Component 4: "Right" -
Collection**

The user can view the trophies they have purchased.  This is also a reflection of the information that is in the database. The more trophies they purchase, the larger their collection grows! 

The first three functions of CRUD are used in the following ways:

C(reate): Sign-up/Log-in
R(ead): Every page load (games, store, home, etc.)
U(pdate): Game won (and update of coins for user), purchase of trophies (through use of booleans)

Members: Joe Nidever, Bryan McCann, Brooke Meyer, Mike Garcia 
