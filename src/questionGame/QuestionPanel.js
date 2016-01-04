/**
 * Created by PanDeng on 2015/12/27.
 */

NS_YuJian.questionGame.QuestionPanel = new Class({
    "initialize" : function()
    {
        var body = document.body;
        var theDIV = document.createElement("div");
        theDIV.id = "QuestionPanel_1";
        theDIV.className = "choiceContainer";
        body.appendChild( theDIV );

        var headIcon = document.createElement("img");
        headIcon.src = "";
        headIcon.width = 50;
        headIcon.height = 50;
        headIcon.alt = "无法加载";
        //headIcon.style.float = "left";
        theDIV.appendChild(headIcon);
        //可见性的相关设置
        //headIcon.style.visibility = "visible";
        //headIcon.style.visibility = "hidden";
        //headIcon.style.visibility = "collapse";


        var theQuestion = document.createElement("label");
        theQuestion.id = "TheQuestion";
        theQuestion.textContent = "我是问题文本";
        theQuestion.style.fontSize = "30";
        //theQuestion.style.float = "left";
        theDIV.appendChild(theQuestion);

        this.theDIV = theDIV;
        this.headIcon = headIcon;
        this.theQuestion = theQuestion;
    },

    "initializeStart" : function(imgURL)
    {
        this.headIcon.src = imgURL;
        this.updateQuestionText("30天真的可以改变自己吗？");
        //this.hide();
        //this.show();
    },

    "updateQuestionText" : function(qt)
    {
        this.theQuestion.textContent = qt;
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