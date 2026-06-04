import styles from './account.module.css'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <main className={styles.accountsMain}>
        <div className={styles.accountLeft}>
        <Link href={'/'}>
                 <Image className={styles.svgLogo1} src="/Component 2.svg" alt="" width={500} height={200} />
        </Link>
         <h1>Your one stop shop for office supplies and office restocking solutions in Nairobi and across Kenya.</h1>
         <div className={styles.accountsBtn}>
          <div style={{backgroundColor: '#ffe100', color: 'black'}}>Sign in</div>
          <div>Register</div>
         </div>
         <p className={styles.confirm}>New customer? create account</p>
        </div>
        <div className={styles.accountRight}>
          <h4>Fill in the form below</h4>
         <form className={styles.accountForm}>
          <div>
            <p>Full Name</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p>Phone Number</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p>Email Address</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p>Business Name</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p>Interested In:</p>
                    <label  htmlFor="one-time" className={styles.accountRadio} style={{height: '65px'}}>
                     <input type="radio" name="shipping-btn" id="one-time" style={{width: '20px', height: '20px', marginRight: '20px', accentColor: '#ffe100'}}/>
                     <span>One-Time Orders</span>
                    </label>
                    <label  htmlFor="restock" className={styles.accountRadio} style={{height: '65px'}}>
                     <input type="radio" name="shipping-btn" id="restock" style={{width: '20px', height: '20px', marginRight: '20px', accentColor: '#ffe100'}}/>
                     <span>Recurring Restock Services</span>
                    </label>
                    <label  htmlFor="both" className={styles.accountRadio} style={{height: '65px'}}>
                     <input type="radio" name="shipping-btn" id="both" style={{width: '20px', height: '20px', marginRight: '20px', accentColor: '#ffe100'}}/>
                     <span>Both</span>
                    </label>
                    
          </div>
          <button>Register</button>
         </form>
        </div>
    </main>
  )
}

export default page