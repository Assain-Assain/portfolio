import { useI18n } from '../i18n/i18n';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
    </footer>
  );
}