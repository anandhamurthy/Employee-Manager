import Controller from '@ember/controller';
import  { computed } from '@ember/object';

export default Controller.extend({
    name : "",
    dob : "",
    gender : "",
    mobile : "",
    email_id : "",
    nationality : "",
    address : "",
    state : "",
    pincode : "",
    language : [{
        label: 'Tamil',
        isChecked: false,
        value: 'Tamil'
      },{
        label: 'English',
        isChecked: false,
        value: 'English'
      },{
        label: 'Hindi',
        isChecked: false,
        value: 'Hindi'
      },
      {
        label: 'Telugu',
        isChecked: false,
        value: 'Telugu'
      }],
      queryParams: ['id'],
      id: null,

      employee: computed('id', 'model', function() {
        let id = this.get('id');
        let employee = this.get('model');
        return employee;
        
      }),
    actions: {

      // getEmployee () {
         
      //   return $.ajax({
      //     url: 'http://localhost:8080/EmployeeManager/Employee?id='+this.get('id')
      //     }).then((response) => {
      //         console.log(response);
      //         return response
      //     });  
      // }
    }
});
