Ext.onReady(function () {

    Ext.define('Movies', {
        extend: 'Ext.data.Model',
        fields: ['film_id', 'title', 'description', 'release_year', 'language', 'director', 'rating', 'special_features']
    });

    var filmStore = Ext.create('Ext.data.Store', {
        storeId: 'filmTableStore',
        model: 'Movies',
        pageSize: 6,
        proxy: {
            type: 'memory',
            enablePaging: true,
            data: [{
                'film_id': 1,
                'title': 'Movie 12',
                'description': 'action',
                'release_year': '2022',
                'language': 'German',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 2,
                'title': 'Movie 29',
                'description': 'action',
                'release_year': '2020',
                'language': 'English',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 3,
                'title': 'Movie 3',
                'description': 'action',
                'release_year': '2021',
                'language': 'English',
                'director': 'Heiner',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 4,
                'title': 'Movie 46',
                'description': 'action',
                'release_year': '2023',
                'language': 'Hindi',
                'director': 'Stalin',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 8,
                'title': 'Movie 1',
                'description': 'action',
                'release_year': '2022',
                'language': 'German',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 23,
                'title': 'Movie 26',
                'description': 'action',
                'release_year': '2020',
                'language': 'English',
                'director': 'Joshep',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 34,
                'title': 'Movie 30',
                'description': 'action',
                'release_year': '2021',
                'language': 'English',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 44,
                'title': 'Movie 4',
                'description': 'action',
                'release_year': '2023',
                'language': 'Hindi',
                'director': 'Rudwick',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 7,
                'title': 'Movie 1',
                'description': 'action',
                'release_year': '2022',
                'language': 'German',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 46,
                'title': 'Movie 2',
                'description': 'action',
                'release_year': '2020',
                'language': 'English',
                'director': 'Muller',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 38,
                'title': 'Movie 33',
                'description': 'action',
                'release_year': '2021',
                'language': 'English',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 45,
                'title': 'Movie 8',
                'description': 'action',
                'release_year': '2023',
                'language': 'French',
                'director': 'James',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 89,
                'title': 'Movie 10',
                'description': 'action',
                'release_year': '2022',
                'language': 'German',
                'director': 'Arry',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 6,
                'title': 'Movie 20',
                'description': 'action',
                'release_year': '2020',
                'language': 'English',
                'director': 'Mary',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 37,
                'title': 'Movie 38',
                'description': 'action',
                'release_year': '2021',
                'language': 'English',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 28,
                'title': 'Movie 423',
                'description': 'action',
                'release_year': '2023',
                'language': 'Hindi',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 456,
                'title': 'Movie 84',
                'description': 'action',
                'release_year': '2023',
                'language': 'Hindi',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 895,
                'title': 'Movie 104',
                'description': 'action',
                'release_year': '2022',
                'language': 'French',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 64,
                'title': 'Movie 205',
                'description': 'action',
                'release_year': '2020',
                'language': 'English',
                'director': 'Kripky',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 375,
                'title': 'Movie 383',
                'description': 'action',
                'release_year': '2021',
                'language': 'English',
                'director': 'Nolan',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }, {
                'film_id': 283,
                'title': 'Movie 42',
                'description': 'action',
                'release_year': '2023',
                'language': 'Hindi',
                'director': 'Cooper',
                'rating': 'pg',
                'special_features': 'cut Scene'
            }]
        }
    });

    filmStore.loadPage(1);

    // Reference Model to Create ComboBox for Language Dropdown
    var languageModel = Ext.define('languageModel', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'languageSelection',
            type: 'string'
        }]
    });

    // `languageDropDown` Store Object for Language Combobox
    var languageDropDown = Ext.create('Ext.data.Store', {
        model: languageModel,
        data: [{
            'languageSelection': "English"
        }, {
            'languageSelection': "French"
        }, {
            'languageSelection': "German"
        }, {
            'languageSelection': "Italian"
        }, {
            'languageSelection': "Japanese"
        }, {
            'languageSelection': "Mandarin"
        }, {
            'languageSelection': "Mongolian"
        }, {
            'languageSelection': "Hindi"
        }],
        autoLoad: true
    });

    languageDropDown.load();

    // Reference Model to Create ComboBox for rating Dropdown
    var ratingModel = Ext.define('ratingsM', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'ratingSelection',
            type: 'string'
        }]
    });

    // `ratingDropDown` Store Object for rating Combobox
    var ratingDropDown = Ext.create('Ext.data.Store', {
        model: ratingModel,
        data: [{
            'ratingSelection': "PG"
        }, {
            'ratingSelection': "G"
        }, {
            'ratingSelection': "NC-17"
        }, {
            'ratingSelection': "PG-13"
        }, {
            'ratingSelection': "PG-13"
        }],
        autoLoad: true
    });

    ratingDropDown.load();

    // Reference Model to Create ComboBox for Special Features Dropdown
    var specialFeaturesModel = Ext.define('speacialF', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'specialFeaturesSelection',
            type: 'string'
        }]
    });

    // `specialFeaturesDropDown` Store Object for Special Features Combobox
    var specialFeaturesDropDown = Ext.create('Ext.data.Store', {
        model: specialFeaturesModel,
        data: [{
            'specialFeaturesSelection': "Trailers"
        }, {
            'specialFeaturesSelection': "Deleted Scenes"
        }, {
            'specialFeaturesSelection': "Commentaries"
        }, {
            'specialFeaturesSelection': "Behind the Scenes"
        },],
        autoLoad: true
    });

    specialFeaturesDropDown.load();

    // `addWindow` Window for Add Button Functionality
    var addWindow = Ext.create('Ext.window.Window', {
        title: 'Add',
        width: 400,
        layout: 'fit',
        autoDestroy: false,
        closeAction: 'close',
        items: [{
            xtype: 'form',
            bodyPadding: 5,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Title',
                name: 'title',
                id: 'movie_title'
            }, {
                xtype: 'textarea',
                fieldLabel: 'Description',
                name: 'description',
                id: 'movie_description'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Release Year',
                name: 'release_year',
                id: 'movie_release_year'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Language',
                store: languageDropDown,
                queryMode: 'local',
                displayField: 'languageSelection',
                name: 'language',
                id: 'movie_language'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Director',
                name: 'director',
                id: 'movie_director'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Rating',
                store: ratingDropDown,
                queryMode: 'local',
                displayField: 'ratingSelection',
                name: 'rating',
                id: 'movie_rating'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Special Features',
                store: specialFeaturesDropDown,
                queryMode: 'local',
                displayField: 'specialFeaturesSelection',
                name: 'special_features',
                id: 'movie_special_features'
            }],

            buttons: [{
                text: 'Add',
                iconCls: 'x-fa fa-plus-circle'
            }, {
                text: 'Cancel',
                iconCls: 'x-fa fa-times',
                handler: function () {
                    addWindow.close();
                }
            }],
            buttonAlign: 'center',
        }]
    });

    // `editWindow` Window for Edit Button Functionality
    var editWindow = Ext.create('Ext.window.Window', {
        title: 'Edit',
        width: 400,
        layout: 'fit',
        autoDestroy: false,
        closeAction: 'close',
        items: [{
            xtype: 'form',
            bodyPadding: 5,
            id: 'editFormId',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Film ID',
                name: 'film_id',
                id: 'editFilmId'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Title',
                name: 'title',
                id: 'editTitle'
            }, {
                xtype: 'textarea',
                fieldLabel: 'Description',
                name: 'description',
                id: 'editDescription'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Release Year',
                name: 'release_year',
                id: 'editReleaseYear'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Language',
                store: languageDropDown,
                queryMode: 'local',
                displayField: 'languageSelection',
                name: 'language',
                id: 'editLanguage'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Director',
                name: 'director',
                id: 'editDirector'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Rating',
                store: ratingDropDown,
                queryMode: 'local',
                displayField: 'ratingSelection',
                name: 'rating',
                id: 'editFilmRating'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Special Features',
                store: specialFeaturesDropDown,
                queryMode: 'local',
                displayField: 'specialFeaturesSelection',
                name: 'special_features',
                id: 'editSpecialFeatures'
            }],

            buttons: [{
                text: 'Edit',
                iconCls: 'x-fa fa-pencil-square-o'
            }, {
                text: 'Cancel',
                iconCls: 'x-fa fa-times',
                handler: function () {
                    editWindow.close();
                }
            }],
            buttonAlign: 'center',
        }]
    });

    // `deleteWindow` Window for Delete Button Functionality
    var deleteWindow = Ext.create('Ext.window.Window', {
        title: 'Delete',
        width: 400,
        html: "<p>Are you sure you want to Delete!?</p>",
        layout: 'fit',
        autoDestroy: false,
        closeAction: 'close',
        items: [{
            xtype: 'form',
            bodyPadding: 5,
            id: 'deleteFormId',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Film ID',
                name: 'del_filmIds',
                id: 'deleteFilmId'
            }],

            buttons: [{
                text: 'Delete',
                iconCls: 'x-fa fa-trash'
            }, {
                text: 'Cancel',
                iconCls: 'x-fa fa-times',
                handler: function () {
                    deleteWindow.close();
                }
            }],
            buttonAlign: 'center',
        }]
    });
    Ext.create('Ext.container.Viewport', {
        "requires": [
            "font-pictos"
        ],
        layout: {
            type: 'fit',
            pack: 'center',
            align: 'middle'
        },
        items: [{
            xtype: 'panel',
            layout: {
                type: 'border',
                pack: 'center',
                align: 'middle'
            },
            items: [{
                title: 'Movie Advance Search',
                region: 'center',
                xtype: 'panel',
                layout: {
                    type: 'fit',
                    pack: 'center',
                    align: 'middle'
                },
                margin: '5 5 5 5',
                items: [{
                    xtype: 'form',
                    bodyPadding: 5,
                    autoScroll: true,
                    buttonAlign: 'center',
                    layout: {
                        type: 'anchor',
                        pack: 'center',
                        align: 'middle'
                    },
                    defaults: {
                        anchor: '100%'
                    },
                    url: 'add_item',
                    defaultType: 'textfield',
                    items: [{
                        xtype: 'fieldcontainer',
                        margin: '20 0 0 0',
                        bodyPadding: 5,
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'middle'
                        },
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'Movie Name',
                            name: 'title',
                            id: 'movieName'
                        }, {
                            xtype: 'splitter',
                            margin: '0 10 0 10'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Director',
                            name: 'director',
                            id: 'directorName'
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        margin: '10 0 0 0',
                        bodyPadding: 5,
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'middle'
                        },
                        items: [{
                            xtype: 'datefield',
                            format: 'Y',
                            fieldLabel: 'Release Year',
                            name: 'release_year',
                            id: 'releaseYear'
                        }, {
                            xtype: 'splitter',
                            margin: '0 10 0 10'
                        }, {
                            xtype: 'combobox',
                            fieldLabel: 'Language',
                            store: languageDropDown,
                            queryMode: 'local',
                            displayField: 'languageSelection',
                            name: 'language',
                            id: 'language_combo'
                        }]
                    }],
                    buttons: [{
                        text: 'Search',
                        formBind: true,
                        disabled: true,
                        enableToggle: false,
                        iconCls: 'x-fa fa-search',
                        handler: function () {

                            var form = this.up('form').getForm();
                            filmStore.clearFilter()

                            var formInfo = {
                                movieName_: Ext.getCmp('movieName').getValue(),
                                directorName_: Ext.getCmp('directorName').getValue(),
                                releaseYear_: Ext.getCmp('releaseYear').getValue() !== null ? Ext.getCmp('releaseYear').getValue().getFullYear() : undefined,
                                language_: Ext.getCmp('language_combo').getValue()
                            }

                            // Manual (UI Based)
                            if (!formInfo.movieName_ && !formInfo.directorName_ && !formInfo.releaseYear_ && !formInfo.language_) {
                                Ext.Msg.alert("Blank Form", "You've submitted a Blank Form!")
                            } else if (formInfo.movieName_ && !formInfo.directorName_ && !formInfo.releaseYear_ && !formInfo.language_) {
                                filmStore.load().filter('title', formInfo.movieName_);
                            } else if (!formInfo.movieName_ && formInfo.directorName_ && !formInfo.releaseYear_ && !formInfo.language_) {
                                filmStore.load().filter('director', formInfo.directorName_);
                            } else if (!formInfo.movieName_ && !formInfo.directorName_ && formInfo.releaseYear_ && !formInfo.language_) {
                                filmStore.load().filter('release_year', formInfo.releaseYear_);
                            } else if (!formInfo.movieName_ && !formInfo.directorName_ && !formInfo.releaseYear_ && formInfo.language_) {
                                filmStore.load().filter('language', formInfo.language_);
                            } else if (formInfo.movieName_ && formInfo.directorName_ && formInfo.releaseYear_ && formInfo.language_) {
                                var filtersSearch = [
                                    new Ext.util.Filter({
                                        filterFn: function (item) {
                                            return item.get('title') == formInfo.movieName_ && item.get('director') == formInfo.directorName_ && item.get('release_year') == formInfo.releaseYear_ && item.get('language') == formInfo.language_;
                                        }
                                    })
                                ];
                                filmStore.load().filter(filtersSearch);
                            } else {
                                //for a combination of search fields

                                if (!formInfo.movieName_ && formInfo.directorName_ && formInfo.releaseYear_ && !formInfo.language_) {
                                    filmStore.load().filter('release_year', formInfo.releaseYear_);
                                    filmStore.load().filter('director', formInfo.directorName_);
                                } else if (formInfo.movieName_ && formInfo.directorName_ && formInfo.releaseYear_ && !formInfo.language_) {
                                    filmStore.load().filter('release_year', formInfo.releaseYear_);
                                    filmStore.load().filter('director', formInfo.directorName_);
                                    filmStore.load().filter('title', formInfo.movieName_);
                                } else if (!formInfo.movieName_ && formInfo.directorName_ && formInfo.releaseYear_ && formInfo.language_) {
                                    filmStore.load().filter('release_year', formInfo.releaseYear_);
                                    filmStore.load().filter('director', formInfo.directorName_);
                                    filmStore.load().filter('language', formInfo.language_);
                                } else if (formInfo.movieName_ && formInfo.directorName_ && !formInfo.releaseYear_ && !formInfo.language_) {

                                    filmStore.load().filter('director', formInfo.directorName_);
                                    filmStore.load().filter('title', formInfo.movieName_);
                                } else if (!formInfo.movieName_ && formInfo.directorName_ && !formInfo.releaseYear_ && formInfo.language_) {

                                    filmStore.load().filter('director', formInfo.directorName_);
                                    filmStore.load().filter('language', formInfo.language_);
                                } else if (formInfo.movieName_ && !formInfo.directorName_ && formInfo.releaseYear_ && !formInfo.language_) {
                                    filmStore.load().filter('release_year', formInfo.releaseYear_);
                                    filmStore.load().filter('title', formInfo.movieName_);
                                } else if (!formInfo.movieName_ && !formInfo.directorName_ && formInfo.releaseYear_ && formInfo.language_) {
                                    filmStore.load().filter('release_year', formInfo.releaseYear_);
                                    filmStore.load().filter('language', formInfo.language_);
                                } else
                                    Ext.Msg.alert("Multiple Values Error", "Please Enter more fields!")

                            }
                        }
                    }, {
                        text: 'Reset',
                        iconCls: 'x-fa fa-refresh',
                        handler: function () {
                            filmStore.clearFilter();
                            this.up('form').getForm().reset();
                        }
                    }]
                }]
            }, 
            {
                // Movie Grid
                title: 'Movie Grid',
                id: 'movie_grid',
                name: 'movieGrid',
                region: 'south',
                xtype: 'grid',
                height: '60%',
                minHeight: 100,
                split: true,
                margin: '0 5 5 5',
                store: Ext.data.StoreManager.lookup('filmTableStore'),
                columns: [{
                    text: 'Film Id',
                    flex: 1,
                    dataIndex: 'film_id'
                }, {
                    text: 'Title',
                    flex: 2,
                    dataIndex: 'title'
                }, {
                    text: 'Description',
                    flex: 1,
                    dataIndex: 'description'
                }, {
                    text: 'Release year',
                    flex: 1,
                    dataIndex: 'release_year'
                }, {
                    text: 'Language',
                    flex: 1,
                    dataIndex: 'language'
                }, {
                    text: 'Director',
                    flex: 1,
                    dataIndex: 'director'
                }, {
                    text: 'Rating',
                    flex: 1,
                    dataIndex: 'rating'
                }, {
                    text: 'Special Feature',
                    flex: 1,
                    dataIndex: 'special_features'
                }],

                selModel: {
                    selType: 'checkboxmodel',
                    mode: 'MULTI',
                    checkOnly: true
                },

                listeners: {
                    'select': function () {
                        var gridData = {}
                        var selected = Ext.getCmp('movie_grid').getSelectionModel().getSelection();
                        if (selected.length == 1) {
                            Ext.getCmp('editButtonId').setDisabled(false);
                            Ext.getCmp('deleteButtonId').setDisabled(false);
                            gridData = selected[0].data;
                            Ext.getCmp('editFormId').getForm().setValues(gridData);
                            Ext.getCmp('deleteFilmId').setValue(selected[0].data.film_id);
                            Ext.getCmp('deleteFilmId').disable();
                            Ext.getCmp('editFilmId').disable();
                        } else if (selected.length > 1) {
                            Ext.getCmp('editButtonId').setDisabled(true);
                            Ext.getCmp('deleteButtonId').setDisabled(false);
                            gridFilmIdList = [];
                            for (let i = 0; i < selected.length; i++) {
                                gridFilmIdList.push(selected[i].data.film_id)
                            }
                            Ext.getCmp('deleteFilmId').setValue(gridFilmIdList);
                            Ext.getCmp('deleteFilmId').disable();
                        } else {
                            Ext.getCmp('editButtonId').setDisabled(true);
                            Ext.getCmp('deleteButtonId').setDisabled(true);
                        }
                    },

                    'deselect': function () {
                        var selected = Ext.getCmp('movie_grid').getSelectionModel().getSelection();

                        if (selected.length == 0) {
                            Ext.getCmp('editButtonId').setDisabled(true);
                            Ext.getCmp('deleteButtonId').setDisabled(true);
                        } else if (selected.length == 1) {
                            Ext.getCmp('editButtonId').setDisabled(false);
                            Ext.getCmp('deleteButtonId').setDisabled(false);
                        } else if (selected.length > 1) {
                            Ext.getCmp('editButtonId').setDisabled(true);
                            Ext.getCmp('deleteButtonId').setDisabled(false);
                        }
                    }
                },

                dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: Ext.data.StoreManager.lookup('filmTableStore'),
                    dock: 'top',
                    displayInfo: true,
                    displayMsg: 'Displaying: {0} to {1} out of {2} &nbsp;Records ',
                    emptyMsg: "No Records to Display!&nbsp;",
                    inputItemWidth: 50,
                    items: ['->', {
                        xtype: 'button',
                        text: 'Add',
                        id: 'addButtonId',
                        iconCls: 'x-fa fa-plus-circle',
                        disabled: false,
                        listeners: {
                            click: function () {
                                addWindow.show();
                            }
                        }
                    }, '-', {
                            xtype: 'button',
                            text: 'Edit',
                            id: 'editButtonId',
                            iconCls: 'x-fa fa-pencil-square-o',
                            disabled: true,
                            listeners: {
                                click: function () {
                                    editWindow.show();
                                }
                            }
                        }, '-', {
                            xtype: 'button',
                            text: 'Delete',
                            disabled: true,
                            id: 'deleteButtonId',
                            iconCls: 'x-fa fa-trash',
                            listeners: {
                                click: function () {
                                    deleteWindow.show();
                                }
                            }
                        }]
                }]
            }]
        }],
        renderTo: Ext.getBody()
    });
});
