// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Floristeria',
	dialog: {
		title: 'Floristeria',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		},
        {
        path: '/perfil/',
        url: 'perfil.html',
        name: 'perfil',
        },
		{
		path: '/cat/',
		url: 'cat.html',
		name: 'cat'
		},
		{
		path: '/prod/',
		url: 'product.html',
		name: 'prod'
		}
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btn-alerta').on('click',function(){
	app.dialog.alert('Hola mundo');
	
});
					 


 

