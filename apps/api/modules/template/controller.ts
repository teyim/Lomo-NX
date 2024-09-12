import { NextFunction, Response } from 'express';
import { getTemplateByIdService, getTemplatesService } from './service';

// get all templates controller
export const getTemplatesController = async (
  req,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const templates = await getTemplatesService();

    res.status(200).json(templates);
  } catch (error) {
    next(error);
  }
};

export const getTemplateByIdController = async (
  req,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  try {
    const template = await getTemplateByIdService(id);
    res.status(200).json(template);
  } catch (error) {
    next(error);
  }
};
