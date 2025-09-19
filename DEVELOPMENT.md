# Development Setup

## Local Development with Mock Authentication

This project has been configured for local development with mock authentication to bypass AWS Cognito.

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

The application will be available at http://localhost:5173/

### Mock Authentication

When running locally, the application uses a mock authentication service that provides:

- **Test User:** `test-user`
- **Groups:** `['animl/demo-project/member', 'beta_access']`
- **Auth Status:** `authenticated`

This allows you to test the UI and functionality without needing AWS Cognito credentials.

### Configuration

The mock authentication is controlled by the `.env.local` file:

```
VITE_STAGE=development
VITE_USE_MOCK_AUTH=true
```

To disable mock auth and use real AWS Cognito, set `VITE_USE_MOCK_AUTH=false` or remove the environment variable.

### Files Modified for Mock Auth

- `src/mocks/mockAuth.js` - Mock authentication service
- `src/app/App.jsx` - Conditional authentication logic
- `src/index.jsx` - Conditional Authenticator.Provider wrapper
- `.env.local` - Environment configuration

### Notes

- The mock service simulates a user with member access to a demo project
- All API calls will still go to the configured development endpoint
- The mock only affects the frontend authentication state, not backend permissions