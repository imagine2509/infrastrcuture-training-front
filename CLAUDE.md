# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `yarn dev`
- **Build project**: `yarn build` (runs TypeScript compilation then Vite build)
- **Type checking**: `yarn typecheck`
- **Lint code**: `yarn lint`
- **Fix lint issues**: `yarn lint:fix`
- **Preview build**: `yarn preview`

## Project Architecture

This is a React + TypeScript application using Vite as the build tool and follows Feature-Sliced Design (FSD)
architecture principles:

### Folder Structure

- `src/app/` - Application setup, providers, and global configuration
- `src/pages/` - Route-level components and page layouts
- `src/widgets/` - Complex UI components (currently empty)
- `src/features/` - Feature-specific business logic (currently empty)
- `src/entities/` - Business entities and their API interactions
- `src/shared/` - Reusable utilities, libraries, and configurations

### Key Architecture Patterns

**Path Aliases**: The project uses TypeScript path mapping with these aliases:

- `@/*` → `./src/*`
- `@app/*` → `./src/app/*`
- `@pages/*` → `./src/pages/*`
- `@widgets/*` → `./src/widgets/*`
- `@features/*` → `./src/features/*`
- `@entities/*` → `./src/entities/*`
- `@shared/*` → `./src/shared/*`

**State Management**: Uses React Query (@tanstack/react-query) for server state management with a centralized
QueryClient configuration in `src/shared/lib/query-client.ts`.

**API Layer**: Centralized API logic in `src/entities/api/` with:

- Type-safe API responses using generic `ApiResponse<T>` wrapper
- Custom hooks for data fetching (e.g., `usePing`)
- Base fetch utility with error handling
- Query key patterns for React Query

**Environment Variables**: Uses Vite's environment variable system with `VITE_` prefix. API URL is configured via
`VITE_API_URL`.

### Current Implementation

The application currently implements:

- A basic home page that pings an API endpoint
- React Router setup with routing configuration
- React Query integration with automatic refetching
- TypeScript strict mode configuration
- ESLint configuration with React and TypeScript rules

When adding new features, follow the FSD architecture by placing code in the appropriate layer based on its scope and
responsibility.

### Code Style Rules

**Styling**: NEVER use inline styles (`style={{ ... }}`). Always use Tailwind CSS classes for styling. This ensures
consistency, maintainability, and better performance.