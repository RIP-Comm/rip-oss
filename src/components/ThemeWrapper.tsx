import { useEffect, useState } from 'react';
import { ThemeContext, Themes } from '../class/theme';

const ThemeWrapper = (props: any) => {
  const [theme, setTheme] = useState<string>(Themes.light);

  function changeTheme(theme: string) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case Themes.light:
        document.body.classList.add('white-mode');
        document.body.classList.remove('dark-mode');
        break;
      case Themes.dark:
      default:
        document.body.classList.add('dark-mode');
        document.body.classList.remove('white-mode');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeWrapper;