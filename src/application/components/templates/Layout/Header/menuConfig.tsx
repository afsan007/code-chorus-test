import { Button } from '@mui/material';
import PocketSVG from '$application/assets/icons/pocket.svg';
import PaperSVG from '$application/assets/icons/paper.svg';
import styled from 'styled-components';

const WhitePaperButton = styled((props) => (
  <Button
    {...props}
    variant="outlined"
    startIcon={!props.isInLargeScreen && <PaperSVG />}
  />
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
  <Button
    {...props}
    variant="contained"
    startIcon={!props.isInLargeScreen && <PocketSVG />}
  />
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
export interface MenuItemRendererProps {
  selected: boolean;
  isInLargeScreen: boolean;
}
interface MenuItem {
  href: string;
  label: string;
  renderer?: (props: MenuItemRendererProps) => React.ReactElement;
}

export const menuItems: MenuItem[] = [
  { href: '/', label: 'Home' },
  { href: '/purpose', label: 'The Purpose' },
  { href: '/ecosystem', label: 'The Ecosystem' },
  { href: '/about', label: 'About' },
  { href: '/whitepaper', label: 'Read Whitepaper', renderer: WhitePaperButton },
  { href: '/invite', label: 'Request Invite', renderer: InviteButton },
];
