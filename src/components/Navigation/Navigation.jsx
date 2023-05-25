
import { ReactComponent as Ellipse } from 'images/ellipse.svg';
import {
  Container,
  Link,
  DropDownContainer,
  DropDownContent,
  DropDownLink,
  DropDownLinkBox,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <Container>
      <DropDownContainer>
        <Link to="/kitchen">School</Link>
        <DropDownContent>
          <DropDownLinkBox>
            <DropDownLink to="kitchen/kitchen1">Kitchen</DropDownLink>
          </DropDownLinkBox>
          <DropDownLinkBox>
            <DropDownLink to="kitchen/kitchen2">Bar</DropDownLink>
          </DropDownLinkBox>
          <DropDownLinkBox>
            <DropDownLink to="kitchen/kitchen3">General</DropDownLink>
          </DropDownLinkBox>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        <Link to="/bar">Services</Link>
        <DropDownContent>
          <DropDownLinkBox>
            <DropDownLink to="bar/bar1">Private consultation</DropDownLink>
          </DropDownLinkBox>
          <DropDownLinkBox>
            <DropDownLink to="bar/bar2">Training</DropDownLink>
          </DropDownLinkBox>
          <DropDownLinkBox>
            <DropDownLink to="bar/bar3">Homeparty</DropDownLink>
          </DropDownLinkBox>
          <DropDownLinkBox>
            <DropDownLink to="bar/bar3">Order cocktail bar</DropDownLink>
          </DropDownLinkBox>
          <DropDownLinkBox>
            <DropDownLink to="bar/bar3">Catering</DropDownLink>
          </DropDownLinkBox>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        <Link to="/general">Recepies</Link>
        <DropDownContent>
          <DropDownLinkBox>
            <DropDownLink to="general/general1">Food</DropDownLink>
          </DropDownLinkBox>

          <DropDownLinkBox>
            <DropDownLink to="general/general2">Drinks</DropDownLink>
          </DropDownLinkBox>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        <Link to="/general">Shop</Link>
        <DropDownContent>
          <DropDownLinkBox>
            <DropDownLink to="general/general1">General1</DropDownLink>
          </DropDownLinkBox>

          <DropDownLinkBox>
            <DropDownLink to="general/general2">General2</DropDownLink>
          </DropDownLinkBox>

          <DropDownLinkBox>
            <DropDownLink to="general/general3">General3</DropDownLink>
          </DropDownLinkBox>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        <Link to="/general">About us</Link>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        <Link to="/general">Contact us</Link>
      </DropDownContainer>
    </Container>
  );
};
