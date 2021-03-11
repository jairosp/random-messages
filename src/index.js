const messages = [
    "Jairo",
    "Ana",
    "Nicolas",
    "Isabel",
    "Arturo",
    "Fernando",
    "Rodrigo",
    "Daniel",
    "Marta",
    "Pepe",
    "Diego",
    "Juan",
    "Laura"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
