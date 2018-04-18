FlowRouter.route('/nextcloud', {
	name: 'nextcloud',
	action() {
		BlazeLayout.render('main', {center: 'nextcloud'});
	}
});
