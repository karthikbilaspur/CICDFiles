# Gym Website

A full-stack web application for a gym website built with React, Node.js, Express.js, and MongoDB.

## Features

* User registration and login functionality
* Class schedule management
* Trainer profiles and management
* Payment processing with Stripe
* Reviews and testimonials
* Blog posts

## Technologies Used

* Frontend:
	+ React
	+ React Router
	+ Axios
	+ Bootstrap
* Backend:
	+ Node.js
	+ Express.js
	+ Mongoose
	+ JWT authentication
	+ Stripe payment processing
* Database:
	+ MongoDB
* Deployment:
	+ Docker
	+ Kubernetes

## Installation and Setup

1. Clone the repository: `git clone https://github.com/your-username/gym-website.git`
2. Install dependencies:
	* Frontend: `cd frontend && npm install`
	* Backend: `cd backend && npm install`
3. Start the development servers:
	* Frontend: `cd frontend && npm start`
	* Backend: `cd backend && npm start`
4. Open the app in your browser: `http://localhost:3000`

## Environment Variables

* `STRIPE_SECRET_KEY`: Your Stripe secret key
* `JWT_SECRET`: Your JWT secret key
* `MONGO_URI`: Your MongoDB connection string

## Deployment

* Build the Docker images: `docker build -t your-username/gym-website-frontend ./frontend` and `docker build -t your-username/gym-website-backend ./backend`
* Push the images to Docker Hub: `docker push your-username/gym-website-frontend` and `docker push your-username/gym-website-backend`
* Deploy to Kubernetes: `kubectl apply -f k8s/deployment.yaml`

## Contributing

Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
