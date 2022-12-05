# Project Name

## Organization

```
$ tree src 
src
├── app
│   ├── auth
│   ├── i18n
│   ├── navigation
│   ├── safevault
│   └── testing
├── domain
├── service
├── usecase
└── view
    ├── component
    ├── design-system
    └── screen
```

* `app` contains all technical assets needed to run the application.
* `domain` contains all pieces of code used to model business problematics
* `service` contains all pieces of code that trigger the side effects
* `usecase` contains all hooks use by the screen
* `view` contains all views. It could be a screen or a component used by a screen. It contains also the design system.

### Coupling rules

`domain` **must not** use anything

`service` **must not** use `usecase` and `view`
`service` **can** use `app` and `domain`

`usecase` **must not** use `view`
`usecase` **can** use `app`, `service` and `domain`

`view/component` **must not** use `usecase`, `service` and `view/screen`
`view/component` **can** use `domain` and `app`

`view/screen` **must not** use `service`
`view/screen` **can** use `usecase` and `app`

`view/design-system` **must not** use anything except chosen third party library

## Routing

Declare your screen
```ts
// src/app/ServiceContainerContext.tsx
export type RootStackParamList = {
    MyComponent: undefined;
    // other screens
};

```

Add a screen to the online or the offline stack
```jsx
// src/app/navigation/NavigatorStack.tsx
function OnlineStack() {
    return <OnlineStack.Navigator>
        // other screens
        <Stack.Screen name="ScreenName" component={MyComponent} />
    </OnlineStack.Navigator>;
}

function OfflineStack() {
    return <OfflineStack.Navigator>
        // other screens
        <Stack.Screen name="ScreenName" component={MyComponent} />
    </OfflineStack.Navigator>;
}
```

## Service container

Declare your service:
```ts
// src/app/ServiceContainerContext.tsx
export type ServiceContainer = {
  myService: (id: string) => string
};
```

Add your service to the service container:
```ts
// src/app/ServiceContainerContext.tsx
import myService from 'path/service/module'

export const container = {
  myService: myService
};
```

Add your service to the service container used for test:
```ts
// src/app/testing/WrapperUtils.tsx
import myService from 'path/service/module'

export const aServiceContainer = (services: Partial<ServiceContainer> = {}): ServiceContainer => ({
    myService: jest.fn(),
    ...services,
});
```

## I18n

### Add a translation

```ts
// src/app/i18n/IntlProvider.tsx
const translations: Translations = {
    myTranslationKey: 'translation...'
};
```

Get a translation thanks to the `useIntl` hook
```jsx
function MyComponent() {
    const translation = useIntl()
    
    return <Text>{translation('myTranslationKey')}</Text>
}
```

Get a translation thanks to the `<Translation />` component

```jsx
function MyComponent() {
    const translation = useIntl()
    
    return <Text><Translation id="myTranslationKey" /></Text>
}
```

Both examples will render a `<Text />` with translation... as a child

### Add value to translations

```ts
Hello, {name}
const translations: Translations = {
    myTranslationKey: 'Hello, {name}'
};

const translation = useIntl();
translation('myTranslationKey', {name: 'Arnaud'})
```

## Testing

The `createWrapper` function creates a REACT component that initializes all the app's providers. The function must only be used for testing purposes. 

```ts
render(
    <MyComponent>,
    { wrapper: createWrapper(aServiceContainer(), { myTranslationKey: 'translation...' }) },
);
```

This function has two arguments, the first one is the service container and the last one is the list of translations.

### Override a service

```ts
const myService = jest.fn();

render(
    <MyComponent>,
    { wrapper: createWrapper(aServiceContainer({myService})) },
);

expect(myService).toBeCalled();
```

### Override a translation

```ts
render(
    <MyComponent>,
    {wrapper: createWrapper(aServiceContainer(), {myTranslationKey: 'Validate'})},
);

fireEvent.press(screen.getByText('Validate'));
```

Override a translation make the test more resilient. Even if you change the translation the test will still be green.

### Navigation

* `createNavigationMock` create as Navigation object
* `createRouteParams` creates an object that represents a route parameters