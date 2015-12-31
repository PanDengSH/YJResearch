/**
 * Created by PanDeng on 2015/12/27.
 */

NS_YuJian.questionGame.QuestionGameFacade = new Class({
    "initialize" : function()
    {
        this.questionGameView = new NS_YuJian.questionGame.QuestionGameView();
        this.questionProxy = new NS_YuJian.questionGame.QuestionProxy();
    },

    "initializeStart" : function()
    {


        this.questionGameView.initializeStart();
    }

    //"questionGameView" : function()
    //{
    //    return this.qgv;
    //},

    //"questionProxy" : function()
    //{
    //    return this.questionProxy;
    //}
});