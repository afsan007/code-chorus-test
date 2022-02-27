import { createRef } from 'react';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
import styled, { useTheme, css } from 'styled-components';
import LogoSVG from '$application/assets/icons/logo.svg';
import WaffleSVG from '$application/assets/icons/waffle.svg';
import { useAtom } from 'jotai';
import { showMenuAtom } from '../store';
import { useClickOutside } from '$utils/useClickOutSide';
import { MenuItemRendererProps, menuItems } from './Header/menuConfig';
import { useRouter } from 'next/router';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const theme = useTheme();
  const router = useRouter();
  const containerRef = createRef<HTMLDivElement>();
  const [showMenu, setShowMenu] = useAtom(showMenuAtom);
  const isInLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };
  useClickOutside(containerRef, () => setShowMenu(false));

  return (
    <Wrapper className={className} ref={containerRef}>
      <LogoIcon />
      {!isInLargeScreen && <WaffleIcon onClick={menuHandler} />}
      {((!isInLargeScreen && showMenu) || isInLargeScreen) && (
        <Menu>
          {menuItems.map((item, idx) => {
            const RendererCmp = item.renderer ?? Item;
            return (
              <Link href={item.href} key={idx}>
                <RendererCmp
                  isInLargeScreen={isInLargeScreen}
                  selected={router.pathname === item.href}
                >
                  {item.label}
                </RendererCmp>
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
  padding: 16px 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    width: 100%;
    box-shadow: inset 0px 1px 0px #4f517c;
  }
`;

const Item = styled.div<MenuItemRendererProps>`
  color: #fff;
  margin-right: 24px;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  font-size: 14px;
  ${({ isInLargeScreen, selected }) =>
    selected &&
    !isInLargeScreen &&
    css`
      :after {
        content: '';
        width: 6px;
        position: absolute;
        height: 6px;
        background-color: #d9339c;
        border-radius: 100%;
        bottom: -13px;
        left: 50%;
      }
    `}

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
    margin: 56px 16px 0 16px;
    padding: 0 20px;
    background: #010214;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    flex-wrap: wrap;
  }
`;

export default Header;
