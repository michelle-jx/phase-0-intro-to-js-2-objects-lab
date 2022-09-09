const employee = {}

const employees = 
{
    name: "Kevin",
    streetAddress: "7 Pine",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfEmployee = {...employee};
    copyOfEmployee[key] = value
    return copyOfEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployee = {...employee};
    delete copyOfEmployee[key]
    return copyOfEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}