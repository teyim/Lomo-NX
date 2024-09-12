import { PrismaClient } from '@prisma/client';
import { Template } from '@prisma/client'; // Assuming 'Template' is a model in your Prisma schema

const prisma = new PrismaClient();

// get templates
export const fetchTemplates = async (): Promise<Template[] | []> => {
  try {
    // Fetch all templates from the database
    const templates = await prisma.template.findMany();
    return templates;
  } catch (error) {
    console.error('Error fetching templates from database:', error);
    throw new Error('Error fetching templates from the database');
  }
};

// get template by id
export const fetchTemplateById = async (
  id: string
): Promise<Template | null> => {
  try {
    // Fetch the template from the database
    const template = await prisma.template.findUnique({
      where: { id },
      include: { assets: true },
    });
    return template;
  } catch (error) {
    console.error('Error fetching template from database:', error);
    throw new Error('Error fetching template from the database');
  }
};
