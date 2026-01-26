import ShopNav from "@/components/shop-nav/shopNav";
import Footer from "@/components/footer/footer";

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div style={{background: "black"}}>
      <ShopNav />
       {children}
      <Footer /> 
    </div>
  )
}

export default Layout;