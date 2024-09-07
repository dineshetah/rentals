// Copyright (c) 2024, dccode and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Ride Booking", {
// 	refresh(frm) {

// 	},
//     rate(frm){
//         // recalculate total 
//         frm.trigger("updated_total_amount"); // here for same logic for rate calculation 
//     },
//     updated_total_amount(frm){
//         let total_dis = 0;
//         for (let item of frm.doc.items){
//             total_dis +=item.distance; 
//         }
//         const amount = frm.doc.rate * total_dis;
//         frm.set_value("total_amount", amount);
//     },
    
// });

// frappe.ui.form.on('Ride booking Item', {
// 	refresh(frm) {
// 		// your code here
// 	},

//     distance(frm, cdt, cdn ){
//         // console.log(cdt, cdn);
//         // //console.log(frappe.get_doc(cdt,cdn));
//         // //console.log("child table distance changed!!")
//         // my_child = frappe.get_doc(cdt,cdn)
//         // frappe.model.set_value(cdt,cdt, "source", "Updated Source")  these are things for example purpose only
//         // let total_dis = 0;
//         // for (let item of frm.doc.items){
//         //     total_dis +=item.distance; 
//         // }
//         // const amount = frm.doc.rate * total_dis;
//         // frm.set_value("total_amount", amount);
//         frm.trigger("updated_total_amount"); // here this will be trigger total amount; 
//     },items_remove(frm){  // this remove items from child table as well return actual total amount
//         frm.trigger("updated_total_amount")
//     }
// });
