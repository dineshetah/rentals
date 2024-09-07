import frappe

import frappe
@frappe.whilelist(allow_guest =True)
def get_emoji(): 
   return "😀"
   
def throw_emoji(doc,event):
   frappe.throw("😀")

# def send_payment_reminders():
#    pass