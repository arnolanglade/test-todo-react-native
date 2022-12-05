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