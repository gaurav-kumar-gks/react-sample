import { useState } from "react";
import { faker } from '@faker-js/faker';

const createRandomUser = () => {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const name = `${firstName} ${lastName}`;
    const age = faker.number.int({ min: 11, max: 30 });
    const email = faker.helpers.unique(faker.internet.email, [
        firstName,
        lastName,
    ]);

    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email,
        name,
        sex,
        age,
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
}

const User = (props) => {
    let userAge = props.age || 0;
    const [age, setAge] = useState(userAge);
    let isLegal = false;
    let legalText = "Under age";
    if (age >= 18) {
        isLegal = true;
        legalText = "Legal age";
    }

    return (
        <div>
            <h3>{props.name}</h3>
            <p>{age}</p>
            <p>{props.email}</p>
            <img src={props.avatar} alt={props.name} style={{ width: 60, height: 60 }} />
            <p style={{ color: isLegal ? "green" : "red" }}>{legalText}</p>
            {<div><button onClick={() => setAge(age + 1)}>+</button></div>}
            {<div><button onClick={() => setAge(age - 1)}>-</button></div>}
            {!isLegal && <div><p>Not eligible to vote</p></div>}
            {isLegal && <div><button>Click here to vote</button></div>}
            {<div><button onClick={() => props.decreaseNoOfUsers(props._id)}>Remove User</button></div>}
        </div>
    );
}

export const Person = () => {
    const [noOfUsers, setNoOfUsers] = useState(0);
    const [usersData, setUsersData] = useState([]);
    // const usersDatas = Array.from({ length: noOfUsers }, createRandomUser);
    // console.table(usersData);

    const increaseNoOfUsers = () => {
        setNoOfUsers(noOfUsers + 1);
        setUsersData([...usersData, createRandomUser()]);
    };

    const decreaseNoOfUsers = (id) => {
        setNoOfUsers(noOfUsers - 1);
        if (id) {
            setUsersData(usersData.filter((u) => u._id !== id));
            return;
        } else {
            setUsersData(usersData.slice(0, -1));
        }
    };

    const persons = usersData.map((u) => (
        <User {...u} decreaseNoOfUsers={decreaseNoOfUsers} />
    ));

    return (
        <div>
            <div>
                <p>
                    No. of Users: <b>{noOfUsers}</b>
                </p>
            </div>
            <div>
                <button onClick={increaseNoOfUsers}>Add User</button>
                <button onClick={() => decreaseNoOfUsers()}>Remove User</button>
            </div>
            <div>{persons}</div>
        </div>
    );
}