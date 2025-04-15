import 'package:flutter/material.dart';

class DeliveryDashboard extends StatelessWidget {
  const DeliveryDashboard({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Delivery Dashboard'),
      ),
      body: Center(
        child: Text('Welcome, Delivery Personnel!'),
      ),
    );
  }
}
