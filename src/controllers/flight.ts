import { Request, Response } from 'express';
import { Op, where } from 'sequelize';
import Airplane from '../models/airplane';
import Flight from '../models/flight';
import Boarding_Pass from '../models/boarding_pass';
import Passenger from '../models/passenger';
import Purchase from '../models/purchase';
import Seat_Type from '../models/seat_type';
import Seat from '../models/seat';

export const getFlight = async( req: Request, res: Response ) => {

    const { id }  = req.params;

    try {
        const flight = await Flight.findAll({
                                            include:[
                                                {
                                                    model: Airplane
                                                },
                                                {
                                                    model: Boarding_Pass,
                                                    include: [
                                                        {
                                                            model: Passenger
                                                        },
                                                        {
                                                            model: Purchase
                                                        },
                                                        {
                                                            model: Seat_Type
                                                        },
                                                        {
                                                            model: Seat
                                                        },
                                                    ]
                                                },
                                            ],
                                            where: {
                                                flight_id: id
                                            }
                                        });
        
        res.status(200).json({
            ok:true,
            flight
        });

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        });
    }
}

