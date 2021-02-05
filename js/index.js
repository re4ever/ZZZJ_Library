var app = new Vue({
	el: '#fgIndex',
	data:
	{
		loaded: false,
		now_index: 'mainpage'
	},
	mounted: init_data,
	methods:
	{
		handle_select: handle_select_url
	}
})