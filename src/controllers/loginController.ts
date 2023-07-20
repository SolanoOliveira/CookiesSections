import { Request, Response } from 'express';

export const validatelogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === 'user' && password === '12345') {
    res.cookie('authenticated', 'true');
    res.redirect('/departamentos');
  } else {
    res.redirect('/login');
  }
};

export const getLogin = async (req: Request, res: Response) => {
  res.render('main/login/login', { csrf: req.csrfToken() });
};


export const logout = async (req: Request, res: Response) => {
  res.clearCookie('authenticated');
  res.redirect('/login');
};
