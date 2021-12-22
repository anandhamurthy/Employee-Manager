import Controller from '@ember/controller';
import EmberObject, { computed, observer } from '@ember/object';

export default Controller.extend({
    emp_name : "",
    dob : "",
    gender : "",
    mobile : "",
    email_id : "",
    nationality : "",
    address : "",
    state : '',
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
      selected_language: '',
      actions: {
          empSubmit() {
  
              var emp_name = (this).get('emp_name');
              var dob = (this).get('dob');
              var gender = (this).get('gender');

              var mobile = (this).get('mobile');
              var email_id = (this).get('email_id');

              var nationality = (this).get('nationality');
              var address = (this).get('address');
              var state = (this).get('state');
              var pincode = (this).get('pincode');
              
              var language = (this).get('selected_language');

              console.log(emp_name+" :: "+dob+" :: "+gender+" :: "+mobile+" :: "+email_id+" :: "+language+" :: "+nationality+" :: "+state+" :: "+address+" :: "+pincode);

              var data = { name: emp_name, dob: dob, gender : gender, mobile : mobile, email_id : email_id, language : language, nationality : nationality, state : state, address : address, pincode : pincode };

              console.log(data);

              Ember.$.ajax({
                type: "POST",
                url: "http://localhost:8080/EmployeeManager/AddEmployee",
                data: data,
                success: function (res) {
                  if (res.status === "true") {
                    
                    this.get('router').transitionToRoute('employee-list');
                  }
                }
              });

          
          },

          onLanguageSelected() {
            var languages = this.get('language').filterBy('isChecked', true).mapBy('value').join();
            this.set('selected_language', languages);
          }

      }
});

