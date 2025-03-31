import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class DeliveryRegistration extends StatefulWidget {
  @override
  _DeliveryRegistrationState createState() => _DeliveryRegistrationState();
}

class _DeliveryRegistrationState extends State<DeliveryRegistration> {
  final _formKey = GlobalKey<FormState>();
  String name = '';
  String email = '';
  String password = '';
  String errorMessage = '';

  Future<void> _register() async {
    if (_formKey.currentState!.validate()) {
      try {
        final response = await http.post(
          Uri.parse('https://api.yourdomain.com/api/users/register'),
          headers: {'Content-Type': 'application/json'},
          body: json.encode({
            'name': name,
            'email': email,
            'password': password,
            'role': 'delivery'  // Fixed role for delivery personnel registration
          }),
        );
        if (response.statusCode == 201) {
          // Registration successful; navigate to login screen
          Navigator.pushReplacementNamed(context, '/login');
        } else {
          setState(() {
            errorMessage = 'Registration failed: ${response.body}';
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
      appBar: AppBar(title: Text('Delivery Registration')),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Form(
            key: _formKey,
            child: Column(
              children: [
                if (errorMessage.isNotEmpty)
                  Text(errorMessage, style: TextStyle(color: Colors.red)),
                TextFormField(
                  decoration: InputDecoration(labelText: 'Name'),
                  validator: (value) =>
                      value == null || value.isEmpty ? 'Please enter your name' : null,
                  onChanged: (value) => name = value,
                ),
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
                  onPressed: _register,
                  child: Text('Register as Delivery Personnel'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
