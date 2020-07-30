export default class UserDto {
  constructor (data) {
    if (data) {
      this.firstname = data.firstname
      this.lastname = data.lastname
      this.email = data.email
      this.password = data.password
    }
  }
}
