import { Request, Response } from 'express';
export const getAllProjects = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: 'ok', data: [] });
    } catch (error) {
        res.status(500).json({ message: 'error', error });
    }
};