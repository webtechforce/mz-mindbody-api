(function($){
$(document).ready(function($) {
		$("a[data-target=#mzModal]").click(function(ev) {
			ev.preventDefault();
			var target = $(this).attr("href");
			// load the url and show modal on success
			$("#mzModal").load(target, function() { 
				 $("#mzModal").modal({show:true});  
			});
			// kill modal contents on hide
			    $('body').on('hidden.bs.modal', '#mzModal', function () {
			     $(this).removeData('bs.modal');
			   });	
		});
	});
	
$(document).ready(function($) {
		$("a[data-target=#mzModal]").click(function(ev) {
			ev.preventDefault();
			var target = $(this).attr("href");
			// load the url and show modal on success
			$("#mzModal").load(target, function() { 
				 $("#mzModal").modal({show:true});  
			});
			// kill modal contents on hide
			    $('body').on('hidden.bs.modal', '#mzModal', function () {
			     $(this).removeData('bs.modal');
			   });	
		});
	});
	
$(document).ready(function() {
	var stripeTable = function(table) { //stripe the table (jQuery selector)
            table.find('tr').removeClass('striped').filter(':visible:even').addClass('striped');
        };
        $('table.mz-schedule-filter').filterTable({
            callback: function(term, table) { stripeTable(table); }, //call the striping after every change to the filter term
            placeholder: mz_mindbody_api_i18n.filter_default,
            highlightClass: 'alt',
            inputType: 'search',
            label: mz_mindbody_api_i18n.label,
            quickList: [mz_mindbody_api_i18n.quick_1, mz_mindbody_api_i18n.quick_2, mz_mindbody_api_i18n.quick_3]
        });
        stripeTable($('table.mz-schedule-filter')); //stripe the table for the first time
	});
})(jQuery);

