+function(t){"use strict";function e(e){return this.each(function(){var s=t(this),n=s.data("bs.button"),o="object"==typeof e&&e;n||s.data("bs.button",n=new a(this,o)),"toggle"==e?n.toggle():e&&n.setState(e)})}var a=function(e,s){this.$element=t(e),this.options=t.extend({},a.DEFAULTS,s),this.isLoading=!1};a.VERSION="3.3.7",a.DEFAULTS={loadingText:"loading..."},a.prototype.setState=function(e){var a="disabled",s=this.$element,n=s.is("input")?"val":"html",o=s.data();e+="Text",null==o.resetText&&s.data("resetText",s[n]()),setTimeout(t.proxy(function(){s[n](null==o[e]?this.options[e]:o[e]),"loadingText"==e?(this.isLoading=!0,s.addClass(a).attr(a,a).prop(a,!0)):this.isLoading&&(this.isLoading=!1,s.removeClass(a).removeAttr(a).prop(a,!1))},this),0)},a.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var a=this.$element.find("input");"radio"==a.prop("type")?(a.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==a.prop("type")&&(a.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),a.prop("checked",this.$element.hasClass("active")),t&&a.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var s=t.fn.button;t.fn.button=e,t.fn.button.Constructor=a,t.fn.button.noConflict=function(){return t.fn.button=s,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(a){var s=t(a.target).closest(".btn");e.call(s,"toggle"),t(a.target).is('input[type="radio"], input[type="checkbox"]')||(a.preventDefault(),s.is("input,button")?s.trigger("focus"):s.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),function(t){t(document).ready(function(t){function e(t,e){"previous"==t.className?e.forEach(function(t){t.setAttribute("data-offset",parseInt(t.getAttribute("data-offset"))+parseInt(1))}):"following"==t.className&&e.forEach(function(t){t.setAttribute("data-offset",t.getAttribute("data-offset")-1)})}var a=t("#mzEventsDisplay"),s=mz_mindbody_schedule.atts;t("#mzEventsNavHolder .following, #mzEventsNavHolder .previous").on("click",function(n){n.preventDefault(),a.children().each(function(e){t(this).html("")}),a.toggleClass("loader");var o=[].slice.call(document.getElementById("mzEventsNavHolder").children);s.offset=this.dataset.offset;"following"==this.className?o.forEach(function(t){t.setAttribute("data-offset",parseInt(t.getAttribute("data-offset"))+parseInt(1))}):"previous"==this.className&&o.forEach(function(t){t.setAttribute("data-offset",t.getAttribute("data-offset")-1)}),t.ajax({type:"post",dataType:"json",context:this,url:mz_mindbody_schedule.ajaxurl,data:{action:"mz_display_events",nonce:mz_mindbody_schedule.nonce,atts:s},success:function(t){"success"==t.type?(a.toggleClass("loader"),document.getElementById("mzEventsDisplay").innerHTML=t.message,console.log(t),document.getElementById("eventsDateRangeDisplay").innerHTML=t.date_range,console.log(t.date_range)):(e(this,o),a.toggleClass("loader"),a.html(t.message))}}).fail(function(t){e(this,o),a.toggleClass("loader"),a.html("Sorry but there was an error retrieving schedule.")})}),t(document).on("click","a[data-target=mzDescriptionModal]",function(e){e.preventDefault();var a=t(this).attr("href"),s=this.getAttribute("data-staffName"),n=this.getAttribute("data-eventImage"),o=decodeURIComponent(this.getAttribute("data-classDescription")),i="<h3>"+this.innerHTML+" "+mz_mindbody_schedule.with+" "+s+"</h3>";return i+='<div class="mz-classInfo" id="ClassInfo">',i+='<p><img src="'+n+'" class="mz_modal_event_image_body">'+o+"</p>",i+="</div>",t("#mzModal").load(a,function(){t.colorbox({html:i,href:a}),t("#mzModal").colorbox()}),!1}),t(document).on("click","a[data-target=mzStaffScheduleModal]",function(e){e.preventDefault();var a=t(this).attr("href"),s=t(this).attr("data-staffName"),n=decodeURIComponent(t(this).attr("data-staffBio")),o=t(this).attr("data-staffImage"),i="<h3>"+s+'</h3><div class="mz-staffInfo" id="StaffInfo">';i+='<p><img src="'+o+'" class="mz_modal_staff_image_body">'+n+"</p>",i+="</div>",t("#mzModal").load(a,function(){t.colorbox({html:i,href:a}),t("#mzModal").colorbox()})})})}(jQuery),function(t){t(document).ready(function(t){function e(){var e=o.message?"<p>"+o.message+"</p>":"";o.wrapper='<div class="modal__wrapper" id="signupModalWrapper">',o.logged_in?(o.wrapper+=o.header,o.wrapper+='<div class="modal__content" id="signupModalContent">'+e+o.signup_button+"</div>",o.wrapper+=o.footer):(o.wrapper+=o.header,o.wrapper+='<div class="modal__content" id="signupModalContent">'+e+o.login_form+"</div>"),o.wrapper+="</div>",t("#cboxLoadedContent")&&t("#cboxLoadedContent").html(o.wrapper),o.message=void 0}function a(){o.content="",t("#signupModalContent").html="","processing"==o.action?o.content+=o.spinner:"login_failed"==o.action?(o.content+=o.message,o.content+=o.login_form):"logout"==o.action?(o.content+=o.message,o.content+=o.login_form,t("#signupModalFooter").remove()):(o.action,o.content+=o.message),t("#signupModalContent")&&t("#signupModalContent").html(o.content),o.message=void 0}function s(){t.ajax({dataType:"json",url:mz_mindbody_schedule.ajaxurl,data:{action:"mz_check_client_logged"},success:function(t){"success"==t.type&&(o.logged_in=1==t.message)}})}var n=(mz_mindbody_schedule.signup_nonce,mz_mindbody_schedule.atts),o=(n.locations[0].toString(),n.account?n.account:mz_mindbody_schedule.account,{logged_in:1==mz_mindbody_schedule.loggedMBO,action:void 0,target:void 0,siteID:void 0,nonce:void 0,location:void 0,classID:void 0,className:void 0,staffName:void 0,classTime:void 0,class_title:void 0,content:void 0,spinner:'<i class="fa fa-spinner fa-3x fa-spin" style="position: fixed; top: 50%; left: 50%;"></i>',wrapper:void 0,content_wrapper:'<div class="modal__content" id="signupModalContent"></div>',footer:'<div class="modal__footer" id="signupModalFooter">\n    <a class="btn btn-primary" data-nonce="'+mz_mindbody_schedule.signup_nonce+'" id="MBOSchedule" target="_blank">My Classes</a>\n    <a href="https://clients.mindbodyonline.com/ws.asp?&amp;sLoc='+mz_mindbody_schedule.location+"&studioid="+mz_mindbody_schedule.siteID+'>" class="btn btn-primary btn-xs" id="MBOSite">Manage on Mindbody Site></a>\n    <a class="btn btn-primary btn-xs" id="MBOLogout">Logout</a>\n</div>\n',header:void 0,signup_button:void 0,message:void 0,client_first_name:void 0,login_form:t("#mzLogInContainer").html(),initialize:function(e){this.target=t(e).attr("href"),this.siteID=t(e).attr("data-siteID"),this.nonce=t(e).attr("data-nonce"),this.location=t(e).attr("data-location"),this.classID=t(e).attr("data-classID"),this.className=t(e).attr("data-className"),this.staffName=t(e).attr("data-staffName"),this.classTime=t(e).attr("data-time"),this.class_title="<h2>"+this.className+" "+mz_mindbody_schedule.with+" "+this.staffName+"</h2><h3>"+this.classTime+"</h3><hr/>",this.header='<div class="modal__header" id="modalHeader"><h1>'+mz_mindbody_schedule.signup_heading+"</h1>"+this.class_title+"</div>",this.signup_button='<button class="btn btn-primary" data-nonce="'+this.nonce+'" data-location="'+this.location+'" data-classID="'+this.classID+'" id="signUpForClass">'+mz_mindbody_schedule.confirm_signup+"</button>"}});setInterval(s,5e3),t(document).on("click","a[data-target=mzSignUpModal]",function(a){a.preventDefault(),o.initialize(this),e(),t("#mzSignUpModal").load(o.target,function(){t.colorbox({html:o.wrapper,href:o.target}),t("#mzSignUpModal").colorbox()})}),t(document).on("submit",'form[id="mzLogIn"]',function(s){s.preventDefault();var n=t(this),i=(n.serializeArray(),{});t.each(t("form").serializeArray(),function(){i[this.name]=this.value}),t.ajax({dataType:"json",url:mz_mindbody_schedule.ajaxurl,type:n.attr("method"),context:this,data:{action:"mz_client_log_in",form:n.serialize(),nonce:i.nonce,classID:i.classID,staffName:i.staffName,classTime:i.classTime,location:i.location},beforeSend:function(){o.action="processing",a()},success:function(s){var n=(t(this).serializeArray(),{});t.each(t("form").serializeArray(),function(){n[this.name]=this.value}),"success"==s.type?(o.logged_in=!0,o.action="login",o.message=s.message,e()):(o.action="login_failed",o.message=s.message,a())}}).fail(function(t){o.message="ERROR SIGNING IN",a(),console.log(t)})}),t(document).on("click","#MBOLogout",function(e){e.preventDefault(),t.ajax({dataType:"json",url:mz_mindbody_schedule.ajaxurl,data:{action:"mz_client_log_out"},beforeSend:function(){o.action="processing",a()},success:function(t){"success"==t.type?(o.logged_in=!1,o.action="logout",o.message=t.message,a()):(o.action="logout_failed",o.message=t.message,a())}}).fail(function(t){o.message="ERROR LOGGING OUT",a(),console.log(t)})}),t(document).on("click","a#createMBOAccount",function(e){e.preventDefault();var s=(t(this).attr("href"),t(this).attr("data-nonce")),n=t(this).attr("data-classID");t.ajax({type:"GET",dataType:"json",url:mz_mindbody_schedule.ajaxurl,data:{action:"mz_generate_signup_form",nonce:s,classID:n},beforeSend:function(){o.action="processing",a()},success:function(t){"success"==t.type?(o.logged_in=!0,o.action="sign_up_form",o.message=t.message,a()):(o.action="error",o.message=t.message,a())}}).fail(function(t){o.message="ERROR GENERATING THE SIGN-UP FORM",a(),console.log(t)})}),t(document).on("submit",'form[id="mzSignUp"]',function(e){e.preventDefault();var s=(t(this).attr("href"),t(this)),n=(t(this).attr("data-nonce"),t(this).attr("data-classID"),s.serializeArray());t.ajax({type:"GET",dataType:"json",url:mz_mindbody_schedule.ajaxurl,data:{action:"mz_create_mbo_account",nonce:n.nonce,classID:n.classID,form:s.serialize()},beforeSend:function(){o.action="processing",a()},success:function(t){"success"==t.type?(o.logged_in=!0,o.action="login",o.message=t.message,a()):(o.action="error",o.message=t.message,a())}}).fail(function(t){o.message="ERROR CREATING ACCOUNT",a(),console.log(t)})}),t(document).on("click","#signUpForClass",function(e){e.preventDefault(),t.ajax({type:"GET",dataType:"json",url:mz_mindbody_schedule.ajaxurl,context:this,data:{action:"mz_register_for_class",nonce:o.nonce,siteID:o.siteID,classID:o.classID,location:o.location},beforeSend:function(){o.action="processing",a()},success:function(t){"success"==t.type?(o.action="register",o.message=t.message,a()):(o.action="error",o.message="ERROR REGISTERING FOR CLASS. "+t.message,a())}}).fail(function(t){o.message="ERROR REGISTERING FOR CLASS",a(),console.log(t)})}),t(document).on("click","a#MBOSchedule",function(e){e.preventDefault(),t.ajax({type:"GET",dataType:"json",url:mz_mindbody_schedule.ajaxurl,data:{action:"mz_display_client_schedule",nonce:o.nonce,location:o.location,siteID:o.siteID},beforeSend:function(){o.action="processing",a()},success:function(t){"success"==t.type?(o.action="display_schedule",o.message=t.message,a()):(o.action="error",o.message="ERROR RETRIEVING YOUR SCHEDULE. "+t.message,a())}}).fail(function(t){o.message="ERROR RETRIEVING YOUR SCHEDULE",a(),console.log(t)})})})}(jQuery);
//# sourceMappingURL=events-display.js.map
