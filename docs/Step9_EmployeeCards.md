## Step 9 - Employee Cards (Advanced)

There is only one more thing missing until we have our 360 store overiew: Who is actually working in my store?
Therefore, we'll now create some employee cards as custom components. For that, we will build a composite component of
different `@ui5/webcomponents-react` components - and we will reuse the CSS variables to make sure everything is themeable!

### 1. Add the Employees Component to your Store Overview

Let's open `src/detail/index.jsx` one last time and insert the last section in our `ObjectPage`:

```jsx harmony
// ... other imports
import Employees from './employees';

const StoreDetail = () => {
  return (
    <ObjectPage
    // ...
    >
      // ...
      <ObjectPageSection id="employees" title="Store Staff">
        <Employees />
      </ObjectPageSection>
    </ObjectPage>
  );
};
```

### 2. Create the EmployeeCard Component

We want to build a component that looks similar to a business card:

![Employee Card](./Step9_EmployeeCard.png?raw=true)

We will build this card by reusing a couple of `@ui5/webcomponents-react` components and will put some extra styling on it.
So, let's import all required components from `@ui5/webcomponents-react`. In addition to that, let's also already import an avatar image.
To make things easier, we'll just reuse the avatar of our store manager. As we will also need some custom styling we are adding the `createUseStyles` import
from `react-jss` as well. (`react-jss` is the underlying styling library of `@ui5/webcomponents-react`, you can learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/welcome-style-web-components--page)).

```jsx harmony
import {
  Avatar,
  AvatarSize,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  Icon,
  Label,
  Link,
  Text
} from '@ui5/webcomponents-react';
import React from 'react';
import { createUseStyles } from 'react-jss';
import profile from '../../appbar/profile.png';
```

Let's get started with the skeleton of our Card. We need to accept props so that we can change the content of our card according to the data passed to it.
First of all, we will render a vertical `FlexBox` as a container. In order to get some color into this component, we are also creating
the style class `employeeCard` in the `createUseStyles` function. Here we can set a `backgroundColor` and a `border`. As you can see,
the values are not hard-coded but read from a `parameters` object. Inside this `parameters` object, the library is storing all `CSSVariables` which are provided
by the `UI5 Web Components`. By using these variables, we can also react to theme changes without any additional effort! 

```jsx harmony
const useStyles = createUseStyles(({ parameters }) => ({
  employeeCard: {
    width: '300px',
    height: '130px',
    backgroundColor: parameters.sapTile_Background,
    margin: '0 1rem 1rem 0',
    padding: '1rem',
    border: `1px solid ${parameters.sapField_BorderColor}`
  }
}));

export const EmployeeCard = (props) => {
  const { firstName, lastName, address, city, region, postalCode, country, phone } = props;

  const classes = useStyles();

  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.employeeCard}>
      
    </FlexBox>
  );
};
```

Now, let's add the header of this card where we want to display an avatar and the employees name. To make sure that the 
text has some spacing to the avatar and gets a bolder font-weight, we'll add the `employeeName` class.
```jsx harmony
const useStyles = createUseStyles(({ parameters }) => ({
  // ...
  employeeName: {
    marginLeft: '1rem',
    fontWeight: 'bold'
  }
}));

export const EmployeeCard = (props) => {
  const { firstName, lastName, address, city, region, postalCode, country, phone } = props;

  const classes = useStyles();

  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.employeeCard}>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Avatar image={profile} size={AvatarSize.M} />
        <Text className={classes.employeeName}>
          {firstName} {lastName}
        </Text>
      </FlexBox>
    </FlexBox>
  );
};
```

Looks like we are on a good way! In order to complete the Employee Card, let's add the address and the phone number as well.
For the address, we will use a `Label` and use an array to get a quick concatenation of all address attributes.
We will also use a `Link` component for the phone number to make sure we can easly call our employees.

```jsx harmony
const useStyles = createUseStyles(({ parameters }) => ({
  // ...
  address: {
    margin: '0.5rem 0'
  },
  icon: {
    marginRight: '0.5rem'
  }
}));

export const EmployeeCard = (props) => {
  const { firstName, lastName, address, city, region, postalCode, country, phone } = props;

  const classes = useStyles();

  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.employeeCard}>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Avatar image={profile} size={AvatarSize.M} />
        <Text className={classes.employeeName}>
          {firstName} {lastName}
        </Text>
      </FlexBox>
      <Label className={classes.address}>
        {[address, postalCode, city, region, country].filter(Boolean).join(', ')}
      </Label>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Icon name="phone" className={classes.icon} />
        <Link href={`tel:${phone}`}>{phone}</Link>
      </FlexBox>
    </FlexBox>
  );
};
```

Thats it! Your Employee Card should now look like this:
```jsx harmony
import {
  Avatar,
  AvatarSize,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  Icon,
  Label,
  Link,
  Text
} from '@ui5/webcomponents-react';
import React from 'react';
import { createUseStyles } from 'react-jss';
import profile from '../../appbar/profile.png';

const useStyles = createUseStyles(({ parameters }) => ({
  employeeCard: {
    width: '300px',
    height: '130px',
    backgroundColor: parameters.sapTile_Background,
    margin: '0 1rem 1rem 0',
    padding: '1rem',
    border: `1px solid ${parameters.sapField_BorderColor}`
  },
  employeeName: {
    marginLeft: '1rem',
    fontWeight: 'bold'
  },
  address: {
    margin: '0.5rem 0'
  },
  icon: {
    marginRight: '0.5rem'
  }
}));

export const EmployeeCard = (props) => {
  const { firstName, lastName, address, city, region, postalCode, country, phone } = props;

  const classes = useStyles();

  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.employeeCard}>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Avatar image={profile} size={AvatarSize.M} />
        <Text className={classes.employeeName}>
          {firstName} {lastName}
        </Text>
      </FlexBox>
      <Label className={classes.address}>
        {[address, postalCode, city, region, country].filter(Boolean).join(', ')}
      </Label>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Icon name="phone" className={classes.icon} />
        <Link href={`tel:${phone}`}>{phone}</Link>
      </FlexBox>
    </FlexBox>
  );
};

``` 

### 3. Read the Employee Data and render the Cards

There is now only one more step missing: We need to read the employee data from somewhere and render the respective `EmployeeCards`.
So let's open the `src/detail/employees/index.jsx`, read the employees array from `employees.json` and render the cards in a `FlexBox`!
```jsx harmony
import { FlexBox, FlexBoxWrap } from '@ui5/webcomponents-react';
import React from 'react';
import { EmployeeCard } from './EmployeeCard';
import data from './employees';

const Employees = () => {
  return (
    <FlexBox wrap={FlexBoxWrap.Wrap}>
      {data.map((employee) => (
        <EmployeeCard
          key={employee.id}
          firstName={employee.FirstName}
          lastName={employee.LastName}
          address={employee.Address}
          city={employee.City}
          region={employee.Region}
          postalCode={employee.PostalCode}
          country={employee.Country}
          phone={employee.HomePhone}
        />
      ))}
    </FlexBox>
  );
};

export default Employees;

```

That's it! Our Store Manager has now a full 360 view on his store!
