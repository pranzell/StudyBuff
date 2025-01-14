export interface IUserDBModel {
    UserID: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}


export default class UserModelDTO {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  
    constructor(customer: IUserDBModel) {
        this.userId = customer.UserID;
        this.firstName = customer.FirstName;
        this.lastName = customer.LastName;
        this.email = customer.Email;
        this.password = customer.Password;
    }
  }