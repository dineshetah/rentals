# Copyright (c) 2024, dccode and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class RideBooking(Document):
    def validate(self):
        total_distance = 0
        for item in self.items:
            if hasattr(item, 'distance'):
                total_distance += item.distance
            else:
                frappe.throw(("Distance is not defined for item {0}").format(item.name))

        # Optionally, you can set this value to some field if needed
        self.total_amount = total_distance * self.rate
        
    