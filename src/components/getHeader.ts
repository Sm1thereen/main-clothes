import { IUser } from '../interfaces/IUser';

export default function getHeader(user: IUser | null): IUser {
    const props: IUser = { firstName: '', lastName: '' };
    if (user) {
        props.firstName = user.firstName;
        props.lastName = user.lastName;
    }
    return props;
}
