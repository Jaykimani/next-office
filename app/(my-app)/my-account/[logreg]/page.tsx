
import styles from './account.module.css'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: Promise<{ logreg: string
  }>
}

const page = async({params} : Props) => {


  const {logreg} = await params;



  return (<>
 
    <main className={styles.accountsMain1}>
        <div className={styles.accountLeft}>
        <Link href={'/'}>
                 <Image className={styles.svgLogo1} src="/Component 2.svg" alt="" width={500} height={200} />
        </Link>
         <h1>Your one stop shop for office supplies and office restocking solutions in Nairobi and across Kenya.</h1>
         <div className={styles.accountsBtn}>
          <Link className={styles.accountLink} href={'/my-account/sign-in'} style={{backgroundColor: logreg === 'sign-in' ? '#ffe100' : 'black', color: logreg === 'sign-in' ? 'black' : 'white'}}>
           <div>Sign in</div>
          </Link>
          <Link className={styles.accountLink} href={'/my-account/register'} style={{backgroundColor: logreg === 'register' ? '#ffe100' : 'black', color: logreg === 'register' ? 'black' : 'white'}}>
           <div>Register</div>
          </Link>
         </div>
         {logreg === 'sign-in' ?
         <Link href={'/my-account/register'} style={{color: 'white'}}>
         <p className={styles.confirm}>Wanna join our community? Create account</p>
         </Link>
          :
          <Link href={'/my-account/sign-in'} style={{color: 'white'}}>
         <p className={styles.confirm}>Already a member? Sign in.</p>
         </Link>
         }
         
        </div>
        <div className={styles.accountRight}>
          <h4>Fill in the form below</h4>
         <form className={styles.accountForm} style={{display: logreg === 'register' ? 'block' : 'none'}}>
          <div>
            <p>Full Name</p>
            <input type="text" name="" id="" autoFocus/>
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
         <form className={styles.accountForm2} style={{display: logreg === 'sign-in' ? 'flex' : 'none'}}>
           <div>
            <p>Email Address</p>
            <input type="text" name="" id="" autoFocus/>
          </div>
          <button>Sign In</button>
         </form>
        </div>
    </main>

    <main className={styles.accountsMain2}>
      <Link href={'/'}>
         <div className={styles.svgDiv}>
         <Image className={styles.svgLogo2} src="/Component 2.svg" alt="" width={500} height={200} />
         </div>
        </Link>
        <div className={styles.accountsInset}>
          <div className={styles.accountsBtns}>
           <Link className={styles.accountsLink} href={'/my-account/sign-in'} style={{backgroundColor: logreg === 'sign-in' ? '#ffe100' : '#ffffff6f', color: 'white'}}>
           <div>Sign in</div>
          </Link>
          <Link className={styles.accountsLink} href={'/my-account/register'} style={{backgroundColor: logreg === 'register' ? '#ffe100b7' : '#ffffff6f', color: 'white'}}>
           <div>Register</div>
          </Link>
          </div>
             <h4>Fill in the form below</h4>
         <form className={styles.accountsForm} style={{display: logreg === 'register' ? 'block' : 'none'}}>
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
                    <label  htmlFor="one-time2" className={styles.accountsRadio} style={{height: '65px'}}>
                     <input type="radio" name="shipping-btn" id="one-time2" style={{width: '20px', height: '20px', marginRight: '20px', accentColor: '#ffe100'}}/>
                     <span>One-Time Orders</span>
                    </label>
                    <label  htmlFor="restock2" className={styles.accountsRadio} style={{height: '65px'}}>
                     <input type="radio" name="shipping-btn" id="restock2" style={{width: '20px', height: '20px', marginRight: '20px', accentColor: '#ffe100'}}/>
                     <span>Recurring Restock Services</span>
                    </label>
                    <label  htmlFor="both2" className={styles.accountsRadio} style={{height: '65px'}}>
                     <input type="radio" name="shipping-btn" id="both2" style={{width: '20px', height: '20px', marginRight: '20px', accentColor: '#ffe100'}}/>
                     <span>Both</span>
                    </label>
                    
          </div>
          <button>Register</button>
          <Link href={'/my-account/sign-in'} style={{color: 'white'}}>
         <p className={styles.confirm}>Already a member? Sign in.</p>
         </Link>
         </form>
         <form className={styles.accountsForm2} style={{display: logreg === 'sign-in' ? 'flex' : 'none'}}>
           <div>
            <p>Email Address</p>
            <input type="text" name="" id="" />
          </div>
          <button>Sign In</button>
          <Link href={'/my-account/register'} style={{color: 'white'}}>
         <p className={styles.confirm}>Wanna join our community? Create account</p>
         </Link>
         </form>


        </div>
    </main>
     </>
  )
}

export default page