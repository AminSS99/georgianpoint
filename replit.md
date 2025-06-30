# Georgian Point Restaurant - Replit Architecture Guide

## Overview

This is a full-stack web application for Georgian Point, an authentic Georgian restaurant in Baku, Azerbaijan. The application serves as a restaurant website showcasing the menu, ambiance, and contact information. It's built using a modern React frontend with Express.js backend, designed for both development and production deployment.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom color variables for brand theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: Hot reload with Vite integration in development mode

### Design System
- **Component Library**: Custom components built on Radix UI primitives
- **Theming**: Dark theme with Georgian restaurant brand colors (charcoal, burgundy, gold, cream)
- **Typography**: Playfair Display for headings, Inter for body text
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Key Components

### Frontend Components
- **Layout Components**: Navbar with scroll-based styling, Footer with social links
- **Page Sections**: Hero, About, Menu, Gallery, Contact sections
- **UI Components**: Custom shadcn/ui components for consistent styling
- **Data Display**: Menu categories with expandable sections, image gallery with animations

### Backend Structure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Handling**: Express routes with API prefix structure
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Request logging and response timing

### Database Schema
- **Users Table**: Basic user structure with username/password authentication
- **Schema Validation**: Zod integration with Drizzle for type-safe operations
- **Migrations**: Drizzle-kit for database schema management

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **API Layer**: Express routes handle requests with storage interface
3. **Data Layer**: Storage interface abstracts database operations
4. **Response Flow**: JSON responses with proper error handling
5. **State Management**: Client-side caching and synchronization via React Query

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **express**: Web application framework

### UI and Styling Dependencies
- **@radix-ui/react-***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Mode
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with nodemon-like behavior
- **Integration**: Vite middleware integration for seamless development

### Production Build
- **Frontend**: Static build output to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Serving**: Express serves both API and static files
- **Environment**: NODE_ENV-based configuration switching

### Database Setup
- **Development**: In-memory storage for rapid prototyping
- **Production**: PostgreSQL with Drizzle migrations
- **Configuration**: Environment variable-based database URL

## Changelog

```
Changelog:
- June 30, 2025: Initial setup with Georgian Point restaurant website
- June 30, 2025: Enhanced mobile responsiveness across all sections
- June 30, 2025: Added comprehensive reservation form with validation
- June 30, 2025: Improved navigation and user experience
- June 30, 2025: Added smooth animations and improved visual hierarchy
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```