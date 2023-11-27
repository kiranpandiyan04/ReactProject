import { Toolbar, Typography, IconButton, TextField } from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import '../Assets/style.css'
import { useContext } from 'react';
import { EmailContextLog } from './Login';
import { Link } from 'react-router-dom';

function Slidebar(props){
  useEffect(()=>{
    document.title='DashBoard';
  })
  const [name, setname] = useState('div1');
  const imageUrl1 = 'https://img.freepik.com/free-psd/hospital-icon-isolated-3d-render-illustration_47987-9517.jpg?size=626&ext=jpg&ga=GA1.1.25990905.1700473157&semt=sph';
  const imageUrl2 = 'https://img.freepik.com/free-vector/vitamin-complex-package_23-2148488954.jpg?size=626&ext=jpg&ga=GA1.1.25990905.1700473157&semt=ais';
  const imageUrl3 = 'https://i.pinimg.com/474x/36/71/71/3671711d7654384391141ed5f6b55b34.jpg';
  const imageUrl4 = 'https://i.pinimg.com/474x/11/76/9c/11769ca60c00c9ffda068cb8a55f9757.jpg';
  const imageUrl5 = 'https://i.pinimg.com/474x/53/ca/14/53ca149258f4f51c03a802ed5f5f641b.jpg';
  const imageUrl6 = 'https://i.pinimg.com/474x/78/08/f9/7808f999851a44976e78175be081995b.jpg';
  const imageUrl7 = 'https://i.pinimg.com/474x/32/72/c7/3272c79ca3c51e9d0fc214d5f561eb4d.jpg';
  const imageUrl8 = 'https://www.shutterstock.com/image-vector/medical-supply-delivery-truck-sign-260nw-1689832999.jpg';


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Medicine Name', width: 200 },
    { field: 'manufacturer', headerName: 'Manufacturer', width: 200 },
    { field: 'expiryDate', headerName: 'Expiry Date', width: 150 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 120 },
    { field: 'price', headerName: 'Price', type: 'number', width: 120 },
  ];

  const rows = [
    { id: 1, name: 'Paracetamol', manufacturer: 'ABC Pharmaceuticals', expiryDate: '2023-12-31', quantity: 100, price: 5.99 },
    { id: 2, name: 'Amoxicillin', manufacturer: 'XYZ Pharma', expiryDate: '2024-05-15', quantity: 50, price: 8.5 },
    { id: 3, name: 'Ibuprofen', manufacturer: 'DEF Meds', expiryDate: '2023-11-30', quantity: 80, price: 4.75 },
    { id: 4, name: 'Omeprazole', manufacturer: 'PQR Laboratories', expiryDate: '2024-04-22', quantity: 60, price: 7.25 },
    { id: 5, name: 'Aspirin', manufacturer: 'JK Pharmaceuticals', expiryDate: '2023-10-01', quantity: 120, price: 3.25 },
    { id: 6, name: 'Lisinopril', manufacturer: 'MNO Pharma', expiryDate: '2024-07-18', quantity: 70, price: 6.5 },
    { id: 7, name: 'Metformin', manufacturer: 'STU Meds', expiryDate: '2023-09-25', quantity: 90, price: 4.99 },
    { id: 8, name: 'Atorvastatin', manufacturer: 'VWX Laboratories', expiryDate: '2024-03-12', quantity: 55, price: 9.75 },
    { id: 9, name: 'Hydrochlorothiazide', manufacturer: 'YZ Pharmaceuticals', expiryDate: '2023-08-07', quantity: 85, price: 7.85 },
    { id: 10, name: 'Simvastatin', manufacturer: 'PharmaCorp', expiryDate: '2024-06-29', quantity: 40, price: 8.25 },
  ];
  const email1 = useContext(EmailContextLog);
  return (
    <div>
      <div className='tool'>
        <Toolbar>
          <Typography variant="h5" className='typo'><p style={{fontSize:35}}>GetMeds</p></Typography>

          <div style={{ display: 'flex', alignItems: 'center', flex: '1', justifyContent: 'center' }}>
            <TextField
              id="search"
              placeholder="Search..."
              variant="outlined"
              size="small"
              InputProps={{
                style: { backgroundColor: 'azure', borderRadius: '30px' }, // Apply styles to TextField
                endAdornment: (
                  <SearchIcon style={{ color: 'black' }} /> // Apply styles to SearchIcon
                ),
              }}
            />
          </div>

          <IconButton color="inherit" style={{ marginLeft: 'auto' }} >
            <MailIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          {email1}
        </Toolbar>
      </div>

      <div className="app">
        <Sidebar className="sidebar">
        <Menu>
          <MenuItem onClick={()=>setname('div1')}>DashBoard</MenuItem>
          <SubMenu label="Medicines">
            <MenuItem onClick={()=>setname('div2')}> Available Medicine </MenuItem>
            <MenuItem> Expired Medicines </MenuItem>
          </SubMenu>
          <MenuItem>Add Medicine</MenuItem>
          <MenuItem> Add Sales</MenuItem>
          <MenuItem onClick={()=>setname('div3')}> Sell Medicine </MenuItem>
          <Link to='/'><MenuItem> Log Out </MenuItem></Link>
        </Menu>
        </Sidebar>
        { name === 'div1' && (
          <div className="main-content" style={{paddingTop:20}}>
                      <div className='outer' ><Link to='/pill'>
                          <div className='inner' style={{ backgroundImage: `url(${imageUrl1})`, backgroundSize: 'cover',marginTop:0}}></div>
                          <p style={{fontSize:25 ,paddingTop:180,paddingRight:30}}>Pills</p></Link>
                      </div>
                      <div className='outer'>
                          <div className='inner' style={{ backgroundImage: `url(${imageUrl2})`, backgroundSize: 'cover'}}></div>
                          <p style={{fontSize:25 ,paddingTop:180,paddingRight:20}}>Nutritional__Products</p>
                      </div>
                      <div className='outer'>
                          <div className='inner' style={{ backgroundImage: `url(${imageUrl3})`, backgroundSize: 'cover'}}></div>
                          <p style={{fontSize:25 ,paddingTop:180,paddingRight:10}}>Band_Aids</p>
                      </div>
                      <div className='outer'>
                          <div className='inner' style={{ backgroundImage: `url(${imageUrl4})`, backgroundSize: 'cover'}}></div>
                          <p style={{fontSize:25 ,paddingTop:180,paddingRight:20}}>First__Aid__Kits</p>
                      </div>
                      <div className='outer'>
                          <div className='inner' style={{ backgroundImage: `url(${imageUrl5})`, backgroundSize: 'cover'}}></div>
                          <p style={{fontSize:25 ,paddingTop:180,paddingRight:10}}>Syrup</p>
                      </div>
                      <div className='outer'>
                          <div className='inner' style={{ backgroundImage: `url(${imageUrl8})`, backgroundSize: 'cover'}}></div>
                          <p style={{fontSize:25 ,paddingTop:180,paddingRight:10}}>Suppliers</p>
                      </div> 
                      <div className='outer'>
                          <div className='inner' style={{ backgroundImage: `url(${imageUrl7})`, backgroundSize: 'cover'}}></div>
                          <p style={{fontSize:25 ,paddingTop:180,paddingRight:10}}>Sold_out_Products</p>
                      </div>
                      <div className='outer'>
                          <div className='inner' style={{ backgroundImage: `url(${imageUrl6})`, backgroundSize: 'cover'}}></div>
                          <p style={{fontSize:25 ,paddingTop:180,paddingRight:10}}>Expired_Products</p>
                      </div>
          </div>
        )}
{name === 'div2' && (
          <div className='medi' style={{ display: 'flex',  alignItems: 'center', height: '60vh' ,marginTop: '100px' , marginLeft: '130px'}}>
            <Box>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        )}


{name === 'div3' && (
          <div className='medi' style={{ display: 'flex',  alignItems: 'center', height: '60vh' ,marginTop: '100px' , marginLeft: '130px'}}>
            <Box>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        )}
   

        </div>

      </div>

  );
}

export default  Slidebar;