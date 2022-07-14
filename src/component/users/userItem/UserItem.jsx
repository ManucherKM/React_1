import classSyle from "./UserItem.module.css";

const UserItem = ({ user }) => {
    return (
        <div>
            <div className={classSyle.wrapper + " d-flex align-item-center my-3"}>
                <div className="mx-5">
                    <img className={classSyle.img} src="https://i1.sndcdn.com/avatars-000274465248-9ebsri-t500x500.jpg" alt="Photo" />
                </div>
                <div>
                    <p className="my-0"><strong>Name: </strong>{user.name}</p>
                    <p className="my-2"><strong>Username: </strong>{user.username}</p>
                    <p className="my-0"><strong>E-mail: </strong>{user.email}</p>
                    <p className="my-2"><strong>City: </strong>{user.address.city}</p>
                    <p className="my-0"><strong>Companyname: </strong>{user.company.name}</p>
                </div>
            </div>
        </div>
    )
}

export default UserItem;