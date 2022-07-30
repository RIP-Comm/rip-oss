import { createContext } from 'react';

export const Themes: Record<string, string> = {
  dark: 'light-mode',
  light: 'dark-mode'
};

export const ThemeContext = createContext({
  theme: Themes.dark,
  changeTheme: (theme: string) => {
    return;
  }
});

export enum ThemeImage {
  DARK = 'https://avatars.githubusercontent.com/u/109904319?s=200&v=4',
  LIGHT = 'https://i0.wp.com/retireinprogress.com/wp-content/uploads/2016/06/cropped-MrRip513x513.png'
}