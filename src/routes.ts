import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductControllers";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory";
import { FindProductController } from "./controllers/FindProductController";
import { FindCategoryController } from "./controllers/FindCategoryController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const CreateProductCategory = new CreateProductCategoryController();
const CreateProductWithExist = new CreateProductWithExistCategory();

const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/categoryProduct", CreateProductCategory.handle);
router.post("/productWithCategory", CreateProductWithExist.handle);
router.get("/product/:id", findProduct.handle)
router.get("/category/:id", findCategory.handle);

export { router }