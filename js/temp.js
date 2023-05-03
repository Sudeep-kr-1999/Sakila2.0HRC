Ext.create('Ext.grid.Panel', {
    title: 'My Grid',
    store: myStore,
    columns: [{
        text: 'Name',
        dataIndex: 'name'
    }, {
        text: 'Email',
        dataIndex: 'email'
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: myStore,
        dock: 'bottom',
        displayInfo: true,
        listeners: {
            change: function(toolbar, pageData, eOpts) {
                console.log('Page changed to ' + pageData.currentPage);
            }
        }
    }],
    renderTo: Ext.getBody()
});



// In this example, we have a grid panel with a pagination toolbar at the bottom. 
// The pagingtoolbar component has a change event listener that logs a message to the console whenever the page changes.
//  The change event passes the pagingtoolbar component, the pageData object, and any event options as parameters to the listener 
//  function. The pageData object contains information about the current page, including the current page number 
//  (pageData.currentPage) and the total number of pages (pageData.pageCount).
