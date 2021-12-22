import Route from '@ember/routing/route';

export default Route.extend({
    AllEmployee : [],
    model() {
        return $.ajax({
			url: 'http://localhost:8080/EmployeeManager/AllEmployee'
        }).then((response) => {
            console.log(response);
            return response
        });      
        
    },
     
     actions : {
        navigateTo() {
            this.transitionTo('/');
        }
     }
});
