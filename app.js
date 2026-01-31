require("dotenv").config();

const materiasRepository = require("./src/repositories/materias.repository");

(async () => {
    try {
        console.log("Buscando Materias ...");

        // const materias = await materiasRepository.findAll();
        // console.log(materias);

        // const materia = await materiasRepository.findById(1);
        // console.log(materia);

        // const newMateria = await materiasRepository.create({
        //     id_periodo: 1,
        //     nome: "introdução a programação de computadores",
        //     nota_1: 10,
        //     nota_2: 10,
        //     media: 10,
        //     status: "aprovado",
        // });

        // console.log(newMateria);

        // const updateMateria = await materiasRepository.update(6, {
        //     nota_1: 10,
        //     nota_2: 10,
        //     status: "aprovado",
        // });

        // console.log(updateMateria);
    } catch (err) {
        console.log("Erro ao buscar materias \n", err);
    }
})();
