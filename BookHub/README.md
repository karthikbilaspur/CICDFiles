Features
User registration and login
Book catalog with search and filtering
Book reviews and ratings
User profiles and book shelves
Responsive design for mobile and desktop
Getting Started
Prerequisites
Docker
Kubernetes
PHP 8.3
MySQL 8.0
Nginx
Installation
Clone the repository: git clone https://github.com/your-username/bookhub.git
Build and run the Docker containers: docker-compose up -d
Apply the Kubernetes YAML files: kubectl apply -f k8s/
Configuration
Update the docker-compose.yml file with your Docker Hub credentials.
Update the k8s/ directory with your Kubernetes cluster configuration.
CI/CD
BookHub uses GitHub Actions for CI/CD. The pipeline builds and pushes the Docker image, and deploys the application to a Kubernetes cluster.
Contributing
Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added or fixed.
License
BookHub is licensed under the MIT License.
Acknowledgments
Thanks to the PHP, MySQL, and Nginx communities for their excellent documentation and support.
Thanks to the Kubernetes and Docker communities for their excellent tools and resources.
