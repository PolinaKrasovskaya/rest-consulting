import image from '../../images/logo2.png';
import { Navigation } from 'components/Navigation/Navigation';
import { Authorisation } from 'components/Authorisation/Authorisation';
import {
  HeaderBox,
  LogoBox,
  HeaderContacts,
  Adress,
  Email,
  Link,
  Phone,
  Logo,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <LogoBox>
        <HeaderContacts>
          <Adress
            href="https://goo.gl/maps/d2nQSNGrm9WTZPLW6"
            target="blank"
            rel="noopener noreferer"
          >
            Navan, Co Meath, Ireland
          </Adress>
          <Email href="mailto:info@example.com">rest@rest.com</Email>
        </HeaderContacts>
        <Link to="/">
          <Logo src={image} alt="Logo"></Logo>
        </Link>
        <HeaderContacts>
          <Phone href="tel:+353877592347">+353877592347</Phone>
          {/* <Search /> */}
          <Authorisation />
        </HeaderContacts>
      </LogoBox>
      <Navigation />
    </HeaderBox>
  );
};
