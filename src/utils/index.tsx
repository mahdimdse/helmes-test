import cookie from 'cookiejs';

export const readCookie = (cName: string) => {
  return cookie(cName);
};

export const setCookie = (cName: string, cValue: string, exdays: number) => {
    cookie.set(cName, cValue, exdays);
};

export const removeCookie = (cName: string) => {
    cookie.remove(cName);
};
