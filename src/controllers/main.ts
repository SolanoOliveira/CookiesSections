import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.render('main/index');
};

const about = (req: Request, res: Response) => {
  res.render('main/about');
};

const ui = (req: Request, res: Response) => {
  res.render('main/ui');
};


const login = (req: Request, res: Response) => {
  res.render('main/login/login');
};


export default { index, about, ui, login};