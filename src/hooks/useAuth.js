import { useAuthenticator } from '@aws-amplify/ui-react';
import { createMockUseAuthenticator } from '../mocks/mockAuth';

// Custom hook that works with both real and mock authentication
export const useAuth = () => {
  const useMockAuth = import.meta.env.VITE_USE_MOCK_AUTH === 'true';

  if (useMockAuth) {
    const mockUseAuthenticator = createMockUseAuthenticator();
    return mockUseAuthenticator;
  }

  return useAuthenticator;
};