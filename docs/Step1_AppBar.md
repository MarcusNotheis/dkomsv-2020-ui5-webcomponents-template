# Application bar

Let`s create this beautiful application bar!
![Alt text](./step1.png?raw=true "App bar")

1. We will use the `ui5-shellbar` for an app bar, so let's import it in the `src/appbar/index.jsx`. The component has several convenient attributes that we are going to use.

```js
import "@ui5/webcomponents-fiori/dist/ShellBar";

const AppBar = () => {
	return (
		<div className="app-bar">
			<ui5-shellbar
				primary-title="Smart Store Manager"
				show-notifications
				show-product-switch
				show-co-pilot>
			</ui5-shellbar>
		</div>
	)
}
```

2. Add a logo and a profile picture to the shellbar by importing `logo.png` and `profile.png` and setting them to the profile and logo attributes of the shellbar.

```js
import "@ui5/webcomponents-fiori/dist/ShellBar";
import profile from "./profile.png";
import logo from "./logo.png";


const AppBar = () => {
	return (
		<div className="app-bar">
			<ui5-shellbar
				logo={logo}
				profile={profile}
				primary-title="Smart Store Manager"
				show-notifications
				show-product-switch
				show-co-pilot>
			</ui5-shellbar>
		</div>
	)
}
```

### [Step #2 - Home](./Step2_Home.md)
