# Events and React Routing

In this page we will navigate to a details of a store defined in the next steps.

1. React JS is currently not supporting custom events. Other libraries such as Vue and Angular have already implemented that feature. Therefore we need to get a reference to our element and attach an event to it using the DOM API - `addEventListener`. We will add an `itemPress` listener to the list of Smart Stores.

  - First of all we need to create so called `ref`. More about refs could be read [here](https://reactjs.org/docs/refs-and-the-dom.html). Basically a ref is a reference to the DOM of an element. We crate a ref by calling the following:

  ```js
    const Home = (props) => {
      const storesListRef = React.createRef();
  ```
  - We need to assign that ref in the `jsx` of our components. Lets add it to the first list of items in the list card.

  ```js
  ...
   <ui5-list separators="Inner" class="card-content-child" ref={storesListRef}>
   ...
  ```

  - Attach a listener to the `itemPress` event of the `ui5-list` by calling `addEventListener` API.


  ```js
    const Home = (props) => {
    const storesListRef = React.createRef();

    useEffect(() => {
      storesListRef.current.addEventListener("itemPress", event => {
        alert("Item is pressed!");
      });
    }, []);

    return (
  ```

  - Press any of the `ui5-li`s of the `ui5-list` - Alert appears on the screen.

2. Routing in our application is done using `react-router-dom`. We can change routes of our application by calling `props.history.push("__route__")`. Lets navigate to `/stores/0` when any of the list items is pressed.

  ```js
    const Home = (props) => {
    const storesListRef = React.createRef();

    useEffect(() => {
      storesListRef.current.addEventListener("itemPress", event => {
        props.history.push("/stores/0");
      });
    }, []);

    return (
  ```

### [Step #4 - Profile](./Step4_Profile.md)
