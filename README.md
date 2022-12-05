# Project Name

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