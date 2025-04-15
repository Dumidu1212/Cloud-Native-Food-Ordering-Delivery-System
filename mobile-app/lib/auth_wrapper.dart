import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'screens/login.dart';
import 'screens/customer/home.dart';
import 'screens/delivery/dashboard.dart';

class AuthWrapper extends StatefulWidget {
  const AuthWrapper({super.key});

  @override
  AuthWrapperState createState() => AuthWrapperState();
}

class AuthWrapperState extends State<AuthWrapper> {
  final FlutterSecureStorage _storage = FlutterSecureStorage();
  bool _isLoading = true;
  String? _userRole;

  @override
  void initState() {
    super.initState();
    _checkLoginStatus();
  }

  Future<void> _checkLoginStatus() async {
    final token = await _storage.read(key: 'jwt_token');
    if (token != null) {
      try {
        // Decode the JWT to get the payload. (For production, use a reliable JWT decode package.)
        List<String> parts = token.split('.');
        if (parts.length != 3) {
          throw Exception('Invalid token');
        }
        // base64Url normalization is required in some cases
        String normalizedPayload = base64Url.normalize(parts[1]);
        final payloadMap = jsonDecode(utf8.decode(base64Url.decode(normalizedPayload)));
        _userRole = payloadMap['role']; // e.g., 'customer' or 'delivery'
      } catch (error) {
        print("Token decoding failed: $error");
      }
    }
    setState(() {
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return Scaffold(body: Center(child: CircularProgressIndicator()));
    }
    if (_userRole == null) {
      // If no valid token exists, navigate to the unified login screen.
      return LoginScreen();
    }
    // Redirect based on user role.
    if (_userRole == 'customer') {
      return CustomerHome();
    } else if (_userRole == 'delivery') {
      return DeliveryDashboard();
    } else {
      // Default fallback.
      return LoginScreen();
    }
  }
}
