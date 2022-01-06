import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {Login, Join, MyShop, Home, BrandStory, Contact, Shop, Community, Notice, Review, Order} from "../pages/PagesIndex";

export default function AppRouter() {
  // const productList = [
  //   {
  //     category: "bodywash",
  //     categoryComponent: "BodyWash",
  //   }
  // ]
  return ( 
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="member/login" element={<Login />} />
          <Route path="member/join" element={<Join />} />
          <Route path="member/myshop" element={<MyShop />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shopinfo/brandstory" element={<BrandStory />} />
          <Route path="shopinfo/contact" element={<Contact />} />
          <Route path="product/:productname" element={<Shop/>}>
            {/* <Route index element={<HandCream />} /> */}
            {/* <Route path=":productName" element={<></>} /> */}
            {/* {productList.map(item => (
              <Route path={item.category} element={<item.categoryComponent />}/>
            ))}
            <Route path="bodylotion" element={<BodyLotion />}/>
            <Route path="bodyspary" element={<BodySpray />}/>
            <Route path="handcream" element={<HandCream />}/>
            <Route path="handwash" element={<HandWash />}/>
            <Route path="set" element={<Set />}/> */}
          </Route>
          <Route path="board" element={<Community/>}>
            <Route index element={<Notice />} />
            <Route path="notice" element={<Notice />}/>
            <Route path="review" element={<Review />}/>
          </Route>
          <Route path="order" element={<Order />}/>
          <Route path="order" element={<Order />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};