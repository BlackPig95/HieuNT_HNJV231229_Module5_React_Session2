function UserDetail(props)
{
    return (
        <>
            <tr>
                <td className="pl-4">{ props.id }</td>
                <td>
                    <h6 className="font-medium mb-0">{ props.name }</h6>
                </td>
                <td>
                    <span className="text-muted">{ props.age }</span>
                    <br />
                    <span className="text-muted">{ props.age }</span>
                </td>
                <td>
                    <span className="text-muted">{ props.email }</span>
                    <br />
                </td>
                <td>
                    <span className="text-muted">{ props.dateOfBirth }</span>
                    <br />
                </td>
                <td>
                    <select defaultValue={ props.manage }
                        className="form-control category-select"
                        id="exampleFormControlSelect1"
                    >
                        <option value={ "Modulator" }>Modulator</option>
                        <option value="Admin">Admin</option>
                        <option value={ "User" }>User</option>
                        <option value={ "Subscriber" }>Subscriber</option>
                    </select>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                    >
                        <i className="fa fa-trash" />{ " " }
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                    >
                        <i className="fa fa-edit" />{ " " }
                    </button>
                </td>
            </tr>
        </>
    );
}

export default UserDetail;