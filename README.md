# title
```This is made for educational purposes.  ```

## Quick Description
This is a simple application that contains two main sections in one page:
- User Profile: this section uses the user context to get information about a user. There is a form to modify values from user profile into the state. Bellow we have a "Pet preview" that will be only recreated when we made a modification just on certain fields from user context. 
- ToDos: simple todo app that allow us to mark as done/todo and create new. Also there is counters about the total of todos and those completed. 

## Scafolding
- App.jsx: JS entry point. 
- /components: 
    - Section.jsx: basic component
- /contexts:
    - userContext.jsx: basic use of hooks useContext and createContext. 
- /sections:
    - TodoSection:jsx: simple todo app that uses hooks useState and useEffect
    - UserProfileSection.jsx: simple form that uses hooks useMemo and uses userContext
    - Navbar.jsx: simple navbar that uses userContext

 
## Practice

1. Adding Validations
We're currently validating that we do no introduce an empty ToDo but nothing happens if we remove the username or the usermail. Ensure that those fields always contains a valid value. 

2. Adding Components
Each todo item looks ugly. Create a component (or more) to display the todo items. Use props to communicate between the LIST and the ITEM.

3. Moving to context! 
If you look at  TodoSection.jsx you will find that we use useState to handle the todoList (Just the list, you dont need to include the newTodo stuff if you don't want), so: create a context for the todo list and wrap all the sections of the app. Then, use the context and use it in navbar by creating a new input to introduce todos! 

4. In 4 we duplicated the input to create new ToDos, now make that input a component inside /componen folder. The component must accept: an errors array, method to get the value onChange. Something like
```
<NewInputForm 
    onChangeNewInputValue=((newInputValue)  => { /* DO STUFF*/})
    errors={errors}
/>
```
5. FREE TIME :  Improve the app as you want.



