## 🎓 Controle Acadêmico API

![API Status](https://img.shields.io/badge/API-REST%20ful-blueviolet)
![Database](https://img.shields.io/badge/database-MySQL%208.0+-blue)
![Architecture](https://img.shields.io/badge/architecture-layer%20pattern-orange)
![Code Quality](https://img.shields.io/badge/code%20quality-clean%20code-brightgreen)

## 📈 Progresso

| Sprint   | Status         | Badge                                                                     |
| -------- | -------------- | ------------------------------------------------------------------------- |
| Sprint 1 | ✅ Completed   | ![Sprint 1](https://img.shields.io/badge/sprint%201-Completed-success)    |
| Sprint 2 | ✅ Completed   | ![Sprint 2](https://img.shields.io/badge/sprint%202-Complted-success)     |
| Sprint 3 | 🔄 In Progress | ![Sprint 3](https://img.shields.io/badge/sprint%203-In%20Progress-yellow) |

## 📋 Implemented Features (Sprint 1)

✅ Full CRUD Operations

- Create: Register new academic record
- Read: Retrieve academic data by ID
- Update: Modify records with automatic average calculation
- zDelete: Remove academic record

---

🗄️ Database

- Relational modeling using MySQL
- Proper use of primary and foreign keys
- Composite UNIQUE constraints
- Secure database connection with `mysql2/promise`

---

## 🔐 Authentication & Security

- JWT-based authentication
- Protected routes using middleware
- User identity extracted from token (req.user.id)
- Password hashing with bcrypt

## 🚀 API Endpoints

```
USERS
---------------------------------------------------
GET    /api/users/           -> List users [AUTH REQUIRED]
POST   /api/users/           -> Create a new user
        Required JSON body:
        { name, username, password }


AUTH
---------------------------------------------------
POST   /api/auth/login       -> User login
        Required JSON body:
        { username, password }
        Returns JWT token



MATERIAS
[AUTH REQUIRED]
---------------------------------------------------
GET    /api/materias/        -> List all subjects
POST   /api/materias/        -> Create a subject
        Required JSON body:
        { id_periodo, nome }

PUT    /api/materias/:id     -> Update a subject
DELETE /api/materias/:id     -> Delete a subject



USER SUBJECT ENROLLMENT
[AUTH REQUIRED]
---------------------------------------------------
POST   /api/users-materias/enroll
       -> Enroll logged user in a subject
       Required JSON body:
       { id_materia }

GET    /api/users-materias/
       -> List all subjects the logged user is enrolled in

PUT    /api/users-materias/:id_matricula
       -> Update grades for an enrolled subject
       Required JSON body:
       { nota_1, nota_2 }
       (Average grade calculated automatically)
```

## 🧱 Project Structure

```
controle-academico-api/
├── src/
│   ├── config/              # Application configuration
│   │   └── database.js      # Database connection setup
│   ├── controllers/         # Request handlers
│   ├── middlewares/         # Custom middlewares (JWT auth, etc.)
│   ├── repositories/        # Data access layer (Repository Pattern)
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   └── utils/               # Helpers and utilities
├── .editorconfig
├── .env.example
├── .gitignore
├── app.js                   # Express app configuration
├── server.js                # Application entry point
├── package.json
├── LICENSE                  # MIT License
└── README.md

```

## 🚀 How to Run

```
1. Clone the repository
2. Install dependencies
3. Configure .env
4. Run: npm run dev
```
