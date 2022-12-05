import { createContext, useContext } from 'react';

export type ServiceContainer = {
  // Declare your services here...
};

export const container = {
  // Instantiate your services here...
};

export const ServiceContainerContext = createContext<ServiceContainer>({} as ServiceContainer);

export const useServiceContainer = () => useContext(ServiceContainerContext);
