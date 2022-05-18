import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;



    return (
        <tr>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>

            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-modal" class="btn btn-xs btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;