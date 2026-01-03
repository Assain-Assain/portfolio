import { I18nProvider } from '../i18n/i18n';
import { ThemeProvider } from '../theme/useTheme';

export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}