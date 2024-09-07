// Copyright (c) 2024, dccode and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm) {
        console.log("running load ...");
    },
    setup(frm) {
        console.log("setup...");
    },
    refresh(frm) {
        console.log("on refresh...");

        // Add custom buttons only when the status is "New"
        if (frm.doc.status === "New") {
            frm.add_custom_button("Accept", () => {
                // Set status to "Accepted"
                frm.set_value("status", "Accepted");
                // Save the form
                frm.save();
            }, "Actions");

            frm.add_custom_button("Reject", () => {
                // Set status to "Rejected"
                frm.set_value("status", "Rejected");
                // Save the form
                frm.save();
            }, "Actions");
        }
    }
});
