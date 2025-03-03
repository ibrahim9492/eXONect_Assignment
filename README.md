Project Overview 
The goal of this project is to build a Country, State, and City Management system  using ReactJS and JavaScript (without using any external libraries or npm packages).  The application allows users to add, edit, and delete countries, states, and cities in a  hierarchical structure. 
The core requirements include: 
1. Country Management: Add, Edit, Delete countries. 
2. State Management: Add, Edit, Delete states for a specific country. 3. City Management: Add, Edit, Delete cities within a specific state. 4. Confirmation Dialogs: Show confirmation alerts before performing delete and  update actions. 
Functional Requirements 
1. Country Management 
• Add a Country: 
o The user should be able to add a new country using a button to trigger a  prompt. 
o Initially, the user can add a country without specifying any states. • Edit a Country: 
o The user should be able to edit an existing country name by triggering an  edit option from the UI. 
o A confirmation dialog should appear before updating a country. • Delete a Country: 
o The user should be able to delete a country. 
o When a country is deleted, its associated states and cities should also be  deleted. 
o A confirmation alert should appear before deleting a country.
2. State Management 
• Add a State: 
o States can be added to a specific country. 
o The user can choose to add the state now or add it later (via an "edit"  flow). 
o States should be linked to a specific country. 
• Edit a State: 
o The user should be able to edit the name of an existing state. 
o A confirmation dialog should appear before updating a state. 
• Delete a State: 
o The user should be able to delete a state. 
o Deleting a state should remove all associated cities. 
o A confirmation dialog should appear before deleting a state. 
3. City Management 
• Add a City: 
o Cities can be added under a specific state. 
o The user can add a city either during the state creation process or later via  an "edit" flow. 
• Delete a City: 
o The user should be able to delete a city under a specific state. 
o A confirmation alert should appear before deleting a city. 
User Interface (UI) Design 
The application consists of the following UI components: 
1. Main Screen: 
a. A button to add a new country. 
b. A list of existing countries, each with options to:  
i. Edit the country name. 
ii. Delete the country. 
iii. View and manage states for the country. 
2. State Management Screen: 
a. For each country, a section where the user can:  
i. Add a new state. 
ii. Edit existing states. 
iii. Delete states (with confirmation).
3. City Management Screen: 
a. For each state, a section where the user can:  
i. Add a new city. 
ii. Delete existing cities (with confirmation). 
Component Breakdown 
1. App.js 
• Role: Main component responsible for managing the overall state of countries,  states, and cities. 
• Key Features: 
o Manages the state of the countries. 
o Handles the logic for adding, updating, and deleting countries. o Passes down data and functions to child components for states and  cities management. 
2. CountryList.js 
• Role: Displays a list of all countries. 
• Key Features: 
o Allows the user to add a new country. 
o Allows the user to edit or delete a country. 
o Displays a list of states for each country and provides a link to manage  those states. 
3. StateList.js 
• Role: Displays a list of states for a specific country. 
• Key Features: 
o Allows the user to add, edit, and delete states. 
o Shows a confirmation dialog before performing delete or update actions. o Displays a list of cities for each state and provides a link to manage those  cities. 
4. CityList.js 
• Role: Displays a list of cities for a specific state. 
• Key Features: 
o Allows the user to add or delete cities.
o Shows a confirmation dialog before performing delete actions. 
Business Logic 
Adding New Entities: 
• When adding a new entity (country, state, or city), the user will be prompted to  enter a name (via a simple prompt or a form-based UI). 
• The new entity is then added to the existing data structure and rendered in the  UI. 
Editing Existing Entities: 
• Editing involves replacing the name of an existing country, state, or city. • A confirmation dialog is shown before proceeding with the update. • After confirming, the name is updated in the data structure, and the UI is re rendered. 
Deleting Entities: 
• Deleting an entity (country, state, or city) triggers a confirmation dialog. • If confirmed, the entity is removed from the data structure, and all related  states/cities (in case of deleting a country or state) are also removed. • The UI is updated to reflect the changes. 
Confirmation Alerts: 
For critical actions such as updating or deleting a country, state, or city, a confirmation  alert is shown: 
1. Before Deleting: A simple window.confirm() is used to confirm the user's  intention. 
2. Before Editing: A prompt is used to ask the user for the new name, followed by a  confirmation step.
Implementation Details: 
Technologies Used: 
• ReactJS: For building the component-based user interface. 
• JavaScript (ES6): For handling state management, event handling, and data  manipulation. 
Development Flow: 
1. Set up React App: Use Create React App to initialize the project. 2. Create Components: Develop individual components for countries, states, and  cities. 
3. State Management: Use React's useState hook to manage the state of the  countries, states, and cities. 
4. Data Flow: Pass data and functions down the component hierarchy using props. 5. User Interaction: Use prompt dialogs for adding and editing names, and confirm  dialogs for deletion. 
Testing and Validation: 
1. Functional Testing: 
a. Add, edit, and delete operations are tested to ensure proper functionality. b. Confirmation dialogs appear and work as expected. 
2. UI Testing: 
a. Ensure that the UI properly reflects the changes after any operation (add,  edit, delete). 
b. Verify that the hierarchical structure (Country → State → City) is correctly  displayed and managed.
