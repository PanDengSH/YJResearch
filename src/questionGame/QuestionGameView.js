/**
 * Created by PanDeng on 2015/12/27.
 */

NS_YuJian.questionGame.QuestionGameView = new Class({
    "initialize" : function()
    {
        this.questionPanel = new NS_YuJian.questionGame.QuestionPanel();
        this.singleChoicePanel = new NS_YuJian.questionGame.SingleChoicePanel();
        this.multiChoicePanel = new NS_YuJian.questionGame.MultiChoicePanel();
    },

    "initializeStart" : function()
    {
        //var questionNumber = 0;
        //var qVO = ggm.qgf.questionProxy.questionList[questionNumber];
        //var questionHE = document.createElement("p");
        ////questionHE.innerText
        //questionHE.innerText = qVO.text + "  类型：" + (qVO.type == 0 ? "单选":"多选");
        //questionHE.style.backgroundColor = "#FFFF00";
        //document.body.appendChild(questionHE);
        //
        //var choiceNumber, i;
        //var choiceButton;
        //choiceNumber = qVO.choices.length;
        //for(i=0; i<choiceNumber; i++)
        //{
        //    choiceButton = document.createElement("button");
        //    choiceButton.innerText = qVO.choices[i].text;
        //    document.body.appendChild(choiceButton);
        //}
        //
        //console.log("QuestionGameView.initializeStart  " + window.ggm);


        this.questionPanel.initializeStart("../htmlTest/EMP弹.png");
        this.singleChoicePanel.initializeStart();
        this.multiChoicePanel.initializeStart();


        //var body = document.body;
        //body.removeChild(this.questionPanel.theDIV);
        //body.appendChild(this.questionPanel.theDIV);

        //var body = document.body;
        //body.removeChild(this.questionPanel.theDIV);
        //body.insertBefore(this.questionPanel.theDIV, this.singleChoicePanel.theDIV);
        //
        //body.removeChild(this.singleChoicePanel.theDIV);
        //body.appendChild(this.singleChoicePanel.theDIV);

        var body = document.body;
        body.appendChild(this.questionPanel.theDIV);

        var ndiv = document.createElement("hr");
        body.appendChild(ndiv);
        body.appendChild(this.singleChoicePanel.theDIV);


        var hideSingle = document.createElement("button");
        hideSingle.innerText = "隐藏单选";
        body.appendChild(hideSingle);

        var showSingle = document.createElement("button");
        showSingle.innerText = "显示单选";
        body.appendChild(showSingle);
    },

    "update" : function()
    {

    }
});