"use client";
import { useRef, use } from 'react';
import styles from './account.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

interface PageProps {
  params: Promise<{ logreg: string }>;
}

const page = ({ params }: PageProps) => {
   

  const resolvedParams = use(params);
  const option = resolvedParams.logreg
  

   const eyePassRef = useRef<HTMLInputElement>(null);
   const eyePassConfirm = useRef<HTMLInputElement>(null);
   const signinpass = useRef<HTMLInputElement>(null);
    const router = useRouter();


  const togglePassword = () => {
    if (eyePassRef.current) {
      // 3. Change the input type safely
      const currentType = eyePassRef.current.type;
      eyePassRef.current.type = currentType === 'password' ? 'text' : 'password';
    }
  };

   const togglePasswordConfirm = () => {
    if (eyePassConfirm.current) {
      // 3. Change the input type safely
      const currentType = eyePassConfirm.current.type;
      eyePassConfirm.current.type = currentType === 'password' ? 'text' : 'password';
    }
  };

  const toggleSigninPassword = () => {
    if (signinpass.current) {
      // 3. Change the input type safely
      const currentType = signinpass.current.type;
      signinpass.current.type = currentType === 'password' ? 'text' : 'password';
    }
  };


  return (<>
 
    <main className={styles.accountsMain1}>
        <div className={styles.accountLeft}>
          <div className={styles.goBack} onClick={() => router.back()}>
           <IoIosArrowRoundBack style={{width: '30px', height: '30px'}}/>
          </div>
        <Link href={'/'}>
                 <Image className={styles.svgLogo1} src="/Component 2.svg" alt="" width={500} height={200} />
        </Link>
         <h1>Your one stop shop for office supplies and office restocking solutions in Nairobi and across Kenya.</h1>
         <div className={styles.accountsBtn}>
          <Link className={styles.accountLink} href={'/my-account/sign-in'} style={{backgroundColor: option === 'sign-in' ? '#ffe100' : 'black', color: option === 'sign-in' ? 'black' : 'white'}}>
           <div>Sign in</div>
          </Link>
          <Link className={styles.accountLink} href={'/my-account/register'} style={{backgroundColor: option === 'register' ? '#ffe100' : 'black', color: option === 'register' ? 'black' : 'white'}}>
           <div>Register</div>
          </Link>
         </div>
         {option === 'sign-in' ?
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
         <form className={styles.accountForm} style={{display: option === 'register' ? 'block' : 'none'}}>
          <div>
            <p>Business/Company Name <span>*</span></p>
            <input type="text" name="" id="" autoFocus/>
          </div>
          <div>
            <p>Business Type <span>*</span></p>
           <select name="pets" id="pet-select" className={styles.optionSelector}>
            <option value="">--Please choose an option--</option>
           <option value="sme">SME</option>
           <option value="corporate">Corporate</option>
           <option value="startup">Startup</option>
           <option value="ngo">NGO</option>
           <option value="schoool-universities">School/University</option>
           <option value="law-firm">Law firm</option>
           <option value="healthcare-clinic">Healthcare/Clinic</option>
           <option value="government-institution">Government Institution</option>
           <option value="coworking-space">Coworking Space</option>
           <option value="other">Other...</option>
           </select>
          </div>
          <div>
            <p>Business/Company Location <span>*</span></p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p>Contact Person/Name <span>*</span></p>
            <input type="text" name="" id="" />
          </div>
            <div>
            <p>Position/Role <span>*</span></p>
            <select name="pets" id="pet-select" className={styles.optionSelector}>
            <option value="">--Please choose an option--</option>
           <option value="procument">Procument</option>
           <option value="office-manager">Office Manager</option>
           <option value="administration">Administration</option>
           <option value="hr">HR</option>
           <option value="operations">Operations</option>
           <option value="business-owner">Business Owner</option>
           <option value="other">Other...</option>
           </select>
          </div>
          <div>
            <p>Phone/Whatsapp Number <span>*</span></p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p>Email Address <span>*</span></p>
            <input type="text" name="" id="" />
          </div>
           <div style={{marginTop: '20px', marginBottom: '30px'}}>
            <p style={{marginBottom: '20px', marginTop: '30px'}}>What is your preferred contact method?</p>
              <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Email</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Phone Call</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Direct Messaging</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Whatsapp</span>
                </label>
              </div>
                    
          </div>
         
          <div style={{marginTop: '20px'}}>
            <p style={{marginBottom: '20px', marginTop: '30px'}}>What do you regularly purchase for your office?</p>
              <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Stationery & Writing Supplies</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Printing & Paper Supplies</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Printer & Ink Supplies</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>IT & Tech Consumables</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Pantry & Hydration Supplies</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Cleaning & Hygiene Supplies</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Other...</span>
                </label>
              </div>
                    
          </div>
           <div style={{marginTop: '20px', marginBottom: '30px'}}>
            <p style={{marginBottom: '20px', marginTop: '30px'}}>How often do you purchase office supplies?</p>
              <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Weekly</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Biweekly</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Monthly</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>Occassionaly</span>
                </label>
              </div>
               <div className={styles.accountSelect}>
               <label className={styles.customCheckbox}>
                <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                 <span>As needed</span>
                </label>
              </div>
                    
          </div>
          <div>
            <p style={{marginBottom: '20px', marginTop: '30px'}}>Are you interested in regular office restocking?</p>
                <div className={styles.customCheckbox}>
                  <input type="radio" name="paymaent-btn" id="cash" style={{width: '15px', height: '15px', marginRight: '20px', accentColor: 'red'}}/>
                <label htmlFor="cash" className={styles.radioLabel}>Yes</label>
                </div>
                <div className={styles.customCheckbox}>
                  <input type="radio" name="paymaent-btn" id="mpesa" style={{width: '15px', height: '15px', marginRight: '20px', accentColor: 'red'}}/>
                <label htmlFor="mpesa" className={styles.radioLabel}>No</label>
                </div>
                <div className={styles.customCheckbox}>
                  <input type="radio" name="paymaent-btn" id="airtel" style={{width: '15px', height: '15px', marginRight: '20px',  accentColor: 'red'}}/>
                <label htmlFor="airtel" className={styles.radioLabel}>I'd like to learn more</label>
                </div>
                 
                  
               </div>
               <div style={{marginTop: '30px'}}>
            <p>Set Account Password(minimum 6 characters) <span>*</span></p>
            <div className={styles.passDiv}>
             <input ref={eyePassRef} type="password" name="" id="eyepass" />
             <FaEye id='eyeicon' className={styles.eye} onClick={togglePassword}/>
            </div>
            
          </div>
          <div style={{marginTop: '30px'}}>
            <p>Confirm password<span>*</span></p>
           <div className={styles.passDiv}>
             <input ref={eyePassConfirm} type="password" name="" id="eyepass" />
             <FaEye id='eyeicon' className={styles.eye} onClick={togglePasswordConfirm}/>
            </div>
          </div>
          <button>Register</button>
         </form>
         <form className={styles.accountForm2} style={{display: option === 'sign-in' ? 'flex' : 'none'}}>
           <div>
            <p>Email Address *</p>
            <input type="text" name="" id="" autoFocus/>
          </div>
            <div style={{marginTop: '20px'}}>
            <p>Enter password <span>*</span></p>
          <div className={styles.passDiv}>
             <input ref={signinpass} type="password" name="" id="eyepass" />
             <FaEye id='eyeicon' className={styles.eye} onClick={toggleSigninPassword}/>
            </div>
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
           <Link className={styles.accountsLink} href={'/my-account/sign-in'} style={{backgroundColor: option === 'sign-in' ? '#ffe100' : '#ffffff6f', color: 'white'}}>
           <div>Sign in</div>
          </Link>
          <Link className={styles.accountsLink} href={'/my-account/register'} style={{backgroundColor: option === 'register' ? '#ffe100b7' : '#ffffff6f', color: 'white'}}>
           <div>Register</div>
          </Link>
          </div>
             <h4>Fill in the form below</h4>
         <form className={styles.accountsForm} style={{display: option === 'register' ? 'block' : 'none'}}>
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
         <form className={styles.accountsForm2} style={{display: option === 'sign-in' ? 'flex' : 'none'}}>
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