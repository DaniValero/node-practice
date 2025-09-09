import { Request, Response } from 'express';

//El controller se encarga de sacar info de la DB y devolver la info

export const getUsers = (req: Request, res: Response) => {
  res.send('User list');
};

export const getUserById = (req: Request, res: Response) => {
  res.send(`User details for ID: ${req.params.id}`);
};

export const createUser = (req: Request, res: Response) => {
  res.send('Create a new user');
};

export const updateUser = (req: Request, res: Response) => {
  console.log(req.body);
  res.send(`Update user with ID: ${req.params.id}`);
};

export const deleteUser = (req: Request, res: Response) => {
  res.send(`Delete user with ID: ${req.params.id}`);
};