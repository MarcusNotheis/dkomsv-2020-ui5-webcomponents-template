## Add a Products Table

In our role as a Store Manager, it's also quite important to see which products we have in our store. So let's add an `AnalyticalTable` which
will be showing our products, their manufacturer, price and how many items are in stock.

### 1. Add the Analytical Table Component

Open the `src/detail/table/index.jsx` file and add the required imports. Again, there is a dataset prepared in the `products.json` file.

```jsx harmony
import React from 'react';
import products from './products';
import { AnalyticalTable } from '@ui5/webcomponents-react';
```

The `AnalyticalTable` Component has two required props: `columns` and `data`.
The `data` prop is accepting in array containing the row data, so we can use our `products.json` for that.
In order to configure the visible columns, we have to create a `columns` array which is defining the behaviour of the columns.
Each entry in the `columns` array must have a `Header` property (can be a string our a React Component), and and `accessor`.
The `accessor` is used for accessing the data out of each entry of the `data` array.

So now let's add our table:

```jsx harmony
const tableColumns = [
  { Header: 'Product Name', accessor: 'Name' },
  { Header: 'Manufacturer', accessor: 'SupplierName' },
  { Header: 'Category', accessor: 'MainCategory' },
  { Header: 'Price', accessor: 'Price' },
  {
    Header: 'In Stock',
    accessor: 'InStock'
  }
];

const ProductsTable = () => {
  return <AnalyticalTable columns={tableColumns} data={products} />;
};
```

### 2. Add the Product Table to our ObjectPage

Import the `ProductsTable` component and render it as a new section in our ObjectPage (`src/detail/index.jsx`):

```jsx harmony
// ... other imports
import ProductsTable from './table';

const StoreDetail = () => {
  return (
    <ObjectPage
    // ...
    >
      <ObjectPageSection id="store-analytics" title="Store Analytics">
        // ...
      </ObjectPageSection>
      <ObjectPageSection id="product-overview" title="Product Overview">
        <ProductsTable />
      </ObjectPageSection>
    </ObjectPage>
  );
};
```

### 3. Custom Cell Renderers

Now we can see a very basic table in our Object Page. In order to get more insights out of this table, we will now
add some custom cell renderers to color the amount of products in store and do some currency formatting.
We can achieve this by using a custom cell rendering on each column, defined by the `Cell` attribute.

#### Add some coloring to the Available Products

Let's go back to our ProductTable component in `src/detail/table/index.jsx`.
We will make use of the [ObjectStatus](https://sap.github.io/ui5-webcomponents-react/?path=/docs/components-objectstatus--only-text) to add some coloring.
So let's import `ObjectStatus` and `ValueState` from `@ui5/webcomponents-react`.

```jsx harmony
import { AnalyticalTable, ObjectStatus, ValueState } from '@ui5/webcomponents-react';
import React from 'react';
import products from './products';
```

Now, lets use the custom `Cell` renderer to adjust the rendering of our `inStock` products.
You can pass any React component to a cell and the `AnalyticalTable` will inject some props into this component.
If you need the current value of the cell, you can find it in the `value` attribute of the `cell` prop.
Let define that we will show a `ObjectStatus` with an `Error` state in case there are less than 10 products available and a `Warning` status in case there are less than 20 products available.
If we have more products in stock everything is good.
In addition to that, we will make the `inStock` cell right-aligned for better readability by using the `hAlign` attribute. Do not forget to add the `TextAlign` import to `@ui5/webcomponents-react`.

```jsx harmony
const tableColumns = [
  // ...
  {
    Header: 'In Stock',
    accessor: 'InStock',
    hAlign: TextAlign.End,
    Cell: ({ cell: { value } }) => {
      let state = ValueState.Success;
      if (value <= 10) {
        state = ValueState.Error;
      } else if (value <= 20) {
        state = ValueState.Warning;
      }
      return <ObjectStatus state={state}>{value}</ObjectStatus>;
    }
  }
  // ...
];
```

#### Format the product price as currency

Reading the price of our products is not very intuitive currently. If we now want to show the price as a proper formatted currency,
we will make use of the [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) API which is available in all major browsers.
As the product price is a number as well, we will right align this cell as well by using the `hAlign` property.

`src/detail/table/index.jsx`:

```jsx harmony
import { AnalyticalTable, ObjectStatus, Text, ValueState, TextAlign } from '@ui5/webcomponents-react';
import React from 'react';
import products from './products';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const tableColumns = [
  { Header: 'Product Name', accessor: 'Name' },
  { Header: 'Manufacturer', accessor: 'SupplierName' },
  { Header: 'Category', accessor: 'MainCategory' },
  {
    Header: 'Price',
    accessor: 'Price',
    hAlign: TextAlign.End,
    Cell: ({ cell: { value } }) => {
      return <Text>{currencyFormatter.format(value)}</Text>;
    }
  },
  // ...
];
// ...
```

### Final File
```jsx harmony
import { AnalyticalTable, ObjectStatus, Text, TextAlign, ValueState } from '@ui5/webcomponents-react';
import React from 'react';
import products from './products';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const tableColumns = [
  { Header: 'Product Name', accessor: 'Name' },
  { Header: 'Manufacturer', accessor: 'SupplierName' },
  { Header: 'Category', accessor: 'MainCategory' },
  {
    Header: 'Price',
    accessor: 'Price',
    hAlign: TextAlign.End,
    Cell: ({ cell: { value } }) => {
      return <Text>{currencyFormatter.format(value)}</Text>;
    }
  },
  {
    Header: 'In Stock',
    accessor: 'InStock',
    hAlign: TextAlign.End,
    Cell: ({ cell: { value } }) => {
      let state = ValueState.Success;
      if (value <= 10) {
        state = ValueState.Error;
      } else if (value <= 20) {
        state = ValueState.Warning;
      }
      return <ObjectStatus state={state}>{value}</ObjectStatus>;
    }
  }
];

const ProductsTable = () => {
  return <AnalyticalTable columns={tableColumns} data={products} />;
};

export default ProductsTable;

```
