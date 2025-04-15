import 'package:flutter/material.dart';
import 'auth_wrapper.dart';
import 'screens/customer/home.dart';
import 'screens/delivery/dashboard.dart';
import 'screens/login.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Food Ordering & Delivery',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: AuthWrapper(), // AuthWrapper handles persistent login
      routes: {
        '/login': (context) => LoginScreen(),
        '/customer/home': (context) => CustomerHome(),
        '/delivery/dashboard': (context) => DeliveryDashboard(),
      },
    );
  }
}
