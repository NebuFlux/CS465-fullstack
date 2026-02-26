# Travlr Getaways

Travlr Getaways is a full-stack travel booking and management web application developed as part of CS 465 Full Stack Development with MEAN. The project implements a hybrid architecture using the **MEAN stack** (MongoDB, Express.js, Angular, Node.js) to deliver a customer-facing multi-page site and an admin Single Page Application (SPA) for managing travel content.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Functionality](#functionality)
- [Testing](#testing)
- [Reflection](#reflection)

## Features

- Browse, search, and view travel trips, accommodations, meals, and news
- Admin SPA for authenticated staff to perform CRUD operations on trips and other content
- RESTful API backend for data consistency across customer and admin interfaces
- Secure authentication and session management

## Technology Stack

- **Frontend (Admin)**: Angular (TypeScript-based SPA)
- **Frontend (Customer)**: Express.js with Handlebars for server-rendered multi-page views
- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose ODM
- **API**: RESTful endpoints for data operations

## Architecture

The Travlr Getaways application employs a hybrid frontend approach to balance user experience needs across audiences.

The customer-facing site uses **Express.js** to generate traditional multi-page HTML views rendered server-side with Handlebars templates. This provides SEO-friendly navigation, fast initial loads for public browsing/search/booking flows, and straightforward JavaScript enhancements where needed. Navigation between pages triggers full reloads, which suits static or semi-static content discovery.

In contrast, the admin interface is built as a **Single Page Application (SPA)** using **Angular**. It delivers a responsive, component-driven experience with no page reloads during interactions such as listing, editing, and saving trips. Angular's reactive forms, routing, and state management enable real-time updates, persistent session state, and an app-like feel ideal for complex administrative workflows.

This combination optimizes the public site for discoverability and simplicity while providing admins with dynamic, efficient tools, all powered by the same secure RESTful API.

The backend uses **MongoDB**, a NoSQL document database, to store flexible, JSON-like documents for trips, itineraries, user data, pricing, and related content. Travel-related data often involves unstructured or semi-structured elements (i.e. variable itinerary components, optional amenities, dynamic pricing rules, nested booking details), which MongoDB handles naturally without rigid schemas. This enables rapid iteration and schema evolution as requirements change, with Mongoose providing application-level structure, validation, and relationships to maintain data integrity.

## Functionality

**JSON** serves as the universal data interchange format that seamlessly connects the frontend and backend. While JavaScript is the programming language powering both client and server logic, JSON is the lightweight, language-independent text format used for data payloads in API requests and responses. All API endpoints return and accept JSON, allowing Angular services (via HttpClient) and Express routes to exchange structured data consistently—whether fetching trip lists, updating records, or authenticating users.

Throughout development, code was refactored to improve maintainability and scalability. A major refactoring consolidated the numerous static customer-facing pages (home, about, contact, news, meals, rooms) by migrating their contextual content into the MongoDB database and exposing it via dedicated API endpoints (/api/home, /api/about, /api/contact, etc.). This replaced hard-coded templates with dynamic data retrieval, reducing duplication and enabling future edit capabilities directly in the admin SPA—not limited to trips. Benefits of reusable UI components (especially in Angular) include:

- Consistent design and behavior across views
- Reduced code duplication and easier maintenance
- Faster development of new features through component composition
- Improved scalability as the admin interface grows

## Testing

API testing for Travlr Getaways combines isolated endpoint checks with full browser flows, while security features like JWT authentication and CORS increase debugging complexity.

- Endpoints are tested individually in Postman to verify HTTP methods, parameters, responses, status codes, and errors, then confirmed end-to-end in the browser using the Network tab, console logs, and Angular DevTools.
- Security testing handles protected routes, token validation, authorization failures, and CORS configuration, with problems resolved through error messages and stack traces.
- Practical MEAN patterns include building an authentication API with Passport to generate JSON Web Tokens and adding authentication middleware to Express routes to protect API endpoints.[^1]
- Angular’s official security guide notes that string interpolation with {{ }} automatically escapes untrusted input to help prevent XSS attacks.[^2]
- I regularly scan all project dependencies with tools like Snyk to identify and fix vulnerabilities in third-party Angular modules.[^3]

[^1]: https://www.manning.com/books/getting-mean-with-mongo-express-angular-and-node-second-edition  
[^2]: https://v17.angular.io/guide/security  
[^3]: https://snyk.io/blog/angular-security-best-practices/

## Reflection

This course has significantly advanced my goal of becoming a professional software developer by providing hands-on experience across the full development stack. I gained practical proficiency in building modern web applications using Angular for dynamic SPAs, Express.js/Node.js for robust server-side logic and APIs, and MongoDB for flexible data persistence. Working end-to-end strengthened my ability to design RESTful services, integrate frontend and backend through JSON APIs, handle authentication/authorization, and debug layered full-stack issues.

These skills—spanning UI/UX implementation, API development, secure data management, and refactoring for scalability—have made me a more versatile and marketable candidate. I now feel confident contributing to both frontend and backend tasks in JavaScript-based teams, understanding trade-offs in architecture choices, and delivering maintainable, production-ready features.



---
**CS 465 - Full Stack Development with MEAN**  
Joshua Shoemaker  
February 2026
