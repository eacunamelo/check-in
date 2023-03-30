"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const flight_1 = require("../controllers/flight");
const router = (0, express_1.Router)();
router.get('/:id', flight_1.getFlight);
exports.default = router;
//# sourceMappingURL=flight.js.map