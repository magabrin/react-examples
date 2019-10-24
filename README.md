# react-examples

## Components

React allows you to logically separate sections of html into separate components. React utilizes jsx, which is a code version fo html This lends to a front end that is built using composition, where pieces are conditionally rendered. The main benefits are increased performance/responsiveness as well as better code reuse and separation.

### Example Component

- Uses inheritance from the base React Component class
- constructor: initialize state
- render: returns the html that will be rendered by 

```javascript
import React from 'react';
import MyComponent from './MyComponent';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loaded: false;
        }
    }

    render() {
        return (
            <div className="body">
                <MyComponent prop1={this.state.loaded}>
            </div>
        );
    }
}


class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            myState1: 1
        }
    }

    render() {
        return (
            <div>
                <h1>Here is a Component</h1>
                <p>Render</p>
                <p>{this.props.prop1}</p>
            </div>
        )
    }
}
```

### Props & State

- State: used to store data relevant to the component. Its scope only belongs to the component where the state has been declared. Any time state is update, the component is rerendered!
    - should only change state with setState() function

```javascript
// initialize state in the constructor
this.state = {
    myState1: 1
};

// reference state somewhere in the component
console.log(this.state.myState1);

// Update state with setState()
this.setState({
    myState1: 2
});
```

- Props: values passed in directly to the component when it's being rendered. This is the best way to pass state between components


```javascript

// Pass in props to a component
render() {
    return (
        <div>
            <MyComponent1 prop1="dog" prop2={this.state.myState1}>
        </div>
    )
};

// use a prop inside of a component
console.log(this.props.prop1);

```

### Lifecycle Methods

Add functionality during 4 different times in a component's lifecycle. Before the component mounts, right after it has mounted, whenever the component has been updated in some way, and before the component is fully unmounted.

- componentWillMount()
- componenntDidMount()
- componentWillUpdate()
- componentWillUnmount()


### Basic React App Structure

- react-app-dir
    - package.json
    - README.md
    - public
        - index.html
        - other public things ex. images
    - src
        - index.js (Renders App as a script in index.html)
        - App.js (Base component)
        - components-dir
            - other components


### React Router

React apps are single page applications, which means all pages have the same URL. If you have different pages, they should have different endpoints to differentiate navigation actions. One solution is React Router, whihch reads URL changes in the React code, not on the server side, so the same content is served but the URL changes with the client. 

Routing is very simple, with a Router and Switch component at the base layer that gets Switched based on the URL provided. Modifications can be made or these components can be wrapped in new components to get functionality specific for your React application.

The main pieces are 
- Router
- Switch
- Route
- Link
- Redirect

```javascript
    // imports
    import {
        BrowserRouter as Router,
        Switch,
        Route,
        Redirect,
        Link,
    } from 'react-router-dom';

    // Example of a React Router that switches based on the URL
    <Router>
        <Switch>
          <PrivateRoute
            path="/login"
            redirectPath="/dashboard"
            renderChildrenCondition={!loggedIn}
          >
            <Authentication />
          </PrivateRoute>

          <PrivateRoute
            path="/dashboard"
            renderChildrenCondition={loggedIn}
            redirectPath="/login"
          >
            <Dashboard />
          </PrivateRoute>

          <Route path="/">
              <Redirect to={{ pathname: '/dashboard' }} />
          </Route>
        </Switch>
    </Router>

// Example of an Altered Route Component that requires a login
const PrivateRoute = (props) => {
  return (
    <Route
      render={() => (props.renderChildrenCondition ? (
        props.children
      ) : (
          <Redirect to={{ pathname: props.redirectPath }} />
      ))
      }
    />
  );
};

// Example of a link. Will navigate in the Router Switch to /dashboard

<Link to="/dashboard">
    <div className="page-panel-item item-flex item-center">                    
        <button className="page-panel-item item-flex login_button btn-lg btn-primary"
        onClick={() => this.login()}>
        login
        </button>
    </div>
</Link>

```

### React Redux

One issue with React is the difficulty to share state between components. This is normally done with passing state in as props to child components, but this can become convoluted and difficult to maintain when you either have too much state or pass it to too many subcomponents. Additionally, many components can share actions, such as onClick() events, so similar funcitonality between components can lead to code duplication. 

Redux attempts to fix this by separating React into three main parts: Components, Actions, and Reducers. State is also stored separately as one large state for the whole application, called the store.

- Components: dummy React components that display jsx.

- Actions: trigger a state change or some other function

- Reducers: update state

- store: holds state for the whole application. Can only be updated with reducers

The cycle of react-redux is components are rendered on the page. When the user instigates an action, it creates a dispatch to the action, stored in a separate file. The action then sends a result and payload to the reducer, which updates state, which lives in the store.

![alt text](https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.codecentric.de%2Fen%2F2017%2F12%2Fdeveloping-modern-offline-apps-reactjs-redux-electron-part-3-reactjs-redux-basics%2F&psig=AOvVaw0pcTMthj3QsWRR0dtndFKf&ust=1572033710933000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJj4zIvYteUCFQAAAAAdAAAAABAb "React Redux Lifecycle")


## React Hooks

Create react components without using classes

Example hook:

```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
