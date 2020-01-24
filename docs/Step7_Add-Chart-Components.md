## Step 6 - Add Chart Components

Our ObjectPage is now only showing some Store masterdata. Now, let's add some charts to get insights on how our store is running.

### 1. Import the Chart Components in the Object Page.

There are already two (empty) chart components existing. So let's import these components in your `ObjectPage` and use them as content for the first section.
We will also need to import the `FlexBox` component from `@ui5/webcomponents-react` in order to have the charts properly aligned.

`src/detail/index.jsx`

```jsx harmony
// ...other imports
import ProductsCharts from './charts/products';
import VisitorsChart from './charts/visitors';

// ...

const StoreDetail = () => {
  return (
    // ...
    <ObjectPageSection id="store-analytics" title="Store Analytics">
      <FlexBox>
        <VisitorsChart />
        <ProductsCharts />
      </FlexBox>
    </ObjectPageSection>
    // ...
  );
};
```

### 2. Create the Visitors Chart

In the visitors chart, we want to show the average visitors by hour over the last two weeks.
Therefore we will use a [LineChart](https://sap.github.io/ui5-webcomponents-react/?path=/docs/charts-line-chart--default-story).

In order to do that, let's add all required imports to `src/detail/charts/visitors.jsx`. A sample data set is already available in `chartDataVisitors.json`.

```jsx harmony
import { FlexBox, FlexBoxDirection, Title, TitleLevel } from '@ui5/webcomponents-react';
import { LineChart } from '@ui5/webcomponents-react-charts';
import React from 'react';
import chartData from './chartDataVisitors';
```

Now, let's update the `VisitorsChart` Component to return the following code:

```jsx harmony
const VisitorsChart = () => {
  return (
    <FlexBox direction={FlexBoxDirection.Column} width="50%">
      <Title level={TitleLevel.H3}>Avg. Visitors per Hour</Title>
      <LineChart
        datasets={chartData}
        width={'100%'}
        labels={['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM']}
      />
    </FlexBox>
  );
};
```

The `labels` array will be our x-axis while the `datasets` prop will be used as values for the y-axis.

### 3. Create the Top Products Chart

As a store manager, we are also interested which products are the bestsellers in our store.
In order to visualize this information, we can make use of a [BarChart](https://sap.github.io/ui5-webcomponents-react/?path=/docs/charts-barchart--default-story).
There is again a dataset prepared in `chartDataProducts.json`.

Therefore let's adjust the `src/detail/charts/products.jsx` file as follows:

```jsx harmony
import { FlexBox, FlexBoxDirection, Title, TitleLevel } from '@ui5/webcomponents-react';
import { BarChart } from '@ui5/webcomponents-react-charts';
import React from 'react';
import chartData from './chartDataProducts';

const ProductsChart = () => {
  return (
    <FlexBox direction={FlexBoxDirection.Column} width="50%">
      <Title level={TitleLevel.H3}>Top 5 Products</Title>
      <BarChart
        datasets={chartData}
        width={'100%'}
        labels={['Super Desktop', 'Smart Mobile', 'Crystal Display', 'Power Charger', 'Hacker Keyboard']}
      />
    </FlexBox>
  );
};

export default ProductsChart;
```
