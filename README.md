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

  
Episode6 - Monolisth vs Microservices Architecture - outside of the react
 Monolith
    -- Huge big project where all APIs, UI code, infrastructure, DB etc all in one solution.
    -- Build and deployment in IIS etc
    -- Once the app grows, slower start up, maintainence is hard, single change is to deploy whole project
    -- Incremental Change is hard without deploying the whole app.

Microservices
    --  Services is developed and deployed independently
    -- small servcies can have separate service, database hooked to a single component UI.
    -- different projects have differnet solution
    -- increase separation of concernts
    -- can develop a microfrontend and integrated into the legacy existing applications easily.
    -- Services have to interact with each other using events like kafka, mq etc.
    -- UI services run on one port 1000, backend can run on port 2000 etc. 
    -- All these can mapped to one domain and have one domain name
    -- can have routing, load balancer, rate limiter etc

Namasthe-react App we are making is UI microservice using react

Learn how react will call the backend api call or outside UI project.

2 ways to fetch data from backend

1. On App Loads -> invoke the api call to fetch the data -> render on the UI via components.
    -- if api takes 500 ms, UI waits till the data fetch from UI
2. On App Loads -> Quickly Render the UI (which is required) -> now API call is made -> rerender/refresh the data.

In React, we will always use the second approach, is like lazy loading the components, gives better user experience.

-- useEffect Hook - to call an API or any side effects -- will be called after component is rendered
-- able to call swiggy cards data through API and able to pull in coonsole log using useffect



