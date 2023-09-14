"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const order_controllers_1 = require("./order.controllers");
const order_validation_1 = require("./order.validation");
const router = express_1.default.Router();
router.post('/create-order', (0, auth_1.default)(client_1.UserRole.customer), (0, validateRequest_1.default)(order_validation_1.OrderValidators.createOrderZodSchema), order_controllers_1.OrderControllers.createOrder);
router.get('/', (0, auth_1.default)(client_1.UserRole.customer, client_1.UserRole.admin), order_controllers_1.OrderControllers.getAllOrders);
router.get('/:orderId', (0, auth_1.default)(client_1.UserRole.admin, client_1.UserRole.customer), order_controllers_1.OrderControllers.getOrder);
exports.OrderRoutes = router;
