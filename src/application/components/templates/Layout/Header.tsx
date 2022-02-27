import Link from 'next/link';
import { Button, useMediaQuery } from '@mui/material';
import styled, { useTheme } from 'styled-components';
import LogoSVG from '$application/assets/icons/logo.svg';
import WaffleSVG from '$application/assets/icons/waffle.svg';
import { useAtom } from 'jotai';
import { showMenuAtom } from '../store';
import PocketSVG from '$application/assets/icons/pocket.svg';
import PaperSVG from '$application/assets/icons/paper.svg';

const WhitePaperButton = styled((props) => (
  <Button {...props} variant="outlined" startIcon={<PaperSVG />} />
))`
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
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: 20px 0;
    width: 100%;
    padding: 8px 14px;
    height: 44px;
  }
`;

const InviteButton = styled((props) => (
  <Button {...props} variant="contained" startIcon={<PocketSVG />} />
))`
  background: #b53385;
  border-radius: 6px;
  &:hover {
    background: #b53385;
  }
  font-weight: 600;
  text-transform: capitalize;
  font-size: 14px;
  line-height: 20px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: 20px 0;
    width: 100%;
    padding: 8px 14px;
    height: 44px;
  }
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
  const theme = useTheme();
  const [showMenu, setShowMenu] = useAtom(showMenuAtom);

  const isInLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const menuHandler = () => setShowMenu(!showMenu);
  return (
    <Wrapper className={className}>
      <LogoIcon />
      {!isInLargeScreen && <WaffleIcon onClick={menuHandler} />}
      {((!isInLargeScreen && showMenu) || isInLargeScreen) && (
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
      )}
    </Wrapper>
  );
};

const WaffleIcon = styled(WaffleSVG)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  box-sizing: content-box;
  padding: 16px 20px 16px 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    width: 100%;
    background: black;
    box-shadow: inset 0px 1px 0px #4f517c;
  }
`;

const Item = styled.div`
  color: #fff;
  margin-right: 24px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: 20px 0;
  }
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
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: unset;
    width: unset;
    min-width: 300px;
    height: 60px;
    margin: 56px 16px 0 16px;
    background: #010214;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    flex-wrap: wrap;
  }
`;

export default Header;
