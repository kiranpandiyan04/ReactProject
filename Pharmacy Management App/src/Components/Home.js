import { Link } from 'react-router-dom';
import '../Assets/Hom.css';
const Home=()=>{
    return(
        <>
        <div className='bodyhome'>
        <div className='navbar'>
            <p style={{fontSize:40,paddingTop:20,paddingLeft:30}}><b>GetMeds</b></p>
            <p className='pro' style={{fontSize:30}}>Products</p>
            <p className='sale' style={{fontSize:30}}>Sales</p>
            <Link to='/login'><p className='sale' style={{fontSize:30}}>Login</p></Link>
            <Link to='/signup'><p className='sale' style={{fontSize:30}}>SignUp</p></Link>
        </div>
        <div className='divm'>
            <div className='div1'>
                <div className='imagediv'>
            <p style={{paddingTop:70, fontSize:50}}><b><br/>Pharmacy at your door step</b></p>
            <p style={{fontSize:23, paddingTop:25}}>Pharmacy is the field of healthcare that focuses on the safe and effective use of<br></br> medications. Pharmacists play a crucial role in dispensing prescription drugs, <br></br>providing medication counseling to patients</p>
            </div>
            </div>
            <div className='div2'>
            </div>
        </div>
        <div>
            <p style={{fontSize:40,paddingTop:35}}>Benefits of using getmeds website for purchasing medicines</p>
        </div>
        <div className='setm' style={{paddingTop:100}}>
            <div className='info'>
              <img src="https://as2.ftcdn.net/v2/jpg/01/43/60/23/1000_F_143602390_gFkliyLCkFa7dmkixxKeV27fYy0a8Vrf.jpg" alt='kiran' className='logo' style={{paddingRight:40}}></img>
              <p style={{fontSize:30}}><b>Faster billing</b></p><br/>
              <p style={{fontSize:20}}>User-friendly interface with <br/>shortcuts and quick searches <br/>facilitates faster checkouts and <br/>improves the billing experience <br/>along with mobile billing app</p>
            </div>
            <div className='info'>
                <img src='https://www.creativefabrica.com/wp-content/uploads/2020/06/15/Accounting-black-and-white-line-icon-Graphics-4362425-1-580x387.jpg' alt='kiran' className='logo'></img>
                <p style={{fontSize:30}}><b>Integrated accounting</b></p>
                <p style={{paddingTop:13,fontSize:20}}>Automated tax calculations,<br/> simplified GST filing, regular<br/> updates to stay up-to-date with new<br/> regulations, and impactful financial<br/> reports to help you make critical<br/> business decisions</p>
            </div>
            <div className='info'>
                <img src='https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180823059/108968560-report-vector-icon-isolated-on-transparent-background-report-logo-concept.jpg' alt='kiran' className='logo'></img>
                <p style={{fontSize:30,paddingTop:8}}><b>Powerful reports</b></p>
                <p style={{paddingTop:12,fontSize:20}}>Access instant reports on the short-<br/>expiry, best-selling, fast or low-<br/>selling items, directly on your phone<br/> or through automated report <br/>mailers and take informed decisions</p>
            </div>
        </div>
        <div className='setm' style={{paddingTop:100}}>
            <div className='info'>
              <img src="https://i.pinimg.com/564x/f2/c9/c9/f2c9c9cae29e59d1f687aa41e38ae0bd.jpg" alt='kiran' className='logo' style={{paddingRight:40}}></img>
              <p style={{fontSize:30}}><b>Smart Purchase</b></p><br/>
              <p style={{fontSize:20}}>Automated procurement system to<br/> help you purchase the right<br/> products at the right time, from the<br/> right place, and at the right price,<br/> based on your store's performance</p>
            </div>
            <div className='info'>
                <img src='https://t3.ftcdn.net/jpg/05/45/84/04/360_F_545840416_gLpBN0uxirMS3ovPrQD9LcN4ooHfUZ4s.jpg' alt='kiran' className='logo'></img>
                <p style={{fontSize:30,paddingTop:10}}><b>Complete Inventory Control</b></p>
                <p style={{paddingTop:17,fontSize:20}}>Maintain optimal inventory levels,<br/> manage expiry dates, and safeguard<br/> your margin by avoiding<br/> overstocking or running out of stock</p>
            </div>
            <div className='info'>
                <img src='https://media.istockphoto.com/id/963274622/vector/abstract-security-vector-icon-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=dMMWq3ujYgfpTDU-mW8_ZIWKLx6i1Qvc8xtgH6qlacs=' alt='kiran' className='logo'></img>
                <p style={{fontSize:30 ,paddingTop:8}}><b>Robust Security</b></p>
                <p style={{paddingTop:12,fontSize:20}}>Our pharmacy management system<br/> employs advanced security<br/> measures to safeguard your<br/> business and customer data against<br/> unauthorized access or breaches</p>
            </div>
        </div>
        <div className='div3'>
             <div className='info2'>
                <p style={{fontSize:40,paddingTop:110}}><b>What is Pharmacy Software?</b></p>
                <div style={{textAlign:'center'}}><p style={{fontSize:25,paddingTop:50}}>Pharmacy billing software is an important tool for any retail<br/> pharmacy looking to streamline its operations. This online<br/> pharmacy software is designed to manage inventory, billing,<br/> accounting, and medication expiry, providing pharmacy owners<br/> with greater control over their business processes. By utilizing<br/> pharmacy billing software, businesses can improve their workflow<br/> and profitability while reducing the risk of errors and other<br/> operational challenges.</p></div>
             </div>
             <div className='img'>
              <p style={{textAlign:'center',fontSize:70,paddingTop:150}}><i>Pharmacy Management<br/><br/>GetMeds</i></p>
             </div>
        </div>
        <Link to='login'><p style={{fontSize:40,paddingTop:60,paddingBottom:1}}>Login to Continue...</p></Link>
        <div className='div4'>
            <hr/>
            <div className='div5'>
                <p style={{fontSize:30,paddingTop:40}}><b>Resources</b></p><br/>
                <p style={{fontSize:20}}>About Us <br/>Contact Us <br/>Customer Stories <br/>Partners <br/>System Requirements <br/>Accessories Supported <br/>Blog <br/>News & Media <br/>Community <br/>Pricing <br/>Careers <br/>Web Stories <br/>Why Gofrugal</p>
            </div>
            <div className='div5'>
                <p style={{fontSize:30,paddingTop:40}}><b>Mobile Apps</b></p><br/>
                <p style={{fontSize:20}}>Business Assistant <br/>Express Checkout POS <br/>Business analytics <br/>Stock Counting <br/>Goods Inward <br/>Stock Picking <br/>In-store Price Checker <br/>Restaurant Tablet POS <br/>Steward Order Taking <br/>Customer feedback <br/>Delivery management <br/>Sales Force Automation <br/>Online ordering app <br/>Online Pharmacy app <br/>MyGofrugal app</p>
            </div>
            <div className='div5'>
                <p style={{fontSize:30,paddingTop:40}}><b>Popular Features</b></p><br/>
                <p style={{fontSize:20}}>ONDC Network <br/>The Eye - AI & ML based reordering <br/>What is ERP? <br/>What is Point-of-Sale (POS)? <br/>What is e-Way bill? <br/>Billing Software <br/>CRM Software <br/>Store Management Software <br/>Inventory Management Software <br/>Financial Accounting Software <br/>What is MIS Report? <br/>Bookkeeping Software <br/>Bank Reconciliation Statement <br/>Inventory Control <br/>MR Reporting Software <br/>POS Software <br/>E-invoicing Software <br/>24x7 POS Support  </p>
            </div>
            <div className='div5'>
                <p style={{fontSize:30,paddingTop:40}}><b>Assure Services</b></p><br/>
                <p style={{fontSize:20}}>24x7 Assure Care <br/>Product Delivery <br/>Solution Deliver</p>
            </div>
       </div>
        </div>
        </>
    )
}
export default Home;