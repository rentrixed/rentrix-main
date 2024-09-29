import Image from 'next/image';
import { AppConfig } from '@/utils/AppConfig';
import logoImg from '../../public/favicon-192x192.png';

const Logo = () => (
  <div className="flex items-center text-xl font-semibold">
    <Image src={logoImg} alt="Logo" width={70} height={70} />
    {AppConfig.name}
  </div>
);

export { Logo };
