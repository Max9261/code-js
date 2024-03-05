function giveTalonsInOrder(patients, orders) {
    let sortedPatients = [];

    orders.forEach(order => {
        const patient = patients.find(patient => patient.id === order);
        if (patient) {
            sortedPatients.push(patient);
        }
    });

    return sortedPatients;
}

// Пример использования функции
const patients = [
    { name: 'Иван', id: 1 },
    { name: 'Мария', id: 2 },
    { name: 'Петр', id: 3 },
    { name: 'Анна', id: 4 }
];

const orders = [3, 1, 4, 2];

const sortedPatients = giveTalonsInOrder(patients, orders);
console.log(sortedPatients);