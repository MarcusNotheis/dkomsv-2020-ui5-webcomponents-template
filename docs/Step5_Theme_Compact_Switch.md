# Theme Switch

Our admin is able to change the look and feel of our application. For example he can change the theme by chosing one from the Profile Popover we built in [Step4](./Step4_Profile.md).

1. In order to change the theme in your application that is running UI5 Web Components you need to import a few modules. Each package has its own CSS properties. `fiori 3` styles are imported by default. In order to load the other supported themes such as `belize`, `belize hcb`, `fiori 3 dark`, you need import specific modules for each library.

```js
// imports CSS from the main package
import "@ui5/webcomponents/dist/json-imports/Themes"

// imports CSS from the fiori package
import "@ui5/webcomponents-fiori/dist/json-imports/Themes"
```

2. Once we have all the information for the themes loaded, we need to an API to set these themes. All configurations possible for the UI5 Web Components are listed [here](https://sap.github.io/ui5-webcomponents/playground/docs/configuration/). We will use the `setTheme` API to change our theme.

```js
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
```

3. We know the API that we should call in order to change the theme. We want to change it by selecting an option from the `ui5-select` placed in the profile popover. To achieve that we can use the `change` event fired by the `ui5-select`. We need a `ref` to the select and attach to the event similar to what we did in the previous steps.

```js
  const AppBar = () => {

    const shellbarRef = React.createRef();
    const popoverRef = React.createRef();
    const selectRef = React.createRef();
    const compactSwitchRef = React.createRef();


    useEffect(() => {
      shellbarRef.current.addEventListener("profileClick", (event) => {
        popoverRef.current.openBy(event.detail.targetRef);
      });

      selectRef.current.addEventListener("change", event => {
        const themeId = event.detail.selectedOption.getAttribute("data-theme-id");
        setTheme(themeId);
      });
    });
```

Assign the ref to the select

```html
  ...

  <ui5-select ref={selectRef}>
    <ui5-option data-theme-id="sap_fiori_3">Fiori 3</ui5-option>
    <ui5-option data-theme-id="sap_fiori_3_dark">Fiori 3 Dark</ui5-option>
    <ui5-option data-theme-id="sap_belize_hcb">Belize HCB</ui5-option>
  </ui5-select>
  
  ...
```

You can notice that we set a custom attribute `data-theme-id` that will help us set the technical name of the theme. The names of the teams are mapped in the follwing way.

- Fiori 3- `sap_fiori_3`
- Fiori 3 Dark - `sap_fiori_3_dark`
- Belize - `sap_belize`
- Belize HCB - `sap_belize_hcb`

### [Step #6 - Detail Page](./Step6_Object-Page.md)
