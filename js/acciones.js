// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btnmenu').on('tap',function() {
		navigator.vibrate(1000);
	}); //tap a btnmenu
	
	$('#btninicio').on('tap',function() {
		navigator.vibrate(1000);
	}); //tap a btninicio
	
	$('#btnchimpance').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btnchimpance
		
		$('#btnpestañear').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btnpestañear
		
		$('#btngallina').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btngallina 
		
		$('#btnfuerza').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btnfuerza
		
		$('#btnestomago').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btnestomago

       $('#btnbacterias').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btnbacterias

       $('#btndormir').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btndormir
		
		$('#btncelulas').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btncelulas

       $('#btnsencible').on('tap',function() {
		navigator.notification.beep(1);
		}); //tap a btnsencible

	
}); 
});

