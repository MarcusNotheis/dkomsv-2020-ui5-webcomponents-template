## Step 5 - Object Page

Now, we want to show some more details on a store. Therefore, we will use the [ObjectPage Component](https://sap.github.io/ui5-webcomponents-react/?path=/docs/components-objectpage--render-demo).

### 1. Import the `ObjectPage` and corresponding components

Open the `src/detail/index.jsx` file and add the following imports:

```jsx harmony
import React from 'react';
import { ObjectPage, ObjectPageSection } from '@ui5/webcomponents-react';
import masterdata from './storeMasterData';
```

Now, you can adjust the the `StoreDetail` component to return an `ObjectPage`
with a `title` and a `subTitle` and some initial content.
There is some Store Information prepared in the `storeMasterData.json` file, so we will make use of that:

```jsx harmony
const StoreDetail = () => {
  return (
    <ObjectPage title={masterdata.storeName} subTitle={masterdata.storeType}>
      <ObjectPageSection id="store-analytics" title="Store Analytics">
        This is my Object Page Content!
      </ObjectPageSection>
    </ObjectPage>
  );
};
```

### 2. Add Header Content to your ObjectPage

Let's add some more metadata about our Smart Store to the `ObjectPage` header.
In order to do that, we'll create a helper function **outside** of our `StoreDetail` component which will return the corresponding JSX Content.
You could also define it inside of the `StoreDetail` component and use helper methods like `useCallback`, but in our case it's easier to define it outside.

We will make use of the `Form` component, so you'll need to add `Form, FormItem, FormGroup, Text` to your imports from `@ui5/webcomponents-react`.
All required values are already present in the masterdata file.
In addition to the header content, we'll also show an image of the store, so let's add the image import as well.

```jsx harmony
import React from 'react';
... // other imports
import { ObjectPage, ObjectPageSection, Form, FormItem, FormGroup, Text } from '@ui5/webcomponents-react';
import storeFront from './storeFront.jpg';

const renderHeader = () => {
  return (
    <Form>
      <FormGroup title="Store Data" style={{ width: '18rem' }}>
        <FormItem labelText="Address" >
          <Text>{masterdata.address}</Text>
        </FormItem>
        <FormItem labelText="Store Manager">
          <Text>{masterdata.storeManager}</Text>
        </FormItem>
        <FormItem labelText="Revenue">
          <Text>{masterdata.revenue}</Text>
        </FormItem>
      </FormGroup>
      <FormGroup title="Opening Hours" style={{width: '250px'}}>
        {Object.entries(masterdata.openingHours).map(([day, hours]) => (
          <FormItem labelText={day} key={day}>
            <Text>{hours}</Text>
          </FormItem>
        ))}
      </FormGroup>
    </Form>
  );
};
```

Now, you can pass everything to the `ObjectPage`. As this information is quite important for store managers, we need to always show the header.
We can achieve that by using the `alwaysShowContentHeader` prop:

```jsx harmony
const StoreDetail = () => {
  return (
    <ObjectPage
      title={masterdata.storeName}
      subTitle={masterdata.storeType}
      renderHeaderContent={renderHeader}
      image={storeFront}
      alwaysShowContentHeader
    >
      {/* Rest of the content */}
    </ObjectPage>
  );
};
```
