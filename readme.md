# CodeMentor – AI Code Review Assistant

CodeMentor is a full-stack AI-powered code review platform that helps developers improve code quality by generating intelligent feedback using Large Language Models (LLMs). Users can securely submit code snippets, receive AI-generated reviews, and access their previous review history.

## Features

- AI-powered code review using OpenAI/Claude APIs
- Secure user authentication with JWT
- User registration and login
- Submit code snippets in real time
- Receive detailed AI-generated feedback
- Store code snippets and review history in PostgreSQL
- Responsive React-based user interface
- RESTful backend APIs built with Express and TypeScript

## Tech Stack

### Frontend
- React.js
- TypeScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- TypeScript

### Database
- PostgreSQL

### Authentication
- JWT (JSON Web Token)
- Password Hashing (bcrypt)

### AI Integration
- OpenAI API / Anthropic Claude API

## Project Architecture

```
React Frontend
      │
      ▼
Express REST API
      │
 ┌────┴────┐
 │         │
 ▼         ▼
PostgreSQL  OpenAI / Claude API
```

## Database Schema

### Users
- id
- name
- email
- password_hash
- created_at

### Code Snippets
- id
- user_id
- language
- code
- created_at

### Reviews
- id
- snippet_id
- ai_feedback
- model_used
- created_at

## Workflow

1. User registers or logs in.
2. JWT token is generated after successful authentication.
3. User submits a code snippet.
4. Backend validates the request.
5. Code is sent to OpenAI/Claude API.
6. AI generates review and improvement suggestions.
7. Review is stored in PostgreSQL.
8. User can view current and previous reviews.

## Folder Structure

```
CodeMentor/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── models/
│   ├── config/
│   ├── app.ts
│   └── package.json
│
├── database/
│   └── schema.sql
│
├── README.md
└── .env
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/CodeMentor.git
cd CodeMentor
```

### Install Backend

```bash
cd server
npm install
```

### Install Frontend

```bash
cd ../client
npm install
```

### Configure Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

DATABASE_URL=your_postgresql_connection

JWT_SECRET=your_secret_key

OPENAI_API_KEY=your_api_key
# or
CLAUDE_API_KEY=your_api_key
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
npm start
```

## Future Enhancements

- Multi-language syntax highlighting
- GitHub repository integration
- Review scoring system
- AI-generated code fixes
- Team collaboration
- Review analytics dashboard
- Export reviews as PDF
- Docker deployment

## Learning Outcomes

This project strengthened my knowledge in:

- Full-stack web development
- REST API design
- JWT authentication
- PostgreSQL database design
- TypeScript development
- AI API integration
- Prompt engineering
- State management in React
- Backend architecture
- Secure application development

## Author

**Harish J**

B.E. Electronics and Communication Engineering  
Chennai Institute of Technology

---
