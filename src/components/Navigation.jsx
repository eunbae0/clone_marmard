import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: ${props => props.isScrolled ? "fixed" : "relative"};
  background: ${props => props.isScrolled ? "rgba(255, 255, 255, .7)" : "#fff"};
  width: 100%;
  height: ${props => props.isScrolled ? "65px" : "91px"};
`
const NavDiv = styled.div`
  width: 1280px; /* 반응형 > 줄어들면 1024px로 변경 */
  margin: 0 auto;
  display: flex;
  z-index: 99;
  transition: all 300ms ease-out;
`
const NavLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: start; /* 반응형 > 줄어들면 center로 변경 */
`
const NavLogoImg = styled.img`
  max-height: 32px;
`
const NavLogoImgLink = styled(Link)``
const NavRight = styled.div`
  flex: 7;
`
const LoginBox = styled.ul`
  margin-top: 10px;
  display: ${props => props.isScrolled ? "none" : "flex"};
  justify-content: end;
`
const LoginBoxLi = styled.li`

`
const LoginBoxLink = styled(Link)`
  display: block;
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
  padding-left: 17.5px;
  padding-right: ${props => props.isOrder ? "0" : "17.5px"};
  &:hover:before {
    display: ${props => props.noDetail ? "none": null};
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    border: 7px solid transparent;
    border-top: 0;
    border-bottom: 7px solid #000;
  }
  `
const DropDownNavLink = styled(Link)`
  line-height: 65px;
  font-size:15px;
  letter-spacing:1px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  height: 100%;
  display: block;
  &:hover {
    color:#81d8d0
  }
  transition-duration: 300ms;
  transition-delay: 0ms;
`
const DropDownNavOrderSpan = styled.span`
  color: #fff;
  background: #424242;
  padding: 0 10px;
  margin-left: 10px;
`
const DropDownDetailNav = styled.ul`
  display: none;
  ${DropDownNavLi}:hover & {
    display: flex
  }
  align-items: center;
  justify-content: center;
  background: #000;
  position: fixed;
  left: 0;
  padding: 10px 0;
  z-index: 999;
  width: 100%;
  height: 20px;
`
const DropDownDetailNavLi = styled.li`
  padding: 0 17px;
`
const DropDownDetailNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`


export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  // const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])
  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 0) {
      setIsScrolled(true)
    } else {setIsScrolled(false)}
  }
  return (
    <Nav isScrolled={isScrolled}>
    <NavDiv>
      <NavLeft>
        <NavLogoImgLink to="/">
          <NavLogoImg src="http://marmard.com/web/upload/category/logo/cc8aba9f8c6711a2a333b488c31baa62_fU8xIyOVod_3_top.jpg" alt=""/>
        </NavLogoImgLink>
      </NavLeft>
      <NavRight>
        <LoginBox isScrolled={isScrolled}>
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
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="shopinfo/brandstory">BRANDSTORY</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="shopinfo/contact">CONTACT US</DropDownDetailNavLink>
                </DropDownDetailNavLi>
              </DropDownDetailNav>
            </DropDownNavLi>
            <DropDownNavLi>
              <DropDownNavLink to="shopinfo/brandstory">SHOP</DropDownNavLink>
              <DropDownDetailNav>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="product/bodywash">BODYWASH</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="product/bodylotion">BODYLOTION</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="product/bodyspray">BODYSPRAY</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="product/handcream">HANDCREAM</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="product/handwash">HANDWASH</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="product/set">SET</DropDownDetailNavLink>
                </DropDownDetailNavLi>
              </DropDownDetailNav>
            </DropDownNavLi>
            <DropDownNavLi noDetail={true}>
              <DropDownNavLink to="board/review">REVIEW</DropDownNavLink>
            </DropDownNavLi>
            <DropDownNavLi>
              <DropDownNavLink to="board/notice">COMMUNITY</DropDownNavLink>
              <DropDownDetailNav>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="board/notice">NOTICE</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="board/notice">Q&A</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                <DropDownDetailNavLi>
                  <DropDownDetailNavLink to="board/review">REVIEW</DropDownDetailNavLink>
                </DropDownDetailNavLi>
                {/* <DropDownNavLi>
                  <DropDownDetailNavLink to="board/media">MEDIA</DropDownDetailNavLink>
                </DropDownNavLi> */}
              </DropDownDetailNav>
            </DropDownNavLi>
            <DropDownNavLi noDetail={true} isOrder={true}>
              <DropDownNavLink to="order">
                CART
                <DropDownNavOrderSpan>0</DropDownNavOrderSpan>
              </DropDownNavLink>
            </DropDownNavLi>
          </DropDownNav>
        </div>
      </NavRight>
    </NavDiv>
    </Nav>
  )
}
