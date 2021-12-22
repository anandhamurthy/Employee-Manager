import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        empDelete(id) {
 
            console.log("Deleted : "+id);

            Ember.$.ajax({
              type: "POST",
              url: "http://localhost:8080/EmployeeManager/DeleteEmployee?id="+id,
              success: function (res) {
                if (res.status === "true") {
                  this.send('navigateTo');
                }
              }
            });
         
        },
    }
});
