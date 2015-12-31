/**
 * Created by user on 2015/12/21.
 */

NS_YuJian.questionGame.QuestionVO = new Class({
    initialize : function()
    {
        this.text = "";
        this.type = 0;
        this.choices = [];
    },

    initializeValue : function(v1, v2, v3)
    {
        this.text = v1;
        this.type = v2;
        this.choices = v3;
    },

    getRightChoice : function()
    {
        var rightChoice = [];
        var c;
        for(var i=0; i<this.choices.length; i++)
        {
            c = this.choices[i];
            if(c.isRight == 1)
            {
                rightChoice.push(c);
            }
        }

        if(rightChoice.length == 0)
        {
            rightChoice = null;
        }
        return rightChoice;
    }
});
