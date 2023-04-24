Ext.onReady(() => {

    Ext.define('Invoices', {
        extend: 'Ext.data.Model',
        fields: [
            {
                name: 'sl_no', type: 'number'
            }, {
                name: 'invoice_number', type: 'string'
            }, {
                name: 'stock_code', type: 'string'
            }, {
                name: 'description', type: 'string'
            }, {
                name: 'quantity', type: 'number'
            }, {
                name: 'invoice_date', type: 'string'
            }, {
                name: 'unit_price', type: 'number'
            }, {
                name: 'customer_id', type: 'string'
            }, {
                name: 'country', type: 'string'
            }, {
                name: 'is_open', type: 'number'
            }
        ]
    })

    let advSearchDialogCreator = (id, name, storeID) => {
        let dialog = {
            xtype: 'container',
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'fit',
                        align: 'center',
                        pack: 'center'
                    },
                    flex: 1,
                    margin: '10 0 10 0',
                    items: [
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    layout: {
                                        type: 'hbox',
                                        align: 'center',
                                        pack: 'center'
                                    },
                                    height: 80,
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Invoice Number',
                                            name: `${name}_invoice_number`,
                                            id: `${id}_search_invoice_number`,
                                            margin: '10 10 10 10 ',

                                        },
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    layout: {
                                        type: 'hbox',
                                        align: 'center',
                                        pack: 'center'
                                    },
                                    height: 80,
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Customer ID',
                                            name: `${name}_customer_id`,
                                            id: `${id}_search_customer_id`,
                                            margin: '10 10 10 10 ',
                                        },
                                    ]
                                }
                            ]


                        },
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    margin: '10 0 10 0',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Clear',
                            margin: '0 10 0 10',
                            width: 100
                        },
                        {

                            xtype: 'button',
                            text: 'Search',
                            margin: '0 10 0 10',
                            width: 100

                        }
                    ]
                }
            ]

        }
        return dialog;
    }

    let openInvoicesStore = Ext.create('Ext.data.Store', {
        storeId: 'openInvoiceStore',
        model: 'Invoices',
        pageSize: 6,
        proxy: {
            type: 'memory',
            enablePaging: true,
            data: [
                {
                    'sl_no': 25903,
                    'invoice_number': '77777',
                    'stock_code': '7',
                    'description': 'Testing-add',
                    'quantity': 7,
                    'invoice_date': '12/01/2022',
                    'unit_price': 7,
                    'customer_id': '7',
                    'country': 'India',
                    'is_open': 0
                },
                {
                    'sl_no': 25899,
                    'invoice_number': 'C577486',
                    'stock_code': '23198',
                    'description': 'PANTRY MAGNETIC SHOPPING LIST',
                    'quantity': 52,
                    'invoice_date': '11/20/2011 11:59',
                    'unit_price': 1.45,
                    'customer_id': '15533',
                    'country': 'United Kingdom',
                    'is_open': 0
                },
                {
                    'sl_no': 25898,
                    'invoice_number': 'C577481',
                    'stock_code': '23198',
                    'description': 'POSTAGE',
                    'quantity': 1,
                    'invoice_date': '11/20/2011 11:39',
                    'unit_price': 18,
                    'customer_id': '12778',
                    'country': 'Netherlands',
                    'is_open': 0
                },
                {
                    'sl_no': 25897,
                    'invoice_number': 'C577399',
                    'stock_code': '22138',
                    'description': 'BAKING SET 9 PIECE RETROSPOT',
                    'quantity': 1,
                    'invoice_date': '11/18/2011 17:15',
                    'unit_price': 4.95,
                    'customer_id': '13895',
                    'country': 'United Kingdom',
                    'is_open': 0
                },
                {
                    'sl_no': 25890,
                    'invoice_number': 'C577390',
                    'stock_code': '23401',
                    'description': 'RUSTIC MIRROR WITH LACE HEART',
                    'quantity': 1,
                    'invoice_date': '11/18/2011 17:01',
                    'unit_price': 6.25,
                    'customer_id': '18276',
                    'country': 'United Kingdom',
                    'is_open': 0
                },
                {
                    'sl_no': 25889,
                    'invoice_number': 'C577389',
                    'stock_code': '23108',
                    'description': 'SET OF 10 LED DOLLY LIGHTS',
                    'quantity': 2,
                    'invoice_date': '11/18/2011 16:59',
                    'unit_price': 6.25,
                    'customer_id': '13381',
                    'country': 'United Kingdom',
                    'is_open': 0
                },
            ]
        }
    })

    openInvoicesStore.load();
    const createAdvanceSearchButton = (id, text) => {
        let advSearchButtonComponent = Ext.create('Ext.button.Button', {
            id: `${id}`,
            border: false,
            iconAlign: 'right',
            iconCls: 'x-fa fa-caret-down',
            text: `${text}`,
            cls: 'adv-search-button',
            style: { backgroundColor: "#f5f5f5" },
            margin: 10,
            listeners: {
                click: (e) => {
                    e.iconCls === 'x-fa fa-caret-down' ? e.setIconCls('x-fa fa-caret-up') : e.setIconCls('x-fa fa-caret-down')
                }
            }
        })
        return advSearchButtonComponent;
    }


    const panelTabCreater = (title, id, name, storeID) => {
        let button_id = '';
        let button_name = '';
        if (id === 'all_invoices_grid') {
            button_id = 'all_invoice_adv_search_button';
            button_name = 'Advance Search';
        } else if (id === 'open_invoices_grid') {
            button_id = 'open_invoice_adv_search_button';
            button_name = 'Advance Search for Open Invoice';
        } else if (id === 'close_invoices_grid') {
            button_id = 'close_invoice_adv_search_button';
            button_name = 'Advance Search for Close Invoice';
        } else {
            button_id = 'deleted_invoice_adv_search_button';
            button_name = 'Advance Search for Deleted Invoice';
        }
        let createdTab = {
            title: `${title}`,
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    border: false,
                    items: [
                        {
                            xtype: 'splitter',
                            flex: 1

                        },

                        (createAdvanceSearchButton)(button_id, button_name),

                    ]
                },
                (advSearchDialogCreator)(id, name, storeID),
                {
                    // Open Invoice Grid
                    title: `${title}`,
                    id: `${id}`,
                    name: `${name}`,
                    region: 'north',
                    xtype: 'grid',
                    split: true,
                    store: Ext.data.StoreManager.lookup(storeID),
                    columns: [{
                        text: 'Sl No',
                        flex: 1,
                        dataIndex: 'sl_no'
                    }, {
                        text: 'Invoice Number',
                        flex: 2,
                        dataIndex: 'invoice_number'
                    }, {
                        text: 'Stock Code',
                        flex: 1,
                        dataIndex: 'stock_code'
                    }, {
                        text: 'Description',
                        flex: 3,
                        dataIndex: 'description'
                    }, {
                        text: 'Quantity',
                        flex: 1,
                        dataIndex: 'quantity'
                    }, {
                        text: 'Invoice Date',
                        flex: 1,
                        dataIndex: 'invoice_date'
                    }, {
                        text: 'Unit Price',
                        flex: 1,
                        dataIndex: 'unit_price'
                    }, {
                        text: 'Customer ID',
                        flex: 1,
                        dataIndex: 'customer_id'
                    },
                    {
                        text: 'Country',
                        flex: 1,
                        dataIndex: 'country'
                    },
                    {
                        text: 'Is Open',
                        flex: 1,
                        dataIndex: 'is_open'
                    }
                    ],

                    selModel: {
                        selType: 'checkboxmodel',
                        mode: 'MULTI',
                        checkOnly: true
                    },
                    dockedItems: [{
                        xtype: 'pagingtoolbar',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        store: Ext.data.StoreManager.lookup(storeID),
                        dock: 'top',
                        displayInfo: true,
                        displayMsg: 'Displaying {0} - {1} of {2} &nbsp;',
                        emptyMsg: "No Records to Display!&nbsp;",
                        items: [{
                            xtype: 'button',
                            text: 'Add',
                            id: `addButton_${name}`,
                            iconCls: 'x-fa fa-plus-circle',
                            disabled: false,
                            listeners: {
                                click: () => {
                                    console.log('add button clicked in : ' + name);
                                }
                            }
                        }, {
                            xtype: 'button',
                            text: 'Edit',
                            id: `editButton_${name}`,
                            iconCls: 'x-fa fa-pencil-square-o',
                            disabled: true,
                            listeners: {
                                click: () => {
                                    console.log('edit button clicked in : ' + name);
                                }
                            }
                        }, {
                            xtype: 'button',
                            text: 'Delete',
                            disabled: true,
                            id: `deleteButton_${name}`,
                            iconCls: 'x-fa fa-trash',
                            listeners: {
                                click: () => {
                                    console.log('delete button clicked in: ' + name);
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Approve',
                            disabled: true,
                            id: `approveButton_${name}`,
                            listeners: {
                                click: () => {
                                    console.log('approved button clicked in : ' + name);
                                }
                            }
                        }]
                    }]
                }
            ]
        }
        return createdTab;

    }

    let parentContainer = Ext.create('Ext.container.Container', {
        style: { borderStyle: 'solid', borderWidth: '40px', borderColor: 'lightgrey' },
        id: 'parentContainer',
        border: true,
        layout: {
            type: 'fit',
            pack: 'center',
            align: 'center',
        },
        items: [
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    align: 'center',
                },
                border: false,
                bodyPadding: 10,
                items: [
                    {
                        xtype: 'image',
                        height: 60,
                        padding: 2,
                        src: "../assets/HRCLogo1.png",
                    },
                    {
                        xtype: 'splitter',
                        flex: 1,
                        padding: 2,
                    },
                    {
                        xtype: 'image',
                        height: 60,
                        padding: 2,
                        src: "../assets/XYZProducts.png",
                    },
                    {
                        xtype: 'splitter',
                        flex: 1,
                        padding: 2,
                    },
                    {

                        xtype: 'panel',
                        layout: 'hbox',
                        border: false,
                        margin: '0 20,0,20',
                        items: [
                            {

                                xtype: 'label',
                                text: 'Welcome',
                                padding: 2,
                                style: { fontSize: '15px' },
                            },
                            {
                                xtype: 'splitter',
                                flex: 1,
                            },
                            {

                                xtype: 'label',
                                text: 'Highway to IR',
                                padding: 2,
                                style: { fontSize: '15px', fontWeight: 'bold' },

                            },
                        ]


                    },
                ]
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    align: 'center',
                },
                height: 70,
                bodyPadding: 20,
                border: false,
                bodyStyle: { "background-color": "#5fa2dd" },
                items: [
                    {
                        xtype: 'label',
                        text: 'Invoice Management',
                        style: { fontSize: '20px', fontWeight: 'normal', color: 'white' },
                        flex: 1,
                    },
                ]
            },
            {
                xtype: 'tabpanel',
                border: false,
                activeTab: 1,
                layout: {
                    type: 'fit',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    (panelTabCreater)('All Invoices', 'all_invoices_grid', 'all_invoices', 'openInvoiceStore'),
                    (panelTabCreater)('Open Invoices', 'open_invoices_grid', 'open_invoices', 'openInvoiceStore'),
                    (panelTabCreater)('Close Invoices', 'close_invoices_grid', 'close_invoices', 'openInvoiceStore'),
                    (panelTabCreater)('Deleted Invoices', 'deleted_invoices_grid', 'deleted_invoices', 'openInvoiceStore'),
                    {
                        title: `Analytics`,
                        items: [
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox',
                                    align: 'center',
                                    pack: 'center'
                                },
                                border: false,
                                items: [
                                    {
                                        xtype: 'splitter',
                                        flex: 1

                                    },

                                    (createAdvanceSearchButton)('analytics_adv_search_button', 'Analytics Advance Search'),

                                ]
                            },
                            (advSearchDialogCreator)('analytics', 'analytics_tab', 'openInvoiceStore')
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                border: false,
                bodyPadding: 20,
                items: [
                    {
                        xtype: 'label',
                        text: 'Copyright 2023 Highradius. All Rights Reserved',

                    }
                ]
            }
        ]
    },);
    Ext.create('Ext.container.Viewport', {
        layout: {
            type: 'anchor',
            pack: 'center',
            align: 'center'
        },
        items: [parentContainer],
        renderTo: Ext.getBody()

    })
})