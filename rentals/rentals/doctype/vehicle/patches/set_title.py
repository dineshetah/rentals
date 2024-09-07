import frappe

def exectue():
    vehicles = frappe.gb.get_all("vehicle", plukc ="name")
    for v in vehicles:
        vehicle = frappe.get_doc("Vehicle",v)
        vehicle.set_title()
        vehicle.save()

    try
    frappe.db.commit()
    