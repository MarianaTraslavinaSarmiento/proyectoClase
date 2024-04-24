
import{
    getAllCodeAndCityOffices,
    getAllOfficesFromSpainCityAndMovil,} from "./modules/offices.js"

import {
    getAllEmployeesWithBossAndCodeSeven,
    getAllInformationBoss,
    getAllNotSalesRepresentative
}from "./modules/employees.js"

import {
    getAllClientsFromSpain
}from "./modules/clients.js"

import {
    statusRequests,
    getAllClientsMadePayment2008
}from "./modules/requests.js"

// console.log(await getAllOfficesFromSpainCityAndMovil());
// console.log(await getAllCodeAndCityOffices())
// console.log(await getAllEmployeesWithBossAndCodeSeven());

// console.log(await getAllClientsFromSpain())
// console.log(await statusRequests())
console.log(await getAllClientsMadePayment2008())