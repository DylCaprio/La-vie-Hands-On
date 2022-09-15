const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "paciente_id",
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: "paciente_id",
});

Atendimentos.belongsTo(Psicologos, {
    foreignKey: "psicologo_id",
});

Psicologos.hasMany(Atendimentos, {
    foreignKey: "psicologo_id",
});

module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos
};