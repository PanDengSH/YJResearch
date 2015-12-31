/**
 * Created by user on 2015/12/21.
 */

NS_YuJian.questionGame.ChoiceVO = new Class({
    "initialize" : function()
    {
        this.text = "";
        this.isRight = false;
        this.correctness = 0;
    },

    "initializeValue" : function(v1, v2, v3)
    {
        this.text = v1;
        //this.isRight = v2;
        this.correctness = v3;
    },

    "setRight" : function(value)
    {
        this.isRight = value;
    }
});