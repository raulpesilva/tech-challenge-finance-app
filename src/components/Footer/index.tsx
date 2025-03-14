import InstagramIcon from '@/assets/icons/instagram-icon.svg';
import WhatsappIcon from '@/assets/icons/whatsapp-icon.svg';
import YouTubeIcon from '@/assets/icons/youtube-icon.svg';
import { Typography } from '@/components/shared/Typography';
import Link from 'next/link';
import { LogoType } from '../LogoType';
import styles from './styles.module.scss';

interface ExternalLinkProps {
  href: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, ariaLabel, children }: ExternalLinkProps) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' aria-label={ariaLabel}>
      {children}
    </a>
  );
};

const services = [
  { link: '/', text: 'Conta corrente' },
  { link: '/', text: 'Conta PJ' },
  { link: '/', text: 'Cartão de crédito' },
];

const contacts = [
  { link: 'tel:080000425008', text: '0800 004 250 08' },
  { link: 'mailto:meajuda@bytebank.com.br', text: 'meajuda@bytebank.com.br' },
  {
    link: 'mailto:ouvidoria@bytebank.com.br',
    text: 'ouvidoria@bytebank.com.br',
  },
];

const socialMedia = [
  { link: 'https://www.instagram.com/', icon: InstagramIcon, ariaLabel: 'Instagram' },
  { link: 'https://www.whatsapp.com/', icon: WhatsappIcon, ariaLabel: 'WhatsApp' },
  { link: 'https://www.youtube.com/', icon: YouTubeIcon, ariaLabel: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography variant='heading3' size='base' color='secondary'>
            Serviços
          </Typography>
          {services.map((service, i) => (
            <Link key={`service-${i}`} href={service.link}>
              {service.text}
            </Link>
          ))}
        </div>

        <div className={styles.content}>
          <Typography variant='heading3' size='base' color='secondary'>
            Contato
          </Typography>
          {contacts.map((contact, i) => (
            <ExternalLink key={`contact-${i}`} href={contact.link}>
              {contact.text}
            </ExternalLink>
          ))}
        </div>

        <div className={styles.content}>
          <Typography variant='heading3' size='base' color='secondary'>
            Desenvolvido por Alura
          </Typography>
          <LogoType />
          <div className={styles.socialMediaWrapper}>
            {socialMedia.map((media, i) => (
              <ExternalLink key={`media-${i}`} href={media.link} ariaLabel={media.ariaLabel}>
                <media.icon />
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
