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

        const boarding_pass = await Boarding_Pass.findAll({ where : {boarding_pass_id : 1}});
        const flight = await Flight.findAll({ where : {airplane_id: boarding_pass }});
        const occupiedSeats = await Boarding_Pass.findAll({ where : {seat_id: {[Op.not]: null}} });
        const occupiedSeatsIds = occupiedSeats.map((item: any) => item.seat_id);
        const freeSeats = await Seat.findAll({ where : { seat_id : {[Op.notIn]: occupiedSeatsIds}} });

        //agrupar por purchase
        if (!boarding_pass.seat_id) {
            
                        
        } else {

        }
       
        
        res.status(200).json({
            ok:true,
            freeSeats
        });

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        });
    }
}

