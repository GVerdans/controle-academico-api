 
-- CREATE TABLE instituicoes (
--   id_inst INT AUTO_INCREMENT PRIMARY KEY,
--   nome VARCHAR(100) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE cursos (
--   id_curso INT AUTO_INCREMENT PRIMARY KEY,
--   id_inst INT NOT NULL,
--   nome VARCHAR(100) NOT NULL,
--   duracao_semestres INT NOT NULL,

--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

--   CONSTRAINT fk_cursos_instituicoes
--     FOREIGN KEY (id_inst)
--     REFERENCES instituicoes(id_inst)
--     ON DELETE RESTRICT
--     ON UPDATE CASCADE
-- );

-- CREATE TABLE periodos (
--   id_periodo INT AUTO_INCREMENT PRIMARY KEY,
--   id_curso INT NOT NULL,
--   nome VARCHAR(20) NOT NULL, -- Ex: 2024.2

--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

--   CONSTRAINT fk_periodos_cursos
--     FOREIGN KEY (id_curso)
--     REFERENCES cursos(id_curso)
--     ON DELETE RESTRICT
--     ON UPDATE CASCADE
-- );

-- CREATE TABLE materias (
--   id_materia INT AUTO_INCREMENT PRIMARY KEY,
--   id_periodo INT NOT NULL,
--   nome VARCHAR(100) NOT NULL,

--   nota_1 DECIMAL(4,2),
--   nota_2 DECIMAL(4,2),
--   media DECIMAL(4,2),

--   status ENUM('cursando', 'aprovado', 'reprovado') DEFAULT 'cursando',

--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

--   CONSTRAINT fk_materias_periodos
--     FOREIGN KEY (id_periodo)
--     REFERENCES periodos(id_periodo)
--     ON DELETE RESTRICT
--     ON UPDATE CASCADE
-- );



