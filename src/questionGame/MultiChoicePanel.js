/**
 * Created by PanDeng on 2015/12/27.
 */

NS_YuJian.questionGame.MultiChoicePanel = new Class({
    "initialize" : function()
    {
        var body = document.body;
        var theDIV = document.createElement("div");
        theDIV.id = "MultiChoicePanel_1";
        theDIV.className = "choiceContainer";

        body.appendChild( theDIV );

        var theChoices = [];
        var label, checkboxButton;
        for(var i=0; i<10; i++)
        {
            theChoices.push(document.createElement("div"));
            theChoices[i].id = "MultiChoicePanelDIV_"+i;
            theChoices[i].className = "choiceContainer";
            theDIV.appendChild( theChoices[i] );

            label = document.createElement("label");
            theChoices[i].appendChild(label);
            label.textContent = "m选项_" + i;
            label.id = "MultiChoicePanelLabel_"+i;

            checkboxButton = document.createElement("input");
            checkboxButton.type = "checkbox";
            checkboxButton.name = theDIV.id;
            theChoices[i].appendChild(checkboxButton);
            checkboxButton.onclick = function(evt)
            {
                alert("checkboxButton: " + evt.target.parentNode.id);
            }
        }

        var commitButton = document.createElement("button");
        commitButton.innerText = "提交";
        theDIV.appendChild(commitButton);

        var addChoiceButton = document.createElement("button");
        addChoiceButton.innerText = "增加选项";
        theDIV.appendChild(addChoiceButton);

        var removeChoiceButton = document.createElement("button");
        removeChoiceButton.innerText = "减少选项";
        theDIV.appendChild(removeChoiceButton);

        this.theDIV = theDIV;
        this.theChoices = theChoices;
        this.commitButton = commitButton;
        this.addChoiceButton = addChoiceButton;
        this.removeChoiceButton = removeChoiceButton;

        this.commitButton.onclick = function ()
        {
            alert("commitButton");

            for(var i=0; i<theChoices.length; i++)
            {
                document.getElementById("MultiChoicePanelLabel_"+i).textContent = "newm选项_" + i;
            }
        };

        this.addChoiceButton.onclick = function ()
        {
            //alert("addChoiceButton");
            for(var i=0; i<theChoices.length; i++)
            {
                theDIV.appendChild(theChoices[i]);
            }

            theDIV.appendChild(commitButton);
            theDIV.appendChild(addChoiceButton);
            theDIV.appendChild(removeChoiceButton);
        };

        this.removeChoiceButton.onclick = function ()
        {
            //alert("removeChoiceButton");
            for(var i=0; i<theChoices.length; i++)
            {
                theDIV.removeChild(theChoices[i]);
            }
        };

        commitButton.addEventListener("click", function(){ alert("EVT commitButton"); }, false);
        addChoiceButton.addEventListener("click", function(){ alert("EVT addChoiceButton"); }, false);
        removeChoiceButton.addEventListener("click", function(){ alert("EVT removeChoiceButton"); }, false);
    },

    "initializeStart" : function()
    {

    },

    "clearPanel" : function()
    {

    },

    "setupQuestion" : function(vo)
    {

    },

    "commit" : function()
    {

    },

    "hide" : function()
    {
        document.body.removeChild(this.theDIV);
    },

    "show" : function()
    {
        document.body.appendChild(this.theDIV);
    }
});