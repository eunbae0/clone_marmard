import { Routes, Route } from "react-router-dom";

const BodyWash = () => {
  return (
    <>bw</>
    //fetch bodywash element and use map function!
  )
}

export default function Shop() {
  return (
    <>
    Shop
      <Routes>
        <Route path="bodywash" element={<BodyWash />}></Route>
        <Route path="*">404 Not Found</Route>
      </Routes>
    </>
  )
}