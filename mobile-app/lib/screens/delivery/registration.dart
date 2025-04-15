import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class DeliveryRegistration extends StatefulWidget {
  const DeliveryRegistration({super.key});

  @override
  DeliveryRegistrationState createState() => DeliveryRegistrationState();
}

class DeliveryRegistrationState extends State<DeliveryRegistration> {
  final _formKey = GlobalKey<FormState>();
  String name = '';
  String email = '';
  String password = '';
  String errorMessage = '';

  Future<void> _register() async {
    if (!_formKey.currentState!.validate()) return;

    try {
      final response = await http.post(
        Uri.parse('https://api.yourdomain.com/api/users/register'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'name': name,
          'email': email,
          'password': password,
          'role': 'delivery', // Fixed role for delivery registration
        }),
      );

      if (response.statusCode == 201) {
        // Registration successful, ensure the widget is still mounted before navigating
        if (!mounted) return;
        Navigator.pushReplacementNamed(context, '/login');
      } else {
        if (!mounted) return;
        setState(() {
          errorMessage = 'Registration failed: ${response.body}';
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
      appBar: AppBar(title: const Text('Delivery Registration')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Form(
            key: _formKey,
            child: Column(
              children: [
                if (errorMessage.isNotEmpty)
                  Text(errorMessage, style: const TextStyle(color: Colors.red)),
                TextFormField(
                  decoration: const InputDecoration(labelText: 'Name'),
                  validator: (value) => value == null || value.isEmpty
                      ? 'Please enter your name'
                      : null,
                  onChanged: (value) => name = value,
                ),
                TextFormField(
                  decoration: const InputDecoration(labelText: 'Email'),
                  validator: (value) => value == null || value.isEmpty
                      ? 'Please enter your email'
                      : null,
                  onChanged: (value) => email = value,
                ),
                TextFormField(
                  decoration: const InputDecoration(labelText: 'Password'),
                  obscureText: true,
                  validator: (value) => value == null || value.isEmpty
                      ? 'Please enter your password'
                      : null,
                  onChanged: (value) => password = value,
                ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: _register,
                  child: const Text('Register as Delivery Personnel'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
