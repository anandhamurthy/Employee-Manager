import Route from '@ember/routing/route';

export default Route.extend({

    actions : {
        navigateToIndex() {
           this.transitionToRoute('/');
        }
    }
});
