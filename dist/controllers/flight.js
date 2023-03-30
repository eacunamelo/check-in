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
const airplane_1 = __importDefault(require("../models/airplane"));
const flight_1 = __importDefault(require("../models/flight"));
const boarding_pass_1 = __importDefault(require("../models/boarding_pass"));
const passenger_1 = __importDefault(require("../models/passenger"));
const purchase_1 = __importDefault(require("../models/purchase"));
const seat_type_1 = __importDefault(require("../models/seat_type"));
const seat_1 = __importDefault(require("../models/seat"));
const getFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const flight = yield flight_1.default.findAll({
            include: [
                {
                    model: airplane_1.default
                },
                {
                    model: boarding_pass_1.default,
                    include: [
                        {
                            model: passenger_1.default
                        },
                        {
                            model: purchase_1.default
                        },
                        {
                            model: seat_type_1.default
                        },
                        {
                            model: seat_1.default
                        },
                    ]
                },
            ],
            where: {
                flight_id: id
            }
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