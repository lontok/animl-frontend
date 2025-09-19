// Mock authentication service for local development
// This bypasses AWS Cognito and provides a test user

export const MOCK_USER = {
  username: 'test-user',
  groups: ['animl/demo-project/member', 'beta_access'],
  authStatus: 'authenticated',
  signInUserSession: {
    idToken: {
      payload: {
        'cognito:username': 'test-user',
        'cognito:groups': ['animl/demo-project/member', 'beta_access'],
      },
    },
  },
};

export const mockAuthenticator = {
  authStatus: 'authenticated',
  user: MOCK_USER,
  route: 'authenticated',
  toSignIn: () => console.log('Mock: redirecting to sign in'),
  toSignUp: () => console.log('Mock: redirecting to sign up'),
  signOut: () => console.log('Mock: signing out'),
};

// Mock Amplify Auth service
export const mockAuth = {
  signIn: async (username) => {
    console.log('Mock Auth: Sign in attempted with', username);
    return Promise.resolve(MOCK_USER);
  },
  signOut: async () => {
    console.log('Mock Auth: Sign out');
    return Promise.resolve();
  },
  currentAuthenticatedUser: async () => {
    console.log('Mock Auth: Getting current user');
    return Promise.resolve(MOCK_USER);
  },
};

// Override the useAuthenticator hook for development
export const createMockUseAuthenticator = () => {
  return (selector) => {
    if (typeof selector === 'function') {
      return selector(mockAuthenticator);
    }
    return mockAuthenticator;
  };
};