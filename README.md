# namaste-react
React Course 

Named exports and imports
default exports and imports

--React Hooks
Normal JS utility functions - wrote by fb developers inside the react libray
like super powerful variable

2 important hooks
  -- useState() - superpowerful state variables in react
     --- Whenever a state variable updates, react will re-render/refreshes the components.
     --- As soon as data in the state variable updates, react refreshes the UI components.
     --- React makes the DOM operations super fast by rerending or rereshing your whole components.
  -- useEffect()

3. Virtual DOM, diff Algorithm, REconcilation
   -- React use reconciliation Algorithm (Known as ReactFiber - In React16)
   On UI -> Rest-List -> 15 Rest Cards
    a. Suppose my UI changes to filter 5 filter cards from 15
        -- React creates a virtual DOM (representation of actual DOM)
           Example: your entir body component, Header created as virtual DOM
    b. Dif Algorithm
        -- Finds out the difference between Virtual DOMs (New/Old)
           In this example between 15 Rest Cards DOM vs 5 New filterd Rest Cards DOM
        -- Read the react fiber architecture in the github - It is react core algorithm
        -- Incremental rendering
    c. React is using efficient DOM manipulation via Virtual DOM
    
  


