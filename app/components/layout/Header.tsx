import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href
      ? 'border-b-2 border-white'
      : 'transition duration-medium text-white hover:text-yellow-500';
  };

  return (
    <header className='bg-headerBg px-4 py-4'>
      <div className='flex justify-between items-center'>
        <div className='text-white space-x-4'>
          <div className='flex gap-6'>
            <div className='text-xs font-bold border-solid border-white border-2 p-1'>LOGO</div>
            <Link href='/' className={isActive('/')}>
              NEUE INSPECTION
            </Link>
            <Link href='/kalendar' className={isActive('/kalendar')}>
              LAUFENDE INSPEKTIONEN
            </Link>
            <Link href='/klijenti' className={isActive('/klijenti')}>
              ABGESCHLOSSENE INSPEKTIONEN
            </Link>
          </div>
        </div>
        <div className='flex gap-6'>
          <Link href='/timovi' className={isActive('/timovi')}>
            LUKA POLJAKOVIC
          </Link>
          <div className='flex items-center gap-1'>
            <Link href='/odjava' className={isActive('/odjava')}>
              AUSLOGGEN
            </Link>
            <FaSignOutAlt style={{ color: 'white' }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
