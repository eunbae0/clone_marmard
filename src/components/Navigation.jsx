import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: ${props => props.isScrolled ? "fixed" : "relative"};
  background: ${props => props.isScrolled ? "rgba(255, 255, 255, .7)" : "#fff"};
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  height: 100px;
  z-index: 99;
`
const NavLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavLogoImg = styled.img`
  max-height: 32px;
`
const NavRight = styled.div`
  flex: 7;
  `
const LoginBox = styled.ul`
  margin-top: 10px;
  display: flex;
  justify-content: end;
`
const LoginBoxLi = styled.li`

`
const LoginBoxLink = styled(Link)`
  font-size: 12px;
  line-height: 12px;
  margin: 7px 0;
  padding: 0 10px;
  color: #000;
  text-decoration: none;
  border-right: ${props => props.prop === 'myshop' ? null : ' 1px solid #000'};
  `
const DropDownNav = styled.ul`
  display: flex;
  justify-content: end;
  z-index: 999;
  `
const DropDownNavLi = styled.li`
  position:relative;
  padding: 0 17.5px;
  &:hover:before {
    display: ${props => props.noDetail ? "none": null};
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    background-color: #000;
  }
  `
const DropDownNavLink = styled(Link)`
  line-height: 65px;
  font-size:15px;
  letter-spacing:1px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  height: 100%;
  display: block;
  &:hover {
    color:#81d8d0
  }
`
const DropDownDetailNav = styled.ul`
  display: none;
  ${DropDownNavLi}:hover & {
    display: flex
  }
  justify-content: center;
  background: #000;
  position: fixed;
  left: 0;
  padding: 10px 0;
  z-index: 999;
  width: 100%;
`
const DropDownDetailNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`


export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollTop])
  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop)
    console.log(scrollTop)
    if (scrollTop > 2) {
      setIsScrolled(true)
    } else {setIsScrolled(false)}
  }
  return (
    <Nav isScrolled={isScrolled}>
      <NavLeft>
        <NavLogoImg src="http://marmard.com/web/upload/category/logo/cc8aba9f8c6711a2a333b488c31baa62_fU8xIyOVod_3_top.jpg" alt=""/>
      </NavLeft>
      <NavRight>
        <LoginBox>
          <LoginBoxLi>
            <LoginBoxLink to="member/login">LOGIN</LoginBoxLink>
          </LoginBoxLi>
          <LoginBoxLi>
            <LoginBoxLink to="member/join">JOIN</LoginBoxLink>
          </LoginBoxLi>
          <LoginBoxLi>
            <LoginBoxLink to="member/myshop" prop="myshop">MYPAGE</LoginBoxLink>
          </LoginBoxLi>
        </LoginBox>
        <div>
          <DropDownNav>
            <DropDownNavLi>
              <DropDownNavLink to="shopinfo/brandstory">ABOUT</DropDownNavLink>
              <DropDownDetailNav>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="shopinfo/brandstory">BRANDSTORY</DropDownDetailNavLink>
                </DropDownNavLi>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="shopinfo/contact">CONTACT US</DropDownDetailNavLink>
                </DropDownNavLi>
              </DropDownDetailNav>
            </DropDownNavLi>
            <DropDownNavLi>
              <DropDownNavLink to="shopinfo/brandstory">SHOP</DropDownNavLink>
              <DropDownDetailNav>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="product/bodywash">BODYWASH</DropDownDetailNavLink>
                </DropDownNavLi>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="product/bodylotion">BODYLOTION</DropDownDetailNavLink>
                </DropDownNavLi>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="product/bodyspray">BODYSPRAY</DropDownDetailNavLink>
                </DropDownNavLi>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="product/handcream">HANDCREAM</DropDownDetailNavLink>
                </DropDownNavLi>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="product/handwash">HANDWASH</DropDownDetailNavLink>
                </DropDownNavLi>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="product/set">SET</DropDownDetailNavLink>
                </DropDownNavLi>
              </DropDownDetailNav>
            </DropDownNavLi>
            <DropDownNavLi noDetail={true}>
              <DropDownNavLink to="board/review">REVIEW</DropDownNavLink>
            </DropDownNavLi>
            <DropDownNavLi>
              <DropDownNavLink to="board/notice">COMMUNITY</DropDownNavLink>
              <DropDownDetailNav>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="board/notice">NOTICE</DropDownDetailNavLink>
                </DropDownNavLi>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="board/notice">Q&A</DropDownDetailNavLink>
                </DropDownNavLi>
                <DropDownNavLi>
                  <DropDownDetailNavLink to="board/review">REVIEW</DropDownDetailNavLink>
                </DropDownNavLi>
                {/* <DropDownNavLi>
                  <DropDownDetailNavLink to="board/media">MEDIA</DropDownDetailNavLink>
                </DropDownNavLi> */}
              </DropDownDetailNav>
            </DropDownNavLi>
            <DropDownNavLi noDetail={true}>
              <DropDownNavLink to="board/notice" spec="cart">CART</DropDownNavLink>
            </DropDownNavLi>
          </DropDownNav>
        </div>
      </NavRight>
    </Nav>
  )
}
