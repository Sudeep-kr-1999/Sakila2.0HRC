Ext.onReady(() => {
    console.log("application started");
    const addWindowModalCreator = (id) => {
        return Ext.create('Ext.window.Window', {
            id: `${id}_${ADD_INVOICE_WINDOW_ID}`,
            modal: true,
            title: 'Add',
            titleAlign: 'center',
            layout: {
                type: 'fit',
            },
            width: 500,
            autoDestroy: false,
            closeAction: 'close',
            items: [{
                xtype: 'form',
                border: false,
                layout: {
                    type: 'anchor',
                    pack: 'center',
                    align: 'center'
                },
                id: `${id}_${ADD_WINDOW_FORM_ID}`,
                bodyPadding: 10,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Sl No',
                    name: 'sl_no',
                    id: `${id}_${ADD_SL_NO_TEXTFIELD_ID}`,
                    emptyText: 'Sl No',
                    anchor: '100%',
                    value: 123,
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Invoice Number',
                    name: 'invoice_number',
                    id: `${id}_${ADD_INVOICE_NUMBER_TEXTFIELD_ID}`,
                    emptyText: 'Invoice Number',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Stock Code',
                    name: 'stock_code',
                    id: `${id}_${ADD_STOCK_CODE_TEXTFIELD_ID}`,
                    emptyText: 'Stock Code',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Quantity',
                    name: 'quantity',
                    id: `${id}_${ADD_QUANTITY_TEXTFIELD_ID}`,
                    emptyText: 'Quantity',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'datefield',
                    fieldLabel: 'Invoice Date',
                    name: 'invoice_date',
                    id: `${id}_${ADD_INVOICE_DATE_TEXTFIELD_ID}`,
                    emptyText: 'Invoice Date',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Unit Price',
                    name: 'unit_price',
                    id: `${id}_${ADD_UNIT_PRICE_TEXTFIELD_ID}`,
                    emptyText: 'Unit Price',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Customer ID',
                    name: 'customer_id',
                    id: `${id}_${ADD_CUSTOMER_ID_TEXTFIELD_ID}`,
                    emptyText: 'Customer ID',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Country',
                    name: 'country',
                    id: `${id}_${ADD_COUNTRY_TEXTFIELD_ID}`,
                    emptyText: 'Country',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Description',
                    name: 'description',
                    id: `${id}_${ADD_DESCRIPTION_TEXTFIELD_ID}`,
                    emptyText: 'Description',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'isOpen',
                    name: 'is_open',
                    id: `${id}_${ADD_IS_OPEN_TEXTFIELD_ID}`,
                    emptyText: 'isOpen',
                    anchor: '100%',
                    value: 0,
                    allowBlank: false
                }
                ],

                buttons: [{
                    text: 'Save',
                    formBind: true,
                    id: `${id}_${ADD_WINDOW_SAVE_BUTTON_ID}`,
                    listeners: {
                        click: (e) => {
                            console.log(Ext.getCmp(`${id}_${ADD_WINDOW_FORM_ID}`).getForm().getValues());
                            console.log('add button save clicked validate the data and go for final submission in the database');
                        }
                    }
                }, {
                    text: 'Cancel',
                    id: `${id}_${ADD_WINDOW_CANCEL_BUTTON_ID}`,
                    listeners: {
                        click: (e) => {
                            Ext.getCmp(`${id}_${ADD_INVOICE_WINDOW_ID}`).close();
                        }
                    }
                }],
                buttonAlign: 'center',
            }],
            listeners: {
                close: (e) => {
                    Ext.getCmp(`${id}_${ADD_WINDOW_FORM_ID}`).getForm().reset(true);
                    Ext.getCmp(id).getSelectionModel().deselectAll();
                    Ext.getCmp(id).getView().refresh();
                    Ext.getCmp(`${id}_${ADD_INVOICE_WINDOW_ID}`).destroy();
                }
            }
        });

    }

    const editWindowModalCreator = (id) => {
        return Ext.create('Ext.window.Window', {
            title: 'Edit',
            id: `${id}_${EDIT_INVOICE_WINDOW_ID}`,
            width: 500,
            modal: true,
            layout: {
                type: 'fit'
            },
            autoDestroy: false,
            closeAction: 'close',
            items: [{
                xtype: 'form',
                border: false,
                layout: {
                    type: 'anchor',
                    pack: 'center',
                    align: 'center'
                },
                id: `${id}_${EDIT_WINDOW_FORM_ID}`,
                bodyPadding: 10,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Sl No',
                    name: 'sl_no',
                    id: `${id}_${EDIT_SL_NO_TEXTFIELD_ID}`,
                    emptyText: 'Sl No',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Quantity',
                    name: 'quantity',
                    id: `${id}_${EDIT_QUANTITY_TEXTFIELD_ID}`,
                    emptyText: 'Quantity',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Description',
                    name: 'description',
                    id: `${id}_${EDIT_DESCRIPTION_TEXTFIELD_ID}`,
                    emptyText: 'Description',
                    anchor: '100%',
                    allowBlank: false
                }
                ],

                buttons: [{
                    text: 'Save',
                    formBind: true,
                    id: `${id}_${EDIT_WINDOW_SAVE_BUTTON_ID}`,
                    listeners: {
                        click: (e) => {
                            console.log(Ext.getCmp(`${id}_${EDIT_WINDOW_FORM_ID}`).getForm().getValues());
                            console.log('add button save clicked validate the data and go for final submission in the database');
                        }
                    }
                }, {
                    text: 'Cancel',
                    id: `${id}_${EDIT_WINDOW_CANCEL_BUTTON_ID}`,
                    listeners: {
                        click: (e) => {
                            Ext.getCmp(`${id}_${EDIT_INVOICE_WINDOW_ID}`).close();

                        }
                    }
                }],
                buttonAlign: 'center',
            }],
            listeners: {
                close: (e) => {
                    Ext.getCmp(`${id}_${EDIT_WINDOW_FORM_ID}`).getForm().reset(true);
                    Ext.getCmp(id).getSelectionModel().deselectAll();
                    Ext.getCmp(id).getView().refresh();
                    Ext.getCmp(`${id}_${EDIT_INVOICE_WINDOW_ID}`).destroy();
                }
            }
        });
    }

    Ext.define(INVOICE_MODEL_NAME, {
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


    const editButtonDisplayHandler = (edit_button_id, selectedRowsList) => {
        console.log(selectedRowsList);
        let editableRowsList = selectedRowsList.filter(({ is_open }) => is_open === 1);
        if (selectedRowsList.length === 1 && selectedRowsList.length === editableRowsList.length) {
            Ext.getCmp(edit_button_id).enable();
        } else {
            Ext.getCmp(edit_button_id).disable();
        }
        return editableRowsList;
    }


    const addButtonDisplayHandler = (add_button_id, selectedRowsList) => {
        console.log(selectedRowsList);
        if (selectedRowsList.length > 0) {
            Ext.getCmp(add_button_id).disable();
        } else {
            Ext.getCmp(add_button_id).enable();
        }
    }


    const deleteButtonDisplayHandler = (delete_button_id, selectedRowsList) => {
        console.log(selectedRowsList);
        let deletableRowsList = selectedRowsList.filter(({ is_open }) => is_open === 0);
        if (selectedRowsList.length > 0 && selectedRowsList.length === deletableRowsList.length) {
            Ext.getCmp(delete_button_id).enable();
        } else {
            Ext.getCmp(delete_button_id).disable();
        }
        return deletableRowsList;
    }


    const approveButtonDisplayHandler = (approve_button_id, selectedRowsList) => {
        console.log(selectedRowsList);
        let approvableRowsList = selectedRowsList.filter(({ is_open }) => is_open === 1);
        if (selectedRowsList.length > 0 && selectedRowsList.length === approvableRowsList.length) {
            Ext.getCmp(approve_button_id).enable();
        } else {
            Ext.getCmp(approve_button_id).disable();
        }
        return approvableRowsList;
    }



    let allInvoicesStore = Ext.create('Ext.data.Store', {
        storeId: ALL_INVOICE_STORE_ID,
        model: INVOICE_MODEL_NAME,
        pageSize: 6,
        autoLoad: true,
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
    });


    let openInvoicesStore = Ext.create('Ext.data.Store', {
        storeId: OPEN_INVOICE_STORE_ID,
        model: INVOICE_MODEL_NAME,
        pageSize: 6,
        autoLoad: true,
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
    });


    let closeInvoicesStore = Ext.create('Ext.data.Store', {
        storeId: CLOSE_INVOICE_STORE_ID,
        model: INVOICE_MODEL_NAME,
        pageSize: 6,
        autoLoad: true,
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
    });


    let deletedInvoicesStore = Ext.create('Ext.data.Store', {
        storeId: DELETED_INVOICE_STORE_ID,
        model: INVOICE_MODEL_NAME,
        pageSize: 6,
        autoLoad: true,
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
                    'is_open': 1
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
    });

    const analyticsTabCreater = (title, id, name, storeID) => {
        console.log("analytics tab ")
        let analytics_adv_search_dialog_id = `${id}_adv_search_dialog`;
        let analytics_tab = {
            id: `${id}`,
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

                        (createAdvanceSearchButton)(ANALYTICS_ADV_SEARCH_BUTTON_ID, ANALYTICS_ADV_SEARCH_BUTTON_NAME, analytics_adv_search_dialog_id),

                    ]
                },
                (advSearchDialogCreator)(analytics_adv_search_dialog_id, `${name}_adv_search_dialog`, `${storeID}_adv_search_dialog`)
            ]
        }
        return analytics_tab;
    }

    const advSearchDialogCreator = (id, name, storeID) => {
        let dialog = {
            id: `${id}`,
            name: `${name}`,
            hidden: true,
            xtype: 'container',
            layout: {
                type: 'auto',
                pack: 'center'
            },
            style: { backgroundColor: '#ececec' },
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'fit',
                        align: 'center',
                        pack: 'center'
                    },
                    flex: 1,
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
                                            id: `${id}_search_invoice_number_textfield`,
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
                                            id: `${id}_search_customer_id_textfield`,
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
                            id: `${id}_clear_button`,
                            text: 'Clear',
                            margin: '0 10 0 10',
                            width: 100,
                            listeners: {
                                click: (e) => {
                                    console.log(e.id);
                                }
                            }

                        },
                        {

                            xtype: 'button',
                            id: `${id}_search_button`,
                            text: 'Search',
                            margin: '0 10 0 10',
                            width: 100,
                            listeners: {
                                click: (e) => {
                                    console.log(e.id);
                                }
                            }

                        }
                    ]
                }
            ]

        }
        return dialog;
    }

    const createAdvanceSearchButton = (id, text, corresponding_dialog_id) => {
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
                    console.log("adv_search_button with id : ", e.id);
                    if (e.iconCls === 'x-fa fa-caret-down') {
                        Ext.getCmp(corresponding_dialog_id).show();
                        e.setIconCls('x-fa fa-caret-up')
                    } else {
                        Ext.getCmp(corresponding_dialog_id).hide();
                        e.setIconCls('x-fa fa-caret-down')

                    }
                }
            }
        })
        return advSearchButtonComponent;
    }

    const panelTabCreater = (title, id, name, storeID) => {
        let approvableRowsList = []
        let deletableRowsList = []
        let editableRowsList = [];
        let selectedRows = [];
        let button_id = '';
        let button_name = '';
        let adv_search_dialog_id = `${id}_adv_search_dialog`;
        if (id === ALL_INVOICES_TAB_ID) {
            button_id = ALL_INVOICES_ADV_SEARCH_BUTTON_ID;
            button_name = ALL_INVOICES_ADV_SEARCH_BUTTON_NAME;
            console.log("all invoices tab");
        } else if (id === OPEN_INVOICES_TAB_ID) {
            button_id = OPEN_INVOICES_ADV_SEARCH_BUTTON_ID;
            button_name = OPEN_INVOICES_ADV_SEARCH_BUTTON_NAME;
            console.log("open invoices tab");
        } else if (id === CLOSE_INVOICES_TAB_ID) {
            button_id = CLOSE_INVOICES_ADV_SEARCH_BUTTON_ID;
            button_name = CLOSE_INVOICES_ADV_SEARCH_BUTTON_NAME;
            console.log("close invoices tab");
        } else {
            button_id = DELETED_INVOICES_ADV_SEARCH_BUTTON_ID;
            button_name = DELETED_INVOICES_ADV_SEARCH_BUTTON_NAME;
            console.log("deleted invoices tab");

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

                        (createAdvanceSearchButton)(button_id, button_name, adv_search_dialog_id),

                    ]
                },
                (advSearchDialogCreator)(adv_search_dialog_id, `${name}_adv_search_dialog`, `${storeID}_adv_search_dialog`,),
                {

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
                        // checkOnly: true
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
                        items: ((id) => {
                            if (id === ALL_INVOICES_TAB_ID) {
                                return [{
                                    xtype: 'button',
                                    text: 'Add',
                                    id: `addButton_${name}`,
                                    iconCls: 'x-fa fa-plus-circle',
                                    disabled: false,
                                    listeners: {
                                        click: (e) => {
                                            console.log('add button clicked with id : ' + e.id);
                                            console.log('add button clicked on the tab name : ', id);
                                            (addWindowModalCreator)(id);
                                            Ext.getCmp(`${id}_${ADD_INVOICE_WINDOW_ID}`).show();
                                        }
                                    }
                                }, {
                                    xtype: 'button',
                                    text: 'Edit',
                                    id: `editButton_${name}`,
                                    iconCls: 'x-fa fa-pencil-square-o',
                                    disabled: true,
                                    listeners: {
                                        click: (e) => {
                                            console.log('edit button clicked with id : ' + e.id);
                                            console.log('edit button clicked on the tab name : ', id);
                                            console.log(editableRowsList);
                                            (editWindowModalCreator)(id);
                                            Ext.getCmp(`${id}_${EDIT_SL_NO_TEXTFIELD_ID}`).setValue(editableRowsList[0]['sl_no']);
                                            Ext.getCmp(`${id}_${EDIT_QUANTITY_TEXTFIELD_ID}`).setValue(editableRowsList[0]['quantity']);
                                            Ext.getCmp(`${id}_${EDIT_DESCRIPTION_TEXTFIELD_ID}`).setValue(editableRowsList[0]['description']);
                                            Ext.getCmp(`${id}_${EDIT_INVOICE_WINDOW_ID}`).show();
                                        }
                                    }
                                }, {
                                    xtype: 'button',
                                    text: 'Delete',
                                    disabled: true,
                                    id: `deleteButton_${name}`,
                                    iconCls: 'x-fa fa-trash',
                                    listeners: {
                                        click: (e) => {
                                            console.log('delete button clicked with id : ' + e.id);
                                            console.log(deletableRowsList);
                                            Ext.Msg.show({
                                                title: 'Delete Record',
                                                id: DELETE_MSG_BOX_ID,
                                                message: `Do you want to delete the selected invoice ?`,
                                                buttons: Ext.Msg.YESNO,
                                                fn: (btn) => {
                                                    if (btn === 'yes') {
                                                        Ext.Msg.alert('Success', `${deletableRowsList.length}row(s) Deleted Successfully`);
                                                        Ext.getCmp(id).getSelectionModel().deselectAll();
                                                        Ext.getCmp(id).getView().refresh();

                                                    } else {
                                                        Ext.getCmp(id).getSelectionModel().deselectAll();
                                                        Ext.getCmp(id).getView().refresh();
                                                    }
                                                }
                                            });
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'Approve',
                                    disabled: true,
                                    id: `approveButton_${name}`,
                                    listeners: {
                                        click: (e) => {
                                            console.log('approved button clicked with id : ' + e.id);
                                            console.log(approvableRowsList);
                                            Ext.getCmp(id).getSelectionModel().deselectAll();
                                            Ext.getCmp(id).getView().refresh();
                                        }
                                    }
                                }]
                            } else if (id === OPEN_INVOICES_TAB_ID) {
                                return [{
                                    xtype: 'button',
                                    text: 'Add',
                                    id: `addButton_${name}`,
                                    iconCls: 'x-fa fa-plus-circle',
                                    disabled: false,
                                    listeners: {
                                        click: (e) => {
                                            console.log('add button clicked with id : ' + e.id);
                                            console.log('add button clicked on the tab name : ', id);
                                            (addWindowModalCreator)(id);
                                            Ext.getCmp(`${id}_${ADD_INVOICE_WINDOW_ID}`).show();
                                        }
                                    }
                                }, {
                                    xtype: 'button',
                                    text: 'Edit',
                                    id: `editButton_${name}`,
                                    iconCls: 'x-fa fa-pencil-square-o',
                                    disabled: true,
                                    listeners: {
                                        click: (e) => {
                                            console.log('edit button clicked with id : ' + e.id);
                                            console.log('edit button clicked on the tab name : ', id);
                                            console.log(editableRowsList);
                                            (editWindowModalCreator)(id);
                                            Ext.getCmp(`${id}_${EDIT_SL_NO_TEXTFIELD_ID}`).setValue(editableRowsList[0]['sl_no']);
                                            Ext.getCmp(`${id}_${EDIT_QUANTITY_TEXTFIELD_ID}`).setValue(editableRowsList[0]['quantity']);
                                            Ext.getCmp(`${id}_${EDIT_DESCRIPTION_TEXTFIELD_ID}`).setValue(editableRowsList[0]['description']);
                                            Ext.getCmp(`${id}_${EDIT_INVOICE_WINDOW_ID}`).show();
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'Approve',
                                    disabled: true,
                                    id: `approveButton_${name}`,
                                    listeners: {
                                        click: (e) => {
                                            console.log('approved button clicked with id : ' + e.id);
                                            console.log(approvableRowsList);
                                            Ext.getCmp(id).getSelectionModel().deselectAll();
                                            Ext.getCmp(id).getView().refresh();
                                        }
                                    }
                                }]
                            } else if (id === CLOSE_INVOICES_TAB_ID) {
                                return [{
                                    xtype: 'button',
                                    text: 'Delete',
                                    disabled: true,
                                    id: `deleteButton_${name}`,
                                    iconCls: 'x-fa fa-trash',
                                    listeners: {
                                        click: (e) => {
                                            console.log('delete button clicked with id : ' + e.id);
                                            console.log(deletableRowsList);
                                            Ext.Msg.show({
                                                title: 'Delete Record',
                                                id: DELETE_MSG_BOX_ID,
                                                message: `Do you want to delete the selected invoice ?`,
                                                buttons: Ext.Msg.YESNO,
                                                fn: (btn) => {
                                                    if (btn === 'yes') {
                                                        Ext.Msg.alert('Success', `${deletableRowsList.length}row(s) Deleted Successfully`);
                                                        Ext.getCmp(id).getSelectionModel().deselectAll();
                                                        Ext.getCmp(id).getView().refresh();

                                                    } else {
                                                        Ext.getCmp(id).getSelectionModel().deselectAll();
                                                        Ext.getCmp(id).getView().refresh();
                                                    }
                                                }
                                            });

                                        }
                                    }
                                },
                                ]
                            }
                        }
                        )(id),

                    }],
                    listeners: {
                        select: (e, selModel, index) => {
                            selectedRows.push(selModel.data);
                            if (id === ALL_INVOICES_TAB_ID) {
                                addButtonDisplayHandler(`addButton_${name}`, selectedRows);
                                editableRowsList = editButtonDisplayHandler(`editButton_${name}`, selectedRows);
                                deletableRowsList = deleteButtonDisplayHandler(`deleteButton_${name}`, selectedRows);
                                approvableRowsList = approveButtonDisplayHandler(`approveButton_${name}`, selectedRows);
                            } else if (id === OPEN_INVOICES_TAB_ID) {
                                addButtonDisplayHandler(`addButton_${name}`, selectedRows);
                                editableRowsList = editButtonDisplayHandler(`editButton_${name}`, selectedRows);
                                approvableRowsList = approveButtonDisplayHandler(`approveButton_${name}`, selectedRows);
                            } else if (id === CLOSE_INVOICES_TAB_ID) {
                                deletableRowsList = deleteButtonDisplayHandler(`deleteButton_${name}`, selectedRows);
                            }

                        },
                        deselect: (e, selModel, index) => {
                            console.log(id);
                            selectedRows = selectedRows.filter(({ sl_no }) =>
                                (sl_no !== selModel.data.sl_no)
                            );
                            if (id === ALL_INVOICES_TAB_ID) {
                                addButtonDisplayHandler(`addButton_${name}`, selectedRows);
                                editableRowsList = editButtonDisplayHandler(`editButton_${name}`, selectedRows);
                                deletableRowsList = deleteButtonDisplayHandler(`deleteButton_${name}`, selectedRows);
                                approvableRowsList = approveButtonDisplayHandler(`approveButton_${name}`, selectedRows);
                            } else if (id === OPEN_INVOICES_TAB_ID) {
                                addButtonDisplayHandler(`addButton_${name}`, selectedRows);
                                editableRowsList = editButtonDisplayHandler(`editButton_${name}`, selectedRows);
                                approveButtonDisplayHandler(`approveButton_${name}`, selectedRows);
                            } else if (id === CLOSE_INVOICES_TAB_ID) {
                                deletableRowsList = deleteButtonDisplayHandler(`deleteButton_${name}`, selectedRows);
                            }
                        }
                    }
                }
            ]
        }
        return createdTab;

    }

    const parentContainer = Ext.create('Ext.container.Container', {
        style: { borderStyle: 'solid', borderWidth: '40px', borderColor: 'lightgrey' },
        id: PARENT_CONTAINER_ID,
        border: true,
        layout: {
            type: 'fit',
            pack: 'center',
            align: 'center',
        },
        items: [
            {
                id: IMAGE_HEADER_PANEL_ID,
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
                id: TITLE_HEADER_PANEL_ID,
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
                        text: HEADER_PANEL_TEXT,
                        style: { fontSize: '20px', fontWeight: 'normal', color: 'white' },
                        flex: 1,
                    },
                ]
            },
            {
                xtype: 'tabpanel',
                border: false,
                activeTab: 1,
                id: TAB_PANEL_ID,
                layout: {
                    type: 'fit',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    (panelTabCreater)(ALL_INVOICES_TAB_TITLE, ALL_INVOICES_TAB_ID, ALL_INVOICES_TAB_NAME, ALL_INVOICE_STORE_ID),
                    (panelTabCreater)(OPEN_INVOICES_TAB_TITLE, OPEN_INVOICES_TAB_ID, OPEN_INVOICES_TAB_NAME, OPEN_INVOICE_STORE_ID),
                    (panelTabCreater)(CLOSE_INVOICES_TAB_TITLE, CLOSE_INVOICES_TAB_ID, CLOSE_INVOICES_TAB_NAME, CLOSE_INVOICE_STORE_ID),
                    (panelTabCreater)(DELETED_INVOICES_TAB_TITLE, DELETED_INVOICES_TAB_ID, DELETED_INVOICES_TAB_NAME, DELETED_INVOICE_STORE_ID),
                    (analyticsTabCreater)(ANALYTICS_TAB_TITLE, ANALYTICS_TAB_ID, ANALYTICS_TAB_NAME, ANALYTICS_TAB_STORE_ID)
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
                        text: FOOTER_COPYRIGHT_TEXT,

                    }
                ]
            }
        ]
    },);


    Ext.create('Ext.container.Viewport', {
        id: MAIN_VIEWPORT_ID,
        layout: {
            type: 'anchor',
            pack: 'center',
            align: 'center'
        },
        items: [parentContainer],
        renderTo: Ext.getBody()

    })
})