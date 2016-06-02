/*
ExtJS NumbersPanel Widget
Copyright (c) 2015 Sam
Contact:  https://github.com/kumar4747

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.
Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.
*/

Ext.define('SAM.samples.NumbersPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'numbersPanel',
    cls: 'numbersPanel',
    title : 'Numbers Panel - select the numbers of your wish',
    //closable: true,
    bodyPadding : 10,
    //closeAction : 'hide',
    config: {
        
    },
    pressedCls : 'pressed',
    selectedValue:null,
    listeners :{
        'afterrender': function (ctrl, eOpts) {
			
        }
    },
    refresh: function () {
        
    },
    initComponent: function () {
        var me = this, cmpObj,
        	arr_buttons = []; /*[ {text: "1"},{text: "2"}];*/

        for(var j = 0; j < 40; j++)
        {
            arr_buttons.push(
            {
                text: j+1,
                //ui: 'green-btn',
                margin : 3,
                // @override
                onMouseDown : function(e){
                    var btn = this,
                        //p = this.up(),
                        selNode = btn.text,
                        nplus = me.down('#nplus').getValue();
                    e.stopEvent(); // injected line here
                    if(nplus)
                    {
                        me.clearAllSelections();
                        me.selAllFromSelNode(selNode);
                        me.selectedValue = selNode+'+';
                    }
                    else
                    {
                        if(btn.hasUICls(me.pressedCls))
                            btn.removeClsWithUI(me.pressedCls);
                        else
                            btn.addClsWithUI(me.pressedCls);
                    }
                    //btn.doc.on('mouseup', btn.onMouseUp, btn);
                }
            });
        }

        me.items = [];
        var before_items = me.items.length;
        var k = 1;
        var cont1 = {
                        xtype : 'container',
                        items : []
                    }
        var cont2 = {
                        xtype : 'container',
                        items : []
                    }
        var cont3 = {
                        xtype : 'container',
                        items : []
                    }
        var cont4 = {
                        xtype : 'container',
                        items : []
                    }
        for (var i = 0; i < arr_buttons.length; i++)
        {
            arr_buttons[i].cls = "calc-buttons";
            arr_buttons[i].itemId= 'node'+arr_buttons[i].text;
            var btn = Ext.create('Ext.button.Button', arr_buttons[i]);
            if(i < 10)
                cont1.items.push(btn);
            else if(i >= 10 && i < 20)
                cont2.items.push(btn);
            else if(i >= 20 && i < 30)
                cont3.items.push(btn);
            else if(i >= 30 && i < 40)
                cont4.items.push(btn);
            //me.items.push(btn);
            //me.items[i+before_items].on('click', me.eventClickBtn,this, me);
        }
        me.items.push(cont1);
        me.items.push(cont2);
        me.items.push(cont3);
        me.items.push(cont4);

        var nplusCheckbox = {
            xtype : 'checkboxfield',
            boxLabel  : 'N+',
            //inputValue: '1',
            itemId        : 'nplus',
            listeners: {
                change: function(field, newValue, oldValue, eOpts){
                    me.clearAllSelections();
                }
            }
        }
        me.items.push(nplusCheckbox);
        me.callParent();
    },
    clearAllSelections : function()
    {
        var me = this;
        for(var i = 1; i <= 40; i++)
        {
            me.down('#node'+i).removeClsWithUI(me.pressedCls);
        }
    },
    selAllFromSelNode : function(selNode)
    {
        var me = this;
        for(var i = selNode; i <= 40; i++)
        {
            me.down('#node'+i).addClsWithUI(me.pressedCls);
        }
    },
    selAllFromUiNode : function(selNode)
    {
        var me = this;
        for(var i = selNode; i <= 40; i++)
        {
            var cmp = Ext.ComponentQuery.query("#node"+i)[0]
            cmp.addClsWithUI(me.pressedCls);
        }
    },
	onClose: function () {
		
    },
    log: function (message) {
        
    }
});