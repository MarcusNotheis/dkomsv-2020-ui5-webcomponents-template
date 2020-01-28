# Profile Area

What is an admin UI without a profile area? We will create one for our smart store manager and let him change the application theming with one click!

1. We will enhance our app bar for this purpose and we will add a `ui5-popover` that opens upon clicking on the profile button of the `ui5-shellbar`. 

  - First of all we render a `ui5-popover` in our view. As the Popover is displayed only when it is open and it is position absolutely, we place it below the `ui5-shellbar`.

  ```html
    <ui5-popover 
      id="profile-popover"
      hide-header
      placement-type="Bottom"
      horizontal-align="Right"
    >

    </ui5-popover>
  ```

  - We will need two refs to open the popover, a ref to the shellbar and the popover itself.

 ```js
  const AppBar = () => {
    const shellbarRef = React.createRef();
    const popoverRef = React.createRef();
```

```html
  <ui5-shellbar ref={shellbarRef}
    ...
  >
  ...

  <ui5-popover ref={popoverRef}
```

  - Similar to the last step we will attach to an event. This time we want to open the Popover when the profile action of the `ui5-shellbar` is clicked. There is an event that is fired upon clicking on the profile action called `profileClick`.

  ```js
    const AppBar = () => {
    const shellbarRef = React.createRef();
    const popoverRef = React.createRef();

    useEffect(() => {
      shellbarRef.current.addEventListener("profileClick", (event) => {

        // event.detail.targetRef is a parameter of the custom event profileClick and it returns a DOM ref to the profile action
        popoverRef.current.openBy(event.detail.targetRef);
      });
    }, []);
  ```

  - Click on the profile picture - you can now see that an empty popover opens below the profile action. Time to fill up some content.

2. For the upper part of the Popover we will add some information for our user - the Store Manager.

```html
    <ui5-popover id="profile-popover" hide-header placement-type="Bottom" ref={popoverRef} horizontal-align="Right">
      <div className="profile-header centered">
        <img alt="" className="profile-img" src={profile}/>
        <ui5-title level="3">Darius Cummings</ui5-title>
        <ui5-label>Store Manager</ui5-label>
      </div>
```

  - The content of the `ui5-popover` is user defined. We will fill some random content in order to demonstrate some of the features of the ui5 web components but feel free to add something from your side as well.


```html
    <ui5-popover
      id="profile-popover"
      hide-header
      placement-type="Bottom"
      ref={popoverRef}
      horizontal-align="Right"
    >
      <div className="profile-header centered">
        <img alt="" className="profile-img" src={profile}/>
        <ui5-title level="3">Darius Cummings</ui5-title>
        <ui5-label>Store Manager</ui5-label>
      </div>

      <div className="profile-content">
        <ui5-list separators="None">
          <ui5-li-custom type="Inactive">
            <div className="profile-hcb-switch centered">
              <ui5-li icon="desktop-mobile" type="Inactive">Compact Size</ui5-li>
              <ui5-switch></ui5-switch>
            </div>
          </ui5-li-custom>

          <ui5-li-custom type="Inactive">
            <div className="profile-hcb-switch centered">
              <ui5-li icon="palette" type="Inactive">Theme</ui5-li>
              <ui5-select>
                <ui5-option>Fiori 3</ui5-option>
                <ui5-option>Fiori 3 Dark</ui5-option>
                <ui5-option>Belize</ui5-option>
                <ui5-option>HCB</ui5-option>
              </ui5-select>
            </div>
          </ui5-li-custom>

          <ui5-li icon="sap-icon://settings">Settings</ui5-li>
          <ui5-li icon="sap-icon://sys-help">Help</ui5-li>
          <ui5-li icon="sap-icon://log">Sign out</ui5-li>
        </ui5-list>
      </div>
    </ui5-popover>
```
### [Step #5 - Theme and Content Density Switch](./Step5_Theme_Compact_Switch.md)
