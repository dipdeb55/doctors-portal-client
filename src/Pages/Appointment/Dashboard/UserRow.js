import userEvent from '@testing-library/user-event';
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ d, refetch }) => {
    const { email, role } = d;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,
            {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
            .then(res => {
                if (res.status === 403) {
                    toast.error('faild to make admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCont > 0) {
                    console.log(data)
                    refetch()
                    toast.success('admin success')
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin} >Make Admin</button>}</td>
            <td><button class="btn btn-xs bg bg-red-400">Remove User</button></td>
        </tr>
    );
};

export default UserRow;