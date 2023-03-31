"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlight = void 0;
const sequelize_1 = require("sequelize");
const flight_1 = __importDefault(require("../models/flight"));
const boarding_pass_1 = __importDefault(require("../models/boarding_pass"));
const passenger_1 = __importDefault(require("../models/passenger"));
const seat_1 = __importDefault(require("../models/seat"));
const getFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let data = [];
        let passengers = [];
        const boarding_pass = yield boarding_pass_1.default.findAll({ attributes: ['passenger_id', 'purchase_id', 'seat_type_id', 'boarding_pass_id'], where: { seat_id: null, flight_id: id }, group: 'purchase_id' });
        const occupiedSeats = yield boarding_pass_1.default.findAll({ where: { seat_id: { [sequelize_1.Op.not]: null } } });
        const occupiedSeatsIds = occupiedSeats.map((item) => item.seat_id);
        let freeSeats = yield seat_1.default.findAll({ where: { seat_id: { [sequelize_1.Op.notIn]: occupiedSeatsIds } } });
        //agrupar por purchase
        if (boarding_pass.length > 0) {
            for (const iterator of boarding_pass) {
                //sin asiento
                const passenger = yield passenger_1.default.findAll({ where: { passenger_id: iterator.passenger_id } });
                if (passenger[0].age < 18) {
                    //Necesita estar al lado de un mayor
                    const partners = yield boarding_pass_1.default.findAll({ where: { purchase_id: iterator.purchase_id } });
                    if (partners) {
                        const flight = yield flight_1.default.findAll({ where: { flight_id: id }, limit: 1 });
                        var seats = freeSeats.filter((item) => item.seat_type_id = iterator.seat_type_id && item.airplane_id == flight[0].airplane_id).slice(0, partners.length);
                        seats.forEach((element) => {
                            if (element.seat_id) {
                                freeSeats = freeSeats.filter((item) => item.seat_id != element.seat_id);
                            }
                        });
                        const passengersId = partners.map((item) => item.passenger_id);
                        const passengersModel = yield passenger_1.default.findAll({ where: { passenger_id: { [sequelize_1.Op.in]: passengersId } } });
                        var i = 0;
                        passengersModel.forEach((element) => {
                            var _a;
                            let passenger = {
                                passengerId: element.passenger_id,
                                dni: element.dni,
                                name: element.name,
                                age: element.age,
                                country: element.country,
                                boardingPassId: iterator.boarding_pass_id,
                                seatTypeId: iterator.seat_type_id,
                                seatId: (_a = seats[i]) === null || _a === void 0 ? void 0 : _a.seat_id,
                            };
                            passengers.push(passenger);
                            i++;
                        });
                        data = [{
                                flightId: flight[0].flight_id,
                                takeoffDateTime: flight[0].takeoff_date_time,
                                takeoffAirport: flight[0].takeoff_airport,
                                landingDateTime: flight[0].landing_date_time,
                                landingAirport: flight[0].landing_airport,
                                airplaneId: flight[0].airplane_id,
                                passengers: [
                                    passengers
                                ]
                            }
                        ];
                    }
                }
                else {
                    const partners = yield boarding_pass_1.default.findAll({ where: { purchase_id: iterator.purchase_id } });
                    if (partners) {
                        const flight = yield flight_1.default.findAll({ where: { flight_id: id }, limit: 1 });
                        var seats = freeSeats.filter((item) => item.seat_type_id = iterator.seat_type_id && item.airplane_id == flight[0].airplane_id).slice(0, partners.length);
                        seats.forEach((element) => {
                            if (element.seat_id) {
                                freeSeats = freeSeats.filter((item) => item.seat_id != element.seat_id);
                            }
                        });
                        const passengersId = partners.map((item) => item.passenger_id);
                        const passengersModel = yield passenger_1.default.findAll({ where: { passenger_id: { [sequelize_1.Op.in]: passengersId } } });
                        var i = 0;
                        passengersModel.forEach((element) => {
                            var _a;
                            let passenger = {
                                passengerId: element.passenger_id,
                                dni: element.dni,
                                name: element.name,
                                age: element.age,
                                country: element.country,
                                boardingPassId: iterator.boarding_pass_id,
                                seatTypeId: iterator.seat_type_id,
                                seatId: (_a = seats[i]) === null || _a === void 0 ? void 0 : _a.seat_id,
                            };
                            passengers.push(passenger);
                            i++;
                        });
                        data = [{
                                flightId: flight[0].flight_id,
                                takeoffDateTime: flight[0].takeoff_date_time,
                                takeoffAirport: flight[0].takeoff_airport,
                                landingDateTime: flight[0].landing_date_time,
                                landingAirport: flight[0].landing_airport,
                                airplaneId: flight[0].airplane_id,
                                passengers: [
                                    passengers
                                ]
                            }
                        ];
                    }
                    else {
                        const flight = yield flight_1.default.findAll({ where: { flight_id: id }, limit: 1 });
                        var seats = freeSeats.filter((item) => item.seat_type_id = iterator.seat_type_id && item.airplane_id == flight[0].airplane_id).slice(0, partners.length);
                        seats.forEach((element) => {
                            if (element.seat_id) {
                                freeSeats = freeSeats.filter((item) => item.seat_id != element.seat_id);
                            }
                        });
                        const passengersId = passenger.map((item) => item.passenger_id);
                        const passengersModel = yield passenger_1.default.findAll({ where: { passenger_id: { [sequelize_1.Op.in]: passengersId } } });
                        var i = 0;
                        passengersModel.forEach((element) => {
                            var _a;
                            let passenger = {
                                passengerId: element.passenger_id,
                                dni: element.dni,
                                name: element.name,
                                age: element.age,
                                country: element.country,
                                boardingPassId: iterator.boarding_pass_id,
                                seatTypeId: iterator.seat_type_id,
                                seatId: (_a = seats[i]) === null || _a === void 0 ? void 0 : _a.seat_id,
                            };
                            passengers.push(passenger);
                            i++;
                        });
                        data = [{
                                flightId: flight[0].flight_id,
                                takeoffDateTime: flight[0].takeoff_date_time,
                                takeoffAirport: flight[0].takeoff_airport,
                                landingDateTime: flight[0].landing_date_time,
                                landingAirport: flight[0].landing_airport,
                                airplaneId: flight[0].airplane_id,
                                passengers: [
                                    passengers
                                ]
                            }
                        ];
                    }
                }
            }
        }
        else {
            return res.status(404).json({
                code: 404,
                msg: 'Vuelo no encontrado'
            });
        }
        res.status(200).json({
            code: 200,
            data
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getFlight = getFlight;
//# sourceMappingURL=flight.js.map