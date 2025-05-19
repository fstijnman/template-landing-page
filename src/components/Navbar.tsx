import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f0f0f0',
      borderBottom: '1px solid #ddd'
    }}>
      <div>
        {/* Replace with your actual logo. You can use next/image or a simple <img> tag */}
        {/* If using next/image, make sure your image is in the `public` folder */}
        {/* Example with a text logo: */}
        <Link href="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}>
          MyLogo
        </Link>
        {/* Example with next/image (assuming logo.png is in public/images/):
        <Link href="/">
          <Image src="/images/logo.png" alt="MyCompany Logo" width={100} height={40} />
        </Link>
        */}
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
        <li>
          <Link href="/" style={{ textDecoration: 'none', color: '#333' }}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" style={{ textDecoration: 'none', color: '#333' }}>
            About
          </Link>
        </li>
        {/* Add more navigation links here if needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
