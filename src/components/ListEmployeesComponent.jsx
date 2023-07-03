import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';

function ListEmployeesComponent() {
  const navigate = useNavigate();
  const [employees, setEmployees] = React.useState([]);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const [isSelectedEmployeeId, setIsSelectedEmployeeId] = useState(null);


  useEffect(() => {
    EmployeeService.getEmployees()
      .then(res => {
        setEmployees(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addEmployee = () => {
    navigate('/add-employee');
  };

   const editEmployee = (employeeId) => {
    setIsSelectedEmployeeId(employeeId);
    setIsUpdateFormVisible(true);
  };

  const deleteEmployee = () => {

  }

  return (
    <div>
      <h2 className="text-center">Employees list</h2>
      <div className="row">
        <button className="btn btn-primary" style={{width: '150px', height: '50px' }} onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <div className="row">
        {isUpdateFormVisible ? (
            // Hiển thị form Update nếu biến trạng thái là true
            <UpdateEmployeeComponent />
          ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employees First Name</th>
              <th>Employees Last Name</th>
              <th>Employees Email Id</th>
              <th>Action:</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.fristName}</td>
                <td>{employee.lastname}</td>
                <td>{employee.emailId}</td>
                <td className="text-center">
                  <button onClick={() => editEmployee(employee.id)} className="btn btn-primary" style={{marginRight:"40px", width:"100px"}}>Edit</button>
                  <button onClick={() => deleteEmployee(employee.id)} className="btn btn-danger"style={{width:"100px"}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          )}
      </div>
    </div>
  );
}

export default ListEmployeesComponent;
