Mobile Client (Flutter)
•	Framework & Language: Flutter with Dart
•	UI Development: Custom widgets, Material Design, and responsive layouts
•	State Management: Provider
•	Networking: http 
•	Testing: Unit, widget, and integration tests using Flutter’s built-in test framework

├── mobile-app/                         # Flutter Mobile Application
│   ├── lib/
│   │   ├── models/                   # Data models: User, Restaurant, MenuItem, Order, Delivery, etc.
│   │   ├── screens/                  # UI screens for all user roles
│   │   │   ├── customer/             # Customer screens: Login, Home, RestaurantList, RestaurantDetails, Cart, Payment, OrderTracking, OrderHistory
│   │   │   ├── restaurant/           # Restaurant screens: Login, Registration, Dashboard, MenuManagement, OrderManagement, Profile Management
│   │   │   ├── delivery/             # Delivery Person screens: Login, Registration, DeliveryDashboard, OrderDetails, DeliveryStatusUpdate
│   │   │   └── common/               # Shared screens/widgets across roles (e.g., common dialogs, error screens)
│   │   ├── services/                 # API calls, authentication, and business logic integration
│   │   ├── widgets/                  # Reusable UI components (custom buttons, cards, etc.)
│   │   └── main.dart                 # App entry point and routing configuration
│   ├── assets/                       # Images, fonts, and static resources
│   ├── test/                         # Unit and widget tests for the app
│   ├── pubspec.yaml                  # Flutter project configuration and dependencies
│   └── README.md                     # Documentation specific to the mobile app
