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
const flight_1 = __importDefault(require("../models/flight"));
const getFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flight = yield flight_1.default.findAll({
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
            ok: true,
            flight
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