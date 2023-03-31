import { Request, Response } from 'express';
import { Op, where } from 'sequelize';
import Airplane from '../models/airplane';
import Flight from '../models/flight';
import Boarding_Pass from '../models/boarding_pass';
import Passenger from '../models/passenger';
import Purchase from '../models/purchase';
import Seat_Type from '../models/seat_type';
import Seat from '../models/seat';

export const getFlight = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        let data: any[] = [];
        let passengers: any[] = [];
        const boarding_pass = await Boarding_Pass.findAll({attributes: ['passenger_id', 'purchase_id', 'seat_type_id', 'boarding_pass_id'], where: { seat_id: null, flight_id: id  },  group: 'purchase_id' });
        const occupiedSeats = await Boarding_Pass.findAll({ where: { seat_id: { [Op.not]: null } } });
        const occupiedSeatsIds = occupiedSeats.map((item: any) => item.seat_id);
        let freeSeats = await Seat.findAll({ where: { seat_id: { [Op.notIn]: occupiedSeatsIds } } });

        //agrupar por purchase
        if (boarding_pass.length > 0) {
            for (const iterator of boarding_pass) {
            
                //sin asiento
                const passenger = await Passenger.findAll({ where: { passenger_id: iterator.passenger_id } });
    
                if (passenger[0].age < 18) {
                    //Necesita estar al lado de un mayor
                    const partners = await Boarding_Pass.findAll({ where: { purchase_id: iterator.purchase_id } });
    
                    if (partners) {
                        const flight = await Flight.findAll({ where: { flight_id: id }, limit: 1 });
                        var seats = freeSeats.filter((item: any) => item.seat_type_id = iterator.seat_type_id && item.airplane_id == flight[0].airplane_id).slice(0, partners.length);
                        seats.forEach((element: any) => {
                            if (element.seat_id) {
                                freeSeats = freeSeats.filter((item: any) => item.seat_id != element.seat_id);
                            }
                        });
    
                        const passengersId = partners.map((item: any) => item.passenger_id);
                        const passengersModel = await Passenger.findAll({ where: { passenger_id: { [Op.in]: passengersId } } })
                        var i = 0;
                        passengersModel.forEach((element: any) => {
                            let passenger = {
                                passengerId: element.passenger_id,
                                dni: element.dni,
                                name: element.name,
                                age: element.age,
                                country: element.country,
                                boardingPassId: iterator.boarding_pass_id,
                                seatTypeId: iterator.seat_type_id,
                                seatId: seats[i]?.seat_id,
                            }
    
                            passengers.push(passenger)
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
                        ]
                    }
                } else {
                    const partners = await Boarding_Pass.findAll({ where: { purchase_id: iterator.purchase_id } });
                    if (partners) {
                        const flight = await Flight.findAll({ where: { flight_id: id }, limit: 1 });
                        var seats = freeSeats.filter((item: any) => item.seat_type_id = iterator.seat_type_id && item.airplane_id == flight[0].airplane_id).slice(0, partners.length);
                        seats.forEach((element: any) => {
                            if (element.seat_id) {
                                freeSeats = freeSeats.filter((item: any) => item.seat_id != element.seat_id);
                            }
                        });
    
                        const passengersId = partners.map((item: any) => item.passenger_id);
                        const passengersModel = await Passenger.findAll({ where: { passenger_id: { [Op.in]: passengersId } } })
                        var i = 0;
                        passengersModel.forEach((element: any) => {
                            let passenger = {
                                passengerId: element.passenger_id,
                                dni: element.dni,
                                name: element.name,
                                age: element.age,
                                country: element.country,
                                boardingPassId: iterator.boarding_pass_id,
                                seatTypeId: iterator.seat_type_id,
                                seatId: seats[i]?.seat_id,
                            }
    
                            passengers.push(passenger)
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
                        ]
    
                    } else {
                        const flight = await Flight.findAll({ where: { flight_id: id }, limit: 1 });
                        var seats = freeSeats.filter((item: any) => item.seat_type_id = iterator.seat_type_id && item.airplane_id == flight[0].airplane_id).slice(0, partners.length);
                        seats.forEach((element: any) => {
                            if (element.seat_id) {
                                freeSeats = freeSeats.filter((item: any) => item.seat_id != element.seat_id);
                            }
                        });
    
                        const passengersId = passenger.map((item: any) => item.passenger_id);
                        const passengersModel = await Passenger.findAll({ where: { passenger_id: { [Op.in]: passengersId } } })
                        var i = 0;
                        passengersModel.forEach((element: any) => {
                            let passenger = {
                                passengerId: element.passenger_id,
                                dni: element.dni,
                                name: element.name,
                                age: element.age,
                                country: element.country,
                                boardingPassId: iterator.boarding_pass_id,
                                seatTypeId: iterator.seat_type_id,
                                seatId: seats[i]?.seat_id,
                            }
    
                            passengers.push(passenger)
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
                        ]
                    }
                }
            }
        } else {
            return res.status(404).json({
                code: 404,
                msg: 'Vuelo no encontrado'
            });
        }
        
        res.status(200).json({
            code: 200,
            data
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

