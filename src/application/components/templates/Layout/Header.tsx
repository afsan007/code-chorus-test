import styled from 'styled-components';

// import Link from 'next/link';
import LogoSVG from '$application/assets/icons/logo.svg';
import Link from 'next/link';
import { Button } from '@mui/material';
import React from 'react';
// import { useRouter } from 'next/dist/client/router';

const WhitePaperButton = styled((props) => <Button {...props} variant="outlined" />)`
  color: #37dbf3;
  border: 1px solid #37dbf3;
  &:hover {
    border: 1px solid #37dbf3;
  }
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-right: 24px;
`;

const InviteButton = styled((props) => <Button {...props} variant="contained" />)`
  background: #b53385;
  border-radius: 6px;
  &:hover {
    background: #b53385;
  }
  font-weight: 600;
  text-transform: capitalize;
  font-size: 14px;
  line-height: 20px;
`;

interface MenuItem {
  href: string;
  label: string;
  renderer?: (props: any) => React.ReactElement;
}

const menuItems: MenuItem[] = [
  { href: '/', label: 'Home' },
  { href: '/purpose', label: 'The Purpose' },
  { href: '/ecosystem', label: 'The Ecosystem' },
  { href: '/about', label: 'About' },
  { href: '/whitepaper', label: 'Read Whitepaper', renderer: WhitePaperButton },
  { href: '/invite', label: 'Request Invite', renderer: InviteButton },
];

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  // const router = useRouter();

  return (
    <Wrapper className={className}>
      <LogoIcon />
      <Menu>
        {menuItems.map((item, idx) => {
          const RendererCmp = item.renderer ?? Item;
          return (
            <Link href={item.href} key={idx}>
              <RendererCmp>{item.label}</RendererCmp>
            </Link>
          );
        })}
      </Menu>
    </Wrapper>
  );
};

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  color: #fff;
  margin-right: 24px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
`;

const LogoIcon = styled(LogoSVG)`
  width: 194px;
  height: 30.1px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 53px 60px 0 60px;
  width: 1200px;
  margin: 0 auto;
  ${({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      padding: 'unset',
      width: ' 382px',
      background: 'red',
      backdropFilter: 'blur(10px)',
      borderRadius: '8px',
    },
  })}
`;

export default Header;
