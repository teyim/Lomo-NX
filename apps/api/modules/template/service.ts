import { Template } from '@prisma/client';
import { fetchTemplateById, fetchTemplates } from './data-access';

// Service function that only processes business logic and returns data
export const getTemplatesService = async (): Promise<Template[] | []> => {
  try {
    const templates = await fetchTemplates();
    return templates;
  } catch (error) {
    // Optionally, you could log the error or throw it to be handled by the controller
    throw new Error('Error processing templates in service layer');
  }
};

export const getTemplateByIdService = async (
  templateId: string
): Promise<Template | null> => {
  try {
    const template = await fetchTemplateById(templateId);
    return template;
  } catch (error) {
    throw new Error('Error processing templates in service layer');
  }
};
