<?php
// Ajax
 define('MZ_MBO_JS_VERSION', '1.0');

//Force page protocol to match current
$protocol = isset( $_SERVER["HTTPS"]) ? 'https://' : 'http://';
 
 //Enqueue script in footer
 //add_action('init', 'register_ajax_mbo_add_to_classes_js');
 add_action('wp_footer', 'ajax_mbo_add_to_classes_js');
 	
 function ajax_mbo_add_to_classes_js() {
 	global $add_mz_ajax_script;
 	if ( ! $add_mz_ajax_script )
 		return;

 	wp_enqueue_script('mZ_add_to_classes');
 //Force page protocol to match current
 $protocol = isset( $_SERVER["HTTPS"]) ? 'https://' : 'http://';
 
 $params = array(
 	'ajaxurl' => admin_url( 'admin-ajax.php', $protocol )
 	);
 	
 	wp_localize_script( 'mZ_add_to_classes', 'mZ_add_to_classes', $params);
 	
 	}
    
 //Ajax Handler
 add_action('wp_ajax_nopriv_mz_mbo_add_client_ajax', 'mz_mbo_add_client_ajax');
 add_action('wp_ajax_mz_mbo_add_client_ajax', 'mz_mbo_add_client_ajax');	
     
 function mz_mbo_add_client_ajax() {
 
  	check_ajax_referer( $_REQUEST['nonce'], "mz_MBO_add_to_class_nonce", false);
  	
 	require_once MZ_MINDBODY_SCHEDULE_DIR .'mindbody-php-api/MB_API.php';
 	add_action('wp_loaded', function () {
			require_once(MZ_MINDBODY_SCHEDULE_DIR .'inc/mz_mbo_init.inc');
			$mz_mbo = new MZ_MBO_Init();
		});
 
 	$additions['ClassIDs'] = array($_REQUEST['classID']);
 	$additions['ClientIDs'] = array($_REQUEST['clientID']);
 	//$additions['Test'] = true;
 	$additions['SendEmail'] = true;
 	$signupData = $mb->AddClientsToClasses($additions);
 	//$mb->debug();
     //$rand_number = rand(1, 10); # for testing
 
 	if ( $signupData['AddClientsToClassesResult']['ErrorCode'] != 200 ){
 			$result['type'] = "failure";
 			$result['message'] = '';
 		foreach ($signupData['AddClientsToClassesResult']['Classes']['Class']['Clients']['Client']['Messages'] as $message){
 				if (strpos($message, 'already booked') != false){
 					$result['message'] .= __('Already registered.', 'mz-mindbody-api');
 					}else{
 					$result['message'] .= $message;
 					}
 			}
 			
 		}else{
 			//$classDetails = $signupData['AddClientsToClassesResult']['Classes']['Class'];
 			
 			$result['type'] = "success";
 			$result['message'] = __('Registered via MindBody', 'mz-mindbody-api');
 			/*$classDetails['ClassDescription']['Name']
 			$classDetails['Staff']['Name'];
 			$classDetails['Location']['Name'];
 			$classDetails['Location']['Address'];*/
 		}
 		
 	if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
       $result = json_encode($result);
       echo $result;
    }
    else {
       header("Location: ".$_SERVER["HTTP_REFERER"]);
    }
 
    die();
 }
 //End Ajax
 ?>