module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "0zwD":
/***/ (function(module) {

module.exports = [{"Company":"Holded","Position":"UXUI Designer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/holded-technologies-s-l/jobs/536673-ux-ui-designer"},{"Company":"Rakuten","Position":"Digital Product Designer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1215124563/?eBP=JOB_SEARCH_ORGANIC&refId=02e109f3-9174-46cc-8399-f89d3955448a&trk=d_flagship3_search_srp_jobs"},{"Company":"Real Time Consultants","Position":"UI Designer (freelance)","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1217998985/?eBP=JOB_SEARCH_ORGANIC&refId=02e109f3-9174-46cc-8399-f89d3955448a&trk=d_flagship3_search_srp_jobs"},{"Company":"Nautal","Position":"USer Experience Researcher & Designer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1216195205/?refId=02e109f3-9174-46cc-8399-f89d3955448a&trk=flagship3_search_srp_jobs"},{"Company":"WebCargo","Position":"UXUI Designer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1193441635/?eBP=NotAvailableFromVoyagerAPI&refId=15c803ff-f047-484f-9eea-daae9c66ff64&trk=d_flagship3_search_srp_jobs"},{"Company":"Zeptolab","Position":"UIUX Designer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1178491326/?eBP=NotAvailableFromVoyagerAPI&refId=76b1b5a8-ad39-4ef5-9625-721998da3590&trk=d_flagship3_search_srp_jobs"},{"Company":"UserZoom","Position":"UX Intercation Design","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1169948345/?eBP=NotAvailableFromVoyagerAPI&refId=76b1b5a8-ad39-4ef5-9625-721998da3590&trk=d_flagship3_search_srp_jobs"},{"Company":"RedPoints","Position":"Frontend/UXUI ","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1178668855/?eBP=JOB_SEARCH_ORGANIC&refId=76b1b5a8-ad39-4ef5-9625-721998da3590&trk=d_flagship3_search_srp_jobs"},{"Company":"Drivo","Position":"UX Design","Status":"Active","Date":"04/2019","Link":"Link","Notes":"Ironhacker Working","LinkUrl":"https://www.linkedin.com/jobs/view/1169906492/?eBP=JOB_SEARCH_ORGANIC&refId=76b1b5a8-ad39-4ef5-9625-721998da3590&trk=d_flagship3_search_srp_jobs"},{"Company":"Polymatica","Position":"UXUI Designer (Freelancer) ","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1191882064/?eBP=JOB_SEARCH_ORGANIC&refId=54dfc40f-2a3a-4873-a6af-a6cc9f601da1&trk=d_flagship3_search_srp_jobs"},{"Company":"SIngular Cover","Position":"UI/UX Designer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1192398825/?eBP=JOB_SEARCH_ORGANIC&refId=54dfc40f-2a3a-4873-a6af-a6cc9f601da1&trk=d_flagship3_search_srp_jobs"},{"Company":"NextLink","Position":"UX Designer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1200828040/?eBP=CwEAAAFp2CBoKKdUMWOoXppD7MoToYof9LPIm6DXmUlXzmCEAfFpG4OidRNmXSu3RPgkFRDZ-w8eBZRTN8Ty35SJfAa3pQ9GT0O8gGY_fQ1jNZXNdgbWytS4hcdOeCQVc8WcT0VUjBM0NQjNIZl94YUcGKI4xBtpDxuwQN8S5WytPar813uga_ST6fwa_s6qC7WeVTE2gAWv6QUnk1WZq-bybEQ0WkMDYUHUWA-S6svvmym5JsUdCpDNLNGCK7E0BzC8e1GRgMbmyqBhGjLGibqR5_qdIXVFZ5XB6EBk_HNsQprnEwVKRy_fQd1AbRj9fJmWSSD4kUywqgBzfHda7g8oz98vxm7QcJUQQzUhLsb3ZAYUdJCbdHeOWa3eGiJSOJRO&refId=54dfc40f-2a3a-4873-a6af-a6cc9f601da1&trk=d_flagship3_search_srp_jobs"},{"Company":"LovetoKnow","Position":"Web & Mobile Apps UX/UI designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/lovetoknow-media-bcn/jobs/483062-web-mobile-apps-ux-ui-designer"},{"Company":"Doctoralia","Position":"Product Researcher","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/doctoralia/jobs/495090-product-researcher"},{"Company":"Doctoralia","Position":"Interaction Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/doctoralia/jobs/495070-interaction-designer"},{"Company":"Quipu","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/quipu/jobs/24264-ux-ui-designer"},{"Company":"Xceed","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/xceed/jobs/129632-ux-ui-designer"},{"Company":"Front Digital","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/front-digital-1/jobs/496119-ui-ux-designer"},{"Company":"KingEclient","Position":"UXUI Designer (intern)","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1180323460/"},{"Company":"Nestle","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1173160309/"},{"Company":"OPM Responses","Position":"UX Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1165107492/"},{"Company":"Uvinum","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1168724692/"},{"Company":"Qustodio","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1168498136/?eBP=JOB_SEARCH_ORGANIC&refId=7d50c8cb-b58b-48c2-8408-0910091ad7d7&trk=d_flagship3_search_srp_jobs"},{"Company":"Molina Visuals ","Position":"UX Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.emprego.pt/en/jobs/show/ux-designer-barcelona/28631100161478702680608063901?utm_medium=feed&utm_source=neuvoo"},{"Company":"Itnig (Camaloon)","Position":"UXUI Product Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1178521176/?eBP=NotAvailableFromVoyagerAPI&refId=5e92d820-66c1-4e71-90ba-b9383bd5f825&trk=d_flagship3_search_srp_jobs"},{"Company":"C14","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1129137572/?eBP=NotAvailableFromVoyagerAPI&refId=2afbbae3-bd5c-4899-9205-12559c9c17a0&trk=d_flagship3_search_srp_jobs"},{"Company":"NPAW","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1167202736/?eBP=NotAvailableFromVoyagerAPI&refId=2afbbae3-bd5c-4899-9205-12559c9c17a0&trk=d_flagship3_search_srp_jobs"},{"Company":"Tindeo","Position":"UI Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1158296003/?eBP=JOB_SEARCH_ORGANIC&refId=ed2b5729-71a6-4770-8835-82180ccdc417&trk=d_flagship3_search_srp_jobs"},{"Company":"Roche","Position":"UX Designer trainee","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1134098435/?eBP=JOB_SEARCH_ORGANIC&refId=ed2b5729-71a6-4770-8835-82180ccdc417&trk=d_flagship3_search_srp_jobs"},{"Company":"DMI","Position":"UX Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1121289405/?eBP=JOB_SEARCH_ORGANIC&refId=ed2b5729-71a6-4770-8835-82180ccdc417&trk=d_flagship3_search_srp_jobs"},{"Company":"King","Position":"UI Artist Intern","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1168109123/?eBP=JOB_SEARCH_ORGANIC&refId=ed2b5729-71a6-4770-8835-82180ccdc417&trk=d_flagship3_search_srp_jobs"},{"Company":"LeadTech","Position":"UX Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1130929064/?eBP=JOB_SEARCH_ORGANIC&refId=ed2b5729-71a6-4770-8835-82180ccdc417&trk=d_flagship3_search_srp_jobs"},{"Company":"Sabis","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1166535855/?eBP=CwEAAAFpkCVZOoDmRBVw8qfX-xpbi8tkTsmmq14-4XtsRVBTfAggHLO6bShaNfXZp1CtV9hwjDR259qn63CsUxlv4ikZg09Fs4BR6pIiKDenKGaqN0_9bpCP4UWLcb9cNPiS-mnmCdE0rqHwtWQVlOkuNGils74FCoNG4SFVpfdZogN9hZCOHPe5s-qZ91CSEBHkQ1BMexATdjINkvv4JkD63h817Hx0ErWQTTd964o4P2o3O-aSzC9wPp-iOw2HmjLkOUN55LFLflr5d2IFsMtr0Jt3-n1RKTGcevL_2JqygoYHf_jHPgGu3ruQXSAhB1n6U6S0Dc9kYzYmTdAHFR0IQ-X6zRkTRD77kpwvHTDRvD-S7kewPYxuEnC7UZl1gE9Nbw0K1YN6&recommendedFlavor=IN_NETWORK&refId=94264db6-a42f-4e24-9d9b-fcc0b69675e9&trk=d_flagship3_job_details"},{"Company":"Movetia","Position":"UXUI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1165541134/?eBP=JOB_SEARCH_ORGANIC&refId=ed2b5729-71a6-4770-8835-82180ccdc417&trk=d_flagship3_search_srp_jobs"},{"Company":"King","Position":"UI Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1122970674/?eBP=JOB_SEARCH_ORGANIC&refId=3f64ed1c-7fc2-48a3-aece-3cef71a18181&trk=d_flagship3_search_srp_jobs"},{"Company":"eDreams","Position":"UX Designer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1144401503/?eBP=JOB_SEARCH_ORGANIC&refId=3f64ed1c-7fc2-48a3-aece-3cef71a18181&trk=d_flagship3_search_srp_jobs"},{"Company":"Roche","Position":"UX Designer trainee","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1134098435/"},{"Company":"Doctoralia","Position":"UX Researcher","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1090672766/?eBP=JOB_SEARCH_ORGANIC&refId=3f64ed1c-7fc2-48a3-aece-3cef71a18181&trk=d_flagship3_search_srp_jobs"},{"Company":"LeadTech","Position":"UI Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1130927434/"},{"Company":"LeadTech","Position":"UX Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1130929064/"},{"Company":"MyTheresa","Position":"UX Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1105092157/"},{"Company":"LovetoKnow","Position":"Web & Mobile Apps UX/UI designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1074583320/"},{"Company":"Gartner","Position":"UX Writer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1035165385/?refId=ad99a26b-81de-4817-b495-bd74159a848f&trk=flagship3_search_srp_jobs"},{"Company":"Xceed","Position":"UXUI Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/xceed/jobs/129632-ux-ui-designer"},{"Company":"Quipu","Position":"UXUI DEsigner","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/quipu/jobs/24264-ux-ui-designer"},{"Company":"GFI","Position":"UXUI Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1121047193/"},{"Company":"Multiplica","Position":"UX Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1099975221/"},{"Company":"LeadTech","Position":"Product Owner","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1116020630/"},{"Company":"Wallapop","Position":"Product Owner","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071640636/"},{"Company":"21Buttons","Position":"UX Researcher","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1081168700/"},{"Company":"Rentals United","Position":"Product UX Researcher ","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1103123279/?eBP=JOB_SEARCH_ORGANIC&refId=9d6c93e8-3c09-4c00-9c5b-2eacdde54cef&trk=d_flagship3_search_srp_jobs"},{"Company":"MR. Noow","Position":"UX Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1092013534/"},{"Company":"Meetmaps","Position":"UI/UX Product Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1091942058/"},{"Company":"Tiendeo","Position":"UX/UI Designer (Conocimientos CSS&HTML)","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1091269664/?eBP=CwEAAAFo29K6n77aM-9O0yzn0EL-7WCNRXwSXJSqFK-MhYD9mlt_WVUAf0dbANDs5uvOfDnvARRWF34aP41VBDWWISaFVo5d04Xa22bOSyUuEimHmG1Jeaw71d1x0uMxWSA34gikPp9hha3A6G24Trwh0l-QVwRJq1OyFA3ossudEFFToRjqcyN96xsPxeRcgfshsNXs74i3dOHI1r3ELx9IkLPK4YOOj6GG7lUNO0tRWTjQdEfItDgoQ--rOzhikq-g5whBTyrOBSRXwEMO-XsgmVKoji8YYj16EdRBM_7FSrPupzvWT39xX9G65HrqHoXTF6XkmS2kxZQBWGCO5jmuZW9V43KI0zBF&refId=999951c4-62bb-42a3-8eee-dc66aded652a&trk=d_flagship3_job_details"},{"Company":"Movetia","Position":"UX/UI Designer ","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1105067212/?eBP=CwEAAAFo29K6noAKrdW4u-YcUmMO9R1ZO9MDP-krXjV0bPn1aFhcUFxYwV27zFEmYbgXP2-gDGc2-B02RIgQ0_WWtbSKA9COMtAQ8muRGfpm9h2r1K5eExlukeQIlHmPyzf5ovzEmyLj3gN10Gj2i18_TLT2EDjTXKMU6HsH-fa7xnRTcmIJWvB9XbLjqZ4vvpQ1ZpplYnufo0I-hX2tEBALOKSJqcxopWVfrAtpGVy3rIXSjiGRAMM-SboRJ66TeLDLNSmV4RDuxqZPOA4xk1oNsqKRa6OjdRoi06EBV-LIvMCS6Rp6CVcrSPK8mDDOGKp5PgNn83Swqn00S3NQ2ws0GGMYorVWGOHEuCM&refId=999951c4-62bb-42a3-8eee-dc66aded652a&trk=d_flagship3_job_details"},{"Company":"Mur&Marti","Position":"UX Research / Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1096890431/"},{"Company":"Naturitas","Position":"UX/UI Designer - Intern","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1102959632/"},{"Company":"Naturitas","Position":"Visual / UI Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1102957986/"},{"Company":"Zigurat Global Institute of Technology Ubicación de la empresa","Position":"Junior Ux-Graphic Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1100021861/?refId=97db3171-1e0d-4d9e-9938-3e621a6dc231&trk=flagship3_search_srp_jobs"},{"Company":"Gameloft","Position":"Jr UI Artist","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1060668735/?refId=97db3171-1e0d-4d9e-9938-3e621a6dc231&trk=flagship3_search_srp_jobs"},{"Company":"Ubeeqo","Position":"Junior UXUI Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://neuvoo.es/view/?jpos=9&jp=1&nb=b&id=d49582412e53&lang=es&k=ux+junior&splitab=1&action=emailAlert"},{"Company":"Toro Development","Position":"Diseñador UI (junir/mid)","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://neuvoo.es/view/?jpos=18&jp=1&nb=b&id=4bb0722e9b9b&lang=es&k=ux+junior&splitab=1&action=emailAlert"},{"Company":"Interactive Experience","Position":"Diseñador junior UXUI","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://neuvoo.es/view/?jpos=7&jp=1&nb=b&id=6035db34cd55&lang=es&k=ux+junior&splitab=1&action=emailAlert"},{"Company":"Qustodio","Position":"Product UX Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071644211/?eBP=JOB_SEARCH_ORGANIC&refId=769977f7-9718-457b-815d-34a17781baec&trk=d_flagship3_search_srp_jobs"},{"Company":"TravelClick","Position":"Web Designer UXUI","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1089674593/"},{"Company":"Camaloon","Position":"UXUI Product Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":""},{"Company":"Doctoralia","Position":"UX Researcher","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1090672766/?eBP=CwEAAAFouCNRVPp_6wyyMFOcCYtRgpTMVMvins-31HOGL_b_EJNVkPU2O-7KWigjGuYcJI6BzWzlGRFS6RhLzoWAEUA8XdvxukvpMcvV6DyfLTWJInddkeNKqzu9-0s3vF_5amqJeBCKSUAwTQ7p2MOralBZydggmjeFhb728_L2XXZ6ywswcxRUsrOMMBuNBPC-GQHQS-39V4qVoyrjYnpiCaBrVjrTDKayNccYht7x6DKBL5LZfpFBrATfiOATZrrQoVReC00iI-FDEGuq9nSjZZT44w13HTscXJGvSMxObZ5Kv970RrUi280GIVSf0r3l8yv3EnUFXz5DRbOO1PPEpRiGajdCpBwqgepp6snl8MxhZz1monmUJWBQ3KeRaTa2HHQCQ8EkERud&recommendedFlavor=IN_NETWORK&refId=107e5221-635d-432a-a563-97feedb9d8e8&trk=d_flagship3_job_details"},{"Company":"Safe365","Position":"UXUI Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1085744349/?refId=e6cc261a-f02c-4d4b-b5a0-6b706c063e91&trk=flagship3_search_srp_jobs"},{"Company":"BSC-CNS","Position":"UXUI Designer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://neuvoo.es/view/?id=c693553e6d74&pag=1&pos=26&utm_medium=email&source=neuvoo-email&tl1=sdp_v7&tl2=c_default&tl3=d_default_en_v7&tgroup=MTA&current_group=instant_full&email_source=view-b&refid=5jygcewiy4&email_datein=2018-10-05T07%3A33%3A33Z&email_datesent=2019-02-04T01%3A41%3A25Z&utm_source=gmail.com&lang=es"},{"Company":"DMI","Position":"Junior UXUI Designer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/948448722/?eBP=NotAvailableFromVoyagerAPI&refId=b002f255-b792-48cd-9a2e-7d67f83d8ebb&trk=d_flagship3_search_srp_jobs"},{"Company":"RocaSalvatella","Position":"Junior UI Designer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1076000951/"},{"Company":"Zurich Insurance","Position":"UXUI Designer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1067740606/"},{"Company":"LedTech","Position":"UI Designer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1072066296/"},{"Company":"Casumo ","Position":"Product Design","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071685974/"},{"Company":"Polymatica","Position":"UI Designer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071742262/"},{"Company":"Naturitas","Position":"UX UI Designers","Status":"Not open ","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1058743127/"},{"Company":"Schibsted","Position":"UX Designer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/992762467/?refId=f553075f-8d4c-404d-a0d4-fba4bd15db01&trk=flagship3_search_srp_jobs"},{"Company":"KingEclient","Position":"Diseñador UXUI","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071678744/?eBP=CwEAAAFodPXtXV2oEu4yMmkTjUVXwAihRMXRumjbdn_258MZ0ap_8lSU-TkO_aGSo4P32L-gYJkaB8A7LefFZfWbWouNqc20rOgGpdf_XHCqFn7rmg5_RxFbBsG_XUQhf2_TeXtl_OwNEi5FctWUG90mkAfEvefwuBHzAbdOh9oe3LfEkZIr2H_TWW3mmJyoC3ixfwnmEUmjP5f2W7kXspJJlqR00n-AGJfy1rnlY9rvxf7ZT_d0dDd-RBkaoYA8QR8_CWnucOLwkO2-ovYthQTON5YSmqAp6PAITl3cBDvyBt5z5ZWCbrqv4m_2D18YvcJ35hwkxOP9tG3HUQXLX0UIzHdrJALCMebDstd8_FS3Crr2nRAhwCVVTkCA0UAy4ThW&refId=f553075f-8d4c-404d-a0d4-fba4bd15db01&trk=d_flagship3_search_srp_jobs"},{"Company":"Mango","Position":"UX Researcher","Status":"Not open ","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/959317259/?eBP=JOB_SEARCH_ORGANIC&refId=f553075f-8d4c-404d-a0d4-fba4bd15db01&trk=d_flagship3_search_srp_jobs"},{"Company":"Gartner","Position":"UX Writer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1035165385/?eBP=JOB_SEARCH_ORGANIC&refId=f553075f-8d4c-404d-a0d4-fba4bd15db01&trk=d_flagship3_search_srp_jobs"},{"Company":"Whisbi","Position":"Technical/UX Writer","Status":"Not open ","Date":"01/2019","Link":"Link","Notes":"Ironhack Working","LinkUrl":"https://www.linkedin.com/jobs/view/1074093831/?eBP=JOB_SEARCH_ORGANIC&refId=f553075f-8d4c-404d-a0d4-fba4bd15db01&trk=d_flagship3_search_srp_jobs"},{"Company":"21Buttons","Position":"UX Researcher","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1081168700/?eBP=JOB_SEARCH_ORGANIC&refId=f553075f-8d4c-404d-a0d4-fba4bd15db01&trk=d_flagship3_search_srp_jobs"}];

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/jobCard/JobCard.js








var JobCard_jobCard =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(jobCard, _Component);

  function jobCard() {
    Object(classCallCheck["a" /* default */])(this, jobCard);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(jobCard).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(jobCard, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-3919948387" + " " + "job-card"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-3919948387"
      }, this.props.position), external_react_default.a.createElement("p", {
        className: "jsx-3919948387"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-3919948387"
      }, "Company: "), this.props.company), external_react_default.a.createElement("p", {
        className: "jsx-3919948387"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-3919948387"
      }, "status: "), this.props.status), external_react_default.a.createElement("p", {
        className: "jsx-3919948387"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-3919948387"
      }, "date: "), this.props.date), external_react_default.a.createElement("button", {
        className: "jsx-3919948387"
      }, external_react_default.a.createElement("a", {
        href: this.props.link,
        target: "_blank",
        className: "jsx-3919948387"
      }, "See more")), external_react_default.a.createElement(style_default.a, {
        id: "3919948387"
      }, [".job-card.jsx-3919948387{border:2px solid #F8C0C8;margin:3vw;}", "button.jsx-3919948387{background:#F8C0C8;height:6vh;width:100%;border:none;}", "a.jsx-3919948387{color:white;font-size:20px;-webkit-text-decoration:none;text-decoration:none;}"]));
    }
  }]);

  return jobCard;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./data/jobsApril.json
var jobsApril = __webpack_require__("j3o4");

// EXTERNAL MODULE: ./data/uxuiJobsApril.json
var uxuiJobsApril = __webpack_require__("0zwD");

// CONCATENATED MODULE: ./components/searchBar/SearchBar.js








var SearchBar_SearchBar =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(SearchBar, _Component);

  function SearchBar() {
    Object(classCallCheck["a" /* default */])(this, SearchBar);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SearchBar).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(SearchBar, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-774333090"
      }, external_react_default.a.createElement("input", {
        onChange: this.props.onChange,
        placeholder: "search...",
        className: "jsx-774333090" + " " + "search-bar"
      }), external_react_default.a.createElement(style_default.a, {
        id: "774333090"
      }, [".search-bar.jsx-774333090{border:1px solid #ffb8c6;width:44vw;height:25px;border-radius:5px;}"]));
    }
  }]);

  return SearchBar;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Index; });














var pages_Index =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      devJobsArray: jobsApril,
      uxJobsArray: uxuiJobsApril,
      searchArr: [],
      jobType: 'dev',
      search: false,
      searchResult: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClickDev", function () {
      _this.setState({
        jobType: 'dev'
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClickUx", function () {
      _this.setState({
        jobType: 'ux'
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (e) {
      if (e.target.value.length > 0) {
        _this.setState({
          searchResult: true
        });
      } else {
        _this.setState({
          searchResult: false
        });
      }

      var newSearch = [];

      if (_this.state.jobType === 'dev') {
        newSearch = _this.state.devJobsArray.filter(function (job) {
          return job.Position.toLowerCase().includes(e.target.value.toLowerCase());
        });
      } else {
        newSearch = _this.state.uxJobsArray.filter(function (job) {
          return job.Position.toLowerCase().includes(e.target.value.toLowerCase());
        });
      }

      _this.setState({
        searchArr: newSearch
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-860516464" + " " + "main"
      }, external_react_default.a.createElement("div", {
        className: "jsx-860516464" + " " + "header"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-860516464"
      }, "Say hi to your new job ", external_react_default.a.createElement("span", {
        role: "image",
        className: "jsx-860516464"
      }, "\uD83D\uDC4B")), external_react_default.a.createElement(SearchBar_SearchBar, {
        onChange: this.handleChange
      }), external_react_default.a.createElement("div", {
        className: "jsx-860516464" + " " + "filter-container"
      }, external_react_default.a.createElement("button", {
        onClick: this.handleClickDev,
        className: "jsx-860516464" + " " + "filter-btn"
      }, "Dev"), external_react_default.a.createElement("button", {
        onClick: this.handleClickUx,
        className: "jsx-860516464" + " " + "filter-btn"
      }, "UX/UI"))), this.state.searchResult ? external_react_default.a.createElement("div", {
        className: "jsx-860516464" + " " + "body search"
      }, this.state.searchArr.map(function (job, i) {
        return external_react_default.a.createElement(JobCard_jobCard, {
          key: job.Company + "".concat(i),
          position: job.Position,
          company: job.Company,
          status: job.Status,
          date: job.Date,
          link: job.LinkUrl
        });
      })) : external_react_default.a.createElement("div", {
        className: "jsx-860516464" + " " + "body"
      }, this.state.jobType === 'dev' ? this.state.devJobsArray.map(function (job, i) {
        return external_react_default.a.createElement(JobCard_jobCard, {
          key: job.Company + "".concat(i),
          position: job.Position,
          company: job.Company,
          status: job.Status,
          date: job.Date,
          link: job.LinkUrl
        });
      }) : this.state.uxJobsArray.map(function (job, i) {
        return external_react_default.a.createElement(JobCard_jobCard, {
          key: job.Company + "".concat(i),
          position: job.Position,
          company: job.Company,
          status: job.Status,
          date: job.Date,
          link: job.LinkUrl
        });
      })), external_react_default.a.createElement(style_default.a, {
        id: "860516464"
      }, [".header.jsx-860516464{text-align:center;}", "button.jsx-860516464{cursor:pointer;background:#f8c0c8;height:6vh;width:100%;border:none;}", "button.jsx-860516464 a.jsx-860516464{display:block;width:100%;}", ".filter-btn.jsx-860516464{width:20%;margin:10px;font-size:20px;color:white;padding:10px 0;}"]));
    }
  }]);

  return Index;
}(external_react_["Component"]);



/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "j3o4":
/***/ (function(module) {

module.exports = [{"Company":"Booklyng","Position":"Frontend Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/booklyng/jobs/323054-front-end-developer"},{"Company":"MarsBased","Position":"Fullstack Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/marsbased/jobs/281876-full-stack-developer-full-time-remote-position"},{"Company":"MarsBased","Position":"Frontend Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/marsbased/jobs/281877-frontend-developer-full-time-remote-position"},{"Company":"Aggero","Position":"Fullstack Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/aggero-1/jobs/390849-full-stack-developer"},{"Company":"Catalonia Hotels","Position":"Frontend Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1216430823/?eBP=CwEAAAFqIBbHAhnDNXBqkYwrI8UnuClX9BiTgfsCKZ-D-UCPrC1rHt4pp8SkHJRS6lQLxQcY6cnr0sBu5-WYtRf1PhcsvcvMe2-Zz3CRO4ug8PKviyAXkdFxeWiPLIHvTvFL0oqt-6EasoZIZk5OzfldDNHe6q5G0xaQTuI3Age0GcMztHk2zGBApLA46HMUuIu406Abd03udLSqwWNyaJ4_ngMpbaQUH4sEfcvcf3GUswLMXlmvJ2FDUZrgnLCMEYIsxrbMF8-HYOFl2Pmht2UGTg7yZu9VbaJuIp-zesNtFBfff2JyGdHKnJH0S1i5jHeBOEYZ1IMmGC2jfJiK4NvBoQrDYFPxBErHvFwV27MV5C5Nsu3-g_vBwmEYtOLkE1zVfqfNLKqW&recommendedFlavor=HIDDEN_GEM&refId=044c5e1a-6c15-4d57-bd02-3b2c8c7db071&trk=d_flagship3_job_details"},{"Company":"Music List","Position":"Software Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1203739420/?eBP=CwEAAAFqIBfLh_4fX4mGu7xIIZIJwL7glsfxFGo0nHMEplRJoFs79IGVlazBikpF3f1uqwYUQD2SDGrNifMIFxrh_WIDzQ4Hf_lzFb1hx5ec775hhQRemN7zDP4jA1_n6rG7LLvXK12U-gYj-nn5sxRSAmxU-_WR3U_EZEjEF9PKeBFdM7FGuNTrb-8hA3VM0z3yOYRaLbhWXhCk6OmNAjBYlmND1fYtkJMxAmCCFIfPXSzQW02jCH7eAKeJM8QOx5AYBLcqKNTlLs2G05BZ-dKrgAdj_L1gDxNZ6bFRapkF_E10AK26sGg470BCHeRBq3v2uB3tdWOZMH61Cy91M5kIW2Ni67II1bEXpBf-mXc-rQald-ibx5YXKwC4CiT0uF2r5MiLS8BQGzmy1DE8DWfahpfzUzaC28jK&recommendedFlavor=IN_NETWORK&refId=2bc54d4a-4094-4677-80dd-17985d855c88&trk=d_flagship3_job_details"},{"Company":"Immfly","Position":"Frontend Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1214993722/?eBP=CwEAAAFqIBfLhkC6wVEHcYwWtH4buZ1jCjaupx2stYfx9KT4IbPpbCyONrPJ4HGeb7KbSuoSGa0QlWnDil8sXMUexlEXfIzshniuL5wTmNXuHW7ydGPOG6iVax0fz0_t9cWX09ptfsbASHxtrhYIPp87x7GKMC15__SUZL4PB2yC2YkWtxyrqgxH_lljbU-0BRsnAy5zB0rQo7GKPVsHtnhdAmey7dSs-5AzJ10g4H9no41RXx7LiIL_HtnpCV9xqAYldLZgVuPPIRgDfwgIfbun6KOvUhVla10fHwnaR8iXhWKX0oN277Ovf3SRTsYDKoO5i9Kq7heQY2qUsEcIwqAO-0a7OeJn40K9J4FI8M_fHBipPd3AX4CDQOMayOolUd1o165Pk0equCkJ3j5KOAd2hXH_7_wAUw&recommendedFlavor=IN_NETWORK&refId=2bc54d4a-4094-4677-80dd-17985d855c88&trk=d_flagship3_job_details"},{"Company":"Toptal","Position":"Frontend Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1203739666/?eBP=CwEAAAFqIBbHAtHbXsSbZ4CJKuYSyPRm3FH2APJ-oT5r8OIWraZcdswikpmEeDYStfYsfJ9NGLP_k7ZLZYoUB9ByQGdJDWuJ88uoprOIxdUqVirWf4wxITKCecEhaxTkIrpYVFZ781RfebYe5N4CtG2Qsa9_EfBTUAiM7VzAQ9DMdc3qr1VB8j0N6tgX0VcbwcNWVY7Z3dIU60SwPWX0lN-2AOcupXzY_F968P71kQEa64H_2nfMDshcfmriQfPTmp4TgU3SW2PhJBl7f6qepSQRcdp-JCzTEavfoHes6Z3kUb2BFwoCHNV5xbVgxLe2TzIummD5q8D2GgnJ3MtFjrbGKReWEfE-skGVKc3S-wHJQzYK1eWN-UgEFVsZre2HnLPCjLVBMStP&recommendedFlavor=COMPANY_RECRUIT&refId=044c5e1a-6c15-4d57-bd02-3b2c8c7db071&trk=d_flagship3_job_details"},{"Company":"Touché ","Position":"Frontend Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1207421218/?eBP=CwEAAAFqIBbHAgve6LR1xvhXYOum_dTzOtPc2QbeIeAYeuhDiI5-859tLcU-d2Hs-aFEbbebiA5gOdvgwWk7GCSuuvnY1l7GC70FoRj325yhqsrHcjKb7k0XP2bGct34uz3I-4MK-9MQrUX-lcldiQijqo-hkdZL0xwVfGKmqln-kUfGeXUxFQ7V9Aq92YM9QETaQxvF2APDvyNTBYyYn9pjnTrTVAfEyIbr5TdI8bXAXcj_qF-_WqdX3kbrUWIyS_PzcxyFHwgawSxg2yDh8iaVs-Dr2pbqzS10tSqE0jbvLGWoY01-69O5ZLAZuWZKqtMueJEdrbFwweUBQRTzdtrYXKkayaulfU7lEsZS9W4FVpuCeBBYdF0GLzHUmuBVVhP7mtS2MA&refId=044c5e1a-6c15-4d57-bd02-3b2c8c7db071&trk=d_flagship3_job_details"},{"Company":"Typform","Position":"Fullstack Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1155133222/?eBP=JOB_SEARCH_ORGANIC&refId=00713f48-1492-49dd-839b-ea6a250fb9e0&trk=d_flagship3_search_srp_jobs"},{"Company":"Ohpen","Position":"React Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1193600141/?eBP=CwEAAAFp2BgM5fyE0w8W-sljEEg8Sm4F7sudCozCCTrpk2Zvb6WkZ-RoqhX7-hzyvfQA1jGkEJ1L0oneDW6h9dK0LpDMGQGkd8MltznCFgQ16Y6t9wzbd79JTV3phxHwwCqGBgbLtn_XADwv2jTXVutYHlhsFjV_Xw6o0f_IO4IQc3ezBGoIR2NSpPGpfpXhlrYeuBIrefzPeAmG_aB54GKZ-PXqClmkcElCHJD7yTVkkB2Pt3Q3f59wI4mkBfz9YgrxNi91TR05smsYnPRWyd18pdY2Wbp1hZtO1ONYO3zSNBbg52QR1S4zhbtnOpVg3sihFwFvAVVoZod65F87bM1T0ZyhBszB_71-K15qUEhw7hwq39vZsTyUxFLC_5xzvg&refId=00713f48-1492-49dd-839b-ea6a250fb9e0&trk=d_flagship3_search_srp_jobs"},{"Company":"ClearPeaks","Position":"Fullstack Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1180314470/"},{"Company":"Kernel Analytics","Position":"Web Developer","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1129772123/?eBP=JOB_SEARCH_ORGANIC&refId=5779c013-38ef-443f-9eee-3a43393d7373&trk=d_flagship3_search_srp_jobs"},{"Company":"Vincle","Position":"Front-End Developer (Typescript / Javascript)","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1183475782/?eBP=JOB_SEARCH_ORGANIC&refId=5779c013-38ef-443f-9eee-3a43393d7373&trk=d_flagship3_search_srp_jobs"},{"Company":"Deloitte","Position":"Programador Junior (sin experiencia)","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1193610758/?eBP=JOB_SEARCH_ORGANIC&refId=5779c013-38ef-443f-9eee-3a43393d7373&trk=d_flagship3_search_srp_jobs"},{"Company":"CornerJob","Position":"Frontend (React/NodeJS) ","Status":"Active","Date":"04/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1173109435/?eBP=CwEAAAFp2Be6KWiWHZ0JbOHKi7u87V-QzgymuS8IRBN_42y2Xwy8aW_UzcmtYozn7EGSKvz6r1CCTjgsQq4kTS5PayBcg95pcdh0yvp1mq5Ls736zHmmonvSl_Uz1KJfsoXASdfWquWRca2fZYbd9EbSc6KOVECwh3jtNmcQIgFaz-NNdCXW29swOyFSRZD5Y7-SXoPjmWBCEzznbI4nBQld9vuE7xyDryKgsdzV7v_kRVnWa_VET-B36729fXMpIfZH3AIHwMfFFvvRpNnMWLcMC3xSEL_JZu1g4QPwJCj0joHKFIdvTIHAe9YuvBrp90IRv5CXEDFOCzL9iz9nzcnOqdEMA3mnrUxTl3-pK2GwrEBCsOAv4_YSzsYnuWKTIFvm&refId=80849379-6edb-458c-b1d0-891785fb8b1c&trk=d_flagship3_search_srp_jobs"},{"Company":"Atrapalo","Position":"Frontend Developer (React)","Status":"Active","Date":"03/2019","Link":"Joppy!","Notes":"","LinkUrl":""},{"Company":"Quipu","Position":"Fullstack Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/quipu/jobs/50834-full-stack-developer?src=rec"},{"Company":"Flexidao","Position":"Fullstack Developer (Redux)","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/flexidao/jobs/310959-full-stack-developer-knowledge-of-elm-or-redux?src=rec"},{"Company":"Vilynx","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/vilynx/jobs/281576-frontend-engineer?src=rec"},{"Company":"Passnfly","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/passnfly/jobs/317011-frontend-developer?src=rec"},{"Company":"8wires","Position":"React Frontend Developer & UXUI","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://angel.co/8wires/jobs/278576-react-frontend-developer-ui-ux"},{"Company":"Netrivals","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1126629658/"},{"Company":"Huxley","Position":"Frontend Developer - React(FREELANCER) ","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1169097762/?eBP=JOB_SEARCH_ORGANIC&refId=ec8c73d0-cead-47d8-83b2-f79ddcb1f8db&trk=d_flagship3_search_srp_jobs"},{"Company":"RedPoints","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1178668855/?eBP=JOB_SEARCH_ORGANIC&refId=ec8c73d0-cead-47d8-83b2-f79ddcb1f8db&trk=d_flagship3_search_srp_jobs"},{"Company":"LeadTeach","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1183662683/"},{"Company":"Stardivarius","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1181316190/?refId=ec8c73d0-cead-47d8-83b2-f79ddcb1f8db&trk=flagship3_search_srp_jobs"},{"Company":"eDreams","Position":"JavaScript Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1150644240/?eBP=CwEAAAFpkCFv2IspQ9TjGwR5HqOl4gGK0eqpBp3outfmLIMyBHpDIhczFPHpn-pDRKLNRKstyFEKZEaa6n3ajFveRhXM2lx8inUz2oIccI8n4_E9KBwS5JgRHcnxSJOjesRGh3fd9dX3dZ4pNWFkH6hcfcQpUNP7u5UwMfIgCdNhrngGteNRjRflX1YnXSYAVUzqEmfhAutGGRqWBzYUA2wO-wdEMmbtMFeE_IwW-G3LRg-lU5RoUOwUEEwKQCPiiZpGeze2ZAlSKjJTMqsnLhDqIQh_aXjmpRrkk3HEtWsdUJoPKIdxsnMDT5Db-UyYqIEsKdeTDGjT1Krqwg8h_CAWUa2svR_OinZAVAIbwtjQEeBmRqHm9PI3LM_1ulYie3vQin0&recommendedFlavor=HIDDEN_GEM&refId=aeb97040-bc70-467b-b57f-2955429bdd76&trk=d_flagship3_job_details"},{"Company":"Netquest","Position":"Fullstack Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1164971522/?eBP=JOB_SEARCH_ORGANIC&refId=22eca1c1-e4e5-4473-8a53-32b10874f745&trk=d_flagship3_search_srp_jobs"},{"Company":"King","Position":"JavaScript Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1175030869/?eBP=JOB_SEARCH_ORGANIC&refId=22eca1c1-e4e5-4473-8a53-32b10874f745&trk=d_flagship3_search_srp_jobs"},{"Company":"Xing","Position":"RoR Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1061651400/?eBP=CwEAAAFpkAMqYIUDbY_TghUAp0INRGxnBiW2YbGJRiFoWuBoUCYj1c5v3XH6XFQnQ_LeWR7Ctqooacoeyb5x8EUEa8pJvvVD1puCPDWBrbNWLtgrQX3ffby8KzgoC-hFwcRaeWqNbQY9DvN0JrF8ilUWEMTMmGZbjb2H_sjvixIzvAm-89M6nHIapnHLJu489smdufcUiMOIwnoZUsApJNtJw4ZV9EQqVPe-JMqGh7hwE3l1o9dWZFDeOtug3gPh3y8KUwQNKW5FZe4kFO82yUws9n-9hEiJRfDfb8CQEuhxO4LoC63NU3WMa5znYfx8qYFJKoZrZb6bnIKhbqIXkNr0k_g9sSp875YKW42rRQrnC_v1Nzkw3dZgaMkvOf6CuiVdn8SqKGz6baaxuFXN96BFbw&refId=22eca1c1-e4e5-4473-8a53-32b10874f745&trk=d_flagship3_search_srp_jobs"},{"Company":"Whisbi","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1162733347/?eBP=JOB_SEARCH_ORGANIC&refId=22eca1c1-e4e5-4473-8a53-32b10874f745&trk=d_flagship3_search_srp_jobs"},{"Company":"Privalia","Position":"Software Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1129225418/?eBP=CwEAAAFpkB0t7onTGUxTLL4chNOjAkX-NUxTHMgFT2camhzjy80I_PlJgD5UuPFEQwaLP4AjVXb0h8i-rsbQOtdouqj3XjG1V9H0qwxswjahIEQacSi1_Hzh14F0vS_C9GUralbjxE429_lJtg_o0W2kjrWRs_7q3rO2Uu0gRTGGfDcHp6jy-5zCCFstm6lrA1OJiA64cbon7nCBJ8gJWbtdXfZO7n7IFEfecj7OZSJmydq5nuEUR1iabpsH1gq4LtK-g9YJboYSEzEHc2r2O12YP4XGRRiLtDttcb1sYAZBxchLhCy4ehkpXfA_CT-v5jY0vLcfJ_jdzyW-W-IOqvQFzM60WmNCexNUzMTbH3cT8IQE0ORJRhpUXkPSgesa3TngKJDK6Bl9&recommendedFlavor=IN_NETWORK&refId=c5b9d26b-f1fe-4a23-8742-4ed58e143584&trk=d_flagship3_job_details"},{"Company":"DMI","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1153115297/?eBP=CwEAAAFpkB0zrBhHuzTwdhF7KYFfpj5wrDIv-vv799LsY7g7HodsKoeXfqePzitxryvaX9-YoW6w1Ssv5maYxFzUjzQ9BA1E0hLwFN33kSDmFlX0D9rKSs6iOa0V5dCWac1MNz0vpltWp66jSKb0yFGUQ6s7csbYNMBfZsZX_zrKWDb5rsRc9auUxMp-4HsW5GlBsA0K_qTn-8tuB1vf174XKofw0_naxwzYIVnAU1kHVSyHdREYwfacx_-wZYBG6fpxSpJ2m7YqdSQEP5Fra0DKLoLFfaSd8jsWqsD1qZa6LCv8JCH-Pz6gF73jYxNDCkv_teOyCWnusykAZebyKvGWDgauu-jBfNmG8IVAXFTP_TJ8m-oPvLV-MhGCpQA0P2o&recommendedFlavor=HIDDEN_GEM&refId=c5b9d26b-f1fe-4a23-8742-4ed58e143584&trk=d_flagship3_job_details"},{"Company":"Hosco","Position":"Fullstack Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1134643071/?eBP=JOB_SEARCH_ORGANIC&refId=ea98e52c-9006-4446-a401-e2d7950527a5&trk=d_flagship3_search_srp_jobs"},{"Company":"MyTaxi","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1005486021/?eBP=JOB_SEARCH_ORGANIC&refId=ea98e52c-9006-4446-a401-e2d7950527a5&trk=d_flagship3_search_srp_jobs"},{"Company":"Shopery","Position":"JavaScript Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1144809312/?eBP=JOB_SEARCH_ORGANIC&refId=5cb23c73-4578-4b62-a11c-7a156fbe36d7&trk=d_flagship3_search_srp_jobs"},{"Company":"Netcentric","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1162702239/?eBP=JOB_SEARCH_ORGANIC&refId=5cb23c73-4578-4b62-a11c-7a156fbe36d7&trk=d_flagship3_search_srp_jobs"},{"Company":"King","Position":"Developer Intern","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1161092813/?eBP=JOB_SEARCH_ORGANIC&refId=5cb23c73-4578-4b62-a11c-7a156fbe36d7&trk=d_flagship3_search_srp_jobs"},{"Company":"Doctoralia","Position":"Frontend Developer","Status":"Active","Date":"03/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1145212305/?eBP=CwEAAAFpkAS47Qb4VxHI_0okCjjg7sRaCyQ2qLdodm3C5PfVOQIaqXiKaI2_-sGRYaMXTo3UhCAOvzdvKD4wrJ-ywTQh-ubpdOT8nvO5WGakE6iXQ2EI3ZJO7wV6jaSrpLofghOm_bGo9GSRWWEnrjrEvWklV6U3ZtFO3BKwe13vzdi1ye1rvXWhIktuGA0Co7omCtUslx7xF8TnShW41RM-rJOMi4Mw08fd2USbCdHYztHJyfYStA3--l-7K-gX2iv0vhsVGCeqOIGIEny3zyUyLpihvYL2TUNHkVOuoSZNZqQTpwK94aZyxnEBwiugpGnaVRMaVtVy1Lbs0p02Q4DN6ykG40SMtuRidnP20XitTlxW_Ut7rQFqhkXRJ0zZP2xlofc6_xCzXp65FSoQ6VNEBazI-_l-MA&recommendedFlavor=HIDDEN_GEM&refId=8904cbeb-843e-44ee-8d36-476fbc2430cb&trk=d_flagship3_job_details"},{"Company":"Ofertia","Position":"Frontend Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1109327284/"},{"Company":"Xceed","Position":"Frontend Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1115457851/"},{"Company":"Altran","Position":"Programador React","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071646516/?refId=eb6d7645-e4c6-4950-859d-4dd1b1adea88&trk=flagship3_search_srp_jobs"},{"Company":"Bmat","Position":"Frontend Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://bmat.bamboohr.com/jobs/view.php?id=79"},{"Company":"Ficosa","Position":"Fullstack Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071687000/"},{"Company":"GFT","Position":"Programador Junior","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1091162506/?eBP=CwEAAAFo29uohWlopG3bWWsfFJ_mhAwbYxkUJrE2uzNpiDg3owpYlwFBx37vDYHPyheGHt8MIY2Byxjf81hCrlpHpilQgcL0_OifWNg-r1dsoUIH5Y2NxERbldl1A3uojOn8e5bHEYFK5NrHyJo2gdTgQ3gbj2hFFU5hfTQvrwMj3AKFoHAYznqN0zrvamlXvAtfRaPm8cYdFW5GnabqV1ym4O1rUijlknd_Hyhk5zosPB6ky7TdsjwGpv6HDWRjfzHiA-vlqfWM7f9UvrqMhB77nwNptIcdxX025ys3AdUbvMNri6YGZVRRVjUk0FNmuGF8GaRwMaw92zSpq5r6QqQRMjWPFziOMXdAnZV7n2wewZUOiRubNwLsJs7Il9u842sUNFRySi0So7c&refId=01c864fe-5ad7-4e33-82c1-3a19bf1735c9&trk=d_flagship3_job_details"},{"Company":"Deloitte","Position":"Programador Junior","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1040779241/?eBP=CwEAAAFo29uohFGwzq0RmcTO2Yt5ouomxzCKFGR-9Ef36F-Etn-jYUsnv50m5UXBeIqkj2H9NAQcDFoNtXoFg5b1JozBRXIOu0TFJmzJQWkggw7nwZtE091D1jb9U6VUNxBfKUSPTY6FIMkshVII_6_nlyiRoB1_QZaZo2eFPMt9VI4bjQdhQRlCfzMRFokJGxd2YOBdVrGKNwIti0vp-HOQ5Yo6r4Ji8g8LsVXwBAgD8BJdqC8nyvz0rl6Xht_fiOvn0gQRa1gVYFhqpuHDd34gcCx6EJ3Ry-ZCpER-u6gFwzeNge9I0i2osBKoXb-TNznJEmukh2EeGAgf2MslAKn0jknOsPswlBVD&refId=01c864fe-5ad7-4e33-82c1-3a19bf1735c9&trk=d_flagship3_job_details"},{"Company":"Netquest","Position":"Programador Junior","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071692091/"},{"Company":"GOC Networking","Position":"Programador Junior","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1068501694/?refId=d947dec3-5e47-41c0-8197-0934f747413d&trk=flagship3_search_srp_jobs"},{"Company":"Tiendeo","Position":"UX/UI Designer (Conocimientos CSS&HTML)","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1091269664/?eBP=CwEAAAFo29K6n77aM-9O0yzn0EL-7WCNRXwSXJSqFK-MhYD9mlt_WVUAf0dbANDs5uvOfDnvARRWF34aP41VBDWWISaFVo5d04Xa22bOSyUuEimHmG1Jeaw71d1x0uMxWSA34gikPp9hha3A6G24Trwh0l-QVwRJq1OyFA3ossudEFFToRjqcyN96xsPxeRcgfshsNXs74i3dOHI1r3ELx9IkLPK4YOOj6GG7lUNO0tRWTjQdEfItDgoQ--rOzhikq-g5whBTyrOBSRXwEMO-XsgmVKoji8YYj16EdRBM_7FSrPupzvWT39xX9G65HrqHoXTF6XkmS2kxZQBWGCO5jmuZW9V43KI0zBF&refId=999951c4-62bb-42a3-8eee-dc66aded652a&trk=d_flagship3_job_details"},{"Company":"Whisbi","Position":"Frontend Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"Ironhacker working ","LinkUrl":"https://www.linkedin.com/jobs/view/1057183304/?eBP=CwEAAAFouEpdPNbUf0PZWWAAMax_HIc-65m_JltjvCKC2dTLrHgs9LH_am7mobacizb9RaR595tios9YnSYwWEBeRFEPKq_H_JGGENLmK8bv4yychE5ET2R2-qOQy0U8dhdIkgbl9IzW6AiD92QCTH3FH1Dh_RWuf7EFdqUvDedzlInHkqQjoGG4QVSPcqk0NZiRAoY-Uj-BcxxjVtcWqImCeWTlwmL8_fPkAe5LW-uRcE-tNoormeR57wj-uB_o3YAxAeT6sE55Bx1ga6qkDBs6XhiYwHLiD6R2Y1WOZ_7lhaLGRmHwo0dp6ehW116hoLvS_BrXFE3dnSjyUfMzonWt1chSIHId&recommendedFlavor=HIDDEN_GEM&refId=50579245-2998-4ea5-ab9a-d356259d63c6&trk=d_flagship3_job_details"},{"Company":"RedPoints","Position":"Frontend Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071633340/?eBP=CwEAAAFouEpdPH--QKUj8DzQ1M_DsE3KjGkVRMUgN_vBBRJ-rM87Jtz6mQzdoS-tMM15RTNfY9inqxpy5OF90Lmm2qpZ4mdtAKCBV4jvlEeJwSgKZHTnCefjHgOrH1Ns04oA3isMf1LmfF2mi8VqZxjxPQhPLoyaZCc9BA4-Xaz-Wcve22MmVNsqxiGdotH6BeRm2LSp2FZ5pif6P7ZdYj3vYb87IMa8UNyXhXgAF8xCPM5yq9pHujfR3FAubum6RxqqfHNWFvt_u0ibRbS4y6LNPEPpdGVLYt6zwOItuojg9pDZT-L6Gh77DgAksa4u4AZ12Eh87qSOEZWJCFywJ-6Z7_-s8YH6&recommendedFlavor=IN_NETWORK&refId=50579245-2998-4ea5-ab9a-d356259d63c6&trk=d_flagship3_job_details"},{"Company":"Setesca","Position":"Frontend Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1090680108/?eBP=CwEAAAFouEpdJIi5mX-U2kC3KZHC4gZTKkHO6siq0UMR1AvgqrNiwcMWgnJcf_9vheSIvqefDu4P3GGudXITnQLMrim9C2ZxZkPMD71hlppI70TAaVF2zdzO--oQpPEh4kKvPgcnFOU6l_pPUugCs8-_tgF9iMWq7U_gxqVvlw1UkqQ9dNTvR3czlMOCnxHqcsT6doRtad8yyPzzAfGJFNLIMsu8Bv_Xi37_en_oRqwsIm7uxdWCwSYBFay5OZw2wXfbZLH_EARxq9Xo-QgI-nsNfniz-1PtRaHeytWRBCpIu6RuQ_Hz50V576uAAC6kiFhGanlhPjsU94DDB_zw3rrciloiXEHFc3danM8&recommendedFlavor=IN_NETWORK&refId=9fa702b3-ff4e-4bed-8501-30cc044e3585&trk=d_flagship3_job_details"},{"Company":"Pentasia","Position":"Frontend Developer ","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1090832215/?eBP=CwEAAAFouEpdJE1010Jl_Qz67VkLaKeBzPl4A0UQvcHWuhDl4ghBRjxCWumIhoURqCKlN1ykdcjpAWfBj8xfeyNEHuEmVjK9nHcqDpUCcP-JiR1f0jAbQwoqJMsudrH7bbkDcT7iY8ISWtZYM12L3Mj-lVYusAYUZndBOLECDYO7I48KJp5abKK-Af0KGjV7U8PO-1R9rcrBVi66bY1w7HzZQLU0eV5Wx4lDMxEzZvSHnBIYfPJKfxRbWFt557O0DoU1_vOA4VOlb910e8lrQEsD0wni8u7Be7_UEfT4CpcQn8xQoRfBI9pDAREf9AEVITAUSRXKsm-eszmwrVcVRgcf2fRgTShTWKe3tRU&recommendedFlavor=HIDDEN_GEM&refId=9fa702b3-ff4e-4bed-8501-30cc044e3585&trk=d_flagship3_job_details"},{"Company":"Alten","Position":"Junior Frontend Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1074476166/?eBP=NotAvailableFromVoyagerAPI&refId=88b47735-6760-43b6-a07e-40c7a89183c2&trk=d_flagship3_search_srp_jobs"},{"Company":"Flumotion","Position":"Fullstack Developer","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1093614033/?eBP=CwEAAAFouEn51MrOZTsSxTPjLxS5BpD98KsjHKrAOBwMo-kwfPywysV6CoIJySRIxiOK6nWirNg40SOcDMt8C9LrAfT7pZSpFcTrl_BA4eMTpmmZ9qdwVGkb0TR4uCfA-SRSUxuNK8EQ0vgWYZKMeW_fNNhDAe7_HaGX_y82k1UAKn0_Z1jcxJg_CsaGpx5-nTU8vj2dVXQM5Qo523O-ZYrJzKG_oHZjR47nkIE_0YXwtAW94XL9pUo0buAvHK8OLT2U_gigZqnjXoGRe8aUd0634UqUcCaLxAI6G-h8JE2mAPJr06_ogxzXVJveByps_VIdKGfRMMX2LAQZgHX_OPnxw15Tx_g_nwSm52ZCLJzesvnG4CELGZKtvAYkQWqDY8gmi17MrEXfnZ2JmyqH7l9YwrsuelSC0g&recommendedFlavor=HIDDEN_GEM&refId=96925427-e6a5-49f2-8915-134d5113eb14&trk=d_flagship3_job_details"},{"Company":"Clubberize","Position":"Junior Fullstack","Status":"Active","Date":"02/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1086904888/?eBP=NotAvailableFromVoyagerAPI&refId=88b47735-6760-43b6-a07e-40c7a89183c2&trk=d_flagship3_search_srp_jobs"},{"Company":"SpaceBoost","Position":"Frontend Junior Developer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/900799150/"},{"Company":"Sopra Steria","Position":"Programador Junior","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1091004183/"},{"Company":"Maria Barcelona","Position":"Fullstack Developer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1067457467/"},{"Company":"Urbiotica","Position":"Frontend Developer ","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1061008369/"},{"Company":"MyTaxi","Position":"Frontend Developer ","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1005486021/"},{"Company":"Furgo ","Position":"React Developer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1017733556/"},{"Company":"Nnergix","Position":"Backend Developer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1048131934/"},{"Company":"Bodas.net","Position":"Maquetador Web","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1071276658/?eBP=JOB_SEARCH_ORGANIC&refId=18a84e7e-3989-44b7-a391-e93061a2d7a3&trk=d_flagship3_search_srp_jobs"},{"Company":"NPAW","Position":"Junior Frontend Developer","Status":"Active","Date":"01/2019","Link":"Link","Notes":"Ironhacker working ","LinkUrl":"https://www.linkedin.com/jobs/view/994746350/?eBP=NotAvailableFromVoyagerAPI&refId=473ae459-c48b-4385-88b7-73f546e8c702&trk=d_flagship3_search_srp_jobs"},{"Company":"Datumize","Position":"Frontend Developer ","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/956167898/?eBP=NotAvailableFromVoyagerAPI&refId=473ae459-c48b-4385-88b7-73f546e8c702&trk=d_flagship3_search_srp_jobs"},{"Company":"The Efficient - A Nossa Rede","Position":"Frontend Developer ","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1078774344/?eBP=NotAvailableFromVoyagerAPI&refId=e8e2ee8c-26e3-4eec-99a0-714e72659f59&trk=d_flagship3_search_srp_jobs"},{"Company":"Tiendeo","Position":"Maquetador(a) Web","Status":"Active","Date":"01/2019","Link":"Link","Notes":"","LinkUrl":"https://www.linkedin.com/jobs/view/1049660266/?eBP=JOB_SEARCH_ORGANIC&refId=f553075f-8d4c-404d-a0d4-fba4bd15db01&trk=d_flagship3_search_srp_jobs"}];

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });