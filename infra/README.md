• Deployment & Infrastructure Configuration
• Kubernetes YAML files for all deployments and services
• Instructions for infrastructure setup & deployment

├── infra/                                          # Infrastructure & Deployment Configurations
│   ├── k8s/                                        # Kubernetes manifests for all services
│   │   ├── deployment-api-gateway.yaml
│   │   ├── deployment-user-service.yaml
│   │   ├── deployment-restaurant.yaml
│   │   ├── deployment-order.yaml
│   │   ├── deployment-delivery.yaml
│   │   ├── deployment-payment.yaml
│   │   ├── deployment-notification.yaml
│   │   ├── service-api-gateway.yaml
│   │   ├── service-user.yaml
│   │   ├── service-restaurant.yaml
│   │   ├── service-order.yaml
│   │   ├── service-delivery.yaml
│   │   ├── service-payment.yaml
│   │   └── service-notification.yaml
│   ├── docker-compose.yml                          # Multi-container Docker configuration for local development
│
