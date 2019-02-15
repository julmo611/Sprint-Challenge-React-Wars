# Answers

1.  What is React JS and what problems does it try and solve?

If the page has data that changes over time at high rates (for example, facebook, Instagram etc), then there is a requirement for DOM updates to be very fast and also reflect in other parts of the UI if they use the same data.
React solves this problem, without even having the page reload. It does by a concept called virtual DOM. 


1.  What does it mean to _think_ in react?

Approaching the data flow by simply using props to pass data around and lifting state up. At a certain point though, doing this will hurt the “Composability and Reusablity” principles which are the foundation of React’s whole component system! 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.


Class components are ES6 classes and Functional Components are functions. The only constraint for a functional component is to accept props as an argument and return valid JSX.

1.  Describe state.

An object that determines how that component renders & behaves

1.  Describe props.

A React component is a reusable component which can be used over and over again in the UI, but not always we are going to render the same component with same data. Sometimes we have to change the data or content inside a component. That’s why props are introduced in React. 

