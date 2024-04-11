import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateProductWithExistCategory {
  async handle(request: Request, response: Response) {
    const { id_category, name, price, bar_code } = request.body;

    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            bar_code,
            name,
            price
          }
        },
        category: {
          connect: {
            id: id_category,
          }
        }
      }
    });

    return response.json(product);
  }
}