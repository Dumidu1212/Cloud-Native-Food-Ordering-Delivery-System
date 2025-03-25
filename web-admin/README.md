Web Admin Portal (React)
•	Framework & Language: React with JavaScript
•	State Management: Redux or Context API
•	Routing: React Router
•	API Integration: Axios for making REST API calls
•	UI Libraries: Material-UI or Bootstrap for responsive, modern UI components
•	Testing: Jest and React Testing Library for unit and integration tests


├── web-admin/                          # React-based Web Admin Portal
│   ├── public/
│   │   └── index.html                # Main HTML template
│   ├── src/
│   │   ├── components/               # Reusable UI components (Navbar, Sidebar, Cards, etc.)
│   │   ├── pages/                    # Specific pages for admin tasks
│   │   │   ├── AdminLogin.js         # Admin Login screen
│   │   │   ├── AdminDashboard.js     # Dashboard with metrics and management options
│   │   │   ├── UserManagement.js     # Manage customers and delivery persons
│   │   │   ├── RestaurantApproval.js # Approve or reject restaurant registrations
│   │   │   └── FinancialOverview.js  # Display transaction summaries and financial data
│   │   ├── services/                 # API services (using Axios) for admin functions
│   │   ├── store/                    # Redux (or Context API) for state management
│   │   ├── App.js                    # Main application component with routing configuration
│   │   └── index.js                  # React entry point
│   ├── package.json                  # Dependencies and scripts for the admin portal
│   └── README.md                     # Documentation for the admin portal
│
