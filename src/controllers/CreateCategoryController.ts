import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const category = await prismaClient.category.create({
      data: {
        name,
      }
    })

    return response.json(category);
  }
}