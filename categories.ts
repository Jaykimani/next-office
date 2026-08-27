export const Categories  = [
    {
    id: 1,
    title: { id: 'Office Supply Products', url: '/shop/office-supplies' },
    links: [ { id: 'Stationery & Writing Supplies', url: '/shop/office-supplies/stationery-writing-supplies' },
              { id: 'Printing & Paper Supplies', url: '/shop/office-supplies/printing-paper-supplies' }, 
              { id: 'Printer & Ink Supplies', url: '/shop/office-supplies/printer-ink-supplies' }, 
              { id: 'Pantry & Hydration Supplies', url: '/shop/office-pantry-hydration' },
              { id: 'Cleaning & Hygiene Supplies', url: '/shop/office-cleaning-hygiene' },
              { id: 'IT & Tech Supplies', url: '/shop/office-electronics' },]
    },
   

];


export const Subcategory = [
              { id: 'Stationery & Writing Supplies', url: '/shop/office-supplies/stationery-writing-supplies' },
              { id: 'Printing & Paper Supplies', url: '/shop/office-supplies/printing-paper-supplies' }, 
              { id: 'Printer & Ink Supplies', url: '/shop/office-supplies/printer-ink-supplies' }, 
              { id: 'Pantry & Hydration Supplies', url: '/shop/office-pantry-hydration' },
              { id: 'Cleaning & Hygiene Supplies', url: '/shop/office-cleaning-hygiene' },
              { id: 'IT & Tech Supplies', url: '/shop/office-electronics' },
         
]
export const shopCategory = [
  {
    name: 'Office Supplies',
    url: 'office-supplies',
 
  },
  {
    name: 'Office Pantry & Hydration Supplies',
    url: 'office-pantry-hydration'
  },
  {
    name: 'Office Cleaning & Hygiene Supplies',
    url: 'office-cleaning-hygiene'
  },
  
]



export const shopPopularity = ['Most popular', 'Most rated'];

export const shopPrice = ['Low to High', 'High to Low']

//  <div className={styles.shopListHeader}>
//                 <div className={styles.listCateg} onClick={handleCategSort}>
//                  <p>Browse Categories</p>
//                  <MdKeyboardArrowDown style={{transform: categSort ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: '20px'}}/>
//                 </div>
//                 <div className={styles.listCateg} onClick={handleSort}>
//                  <p>Shop by:</p>
//                  <MdKeyboardArrowDown style={{transform: categSort ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: '20px'}}/>
//                 </div>
//             </div>