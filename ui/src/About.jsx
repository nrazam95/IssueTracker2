import React from 'react';
import { Badge } from 'react-bootstrap';

export default function About() {
    return (
        <div className="text-center">
            <h3>Issue Tracker version <Badge bg="secondary">0.9</Badge></h3>
            <h4>
                API version 1.0
            </h4>
        </div>
    );
}