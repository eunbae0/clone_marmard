import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../pages/Home";

export default function AppRouter() {
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
          <Route path="product" element={<Shop/>}>
            <Route index element={<HandCream />} />
            <Route path="bodywash" element={<BodyWash />}/>
            <Route path="bodylotion" element={<BodyLotion />}/>
            <Route path="bodyspary" element={<BodySpray />}/>
            <Route path="handcream" element={<HandCream />}/>
            <Route path="handwash" element={<HandWash />}/>
            <Route path="set" element={<Set />}/>
          </Route>
          <Route path="board" element={<Board/>}>
            <Route index element={<Notice />} />
            <Route path="notice" element={<Notice />}/>
            <Route path="review" element={<Review />}/>
          </Route>
          <Route path="order" element={<Order />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};