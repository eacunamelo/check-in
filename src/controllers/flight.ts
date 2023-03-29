import { Request, Response } from 'express';
import { Op, where } from 'sequelize';
import Flight from '../models/flight';

export const getFlight = async( req: Request, res: Response ) => {

    try {
        const flight = await Flight.findAll({
                                            //     include:[
                                            //     {
                                            //         model: Contenedor
                                            //     },
                                            //     {
                                            //         model:Planta
                                            //     }
                                            // ]//,
                                            // where: {
                                            //     Estado: true
                                            // }
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

