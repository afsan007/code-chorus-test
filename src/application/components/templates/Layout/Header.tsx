import styled, { css } from 'styled-components';
import Link from 'next/link';
// import WaffleSVG from '$application/assets/icons/waffle.svg';
import { useRouter } from 'next/dist/client/router';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const router = useRouter();

  return (
    <Wrapper className={className}>
      <Menu>
        {menuItems.map((menuItem) => (
          <Link href={menuItem.href} key={menuItem.label}>
            <MenuItem $isActive={router.pathname === menuItem.href}>
              {menuItem.label}
            </MenuItem>
          </Link>
        ))}
      </Menu>
      {/* <WaffleIcon /> */}
    </Wrapper>
  );
};

// const WaffleIcon = styled(WaffleSVG)`
//   width: 32px;
//   height: 30px;
// `;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: center;
`;
interface MenuItemProps {
  $isActive: boolean;
}
const MenuItem = styled.div<MenuItemProps>`
  height: 51px;
  background: ${({ $isActive }) => ($isActive ? '#a07ca6' : 'inherit')};
  border-radius: 4px;
  font-family: Ramabhadra;
  color: #fff;
  font-size: 19px;
  line-height: 105.67%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 15px;
  cursor: pointer;
  ${({ $isActive }) =>
    $isActive &&
    css`
      :first-child {
        margin-left: 20px;
      }
    `}
  margin-right: 56px;
`;

const Menu = styled.div`
  background: #40424a;
  height: 73px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Header;
