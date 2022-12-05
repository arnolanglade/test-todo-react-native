# Project Name

## Add a service to the service container

Declare your service:
```ts
// src/app/ServiceContainerContext.tsx
export type ServiceContainer = {
  myService: (id: string) => string
};
```

Add your services to the service container:
```ts
// src/app/ServiceContainerContext.tsx
import myService from 'path/service/module'

export const container = {
  myService: myService
};
```

Add your services to the service container used for test:
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

Both example will render a `<Text />` with translation... as child

### Add value to translations

```ts
Hello, {name}
const translations: Translations = {
    myTranslationKey: 'Hello, {name}'
};

const translation = useIntl();
translation('myTranslationKey', {name: 'Arnaud'})
```