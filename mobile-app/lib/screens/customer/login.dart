import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class MobileLogin extends StatefulWidget {
  @override
  _MobileLoginState createState() => _MobileLoginState();
}

class _MobileLoginState extends State<MobileLogin> {
  final _formKey = GlobalKey<FormState>();
  final _storage = FlutterSecureStorage();
  String email = '';
  String password = '';
  String errorMessage = '';

  Future<void> _login() async {
    if (_formKey.currentState!.validate()) {
      try {
        final response = await http.post(
          Uri.parse('https://api.yourdomain.com/api/users/login'),
          headers: {'Content-Type': 'application/json'},
          body: json.encode({'email': email, 'password': password}),
        );
        if (response.statusCode == 200) {
          final data = json.decode(response.body);
          final token = data['token'];
          // Securely store the JWT token on the device
          await _storage.write(key: 'jwt_token', value: token);
          // Decode token to extract user role. For production, consider using a dedicated package like jwt-decode.
          final parts = token.split('.');
          if (parts.length != 3) {
            throw Exception('Invalid token');
          }
          final payload = json.decode(
              utf8.decode(base64Url.decode(base64Url.normalize(parts[1]))));
          String role = payload['role'];
          if (role == 'customer') {
            Navigator.pushReplacementNamed(context, '/customer/home');
          } else if (role == 'delivery') {
            Navigator.pushReplacementNamed(context, '/delivery/dashboard');
          } else {
            setState(() {
              errorMessage = 'Invalid user role';
            });
          }
        } else {
          setState(() {
            errorMessage = 'Login failed: ${response.body}';
          });
        }
      } catch (error) {
        setState(() {
          errorMessage = 'An error occurred. Please try again.';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Mobile Login')),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              if (errorMessage.isNotEmpty)
                Text(errorMessage, style: TextStyle(color: Colors.red)),
              TextFormField(
                decoration: InputDecoration(labelText: 'Email'),
                validator: (value) =>
                    value == null || value.isEmpty ? 'Please enter your email' : null,
                onChanged: (value) => email = value,
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
                validator: (value) =>
                    value == null || value.isEmpty ? 'Please enter your password' : null,
                onChanged: (value) => password = value,
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: _login,
                child: Text('Login'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
