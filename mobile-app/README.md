Mobile Client (Flutter)
•	Framework & Language: Flutter with Dart
•	UI Development: Custom widgets, Material Design, and responsive layouts
•	State Management: Provider
•	Networking: http 
•	Testing: Unit, widget, and integration tests using Flutter’s built-in test framework

├── mobile-app/                                     # Flutter Mobile App for Customers & Delivery Personnel
│   ├── .env.example                                # Environment variable template (e.g., API_BASE_URL, APP_ENV)
│   ├── pubspec.yaml                                # Flutter project configuration and dependencies
│   ├── README.md                                   # Mobile app documentation
│   ├── lib/                                        # Application source code
│   │   ├── main.dart                               # Entry point and routing configuration
│   │   ├── models/                                 # Data models (user.dart, restaurant.dart, menu_item.dart, order.dart, delivery.dart)
│   │   ├── screens/                                # UI screens for mobile users
│   │   │   ├── customer/                           # Customer screens:
│   │   │   │   ├── login.dart                      # Customer Login/Registration screen
│   │   │   │   ├── home.dart                       # Home/Dashboard screen
│   │   │   │   ├── restaurant_list.dart            # Restaurant List screen
│   │   │   │   ├── restaurant_details.dart         # Restaurant Details & Menu screen
│   │   │   │   ├── cart.dart                       # Cart/Order Summary screen
│   │   │   │   ├── payment.dart                    # Payment screen
│   │   │   │   ├── order_tracking.dart             # Order Tracking screen
│   │   │   │   └── order_history.dart              # Order History screen
│   │   │   └── delivery/                           # Delivery Personnel screens:
│   │   │       ├── login.dart                      # Delivery Login/Registration screen
│   │   │       ├── dashboard.dart                  # Dashboard (list of assigned orders)
│   │   │       ├── order_details.dart              # Order Details screen (with map integration)
│   │   │       └── delivery_status_update.dart     # Delivery Status Update screen
│   │   ├── services/                               # API calls, authentication, and business logic integration
│   │   └── widgets/                                # Reusable UI components (custom buttons, cards, etc.)
│   ├── assets/                                     # Images, fonts, and static resources
│   ├── test/                                       # Unit and widget tests for the mobile app
│   └── README.md
│
