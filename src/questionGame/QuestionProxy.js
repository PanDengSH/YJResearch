/**
 * Created by user on 2015/12/21.
 */

NS_YuJian.questionGame.QuestionProxy = new Class({
    initialize :function()
    {
        this.questionList = null;
    },

    initializeQuestionList : function( vo )
    {
        var ChoiceVO = NS_YuJian.questionGame.ChoiceVO,
            QuestionVO = NS_YuJian.questionGame.QuestionVO;

        this.questionList = [];

        var questionNumber, i, choiceNumber, j, choiceList;
        questionNumber = vo.length;

        for(i=0; i<questionNumber; i++)
        {
            this.questionList.push( new QuestionVO() );

            choiceList = [];
            choiceNumber = vo[i].choices.length;
            for(j=0; j<choiceNumber; j++)
            {
                choiceList.push( new ChoiceVO() );
                choiceList[j].initializeValue(
                    vo[i].choices[j].choiceContent,
                    false,
                    vo[i].choices[j].correctness
                );
            }

            this.questionList[i].initializeValue( vo[i].questionName, vo[i].type, choiceList );
        }
    }
});