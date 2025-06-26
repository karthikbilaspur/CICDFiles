import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'John Doe', review: 'This gym is amazing! The trainers are knowledgeable and friendly.' },
    { id: 2, name: 'Jane Doe', review: 'I love the variety of classes offered at this gym. I always find something new to try.' },
    { id: 3, name: 'Bob Smith', review: 'The facilities at this gym are top-notch. I feel like I\'m getting a luxury experience.' },
  ];

  return (
    <CardDeck>
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id}>
          <Card.Body>
            <Card.Text>{testimonial.review}</Card.Text>
            <Card.Footer>- {testimonial.name}</Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
}

export default Testimonials;