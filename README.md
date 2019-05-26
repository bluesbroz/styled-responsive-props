# styled-responsive-props

[![npm](https://img.shields.io/badge/dependencies-none-brightgreen.svg)]()

#### Usage
```js
import React from 'react';
import styled from 'styled-components';
import respProps from 'styled-responsive-props';

const StyledExample = styled.div`
  padding: 20px;
  
  ${respProps([
    'padding',
    'background-color',
    ['margin', '10px']
  ])}
`;

const ExampleComponent = () => (
  ...
);

export default ExampleComponent;
```

#### Ex. 1
```js
<StyledExample>
  example...
</StyledExample>
```
result:
```css
padding: 20px;
margin: 10px; /* default value */
```

#### Ex. 2
```js
<StyledExample background-color="#bada55">
  example...
</StyledExample>
```
result:
```css
padding: 20px;
background-color: #bada55;
margin: 10px;
```

#### Ex. 3
```js
<StyledExample margin="20px">
  example...
</StyledExample>
```
result:
```css
padding: 20px;
background-color: #bada55;
margin: 20px;
```

#### Ex. 4
You can pass breakpoints divided by pipe.

There are built in breakpoints:
`xs >= 0, sm > 425, md > 768, lg > 1024, xl > 1200`

Or you can specify your own breakpoint with number, it will be used in media declaration 
`@media (min-width: ...px) { ... }`
```js
<StyledExample padding="xs:15px|700:20px|lg:30px">
  example...
</StyledExample>
```
result:
```css
padding: 20px;
padding: 15px; /* xs:15px */
@media (min-width: 700px) { padding: 20px; } /* 700:20px */
@media (min-width: 1025px) { padding: 30px; } /* lg:30px */
margin: 10px;
```
