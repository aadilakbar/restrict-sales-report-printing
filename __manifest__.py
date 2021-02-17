# -*- coding: utf-8 -*-
{
    'name': "Restrict Sale Report Print",
    'summary': """
        Restrict PDF Report Printing In Sale Order
        """,

    'description': """
        - Disable printing sale order before approved state
    """,

    'author': "GITS",
    'website': "http://www.gits-ae.com",
    'category': 'Specific Industry Applications',
    'version': '1.0',
    'depends': ['report', 'sale'],

    'sequence': 4,

    'data': [
        'web_assets.xml',
    ],
    'installable': True,
    'application': True
}
