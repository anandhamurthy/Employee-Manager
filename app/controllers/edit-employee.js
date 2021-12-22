import Controller from '@ember/controller';
import  { computed } from '@ember/object';

export default Controller.extend({
    emp_name : "",
    dob : "",
    gender : "",
    mobile : "",
    email_id : "",
    nationality : "",
    address : "",
    state : "",
    
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
    selected_language: '',
    employee: computed('id', 'model', function() {
      let id = this.get('id');
      let employee = this.get('model');


      this.set('emp_name', employee.Name);
      this.set('dob', employee.DOB);
      this.set('gender', employee.Gender);
      this.set('mobile', employee.Mobile);
      this.set('email_id', employee.Email_ID);

      this.set('selected_language', employee.Language);
      this.set('nationality', employee.Nationality);
      this.set('address', employee.Address);
      this.set('state', employee.State);
      this.set('pincode', employee.Pincode);

      let lang = this.get('selected_language').split(",");
      for (let i = 0; i < this.language.length; i++) {
        const element = this.language[i];
        if (lang.includes(element.label)) {
          var temp = this.get('language').objectAt(i);
          Ember.set(temp, "isChecked", true);
        }
        
        
      }

      return employee;
      
    }),
    actions: {

        empEditSubmit() {
 
            var emp_name = this.get('emp_name');
            var dob = this.get('dob');
            var gender = this.get('gender');

            var mobile = this.get('mobile');
            var email_id = this.get('email_id');
            var language = this.get('selected_language');

            var nationality = this.get('nationality');
            var address = this.get('address');
            var state = this.get('state');
            var pincode = this.get('pincode');

            console.log(emp_name+" :: "+dob+" :: "+gender+" :: "+mobile+" :: "+email_id+" :: "+language+" :: "+nationality+" :: "+state+" :: "+address+" :: "+pincode);

            var data = { name: emp_name, dob: dob, gender : gender, mobile : mobile, email_id : email_id, language : language, nationality : nationality, state : state, address : address, pincode : pincode };

            console.log(data);

            Ember.$.ajax({
              type: "POST",
              url: "http://localhost:8080/EmployeeManager/EditEmployee?id="+this.id,
              data: data,
              success: function (res) {
                if (res.status === "true") {
                    this.send('navigateTo');
                }
              }
            });
        },

        loadEmployee() {
          this.set('emp_name', this.get('employee').Name);
          this.set('dob', this.get('employee').DOB);
          this.set('gender', this.get('employee').Gender);
          this.set('mobile', this.get('employee').Mobile);
          this.set('email_id', this.get('employee').Email_ID);

          this.set('selected_language', this.get('employee').Language);
          this.set('nationality', this.get('employee').Nationality);
          this.set('address', this.get('employee').Address);
          this.set('state', this.get('employee').State);
          this.set('pincode', this.get('employee').Pincode);

          let lang = this.get('selected_language').split(",");
          for (let i = 0; i < this.language.length; i++) {
            const element = this.language[i];
            if (lang.includes(element.label)) {
              var temp = this.get('language').objectAt(i);
              Ember.set(temp, "isChecked", true);
            }
            
            
          }
        },

        onLanguageSelected() {
          var languages = this.get('language').filterBy('isChecked', true).mapBy('value').join();
          this.set('selected_language', languages);
        }

      
    }
});
