import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class FindProductController {
  async handle(request: Request, response: Response) {
    const { id  } = request.params;

    const product = await prismaClient.product.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: true,
      }
    });

    return response.json(product);
  }
}