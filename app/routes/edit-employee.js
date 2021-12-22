import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        const {
            id
        } = params;
        return $.ajax({
			url: 'http://localhost:8080/EmployeeManager/Employee?id='+id
        }).then((response) => {
            return response
        });    
    },
    actions : {
        navigateTo() {
            this.transitionTo('/');
        }
     }
});
