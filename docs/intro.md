---
sidebar_position: 1
---

# Tutorial Intro

## Description

The `fundamental-react-native` library is a set of **React Native** components based on **SAP Fundamental Styles**.

## API Reference

See Component Documentation for examples and API details.

## Getting Started

### Install

For an existing react application, install `fundamental-react-native`:

```sh
npm install fundamental-react-native
```

This project does not contain fonts and icons - they must be added to your project separately. Download **Font 72** and add fonts to your project.

### Usage
React Native Fundamental uses a centralized theme to provide consistency across all the components.

#### Step 1. Import ThemeProvider and theme then wrap your root component.

This step is important. We are passing `theme` as context value that each component will access.

```jsx
//your root component
import { ThemeProvider, theme } from 'fundamental-react-native';

function App() {
  return (
    <ThemeProvider value={theme}>
      <Root />
    </ThemeProvider>
  );
}
```

#### Step 2. Use component.

```jsx
//inside any file
import { Button } from 'fundamental-react-native';

function HomeScreen() {
  return (
    <Button>
      Press Me
    </Button>
  );
}
```
