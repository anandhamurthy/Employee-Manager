import Route from '@ember/routing/route';

export default Route.extend({

    model(params) {
        const {
            id
        } = params;
        console.log(params);
        return $.ajax({
			url: 'http://localhost:8080/EmployeeManager/Employee?id='+id
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
