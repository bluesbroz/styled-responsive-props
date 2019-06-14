# styled-responsive-props

[![npm](https://img.shields.io/badge/dependencies-none-brightgreen.svg)]()

This is a small helper tool for styled-components. The main idea is to be able to use css property (with breakpoints) as an adjustment prop, without necessity of extending current design system.

#### Usage

1. Declare properties to be used in your styled component 
2. Use css-property name as a prop name and pass a corresponding value 

You can pass single value or breakpoints with values divided by pipe.

There are built in breakpoints:
`xs >= 0, sm > 425px, md > 768px, lg > 1024px, xl > 1200px`

But you can specify your own breakpoint key as a number for `min-width` media declaration: 
`@media (min-width: ...px) { ... }`

#### Examples
```js
import React from 'react';
import styled from 'styled-components';
import respProps from 'styled-responsive-props';

const StyledExample = styled.div`
  padding: 20px;
  
  ${respProps([
    'padding',
    'background-color',
    ['margin', '10px'] // with default value
  ])}
`;
```

##### Ex. 1
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

##### Ex. 2
```js
<StyledExample background-color="#bada55">
  example...
</StyledExample>
```
result:
```css
padding: 20px;
background-color: #bada55;
margin: 10px; /* default value */
```

##### Ex. 3
```js
<StyledExample margin="20px">
  example...
</StyledExample>
```
result:
```css
padding: 20px;
margin: 20px;
```

##### Ex. 4
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
margin: 10px; /* default value */
```
