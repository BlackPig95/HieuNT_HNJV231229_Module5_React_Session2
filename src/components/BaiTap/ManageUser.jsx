import { useState } from "react";
import UserDetail from "./UserDetail";

function ManageUser()
{
    const [ users, setUsers ] = useState(
        [
            {
                id: 1,
                name: "Daniel Kristeen",
                age: `Visual Designer 
                Past : teacher`,
                email: "daniel@website.com",
                dateOfBirth: "15 Mar 1988",
                manage: "Modulator",
            },
            {
                id: 2,
                name: "Emma Smith",
                age: `Visual Designer 
                Past : teacher`,
                email: "daniel@website.com",
                dateOfBirth: "15 Mar 1855",
                manage: "User",
            },
            {
                id: 3,
                name: "Olivia Johnson",
                age: `Visual Designer 
                Past : teacher`,
                email: "daniel@website.com",
                dateOfBirth: "15 Mar 1988",
                manage: "Admin",
            },
            {
                id: 4,
                name: "Isabella Williams",
                age: `Visual Designer 
                Past : teacher`,
                email: "daniel@website.com",
                dateOfBirth: "15 Mar 1988",
                manage: "Subscriber",
            },
        ]
    );
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table no-wrap user-table mb-0">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="border-0 text-uppercase font-medium pl-4"
                                        />
                                        <th scope="col" className="border-0 text-uppercase font-medium">
                                            Name
                                        </th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">
                                            Age
                                        </th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">
                                            Email
                                        </th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">
                                            Dateofbirth
                                        </th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">
                                            Manage
                                        </th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user =>
                                        {
                                            return (<UserDetail key={ user.id } name={ user.name } id={ user.id } age={ user.age } email={ user.email }
                                                dateOfBirth={ user.dateOfBirth } manage={ user.manage } />);
                                        }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ManageUser;