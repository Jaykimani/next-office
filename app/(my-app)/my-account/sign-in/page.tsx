"use client"

import styles from "./login.module.css"
import { FormEvent, useRef, use, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { setTimeout } from "timers";


const page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

    const signinpass = useRef<HTMLInputElement>(null);
    const signinpass2 = useRef<HTMLInputElement>(null);

      const toggleSigninPassword = () => {
    if (signinpass.current) {
      
      // 3. Change the input type safely
      const currentType = signinpass.current.type;
      console.log(currentType);
      
      signinpass.current.type = currentType === 'password' ? 'text' : 'password';
    }
  };
   const toggleSigninPassword2 = () => {
    if (signinpass2.current) {
      
      // 3. Change the input type safely
      const currentType = signinpass2.current.type;
    
      signinpass2.current.type = currentType === 'password' ? 'text' : 'password';
    }
  };

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
     event.preventDefault()

    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/business-accounts/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(
          data?.errors?.[0]?.message ||
            data?.message ||
            'Unable to log in. Please check your email and password.',
        )

        return
      }
      setSuccess('Signed-in successfully, you will be directed to your dashboard shortly.')
      setTimeout(() => {
         router.push('/my-account/dashboard')
      router.refresh()
      }, 3000);
    } catch (error) {
      console.error('Business account login error:', error)

      setError(
        'Something went wrong while logging in. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

   

  return (
    <>
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
                  <Link className={styles.accountLink} href={'/my-account/sign-in'} style={{backgroundColor: '#ffe100', color: 'black'}}>
                   <div>Sign in</div>
                  </Link>
                  <Link className={styles.accountLink} href={'/my-account/register'} style={{backgroundColor: 'black', color: 'white'}}>
                   <div>Register</div>
                  </Link>
                 </div>
                
                 <Link href={'/my-account/register'} style={{color: 'white'}}>
                 <p className={styles.confirm}>Wanna join our community? Create account</p>
                 </Link>
            
                 
                </div>
                <div className={styles.accountRight}>
                  <h4>Fill in the form below</h4>
         <form className={styles.accountForm2} style={{display: 'flex'}} onSubmit={handleSubmit}>
           <div>
            <p>Email Address *</p>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                autoFocus
              />
          </div>
            <div style={{marginTop: '20px'}}>
            <p>Enter password <span>*</span></p>
          <div className={styles.passDiv}>
              <input
                id="eyepass"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                ref={signinpass2}
              />
             <FaEye id='eyeicon' className={styles.eye} onClick={toggleSigninPassword2}/>
            </div>
            </div>
            <p className={styles.caution} style={{display: error ?  'block' : 'none'}}>{error}</p>
           <p style={{display: success ?  'block' : 'none', color: "green", fontSize: '17px', fontWeight: '500'}}>{success}</p>
           <button
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
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
           <Link className={styles.accountsLink} href={'/my-account/sign-in'} style={{backgroundColor: '#ffe100', color: 'white'}}>
           <div>Sign in</div>
          </Link>
          <Link className={styles.accountsLink} href={'/my-account/register'} style={{backgroundColor: '#ffffff6f', color: 'white'}}>
           <div>Register</div>
          </Link>
          </div>
             <h4>Fill in the form below</h4>
         <form className={styles.accountForm2} style={{display: 'flex'}} onSubmit={handleSubmit}>
           <div>
            <p>Email Address *</p>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                autoFocus
              />
          </div>
            <div style={{marginTop: '20px'}}>
            <p>Enter password <span>*</span></p>
          <div className={styles.passDiv}>
              <input
                id="eyepass"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                ref={signinpass}
              />
             <FaEye id='eyeicon' className={styles.eye} onClick={toggleSigninPassword}/>
            </div>
            </div>
            <p className={styles.caution} style={{display: error ?  'block' : 'none'}}>{error}</p>
            <p style={{display: success ?  'block' : 'none', color: "green", fontSize: '17px', fontWeight: '500'}}>{success}</p>
           <button
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
         </form>


        </div>
    </main>
    </>
    
  )
}

export default page