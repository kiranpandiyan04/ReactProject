import '../Assets/Table.css'
import { Link } from 'react-router-dom';
const Pills= () =>{
    return(
       <>
       <div className='tablediv'>
        <p style={{fontSize:50 ,marginRight:1300}}>Pills</p><br></br>
       <table className='content' border={10} cellSpacing={0}>
        <tr>
            <th>Id</th>
            <th>Medicine Name</th>
            <th>Manufacturer</th>
            <th>Expire Date</th>
            <th>Quantity</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Paracetamol</td>
            <td>PVT Lmt</td>
            <td>27.03.24</td>
            <td>45</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Dopamine</td>
            <td>JKS Ltd</td>
            <td>30.04.24</td>
            <td>25</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Atropine</td>
            <td>SPB Lmp</td>
            <td>23.06.24</td>
            <td>28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Adenosine</td>
            <td>JQK Ltd</td>
            <td>12.04.24</td>
            <td>15</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Amiodarone</td>
            <td>JMP LtQ</td>
            <td>03.05.24</td>
            <td>18</td>
        </tr>
       </table>
       <Link to='/slidebar' style={{fontSize:50 ,marginLeft:1300}}>back</Link>
       </div>
       </>
    )
}
export default Pills;