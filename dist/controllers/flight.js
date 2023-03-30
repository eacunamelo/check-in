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
const seat_1 = __importDefault(require("../models/seat"));
const getFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const boarding_pass = yield boarding_pass_1.default.findAll({ where: { boarding_pass_id: 1 } });
        const flight = yield flight_1.default.findAll({ where: { airplane_id: boarding_pass } });
        const occupiedSeats = yield boarding_pass_1.default.findAll({ where: { seat_id: { [sequelize_1.Op.not]: null } } });
        const occupiedSeatsIds = occupiedSeats.map((item) => item.seat_id);
        const freeSeats = yield seat_1.default.findAll({ where: { seat_id: { [sequelize_1.Op.notIn]: occupiedSeatsIds } } });
        //agrupar por purchase
        if (!boarding_pass.seat_id) {
        }
        else {
        }
        res.status(200).json({
            ok: true,
            freeSeats
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