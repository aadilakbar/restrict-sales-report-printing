# -*- coding: utf-8 -*-

from odoo import models, fields, api, _


class SaleOrder(models.Model):
    _inherit = 'sale.order'

    def get_current_state(self, order_id):
        order = self.env['sale.order'].browse(order_id)
        return order and order.state or False