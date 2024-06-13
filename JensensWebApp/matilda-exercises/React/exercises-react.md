Exercises React
==============

### Exercise One: Introduction to Components and Props
Create a simple React application that consists of two components: App and Greeting.

**App Component**:
- Should render the Greeting component and pass a name prop with the value "John".

**Greeting Component**:
- Should accept a name prop and display "Hello, {name}!" in an >h1< tag.

### Exercise Two: Using useState Hook
Create a simple counter application using the useState hook.

**App Component**:
- Should have a state variable count initialized to 0.
- Should render two buttons: "Increment" and "Decrement".
- Should display the current count.

**Buttons**:
- "Increment" button should increase the count by 1.
- "Decrement" button should decrease the count by 1

### Exercise Three: Using useEffect Hook
Create an application that fetches data from an API and displays it using the useEffect hook.

**App Component**:
- Should fetch a random joke from an API (e.g., https://official-joke-api.appspot.com/random_joke) when the component mounts.
- Should display the fetched joke.

**Data Fetching**:
- Use useEffect to perform the data fetching.
- Store the joke in a state variable.

### Exercise Four: Handling Events
Create a simple toggle application.

**App Component**:
- Should render a button that toggles between "ON" and "OFF" when clicked.

**Button:**:
- Should maintain its current state (on or off) using useState.

### Exercise Five: Conditional Rendering
Create a simple React application that displays a message based on a condition.

**App Component**:
- Should render an input field where the user can type their name.
- Should display a personalized greeting if the name is provided, otherwise display "Please enter your name".