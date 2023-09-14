"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controllers_1 = require("./book.controllers");
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.post('/create-book', (0, auth_1.default)(client_1.UserRole.admin), (0, validateRequest_1.default)(book_validation_1.BookValidators.createBookZodSchema), book_controllers_1.BookControllers.createBook);
router.get('/', (0, auth_1.default)(client_1.UserRole.admin), book_controllers_1.BookControllers.getAllBooks);
// router.get(
//   '/:categoryId',
//   auth(UserRole.admin),
//   BookControllers.getBooksByCategoryId
// );
router.get('/:categoryId/category', (0, auth_1.default)(client_1.UserRole.admin), book_controllers_1.BookControllers.getBooksByCategoryId);
router.get('/:id', (0, auth_1.default)(client_1.UserRole.admin), book_controllers_1.BookControllers.getBook);
router.patch('/:id', (0, auth_1.default)(client_1.UserRole.admin), book_controllers_1.BookControllers.updateBook);
router.delete('/:id', (0, auth_1.default)(client_1.UserRole.admin), book_controllers_1.BookControllers.deleteBook);
exports.BookRoutes = router;
