# Project Plan – Cloud‑Native Food Ordering & Delivery System

## 1. Project Vision and Objectives

### Vision
Build a robust, scalable, and secure food ordering and delivery platform inspired by leading services like PickMe Food and UberEats. The system will serve four primary user roles:
- **Main Admin:** Oversee system operations, manage user accounts, approve restaurant registrations, and monitor financial transactions.
- **Restaurant Owners:** Manage restaurant profiles, menus, and orders.
- **Customers:** Browse restaurants, place orders, process payments, and track delivery statuses.
- **Delivery Personnel:** Receive and update delivery orders in real time.

### Objectives
- **Scalability & Performance:**  
  Develop a microservices architecture that supports high availability and horizontal scaling.
- **Security:**  
  Implement JWT-based authentication with role-based access control to ensure secure, stateless sessions.
- **User Experience:**  
  Deliver a seamless and intuitive unified web app for Admin and Restaurant users, and a mobile app for Customers and Delivery Personnel.
- **Rapid Deployment:**  
  Containerize all components using Docker and orchestrate deployments with Kubernetes, supported by CI/CD pipelines.
- **Maintainability & Modularity:**  
  Ensure that each microservice is self-contained, enabling independent development, testing, and deployment.

## 2. Architectural Decisions and High-Level Workflow

### Architectural Decisions
- **Microservices Architecture:**  
  The system is split into multiple independent services:
  - **API Gateway:** Acts as the central entry point, handling authentication (JWT), request routing, and load balancing.
  - **User Service:** Manages registration, login, and user profiles for Admin, Customer, and Delivery roles.
  - **Restaurant Service:** Handles restaurant data and menu management.
  - **Order Service:** Processes orders, manages order state transitions, and stores order history.
  - **Delivery Service:** Manages driver assignments and tracks delivery status.
  - **Payment Service:** Integrates with a payment gateway to process transactions.
  - **Notification Service:** Sends real-time notifications (SMS, email, push) to users.
- **Unified Front-End Approach:**  
  - A single **Unified Web App** (built with React) handles both Admin and Restaurant functionalities via a shared login interface and role-based routing.
  - A single **Mobile App** (built with Flutter) serves both Customers and Delivery Personnel.
- **Containerization & Orchestration:**  
  Each component is containerized with Docker, and Kubernetes is used for orchestration, ensuring scalability and reliability.
- **CI/CD Pipeline:**  
  Automated pipelines (e.g., GitHub Actions or Jenkins) are set up to build, test, and deploy all components continuously.

### High-Level Workflow
1. **User Interaction:**  
   - Customers and Delivery Personnel use the mobile app.
   - Admin and Restaurant users access the unified web app.
2. **Authentication:**  
   - The unified login interface sends credentials to the API Gateway.
   - The API Gateway, using the User Service, validates credentials and issues a JWT token containing role information.
3. **Request Routing:**  
   - The API Gateway routes requests to the appropriate backend microservice based on the endpoint and user role.
4. **Data Management:**  
   - Each microservice manages its own MongoDB collection for domain-specific data.
5. **Inter-Service Communication:**  
   - Synchronous RESTful APIs and asynchronous messaging (via RabbitMQ/Kafka) support data flow between services.
6. **Deployment:**  
   - All components are deployed as Docker containers on a Kubernetes cluster, with CI/CD pipelines automating the process.

## 3. Reference to the Architecture Diagram

The high-level architectural diagram is stored in the `docs/` folder as `architecture-diagram.png`. This diagram illustrates:
- The interaction between the Unified Web App, Mobile App, API Gateway, and all backend microservices.
- The containerization and orchestration setup using Docker and Kubernetes.
- The separation of each microservice and its dedicated database (or collection).

## 4. Key Assumptions and Dependencies

### Assumptions
- Users (Admins, Restaurant Owners, Customers, Delivery Personnel) register and authenticate using JWT tokens.
- MongoDB is used as the primary data store, with each microservice managing its own collection.
- External services (payment gateways, SMS/email providers) are accessible and can be integrated in sandbox mode.
- The project is scoped to a 5‑week assignment but designed for potential production scalability.

### Dependencies
- **Development Tools:**  
  VS Code, Flutter SDK, Node.js, Docker, Kubernetes CLI.
- **Third-Party APIs:**  
  Payment Gateway (e.g., Stripe, PayHere), Notification APIs (Twilio, SendGrid).
- **Infrastructure:**  
  Docker and Kubernetes for containerization and orchestration.
- **CI/CD:**  
  GitHub Actions or Jenkins for continuous integration and deployment.
- **Version Control:**  
  Git and GitHub for source code management and collaboration.

## 5. Conclusion

This project plan outlines a clear vision and robust objectives, supported by a microservices architecture that ensures scalability, security, and maintainability. The high-level workflow demonstrates how front-end and back-end components interact seamlessly through an API Gateway, while containerization and CI/CD pipelines provide a production-ready deployment framework.

The key assumptions and dependencies have been documented to guide development and risk mitigation. This plan sets a solid foundation for the subsequent sprints, ensuring successful implementation of the Cloud‑Native Food Ordering & Delivery System.

