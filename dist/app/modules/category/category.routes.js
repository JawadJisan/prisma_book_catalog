"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_controllers_1 = require("./category.controllers");
const category_validation_1 = require("./category.validation");
const router = express_1.default.Router();
router.post('/create-category', (0, auth_1.default)(client_1.UserRole.admin), (0, validateRequest_1.default)(category_validation_1.CategoryValidators.createCategoryZodSchema), category_controllers_1.CategoryControllers.createCategory);
router.get('/', (0, auth_1.default)(client_1.UserRole.admin), category_controllers_1.CategoryControllers.getAllCategories);
router.get('/:id', (0, auth_1.default)(client_1.UserRole.admin), category_controllers_1.CategoryControllers.getCategory);
router.patch('/:id', (0, auth_1.default)(client_1.UserRole.admin), (0, validateRequest_1.default)(category_validation_1.CategoryValidators.updateCategoryZodSchema), category_controllers_1.CategoryControllers.updateCategory);
router.delete('/:id', (0, auth_1.default)(client_1.UserRole.admin), category_controllers_1.CategoryControllers.deleteCategory);
exports.CategoryRoutes = router;
