import styles from './dashboard.module.css'
import Image from 'next/image'
import { MdHome } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import SearchInput from '@/components/searchInput/search';
import Charts from '@/components/piechart/piechart';
import Link from 'next/link';



const page = async() => {
    
  const emoji2 = "\u{1F44B}";
  return (<>
       <main className={styles.overallMain}>
        <div className={styles.dashboardMenu}>
          <div className={styles.svgImage}>
            <Image className={styles.svgLogo1} src="/Component 2.svg" alt="" width={100} height={100} />
          </div>
          <div className={styles.dashboardMenuLinks}>
            <div className={styles.menuLink} id={styles.active}>
              <MdHome style={{color: '#ffe100', width: '35px', height: '35px'}}/>
              <p>Dashboard</p>
            </div>
            <div className={styles.menuLink}>
              <MdShoppingCart style={{color: '#ffe100', width: '35px', height: '35px'}}/>
              <p>Shop</p>
            </div>
            <div className={styles.menuLink}>
              <FaBoxOpen style={{color: '#ffe100', width: '30px', height: '30px'}}/>
              <p>My Orders</p>
            </div>
            <div className={styles.menuLink}>
              <FaRedo style={{color: '#ffe100', width: '30px', height: '30px'}}/>
              <p>Restock Requests</p>
            </div>
            <div className={styles.menuLink}>
              <FaUserAlt style={{color: '#ffe100', width: '30px', height: '30px'}}/>
              <p>Account</p>
            </div>
          </div>
        </div>
        <div className={styles.dashboardContent}>
         <div className={styles.contentHeader}>
          <SearchInput />
          <div className={styles.contentHeaderInset}>
            <div className={styles.inset1}>
             <MdOutlineShoppingCart style={{width: '30px', height: '30px'}}/>
             <span className={styles.insetSpan}>0</span>
            </div>
            <div className={styles.inset1}>
             <FaRegBell style={{width: '28px', height: '28px'}}/>
             <span className={styles.insetSpan}>0</span>
            </div>
            <div className={styles.inset2}>
              <div className={styles.inset2Img}>
               <FaCircleUser style={{width: '50px', height: '50px'}}/>
              </div>
              <div className={styles.inset2Info}>
               <h4>Joseph Kimani</h4>
               <p>OfficeFlow Kenya</p>
              </div>
              <div className={styles.insetActive} style={{backgroundColor: "rgba(0, 255, 0, 0.5)"}}>
                <GoDotFill style={{marginRight: '7px'}}/>
               <p style={{fontSize: '14px'}}>Active</p>         
              </div>
            </div>
            
          </div>
         </div>
         <h1 className={styles.greeting}>Hello, Joseph {emoji2}</h1>
         <p className={styles.greetingP}>Here's what's happening in your OfficeFlow Account.</p>
         <div className={styles.contentStats}>
           <div className={styles.stat}>
            <div className={styles.statImage}>
             <FaWallet  style={{width: '30px', height: '30px', color: '#ffe100'}}/>
            </div>
            <div className={styles.statInfo}>
             <h4 style={{marginBottom: '12px'}}>Monthly Spending</h4>
             <h2 style={{marginBottom: '20px'}}>48,970/=</h2>
             <p style={{color: 'gray'}}>12% up from last month</p>
            </div>

           </div>
            <div className={styles.stat}>
            <div className={styles.statImage} style={{backgroundColor: '#ffe100'}}>
             <FaClipboardList style={{width: '30px', height: '30px', color: 'black'}}/>
            </div>
            <div className={styles.statInfo}>
             <h4 style={{marginBottom: '12px'}}>Pending Orders</h4>
             <h2 style={{marginBottom: '20px'}}>3</h2>
             <p style={{color: 'gray', display: 'flex', alignItems: 'center'}}>view orders <MdArrowRightAlt style={{marginLeft: "10px"}}/></p>
            </div>

           </div>
            <div className={styles.stat}>
            <div className={styles.statImage}>
             <FaShippingFast style={{width: '30px', height: '30px', color: '#ffe100'}}/>
            </div>
            <div className={styles.statInfo}>
             <h4 style={{marginBottom: '12px'}}>Scheduled Deliveries</h4>
             <h2 style={{marginBottom: '20px'}}>2</h2>
             <p style={{color: 'gray', display: 'flex', alignItems: 'center'}}>view schedule <MdArrowRightAlt style={{marginLeft: "10px"}}/></p>
            </div>

           </div>
         </div>
         <div className={styles.quickLinks}>
          <div style={{backgroundColor: "#ffe100"}}>
            <p style={{display: 'flex', alignItems: 'center'}}>Browse Products <MdArrowRightAlt style={{marginLeft: "10px"}}/></p>
          </div>
          <div style={{backgroundColor: "#000000"}}>
            <p style={{color: "white", display: 'flex', alignItems: 'center'}}>Previously Ordered Products <MdArrowRightAlt style={{marginLeft: "10px"}}/></p>
          </div>
          <div style={{backgroundColor: "#ffe100"}}>
            <p style={{display: 'flex', alignItems: 'center'}}>Request a Quote <MdArrowRightAlt style={{marginLeft: "10px"}}/></p>
          </div>
         </div>
         <div className={styles.recentStats}>
          <div className={styles.recentOrders}>
            <div className={styles.recentOrdersHeader}>
              <h4>Recent Orders</h4>
              <p style={{display: 'flex', alignItems: 'center'}}>view all orders <MdArrowRightAlt style={{marginLeft: "10px"}} /></p>
            </div>
            <table className={styles.recentsTable}>
              <thead>
              <tr>
                <th>Order No.</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td>Processing...</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
               <tr>
                <td>#Ord- 9867564534423</td>
                <td>8-9-2026</td>
                <td>7 Items</td>
                <td>13,099/=</td>
                <td style={{color: "green"}}>Delivered</td>
                <td><div className={styles.action}>View</div></td>
              </tr>
             </tbody>
            </table>
          </div>
          <div className={styles.pieChartDiv}>
            <h4>Spending by Category</h4>
            <div className={styles.pieChart}>
              <Charts />
            </div>
           <div className={styles.piechartInfo}>
            <p><GoDotFill style={{color: 'red', marginRight: "15px", width: '25px', height: '25px'}}/>Stationery & Writing Supplies <span>35%</span></p>
            <p><GoDotFill style={{color: 'green', marginRight: "15px", width: '25px', height: '25px'}}/> Printing & Paper Supplies <span>35%</span></p>
            <p><GoDotFill style={{color: 'blue', marginRight: "15px", width: '25px', height: '25px'}}/> Printer Consumables <span>35%</span></p>
            <p><GoDotFill style={{color: '#ffe100', marginRight: "15px", width: '25px', height: '25px'}}/> IT & Tech Consumables <span>35%</span></p>
            <p><GoDotFill style={{color: 'black', marginRight: "15px", width: '25px', height: '25px'}}/> Pantry & Hydration Supplies <span>35%</span></p>
            <p><GoDotFill style={{color: 'gray', marginRight: "15px", width: '25px', height: '25px'}}/> Cleaning & Hygiene Supplies <span>35%</span></p>
           </div>
          </div>
         </div>
         <div className={styles.reorderItemsDiv}>
         <h4>Order Again</h4>
         <p>Quickly reorder supplies your business uses regularly.</p>
         <div className={styles.reorderInset}>
           <div className={styles.reorderItem}>
           <Link href={'/'} style={{textDecoration: 'none'}}>
                    <div className={styles.itemImg}>
                      <Image className={styles.itemImage} src='/BAStationery.jpg' alt="" width={200} height={200} />
                    </div>
                    </Link>
                    <div className={styles.itemInfo}>
                      <h4>High Quality Pens</h4>
                      <h6><span>KSh</span> 3000/=</h6>
                      <div className={styles.itemInfoCounter}>
                       <div><FaMinus style={{width: "20px", color: "black"}}/></div>
                       <div>0</div>
                       <div><MdAdd style={{width: "25px", height: "25px", color: "black"}}/></div>
                      </div>
                      <div className={styles.variants}>
                          <div className={styles.variant}
                           style={{backgroundColor: "black", color: "white"}}>
                            <p>White</p>
                         </div>
                          <div className={styles.variant}
                           style={{backgroundColor: "black", color: "white"}}>
                            <p>White</p>
                         </div>
                          <div className={styles.variant}
                           style={{backgroundColor: "black", color: "white"}}>
                            <p>White</p>
                         </div>
                        
                      </div>
                      <div className={styles.itemBtns}>
                        <div className={styles.itemCartDiv} >
                          <div className={styles.itemCartDivInset}>
                           <MdOutlineAddShoppingCart className={styles.itemCartImg2}/>
                          <p>Add to Cart</p>
                          </div>
                          
                        </div> 
                        <div className={styles.itemWhatsappDiv}>
                         <a
      href={`https://wa.me/254704610605?text='Helloo'`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappCta}
      title="Chat with us on WhatsApp"
    >
                          <IoLogoWhatsapp className={styles.itemWhatsappImg}/>
                          </a>
                        </div>
                      </div>
                      
                    </div>
           </div>
         </div>
         </div>
        </div>
       </main>
  </>
    
  )
}

export default page