import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class MobileLogin extends StatefulWidget {
  const MobileLogin({super.key});

  @override
  MobileLoginState createState() => MobileLoginState();
}

class MobileLoginState extends State<MobileLogin> {
  final _formKey = GlobalKey<FormState>();
  final _storage = FlutterSecureStorage();
  String email = '';
  String password = '';
  String errorMessage = '';

  Future<void> _login() async {
    if (!_formKey.currentState!.validate()) return;

    try {
      final response = await http.post(
        Uri.parse('https://api.yourdomain.com/api/users/login'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'email': email, 'password': password}),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        final token = data['token'];
        
        // Securely store the JWT token on the device.
        await _storage.write(key: 'jwt_token', value: token);

        // Before proceeding with UI navigation or state changes, check that the widget is still mounted.
        if (!mounted) return;

        // Decode the JWT to extract the user's role.
        final parts = token.split('.');
        if (parts.length != 3) {
          setState(() {
            errorMessage = 'Invalid token format';
          });
          return;
        }

        // Decode the payload. (For production, consider using a well-tested package like 'jwt_decode' for improved reliability.)
        final normalized = base64Url.normalize(parts[1]);
        final payload = json.decode(utf8.decode(base64Url.decode(normalized)));
        String role = payload['role'];

        // Perform role-based redirection.
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
        if (!mounted) return;
        setState(() {
          errorMessage = 'Login failed: ${response.body}';
        });
      }
    } catch (error) {
      if (!mounted) return;
      setState(() {
        errorMessage = 'An error occurred. Please try again.';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Mobile Login')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              if (errorMessage.isNotEmpty)
                Text(errorMessage, style: const TextStyle(color: Colors.red)),
              TextFormField(
                decoration: const InputDecoration(labelText: 'Email'),
                validator: (value) =>
                    (value == null || value.isEmpty) ? 'Please enter your email' : null,
                onChanged: (value) => email = value,
              ),
              TextFormField(
                decoration: const InputDecoration(labelText: 'Password'),
                obscureText: true,
                validator: (value) =>
                    (value == null || value.isEmpty) ? 'Please enter your password' : null,
                onChanged: (value) => password = value,
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: _login,
                child: const Text('Login'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
