## 🎓 Controle Acadêmico API

![API Status](https://img.shields.io/badge/API-REST%20ful-blueviolet)
![Database](https://img.shields.io/badge/database-MySQL%208.0+-blue)
![Architecture](https://img.shields.io/badge/architecture-layer%20pattern-orange)
![Code Quality](https://img.shields.io/badge/code%20quality-clean%20code-brightgreen)

## 📈 Progresso

| Sprint   | Status          | Badge                                                                      |
| -------- | --------------- | -------------------------------------------------------------------------- |
| Sprint 1 | ✅ Concluída    | ![Sprint 1](https://img.shields.io/badge/sprint%201-concluída-success)     |
| Sprint 2 | ✅ Concluída    | ![Sprint 2](https://img.shields.io/badge/sprint%202-concluída-success)     |
| Sprint 3 | 🔄 Em andamento | ![Sprint 3](https://img.shields.io/badge/sprint%203-em%20andamento-yellow) |

## 📋 Funcionalidades Implementadas (Sprint 1)

✅ CRUD Completo

- Create: Inserção de registros acadêmicos
- Read: Consultas com filtros e busca por ID
- Update: Atualização parcial com recálculo de médias
- Delete: Remoção segura de registros

---

🗄️ Banco de Dados

- Modelagem relacional com MySQL
- Chaves primárias e estrangeiras
- Constraints UNIQUE compostos
- Conexão segura com mysql2/promise

---

```
ENDPOINTS:

- GET: /api/materias/       --> List Materias
- POST: / api/materias/     --> Create Materia
- PUT: /api/materias/:id    --> Update Materia
- DELETE: /api/materias/:id --> Delete Materia
```

---

#### 👉 Project Structure

```
controle-academico-api/
├── 📁 src/                    # Código fonte principal
│   ├── 📁 config/            # Configurações da aplicação
│   │   └── database.js       # Configuração do banco de dados
│   ├── 📁 controllers/       # Controladores da API
│   ├── 📁 middlewares/       # Middlewares customizados
│   ├── 📁 repositories/      # Camada de acesso a dados (Repository Pattern)
│   ├── 📁 routes/            # Definição de rotas da API
│   ├── 📁 services/          # Lógica de negócio da aplicação
│   └── 📁 utils/             # Utilitários e helpers
├── 📄 .editorconfig          # Configuração de estilo de código
├── 📄 .env.example           # Template de variáveis de ambiente
├── 📄 .gitignore            # Arquivos ignorados pelo Git
├── 📄 app.js                # Configuração principal da aplicação
├── 📄 LICENSE               # Licença MIT
├── 📄 package.json          # Dependências e scripts do projeto
├── 📄 README.md             # Documentação do projeto
└── 📄 server.js             # Ponto de entrada da aplicação
```
